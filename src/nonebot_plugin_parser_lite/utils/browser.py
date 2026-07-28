"""使用 DrissionPage 启动浏览器，优先使用系统/Playwright/Puppeteer 已安装的内核."""

import asyncio
import contextlib
import os as _os_impl
import platform

from anyio import Path
from DrissionPage import Chromium, ChromiumOptions
from DrissionPage._units.listener import DataPacket as DataPacket

_STANDALONE: bool = bool(_os_impl.environ.get("PARSER_LITE_STANDALONE"))

if _STANDALONE:
    driver = None
    from logging import getLogger
    logger = getLogger("parser_lite.browser")
else:
    from nonebot import get_driver
    from nonebot.log import logger
    driver = get_driver()

from ..config import pconfig

system = platform.system()


class BrowserManager:
    BROWSER: Chromium | None = None
    _init_lock: asyncio.Lock = asyncio.Lock()
    _last_used: float | None = None
    _idle_timeout: float = 60 * 30
    """浏览器空闲超时时间(s)"""
    _idle_task: asyncio.Task | None = None

    @classmethod
    async def _find_browser_from_system(cls) -> str:
        if system == "Darwin":
            candidates = [
                "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
                "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
            ]
        elif system == "Windows":
            candidates = [
                r"C:\Program Files\Google\Chrome\Application\chrome.exe",
                r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
            ]
        else:
            candidates = []

        for c in candidates:
            if await Path(c).exists():
                return c
        raise FileNotFoundError("找不到系统浏览器")

    @classmethod
    async def _find_browser_from_playwright(cls) -> str:
        try:
            from playwright.sync_api import sync_playwright
            with sync_playwright() as p:
                browser = p.chromium.launch(headless=True)
                browser.close()
        except Exception:
            pass

        import glob
        if system == "Windows":
            cache_root = Path(_os_impl.path.expanduser("~/.cache/ms-playwright"))
        else:
            cache_root = Path.home() / ".cache" / "ms-playwright"

        candidates = []
        for browser_dir in glob.glob(str(cache_root / "chromium-*")):
            candidates.append(Path(browser_dir))

        if candidates:
            browser_path = (
                candidates[0] / "chrome-win" / "chrome.exe"
                if system == "Windows"
                else candidates[0] / "chrome-linux" / "chrome"
            )
            if await browser_path.exists():
                return str(browser_path)
        raise FileNotFoundError("找不到 Playwright 浏览器")

    @classmethod
    async def _find_browser_from_puppeteer(cls) -> str:
        import glob
        cache_root = Path.home() / ".cache" / "puppeteer"
        candidates = []
        for browser_dir in glob.glob(str(cache_root / "chrome" / "*")):
            candidates.append(Path(browser_dir))

        if candidates:
            browser_path = (
                candidates[0] / "chrome.exe"
                if system == "Windows"
                else candidates[0] / "chrome"
            )
            if await browser_path.exists():
                return str(browser_path)
        raise FileNotFoundError("找不到 Puppeteer 浏览器")

    @classmethod
    async def _resolve_browser_path(cls) -> str:
        if pconfig.browser_path:
            return pconfig.browser_path
        try:
            return await cls._find_browser_from_system()
        except FileNotFoundError:
            pass
        try:
            return await cls._find_browser_from_playwright()
        except FileNotFoundError:
            pass
        try:
            return await cls._find_browser_from_puppeteer()
        except FileNotFoundError:
            pass
        raise FileNotFoundError("找不到可用浏览器")

    @classmethod
    def _touch(cls) -> None:
        import time
        cls._last_used = time.time()

    @classmethod
    async def _idle_watcher(cls) -> None:
        import time
        while True:
            await asyncio.sleep(60)
            if cls._last_used and time.time() - cls._last_used > cls._idle_timeout:
                logger.info("浏览器空闲超时，自动关闭")
                cls.quit()
                return

    @classmethod
    async def start(cls) -> None:
        async with cls._init_lock:
            if cls.BROWSER is not None:
                cls._touch()
                return

            browser_path = await cls._resolve_browser_path()

            options = ChromiumOptions()
            options.set_argument("--no-sandbox")
            options.set_argument("--disable-gpu")
            if pconfig.headless:
                options.set_argument("--headless")
            options.set_argument("--guest")
            options.set_argument("--mute-audio")
            options.set_argument("--disable-dev-shm-usage")

            cls.BROWSER = Chromium(addr_or_opts=options)
            cls._touch()

            if cls._idle_task is not None:
                cls._idle_task.cancel()
            cls._idle_task = asyncio.create_task(cls._idle_watcher())

    @classmethod
    def reconnect(cls) -> None:
        if cls.BROWSER is not None:
            try:
                cls.BROWSER.connect()
            except Exception:
                pass

    @classmethod
    def clear_cache(cls) -> None:
        if cls.BROWSER is not None:
            try:
                cls.BROWSER.clear_cache()
            except Exception:
                pass

    @classmethod
    async def ensure_started(cls) -> None:
        if cls.BROWSER is None:
            await cls.start()

    @classmethod
    async def new_tab(cls, *args, **kwargs):
        await cls.ensure_started()
        cls._touch()
        return cls.BROWSER.new_tab(*args, **kwargs)

    @classmethod
    def quit(cls) -> None:
        if cls.BROWSER is None:
            return
        logger.info("Closing browser launched by Parser Lite")
        try:
            cls.BROWSER.quit(del_data=True)
        except Exception:
            logger.exception("Error while quitting browser")
        finally:
            cls.BROWSER = None
            cls._last_used = None
            if cls._idle_task is not None:
                cls._idle_task.cancel()
                cls._idle_task = None


if driver is not None:

    @driver.on_shutdown
    def close_browser():
        BrowserManager.quit()
