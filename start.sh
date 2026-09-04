#!/usr/bin/env bash
# 一键启动：创建虚拟环境 → 安装依赖 → 启动服务 → 打开浏览器
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

PORT="${PORT:-8000}"
URL="http://127.0.0.1:${PORT}/"

echo "========================================"
echo "  我是岳洋 · 一键启动"
echo "========================================"

# 查找 Python
if command -v python3 >/dev/null 2>&1; then
  PYTHON=python3
elif command -v python >/dev/null 2>&1; then
  PYTHON=python
else
  echo "❌ 未找到 Python，请先安装 Python 3.9+"
  exit 1
fi

echo "→ 使用: $($PYTHON --version)"

# 虚拟环境
if [ ! -d ".venv" ]; then
  echo "→ 首次运行，正在创建虚拟环境..."
  "$PYTHON" -m venv .venv
fi

# shellcheck disable=SC1091
source .venv/bin/activate

echo "→ 安装 / 更新依赖..."
pip install -q -r requirements.txt

# 端口占用检测
if command -v lsof >/dev/null 2>&1; then
  if lsof -tiTCP:"$PORT" -sTCP:LISTEN >/dev/null 2>&1; then
    echo "⚠️  端口 ${PORT} 已被占用，尝试结束旧进程..."
    lsof -tiTCP:"$PORT" -sTCP:LISTEN | xargs kill 2>/dev/null || true
    sleep 1
  fi
fi

# 延迟打开浏览器（等服务起来）
open_browser() {
  sleep 1.5
  if command -v open >/dev/null 2>&1; then
    open "$URL"          # macOS
  elif command -v xdg-open >/dev/null 2>&1; then
    xdg-open "$URL"      # Linux
  elif command -v start >/dev/null 2>&1; then
    start "$URL"         # Git Bash / Windows
  fi
}

open_browser &

echo "→ 启动成功，浏览器将自动打开："
echo "   ${URL}"
echo "   按 Ctrl+C 可停止服务"
echo "========================================"

exec python manage.py runserver "127.0.0.1:${PORT}"
