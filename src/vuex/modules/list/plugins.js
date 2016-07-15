import Vue from 'vue'
import VueResource from 'vue-resource'
import urlExtend from '../../../util/util.js'

Vue.use(VueResource)
export const loadData = store => {
    console.log(1111);
    store.subscribe((mutation, state) => {
        console.log(1);
        if (mutation.type === 'setFilter') {
            let filter = state.list.filter;
            Vue.http.get(urlExtend('http://localhost:8080/list/ajax?limit_count=1000',filter)).then((response) => {
                store.dispatch('setSearchResult',response.data.data.blockList);
            }, (response) => {
                console.error('Oooops...');
            })
        }

    })
}
