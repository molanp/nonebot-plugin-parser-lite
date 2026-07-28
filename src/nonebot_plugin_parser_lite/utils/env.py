import os


def get_env(name: str) -> bool:
    """Parse boolean-like env var: "1"/"true"/"yes" → True.

    Treats "1", "true", "yes" (case-insensitive, whitespace ignored)
    as True; anything else (including unset, empty, "0", "false", "no")
    as False.
    """
    return os.environ.get(name, "").strip().lower() in {"1", "true", "yes"}


IS_STANDALONE = get_env("PARSER_LITE_STANDALONE")


__all__ = ["IS_STANDALONE"]
