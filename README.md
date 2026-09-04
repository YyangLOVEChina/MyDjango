# MyDjango — 我是岳洋

本地启动后，浏览器满屏会不断跳出「我是岳洋」。

## 一键启动（推荐）

### macOS（双击即可）

在 Finder 中双击 **`start.command`**。

- 会自动打开「终端」、装依赖、启动网站，并打开浏览器
- 若系统提示无法打开：右键该文件 → **打开**；或在终端执行一次：
  ```bash
  chmod +x start.command start.sh
  ```

### Windows（双击即可）

双击 **`start.bat`**

### 终端方式（macOS / Linux）

```bash
chmod +x start.sh   # 仅首次需要
./start.sh
```

脚本会自动：创建虚拟环境 → 安装依赖 → 启动服务 → 打开浏览器。

访问地址：[http://127.0.0.1:8000/](http://127.0.0.1:8000/)  
点击屏幕会喷发大量「我是岳洋」。在终端按 `Ctrl+C` 停止服务。

## 手动启动（可选）

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver
```
