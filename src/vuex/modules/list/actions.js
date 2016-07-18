import Vue from 'vue'
import VueResource from 'vue-resource'
import {urlExtend} from './../../../util/util.js'
Vue.use(VueResource)

//set one filter
const initFilter = {
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
        date:null,
        p:null,
        pg:null,
        search:null
    }

export const setFilter = ({ dispatch, state}, param) => {
    let filter = {
        [param.key] : param.value
    }
    loadData({ dispatch, state}, filter)
    dispatch('setFilter', filter)
}

//update data from back-end
export const loadData = ({ dispatch, state},param = initFilter) => {
    let filter = state.list.filter
    let param_new = Object.assign({},filter,param)
    console.log(param_new);
    Vue.http.get(urlExtend('http://localhost:8080/list/ajax?',param_new)).then((response) => {
        dispatch('setSearchResult',response.data.data.blockList);
        dispatch('setPagination',response.data.data);
    }, (response) => {
        console.error('Oooops...');
    })
}

//clear one filter
export const clearFilter = ({ dispatch, state}, param) => {
    let filter = {
        key : param.field,
        value : null
    }
    setFilter({dispatch, state}, filter)
}
export const setOrder = ({ dispatch, state}, param) => {
    let filter = {
        key : param.field,
        value : null
    }
    setFilter({dispatch, state}, filter)
}

//cleaer all filters
export const clearAll = ({dispatch,state}) => {
    loadData({ dispatch, state},initFilter)
    dispatch('setFilter', initFilter)
}

//set current page
export const setCurrentPage = ({dispatch,state}, param) => {
    let pg = {
        pg:{value:param}
    }
    loadData({dispatch,state},pg)
}
export const setFilterOrder = ({dispatch, state}, param) => {

}
