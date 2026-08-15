from nonebot import get_driver, logger, require
from nonebot.plugin import PluginMetadata, inherit_supported_adapters

require("nonebot_plugin_alconna")
require("nonebot_plugin_uninfo")
require("nonebot_plugin_htmlrender")
require("nonebot_plugin_apscheduler")
require("nonebot_plugin_localstore")

from nonebot_plugin_apscheduler import scheduler

from .config import Config
from .matchers import clear_result_cache
from .utils.bilibili.cdn import load_cdn_domains, update_cdn_domains
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
        "version": "1.3.3",
        "plugin_type": "NORMAL",
    },
)


@scheduler.scheduled_job("interval", hours=2, id="parser-clean-local-cache")
async def clean_plugin_cache() -> None:
    """周期性清理过期缓存文件，并重置解析状态"""

    try:
        await CacheManager.clean_expired()
    except Exception as e:
        logger.exception(f"清理缓存文件时发生异常: {e!r}")

    clear_result_cache()


@scheduler.scheduled_job(
    "interval",
    hours=24,
    id="parser-update-bilibili-cdn",
)
async def update_bilibili_cdn() -> None:
    """刷新 B 站 CDN 地区列表"""
    try:
        await update_cdn_domains()
    except Exception as e:
        logger.warning(f"更新 B 站 CDN 列表失败，继续使用本地数据: {e}")


@get_driver().on_startup
async def initialize_bilibili_cdn() -> None:
    """启动时先加载快照，再尝试在线更新"""
    await load_cdn_domains()
    await update_bilibili_cdn()
