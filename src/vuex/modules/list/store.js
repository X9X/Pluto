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
    filterTxt:{
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
        state.filterValue[param.key] = param.value;
        console.log('set state done...');
    },
    setFilterTxt (state, param) {
        state.filterTxt[param.key] = param.value;
        console.log('set state done...');
    },
    setSearchResult (state, param) {
        state.searchResult = param;
    }
}

export default {
    state,
    mutations,
}
