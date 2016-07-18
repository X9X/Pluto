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
        discount:null,
        bp:null,
        ep:null,
        pg:null,
        search:null
    },
    order:{
        p:null,
        date:null
    },
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
    setOrder ( state, order){

    }
}

export default {
    state,
    mutations,
}
