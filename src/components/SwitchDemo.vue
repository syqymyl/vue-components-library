<template>
  <div>
    <!-- 通过外界获取默认的状态 -->
    <Switch :value="y" @input="y = $event" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Switch from '../lib/Switch.vue'
export default {
  components: { Switch },
  setup() {
    const y = ref(false)
    return { y }
  },
}
</script>
