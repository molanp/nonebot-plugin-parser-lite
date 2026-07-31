import asyncio
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager, suppress
import os
import platform
import socket
import tempfile
from typing import Any, Literal, Self

from anyio import Path, fail_after, sleep
from anyio import TimeoutError as AnyioTimeoutError
import httpx
from nonebot import get_driver
from nonebot.log import logger
from playwright.async_api import (
    Browser,
    BrowserContext,
    Page,
    Playwright,
    async_playwright,
)

from ..config import pconfig

system = platform.system()
driver = get_driver()

WaitUntil = Literal["commit", "domcontentloaded", "load", "networkidle"]

_CDP_READY_TIMEOUT = 30.0
_DEFAULT_PAGE_TIMEOUT_MS = 30_000
_PROCESS_STOP_TIMEOUT = 5.0


def _find_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        s.listen(1)
        return int(s.getsockname()[1])


async def _rmtree(path: Path) -> None:
    if not await path.exists():
        return
    if await path.is_file() or await path.is_symlink():
        await path.unlink(missing_ok=True)
        return
    async for child in path.iterdir():
        await _rmtree(child)
    with suppress(OSError):
        await path.rmdir()


async def _which(name: str) -> str:
    path_env = os.environ.get("PATH", "")
    exts = [""]
    if system == "Windows":
        exts = os.environ.get("PATHEXT", ".EXE;.BAT;.CMD").split(";")

    for directory in path_env.split(os.pathsep):
        if not directory:
            continue
        base = Path(directory)
        for ext in exts:
            candidate = base / f"{name}{ext}"
            if await candidate.is_file():
                return str(candidate)
    return ""


async def _run_browser(
    port: int, browser_path: str, args: list[str]
) -> asyncio.subprocess.Process:
    path = Path(browser_path)
    exe = str(path / "chrome") if await path.is_dir() else str(path)
    try:
        return await asyncio.create_subprocess_exec(
            exe,
            f"--remote-debugging-port={port}",
            *args,
            stdout=asyncio.subprocess.DEVNULL,
            stderr=asyncio.subprocess.DEVNULL,
        )
    except FileNotFoundError as e:
        raise FileNotFoundError(f"浏览器可执行文件不存在: {exe}") from e


async def _wait_cdp_ready(ip: str, port: int) -> None:
    endpoint = f"http://{ip}:{port}/json"
    try:
        with fail_after(_CDP_READY_TIMEOUT):
            async with httpx.AsyncClient(trust_env=False, timeout=2.0) as client:
                while True:
                    with suppress(Exception):
                        resp = await client.get(endpoint)
                        if resp.status_code == 200:
                            tabs = resp.json()
                            if any(t.get("type") in ("page", "webview") for t in tabs):
                                return
                    await sleep(0.2)
    except AnyioTimeoutError as e:
        raise RuntimeError(f"连接浏览器 CDP 超时: {ip}:{port}") from e


class BrowserTab:
    def __init__(
        self, page: Page, *, default_timeout_ms: float = _DEFAULT_PAGE_TIMEOUT_MS
    ) -> None:
        self._page = page
        self._page.set_default_timeout(default_timeout_ms)

    @property
    def raw(self) -> Page:
        return self._page

    async def goto(
        self,
        url: str,
        *,
        wait_until: WaitUntil = "domcontentloaded",
    ) -> None:
        await self._page.goto(url, wait_until=wait_until)

    async def content(self) -> str:
        return await self._page.content()

    async def close(self) -> None:
        with suppress(Exception):
            await self._page.close()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(self, *exc: object) -> None:
        await self.close()


class BrowserManager:
    browser: Browser | None = None
    _playwright: Playwright | None = None
    _process: asyncio.subprocess.Process | None = None
    _context: BrowserContext | None = None
    _cdp_endpoint: str | None = None
    _user_data_dir: Path | None = None
    _browser_path: str | None = None
    _init_lock: asyncio.Lock = asyncio.Lock()
    _last_used: float | None = None
    _idle_timeout: float = 60 * 30
    _idle_task: asyncio.Task[None] | None = None

    @staticmethod
    async def _find_browser_from_system() -> str:
        if system == "Darwin":
            for path in (
                "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
                "/Applications/Chromium.app/Contents/MacOS/Chromium",
            ):
                if await Path(path).is_file():
                    return path
        elif system == "Windows":
            import winreg

            paths = (
                r"SOFTWARE\Clients\StartMenuInternet\Google Chrome\DefaultIcon",
                r"SOFTWARE\Clients\StartMenuInternet\Microsoft Edge\DefaultIcon",
            )
            for reg_path in paths:
                with suppress(FileNotFoundError, OSError):
                    key = winreg.OpenKey(winreg.HKEY_LOCAL_MACHINE, reg_path)
                    value, _ = winreg.QueryValueEx(key, "")
                    candidate = value.split(",")[0].strip().strip('"')
                    if candidate and await Path(candidate).is_file():
                        return candidate

            app_paths = (
                r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe",
                r"SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\msedge.exe",
            )
            for sub in app_paths:
                for root in (winreg.HKEY_CURRENT_USER, winreg.HKEY_LOCAL_MACHINE):
                    with suppress(FileNotFoundError, OSError):
                        key = winreg.OpenKey(root, sub)
                        value, _ = winreg.QueryValueEx(key, "")
                        if value and await Path(value).is_file():
                            return value
        else:
            for name in (
                "google-chrome",
                "google-chrome-stable",
                "chromium",
                "chromium-browser",
                "chrome",
            ):
                if found := await _which(name):
                    return found
            for path in (
                "/usr/bin/google-chrome",
                "/opt/google/chrome/google-chrome",
                "/usr/bin/chromium",
                "/usr/bin/chromium-browser",
            ):
                if await Path(path).is_file():
                    return path
        return ""

    @staticmethod
    async def _find_browser_from_playwright() -> str:
        if browser_path := os.environ.get("PLAYWRIGHT_BROWSERS_PATH"):
            base = Path(browser_path)
        else:
            home = await Path.home()
            if system == "Darwin":
                base = home / "Library" / "Caches" / "ms-playwright"
            elif system == "Windows":
                base = home / "AppData" / "Local" / "ms-playwright"
            else:
                base = home / ".cache" / "ms-playwright"
        if not await base.is_dir():
            return ""

        chromium_dirs = sorted([p async for p in base.glob("chromium-*")], reverse=True)
        for chromium_dir in chromium_dirs:
            if not await chromium_dir.is_dir():
                continue
            if system == "Windows":
                candidates = [
                    p async for p in chromium_dir.glob("chrome-win*/chrome.exe")
                ]
            elif system == "Darwin":
                candidates = [
                    p / "Chromium.app" / "Contents" / "MacOS" / "Chromium"
                    async for p in chromium_dir.glob("chrome-mac*")
                ]
            else:
                candidates = [
                    p async for p in chromium_dir.glob("chrome-linux*/chrome")
                ]
            for exe in candidates:
                if await exe.is_file():
                    return str(await exe.resolve())
        return ""

    @staticmethod
    async def _find_browser_from_puppeteer() -> str:
        home = await Path.home()
        if system == "Darwin":
            bases = [home / "Library" / "Caches" / "puppeteer"]
        elif system == "Windows":
            bases = [home / "AppData" / "Local" / "puppeteer"]
        else:
            bases = [home / ".cache" / "puppeteer"]

        target = "chrome.exe" if system == "Windows" else "chrome"
        for base in bases:
            if not await base.is_dir():
                continue
            async for sub in base.rglob(target):
                if await sub.is_file():
                    return str(sub)
            if system == "Darwin":
                async for app in base.rglob("Chromium.app"):
                    exe = app / "Contents" / "MacOS" / "Chromium"
                    if await exe.is_file():
                        return str(await exe.resolve())
        return ""

    @classmethod
    async def _resolve_browser_path(cls) -> str:
        if cls._browser_path:
            return cls._browser_path

        if pconfig.browser_path:
            path = pconfig.browser_path
        elif path := await cls._find_browser_from_system():
            pass
        elif path := await cls._find_browser_from_playwright():
            pass
        elif not (path := await cls._find_browser_from_puppeteer()):
            raise RuntimeError(
                "无法找到可启动的浏览器，请在配置中设置 plite_browser_path"
            )

        cls._browser_path = path
        logger.info(f"Resolved browser path: {path}")
        return path

    @classmethod
    def _build_launch_args(cls, user_data_dir: Path) -> list[str]:
        args = [
            f"--user-data-dir={user_data_dir}",
            "--no-first-run",
            "--no-default-browser-check",
            "--disable-popup-blocking",
            "--disable-dev-shm-usage",
            "--mute-audio",
            "--no-sandbox",
            "--remote-allow-origins=*",
            "--guest",
            "--disable-extensions",
            "--disable-background-networking",
            "--disable-features=Translate,MediaRouter",
        ]
        if pconfig.headless:
            args.extend(("--headless=new", "--disable-gpu"))
        return args

    @classmethod
    def _touch(cls) -> None:
        cls._last_used = asyncio.get_running_loop().time()

    @classmethod
    async def _idle_watcher(cls) -> None:
        try:
            while cls.browser is not None:
                await sleep(cls._idle_timeout / 2)
                if cls.browser is None or cls._last_used is None:
                    continue
                now = asyncio.get_running_loop().time()
                if now - cls._last_used > cls._idle_timeout:
                    logger.info(
                        f"Browser idle for {int(now - cls._last_used)}s, auto quitting."
                    )
                    cls._idle_task = None
                    await cls.quit()
                    break
        finally:
            if cls._idle_task is asyncio.current_task():
                cls._idle_task = None

    @classmethod
    async def _kill_process(cls) -> None:
        proc = cls._process
        cls._process = None
        if proc is None or proc.returncode is not None:
            return

        with suppress(ProcessLookupError, OSError):
            proc.terminate()
        with suppress(AnyioTimeoutError):
            with fail_after(_PROCESS_STOP_TIMEOUT):
                await proc.wait()
            return
        with suppress(ProcessLookupError, OSError):
            proc.kill()
        with suppress(Exception):
            with fail_after(_PROCESS_STOP_TIMEOUT):
                await proc.wait()

    @classmethod
    async def _connect_cdp(cls, endpoint: str) -> Browser:
        assert cls._playwright is not None
        browser = await cls._playwright.chromium.connect_over_cdp(endpoint)
        cls.browser = browser
        cls._cdp_endpoint = endpoint

        if browser.contexts:
            cls._context = browser.contexts[0]
        else:
            cls._context = await browser.new_context()
        return browser

    @classmethod
    async def _ensure_context(cls) -> BrowserContext:
        assert cls.browser is not None
        context = cls._context
        if context is not None and context in cls.browser.contexts:
            return context
        if cls.browser.contexts:
            cls._context = cls.browser.contexts[0]
            return cls._context
        ctx = await cls.browser.new_context()
        cls._context = ctx
        return ctx

    @classmethod
    async def _create_page(cls, **page_kwargs: Any) -> Page:
        """创建新标签页"""
        assert cls.browser is not None
        context = await cls._ensure_context()
        known_pages = {id(p) for ctx in cls.browser.contexts for p in ctx.pages}

        # Playwright API
        try:
            return await context.new_page(**page_kwargs)
        except Exception as exc:
            logger.warning(f"context.new_page failed: {exc!r}")

        # CDP Target.createTarget
        try:
            session = await cls.browser.new_browser_cdp_session()
            try:
                result = await session.send(
                    "Target.createTarget",
                    {"url": "", "newWindow": False, "background": False},
                )
                target_id = result.get("targetId")
            finally:
                with suppress(Exception):
                    await session.detach()

            with fail_after(5):
                while True:
                    for ctx in cls.browser.contexts:
                        for page in ctx.pages:
                            if id(page) not in known_pages:
                                cls._context = ctx
                                return page
                    await sleep(0.05)
            logger.warning(
                f"Target.createTarget ok but page not found (targetId={target_id!r})"
            )
        except Exception as exc:
            logger.warning(f"Target.createTarget failed: {exc!r}")

        seed = next((ctx.pages[0] for ctx in cls.browser.contexts if ctx.pages), None)
        if seed is None:
            # 无初始页，再试一次 new_page
            try:
                return await context.new_page(**page_kwargs)
            except Exception as exc:
                raise RuntimeError(
                    "Failed to create page: no seed page for JS fallback"
                ) from exc

        known_pages = {id(p) for ctx in cls.browser.contexts for p in ctx.pages}
        try:
            async with seed.expect_popup(timeout=5000) as popup_info:
                await seed.evaluate("window.open('about:blank', '_blank')")
            page = await popup_info.value
            cls._context = page.context
            return page
        except Exception as exc:
            logger.warning(f"JS window.open via expect_popup failed: {exc!r}")

        # expect_popup 失败时，轮询新出现的 page
        try:
            await seed.evaluate("window.open('about:blank', '_blank')")
            with fail_after(5):
                while True:
                    for ctx in cls.browser.contexts:
                        for page in ctx.pages:
                            if id(page) not in known_pages:
                                cls._context = ctx
                                return page
                    await sleep(0.05)
        except Exception as exc:
            logger.warning(f"JS window.open poll failed: {exc!r}")

        # 复用已有 page 兜底
        for ctx in cls.browser.contexts:
            if ctx.pages:
                cls._context = ctx
                logger.warning("Reusing existing page as last resort")
                return ctx.pages[0]

        raise RuntimeError("Failed to create page via Playwright / CDP / JS")

    @classmethod
    async def ensure_started(cls) -> None:
        if cls.browser is not None and cls.browser.is_connected():
            cls._touch()
            return
        async with cls._init_lock:
            if cls.browser is not None and cls.browser.is_connected():
                cls._touch()
                return
            if cls.browser is not None:
                with suppress(Exception):
                    await cls.browser.close()
                cls.browser = None
                cls._context = None
            await cls.start()

    @classmethod
    async def start(cls) -> None:
        if cls.browser is not None and cls.browser.is_connected():
            return

        browser_path = await cls._resolve_browser_path()
        port = _find_free_port()
        user_data_dir = (
            Path(tempfile.gettempdir()) / "parser-lite-browser" / "userData" / str(port)
        )
        await user_data_dir.mkdir(parents=True, exist_ok=True)
        cls._user_data_dir = user_data_dir

        args = cls._build_launch_args(user_data_dir)
        logger.info(f"Launching browser from {browser_path} (CDP port={port})")
        cls._process = await _run_browser(port, browser_path, args)

        endpoint = f"http://127.0.0.1:{port}"
        try:
            await _wait_cdp_ready("127.0.0.1", port)
            if cls._playwright is None:
                cls._playwright = await async_playwright().start()
            await cls._connect_cdp(endpoint)
        except Exception:
            await cls._kill_process()
            if cls._user_data_dir is not None:
                with suppress(Exception):
                    await _rmtree(cls._user_data_dir)
                cls._user_data_dir = None
            raise

        cls._touch()
        if cls._idle_task is None or cls._idle_task.done():
            cls._idle_task = asyncio.create_task(cls._idle_watcher())

    @classmethod
    async def new_tab(
        cls,
        url: str | None = None,
        *,
        wait_until: WaitUntil = "domcontentloaded",
        **page_kwargs: Any,
    ) -> BrowserTab:
        await cls.ensure_started()
        assert cls.browser is not None
        cls._touch()

        page = await cls._create_page(**page_kwargs)
        tab = BrowserTab(page)
        if url:
            await tab.goto(url, wait_until=wait_until)
        return tab

    @classmethod
    @asynccontextmanager
    async def open_tab(
        cls,
        url: str | None = None,
        *,
        wait_until: WaitUntil = "domcontentloaded",
        **page_kwargs: Any,
    ) -> AsyncGenerator[BrowserTab]:
        tab = await cls.new_tab(url, wait_until=wait_until, **page_kwargs)
        try:
            yield tab
        finally:
            await tab.close()

    @classmethod
    async def clear_cache(cls, *, cookies: bool = True) -> None:
        """
        清理缓存

        :param cookies: 是否清理 Cookies, defaults to True
        """
        if cls.browser is None or not cls.browser.is_connected():
            return
        try:
            session = await cls.browser.new_browser_cdp_session()
            try:
                await session.send("Network.clearBrowserCache")
                if cookies:
                    await session.send("Network.clearBrowserCookies")
            finally:
                with suppress(Exception):
                    await session.detach()
        except Exception:
            logger.exception("Error while clearing browser cache")

    @classmethod
    async def reconnect(cls) -> None:
        if not cls._cdp_endpoint or cls._playwright is None:
            return

        endpoint = cls._cdp_endpoint
        if cls.browser is not None:
            with suppress(Exception):
                await cls.browser.close()
            cls.browser = None
            cls._context = None

        try:
            await cls._connect_cdp(endpoint)
            cls._touch()
            logger.info(f"Reconnected to browser via CDP ({endpoint})")
        except Exception:
            logger.exception("CDP reconnect failed, restarting browser")
            await cls.quit()
            await cls.start()

    @classmethod
    async def quit(cls, *, del_data: bool = True) -> None:
        if cls.browser is None and cls._process is None and cls._playwright is None:
            return

        logger.info("Closing browser launched by Parser Lite")
        try:
            if cls.browser is not None:
                with suppress(Exception):
                    session = await cls.browser.new_browser_cdp_session()
                    with suppress(Exception):
                        await session.send("Browser.close")
                    with suppress(Exception):
                        await session.detach()
                with suppress(Exception):
                    await cls.browser.close()
        except Exception:
            logger.exception("Error while quitting browser")
        finally:
            cls.browser = None
            cls._context = None
            cls._cdp_endpoint = None
            cls._last_used = None
            await cls._kill_process()

            if cls._playwright is not None:
                with suppress(Exception):
                    await cls._playwright.stop()
                cls._playwright = None

            if cls._idle_task is not None:
                task = cls._idle_task
                cls._idle_task = None
                if task is not asyncio.current_task():
                    task.cancel()
                    with suppress(asyncio.CancelledError, Exception):
                        await task

            if del_data and cls._user_data_dir is not None:
                with suppress(Exception):
                    await _rmtree(cls._user_data_dir)
                cls._user_data_dir = None


@driver.on_shutdown
async def _close_browser() -> None:
    await BrowserManager.quit()
