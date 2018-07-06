<template>
  <div>
    <h1>Index</h1>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: 'index'
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>
