<template>
  <div>Button 示例</div>
  <h1>主题示例</h1>
  <div>
    <Button>默认按钮</Button>
    <Button theme="button">默认按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
  <h1>尺寸示例</h1>
  <!-- theme=normal下的size -->
  <div>
    <Button size="big">默认按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">默认按钮</Button>
  </div>
  <!-- theme=link下的size -->
  <div>
    <Button theme="link" size="big">链接按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button size="small" theme="link">链接按钮</Button>
  </div>
  <!-- theme=text下的size -->
  <div>
    <Button size="big" theme="text">文字按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button size="small" theme="text">文字按钮</Button>
  </div>
  <h1>等级示例</h1>
  <div>
    <!-- theme=normal下的 level -->
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <!-- theme=link下的 level -->
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <!-- theme=text下的 level -->
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
  <h1>禁用状态</h1>
  <div>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
    <Button theme="text" disabled>禁用文字按钮</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>
