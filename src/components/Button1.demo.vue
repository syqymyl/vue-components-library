<demo>
常规用法
</demo>
<template>
  <div>
    <!-- theme 未定义时，默认值是 button -->
    <Button>默认按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>
