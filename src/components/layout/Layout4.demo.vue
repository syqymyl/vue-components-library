<demo>
四栏布局（侧边栏独立）
</demo>

<template>
  <Layout class="mango-layout">
    <Sider class="demo">sider</Sider>
    <Layout>
      <Header class="demo">header</Header>
      <Content class="demo">content</Content>
      <Footer class="demo">footer</Footer>
    </Layout>
  </Layout>
</template>

<script lang="ts">
import { Layout, Header, Content, Footer, Sider } from '../../lib/index'
export default {
  components: { Layout, Sider, Header, Content, Footer },
}
</script>

<style lang="scss">
.mango-layout {
  height: 40vh;
  background-color: #acacef;
}
.demo {
  border: 1px solid #6134c2;
  min-height: 50px;
}
.mango-sider {
  width: 200px;
}
</style>
