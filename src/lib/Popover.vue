<template>
  <div class="mango-popover" ref="popover">
    <div
      ref="contentWrapper"
      class="mango-content-wrapper"
      :class="{ [`mango-content-wrapper-position-${position}`]: true }"
      v-show="visible"
      @click.stop
    >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="mango-trigger-wrapper"
      ><slot></slot
    ></span>
  </div>
</template>

<script>
import { ref, nextTick, computed, onMounted, onUnmounted } from 'vue'
export default {
  name: 'Popover',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      },
    },

    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['click', 'hover'].indexOf(value) >= 0
      },
    },
  },

  setup(props) {
    onMounted(() => {
      if (props.trigger === 'click') {
        popover.value.addEventListener('click', (e) => {
          e.stopPropagation()
          onClick()
        })
      } else {
        popover.value.addEventListener('mouseenter', onShow)
        popover.value.addEventListener('mouseleave', onClose)
      }
    })

    onUnmounted(() => {
      if (props.trigger === 'click') {
        popover.value.removeEventListener('click', (e) => {
          e.stopPropagation()
          onClick()
        })
      } else {
        popover.value.removeEventListener('mouseenter', onShow)
        popover.value.removeEventListener('mouseleave', onClose)
      }
    })

    // vue3 里 ref 获取 DOM 节点
    const visible = ref(false)
    const popover = ref(null)
    const contentWrapper = ref(null)
    const triggerWrapper = ref(null)

    // 定位气泡文字
    const positionContent = () => {
      document.body.appendChild(contentWrapper.value)
      // 获取气泡文字高度: height2
      const { height: height2 } = contentWrapper.value.getBoundingClientRect()
      let {
        width,
        height,
        top,
        left,
      } = triggerWrapper.value.getBoundingClientRect()
      let direction = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          // 让气泡以按钮为基准居中
          top: top + window.scrollY + (height - height2) / 2,
          left: left + window.scrollX,
        },
        right: {
          top: top + window.scrollY + (height - height2) / 2,
          left: left + width + window.scrollX,
        },
      }
      contentWrapper.value.style.left = direction[props.position].left + 'px'
      contentWrapper.value.style.top = direction[props.position].top + 'px'
    }

    // 让气泡文字出现/消失
    const onShow = () => {
      visible.value = true
      nextTick(() => {
        positionContent()
        // 实现点击页面空白处气泡文字隐藏功能，而添加监听事件
        document.addEventListener('click', onClose)
      })
    }
    const onClose = () => {
      visible.value = false
      document.removeEventListener('click', onClose)
    }

    // 点击按钮/页面空白处触发事件
    const onClick = () => {
      visible.value = !visible.value
      if (visible.value === true) {
        onShow()
      } else {
        onClose()
      }
    }

    return {
      visible,
      popover,
      contentWrapper,
      triggerWrapper,
      positionContent,
      onShow,
      onClose,
      onClick,
    }
  },
}
</script>

<style lang="scss" scoped>
$border-color: #6134c2;
$border-radius: 4px;
.mango-popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.mango-content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  // 不用 box-shadow，因为小三角没有阴影，改用 filter，配合 background-color
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px rgba(97, 52, 194, 0.5));
  background-color: white;
  padding: 0.5em 1em;
  max-width: 20em; // 控制气泡文字宽度
  word-break: break-all; // 解决气泡内容是英文时不换行问题

  &::before,
  &::after {
    content: '';
    display: block;
    border: 10px solid transparent; // 产生一个透明的边长为 20px 的正方形
    width: 0px;
    height: 0px;
    position: absolute;
  }

  &-position-top {
    margin-top: -10px;
    transform: translateY(-100%);

    &::before,
    &::after {
      left: 10px;
      border-bottom: none; // 防抖
    }
    &::before {
      border-top-color: #6134c2; // 透明的边长为 20px 的正方形的顶部三角为紫色
      top: 100%;
    }
    // 白色三角
    &::after {
      border-top-color: white; // 透明的边长为 20px 的正方形的顶部三角为白色
      top: calc(100% - 1px); // 白色三角往上偏移 1px，让紫色边框露出
    }
  }

  &-position-bottom {
    margin-top: 10px;

    &::before,
    &::after {
      left: 10px;
      border-top: none; // 防抖
    }
    &::before {
      border-bottom-color: #6134c2;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }

  &-position-left {
    margin-left: -10px;
    transform: translateX(-100%);

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-right: none; // 防抖
    }
    &::before {
      border-left-color: #6134c2;
      left: 100%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }

  &-position-right {
    margin-left: 10px;

    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-left: none; // 防抖
    }
    &::before {
      border-right-color: #6134c2;
      right: 100%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}

.mango-trigger-wrapper {
  // 解决因按钮高度高于内部文字导致气泡文字位置偏移问题
  display: inline-block;
}
</style>
