<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>山竹UI</h1>
        <h2>一个基于 Vue 的 UI 组件库</h2>
        <p class="actions">
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: { Topnav },
}
</script>

<style lang="scss" scoped>
$purple: #613cdc;
$border-radius: 20px;
$color: #6134c2;

// 实现背景渐变和圆弧
.topnavAndBanner {
  background: linear-gradient(
    90deg,
    rgba(202, 190, 227, 1) 0%,
    rgba(172, 172, 239, 1) 100%
  );
  clip-path: ellipse(80% 60% at 50% 40%);
}

// 页面下半部分的样式
.features {
  margin: 64px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%; // 显示2个
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;
    > ul {
      > li {
        width: 33.3333%; // 显示3个
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      // icon 与 文字的布局
      grid-template-areas:
        'icon title'
        'icon text';
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      // icon 变大
      > svg {
        grid-area: icon;
        width: 72px;
        height: 72px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text;
      }
    }
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
      background: $purple;
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
