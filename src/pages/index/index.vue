<template>
  <div>
    <x-header>这是Index</x-header>
    <router-view></router-view>
    <router-link to="/ca">去组件A，演示Vuex</router-link>
  </div>
</template>

<script>
    import XHeader from 'vux/src/components/x-header/index'
    export default {
      name: 'index',
      components: {XHeader}
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>
