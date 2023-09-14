<demo>
常规用法
</demo>
<template>
  <!-- Pagination 的属性有：
       totalPage：总页数；
       currentPage：当前页，此处设置为10页
       hideIfOnePage: 只有一页时是否隐藏页码，值为 true/false，默认为 true，表示只有一页时隐藏页码 -->
  <Pagination
    :totalPage="20"
    v-model:currentPage="currentPage"
    :hideIfOnePage="false"
  >
  </Pagination>
</template>

<script lang="ts">
import { Pagination } from '../../lib/index'
import { ref } from 'vue'
export default {
  components: { Pagination },
  setup() {
    const currentPage = ref(10)
    return { currentPage }
  },
}
</script>
