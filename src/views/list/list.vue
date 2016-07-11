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
    export default {
        components : {
            Search,
            Top,
            Banner,
            Foot,
            SearchResult
        }
    }
</script>
