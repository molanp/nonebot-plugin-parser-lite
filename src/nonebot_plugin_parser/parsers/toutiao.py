import re
from typing import ClassVar
from re import Match

from nonebot import logger

from .base import (
    BaseParser,
    PlatformEnum,
    ParseException,
    handle,
)
from .data import Platform, MediaContent, VideoContent, ImageContent
from ..constants import COMMON_HEADER


class ToutiaoParser(BaseParser):
    # 平台信息
    platform: ClassVar[Platform] = Platform(name=PlatformEnum.TOUTIAO, display_name="今日头条")
    
    @handle("ixigua.com", r"https?://[^\s]*?(?:toutiao\.com|ixigua\.com)/(?:is|video)/[^\s/]+/?")
    @handle("toutiao.com", r"https?://[^\s]*?(?:toutiao\.com|ixigua\.com)/(?:is|video)/[^\s/]+/?")
    async def _parse_toutiao_share(self, searched: Match[str]):
        """解析今日头条分享链接"""
        share_url = searched.group(0)
        logger.debug(f"触发今日头条解析: {share_url}")
        
        from httpx import AsyncClient
        
        # 使用API解析
        try:
            headers = COMMON_HEADER.copy()
            headers.update({
                "Content-Type": "application/json",
                "User-Agent": "API-Client/1.0"
            })
            
            async with AsyncClient(headers=headers, verify=False, timeout=self.timeout) as client:
                api_url = "https://api.bugpk.com/api/toutiao"
                params = {
                    "url": share_url
                }
                resp = await client.get(api_url, params=params)
                resp.raise_for_status()
                data = resp.json()
                
                # 检查接口返回状态
                if data.get("code") != 200:
                    raise ParseException(f"今日头条接口返回错误: {data.get('msg')}")
                    
                video_data = data["data"]
                logger.info(f"今日头条解析成功: {video_data['title']} - {video_data['author']}")
                
                # 创建视频内容
                video_url = video_data["url"]
                if not video_url.startswith("http"):
                    raise ParseException("无效视频URL")
                    
                # 解析封面
                cover_url = video_data["cover"]
                
                # 创建视频内容
                video_content = self.create_video_content(
                    video_url,
                    cover_url,
                    0.0  # API没有返回时长
                )
                
                # 构建内容列表
                contents: list[MediaContent] = [video_content]
                
                # 构建额外信息
                extra = {
                    "info": f"作者: {video_data['author']}",
                    "type": "video",
                    "type_tag": "短视频",
                    "type_icon": "fa-video",
                }
                
                return self.result(
                    title=video_data["title"],
                    author=self.create_author(video_data["author"], video_data["avatar"]),
                    url=share_url,
                    text=video_data["description"],
                    contents=contents,
                    extra=extra,
                )
        except Exception as e:
            raise ParseException(f"今日头条解析失败: {e}")