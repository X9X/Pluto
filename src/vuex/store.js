import Vue from 'vue'
import Vuex from 'vuex'
import CONST from './mutation-types'
import index from './modules/index'
import list from './modules/list'
import discovery from './modules/discovery'
Vue.use(Vuex)

const state = {
    city : null,
    auth: null
}

const mutations = {
    [CONST.SET_ARTICLES] (state, date, arr) {

    },
    [CONST.SET_DATE_POINTER] (state, value) {
        state.datePointer = value
    },
    [CONST.SET_THEMES] (state, arr) {
        state.themes = arr
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: true,
    modules: {
        index,
        list,
        discovery
  }
})
