// @ts-ignore
import Dialog from './Dialog.vue'
// @ts-ignore
import { createApp, h } from 'vue'
export const openDialog = (options) => {
  const { title, content, ok, cancel, closeOnClickOverlay } = options
  const div = document.createElement('div')
  document.body.appendChild(div)
  // 关闭弹窗：实例不挂载到 div 上，并把 div 移除
  const close = () => {
    // @ts-ignore
    app.unmount(div)
    div.remove()
  }
  // 创建一个 Dialog 实例
  const app = createApp({
    render() {
      return h(
        Dialog,
        {
          visible: true,
          // 监听 visible
          'onUpdate:visible': (newVisible) => {
            if (newVisible === false) {
              close()
            }
          },
          ok,
          cancel,
          closeOnClickOverlay,
        },
        {
          title,
          content,
        }
      )
    },
  })
  // 将 Dialog 实例挂载到新创建的 div上（因为弹窗不在 body 中）
  app.mount(div)
}
