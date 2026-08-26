from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
import sys
from types import ModuleType

import pytest

ROOT = Path(__file__).parents[1]
VIDEO_MODULE = (
    ROOT / "src/nonebot_plugin_parser_lite/utils/bilibili/video.py"
)
TEST_PACKAGE = "_parser_lite_bilibili_video_test"
VIDEO_MODULE_NAME = f"{TEST_PACKAGE}.video"


def _module(name: str, **attrs):
    module = ModuleType(name)
    for key, value in attrs.items():
        setattr(module, key, value)
    sys.modules[name] = module
    return module


@pytest.fixture
def video_module():
    for name in list(sys.modules):
        if name == TEST_PACKAGE or name.startswith(f"{TEST_PACKAGE}."):
            sys.modules.pop(name)

    package = _module(TEST_PACKAGE)
    package.__path__ = [str(VIDEO_MODULE.parent)]
    _module(f"{TEST_PACKAGE}.a2v", av2bv=lambda value: value, bv2av=lambda value: value)
    _module(
        f"{TEST_PACKAGE}.cdn",
        choose_cdn_domain=lambda _region: "preferred.bilivideo.com",
        normalize_cdn_domain=lambda domain: domain,
    )
    _module(f"{TEST_PACKAGE}.client", CLIENT=object())
    _module(f"{TEST_PACKAGE}.credential", Credential=object)
    _module(f"{TEST_PACKAGE}.exceptions", BiliHelperException=RuntimeError)
    _module(
        f"{TEST_PACKAGE}.sign",
        encWbi=lambda *args, **kwargs: None,
        getWbiKeys=lambda *args, **kwargs: None,
    )

    spec = spec_from_file_location(VIDEO_MODULE_NAME, VIDEO_MODULE)
    assert spec is not None
    assert spec.loader is not None
    module = module_from_spec(spec)
    sys.modules[VIDEO_MODULE_NAME] = module
    spec.loader.exec_module(module)

    yield module

    for name in list(sys.modules):
        if name == TEST_PACKAGE or name.startswith(f"{TEST_PACKAGE}."):
            sys.modules.pop(name)


def test_sanitize_stream_urls_keeps_clean_origins_as_fallbacks(video_module):
    primary = "https://origin.bilivideo.com/video.m4s?token=1"
    backup = "https://backup.bilivideo.com/video.m4s?token=2"
    pcdn = "https://node.mcdn.bilivideo.cn/video.m4s?token=3"
    stream = video_module.VideoStreamDownloadURL(
        url=primary,
        video_quality=video_module.BiliVideoQuality._1080P,
        video_codecs=video_module.BiliVideoCodecs.AVC,
        backup_url=[backup, pcdn],
    )

    sanitized, _ = video_module.sanitize_stream_urls(stream, None)

    assert sanitized is stream
    assert sanitized.url == "https://preferred.bilivideo.com/video.m4s?token=1"
    assert sanitized.backup_url == [primary, backup]


def test_sanitize_stream_urls_replaces_pcdn_primary_from_clean_backup(video_module):
    pcdn = "https://node.mcdn.bilivideo.cn/video.m4s?token=1"
    backup = "https://backup.bilivideo.com/video.m4s?token=2"
    stream = video_module.VideoStreamDownloadURL(
        url=pcdn,
        video_quality=video_module.BiliVideoQuality._1080P,
        video_codecs=video_module.BiliVideoCodecs.AVC,
        backup_url=[backup],
    )

    sanitized, _ = video_module.sanitize_stream_urls(stream, None)

    assert sanitized.url == "https://preferred.bilivideo.com/video.m4s?token=2"
    assert sanitized.backup_url == [backup]
