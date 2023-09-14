<demo>
支持 多种设备或屏幕宽度响应式设置
</demo>
<template>
  <!-- 参数： ipad、narrow-pc、pc、wide-pc，每个参数接受对 span 的设置，每行中各设备的 span 值加和总和必须为24 -->
  <!-- 作用：使每列在各设备或屏幕宽度上，以所设置的数值成比例呈现，默认设置为手机端，以等比例呈现 -->
  <Row>
    <Col
      span="12"
      :ipad="{ span: 8 }"
      :narrow-pc="{ span: 4 }"
      :pc="{ span: 2 }"
      :wide-pc="{ span: 1 }"
    ></Col>
    <Col
      span="12"
      :ipad="{ span: 16 }"
      :narrow-pc="{ span: 20 }"
      :pc="{ span: 22 }"
      :wide-pc="{ span: 23 }"
    ></Col>
  </Row>
</template>

<script lang="ts">
import { Row, Col } from '../../lib/index'
export default {
  components: { Row, Col },
}
</script>
