"""插件对外接口"""

import asyncio
from typing import Optional, Dict, Any, List, Tuple
from re import Match
from pathlib import Path

from nonebot import logger

from .parsers.base import BaseParser
from .parsers.data import ParseResult, VideoContent, AudioContent
from .renders import get_renderer
from .helper import UniMessage, UniHelper
from .matchers import KEYWORD_PARSER_MAP, _RESULT_CACHE, _MSG_ID_RESULT_MAP


async def parse_url(url: str, send_message: bool = True) -> Optional[ParseResult]:
    """解析URL并可选发送消息
    
    Args:
        url: 要解析的URL
        send_message: 是否发送消息，默认为True
        
    Returns:
        解析结果，如果解析失败返回None
    """
    # 查找匹配的解析器
    parser: Optional[BaseParser] = None
    keyword: Optional[str] = None
    match_obj: Optional[Match] = None
    
    # 遍历所有解析器，查找匹配的URL
    for _keyword, _parser in KEYWORD_PARSER_MAP.items():
        try:
            _keyword_match, _match = _parser.search_url(url)
            parser = _parser
            keyword = _keyword_match
            match_obj = _match
            break
        except Exception:
            continue
    
    if not parser or not keyword or not match_obj:
        logger.warning(f"未找到匹配的解析器: {url}")
        return None
    
    # 解析URL
    try:
        result = await parser.parse(keyword, match_obj)
        
        # 缓存解析结果
        _RESULT_CACHE[url] = result
        
        if send_message:
            # 发送消息，使用接口解析的结果默认发送卡片和视频
            await _send_parse_result(result, url)
        
        return result
    except Exception as e:
        logger.error(f"解析URL失败: {e}")
        return None


async def _send_parse_result(result: ParseResult, cache_key: str) -> None:
    """发送解析结果，默认发送卡片和视频
    
    Args:
        result: 解析结果
        cache_key: 缓存键，用于关联消息ID
    """
    # 获取渲染器
    renderer = get_renderer(result.platform.name)
    
    try:
        # 渲染并发送消息
        async for message in renderer.render_messages(result):
            msg_sent = await message.send()
            
            # 保存消息ID与解析结果的关联
            if msg_sent:
                try:
                    # 尝试获取消息ID
                    msg_id = None
                    # 检查是否为Event类型
                    if hasattr(msg_sent, "get_event_name"):
                        from nonebot_plugin_alconna.uniseg import get_message_id
                        
                        try:
                            msg_id = get_message_id(msg_sent)  # type: ignore
                        except TypeError:
                            pass
                    # 尝试直接从对象获取id或message_id属性
                    if hasattr(msg_sent, "id"):
                        msg_id = str(msg_sent.id)  # type: ignore
                    elif hasattr(msg_sent, "message_id"):
                        msg_id = str(msg_sent.message_id)  # type: ignore
                    elif hasattr(msg_sent, "message_ids"):
                        # 处理可能返回多个消息ID的情况
                        msg_ids = getattr(msg_sent, "message_ids")
                        if msg_ids:
                            if isinstance(msg_ids, list):
                                for msg_id_info in msg_ids:
                                    if isinstance(msg_id_info, dict) and "message_id" in msg_id_info:
                                        msg_id = str(msg_id_info["message_id"])
                                        break
                            else:
                                msg_id = str(msg_ids)  # type: ignore
                    elif hasattr(msg_sent, "msg_ids"):
                        # 处理Receipt对象的msg_ids属性
                        receipt_msg_ids = getattr(msg_sent, "msg_ids")
                        if receipt_msg_ids:
                            if isinstance(receipt_msg_ids, list):
                                msg_id = str(receipt_msg_ids[0])  # type: ignore
                            else:
                                msg_id = str(receipt_msg_ids)  # type: ignore
                    
                    if msg_id:
                        _MSG_ID_RESULT_MAP[msg_id] = result
                        logger.debug(f"保存消息ID与解析结果的关联: msg_id={msg_id}, url={cache_key}")
                except Exception as e:
                    logger.debug(f"获取消息ID失败: {e}")
    except Exception as e:
        logger.error(f"渲染失败: {e}")
        await UniMessage(f"解析成功，但渲染失败: {e!s}").send()
    
    # 发送视频和音频（如果有）
    for media_type, media_item in result.media_contents:
        try:
            path = None
            if isinstance(media_item, Path):
                # 已经是 Path 类型，直接使用
                path = media_item
            else:
                # 是 MediaContent 类型，需要先获取 Path
                path = await media_item.get_path()
            
            if media_type == VideoContent:
                try:
                    # 直接发送视频
                    await UniMessage(UniHelper.video_seg(path)).send()
                    # 发送视频文件
                    await UniMessage(UniHelper.file_seg(path)).send()
                except Exception as e:
                    # 直接发送失败，尝试使用群文件发送
                    logger.debug(f"直接发送视频失败，尝试使用群文件发送: {e}")
                    await UniMessage(UniHelper.file_seg(path)).send()
            elif media_type == AudioContent:
                try:
                    # 直接发送音频
                    await UniMessage(UniHelper.record_seg(path)).send()
                    # 发送音频文件
                    await UniMessage(UniHelper.file_seg(path)).send()
                except Exception as e:
                    # 直接发送失败，尝试使用群文件发送
                    logger.debug(f"直接发送音频失败，尝试使用群文件发送: {e}")
                    await UniMessage(UniHelper.file_seg(path)).send()
        except Exception as e:
            logger.error(f"发送媒体失败: {e}")


# 导出函数
__all__ = [
    "parse_url",
]
