import asyncio
import hashlib
from collections.abc import Awaitable
from typing import Any

from anyio import Path
from .log import logger

from .cache import CacheManager


def fmt_size(size: int) -> str:
    """Format file size bytes to human-readable string."""
    for unit in ("B", "KB", "MB", "GB", "TB"):
        if size < 1024:
            return f"{size:.1f}{unit}"
        size /= 1024
    return f"{size:.1f}PB"


class LimitedSizeDict(dict):
    """Dict with max size, FIFO eviction."""

    def __init__(self, max_size: int = 50):
        super().__init__()
        self.max_size = max_size

    def __setitem__(self, key, value):
        if len(self) >= self.max_size:
            self.clear()
        super().__setitem__(key, value)


async def encode_file_hash(path: Path) -> str:
    """Compute MD5 hash of a file."""
    m = hashlib.md5()
    async for chunk in path.read_bytes_chunks(8192):
        m.update(chunk)
    return m.hexdigest()
