---
name: responsive-design
description: 當需要處理響應式設計（RWD）問題時使用，包含：手機版跑版、breakpoint 設定、行動裝置字體調整、觸控區域大小、隱藏/顯示元素等行動優先設計任務。
---

# 響應式設計（RWD）規範

## Tailwind Breakpoint 對照

| Prefix | 最小寬度 | 裝置 |
|--------|----------|------|
| （無）  | 0px      | 手機（預設） |
| `sm:`  | 640px    | 大手機 |
| `md:`  | 768px    | 平板 |
| `lg:`  | 1024px   | 桌機 |
| `xl:`  | 1280px   | 大桌機 |

## Mobile First 原則

**先寫手機版，再用 prefix 覆蓋大螢幕：**

```html
<!-- ✅ 正確：手機 1 欄，平板 2 欄，桌機 3 欄 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- ❌ 錯誤：從桌機反過來縮 -->
<div class="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
```

## 常用 RWD 模式

```html
<!-- 導覽列：手機收合，桌機展開 -->
<nav class="hidden md:flex">...</nav>
<button class="md:hidden">☰</button>

<!-- 文字大小響應式 -->
<h1 class="text-2xl md:text-4xl lg:text-5xl">

<!-- 圖片滿版 -->
<img class="w-full h-auto object-cover">

<!-- 容器最大寬度 + 置中 -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<!-- 手機垂直排列，桌機水平 -->
<div class="flex flex-col md:flex-row gap-4">
```

## 觸控裝置注意事項

- 所有可點擊元素最小觸控區域：`min-h-[44px] min-w-[44px]`
- 手機上按鈕間距要夠：`gap-3` 以上
- 避免 hover-only 的互動（手機沒有 hover）
- 表單 input 在 iOS 避免縮放：`text-[16px]` 以上

## 排查 RWD 問題的步驟

1. 開 Chrome DevTools → 切換裝置模式
2. 從最窄（375px）開始往上拉，找到破版的 breakpoint
3. 檢查是哪個元素超出父層寬度（`overflow: hidden` 暫時加上去看）
4. 確認是 `width` 固定值造成的，還是 `padding/margin` 超出
