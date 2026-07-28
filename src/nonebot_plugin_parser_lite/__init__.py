from .utils._flags import _STANDALONE, _get_flag  # noqa: F401

if _STANDALONE:
    from logging import getLogger as _getLogger

    logger = _getLogger("parser-lite")
    PluginMetadata = None  # type: ignore
    inherit_supported_adapters = None  # type: ignore

    from apscheduler.schedulers.asyncio import AsyncIOScheduler

    scheduler = AsyncIOScheduler()
    scheduler.configure({"apscheduler.timezone": "Asia/Shanghai"})
    try:
        scheduler.start()
    except RuntimeError:
        pass  # no event loop yet — consumer calls scheduler.start() later

    def clear_result_cache() -> None:
        pass

    class BrowserManager:
        @staticmethod
        def clear_cache() -> None:
            pass

        @staticmethod
        def reconnect() -> None:
            pass

else:
    from nonebot import logger, require
    from nonebot.plugin import PluginMetadata, inherit_supported_adapters

    require("nonebot_plugin_alconna")
    require("nonebot_plugin_uninfo")
    require("nonebot_plugin_htmlrender")
    require("nonebot_plugin_apscheduler")
    require("nonebot_plugin_localstore")

    from nonebot_plugin_apscheduler import scheduler
    from .matchers import clear_result_cache
    from .utils.browser import BrowserManager

from .config import Config

from .utils.cache import CacheManager

__plugin_meta__ = PluginMetadata(
    name="链接分享解析 Lite 版",
    description="通用媒体链接分享解析",
    usage="发送支持平台的(BV号/链接/小程序/卡片)即可",
    type="application",
    homepage="https://github.com/sokoko-org/nonebot-plugin-parser-lite",
    config=Config,
    supported_adapters=inherit_supported_adapters(
        "nonebot_plugin_alconna", "nonebot_plugin_uninfo"
    ),
    extra={
        "author": "molanp",
        "homepage": "https://github.com/sokoko-org/nonebot-plugin-parser-lite",
        "version": "1.3.1",
        "plugin_type": "NORMAL",
    },
) if not _STANDALONE else None


if scheduler is not None:

    @scheduler.scheduled_job("interval", hours=2, id="parser-clean-local-cache")
    async def clean_plugin_cache() -> None:
        """周期性清理过期缓存文件，并重置解析状态。"""

        try:
            await CacheManager.clean_expired()
        except Exception as e:
            logger.exception(f"清理缓存文件时发生异常: {e!r}")

        clear_result_cache()
        BrowserManager.clear_cache()
        BrowserManager.reconnect()
