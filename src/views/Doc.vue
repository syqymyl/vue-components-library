<template>
  <div class="layout">
    <!-- toggleMenuButtonVisible 表示菜单按钮 -->
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/tabs">Tabs-标签</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch-开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button-按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog-对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/input">Input-输入框</router-link>
          </li>
          <li>
            <router-link to="/doc/grid">Layout-布局</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">Grid-网格</router-link>
          </li>
          <li>
            <router-link to="/doc/popover">Collapse-折叠层</router-link>
          </li>
          <li>
            <router-link to="/doc/Collapse">Popover-弹出框</router-link>
          </li>
          <li>
            <router-link to="/doc/Pagination">Pagination-分页</router-link>
          </li>
        </ol>
      </aside>
      <main @click="closeAside">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from 'vue'
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>('menuVisible') // get

    // 当页面大小 <= 700且侧边栏显示时，点击空白处可隐藏侧边栏
    const closeAside = () => {
      const width = document.documentElement.clientWidth
      if (menuVisible.value && width <= 700) {
        menuVisible.value = !menuVisible.value
      }
    }
    return { menuVisible, closeAside }
  },
}
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;

    @media (max-width: 700px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px 48px;
    background: white;
  }
}

aside {
  background: #acacef;
  width: 190px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;

  // 让文档和组件列表 padding
  > h2 {
    font-size: 20px;
    margin: 8px 0;
    padding: 0px 16px;
  }

  > ol {
    > li {
      > a {
        display: block; // 填充整个 li
        padding: 10px 36px;
        text-decoration: none;
      }

      // 高亮当前路由
      .router-link-active {
        background: white;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
