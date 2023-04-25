<template>
  <div class="demo">
    <!-- 展示标题 -->
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <!-- 引用组件 -->
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button @click="toggleCode">查看代码</Button>
    </div>
    <div class="demo-code" v-if="codeVisible">
      <!-- 代码展示 -->
      <pre class="language-html" v-html="html" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
// 使用 Prism 对代码进行高亮
import "prismjs";
import "prismjs/themes/prism.css";
import { computed, ref } from "vue";
const Prism = (window as any).Prism;

export default {
  components: {
    Button,
  },
  props: {
    // 传入 SwitchDemo1 和 SwitchDemo2
    component: Object,
  },
  setup(props) {
    // 使用  Prism 对代码进行高亮
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        "html"
      );
    });
    // 点击事件：是否显示代码
    const toggleCode = () => {
      codeVisible.value = !codeVisible.value;
    };
    // 默认不显示
    const codeVisible = ref(false);
    return {
      Prism,
      html,
      codeVisible,
      toggleCode,
    };
  },
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, "Courier New", Courier, monospace;
      margin: 0;
    }
  }
}
</style>
