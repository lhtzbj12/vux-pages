<template>
  <div>
    <h1>组件B</h1>
    <div>值：{{ stuname }}</div>
    <button @click="setname('B')">设置为B</button>
    <button @click="toA">去往A</button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'CompB',
    methods: {
      ...mapActions(['setname']),
      toA () {
        this.$router.push('/ca')
      }
    },
    computed: {
      ...mapGetters(['stuname'])
    }
  }
</script>

<style scoped>

</style>
