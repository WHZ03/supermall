import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cartList: []
}

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//创建Store对象
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
