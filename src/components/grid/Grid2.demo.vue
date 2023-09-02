<demo>
支持 offset
</demo>
<template>
  <!-- offset 参数： 默认将一行划分为 24 等份
                      设置 offset 值可以将所设列左边空出对应数值的等份列
                      每行 span 及 offset 的加和总值应等于 24 -->
  <Row>
    <Col span="2" offset="4"></Col>
    <Col span="18"></Col>
  </Row>
  <Row>
    <Col span="2"></Col>
    <Col span="18" offset="4"></Col>
  </Row>
  <Row>
    <Col span="4"></Col>
    <Col span="4" offset="4"></Col>
    <Col span="6" offset="6"></Col>
  </Row>
</template>

<script lang="ts">
import { Row } from '../../lib/index'
import { Col } from '../../lib/index'
export default {
  components: { Row, Col },
}
</script>
