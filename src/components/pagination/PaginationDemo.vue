<template>
  <div>
    <h1>Pagination 示例</h1>
    <Demo :component="Pagination1Demo" />
  </div>
</template>

<script lang="ts">
import Demo from '../Demo.vue'
import Pagination1Demo from './Pagination1.demo.vue'
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      Pagination1Demo,
    }
  },
}
</script>
