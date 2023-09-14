<demo>
支持 error
</demo>
<template>
  <Input value="楼" error="姓名不能少于两个字" />
</template>

<script lang="ts">
import { Input } from '../../lib/index'
export default {
  components: { Input },
}
</script>
