from typing import ClassVar

from ...utils.format import format_num
from ..base import (
    DOWNLOADER,
    BaseParser,
    MatchWithParams,
    Platform,
    PlatformEnum,
    handle,
)
from .topic import decoder as postDecoder


class LinuxDoParser(BaseParser):
    platform: ClassVar[Platform] = Platform(
        name=PlatformEnum.LINUXDO, display_name="LINUX DO"
    )

    @handle("linux.do", r"topic/(?P<topic_id>\d+)")
    async def parse_topic(self, searched: MatchWithParams):
        topic_id = searched["topic_id"]
        res = await DOWNLOADER.client.get(
            f"https://linux.do/t/topic/{topic_id}.json",
            use_curl_cffi=True,
            headers=self.headers,
        )
        post = postDecoder.decode(res.content)
        return self.result(
            author=self.create_author(
                name=post.detail.display_username or post.detail.username,
                avatar_url=post.detail.avatar_url,
                ext_headers={"Referer": "https://linux.do/"},
                use_curl_cffi=True,
            ),
            url=f"https://linux.do/t/topic/{post.id}",
            title=post.title,
            content=post.detail.content,
            comments=post.comment_list,
            stats=self.create_stats(
                like_count=format_num(post.like_count),
                view_count=format_num(post.views),
                comment_count=format_num(post.posts_count),
            ),
            timestamp=post.detail.timestamp,
        )
