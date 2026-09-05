from enum import IntEnum

from .bilibili.main.community.reply.v1 import reply_pb2
from .client import GRPC_CLIENT
from .credential import Credential


class CommentResourceType(IntEnum):
    """
    资源类型枚举
    """

    VIDEO = 1
    """视频"""
    ARTICLE = 12
    """专栏"""
    DYNAMIC_DRAW = 11
    """画册（图文）"""
    DYNAMIC = 17
    """动态（画册也属于动态的一种，只不过画册还有一个专门的 ID）"""
    AUDIO = 14
    """音频"""
    AUDIO_LIST = 19
    """歌单"""
    CHEESE = 33
    """课程"""
    BLACK_ROOM = 6
    """小黑屋"""
    MANGA = 22
    """漫画"""
    ACTIVITY = 4
    """活动"""


async def get_comments(
    oid: int,
    type: CommentResourceType,
    credential: Credential | None = None,
) -> reply_pb2.MainListReply:
    """
    获取资源评论列表(wbi)

    :param oid: 资源 ID
    :param type_: 资源类枚举
    :param credential: 凭证, defaults to None
    :raises BiliHelperError: _description_
    :return: 调用 API 返回的结果, 未登录 3 , 登录 20, 现在不想写翻页
    """
    req = reply_pb2.MainListReq(
        oid=oid,
        type=type.value,
        cursor=reply_pb2.CursorReq(mode=reply_pb2.MAIN_LIST_HOT),
    )
    access_token = credential.access_token if credential else ""
    return await GRPC_CLIENT.request(
        "/bilibili.main.community.reply.v1.Reply/MainList",
        req,
        reply_pb2.MainListReply,
        access_token=access_token,
        user_mid=credential.mid if credential and access_token else None,
    )
