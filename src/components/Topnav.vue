<template>
  <div class="topnav">
    <!-- 点击山竹logo回首页 -->
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-shanzhu"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li class="home">
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <a
          href="https://github.com/syqymyl/vue-components-library"
          target="_blank"
          ><svg class="icon">
            <use xlink:href="#icon-github"></use></svg
        ></a>
      </li>
    </ul>
    <!-- toggleMenuButtonVisible 控制页面菜单按钮在首页不出现 -->
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    // 菜单按钮
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false, // 默认 false，菜单按钮不出现
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get，通过 menuVisible 获取
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
$purple: #6134c2;
$topnav-index: 20;
$logo-max-width: 6em;
$logo-svg-size: 40px;
$menu-svg-size: 32px;
$home-font-size: 20px;
$aside-button-size: 32px;
$aside-button-left: 16px;

.topnav {
  color: $purple;
  display: flex;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $topnav-index;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: $logo-max-width;
    margin-right: auto;

    // 让导航栏中的icon变大
    > svg {
      width: $logo-svg-size;
      height: $logo-svg-size;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
      > a {
        > svg {
          width: $logo-svg-size;
          height: $logo-svg-size;
        }
      }
    }

    > .home {
      font-size: $home-font-size;
      padding: 2px 0;
    }
  }

  // 菜单按钮样式
  > .toggleAside {
    width: $aside-button-size;
    height: $aside-button-size;
    position: absolute;
    left: $aside-button-left;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }

  // 当页面宽度小于700px时隐藏菜单，Logo居中
  @media (max-width: 700px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
