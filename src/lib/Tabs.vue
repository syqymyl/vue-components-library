<template>
  <div class="mango-tabs">
    <!-- container 用来计算下划线滑动的距离 -->
    <div class="mango-tabs-nav" ref="container">
      <!-- 渲染：t 为 title -->
      <!-- 点击哪个 Tabs 就会触发执行对该 Tab 的select 函数 -->
      <!-- 当传过来的 title 是被选中的，则具有 selected 属性 -->
      <div
        class="mango-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (el) navItems[index] = el
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <!-- 下划线："mango-tabs-nav-indicator"为了写样式，"indicator"为了得到和计算其长度 -->
      <div class="mango-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="mango-tabs-content">
      <!-- 渲染：c 为 组件 Tab -->
      <!-- 选中了哪个 title ，相应的 content 就也具有 selected 属性 -->
      <component
        class="mango-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="(c, index) in defaults"
        :is="c"
        :key="index"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue'
import { computed, ref, onMounted, onUpdated } from 'vue'
export default {
  props: {
    selected: { type: String },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]) // 数组类型为 div 元素数组
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    const x = () => {
      // navItems.value 是一个包含两个导航的div的数组
      const divs = navItems.value

      // 找到有 seleted 属性的 div
      const result = divs.filter((div) => div.classList.contains('selected'))[0]

      // 获取选中的导航的宽度
      const { width } = result.getBoundingClientRect()

      // 将选中的导航的宽度赋给下划线的长度
      indicator.value.style.width = width + 'px'

      // 获取导航栏最左边的距离，用 left1存储
      const { left: left1 } = container.value.getBoundingClientRect()

      // 获取被选中的导航标签最左边的距离，用 left2存储
      const { left: left2 } = result.getBoundingClientRect()

      // 计算下划线滑动的距离
      const left = left2 - left1

      // 为下划线加属性 left，值为滑动的距离
      indicator.value.style.left = left + 'px'
    }
    onMounted(x) // 只在第一次渲染执行
    onUpdated(x)

    const defaults = context.slots.default() // 获取外面传过来的子内容(两个 Tab 对象)
    // 返回 true，说明 defaults[0] 的类型正好是 Tab
    // console.log(defaults[0].type === Tab)
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab')
      }
    })
    // 从 default 中 取出 title
    const titles = defaults.map((tag) => {
      return tag.props.title
    })
    // click 触发函数
    const select = (title: string) => {
      context.emit('update:selected', title)
    }
    return {
      defaults,
      titles,
      select,
      navItems,
      indicator,
      container,
    }
  },
}
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.mango-tabs {
  &-nav {
    // 导航栏样式
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    // 导航栏标签样式
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }

    // 下划线样式
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }

  // 内容样式
  &-content {
    padding: 8px 0;
    // 内容的隐藏与显示
    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
