import re
from ...utils.log import logger
from ...constants import PlatformEnum
from ...creator import Creator
from ...data import ParseResult
from ..base import BaseParser, MatchWithParams, ParamRule, ParamRules


class CoolapkParser(BaseParser):
    urls = ["coolapk.com/"]
    platform = PlatformEnum.COOLAPK
