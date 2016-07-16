import Vue from 'vue'
import VueResource from 'vue-resource'
import {urlExtend} from './../../../util/util.js'
Vue.use(VueResource)

export const setFilter = ({ dispatch, state}, param) => {
    let filter = {
        [param.key] : param.value ? param.value.value : null
    }
    loadData({ dispatch, state}, filter)
    dispatch('setFilterValue', filter)
    dispatch('setFilterTxt', filter)
}
export const initData = ({ dispatch}) => {
    Vue.http.get('http://localhost:8080/list/ajax').then((response) => {
        dispatch('setSearchResult',response.data.data.blockList);
        console.log(response);
        dispatch('setPagination',response.data.data.totalPage,response.data.data.totalPage);
    }, (response) => {
        console.error('Oooops...');
    })
}
export const loadData = ({ dispatch, state},param) => {
    let filter = state.list.filterValue
    let param_new = Object.assign({},filter,param)
    Vue.http.get(urlExtend('http://localhost:8080/list/ajax?limit_count=1000',param_new)).then((response) => {
        dispatch('setSearchResult',response.data.data.blockList);
    }, (response) => {
        console.error('Oooops...');
    })
}
