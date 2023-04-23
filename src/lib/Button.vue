<template>
  <div :size="size">
    <!-- 让 div 里的 button 绑定 $attrs（使用 v-bind 批量绑定属性） -->
    <button v-bind="rest"><slot /></button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 让 div 不继承属性,取消默认绑定
  setup(props, context) {
    // 将属性分开，其中 attrs 可获取所有属性
    const { size, ...rest } = context.attrs
    return { size, rest }
  },
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>
