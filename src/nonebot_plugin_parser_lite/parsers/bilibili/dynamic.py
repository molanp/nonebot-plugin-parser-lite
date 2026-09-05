from collections.abc import Iterable

from ...creator import Creator
from ...data import ContentItem, ParseResult
from ...utils.bilibili.bilibili.app.dynamic.v2 import dynamic_pb2
from ...utils.bilibili.bilibili.app.dynamic.v2.dynamic_pb2 import (
    DescType,
    DynDetailReply,
)
from ...utils.format import format_num


def _description_items(module_desc: dynamic_pb2.ModuleDesc) -> list[ContentItem]:
    items: list[ContentItem] = []
    for desc in module_desc.desc:
        if desc.type == DescType.desc_type_emoji:
            if url := desc.uri or desc.icon_url:
                items.append(
                    Creator.sticker(
                        url=url,
                        size="small" if desc.emoji_size == 1 else "medium",
                        desc=desc.text or None,
                    )
                )
                continue
        if desc.text:
            items.append(desc.text)

    return items or ([module_desc.text] if module_desc.text else [])


def _apply_stat(result: ParseResult, stat: dynamic_pb2.ModuleStat) -> None:
    if stat.repost:
        result.stats.share_count = format_num(stat.repost)
    if stat.like:
        result.stats.like_count = format_num(stat.like)
    if stat.reply:
        result.stats.comment_count = format_num(stat.reply)


def _video_url(bvid: str, avid: int) -> str | None:
    if bvid:
        return f"https://www.bilibili.com/video/{bvid}"
    return f"https://www.bilibili.com/video/av{avid}" if avid else None


def _append_archive(result: ParseResult, archive: dynamic_pb2.MdlDynArchive) -> None:
    if archive.title and result.title is None:
        result.title = archive.title
    if archive.jump_url.startswith("http"):
        result.url = archive.jump_url
    elif archive_url := _video_url(archive.bvid, archive.avid):
        result.url = archive_url
    if archive.cover:
        result.content.append(Creator.graphic(url=archive.cover))


def _text_node_items(
    nodes: Iterable[dynamic_pb2.TextNode],
) -> list[ContentItem]:
    """按 TextNode oneof 顺序渲染段落文本和表情"""
    items: list[ContentItem] = []
    text_buffer: list[str] = []

    def flush() -> None:
        if text_buffer:
            items.append("".join(text_buffer))
            text_buffer.clear()

    for node in nodes:
        kind = node.WhichOneof("text")
        if kind == "emote":
            flush()
            emote = node.emote
            if emote.emote_url:
                desc = emote.raw_text.words if emote.HasField("raw_text") else None
                items.append(Creator.sticker(emote.emote_url, "small", desc))
        elif kind == "word":
            if node.word.words:
                text_buffer.append(node.word.words)
        elif kind == "link":
            text_buffer.append(node.link.show_text or node.link.link)
        elif node.raw_text:
            text_buffer.append(node.raw_text)
    flush()
    return items


def _append_paragraph(
    result: ParseResult, module_paragraph: dynamic_pb2.ModuleParagraph
) -> None:
    if not module_paragraph.HasField("paragraph"):
        return
    paragraph = module_paragraph.paragraph
    content_type = paragraph.WhichOneof("content")
    if content_type == "text":
        result.content.extend(_text_node_items(paragraph.text.nodes))
    elif content_type == "pic":
        if paragraph.pic.HasField("pics"):
            for item in paragraph.pic.pics.items:
                if item.src:
                    result.content.append(Creator.image(url=item.src))


def _append_opus_summary(
    result: ParseResult, summary: dynamic_pb2.ModuleOpusSummary
) -> None:
    for paragraph in (summary.title, summary.summary):
        if paragraph and paragraph.WhichOneof("content") == "text":
            result.content.extend(_text_node_items(paragraph.text.nodes))
    for item in summary.covers:
        if item.src:
            result.content.append(Creator.image(url=item.src))


def _append_dynamic_payload(
    result: ParseResult,
    module_dynamic: dynamic_pb2.ModuleDynamic,
    seen: set[int],
) -> None:
    dynamic_type = module_dynamic.WhichOneof("module_item")
    if dynamic_type is None:
        return

    if dynamic_type == "dyn_forward":
        payload = module_dynamic.dyn_forward
        if not payload.HasField("item"):
            return

        repost = ParseResult(
            platform=result.platform,
            author=Creator.author(name=""),
            url="",
            content=[],
        )
        _build_item(repost, payload.item, seen)
        result.repost = repost
        if result.title is None:
            result.title = "转发动态"
        return

    if dynamic_type == "dyn_archive":
        _append_archive(result, module_dynamic.dyn_archive)
    elif dynamic_type == "dyn_pgc":
        payload = module_dynamic.dyn_pgc
        if payload.title and result.title is None:
            result.title = payload.title
        if payload.cover:
            result.content.append(Creator.image(url=payload.cover))
    elif dynamic_type == "dyn_draw":
        for item in module_dynamic.dyn_draw.items:
            if item.src:
                result.content.append(Creator.image(url=item.src))
    elif dynamic_type == "dyn_article":
        payload = module_dynamic.dyn_article
        if payload.title and result.title is None:
            result.title = payload.title
        if payload.desc:
            result.content.append(payload.desc)
        for cover in payload.covers:
            if cover:
                result.content.append(Creator.image(url=cover))
    elif dynamic_type == "dyn_common":
        payload = module_dynamic.dyn_common
        if payload.title and result.title is None:
            result.title = payload.title
        if payload.desc:
            result.content.append(payload.desc)
        if payload.cover:
            result.content.append(Creator.image(url=payload.cover))
    elif dynamic_type == "dyn_common_live":
        payload = module_dynamic.dyn_common_live
        if payload.title and result.title is None:
            result.title = payload.title
        if payload.uri.startswith("http"):
            result.url = payload.uri
        elif payload.id:
            result.url = f"https://live.bilibili.com/{payload.id}"
        if payload.cover:
            result.content.append(Creator.graphic(url=payload.cover))
    elif dynamic_type == "dyn_music":
        payload = module_dynamic.dyn_music
        if payload.title and result.title is None:
            result.title = payload.title
        if payload.cover:
            result.content.append(Creator.image(url=payload.cover))


def _build_item(
    result: ParseResult, item: dynamic_pb2.DynamicItem, seen: set[int]
) -> None:
    item_id = id(item)
    if item_id in seen:
        return
    seen.add(item_id)

    if item.HasField("extend"):
        extend = item.extend
        if extend.card_url.startswith("http"):
            result.url = extend.card_url
        elif extend.dyn_id_str:
            result.url = f"https://t.bilibili.com/{extend.dyn_id_str}"

    for module in item.modules:
        module_item = module.WhichOneof("module_item")
        if module_item == "module_author":
            author = module.module_author
            result.author = Creator.author(
                name=author.author.name,
                avatar_url=author.author.face,
                id=str(author.mid),
                avatar_cache_key=f"bilibili:{author.mid}",
            )
        elif module_item == "module_author_forward":
            author = module.module_author_forward
            name = "".join(title.text for title in author.title if title.text)
            result.author = Creator.author(
                name=name.removeprefix("@"),
                avatar_url=author.face_url,
                id=str(author.uid),
                avatar_cache_key=f"bilibili:{author.uid}",
            )
        elif module_item == "module_desc":
            result.content.extend(_description_items(module.module_desc))
        elif module_item == "module_dynamic":
            _append_dynamic_payload(result, module.module_dynamic, seen)
        elif module_item == "module_stat":
            _apply_stat(result, module.module_stat)
        elif module_item == "module_stat_forward":
            _apply_stat(result, module.module_stat_forward)
        elif module_item == "module_buttom":
            bottom = module.module_buttom
            if bottom.HasField("module_stat"):
                _apply_stat(result, bottom.module_stat)
        elif module_item == "module_opus_summary":
            _append_opus_summary(result, module.module_opus_summary)
        elif module_item == "module_paragraph":
            _append_paragraph(result, module.module_paragraph)


def build_dynamic(result: ParseResult, dyn: DynDetailReply) -> ParseResult:
    """Append a dynamic protobuf response to an existing parse result."""
    if dyn.HasField("item"):
        _build_item(result, dyn.item, set())
    return result
