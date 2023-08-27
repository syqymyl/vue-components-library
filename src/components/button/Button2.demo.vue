<demo>
支持 size
</demo>
<template>
  <!-- theme=text下的size -->
  <div>
    <!-- size 属性值有：big/normal/small，默认值是 normal  -->
    <Button size="big" theme="text">文字按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button size="small" theme="text">文字按钮</Button>
  </div>
</template>

<script lang="ts">
import { Button } from '../../lib/index'
export default {
  components: { Button },
}
</script>
