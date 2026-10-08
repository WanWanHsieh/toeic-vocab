# 多益單字通

多益（TOEIC）核心單字學習網頁，純 HTML 靜態網站，不需要後端。

## 功能

- **單字學習**：字卡模式、單字列表、主題單字、常考片語、拼字測驗、收藏單字、小測驗
- **TOEIC 模擬**：依 Part 分類的模擬測驗
- **閱讀練習**：每日一篇、故事閱讀
- **文法教學**：文法課程
- 支援淺色／深色主題切換

## 在電腦上執行

```bash
python -m http.server 8000
```

開啟 http://localhost:8000

## 檔案結構

| 路徑 | 用途 |
|---|---|
| `index.html` | 整個網站（畫面、樣式、程式） |
| `data/` | 單字、閱讀文章等題庫資料（JSON） |

> 進階版（PWA、FSRS 間隔重複）請見 [toeic-app](https://github.com/WanWanHsieh/toeic-app)。
