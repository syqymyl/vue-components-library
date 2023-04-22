<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">LOGO</div>
    <!-- 添加 click事件 -->
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const menuVisiable = inject<Ref<boolean>>('menuVisiable') // get，通过 menuVisiable 获取
    const toggleMenu = () => {
      // 定义 click 事件触发的函数
      menuVisiable.value = !menuVisiable.value
    }
    return { toggleMenu }
  },
}
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  z-index: 10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
