"""Small Playwright runtime shared by parsing and rendering."""

from __future__ import annotations

import asyncio
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager, suppress
from typing import Any, Literal, Self

from playwright.async_api import (
    Browser,
    BrowserContext,
    Page,
    Playwright,
    async_playwright,
)

from ..config import pconfig
from .log import logger

WaitUntil = Literal["commit", "domcontentloaded", "load", "networkidle"]
ImageType = Literal["jpeg", "png"]
_DEFAULT_TIMEOUT_MS = 30_000


class BrowserTab:
    def __init__(self, context: BrowserContext, page: Page) -> None:
        self._context = context
        self._page = page
        page.set_default_timeout(_DEFAULT_TIMEOUT_MS)

    @property
    def raw(self) -> Page:
        return self._page

    async def goto(
        self, url: str, *, wait_until: WaitUntil = "domcontentloaded"
    ) -> None:
        await self._page.goto(url, wait_until=wait_until)

    async def content(self) -> str:
        return await self._page.content()

    async def close(self) -> None:
        with suppress(Exception):
            await self._context.close()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(self, *exc: object) -> None:
        await self.close()


class BrowserManager:
    browser: Browser | None = None
    _playwright: Playwright | None = None
    _start_lock = asyncio.Lock()

    @classmethod
    async def ensure_started(cls) -> None:
        if cls.browser is not None and cls.browser.is_connected():
            return
        async with cls._start_lock:
            if cls.browser is not None and cls.browser.is_connected():
                return
            await cls.quit()
            cls._playwright = await async_playwright().start()
            launch: dict[str, Any] = {"headless": pconfig.headless}
            if pconfig.browser_path:
                launch["executable_path"] = pconfig.browser_path
            cls.browser = await cls._playwright.chromium.launch(**launch)

    @classmethod
    async def new_tab(
        cls,
        url: str | None = None,
        *,
        wait_until: WaitUntil = "domcontentloaded",
        **context_kwargs: Any,
    ) -> BrowserTab:
        await cls.ensure_started()
        assert cls.browser is not None
        context = await cls.browser.new_context(**context_kwargs)
        try:
            page = await context.new_page()
            tab = BrowserTab(context, page)
            if url:
                await tab.goto(url, wait_until=wait_until)
            return tab
        except Exception:
            await context.close()
            raise

    @classmethod
    @asynccontextmanager
    async def open_tab(
        cls,
        url: str | None = None,
        *,
        wait_until: WaitUntil = "domcontentloaded",
        **context_kwargs: Any,
    ) -> AsyncGenerator[BrowserTab]:
        tab = await cls.new_tab(url, wait_until=wait_until, **context_kwargs)
        try:
            yield tab
        finally:
            await tab.close()

    @classmethod
    async def screenshot(
        cls,
        *,
        html: str,
        template_path: str,
        wait: int = 0,
        type: ImageType = "png",
        quality: int | None = None,
        device_scale_factor: float = 2,
        screenshot_timeout: float | None = _DEFAULT_TIMEOUT_MS,
        full_page: bool = True,
        **context_kwargs: Any,
    ) -> bytes:
        if not template_path.startswith("file:"):
            raise ValueError("template_path 必须是 file:// URL")
        context_kwargs["device_scale_factor"] = device_scale_factor
        async with cls.open_tab(**context_kwargs) as tab:
            page = tab.raw
            page.on(
                "console",
                lambda message: logger.debug("浏览器控制台: %s", message.text),
            )
            await page.goto(template_path)
            await page.set_content(html, wait_until="networkidle")
            await page.wait_for_timeout(wait)
            options: dict[str, Any] = {
                "full_page": full_page,
                "type": type,
                "timeout": screenshot_timeout,
            }
            if quality is not None:
                options["quality"] = quality
            return await page.screenshot(**options)

    @classmethod
    async def clear_cache(cls, *, cookies: bool = True) -> None:
        # Every operation uses a temporary context, so no persistent cache remains.
        return None

    @classmethod
    async def reconnect(cls) -> None:
        if cls.browser is None or not cls.browser.is_connected():
            await cls.ensure_started()

    @classmethod
    async def quit(cls) -> None:
        browser, cls.browser = cls.browser, None
        playwright, cls._playwright = cls._playwright, None
        if browser is not None:
            with suppress(Exception):
                await browser.close()
        if playwright is not None:
            with suppress(Exception):
                await playwright.stop()
