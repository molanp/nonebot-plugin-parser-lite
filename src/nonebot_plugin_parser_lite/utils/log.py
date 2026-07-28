"""Conditional logger: uses nonebot.logger or stdlib logging."""
import os
from logging import getLogger

_STANDALONE = os.environ.get("PARSER_LITE_STANDALONE", "").strip().lower() in {"1", "true", "yes"}

if _STANDALONE:
    logger = getLogger("parser-lite")
else:
    from nonebot import logger  # noqa: F401
