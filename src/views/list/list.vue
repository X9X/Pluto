<template>
    <top></top>
    <search></search>
    <banner></banner>
    <foot></foot>
</template>
<style type="text/css">

</style>
<script type="text/javascript">
    import Top from '../common/top'
    import Search from './search'
    import Banner from './banner'
    import Foot from '../common/foot'
    export default {
        components : {
            Search,
            Top,
            Banner,
            Foot
        }
    }
</script>
