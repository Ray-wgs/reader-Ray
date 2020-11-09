import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tab:'',
    
  },
  mutations: {
    getTab(state,tab){
      state.tab =tab
    }
  },
  actions: {
  },
  modules: {
  }
})