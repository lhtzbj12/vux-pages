<template>
  <div>
    <h1>这是Product</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'product'
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>
