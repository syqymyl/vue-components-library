<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>山竹UI</h1>
      <h2>一个基于 Vue 的 UI 组件库</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
}
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 20px;
$color: #007974;

// 实现背景渐变
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(227, 255, 253, 1) 0%,
    rgba(183, 233, 230, 1) 100%
  );
}

// 页面下半部分的 icon 样式（变大）
.features {
  >svg {
    width: 64px;
    height: 64px;
  }
}

// 页面上半部分中的文字和链接样式
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

// 链接（Github、开始）样式
  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
