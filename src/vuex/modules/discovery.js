import CONST from '../mutation-types'

// initial state
const state = {
  all: []
}

// mutations
const mutations = {
  [CONST.SET_ARTICLES] (state, products) {
    state.all = products
  },

  [CONST.SET_DATE_POINTER] (state, productId) {
    state.all.find(p => p.id === productId).inventory--
  }
}

export default {
  state,
  mutations
}
