<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <!-- z-index 越大，越在上层，虽然这里是1，但该 Dialog 组件中设置了 z-index 是 10，所以 Dialog 应该在上层，但结果是显示在下层。为了防止 Dialog 被遮挡，可以使用 Teleport 组件 -->
  <div style="position: relative; z-index: 1">
    <!-- 点击按钮弹出或关闭弹窗 -->
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <!-- 使用具名插槽控制弹窗内容 -->
      <template v-slot:content>
        <div>用户名：</div>
        <div>密码：</div>
      </template>
      <template v-slot:title>
        <strong>登录</strong>
      </template></Dialog
    >
  </div>
  <div
    style="
      position: relative;
      z-index: 2;
      width: 300px;
      height: 300px;
      background: #add8e6;
    "
  ></div>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import { ref } from 'vue'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false)
    const toggle = () => {
      x.value = !x.value
    }
    // 当返回 true 时，点击 ok 即关闭弹窗；当返回false 时，无法关闭弹窗（写填满文字才能关闭弹窗的功能）
    const f1 = () => {
      return false
    }
    const f2 = () => {}
    return {
      x,
      toggle,
      f1,
      f2,
    }
  },
}
</script>
