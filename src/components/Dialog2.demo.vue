<demo>
一键打开 Dialog
</demo>
<template>
  <!-- openDialog 可接受的参数有： 
       v-model：是否显示 Dialog 
       closeOnClickOverlay：是否可以通过点击 遮罩层 关闭 Dialog
       title：Dialog 的标题
       content：Dialog 的内容
       ok：点击确定按钮后触发回调函数 f1
       cancel：点击确定按钮后触发回调函数 f2
  -->
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import { Button, openDialog } from '../lib/index'
import { ref, h } from 'vue'
export default {
  components: {
    Button,
    openDialog,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        closeOnClickOverlay: true,
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        },
      })
    }
    return {
      showDialog,
    }
  },
}
</script>
