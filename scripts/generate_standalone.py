#!/usr/bin/env python3
"""Generate the standalone branch from an unmodified main working tree."""

from __future__ import annotations

import argparse
import ast
from pathlib import Path
import re
import shutil

PACKAGE = Path("src/nonebot_plugin_parser_lite")
TEMPLATES = Path("scripts/standalone_templates")


def is_nonebot_module(module: str) -> bool:
    top_level = module.split(".", 1)[0]
    return top_level != "nonebot_plugin_parser_lite" and (
        top_level == "nonebot" or top_level.startswith("nonebot_plugin_")
    )


def is_nonebot_distribution(name: str) -> bool:
    normalized = re.sub(r"[-_.]+", "-", name).lower()
    return normalized == "nonebot2" or normalized.startswith("nonebot-plugin-")


def replace_once(text: str, old: str, new: str, path: Path) -> str:
    count = text.count(old)
    if count != 1:
        raise RuntimeError(f"{path}: expected one transformation marker, found {count}")
    return text.replace(old, new, 1)


def copy_template(
    root: Path,
    template: str,
    destination: Path,
    replacements: dict[str, str] | None = None,
) -> None:
    source = root / TEMPLATES / template
    target = root / destination
    target.parent.mkdir(parents=True, exist_ok=True)
    if replacements is None:
        shutil.copyfile(source, target)
        return
    content = source.read_text(encoding="utf-8")
    for marker, value in replacements.items():
        content = content.replace(marker, value)
    target.write_text(content, encoding="utf-8")


def rewrite_config(root: Path) -> None:
    path = root / PACKAGE / "config.py"
    text = path.read_text(encoding="utf-8")
    old_header = """from anyio import Path
from nonebot import get_driver, get_plugin_config
import nonebot_plugin_localstore as _store
from pydantic import BaseModel
"""
    new_header = """import json
import os
from pathlib import Path as SyncPath
from typing import Any

from anyio import Path
from pydantic import BaseModel
"""
    text = replace_once(text, old_header, new_header, path)
    marker = "# 初始化配置实例\n"
    if text.count(marker) != 1:
        raise RuntimeError(f"{path}: configuration footer marker changed")
    footer = root / TEMPLATES / "config_footer.py.tmpl"
    text = text.split(marker, 1)[0] + footer.read_text(encoding="utf-8")
    path.write_text(text, encoding="utf-8")


def rewrite_logging(root: Path) -> None:
    package = root / PACKAGE
    patterns = (
        re.compile(r"^from nonebot import logger\s*$", re.MULTILINE),
        re.compile(r"^from nonebot\.log import logger\s*$", re.MULTILINE),
    )
    for path in package.rglob("*.py"):
        text = path.read_text(encoding="utf-8")
        for pattern in patterns:
            text = pattern.sub(
                "from nonebot_plugin_parser_lite.utils.log import logger", text
            )
        path.write_text(text, encoding="utf-8")


def rewrite_browser(root: Path) -> None:
    path = root / PACKAGE / "utils/browser.py"
    text = path.read_text(encoding="utf-8")
    text = replace_once(text, "from nonebot import get_driver\n", "", path)
    text = replace_once(text, "driver = get_driver()\n", "", path)
    shutdown = """@driver.on_shutdown
async def _close_browser() -> None:
    await BrowserManager.quit()
"""
    text = replace_once(text, shutdown, "", path)
    path.write_text(text, encoding="utf-8")


def rewrite_bilibili_scheduler(root: Path) -> None:
    path = root / PACKAGE / "parsers/bilibili/__init__.py"
    text = path.read_text(encoding="utf-8")
    start = "            # 首次成功加载黑名单后，注册定时刷新任务（最多注册一次）\n"
    end = "\n        except Exception as e:\n"
    if text.count(start) != 1:
        raise RuntimeError(f"{path}: Bilibili scheduler marker changed")
    before, tail = text.split(start, 1)
    if end not in tail:
        raise RuntimeError(f"{path}: Bilibili scheduler end marker changed")
    _, after = tail.split(end, 1)
    text = before + end + after
    path.write_text(text, encoding="utf-8")


def rewrite_requirements(root: Path) -> list[str]:
    path = root / "requirements.txt"
    lines: list[str] = []
    seen: set[str] = set()
    for line in path.read_text(encoding="utf-8").splitlines():
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            lines.append(line)
            continue
        name = re.split(r"[<>=!~\[; ]", stripped, maxsplit=1)[0]
        normalized = re.sub(r"[-_.]+", "-", name).lower()
        if is_nonebot_distribution(name):
            continue
        seen.add(normalized)
        lines.append(stripped)

    direct = {
        "httpx": "httpx>=0.27.0,<1.0.0",
        "jinja2": "jinja2>=3.1.0,<4.0.0",
        "pydantic": "pydantic>=2.10.0,<3.0.0",
        "typing-extensions": "typing-extensions>=4.12.0",
        "yarl": "yarl>=1.9.0,<2.0.0",
    }
    for normalized, requirement in direct.items():
        if normalized not in seen:
            lines.append(requirement)

    requirements = [
        line for line in lines if line and not line.lstrip().startswith("#")
    ]
    path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    return requirements


def write_pyproject(root: Path, requirements: list[str], version: str) -> None:
    deps = "\n".join(f'  "{item}",' for item in requirements)
    content = (root / TEMPLATES / "pyproject.toml.tmpl").read_text(encoding="utf-8")
    (root / "pyproject.toml").write_text(
        content.replace("{{DEPENDENCIES}}", deps).replace("{{VERSION}}", version),
        encoding="utf-8",
    )


def audit(root: Path) -> None:
    violations: list[str] = []
    for path in (root / PACKAGE).rglob("*.py"):
        tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        for node in ast.walk(tree):
            modules: list[str] = []
            if isinstance(node, ast.Import):
                modules = [alias.name for alias in node.names]
            elif isinstance(node, ast.ImportFrom) and node.module:
                modules = [node.module]
            for module in modules:
                if is_nonebot_module(module):
                    violations.append(
                        f"{path.relative_to(root)}:{node.lineno}: {module}"
                    )
    if violations:
        joined = "\n  ".join(violations)
        raise RuntimeError(f"standalone source still imports NoneBot:\n  {joined}")


def generate(root: Path) -> None:
    root = root.resolve()
    if not (root / PACKAGE / "parsers/base.py").is_file():
        raise RuntimeError(f"{root} is not a parser-lite main working tree")

    original_init = (root / PACKAGE / "__init__.py").read_text(encoding="utf-8")
    version_match = re.search(r'"version"\s*:\s*"([^"]+)"', original_init)
    if version_match is None:
        raise RuntimeError("could not determine the package version from __init__.py")
    version = version_match.group(1)

    rewrite_config(root)
    rewrite_logging(root)
    rewrite_browser(root)
    rewrite_bilibili_scheduler(root)

    replacements = {
        "package_init.py.tmpl": PACKAGE / "__init__.py",
        "pipeline.py.tmpl": PACKAGE / "pipeline.py",
        "parsers_init.py.tmpl": PACKAGE / "parsers/__init__.py",
        "log.py.tmpl": PACKAGE / "utils/log.py",
        "render.py.tmpl": PACKAGE / "render/__init__.py",
        "helper.py.tmpl": PACKAGE / "helper.py",
        "matchers_init.py.tmpl": PACKAGE / "matchers/__init__.py",
        "matchers_rule.py.tmpl": PACKAGE / "matchers/rule.py",
        "matchers_filter.py.tmpl": PACKAGE / "matchers/filter.py",
        "README.md.tmpl": Path("README.md"),
    }
    for template, destination in replacements.items():
        replacements = {"{{VERSION}}": version} if "{{VERSION}}" in (
            root / TEMPLATES / template
        ).read_text(encoding="utf-8") else None
        copy_template(root, template, destination, replacements)

    requirements = rewrite_requirements(root)
    write_pyproject(root, requirements, version)
    audit(root)
    print(f"Generated standalone tree at {root}")  # noqa: T201


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=Path.cwd())
    args = parser.parse_args()
    generate(args.root)


if __name__ == "__main__":
    main()
