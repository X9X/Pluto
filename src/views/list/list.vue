<template>
    <top></top>
    <search></search>
    <banner></banner>
    <search-result></search-result>
    <foot></foot>
</template>
<style type="text/css">

</style>
<script type="text/javascript">
    import Top from '../common/top'
    import Search from './search'
    import Banner from './banner'
    import Foot from '../common/foot'
    import SearchResult from './searchResult'

    import  {setSearchResult} from '../../vuex/modules/list/action.js'
    export default {
        components : {
            Search,
            Top,
            Banner,
            Foot,
            SearchResult
        },
        data (){
            return {}
        },
        created () {
            this.$http.get('http://localhost:8080/list/ajax?limit_count=1000').then((response) => {
                this.setSearchResult(response.data.data.blockList);
            }, (response) => {
                console.error('Oooops...');
            })

        },
        vuex:{
            getters: {
                city: state => state.city,
                auth:state => state.auth,
                filter:state => state.list.filter,
            },
            actions:{
                setSearchResult
            }
        }
    }
</script>
