<template>
  <router-view />
  <!-- 在此处展示组件 -->
</template>

<script>
import { provide, ref, onMounted } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth // 获取屏幕/页面宽度;
    console.log(width)
    const menuVisible = ref(width <= 700 ? false : true)
    provide('menuVisible', menuVisible) // set
    router.afterEach(() => {
      if (width <= 700) {
        // 屏幕宽度小于等于700时，aside 隐藏
        menuVisible.value = false
      }
    })
    // 监听屏幕宽度
    onMounted(() => {
      window.addEventListener('resize', () => {
        const width = document.documentElement.clientWidth
        menuVisible.value = width <= 700 ? false : true
      })
    })
  },
}
</script>
