#!/usr/bin/env bash
# macOS 双击启动：在「终端」中打开并运行
# 若提示「无法打开」，请右键 → 打开，或在终端执行：chmod +x start.command
cd "$(dirname "$0")" || exit 1

chmod +x start.sh 2>/dev/null || true

./start.sh
status=$?

echo ""
if [ "$status" -ne 0 ]; then
  echo "启动失败（退出码 $status）。按回车关闭窗口…"
else
  echo "服务已结束。按回车关闭窗口…"
fi
read -r _
