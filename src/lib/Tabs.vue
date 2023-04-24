<template>
  <div class="mango-tabs">
    <div class="mango-tabs-nav">
      <!-- 渲染：t 为 title -->
      <!-- 点击哪个 Tabs 就会触发执行对该 Tab 的select 函数 -->
      <!-- 当传过来的 title 是被选中的，则具有 selected 属性 -->
      <div
        class="mango-tabs-nav-item"
        v-for="(t, index) in titles"
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
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
import { computed } from 'vue'
export default {
  props: {
    selected: { type: String },
  },
  setup(props, context) {
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
