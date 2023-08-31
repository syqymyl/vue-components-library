<demo>
支持 hover 触发
</demo>
<template>
  <div class="popover-wrapper2">
    <!-- trigger 属性值有：click/hover，默认值是 click -->
    <Popover position="left" trigger="hover">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>hover</Button>
    </Popover>
    <Popover position="top" trigger="hover">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>hover</Button>
    </Popover>
    <Popover position="bottom" trigger="hover">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>hover</Button>
    </Popover>
    <Popover position="right" trigger="hover">
      <template v-slot:content>
        <div>content</div>
      </template>
      <Button>hover</Button>
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
.popover-wrapper2 {
  padding-top: 60px;
  padding-bottom: 60px;
  margin-left: 100px;
}
</style>
