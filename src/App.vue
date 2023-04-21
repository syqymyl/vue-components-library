<template>
  <div>
    导航栏 | <router-link to="/">Aki</router-link> |
    <router-link to="/xxx">Aki2</router-link>
    <!-- 添加跳转链接 -->
  </div>
  <hr />
  <router-view />
  <!-- 在此处展示组件 -->
</template>

<script>
export default {
  name: "App",
};
</script>
