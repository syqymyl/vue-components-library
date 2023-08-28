<demo>
四栏布局（侧边栏独立）
</demo>

<template>
  <Layout class="layout4">
    <Sider class="demo">sider</Sider>
    <Layout>
      <Header class="demo">header</Header>
      <Content class="demo">content</Content>
      <Footer class="demo">footer</Footer>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { Layout } from '../../lib/index'
import { Sider } from '../../lib/index'
import { Header } from '../../lib/index'
import { Content } from '../../lib/index'
import { Footer } from '../../lib/index'
export default {
  components: { Layout, Sider, Header, Content, Footer },
}
</script>

<style lang="scss">
.layout4 {
  height: 40vh;
  background-color: #acacef;
}
.demo {
  border: 1px solid black;
  min-height: 50px;
}
.sider {
  width: 200px;
}
</style>
