<template>
  <button class="mango-button" :class="`theme-${theme}`"><slot /></button>
</template>

<script>
export default {
  props: {
    // 如果 theme undefined，则默认为 button
    theme: { type: String, default: 'button' },
  },
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>
