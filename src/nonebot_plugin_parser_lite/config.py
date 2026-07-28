import os as _os
from anyio import Path
from pydantic import BaseModel

from .constants import PlatformEnum
from .utils.bilibili.video import BiliVideoCodecs, BiliVideoQuality

_STANDALONE: bool = bool(_os.environ.get("PARSER_LITE_STANDALONE"))


def parse_hm_to_minutes(value: str) -> int:
    text = value.strip()
    parts = text.split(":")
    if len(parts) != 2:
        raise ValueError(f"时间格式错误，应为 h:m，收到: {value!r}")
    try:
        hour = int(parts[0])
        minute = int(parts[1])
    except ValueError as e:
        raise ValueError(f"时间格式错误，应为 h:m，收到: {value!r}") from e
    if not (0 <= hour <= 23 and 0 <= minute <= 59):
        raise ValueError(f"时间超出有效范围 (0:00-23:59)，收到: {value!r}")
    return hour * 60 + minute


class Config(BaseModel):
    plite_bili_ck: str | None = None
    plite_need_upload: bool = False
    plite_need_upload_audio: bool = False
    plite_need_upload_video: bool = False
    plite_use_base64: bool = False
    plite_max_size: int = 90
    plite_duration_maximum: int = 480
    plite_append_url: bool = False
    plite_append_qrcode: bool = False
    plite_disabled_platforms: list[PlatformEnum] = []
    plite_blacklist_users: list[str] = []
    plite_bili_video_codes: list[BiliVideoCodecs] = [
        BiliVideoCodecs.AVC, BiliVideoCodecs.AV1,
        BiliVideoCodecs.HEV, BiliVideoCodecs.UNKNOWN,
    ]
    plite_bili_video_quality: BiliVideoQuality = BiliVideoQuality._1080P
    plite_need_forward_contents: bool = True
    plite_lazy_download: bool = False
    plite_lazy_download_tip: bool = False
    plite_lazy_download_timeout: int = 30
    plite_download_command: list[str] = ["xz", "下载"]
    plite_browser_path: str = ""
    plite_live_photo: bool = True
    plite_headless: bool = False
    plite_max_comments: int = 5
    plite_forward_text_threshold: int = 1000
    plite_max_retries: int = 3
    plite_day_range: list[str] = ["6:00", "19:00"]

    @property
    def nickname(self) -> str:
        return _nickname

    @property
    def cache_dir(self) -> Path:
        return _cache_dir

    @property
    def config_dir(self) -> Path:
        return _config_dir

    @property
    def data_dir(self) -> Path:
        return _data_dir

    @property
    def max_size(self) -> int:
        return self.plite_max_size

    @property
    def duration_maximum(self) -> int:
        return self.plite_duration_maximum

    @property
    def disabled_platforms(self) -> list[PlatformEnum]:
        return self.plite_disabled_platforms

    @property
    def bili_video_codes(self) -> list[BiliVideoCodecs]:
        return self.plite_bili_video_codes

    @property
    def bili_video_quality(self) -> BiliVideoQuality:
        return self.plite_bili_video_quality

    @property
    def bili_ck(self) -> str | None:
        return self.plite_bili_ck

    @property
    def need_upload_audio(self) -> bool:
        return self.plite_need_upload_audio or self.plite_need_upload

    @property
    def need_upload_video(self) -> bool:
        return self.plite_need_upload_video or self.plite_need_upload

    @property
    def use_base64(self) -> bool:
        return self.plite_use_base64

    @property
    def append_url(self) -> bool:
        return self.plite_append_url

    @property
    def append_qrcode(self) -> bool:
        return self.plite_append_qrcode

    @property
    def need_forward_contents(self) -> bool:
        return self.plite_need_forward_contents

    @property
    def blacklist_users(self) -> list[str]:
        return self.plite_blacklist_users

    @property
    def download_command(self) -> list[str]:
        return self.plite_download_command

    @property
    def lazy_download(self) -> bool:
        return self.plite_lazy_download

    @property
    def lazy_download_tip(self) -> bool:
        return self.plite_lazy_download_tip

    @property
    def lazy_download_timeout(self) -> int:
        return self.plite_lazy_download_timeout

    @property
    def browser_path(self) -> str:
        return self.plite_browser_path

    @property
    def live_photo(self) -> bool:
        return self.plite_live_photo

    @property
    def headless(self) -> bool:
        return self.plite_headless

    @property
    def max_comments(self) -> int:
        return self.plite_max_comments

    @property
    def forward_text_threshold(self) -> int:
        return self.plite_forward_text_threshold

    @property
    def max_retries(self) -> int:
        return self.plite_max_retries

    @property
    def day_range_minutes(self) -> tuple[int, int]:
        return (
            parse_hm_to_minutes(self.plite_day_range[0]),
            parse_hm_to_minutes(self.plite_day_range[1]),
        )


# ═══ standalone 模式使用默认值, 否则走 NoneBot 路径 ═══
if _STANDALONE:
    _cache_dir: Path = Path("cache")
    _config_dir: Path = Path("config")
    _data_dir: Path = Path("data")
    pconfig: Config = Config()
    gconfig = None
    _nickname: str = "parser-lite"
else:
    from nonebot import get_driver, get_plugin_config
    import nonebot_plugin_localstore as _store

    _driver = get_driver()
    _cache_dir: Path = Path(_store.get_plugin_cache_dir())
    _config_dir: Path = Path(_store.get_plugin_config_dir())
    _data_dir: Path = Path(_store.get_plugin_data_dir())
    pconfig: Config = get_plugin_config(Config)
    gconfig = _driver.config
    _nickname: str = next(iter(gconfig.nickname), "nonebot-plugin-parser")
