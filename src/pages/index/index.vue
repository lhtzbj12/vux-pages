<template>
  <div>
    <x-header>Hello VUX</x-header>
    <router-view></router-view>
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
