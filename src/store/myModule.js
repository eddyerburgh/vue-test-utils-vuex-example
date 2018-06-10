export default {
  state: {
    clicks: 2
  },

  mutations: {
    INCREMENT_MODULE_ACTION_CLICKS (state) {
      state.clicks++
    }
  },

  actions: {
    moduleActionClick ({ commit }) {
      commit('INCREMENT_MODULE_ACTION_CLICKS')
    }
  },

  getters: {
    moduleClicks: state => state.clicks
  }
}
