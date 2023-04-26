<demo>
支持 disabled
</demo>
<template>
  <!-- Switch 的属性有： 
       v-model：是否打开 Switch，默认处于关闭状态
       disabled：是否禁用 Switch，默认处于禁用状态
  -->
  <Switch v-model:value="bool" disabled />
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
