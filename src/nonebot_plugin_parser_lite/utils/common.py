from collections import OrderedDict
import hashlib
import re
from typing import TypeVar
from urllib.parse import urlparse

from anyio import Path
from nonebot import logger

K = TypeVar("K")
V = TypeVar("V")

STANDARD_IMAGE_SUFFIXES = {
    ".jpeg",
    ".webp",
    ".jpg",
    ".gif",
    ".png",
    ".bmp",
    ".svg",
    ".avif",
    ".heic",
    ".heif",
    ".jfif",
}


class LimitedSizeDict(OrderedDict[K, V]):
    """
    定长字典
    """

    def __init__(self, *args, max_size=20, **kwargs):
        self.max_size = max_size
        super().__init__(*args, **kwargs)

    def __setitem__(self, key: K, value: V):
        super().__setitem__(key, value)
        if len(self) > self.max_size:
            self.popitem(last=False)


def make_filename(text: str) -> str:
    """
    清理路径非法字符，保留中英文、数字及合法路径字符
    """
    illegal_chars_pattern = r'[<>:"/\\|?*\x00-\x1f]'
    cleaned_text = re.sub(illegal_chars_pattern, "", text)
    cleaned_text = cleaned_text.replace(" ", "_")

    return cleaned_text


async def safe_unlink(path: Path):
    """
    安全删除文件
    """
    try:
        await path.unlink(missing_ok=True)
    except Exception:
        logger.warning(f"删除 {path} 失败")


async def fmt_size(file_path: Path) -> str:
    """格式化文件大小

    :param video_path: 视频路径
    """
    stat = await file_path.stat()
    return f"大小: {stat.st_size / 1024 / 1024:.2f} MB"


def generate_file_name(url: str, default_suffix: str = "") -> str:
    """根据 URL 生成文件名，保留可能参与资源定位的 query。

    :param url: 原始资源 URL
    :param default_suffix: 默认后缀名（当 path 中不含后缀时使用）

    :return: 适合作为文件名的短 md5（含后缀）
    """

    parsed = urlparse(url)
    path = Path(parsed.path)
    path_suffix = path.suffix.lower()

    if path_suffix in STANDARD_IMAGE_SUFFIXES:
        suffix = path_suffix
    else:
        suffix = default_suffix

    # 确保后缀格式正确（以点号开头）
    if suffix and not suffix.startswith("."):
        suffix = f".{suffix}"

    # fragment 不会发送给服务器；query 可能决定实际资源，必须参与缓存键。
    resource_url = parsed._replace(fragment="").geturl()
    url_hash = hashlib.md5(resource_url.encode("utf-8")).hexdigest()[:16]
    return f"{url_hash}{suffix}"
