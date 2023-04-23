<template>
  <button class="mango-button" :class="classes">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props: {
    // 如果 theme undefined，则默认为 button
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  setup(props) {
    const { theme, size } = props
    const classes = computed(() => {
      return { [`mango-theme-${theme}`]: theme, [`mango-size-${size}`]: size }
    })
    return { classes }
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
  &.mango-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.mango-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.mango-theme-button {
    &.mango-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px;
    }
    &.mango-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  }
}
</style>
