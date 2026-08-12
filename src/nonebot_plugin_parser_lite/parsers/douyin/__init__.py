from typing import ClassVar

from msgspec import convert

from ...utils.format import format_num
from ..base import (
    BaseParser,
    ContentItem,
    MatchWithParams,
    ParseException,
    Platform,
    PlatformEnum,
    handle,
)
from .aweme import Response


class DouyinParser(BaseParser):
    platform: ClassVar[Platform] = Platform(
        name=PlatformEnum.DOUYIN, display_name="抖音"
    )

    def __init__(self):
        super().__init__()
        self.httpx.headers.update(
            {
                "Origin": "https://open.douyin.com",
                "Referer": "https://open.douyin.com/",
            }
        )

    # https://v.douyin.com/_2ljF4AmKL8
    @handle("v.douyin", r"v\.douyin\.com/[a-zA-Z0-9_\-]+")
    @handle("jx.douyin", r"jx\.douyin\.com/[a-zA-Z0-9_\-]+")
    async def _parse_short_link(self, searched: MatchWithParams):
        url = f"https://{searched.url}"
        return await self.parse_with_redirect(url)

    # https://www.douyin.com/video/7521023890996514083
    # https://www.douyin.com/note/7469411074119322899
    # https://m.douyin.com/share/note/7591875747808560613
    @handle("douyin", r"douyin\.com/[a-z]+/(?P<vid>\d+)")
    @handle(
        "iesdouyin",
        r"iesdouyin\.com/share/[a-z]+/(?P<vid>\d+)",
    )
    @handle(
        "m.douyin",
        r"m\.douyin\.com/share/[a-z]+/(?P<vid>\d+)",
    )
    # https://jingxuan.douyin.com/m/video/7574300896016862490?app=yumme&utm_source=copy_link
    @handle(
        "jingxuan.douyin",
        r"jingxuan\.douyin.com/m/[a-z]+/(?P<vid>\d+)",
    )
    async def _parse_douyin(self, searched: MatchWithParams):
        vid = searched["vid"]
        return await self.parse_aweme(vid)

    async def parse_aweme(self, aweme_id: str):
        note = await self.httpx.get(
            "https://www.douyin.com/aweme/v1/web/aweme/detail/",
            params={"aweme_id": aweme_id, "aid": "6383"},
        )
        if not note.is_success:
            raise ParseException(f"解析抖音内容失败, 可能是作品已删除: {note.text}")

        aweme = convert(note.json(), Response).aweme_detail
        content: list[ContentItem] = aweme.content
        return self.result(
            author=self.create_author(
                name=aweme.author.nickname,
                avatar_url=aweme.author.avatar_thumb.url_list[0],
                description=aweme.author.signature,
                id=aweme.author.uid,
                location=aweme.region,
                ext_headers={"Referer": "https://www.douyin.com/"},
            ),
            content=content,
            stats=self.create_stats(
                like_count=format_num(aweme.stats.digg_count),
                comment_count=format_num(aweme.stats.comment_count),
                share_count=format_num(aweme.stats.share_count),
                collect_count=format_num(aweme.stats.collect_count),
            ),
            timestamp=aweme.create_time,
            url=aweme.share_url,
            embed_url=f"https://open.douyin.com/player/video?vid={aweme_id}&autoplay=1",
        )
