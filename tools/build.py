import os
import site
import subprocess


def build():

    site_packages = site.getsitepackages()[0]
    proto_files = []
    for root, dirs, files in os.walk("."):
        if ".venv" in root.split(os.sep):
            continue
        for file in files:
            if file.endswith(".proto"):
                path = os.path.relpath(os.path.join(root, file)).replace("\\", "/")
                proto_files.append(path)

    if not proto_files:
        print("未找到任何 .proto 文件")  # noqa: T201
        return

    print(f"找到 {len(proto_files)} 个 .proto 文件...")  # noqa: T201

    cmd = [
        "protoc",
        "-I.",
        f"-I{site_packages}",
        "--python_out=.",
        # "--grpc_python_out=.",
        "--mypy_out=.",
        # "--mypy_grpc_out=.",
        *proto_files,
    ]

    result = subprocess.run(cmd)
    if result.returncode == 0:
        print("编译成功")  # noqa: T201
    else:
        print("编译失败")  # noqa: T201


build()
