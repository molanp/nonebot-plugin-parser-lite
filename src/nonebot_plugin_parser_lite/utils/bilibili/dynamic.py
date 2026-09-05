from .bilibili.app.dynamic.v2 import dynamic_pb2
from .client import GRPC_CLIENT
from .credential import Credential
from .opus import Opus


class Dynamic:
    """
    动态类
    """

    detail: dynamic_pb2.DynDetailReply | None = None
    _is_article: bool = False

    def __init__(self, dynamic_id: str, credential: Credential | None = None) -> None:
        self.dynamic_id = dynamic_id
        self.credential = credential

    async def get_info(self) -> dynamic_pb2.DynDetailReply:
        """
        获取动态信息

        :return: 调用 API 返回的结果
        """
        if self.detail is None:
            req = dynamic_pb2.DynDetailReq(dynamic_id=self.dynamic_id)
            access_token = self.credential.access_token if self.credential else ""
            self.detail = await GRPC_CLIENT.request(
                "/bilibili.app.dynamic.v2.Dynamic/DynDetail",
                req,
                dynamic_pb2.DynDetailReply,
                access_token=access_token,
                user_mid=self.credential.mid
                if self.credential and access_token
                else None,
            )
            self._is_article = self.detail.HasField("item") and (
                dynamic_pb2.DynamicType.Name(self.detail.item.card_type) == "article"
            )
        return self.detail

    async def is_article(self) -> bool:
        """
        判断动态是否为专栏发布动态

        :return: 是否为专栏
        """
        if self.detail is None:
            await self.get_info()
        return self._is_article

    def turn_to_opus(self) -> Opus:
        """
        对图文动态，转换为图文

        :return: 图文对象
        """
        return Opus(oid=self.dynamic_id, credential=self.credential)
