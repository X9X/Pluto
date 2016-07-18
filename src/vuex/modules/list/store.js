// initial state
const state = {
    filter:{
        district : null,
        metro : null,
        room : null,
        price : null,
        pro : null,
        fea : null,
        sta : null,
        bp:null,
        ep:null
    },
    order:{
        p:null,
        date:null
    },
    discount:null,
    pagination:{
        currentPage:0,
        totalPage:0
    },
    searchResult:[],
    searchHistory:null
}
// mutations
const mutations = {
    setFilter (state, param) {
        Object.assign(state.filter,param)
    },
    setSearchResult (state, param) {
        state.searchResult = param;
    },
    setPagination (state, param){
        state.pagination.totalPage = param.totalPage
        state.pagination.currentPage = param.currentPage
    },
    setOrder (state, param){console.log(param);
        state.order.p = (param.key == 'p' ? param.value : null)
        state.order.date = (param.key == 'date' ? param.value : null)
    }
}

export default {
    state,
    mutations,
}
