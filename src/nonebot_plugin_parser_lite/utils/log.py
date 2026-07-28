"""Conditional logger: uses nonebot.logger or stdlib logging."""
from logging import getLogger

from ._flags import _STANDALONE

if _STANDALONE:
    logger = getLogger("parser-lite")
else:
    from nonebot import logger  # noqa: F401
