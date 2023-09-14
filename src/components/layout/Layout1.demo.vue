<demo>
三栏布局
</demo>

<template>
  <!-- Layout 具有的 class 属性名：mango-layout；
       Header 具有的 class 属性名：mango-header；  
       Content 具有的 class 属性名：mango-content；
       Footer 具有的 class 属性名：mango-footer  -->
  <Layout class="mango-layout">
    <Header class="demo">header</Header>
    <Content class="demo">content</Content>
    <Footer class="demo">footer</Footer>
  </Layout>
</template>

<script lang="ts">
import { Layout, Header, Content, Footer } from '../../lib/index'
export default {
  components: { Layout, Header, Content, Footer },
}
</script>

<style lang="scss">
.mango-layout {
  height: 40vh;
  background: #acacef;
  > .demo {
    border: 1px solid #6134c2;
    min-height: 50px;
  }
}
</style>
