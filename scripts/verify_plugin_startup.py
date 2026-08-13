"""加载插件测试"""

import asyncio
import contextlib
import json
import os
from pathlib import Path
import sys
from time import perf_counter
import traceback
from typing import Any

import nonebot

REPORT_PATH = Path(os.getenv("STARTUP_REPORT_PATH", "startup-report.json"))
PLUGIN_NAME = "nonebot_plugin_parser_lite"


def elapsed_ms(started_at: float) -> float:
    return round((perf_counter() - started_at) * 1000, 2)


async def verify() -> dict[str, Any]:
    driver = None
    startup_attempted = False
    stage = "nonebot_init"
    timings: dict[str, float] = {}
    total_started_at = perf_counter()

    try:
        stage_started_at = perf_counter()
        nonebot.init()
        driver = nonebot.get_driver()
        timings["nonebot_init_ms"] = elapsed_ms(stage_started_at)

        stage = "plugin_load"
        stage_started_at = perf_counter()
        plugin = nonebot.load_plugin(PLUGIN_NAME)
        if plugin is None:
            raise RuntimeError(f"NoneBot returned no plugin for {PLUGIN_NAME}.")
        timings["plugin_load_ms"] = elapsed_ms(stage_started_at)

        stage = "startup_callbacks"
        stage_started_at = perf_counter()
        startup_attempted = True
        await driver._lifespan.startup()
        startup_attempted = False
        timings["startup_callbacks_ms"] = elapsed_ms(stage_started_at)

        stage = "shutdown_callbacks"
        stage_started_at = perf_counter()
        await driver._lifespan.shutdown()
        timings["shutdown_callbacks_ms"] = elapsed_ms(stage_started_at)

        return {
            "status": "success",
            "plugin": PLUGIN_NAME,
            "stage": "completed",
            "total_ms": elapsed_ms(total_started_at),
            "timings": timings,
        }
    except BaseException as exc:
        if driver is not None and startup_attempted:
            with contextlib.suppress(BaseException):
                await driver._lifespan.shutdown(
                    exc_type=type(exc), exc_val=exc, exc_tb=exc.__traceback__
                )
        return {
            "status": "failure",
            "plugin": PLUGIN_NAME,
            "stage": stage,
            "total_ms": elapsed_ms(total_started_at),
            "timings": timings,
            "error_type": type(exc).__name__,
            "error": str(exc),
            "traceback": "".join(
                traceback.format_exception(type(exc), exc, exc.__traceback__)
            ),
        }


def main() -> None:
    report = asyncio.run(verify())
    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    sys.stdout.write(REPORT_PATH.read_text(encoding="utf-8") + "\n")
    if report["status"] != "success":
        raise SystemExit(1)


if __name__ == "__main__":
    main()
