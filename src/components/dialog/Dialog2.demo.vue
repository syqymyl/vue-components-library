<demo>
支持 Button 内置弹窗
</demo>
<template>
  <!-- 使用 openDialog， 它可以接受的参数有： 
       title：Dialog 的标题
       content：Dialog 的内容
       closeOnClickOverlay：是否可以通过点击 遮罩层 关闭 Dialog
       ok：点击确定按钮后触发函数
       cancel：点击确定按钮后触发函数 
  -->
  <div>
    <Button @click="showDialog">打开对话框</Button>
  </div>
</template>

<script lang="ts">
import { Button, openDialog } from '../../lib/index'
import { ref, h } from 'vue'
export default {
  components: {
    Button,
    openDialog,
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '南航校训'),
        content: '日新自强，知行合一',
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
