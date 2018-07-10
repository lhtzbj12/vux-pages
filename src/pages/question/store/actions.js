// 给actions 注册处理事件函数，当这个函数被触发时，将状态提交 commit 到 mutations 中处理
export const setname = ({ commit }, name) => commit('setname', name)

// es5写法
// export function setname({commit}, name){
//   return commit('setname', name)
// }
