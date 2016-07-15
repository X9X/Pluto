import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

export const setFilter = ({ dispatch, state}, param) => {
    dispatch('setFilter',param)
}
export const setSearchResult = ({ dispatch }, param) =>{
    dispatch('setSearchResult',param)
}
export const initData = ({ dispatch, state}) => {
    Vue.http.get('http://localhost:8080/list/ajax?limit_count=1000').then((response) => {
        dispatch('setSearchResult',response.data.data.blockList);
    }, (response) => {
        console.error('Oooops...');
    })
}
