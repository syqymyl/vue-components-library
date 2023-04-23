<template>
  <button class="mango-button" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  props: {
    // 从外部接受对象 theme 等，自动绑定到 this 上
    // 如果 theme undefined，则默认为 button
    theme: {
      type: String,
      default: 'button', // link/text
    },
    size: {
      type: String,
      default: 'normal', // big/small
    },
    level: {
      type: String,
      default: 'normal', // main/danger
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    //
    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`mango-theme-${theme}`]: theme,
        [`mango-size-${size}`]: size,
        [`mango-level-${level}`]: level,
      }
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
$red: red;
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
  transition: background 250ms;
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
  &.mango-theme-button {
    // 限制 size 为 normal
    &.mango-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.mango-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.mango-theme-link {
    &.mango-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.mango-theme-text {
    &.mango-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.mango-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.mango-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.mango-theme-link,
  &.mango-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
}
</style>
