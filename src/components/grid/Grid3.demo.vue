<demo>
支持 gutter
</demo>
<template>
  <!-- gutter 参数： 每一行的列与列之间相隔的像素大小 -->
  <Row gutter="16">
    <Col></Col>
    <Col></Col>
  </Row>
  <Row gutter="16">
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row gutter="16">
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row gutter="16">
    <Col span="2"></Col>
    <Col span="22"></Col>
  </Row>
</template>

<script lang="ts">
import { Row, Col } from '../../lib/index'
export default {
  components: { Row, Col },
}
</script>
