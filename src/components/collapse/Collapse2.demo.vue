<demo>
手风琴
</demo>
<template>
  <!-- 只能展开一个，接受参数：accordion -->
  <Collapse accordion>
    <CollapseItem title="标题1">内容1</CollapseItem>
    <CollapseItem title="标题2">内容2</CollapseItem>
    <CollapseItem title="标题3">内容3</CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import { Collapse, CollapseItem } from '../../lib/index'
export default {
  components: { CollapseItem, Collapse },
}
</script>
