<demo>
常规用法
</demo>
<template>
  <!-- Switch 的属性有： 
       v-model：是否打开开关，默认处于关闭状态
  -->
  <Switch v-model:value="bool" />
</template>

<script lang="ts">
import { Switch } from '../lib/index'
import { ref } from 'vue'
export default {
  components: {
    Switch,
  },
  setup() {
    const bool = ref(false)
    return {
      bool,
    }
  },
}
</script>
