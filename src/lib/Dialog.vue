<template>
  <!-- 为弹窗添加可见/不可见功能 -->
  <template v-if="visible">
    <div class="mango-dialog-overlay"></div>
    <div class="mango-dialog-wrapper">
      <div class="mango-dialog">
        <header>
          标题
          <span class="mango-dialog-close"></span>
        </header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button level="main">OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import Button from './Button.vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false, // 弹窗默认不可见
    },
  },
  components: {
    Button,
  },
}
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.mango-dialog {
  // 对话框盒子样式
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5); // 变灰
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  // 右上角关闭按钮
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      // 右上角关闭按钮两根横线
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      // 右上角关闭按钮中一根横线逆时针旋转45°
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      // 右上角关闭按钮中一根横线顺时针旋转45°
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
