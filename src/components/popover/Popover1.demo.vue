<demo>
支持 click 触发
</demo>
<template>
  <div class="popover-wrapper1">
    <!-- position 属性值有：top/bottom/left/right，默认值是 top -->
    <Popover position="left">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>click</Button>
    </Popover>
    <Popover position="top">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>click</Button>
    </Popover>
    <Popover position="bottom">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>click</Button>
    </Popover>
    <Popover position="right">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>click</Button>
    </Popover>
  </div>
</template>

<script lang="ts">
import { Popover } from '../../lib/index'
import { Button } from '../../lib/index'
export default {
  components: { Popover, Button },
}
</script>

<style lang="scss" scoped>
.popover-wrapper1 {
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 60px;
  margin-left: 100px;
}
</style>
