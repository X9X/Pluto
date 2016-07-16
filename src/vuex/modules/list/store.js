// initial state
const state = {
    filterValue:{
        district : null,
        metro : null,
        room : null,
        price : null,
        pro : null,
        fea : null,
        sta : null,
    },
    order:{
        key:'default',
        value:'asc'
    },
    pagination:{
        currentPage:0,
        totalPags:0
    },
    searchResult:[],
    searchKeyword:null,
    onlyDiscount:false,
    searchHistory:null
}
// mutations
const mutations = {
    setFilterValue (state, param) {
        Object.assign(state.filterValue,param)
    },
    clearFilterValue (state, param) {
        state.filterValue[param.key] = null;
    },
    clearFilterTxt (state, param) {
        state.filterTxt[param.key] = null;
    },
    setSearchResult (state, param) {
        state.searchResult = param;
    },
    setPagination (state, current, total){
        console.log(state);
        state.pagination.totalPags = current
        state.pagination.totalPags = total
    }
}

export default {
    state,
    mutations,
}
