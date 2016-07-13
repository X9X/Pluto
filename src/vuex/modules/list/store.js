// import CONST from '../../mutation-types'

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
    searchResult:[1,2,3],
    searchKeyword:null,
    onlyDiscount:false,
    searchHistory:null
}

// mutations
const mutations = {
    setFilter (state, param) {
        console.log(state, param);
    },
    setSearchResult (state, param) {
        console.log(state);
        state.searchResult = param;
    }
}

export default {
    state,
    mutations
}
