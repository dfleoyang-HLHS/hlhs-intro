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

## 多語言（中文／English／日本語）

- 中文版是唯一的內容來源：`index.html`、`js/data.js`。
- 英文版、日文版由 `build.py` 自動產生，**請勿直接修改** `en/`、`ja/`、`js/data.en.js`、`js/data.ja.js`。
- 翻譯放在 `i18n/en.json`、`i18n/ja.json`，鍵是中文原文，值是翻譯。
- 修改中文內容後，重新建置：

```bash
uvx --with beautifulsoup4 python build.py
```

  若有新增的中文句子還沒有翻譯，建置時會顯示 `missing: N`，並把清單寫入 `i18n/missing.<語言>.json`；補上翻譯後再建置一次即可。
