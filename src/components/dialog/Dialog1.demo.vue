<demo>
常规用法
</demo>
<template>
  <!-- Dialog 的属性有： 
       v-model：是否显示 Dialog，默认隐藏
       closeOnClickOverlay：是否可以通过点击 遮罩层 关闭 Dialog，默认不可以
       ok：点击确定按钮后触发回调函数 f1
       cancel：点击确定按钮后触发回调函数 f2
  -->
  <div>
    <Button @click="toggle">打开对话框</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <div>用户名：</div>
        <div>密码：</div>
      </template>
      <template v-slot:title>
        <strong>登录</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { Button, Dialog } from '../../lib/index'
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
