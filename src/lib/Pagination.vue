<template>
  <div
    class="mango-pagination"
    :class="{ hide: hideIfOnePage === true && totalPage <= 1 }"
  >
    <span
      class="mango-pagination-nav prev"
      :class="{ disabled: currentPage === 1 }"
      @click="onClickPage(currentPage - 1)"
      ><Icon name="left"></Icon
    ></span>
    <span
      v-for="(page, index) in pages"
      @click="onClickPage(page)"
      :key="index"
      class="mango-pagination-item"
      :class="{ active: page === currentPage, dots: page === '...' }"
      >{{ page }}</span
    >
    <span
      class="mango-pagination-nav next"
      :class="{ disabled: currentPage === totalPage }"
      @click="onClickPage(currentPage + 1)"
      ><Icon name="right"></Icon
    ></span>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Icon from './Icon.vue'
export default {
  name: 'Pagination',
  components: { Icon },
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    hideIfOnePage: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, context) {
    let pages = computed(() => {
      // 注意要先去重再加省略号，否则省略号会被去重只剩一个
      let u = unique(
        ref([
          1,
          props.totalPage,
          props.currentPage,
          props.currentPage - 1,
          props.currentPage - 2,
          props.currentPage + 1,
          props.currentPage + 2,
        ])
          .value.filter((n) => n >= 1 && n <= props.totalPage) // 过滤负页数
          .sort((a, b) => a - b) // 排序
      ).reduce((pre, cur, index, arr) => {
        //添加省略号
        pre.push(cur)
        arr[index + 1] && arr[index + 1] - arr[index] > 1 && pre.push('...')
        // console.log(pre)
        return pre
      }, [])
      return u
    })
    // 去重
    const unique = (array) => {
      return [...new Set(array)]
    }
    // 页码切换
    const onClickPage = (n) => {
      if (n >= 1 && n <= props.totalPage) {
        context.emit('update:currentPage', n)
      }
    }

    return { pages, unique, onClickPage }
  },
}
</script>

<style lang="scss" scoped>
$grey: #d9d9d9;
$purple: #6134c2;
$border-radius: 4px;
$width: 28px;
$height: 28px;
$margin: 4px;
$padding: 4px;
$font-size: 16px;

.mango-pagination {
  &.hide {
    display: none;
  }
  display: flex;
  justify-content: flex-start;
  align-items: center;
  user-select: none; // 控制用户不能选中文本
  &-item,
  &-nav {
    display: inline-flex;
    border-radius: $border-radius;
    justify-content: center;
    align-items: center;
    margin: 0 $margin;
    font-size: $font-size;
  }
  &-item {
    border: 1px solid $grey;
    padding: 0 padding;
    display: inline-flex;
    min-width: $width;
    cursor: pointer;
    &.dots {
      cursor: default;
      border: none;
    }
    &.active,
    &:hover {
      border-color: $purple;
    }
    &.active {
      cursor: default;
    }
  }
  &-nav {
    width: $width;
    height: $height;
    background-color: $grey;
    cursor: pointer;
    &.disabled {
      cursor: default;
      svg {
        fill: darken($grey, 8%);
      }
    }
  }
}
</style>
