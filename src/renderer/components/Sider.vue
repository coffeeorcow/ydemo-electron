<template>
  <div id="sider">
    <div id="logo">
      <h1>Y-demo</h1>
    </div>
    <a-menu
      style="width: 100%"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <a-menu-item title="menu1">hello</a-menu-item>
      <a-sub-menu title="menu2">
        <a-menu-item>sub-menu1</a-menu-item>
        <a-menu-item>sub-menu2</a-menu-item>
      </a-sub-menu>
      <a-menu-item title="menu3">menu3</a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Sider',
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="css" scoped>
#logo {
  height: 30px;
  margin-left: 24px;
}
#logo h1{
  color: white;
  font-size: 23px;
}
</style>
