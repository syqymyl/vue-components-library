<demo>
支持 level
</demo>
<template>
  <!-- level 属性值有：main/normal/danger，默认值是 normal -->
  <div>
    <!-- theme=normal下的 level -->
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <!-- theme=link下的 level -->
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <!-- theme=text下的 level -->
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Button } from '../../lib/index'
export default {
  components: { Button },
}
</script>
