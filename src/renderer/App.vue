<template>
  <div id="app">
    <a-layout id="container">
      <a-layout-sider id="sider"><Sider/></a-layout-sider>
      <a-layout>
        <a-layout-header id="header"><Header/></a-layout-header>
        <a-layout-content id="content"><router-view/></a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Sider from '@/components/Sider'

export default {
  name: 'demo1',
  components: {
    Header,
    Sider
  }
}
</script>

<style scoped>
#app {
  height: 100%;
}
#container {
  height: 100%;
}
#sider {
  -webkit-app-region: no-drag;
}
#header {
  -webkit-app-region: drag;
  padding: 0;
  height: 30px;
}
#content {
  -webkit-app-region: no-drag;
}

</style>
