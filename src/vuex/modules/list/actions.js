import Vue from 'vue'
import VueResource from 'vue-resource'
import {urlExtend} from './../../../util/util.js'
Vue.use(VueResource)

export const setFilter = ({ dispatch, state}, param) => {
    loadData({ dispatch, state}, {[param.key]:param.value})
    dispatch('setFilterValue',param)
    dispatch('setFilterTxt',param)
}
export const setSearchResult = ({ dispatch }, param) =>{
    dispatch('setSearchResult',param)
}
export const initData = ({ dispatch}) => {
    Vue.http.get('http://localhost:8080/list/ajax?limit_count=1000').then((response) => {
        dispatch('setSearchResult',response.data.data.blockList);
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
