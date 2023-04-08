<template>
  <div>hi</div>
  <Aki />
</template>

<script>
import Aki from "./components/Aki.vue";

export default {
  name: "App",
  components: {
    // 以下代码等价于 HelloWorld:HelloWorld，左边是标签化名，右边是组件的引用
    // HelloWorld,
    Aki,
  },
};
</script>
