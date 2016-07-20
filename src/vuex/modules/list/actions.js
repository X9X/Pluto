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
        bp:null,
        ep:null
    }
const initOrder = {
    p:null,
    date:null
}

export const setFilter = ({ dispatch, state}, param) => {
    let filter = {
        [param.key] : param.value
    }
    loadData({ dispatch, state}, filter)
    dispatch('setFilter', filter)
    dispatch('setOrder', initOrder)
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
    dispatch('setOrder', initOrder)
}

//cleaer all filters
export const clearAll = ({dispatch,state}) => {
    loadData({ dispatch, state},initFilter)
    dispatch('setFilter', initFilter)
    dispatch('setOrder', initOrder)
}

//set current page
export const setCurrentPage = ({dispatch,state}, param) => {
    let pg = {
        pg:{value:param}
    }
    let order = state.list.order
    let hh = Object.assign({},pg,order)
    console.log(hh);
    loadData({dispatch,state},hh)
}
export const setOrder = ({dispatch,state}, param) => {
    let order;
    dispatch('setOrder',param)
    if(param.key=='default'){
        order = {
            p:null,
            date:null
        }
    } else {
        order = {
            [param.key]:{value:param.value}
        }
    }
    loadData({dispatch,state},order)
}
export const setDiscount = ({dispatch,state}, param) => {
    console.log(param);
}
