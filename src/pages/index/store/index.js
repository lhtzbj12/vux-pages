import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)
// 共同维护的状态
const state = {
  stuname: ''
}
const store = new Vuex.Store({
  state, // 共享的状态或数据
  mutations,
  actions,
  getters
})
export default store

// 比较少时写在一起
// const store = new Vuex.Store({
//   state, // 共享的状态或数据
//   mutations: {
//     setname: (state, n) => { state.stuname = n }
//   },
//   actions: {
//     setname: ({ commit }, name) => commit('setname', name)
//   },
//   getters: {
//     stuname: state => state.stuname
//   }
// })
// export default store
