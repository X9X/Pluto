import Vue from 'vue'
import Vuex from 'vuex'
import CONST from './mutation-types'
import index from './modules/index/store'
import list from './modules/list/store'
import discovery from './modules/discovery/store'

Vue.use(Vuex)

const state = {
    city : null,
    auth: null
}

const mutations = {
    testA (state) {
        state.k = 1;
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
