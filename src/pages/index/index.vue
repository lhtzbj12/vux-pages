<template>
  <div>
    <x-header>这是Index</x-header>
    <router-view></router-view>
    <div>{{ proname }}</div>
  </div>
</template>

<script>
    import XHeader from 'vux/src/components/x-header/index'
    export default {
      name: 'index',
      components: {XHeader},
      data () {
        return {
          proname: 'H5答题'
        }
      }
    }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  body {
    background-color: #fbf9fe;
  }
</style>
