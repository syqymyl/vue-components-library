<template>
  <button class="mango-button" :class="{ [`mango-theme-${theme}`]: theme }">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    // 如果 theme undefined，则默认为 button
    theme: { type: String, default: 'button' },
  },
}
</script>

<style lang="scss">
$h: 32px; // 提前声明变量
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.mango-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  & + & {
    // mango-button + mango-button
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    // 兼容 firefox
    border: 0;
  }
}
</style>
