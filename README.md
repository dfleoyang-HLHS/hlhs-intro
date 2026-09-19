# 國立花蓮高級中學｜校園介紹網頁

以靜態 HTML／CSS／JavaScript 製作，不需建置工具，可直接用 GitHub Pages 發布。

## 結構

- `index.html`：頁面內容
- `css/style.css`：樣式
- `js/data.js`：升學數據、榮譽榜、校史、六力、深度學習課程、相簿等資料（更新成績只需改這裡）
- `js/main.js`：資料渲染與互動
- `images/`：照片（WebP）

## 本機預覽

```bash
uv run python -m http.server 8000
```

開啟 http://localhost:8000

## 更新提醒

- 升學數據與榮譽榜：修改 `js/data.js`
- 新增照片：放入 `images/`，並轉成 WebP、寬度約 1200px 以內
