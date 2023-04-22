<template>
  <router-view />
  <!-- 在此处展示组件 -->
</template>

<script>
import { provide, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth // 获取屏幕/页面宽度;
    const menuVisiable = ref(width <= 500 ? false : true) // 页面宽度小于等于500默认在手机端，为 false ；大于500默认在pc端，为 true
    const menuVisiable = ref(false) // ref(false) 表示默认值为 false, 引用
    provide('menuVisiable', menuVisiable) // set
  },
}
</script>
