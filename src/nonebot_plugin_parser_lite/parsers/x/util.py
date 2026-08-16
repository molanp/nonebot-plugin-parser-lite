from dataclasses import dataclass

from msgspec import DecodeError
from msgspec.json import decode

from .model import CardValue, TweetCard, UnifiedCard


@dataclass(frozen=True, slots=True)
class LinkCardData:
    url: str
    title: str
    site_name: str | None = None
    description: str | None = None
    preview_url: str | None = None


def _binding_values(card: TweetCard) -> dict[str, CardValue]:
    if card.legacy is None:
        return {}
    return {item.key: item.value for item in card.legacy.binding_values if item.key}


def _decode_unified(card: TweetCard) -> UnifiedCard | None:
    for key, value in _binding_values(card).items():
        if key != "unified_card" or value.string_value is None:
            continue
        raw = value.string_value
        if not raw:
            return None
        try:
            return decode(raw, type=UnifiedCard)
        except (DecodeError, TypeError):
            return None
    return None


def _unified_data(card: UnifiedCard) -> LinkCardData | None:
    url_data = next(
        (
            destination.data.url_data
            for destination in card.destination_objects.values()
            if destination.type == "browser" and destination.data.url_data
        ),
        None,
    )
    if not url_data or not url_data.url:
        return None

    title = site_name = preview_url = None
    for component_name in card.components:
        component = card.component_objects.get(component_name)
        if component is None:
            continue
        data = component.data
        if component.type == "details":
            title = data.title.content if data.title and data.title.content else title
            site_name = (
                data.subtitle.content
                if data.subtitle and data.subtitle.content
                else site_name
            )
        elif component.type == "media" and data.id:
            media = card.media_entities.get(data.id)
            if media and media.media_url_https:
                preview_url = media.media_url_https

    return LinkCardData(
        url=url_data.url,
        title=title or site_name or url_data.url,
        site_name=site_name or url_data.vanity,
        preview_url=preview_url,
    )


def _legacy_data(card: TweetCard) -> LinkCardData | None:
    if card.legacy is None:
        return None
    values = _binding_values(card)

    def string_value(key: str) -> str | None:
        value = values.get(key)
        text = value.string_value if value else None
        return text if isinstance(text, str) and text else None

    def image_url(*keys: str) -> str | None:
        for key in keys:
            value = values.get(key)
            image = value.image_value if value else None
            url = image.url if image else None
            if isinstance(url, str) and url:
                return url
        return None

    url = string_value("card_url") or card.legacy.url
    if not url:
        return None
    return LinkCardData(
        url=url,
        title=string_value("title") or url,
        site_name=string_value("vanity_url") or string_value("domain"),
        description=string_value("description"),
        preview_url=image_url(
            "thumbnail_image_large",
            "thumbnail_image",
            "player_image_large",
            "player_image",
            "photo_image_full_size_large",
            "photo_image_full_size",
        ),
    )


def parse_link_card(card: TweetCard | None) -> LinkCardData | None:
    if card is None:
        return None
    unified = _decode_unified(card)
    return _unified_data(unified) if unified is not None else _legacy_data(card)
