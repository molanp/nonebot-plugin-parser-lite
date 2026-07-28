import re
from ...utils.log import logger
from ...constants import PlatformEnum
from ...creator import Creator
from ...data import ParseResult
from ..base import BaseParser, MatchWithParams, ParamRule, ParamRules


class HupuParser(BaseParser):
    urls = ["hupu.com/"]
    platform = PlatformEnum.HUPU
