---
name: vue-tailwind
description: 當需要撰寫、修改或重構 Vue 元件時使用，包含 template 結構、Tailwind 樣式、響應式設計、動畫與互動。適用於所有 Vue SFC (.vue) 相關任務。
---

# Vue + Tailwind 開發規範

## 元件結構（SFC 順序）

```vue
<script setup lang="ts">
// 1. imports
// 2. props / emits
// 3. reactive state
// 4. computed
// 5. methods
// 6. lifecycle hooks
</script>

<template>
  <!-- 根元素只能有一個 -->
</template>

<style scoped>
/* 只放 Tailwind 無法做到的樣式，例如自訂動畫 keyframes */
</style>
```

## Tailwind 使用原則

- **優先用 Tailwind utility class**，不要寫 inline style
- 響應式從小到大：`sm:` `md:` `lg:` `xl:`
- 深色模式用 `dark:` prefix
- 重複使用的樣式組合抽成元件，不要到處複製 class
- 避免用 `!important`（`!` prefix）除非迫不得已

## 常用 Tailwind 模式

```html
<!-- Flex 置中 -->
<div class="flex items-center justify-center">

<!-- 響應式格線 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<!-- Hover + Transition -->
<button class="bg-blue-500 hover:bg-blue-600 transition-colors duration-200">

<!-- 文字截斷 -->
<p class="truncate max-w-xs">

<!-- 絕對置中 -->
<div class="absolute inset-0 flex items-center justify-center">
```

## Vue 互動規範

- 用 `v-bind:class` 或 `:class` 做條件樣式，不要用 `v-if` 切換樣式
- 列表一定要加 `:key`
- 事件處理命名：`handle` 開頭，例如 `handleClick`、`handleSubmit`
- Props 要定義型別，使用 `defineProps<{ ... }>()`

## 動畫

- 簡單 hover/transition → 用 Tailwind `transition` class
- 進場/離場 → 用 Vue `<Transition>` 元件搭配 Tailwind
- 複雜動畫 → 在 `<style scoped>` 寫 `@keyframes`
