from contextlib import asynccontextmanager
from importlib.util import module_from_spec, spec_from_file_location
from pathlib import Path
import sys
from types import ModuleType, SimpleNamespace

from httpx import DecodingError, Request, Timeout
import pytest

ROOT = Path(__file__).parents[1]
SOURCE = ROOT / "src/nonebot_plugin_parser_lite"
TEST_PACKAGE = "_parser_lite_downloader_test"


class AsyncPathStub:
    """只供下载器单元测试使用，避免依赖 anyio 的工作线程。"""

    def __init__(self, path):
        self._path = Path(path)

    def __fspath__(self):
        return str(self._path)

    def __str__(self):
        return str(self._path)

    def __truediv__(self, child):
        return type(self)(self._path / child)

    @property
    def parent(self):
        return type(self)(self._path.parent)

    @property
    def name(self):
        return self._path.name

    async def exists(self):
        return self._path.exists()

    async def mkdir(self, *, parents=False, exist_ok=False):
        self._path.mkdir(parents=parents, exist_ok=exist_ok)

    async def rename(self, target):
        self._path.rename(Path(target))

    async def stat(self):
        return self._path.stat()

    async def unlink(self, *, missing_ok=False):
        self._path.unlink(missing_ok=missing_ok)

    async def read_bytes(self):
        return self._path.read_bytes()

    def with_suffix(self, suffix):
        return type(self)(self._path.with_suffix(suffix))


class AsyncFileStub:
    """aiofiles.open 的同步测试替身。"""

    def __init__(self, path, mode):
        self._file = open(Path(path), mode)

    async def __aenter__(self):
        return self

    async def __aexit__(self, exc_type, exc, traceback):
        self._file.close()

    async def write(self, data):
        return self._file.write(data)


def _module(name: str, **attrs):
    module = ModuleType(name)
    for key, value in attrs.items():
        setattr(module, key, value)
    sys.modules[name] = module
    return module


def _load_module(name: str, path: Path):
    spec = spec_from_file_location(name, path)
    assert spec is not None
    assert spec.loader is not None
    module = module_from_spec(spec)
    sys.modules[name] = module
    spec.loader.exec_module(module)
    return module


@pytest.fixture
def downloader_modules(tmp_path):
    for name in list(sys.modules):
        if name == TEST_PACKAGE or name.startswith(f"{TEST_PACKAGE}."):
            sys.modules.pop(name)

    package = _module(TEST_PACKAGE)
    package.__path__ = [str(SOURCE)]

    class ParseException(Exception):
        pass

    class DownloadException(ParseException):
        pass

    class SizeLimitException(DownloadException):
        pass

    class ZeroSizeException(DownloadException):
        pass

    _module(
        f"{TEST_PACKAGE}.exception",
        ParseException=ParseException,
        DownloadException=DownloadException,
        SizeLimitException=SizeLimitException,
        ZeroSizeException=ZeroSizeException,
    )

    pconfig = SimpleNamespace(
        max_retries=2,
        cache_dir=AsyncPathStub(tmp_path),
        max_size=10,
    )
    _module(f"{TEST_PACKAGE}.config", pconfig=pconfig)
    _module(
        f"{TEST_PACKAGE}.constants",
        COMMON_HEADER={"User-Agent": "downloader-test"},
        DOWNLOAD_TIMEOUT=Timeout(1.0),
    )

    utils = _module(f"{TEST_PACKAGE}.utils")
    utils.__path__ = []

    class CacheManager:
        MEDIA = "media"

        @classmethod
        async def ensure_dir(cls, cache_type):
            path = pconfig.cache_dir / cache_type
            await path.mkdir(parents=True, exist_ok=True)
            return path

        @classmethod
        async def get_cached_file(cls, _base_path):
            return None

        @classmethod
        async def set_cached_file(cls, _base_path, _file_path):
            return None

    async def safe_unlink(path):
        await path.unlink(missing_ok=True)

    _module(f"{TEST_PACKAGE}.utils.cache", CacheManager=CacheManager)
    _module(
        f"{TEST_PACKAGE}.utils.common",
        compose_cache_key=lambda *parts: ":".join(str(part) for part in parts),
        generate_file_name=lambda _url, cache_key=None: cache_key or "download",
        safe_unlink=safe_unlink,
    )
    _module(f"{TEST_PACKAGE}.utils.ffmpeg", FFmpeg=object)

    download_name = f"{TEST_PACKAGE}.download"
    download_path = SOURCE / "download"
    download_spec = spec_from_file_location(
        download_name,
        download_path / "__init__.py",
        submodule_search_locations=[str(download_path)],
    )
    assert download_spec is not None
    assert download_spec.loader is not None
    download = module_from_spec(download_spec)
    sys.modules[download_name] = download

    client = _load_module(f"{download_name}.client", download_path / "client.py")
    _load_module(f"{download_name}.task", download_path / "task.py")
    download_spec.loader.exec_module(download)
    download.aiofiles = SimpleNamespace(open=AsyncFileStub)

    yield download, client, CacheManager

    for name in list(sys.modules):
        if name == TEST_PACKAGE or name.startswith(f"{TEST_PACKAGE}."):
            sys.modules.pop(name)


class FakeResponse:
    def __init__(self, status_code, *, headers=None, chunks=()):
        self.status_code = status_code
        self.headers = {key.lower(): value for key, value in (headers or {}).items()}
        self._chunks = list(chunks)

    def raise_for_status(self):
        if not 200 <= self.status_code < 300:
            raise RuntimeError(f"HTTP {self.status_code}")

    async def aiter_bytes(self, _chunk_size=None):
        for chunk in self._chunks:
            yield chunk


class FakeClient:
    def __init__(self, responses):
        self.responses = list(responses)
        self.requests = []

    @asynccontextmanager
    async def stream(self, method, url, *, headers, use_curl_cffi=False):
        self.requests.append(
            {
                "method": method,
                "url": url,
                "headers": dict(headers),
                "use_curl_cffi": use_curl_cffi,
            }
        )
        yield self.responses.pop(0)


def _new_downloader(download, client):
    downloader = object.__new__(download.StreamDownloader)
    downloader.headers = {
        "User-Agent": "downloader-test",
        "accept-encoding": "gzip, deflate, br",
    }
    downloader.client = client
    downloader._active_downloads = {}
    return downloader


async def _download_image(downloader, cache_manager):
    return await downloader.streamd(
        url="https://cdn.example/image.webp",
        cache_key="image",
        default_suffix=".webp",
        cache_type=cache_manager.MEDIA,
    )


async def _no_sleep(_delay):
    return None


@pytest.mark.asyncio
async def test_file_download_forces_identity_encoding(downloader_modules):
    download, _, cache_manager = downloader_modules
    client = FakeClient(
        [FakeResponse(200, headers={"Content-Length": "4"}, chunks=[b"webp"])]
    )
    downloader = _new_downloader(download, client)

    path = await _download_image(downloader, cache_manager)

    assert await path.read_bytes() == b"webp"
    assert client.requests[0]["headers"]["Accept-Encoding"] == "identity"
    assert "accept-encoding" not in client.requests[0]["headers"]


@pytest.mark.asyncio
async def test_retryable_http_status_rotates_to_fallback_url(
    downloader_modules, monkeypatch
):
    download, _, cache_manager = downloader_modules
    client = FakeClient(
        [
            FakeResponse(404),
            FakeResponse(200, headers={"Content-Length": "5"}, chunks=[b"fresh"]),
        ]
    )
    downloader = _new_downloader(download, client)
    monkeypatch.setattr(download.asyncio, "sleep", _no_sleep)

    path = await downloader.streamd(
        url="https://primary.example/video.m4s",
        fallback_urls=("https://backup.example/video.m4s",),
        retry_http_statuses={404},
        cache_key="video",
        default_suffix=".m4s",
        cache_type=cache_manager.MEDIA,
    )

    assert await path.read_bytes() == b"fresh"
    assert [request["url"] for request in client.requests] == [
        "https://primary.example/video.m4s",
        "https://backup.example/video.m4s",
    ]


@pytest.mark.asyncio
async def test_retryable_http_status_retries_primary_without_fallback(
    downloader_modules, monkeypatch
):
    download, _, cache_manager = downloader_modules
    client = FakeClient(
        [
            FakeResponse(404),
            FakeResponse(200, headers={"Content-Length": "5"}, chunks=[b"fresh"]),
        ]
    )
    downloader = _new_downloader(download, client)
    monkeypatch.setattr(download.asyncio, "sleep", _no_sleep)

    path = await downloader.streamd(
        url="https://primary.example/video.m4s",
        retry_http_statuses={404},
        cache_key="video",
        default_suffix=".m4s",
        cache_type=cache_manager.MEDIA,
    )

    assert await path.read_bytes() == b"fresh"
    assert [request["url"] for request in client.requests] == [
        "https://primary.example/video.m4s",
        "https://primary.example/video.m4s",
    ]


@pytest.mark.asyncio
async def test_unlisted_http_status_is_not_retried(downloader_modules):
    download, _, cache_manager = downloader_modules
    client = FakeClient([FakeResponse(404)])
    downloader = _new_downloader(download, client)

    with pytest.raises(RuntimeError, match="HTTP 404"):
        await downloader.streamd(
            url="https://cdn.example/missing.webp",
            retry_http_statuses={503},
            cache_key="missing",
            default_suffix=".webp",
            cache_type=cache_manager.MEDIA,
        )

    assert len(client.requests) == 1


@pytest.mark.asyncio
async def test_legacy_part_416_is_removed_and_restarted(
    downloader_modules, tmp_path
):
    download, _, cache_manager = downloader_modules
    media_dir = tmp_path / cache_manager.MEDIA
    media_dir.mkdir()
    (media_dir / "image.part").write_bytes(b"stale-decoded-data")
    client = FakeClient(
        [
            FakeResponse(416),
            FakeResponse(200, headers={"Content-Length": "5"}, chunks=[b"fresh"]),
        ]
    )
    downloader = _new_downloader(download, client)

    path = await _download_image(downloader, cache_manager)

    assert await path.read_bytes() == b"fresh"
    assert client.requests[0]["headers"]["Range"] == "bytes=18-"
    assert "Range" not in client.requests[1]["headers"]
    assert not (media_dir / "image.part").exists()


@pytest.mark.parametrize(
    "content_range",
    [
        None,
        "not-a-content-range",
        "bytes 2-7/10",
    ],
    ids=["missing", "malformed", "mismatched-start"],
)
@pytest.mark.asyncio
async def test_invalid_content_range_removes_part_and_restarts_cleanly(
    downloader_modules, tmp_path, content_range
):
    download, _, cache_manager = downloader_modules
    media_dir = tmp_path / cache_manager.MEDIA
    media_dir.mkdir()
    part_path = media_dir / "image.part"
    part_path.write_bytes(b"partial-data")

    resume_headers = {
        "Content-Length": "20",
        "Content-Encoding": "identity",
    }
    if content_range is not None:
        resume_headers["Content-Range"] = content_range

    client = FakeClient(
        [
            FakeResponse(
                206,
                headers=resume_headers,
                chunks=[b"must-not-be-appended"],
            ),
            FakeResponse(200, headers={"Content-Length": "5"}, chunks=[b"fresh"]),
        ]
    )
    downloader = _new_downloader(download, client)

    path = await _download_image(downloader, cache_manager)

    assert await path.read_bytes() == b"fresh"
    assert client.requests[0]["headers"]["Range"] == "bytes=12-"
    assert "Range" not in client.requests[1]["headers"]
    assert len(client.requests) == 2
    assert not part_path.exists()


@pytest.mark.asyncio
async def test_short_identity_response_resumes_with_matching_range(
    downloader_modules,
):
    download, _, cache_manager = downloader_modules
    prefix = b"a" * 512
    remainder = b"b" * 1536
    client = FakeClient(
        [
            FakeResponse(
                200,
                headers={"Content-Length": "2048"},
                chunks=[prefix],
            ),
            FakeResponse(
                206,
                headers={
                    "Content-Length": "1536",
                    "Content-Range": "bytes 512-2047/2048",
                },
                chunks=[remainder],
            ),
        ]
    )
    downloader = _new_downloader(download, client)

    path = await _download_image(downloader, cache_manager)

    assert await path.read_bytes() == prefix + remainder
    assert client.requests[1]["headers"]["Range"] == "bytes=512-"


@pytest.mark.asyncio
async def test_unexpected_encoded_response_does_not_compare_decoded_length(
    downloader_modules,
):
    download, _, cache_manager = downloader_modules
    client = FakeClient(
        [
            FakeResponse(
                200,
                headers={
                    "Content-Encoding": "gzip, br",
                    "Content-Length": "124406",
                },
                chunks=[b"decoded-webp"],
            )
        ]
    )
    downloader = _new_downloader(download, client)

    path = await _download_image(downloader, cache_manager)

    assert await path.read_bytes() == b"decoded-webp"


@pytest.mark.asyncio
async def test_decoding_error_discards_partial_file(downloader_modules, monkeypatch):
    _, client_module, _ = downloader_modules

    class BrokenHttpxResponse:
        async def aiter_bytes(self, _chunk_size=None):
            raise DecodingError(
                "invalid gzip stream",
                request=Request("GET", "https://cdn.example/image.webp"),
            )
            yield b""  # pragma: no cover

    monkeypatch.setattr(client_module, "HttpxResponse", BrokenHttpxResponse)
    response = client_module.UniResponse(BrokenHttpxResponse())

    with pytest.raises(client_module.RetryableDownloadError) as exc_info:
        async for _ in response.aiter_bytes():
            pass

    assert exc_info.value.keep_part is False
