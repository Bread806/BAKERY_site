---
name: ui-visual-review
description: 當需要審查、修正網頁視覺問題時使用，包含：間距不對、對齊跑掉、字體大小不一致、顏色不統一、RWD 破版、hover 狀態缺失等 UI 問題的排查與修復。
---

# UI 視覺審查規範

## 審查流程

收到修改需求後，先確認以下幾點再動手改：

1. **問題定位**：是哪個元件 / 哪個 breakpoint 出問題？
2. **根本原因**：是 class 寫錯、繼承來的樣式、還是父層影響？
3. **修改範圍**：只改這個元件，還是全域都要更新？

## 常見問題對照表

| 問題 | 可能原因 | 解法 |
|------|----------|------|
| 元素沒對齊 | 少了 `flex`/`grid` | 確認父層佈局 |
| 間距太大/小 | `margin` 或 `padding` 繼承 | 用 `m-0` 或 `p-0` 重設 |
| RWD 破版 | 沒有設 `max-w` 或 `overflow-hidden` | 加上寬度限制 |
| 文字跑版 | 沒 `truncate` 或 `break-words` | 加文字處理 class |
| 顏色不一致 | 硬寫色碼而非用 Tailwind 變數 | 改用設計系統的 token |
| hover 沒反應 | 少了 `transition` 或 `cursor-pointer` | 補上互動 class |

## 修改原則

- **最小改動**：只改出問題的地方，不要順手大改其他地方
- **保留意圖**：理解原本設計的意圖再修，不要直接蓋掉
- **說明變更**：每次修改簡短說明「改了什麼」和「為什麼」
- **測試 breakpoint**：修完之後確認 mobile / tablet / desktop 三個尺寸

## 視覺一致性檢查清單

- [ ] 字體大小是否統一（標題/內文/標籤）
- [ ] 顏色是否用設計系統的 token（不要硬寫 hex）
- [ ] 間距是否用 Tailwind 的 spacing scale（4/8/12/16...）
- [ ] 圓角是否一致（`rounded-md` 還是 `rounded-lg`）
- [ ] 陰影是否一致（`shadow-sm` 還是 `shadow-md`）
- [ ] 所有可點擊元素有 `cursor-pointer` 和 hover 狀態
