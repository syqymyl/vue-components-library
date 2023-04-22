<template>
  <router-view />
  <!-- 在此处展示组件 -->
</template>

<script>
import { provide, ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const menuVisiable = ref(false) // ref(false) 表示引用
    provide('menuVisiable', menuVisiable) // set
  },
}
</script>
