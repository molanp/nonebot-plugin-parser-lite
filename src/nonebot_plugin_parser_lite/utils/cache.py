import os
import time
from pathlib import Path as SyncPath

from anyio import Path
from .log import logger


class CacheManager:
    """缓存目录策略。ttl_seconds 为 None 时默认不清理。"""

    MEDIA = "media"
    RENDER = "render"
    LOGO = "logo"
    STICKER = "sticker"

    TTL_MAP = {
        MEDIA: 2 * 3600,
        RENDER: 2 * 3600,
        LOGO: 30 * 86400,
        STICKER: 15 * 86400,
    }

    @staticmethod
    def get_cache_root() -> Path:
        from ..config import pconfig
        return Path(pconfig.cache_dir)

    @classmethod
    async def ensure_dir(cls, subdir: str) -> Path:
        root = cls.get_cache_root()
        d = root / subdir
        await d.mkdir(parents=True, exist_ok=True)
        return d

    @classmethod
    async def clean_expired(cls) -> int:
        root = cls.get_cache_root()
        if not await root.exists():
            return 0
        count = 0
        now = time.time()
        for sub, ttl in cls.TTL_MAP.items():
            if ttl is None:
                continue
            d = root / sub
            if not await d.exists():
                continue
            async for entry in d.iterdir():
                if await entry.is_file():
                    try:
                        stat = await entry.stat()
                        if now - stat.st_mtime > ttl:
                            await entry.unlink()
                            count += 1
                    except Exception:
                        pass
        if count:
            logger.info(f"Cleaned {count} expired cache files")
        return count

    @classmethod
    async def clear_all(cls) -> int:
        root = cls.get_cache_root()
        if not await root.exists():
            return 0
        count = 0
        for sub in cls.TTL_MAP:
            d = root / sub
            if await d.exists():
                async for entry in d.iterdir():
                    if await entry.is_file():
                        await entry.unlink()
                        count += 1
        logger.success(f"Cleared all {count} cache files")
        return count
