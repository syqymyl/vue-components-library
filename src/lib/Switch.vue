<template>
  <button
    class="mango-switch"
    @click="toggle"
    :class="{ 'mango-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: { value: Boolean }, // 接收外部传过来的变量
  // setup() 函数中返回的对象会暴露给模板和组件实例
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$white: white;
$grey: #bfbfbf;
$purple: #6134c2;
$h: 22px;
$h2: $h - 4px;

.mango-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: $grey;
  border-radius: calc($h/2);
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: $white;
    border-radius: calc($h2/2);
    transition: all 250ms;
  }
  &.mango-checked {
    background: $purple;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.mango-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
