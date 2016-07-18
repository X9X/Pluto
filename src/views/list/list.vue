<template lang="jade">
    top
    search
    banner
    search-result
    foot
</template>
<style>

</style>
<script type="text/javascript">
    import Top from '../common/top'
    import Search from './search'
    import Banner from './banner'
    import Foot from '../common/foot'
    import SearchResult from './searchResult'

    import  {loadData} from '../../vuex/modules/list/actions'
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
            this.loadData();
        },
        vuex:{
            getters: {
                city: state => state.city,
                auth:state => state.auth,
                filter:state => state.list.filter,
            },
            actions:{
                loadData
            }
        }
    }
</script>
