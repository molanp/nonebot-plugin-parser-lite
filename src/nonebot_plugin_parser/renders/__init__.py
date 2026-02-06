from .base import BaseRenderer
from .htmlrender import HtmlRenderer

RENDERER = HtmlRenderer()


def get_renderer(platform: str) -> BaseRenderer:
    """根据平台名称获取对应的 Renderer 类"""
    return RENDERER

