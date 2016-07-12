import CONST from '../mutation-types'

// initial state
const state = {
    filter:{
        district : null,
        metro : null,
        room : null,
        price : null,
        pro : null,
        salePoint : null,
        status : null
    },
    order:{
        key:'default',
        value:'asc'
    },
    pagination:{
        currentPage:0,
        totalPags:0
    },
    search:null,
    onlyDiscount:false,
    searchHistory:null
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
