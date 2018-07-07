<template>
  <div>
    <h1>组件A</h1>
    <div>值：{{ stuname }}</div>
    <button @click="setname('A')">设置为A</button>
    <button @click="toB">去往B</button>
    <div> {{ proname }}</div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'CompA',
    methods: {
      ...mapActions(['setname']),
      toB () {
        this.$router.push('/cb')
      }
    },
    computed: {
      ...mapGetters(['stuname'])
    },
    data () {
      return {
        proname: 'H6答题'
      }
    }
  }
</script>

<style scoped>

</style>
