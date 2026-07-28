import base64
from collections.abc import AsyncGenerator, Awaitable, Callable
from datetime import datetime
from io import BytesIO
from itertools import chain
import os as _os_impl
from typing import Any, ClassVar, Literal, cast
import uuid

from anyio import Path
import qrcode

_STANDALONE: bool = bool(_os_impl.environ.get("PARSER_LITE_STANDALONE"))

if _STANDALONE:
    from logging import getLogger
    logger = getLogger("parser_lite.render")
else:
    from nonebot import logger
    from nonebot_plugin_htmlrender import template_to_pic

from ..config import _nickname, gconfig, pconfig
from ..data import (
    AudioContent,
    GraphicContent,
    ImageContent,
    LinkContent,
    LivePhotoContent,
    MediaContent,
    ParseResult,
    StickerContent,
    VideoContent,
)
from ..exception import (
    DownloadException,
    DurationLimitException,
    SizeLimitException,
)
from ..helper import ForwardNodeInner, UniHelper, UniMessage
from ..utils.cache import CacheManager

PLACEHOLDER_IMAGE = (
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
)
SPLIT_THRESHOLD = pconfig.forward_text_threshold
MAX_FORWARD_TEXT_LEN = 30000
MAX_FORWARD_NODES = 90

IS_DEBUG = gconfig.log_level in ["DEBUG", "TRACE", 10, 5] if gconfig else False

Theme = Literal["light", "dark"]


def get_theme() -> Theme:
    start, end = pconfig.day_range_minutes
    now = datetime.now()
    current = now.hour * 60 + now.minute
    if start == end:
        in_day = False
    elif start < end:
        in_day = start <= current < end
    else:
        in_day = current >= start or current < end
    return "light" if in_day else "dark"


def split_text_by_length_with_punct(text: str, max_len: int) -> list[str]:
    if max_len <= 0 or len(text) <= max_len:
        return [text]
    puncts = "。！？!?；;，,、…"
    result: list[str] = []
    start = 0
    length = len(text)
    while start < length:
        end = min(start + max_len, length)
        segment = text[start:end]
        if end == length:
            result.append(segment)
            break
        cut_pos = next(
            (i + 1 for i in range(len(segment) - 1, -1, -1) if segment[i] in puncts),
            -1,
        )
        if cut_pos <= 0:
            result.append(segment)
            start = end
        else:
            result.append(segment[:cut_pos])
            start += cut_pos
    return [seg for seg in result if seg]


async def safe_src(
    obj: Any, method: str = "get_path", *, return_none_on_fail: bool = False
) -> str | None:
    try:
        if not hasattr(obj, method):
            logger.warning(f"对象 {type(obj).__name__} 不存在方法 '{method}'")
            return None if return_none_on_fail else PLACEHOLDER_IMAGE
        attr = getattr(obj, method)
        if not callable(attr):
            return None if return_none_on_fail else PLACEHOLDER_IMAGE
        result = attr()
        if isinstance(result, type(None)):
            return None if return_none_on_fail else PLACEHOLDER_IMAGE
        if asyncio.iscoroutine(result):
            result = await result
        if hasattr(result, "as_uri"):
            return result.as_uri()
        return str(result) if result else None
    except Exception:
        return None if return_none_on_fail else PLACEHOLDER_IMAGE


class Renderer:
    templates_dir: ClassVar[Path] = Path(__file__).parent / "templates"

    async def render_messages(self, result: ParseResult) -> UniMessage[Any]:
        try:
            image_seg = await self.cache_or_render_image(result)
        except Exception as e:
            logger.exception(f"获取图片路径失败: {e!r}")
            image_seg = None
        msg = UniMessage(image_seg or "图片渲染失败")
        if pconfig.append_url:
            urls = (result.display_url, result.repost_display_url)
            msg += "\n".join(url for url in urls if url)
        return msg

    async def send_content(
        self, result: ParseResult
    ) -> AsyncGenerator[UniMessage[Any], None]:
        failed_count = 0
        repost_medias = result.repost.content if result.repost else []
        media_contents = [
            cont
            for cont in chain(result.content, repost_medias)
            if isinstance(cont, MediaContent) and cont.need_send
        ]
        for cont in media_contents:
            try:
                async for msg in self.__handle_immediate_media(cont):
                    yield msg
            except SizeLimitException:
                yield UniMessage(
                    f"媒体太大啦，还是去{result.platform.display_name}看看吧~"
                )
                continue
            except DurationLimitException:
                yield UniMessage(
                    f"媒体太长啦，还是去{result.platform.display_name}看看吧~"
                )
                continue
            except DownloadException as e:
                failed_count += 1
                logger.exception(f"{cont.__class__.__name__} 下载失败: {e!r}")
                continue

        ordered_segs = await self.__build_forward_segs(result)
        if ordered_segs:
            processed_segs: list[ForwardNodeInner] = []
            total_plain_len = 0
            node_count = 0
            for seg in ordered_segs:
                node_count += 1
                if isinstance(seg, str):
                    seg_len = len(seg)
                    total_plain_len += seg_len
                    if seg_len > SPLIT_THRESHOLD:
                        parts = split_text_by_length_with_punct(seg, SPLIT_THRESHOLD)
                        for part in parts:
                            if not part:
                                continue
                            processed_segs.append(part)
                    else:
                        processed_segs.append(seg)
                else:
                    processed_segs.append(seg)

            need_forward = (
                pconfig.need_forward_contents
                or total_plain_len > SPLIT_THRESHOLD
                or node_count > 4
            )

            if not need_forward:
                yield UniMessage(processed_segs)
            else:
                current_chunk: list[ForwardNodeInner] = []
                current_text_len = 0
                current_nodes = 0

                def flush_chunk() -> UniMessage[Any] | None:
                    nonlocal current_chunk, current_text_len, current_nodes
                    if not current_chunk:
                        return None
                    msg = UniMessage(UniHelper.construct_forward_message(current_chunk))
                    current_chunk.clear()
                    current_text_len = 0
                    current_nodes = 0
                    return msg

                for seg in processed_segs:
                    seg_text_len = len(seg) if isinstance(seg, str) else 0
                    if current_chunk and (
                        current_text_len + seg_text_len > MAX_FORWARD_TEXT_LEN
                        or current_nodes + 1 > MAX_FORWARD_NODES
                    ):
                        msg = flush_chunk()
                        if msg is not None:
                            yield msg

                    current_chunk.append(seg)
                    current_text_len += seg_text_len
                    current_nodes += 1

                last_msg = flush_chunk()
                if last_msg is not None:
                    yield last_msg

        if failed_count > 0:
            message = f"{failed_count} 项媒体下载失败"
            yield UniMessage(message)
            logger.warning(message)

    async def __handle_immediate_media(
        self, cont: MediaContent
    ) -> AsyncGenerator[UniMessage[Any], None]:
        if not isinstance(cont, (VideoContent, AudioContent)):
            return
        if cont.duration > pconfig.duration_maximum:
            raise DurationLimitException(cont.duration)

        path = await cont.get_path()
        if (isinstance(cont, VideoContent) and pconfig.need_upload_video) or (
            not isinstance(cont, VideoContent)
            and isinstance(cont, AudioContent)
            and pconfig.need_upload_audio
        ):
            yield UniMessage(await UniHelper.file_seg(path))
        elif isinstance(cont, VideoContent):
            yield UniMessage(
                await UniHelper.video_seg(
                    file=path, thumbnail=await cont.get_cover_path()
                )
            )
        elif isinstance(cont, AudioContent):
            yield UniMessage(await UniHelper.record_seg(path))

    async def __build_forward_segs(
        self,
        result: ParseResult,
    ) -> list[ForwardNodeInner]:
        async def build_nodes(pr: ParseResult) -> list[ForwardNodeInner]:
            author_name = pr.author.name
            nodes: list[ForwardNodeInner] = []
            text_buffer: list[str] = []

            async def flush_text() -> None:
                nonlocal text_buffer
                if text_buffer:
                    text = "\n".join(text_buffer).strip()
                    if text:
                        nodes.append(f"{author_name}：{text}")
                    text_buffer = []

            async def append_media(cont: MediaContent) -> None:
                try:
                    if isinstance(cont, VideoContent):
                        path = await cont.get_cover_path()
                        if path:
                            nodes.append(await UniHelper.img_seg(file=path))
                        return
                    if isinstance(cont, ImageContent):
                        path = await cont.get_path()
                        nodes.append(await UniHelper.img_seg(path))
                        return
                    if isinstance(cont, GraphicContent):
                        path = await cont.get_path()
                        seg: ForwardNodeInner = await UniHelper.img_seg(path)
                        if cont.alt:
                            seg = seg + cont.alt
                        nodes.append(seg)
                        return
                    if isinstance(cont, LivePhotoContent):
                        if pconfig.live_photo:
                            live_path = await cont.get_live()
                            nodes.append(
                                await UniHelper.video_seg(
                                    file=live_path, thumbnail=await cont.get_base()
                                )
                            )
                        else:
                            base_path = await cont.get_base()
                            live_path = await cont.get_path()
                            nodes.append(await UniHelper.img_seg(base_path))
                            nodes.append(
                                await UniHelper.video_seg(
                                    file=live_path, thumbnail=base_path
                                )
                            )
                        return
                except Exception as e:
                    logger.warning(f"构建转发媒体片段失败: {type(cont).__name__}: {e}")
                    nodes.append(f"[媒体加载失败：{type(cont).__name__}]")

            for item in pr.content:
                if isinstance(item, str):
                    if text := item.strip():
                        text_buffer.append(text)
                elif isinstance(item, StickerContent):
                    text_buffer.append(item.desc or "[表情]")
                elif isinstance(item, MediaContent) and item.need_send:
                    await flush_text()
                    await append_media(item)
                elif isinstance(item, LinkContent):
                    text_buffer.append(item.url)
                else:
                    continue

            await flush_text()
            return nodes

        ordered: list[ForwardNodeInner] = []
        ordered.extend(await build_nodes(result))
        repost = result.repost
        if not repost:
            return ordered
        ordered.append(">>>>>原帖<<<<<")
        ordered.extend(await build_nodes(repost))
        return ordered

    async def render_image(self, result: ParseResult, *, theme: Theme) -> bytes:
        if _STANDALONE:
            raise RuntimeError(
                "render_image requires nonebot_plugin_htmlrender. "
                "Use a standalone renderer instead."
            )
        template_data = await self.resolve_parse_result(result)

        template_name = "default.html.jinja"
        if result.platform:
            music_platforms = ["kugou", "netease", "kuwo", "qsmusic"]
            platform_name = result.platform.name.lower()
            if platform_name in music_platforms:
                template_name = "music.html.jinja"
            else:
                file_name = f"{platform_name}.html.jinja"
                if await (self.templates_dir / file_name).exists():
                    template_name = file_name

        if IS_DEBUG:
            from jinja2 import Environment, FileSystemLoader
            env = Environment(
                loader=FileSystemLoader(self.templates_dir),
                enable_async=True,
            )
            env.filters["safe_src"] = safe_src
            template = env.get_template(template_name)
            render_path = (
                self.templates_dir.parent.parent
                / f"{datetime.now().strftime('%Y-%m-%d-%H%M%S')}.html"
            )
            await render_path.write_text(
                await template.render_async(result=template_data, theme=theme),
                encoding="utf8",
            )
            logger.info(f"已生成调试 HTML: {render_path}")

        return await template_to_pic(
            template_path=str(self.templates_dir),
            template_name=template_name,
            templates={
                "result": template_data,
                "theme": theme,
            },
            pages={
                "viewport": {"width": 620, "height": 100},
                "base_url": f"file://{self.templates_dir}",
            },
            filters={"safe_src": safe_src},
            type="jpeg",
            quality=85,
        )

    async def resolve_parse_result(self, result: ParseResult) -> dict[str, Any]:
        data: dict[str, Any] = {
            "title": result.title,
            "formatted_datetime": result.formatted_datetime,
            "extra": result.extra,
            "platform": {
                "display_name": result.platform.display_name,
                "name": result.platform.name,
                "logo_path": await safe_src(result.platform, "get_logo_path"),
            },
            "content": result.content,
            "cover_path": await safe_src(result, "get_cover_path"),
            "stats": result.stats,
            "comments": result.comments[: pconfig.max_comments],
            "author": {
                "name": result.author.name,
                "id": result.author.id,
                "avatar_path": await safe_src(result.author, "get_avatar_path"),
            },
            "ai_summary": result.ai_summary,
            "rendering_time": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "bot_name": _nickname,
        }
        if result.repost:
            data["repost"] = await self.resolve_parse_result(result.repost)
        if pconfig.append_qrcode:
            qr = qrcode.QRCode(
                version=1,
                error_correction=1,
                box_size=10,
                border=1,
            )
            qr.add_data(result.url)
            qr.make(fit=True)
            img = qr.make_image(fill_color="black", back_color="white")
            buffer = BytesIO()
            img.save(buffer, format="PNG")
            buffer.seek(0)
            img_base64 = base64.b64encode(buffer.getvalue()).decode("utf-8")
            data["qrcode_path"] = f"data:image/png;base64,{img_base64}"
        return data

    async def cache_or_render_image(self, result: ParseResult):
        theme = get_theme()
        cache_key = f"{theme}:{result.url}"
        file_name = f"{uuid.uuid5(uuid.NAMESPACE_URL, cache_key)}.jpeg"
        cache_dir = await CacheManager.ensure_dir(CacheManager.RENDER)
        image_path = cache_dir / file_name
        if await image_path.exists():
            result.render_image = image_path
        else:
            image_raw = await self.render_image(result, theme=theme)
            await image_path.write_bytes(image_raw)
            result.render_image = image_path
            if pconfig.use_base64:
                return await UniHelper.img_seg(image_raw)
        if (await image_path.stat()).st_size >= 5 * 1024 * 1024:
            return await UniHelper.file_seg(image_path)
        return await UniHelper.img_seg(image_path)


RENDERER = Renderer()
