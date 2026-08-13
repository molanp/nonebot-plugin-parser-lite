from typing import ClassVar

from msgspec import convert
from nonebot.log import logger

from ...utils.format import format_num
from ..base import (
    BaseParser,
    ContentItem,
    MatchWithParams,
    ParseException,
    Platform,
    PlatformEnum,
    handle,
    pconfig,
)
from .aweme import Response
from .comment import decoder as commentDecoder


class DouyinParser(BaseParser):
    platform: ClassVar[Platform] = Platform(
        name=PlatformEnum.DOUYIN, display_name="抖音"
    )
    ttwid: str = ""

    def __init__(self):
        super().__init__()
        self.httpx.headers.update(
            {
                "Referer": "https://www.douyin.com/",
            }
        )

    async def ensure_ttwid(self):
        if self.ttwid:
            return
        resp = await self.httpx.post(
            "https://ttwid.bytedance.com/ttwid/union/register/",
            json={
                "region": "cn",
                "aid": 1768,
                "needFid": False,
                "service": "www.douyin.com",
                "migrate_info": {"ticket": "", "source": "node"},
                "cbUrlProtocol": "https",
                "union": True,
            },
        )
        resp.raise_for_status()
        ttwid = resp.cookies.get("ttwid", domain=".bytedance.com")
        if ttwid is None:
            raise ParseException(f"抖音 ttwid 注册成功但未返回 cookie: {resp.cookies}")
        self.ttwid = ttwid

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
        await self.ensure_ttwid()
        vid = searched["vid"]
        return await self.parse_aweme(vid)

    async def parse_aweme(self, aweme_id: str):
        note = await self.httpx.get(
            "https://www.douyin.com/aweme/v1/web/aweme/detail/",
            params={
                "aweme_id": aweme_id,
                "aid": "6383",
                "device_platform": "webapp",
                "channel": "channel_pc_web",
                "request_source": 0,
            },
            cookies={"ttwid": self.ttwid},
        )
        if not note.is_success:
            raise ParseException(f"解析抖音内容失败, 可能是作品已删除: {note.text}")

        try:
            resp = await self.httpx.get(
                "https://www.douyin.com/aweme/v1/web/comment/list/",
                params={
                    "device_platform": "webapp",
                    "aid": 6383,
                    "channel": "channel_pc_web",
                    "aweme_id": aweme_id,
                    "cursor": 0,
                    "count": pconfig.max_comments,
                    "msToken": "",
                    "X-Bogus": "",
                },
                cookies={"ttwid": self.ttwid},
            )
            comments = commentDecoder.decode(resp.content).comment_list
        except Exception:
            logger.exception(f"抖音获取评论失败, aweme_id: {aweme_id}")
            comments = []

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
            url=aweme.share_url.split("?")[0],
            comments=comments,
            embed_url=f"https://open.douyin.com/player/video?vid={aweme_id}&autoplay=1",
        )
