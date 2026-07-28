from logging import getLogger

from .env import IS_STANDALONE

if IS_STANDALONE:
    logger = getLogger("parser-lite")
else:
    from nonebot.log import logger as logger
