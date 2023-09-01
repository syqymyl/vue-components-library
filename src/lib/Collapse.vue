<template>
  <div class="mango-collapse">
    <slot></slot>
  </div>
</template>

<script>
import mitt from 'mitt'
import { provide } from 'vue'
export default {
  name: 'Collapse',
  props: {
    accordion: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const emitter = mitt()
    if (props.accordion) {
      provide('emitter', emitter)
    }
    return { emitter }
  },
}
</script>

<style lang="scss" scoped>
$border-color: #6134c2;
$border-radius: 4px;
.mango-collapse {
  border: 1px solid $border-color;
  border-radius: $border-radius;
}
</style>
