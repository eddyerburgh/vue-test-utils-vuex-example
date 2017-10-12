export default {
  state: {
    module: {
      clicks: 2
    }
  },

  mutations: {
    INCREMENT_MODULE_ACTION_CLICKS (state) {
      state.module.clicks++
    }
  },

  actions: {
    moduleActionClick ({ commit }) {
      commit('INCREMENT_MODULE_ACTION_CLICKS')
    }
  },

  getters: {
    moduleClicks: state => state.module.clicks
  }
}
