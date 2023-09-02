<demo>
常规用法
</demo>
<template>
  <!-- span 参数： 默认将一行划分为 24 等份，每行 span 的加和总值应等于 24 -->
  <Row>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row>
    <Col span="2"></Col>
    <Col span="22"></Col>
  </Row>
</template>

<script lang="ts">
import { Row } from '../../lib/index'
import { Col } from '../../lib/index'
export default {
  components: { Row, Col },
}
</script>
