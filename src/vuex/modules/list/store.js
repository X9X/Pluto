// import CONST from '../../mutation-types'
// initial state
import {loadData} from './plugins.js'
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
    searchResult:[],
    searchKeyword:null,
    onlyDiscount:false,
    searchHistory:null
}
const testPlugin = (store) => {
        store.subscribe((mutation, state) => {
            console.log('success....');
        })
    }
// mutations
const mutations = {
    setFilter (state, param) {
        state.filter[param.key] = param.value;
        console.log('set state done...');
    },
    setSearchResult (state, param) {
        state.searchResult = param;
    }
}

export default {
    state,
    mutations,
    plugins:[testPlugin]
}
