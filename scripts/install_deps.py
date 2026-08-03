"""Install upstream deps from requirements.txt, skipping nonebot packages."""
import re, subprocess, sys

with open("requirements.txt") as f:
    pkgs = [
        re.split(r"[<>=!~]", line.split("#")[0].strip())[0]
        for line in f
        if line.strip() and not line.startswith("#")
    ]

skip = {p for p in pkgs if "nonebot" in p.lower()}
install = [p for p in pkgs if p not in skip]

if install:
    subprocess.check_call([sys.executable, "-m", "pip", "install"] + install)

print(f"Installed {len(install)} pkgs, skipped {len(skip)} nonebot pkgs")
