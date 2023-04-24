<template>
  <div>Dialog 示例</div>
  <h1>示例1</h1>
  <!-- 点击按钮弹出或关闭弹窗 -->
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="x"
    :closeOnClickOverlay="false"
    :ok="f1"
    :cancel="f2"
  ></Dialog>
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
