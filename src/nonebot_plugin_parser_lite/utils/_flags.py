"""Shared standalone mode flag detection.

All modules import _get_flag and _STANDALONE from here
to avoid duplicating env-var parsing logic.
"""
import os


def _get_flag(name: str) -> bool:
    """Parse boolean-like env var: "1"/"true"/"yes" → True.

    Treats "1", "true", "yes" (case-insensitive, whitespace ignored)
    as True; anything else (including unset, empty, "0", "false", "no")
    as False.
    """
    return os.environ.get(name, "").strip().lower() in {"1", "true", "yes"}


_STANDALONE = _get_flag("PARSER_LITE_STANDALONE")
