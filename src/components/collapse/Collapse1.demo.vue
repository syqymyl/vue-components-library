<demo>
全展开
</demo>
<template>
  <!-- 点击三个标题，展开相应内容，可以全部同时展开 -->
  <Collapse>
    <CollapseItem title="标题1">内容1</CollapseItem>
    <CollapseItem title="标题2">内容2</CollapseItem>
    <CollapseItem title="标题3">内容3</CollapseItem>
  </Collapse>
</template>

<script lang="ts">
import { Collapse } from '../../lib/index'
import { CollapseItem } from '../../lib/index'
export default {
  components: { CollapseItem, Collapse },
}
</script>
