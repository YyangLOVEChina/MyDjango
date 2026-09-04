@echo off
REM 一键启动（Windows）：创建虚拟环境 → 安装依赖 → 启动服务 → 打开浏览器
chcp 65001 >nul
setlocal
cd /d "%~dp0"

set PORT=8000
set URL=http://127.0.0.1:%PORT%/

echo ========================================
echo   我是岳洋 · 一键启动
echo ========================================

where python >nul 2>&1
if errorlevel 1 (
  echo [错误] 未找到 Python，请先安装 Python 3.9+
  pause
  exit /b 1
)

for /f "tokens=*" %%i in ('python --version') do echo -^> 使用: %%i

if not exist ".venv" (
  echo -^> 首次运行，正在创建虚拟环境...
  python -m venv .venv
)

call .venv\Scripts\activate.bat

echo -^> 安装 / 更新依赖...
pip install -q -r requirements.txt

start "" "%URL%"

echo -^> 启动成功，浏览器将自动打开：
echo    %URL%
echo    关闭本窗口或按 Ctrl+C 可停止服务
echo ========================================

python manage.py runserver 127.0.0.1:%PORT%
pause
