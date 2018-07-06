import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'
import CompA from '@/components/CompA'
import CompB from '@/components/CompB'

Vue.use(Router)

export default new Router({
  routes: [ {
    path: '/vux',
    component: HelloFromVux
  }, {
    path: '/ca',
    component: CompA
  }, {
    path: '/cb',
    component: CompB
  }, {
    path: '/',
    component: HelloWorld
  }]
})
