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

    import  {initData} from '../../vuex/modules/list/actions'
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
            this.initData();
        },
        vuex:{
            getters: {
                city: state => state.city,
                auth:state => state.auth,
                filter:state => state.list.filter,
            },
            actions:{
                initData
            }
        }
    }
</script>
