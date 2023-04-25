<demo>
支持 size
</demo>
<template>
  <!-- theme=text下的size -->
  <div>
    <Button size="big" theme="text">文字按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button size="small" theme="text">文字按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>
