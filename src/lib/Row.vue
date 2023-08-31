<template>
  <div class="mango-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
import { computed, provide } from 'vue'
export default {
  name: 'Row',
  props: {
    gutter: { type: Number, default: 0 },
  },
  setup(props, context) {
    const { gutter } = props
    const rowStyle = computed(() => {
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    })
    provide('gutter', gutter)
    return { rowStyle }
  },
}
</script>

<style lang="scss" scoped>
.mango-row {
  display: flex;
}
</style>
