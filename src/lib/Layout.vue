<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  name: 'Layout',
  setup(props, content) {
    const layoutClass = reactive({ hasSider: false })
    const defaults = content.slots.default()
    defaults.forEach((vm) => {
      if (vm.type.name === 'Sider') {
        layoutClass.hasSider = true
      }
    })
    return { layoutClass }
  },
}
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
