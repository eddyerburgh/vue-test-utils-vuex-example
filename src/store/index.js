import Vue from 'vue'
import Vuex from 'vuex'
import module from './module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    module
  },

  state: {
    clicks: 0,
    inputValue: null
  },

  mutations: {
    INCREMENT_ACTION_CLICKS (state) {
      state.clicks++
    },
    UPDATE_INPUT_VALUE (state, inputValue) {
      state.inputValue = inputValue
    }
  },

  actions: {
    actionClick ({ commit }) {
      commit('INCREMENT_ACTION_CLICKS')
    },
    actionInput ({ commit }, { inputValue }) {
      commit('UPDATE_INPUT_VALUE', inputValue)
    }
  },

  getters: {
    clicks: state => state.clicks,
    inputValue: state => state.inputValue
  }
})
