<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button @click="onClick" @focus="onClick" @mouseover="onClick" size="small">你好</Button
    ><!-- 引用组件 -->
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log('hi')
    }
    return { onClick }
  },
}
</script>
