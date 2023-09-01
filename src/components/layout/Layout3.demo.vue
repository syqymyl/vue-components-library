<demo>
四栏布局（侧边栏偏右）
</demo>

<template>
  <Layout class="mango-layout">
    <Header class="demo">header</Header>
    <Layout>
      <Content class="demo">content</Content>
      <Sider class="demo">sider</Sider>
    </Layout>
    <Footer class="demo">footer</Footer>
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
.mango-layout {
  height: 40vh;
  background-color: #acacef;
  > .demo {
    border: 1px solid #6134c2;
    min-height: 50px;
  }
  > .mango-sider {
    width: 200px;
  }
}
</style>
