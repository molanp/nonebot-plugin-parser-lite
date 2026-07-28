import os

_STANDALONE: bool = bool(os.environ.get("PARSER_LITE_STANDALONE"))

# ═══ 修改: 仅在非独立模式下 require 依赖插件 ═══
if _STANDALONE:
    # 独立模式: 全部 NoneBot 插件可选
    _Scheduler = None
else:
    from nonebot import logger, require
    from nonebot.plugin import PluginMetadata, inherit_supported_adapters

    require("nonebot_plugin_alconna")
    require("nonebot_plugin_uninfo")
    require("nonebot_plugin_htmlrender")
    require("nonebot_plugin_apscheduler")
    require("nonebot_plugin_localstore")

    from nonebot_plugin_apscheduler import scheduler as _Scheduler

from .config import Config

if not _STANDALONE:
    from .matchers import clear_result_cache
    from .utils.browser import BrowserManager

from .utils.cache import CacheManager

if _STANDALONE:
    __plugin_meta__ = None
else:
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
            "version": "1.3.0",
            "plugin_type": "NORMAL",
        },
    )


if _Scheduler is not None:
    @_Scheduler.scheduled_job("interval", hours=2, id="parser-clean-local-cache")
    async def clean_plugin_cache() -> None:
        try:
            await CacheManager.clean_expired()
        except Exception as e:
            logger.exception(f"清理缓存文件时发生异常: {e!r}")
        if not _STANDALONE:
            clear_result_cache()
            BrowserManager.clear_cache()
            BrowserManager.reconnect()
