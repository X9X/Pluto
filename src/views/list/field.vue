<template>
    <div class="filter-box">
        <span class="filter-name">{{name}}:</span>
        <span class="filter-items" v-bind:class="isActive(0)">不限</span>
        <span v-for="item in items" class="filter-items" v-bind:class="isActive($index + 1)">{{item}}</span>
    </div>
</template>
<script>
export default {
    props : ['items', 'field', 'name'],
    data () {
        return {
            active : 0
        }
    },
    methods:{
        isActive (index) {
            return this.active == index ? ['active'] : [''];
         }
    }
}
</script>
<style type="text/css" scoped>
    .filter-box{
        width:1000px;
        margin:5px auto;
    }
    span.filter-name{
        font-weight: bold;
        margin-right:8px;
    }
    span.filter-items{
        color:#333333;
        margin:0 8px;
    }
    span.filter-items:hover{
        text-decoration: underline;
        color:#00ae60;
        cursor: pointer;
    }
    span.active{
        color:#00ae60;
    }
</style>
