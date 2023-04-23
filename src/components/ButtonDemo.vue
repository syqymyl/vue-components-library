<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <Button>默认按钮</Button>
    <Button theme="button">默认按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button theme="text">文字按钮</Button>
  </div>
  <h1>示例2</h1>
  <div>
    <Button size="big">默认按钮</Button>
    <Button>默认按钮</Button>
    <Button size="small">默认按钮</Button>
  </div>
  <div>
    <Button theme="link" size="big">链接按钮</Button>
    <Button theme="link">链接按钮</Button>
    <Button size="small" theme="link">链接按钮</Button>
  </div>
  <div>
    <Button size="big" theme="text">文字按钮</Button>
    <Button theme="text">文字按钮</Button>
    <Button size="small" theme="text">文字按钮</Button>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: { Button },
}
</script>
