#!/usr/bin/env python3
"""Future-proof import verification with robust error reporting."""
import os
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent.parent
os.environ["PARSER_LITE_STANDALONE"] = "1"
os.environ["PARSER_LITE_BASE_DIR"] = str(HERE / "src" / "nonebot_plugin_parser_lite")

# ── Step 0: ensure deps ────────────────────────────────────────
print(f"[deps] Python: {sys.executable}")
_req = HERE / "requirements.txt"
if _req.exists():
    r = subprocess.run(
        [sys.executable, "-m", "pip", "install", "-r", str(_req)],
        capture_output=True, text=True,
    )
    if r.returncode != 0:
        print(f"[deps] FAILED\n{r.stderr[-600:]}")
        sys.exit(1)
    print("[deps] install OK")
else:
    print("[deps] no requirements.txt, skipping")

# Auto-detect ALL imports from upstream source — no manual listing needed
_KNOWN = {
    # map import name → pip package name
    "Cryptodome": "pycryptodomex",
    "Crypto": "pycryptodome",
    "bs4": "beautifulsoup4",
    "PIL": "pillow",
    "playwright": "playwright",
    "jinja2": "jinja2",
    "apscheduler": "apscheduler",
    "yarl": "yarl",
    "qrcode": "qrcode",
    "pydantic": "pydantic",
    "DrissionPage": "DrissionPage",
    "httpx": "httpx",
    "anyio": "anyio",
    "curl_cffi": "curl_cffi",
    "aiofiles": "aiofiles",
    "ujson": "ujson",
    "msgspec": "msgspec",
    "json_repair": "json_repair",
    "rich": "rich",
    "protobuf": "protobuf",
    "cryptography": "cryptography",
    "typing_extensions": "typing_extensions",
}
import re, ast as _ast
_src_dir = HERE / "src"
_to_install = set()
for _f in _src_dir.rglob("*.py"):
    _text = _f.read_text(encoding="utf-8")
    for _m in re.finditer(r"^(?:from|import)\s+([a-zA-Z_][a-zA-Z0-9_]*)", _text, re.MULTILINE):
        _name = _m.group(1)
        _pkg = _KNOWN.get(_name)
        if _pkg and _pkg not in _to_install:
            try:
                __import__(_name)
            except ImportError:
                _to_install.add(_pkg)

if _to_install:
    _missing = sorted(_to_install)
    print(f"[deps] auto-detected missing: {_missing}")
    subprocess.run(
        [sys.executable, "-m", "pip", "install"] + _missing,
        check=False,
    )
    # Re-check — some packages need different import name vs pip name
    _still_missing = []
    for _nm, _pk in _KNOWN.items():
        if _pk in _missing:
            try:
                __import__(_nm)
            except ImportError:
                _still_missing.append(f"{_nm}(pip:{_pk})")
    if _still_missing:
        print(f"[deps] STILL MISSING after pip install: {_still_missing}")
        print("[deps] Run: pip install " + " ".join(set(_KNOWN[n.split("(")[0]] for n in _still_missing)))
        sys.exit(1)
    print("[deps] all auto-detected modules now importable")

# Python 3.10 compat
import typing as _typing
if not hasattr(_typing, "Self"):
    from typing_extensions import Self as _Self
    _typing.Self = _Self  # type: ignore

# ── _F class (defined early — needed by site-packages scan) ─────
class _F:
    def __init__(self, *a, **kw):
        object.__setattr__(self, "_d", kw)
    def __getattr__(self, k):
        if k.startswith("_"): raise AttributeError(k)
        try: return object.__getattribute__(self, "_d")[k]
        except (KeyError, AttributeError): return _F()
    def __call__(self, *a, **kw):
        if len(a) == 1 and isinstance(a[0], type):
            try: return a[0]()
            except Exception: pass
        return _F()
    def __str__(self): return ""
    def __fspath__(self): return ""
    def __repr__(self): return "_F()"
    def __bool__(self): return True
    def __iter__(self): return iter([])
    def __contains__(self, _): return False
    def __or__(self, _): return self
    def __ror__(self, _): return self
    def __eq__(self, o): return isinstance(o, _F)
    def __ne__(self, o): return not isinstance(o, _F)
    def __hash__(self): return 0
    def __int__(self): return 0
    def __float__(self): return 0.0
    def __len__(self): return 0
    def __getitem__(self, _): return _F()
    def __delitem__(self, _): pass
    def __setitem__(self, k, v): pass
    def __enter__(self): return self
    def __exit__(self, *a): pass
    def __aenter__(self): return self
    def __aexit__(self, *a): pass
    def __neg__(self): return 0
    def __pos__(self): return 0
    def __lt__(self, o): return False
    def __le__(self, o): return True
    def __gt__(self, o): return False
    def __ge__(self, o): return True
    def __add__(self, o): return self
    def __sub__(self, o): return self
    def __mul__(self, o): return self
    def __truediv__(self, o): return self
    def __mro_entries__(self, bases): return ()

# ── Pre-populate ALL nonebot* sub-modules from site-packages ────
try:
    import site as _site_mod
    _sp_dirs = [p for p in _site_mod.getsitepackages() if os.path.isdir(p)]
    _pre_fake_count = 0
    for _dir in _sp_dirs:
        for _root, _dirs, _files in os.walk(_dir):
            for _f in _files:
                _rp = os.path.relpath(os.path.join(_root, _f), _dir)
                _parts = _rp.replace(os.sep, ".").replace(".py", "").replace(".so", "").split(".")
                if not _parts[0].startswith("nonebot"):
                    continue
                for _i in range(len(_parts)):
                    _candidate = ".".join(_parts[:_i + 1])
                    if _candidate not in sys.modules and \
                       not _candidate.startswith("nonebot_plugin_parser_lite"):
                        sys.modules[_candidate] = _F()
                        _pre_fake_count += 1
    if _pre_fake_count:
        print(f"[fakes] pre-populated {_pre_fake_count} nonebot* sub-modules from site-packages")
except Exception as _e_sc:
    print(f"[fakes] site-packages scan failed: {_e_sc}")

# Pre-populate known modules (functional overrides for site-packages scan)
FAKES = {
    "nonebot": _F(get_driver=_F(config=_F(nickname=["parser-lite"])),
                   get_plugin_config=lambda *a, **kw: a[0]() if a else _F(),
                   require=lambda *a, **kw: None,
                   plugin=_F()),
    "nonebot.plugin": _F(PluginMetadata=lambda *a, **kw: None,
                          inherit_supported_adapters=lambda *a, **kw: []),
    "nonebot.adapters": _F(),
    "nonebot.adapters.event": _F(),
    "nonebot.adapters.event.Event": _F(),
    "nonebot.log": _F(),
    "nonebot.matcher": _F(),
    "nonebot.params": _F(),
    "nonebot.permission": _F(),
    "nonebot.rule": _F(),
    "nonebot.typing": _F(),
    "nonebot_plugin_alconna": _F(),
    "nonebot_plugin_alconna.extension": _F(),
    "nonebot_plugin_alconna.uniseg": _F(),
    "nonebot_plugin_uninfo": _F(),
    "nonebot_plugin_htmlrender": _F(),
    "nonebot_plugin_apscheduler": _F(
        scheduler=_F(scheduled_job=lambda *a, **kw: lambda f: f)),
    "nonebot_plugin_localstore": _F(
        get_plugin_cache_dir=lambda *a, **kw: Path(HERE) / "cache",
        get_plugin_config_dir=lambda *a, **kw: Path(HERE) / "config",
        get_plugin_data_dir=lambda *a, **kw: Path(HERE) / "data",
    ),
}
for name, obj in FAKES.items():
    sys.modules[name] = obj

# Guard finder: claims all nonebot* imports with proper ModuleSpec
class _FakeLoader:
    def create_module(self, spec):
        return sys.modules.get(spec.name)  # return pre-set _F()
    def exec_module(self, module):
        pass  # _F() needs no initialization

class _Guard:
    def find_spec(self, fn, p, t=None):
        if fn.startswith("nonebot_plugin_parser_lite"):
            return None
        if fn == "nonebot" or fn.startswith(("nonebot.", "nonebot_plugin_")):
            if fn not in sys.modules:
                sys.modules[fn] = _F()
            from importlib.machinery import ModuleSpec
            return ModuleSpec(fn, _FakeLoader())
        return None
sys.meta_path.insert(0, _Guard())

_src = str(HERE / "src")
if _src not in sys.path:
    sys.path.insert(0, _src)
sys.path.insert(0, str(HERE))

# ── Step 2: import test ─────────────────────────────────────────
print("\n=== Import Verification ===")
CHECKS = [
    "nonebot_plugin_parser_lite",
    "nonebot_plugin_parser_lite.config",
    "nonebot_plugin_parser_lite.data",
    "nonebot_plugin_parser_lite.parsers.base",
    "nonebot_plugin_parser_lite.download",
    "nonebot_plugin_parser_lite.constants",
    "nonebot_plugin_parser_lite.helper",
    "nonebot_plugin_parser_lite.render",
    "nonebot_plugin_parser_lite.parsers.bilibili",
    "nonebot_plugin_parser_lite.parsers.x",
    "nonebot_plugin_parser_lite.parsers.zhihu",
]
passed = failed = 0
for mod_path in CHECKS:
    try:
        __import__(mod_path)
        print(f"  [PASS] {mod_path}")
        passed += 1
    except Exception as e:
        print(f"  [FAIL] {mod_path}: {e}")
        failed += 1
        if failed == 1 and mod_path == CHECKS[0]:
            break
print(f"\n{'=' * 40}")
print(f"{passed}/{len(CHECKS)} passed, {failed} failed")
sys.exit(0 if failed == 0 else 1)
