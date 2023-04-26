<demo>
常规使用
</demo>
<template>
  <!-- 通过 Tabs 控制导航的选中和内容的切换，selected 用 title 表示 -->
  <Tabs v-model:selected="x">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
    <Tab title="导航33333">内容3</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from '../lib/Tabs.vue'
import Tab from '../lib/Tab.vue'
import { ref } from 'vue'
export default {
  components: { Tabs, Tab },
  setup() {
    const x = ref('导航1')
    return { x }
  },
}
</script>
