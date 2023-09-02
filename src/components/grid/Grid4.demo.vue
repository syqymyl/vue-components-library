<demo>
支持 多种设备或屏幕宽度响应式设置
</demo>
<template>
  <!-- 参数： ipad、narrow-pc、pc、wide-pc，每个参数接受对 span 的设置-->
  <!-- 作用：使每列在各设备或屏幕宽度上，以所设置的数值成比例呈现，默认手机端呈等比例-->
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
import { Row } from '../../lib/index'
import { Col } from '../../lib/index'
export default {
  components: { Row, Col },
}
</script>
