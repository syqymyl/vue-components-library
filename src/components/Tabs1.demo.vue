<demo>
常规用法
</demo>
<template>
  <!-- Tabs 的属性有： v-model：标签是否处于选中状态 -->
  <!-- Tab 的属性有：
        title：类型为 String -->
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航33333">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import { Tabs, Tab } from '../lib/index'
import { ref } from 'vue'
export default {
  components: { Tabs, Tab },
  setup() {
    const x = ref('导航1')
    return { x }
  },
}
</script>
