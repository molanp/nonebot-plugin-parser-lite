from datetime import datetime

from bs4 import BeautifulSoup
from bs4.element import NavigableString, Tag

from ...creator import Creator
from ...data import ContentItem


def parse_rich_content(html: str) -> list[ContentItem]:
    soup = BeautifulSoup(html.replace(r"\"", '"'), "html.parser")

    result: list[ContentItem] = []
    buffer: list[str] = []

    for item in _iter_media_and_text(soup):
        if isinstance(item, str):
            buffer.append(item)
        else:
            if buffer:
                text_block = "".join(buffer)
                lines = [line.rstrip() for line in text_block.splitlines()]
                if normalized := "\n".join(lines).strip():
                    result.append(normalized)
                buffer.clear()
            result.append(item)

    if buffer:
        text_block = "".join(buffer)
        lines = [line.rstrip() for line in text_block.splitlines()]
        if normalized := "\n".join(lines).strip():
            result.append(normalized)

    return result


def _iter_media_and_text(soup: BeautifulSoup):
    skip_parent: Tag | None = None
    for element in soup.descendants:
        if skip_parent:
            if element in skip_parent.descendants:
                continue
            else:
                skip_parent = None
        if isinstance(element, Tag):
            if element.name == "span" and (
                "filename" in (element.get("class") or [])
                or "informations" in (element.get("class") or [])
            ):
                skip_parent = element
                continue

            if element.name in {"p", "br"}:
                yield "\n"
                continue

            if element.name == "img":
                if src := element.get("src"):
                    src = str(src)
                    classes = element.get("class") or []
                    if "emoji" in classes:
                        yield Creator.sticker(
                            url=src,
                            desc=element.get("alt", None), # pyright: ignore[reportArgumentType]
                            size="small",
                        )
                    else:
                        yield Creator.image(url=src)

        elif isinstance(element, NavigableString):
            if text := str(element).strip():
                yield text


def parse_date(s: str) -> int:
    return int(datetime.strptime(s, "%Y-%m-%dT%H:%M:%S.%fZ").timestamp())
