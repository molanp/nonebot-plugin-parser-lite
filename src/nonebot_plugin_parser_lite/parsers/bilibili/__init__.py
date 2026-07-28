import asyncio
import re
from typing import Any

from anyio import Path
from ...utils.log import logger

from ...constants import COMMON_HEADER, PlatformEnum
from ...creator import Creator
from ...data import ParseResult
from ...exception import ParseException, TipException
from ...config import pconfig
from ..base import BaseParser, MatchWithParams, ParamRule, ParamRules

platform_name = "bilibili"


class BilibiliParser(BaseParser):
    urls = [
        "bilibili.com/video/BV", "b23.tv/", "bilibili.com/bangumi/",
        "bilibili.com/live/", "t.bilibili.com/", "space.bilibili.com/",
        "bilibili.com/opus/", "bilibili.com/favlist/",
    ]
    platform = PlatformEnum.BILIBILI
