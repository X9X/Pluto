<template>
    <div class="header">
        <input type="text" placeholder="请输入区域、板块或楼盘名" class="search-input" v-model="search">
        <hr>
        <div class="result-list" v-show="searching" >
            <ul>
                <li v-for="item in think_list" v-on:click="setKeyword(item)" v-bind:class="highLight($index)">
                    <span class="name-span">{{{item.highLightName}}}</span>
                    <span class="usage-span" v-if="item.villaName">{{item.villaName}}</span>
                    <span class="price-span">{{{item.price_description}}}</span>
                </li>
            </ul>
        </div>
        <div class="result-list" v-show="show_hot" >
            <ul>
                <li class="hot-title">热门搜索</li>
                <li v-for="item in hot_list" v-on:click="setKeyword(item.showName)" v-bind:class="highLight($index)">
                    <span class="name-span">{{{item.showName}}}</span>
                </li>
            </ul>
        </div>

        <filter></filter>

        <div class="bar"></div>

    </div>
</template>
<style type="text/css" scoped>
    .header{
        width:100%;
    }
    .search-input{
        display: block;
        height: 36px;
        width:400px;
        font-size: 14px;
        margin:10px auto;
        outline: none;
        text-indent: 15px;
        border:1px solid #00ae60;
        border-radius: 3px;
    }
    hr{
        border-top: none;
        border-color:#00ae60;
    }
</style>
<script>
    import Filter from './filter'
    export default {
        components : {
            Filter
        },
        props: [],
        data () {
            return {}
        },
        computed () {
        },
        created () {
        },
         methods () {

        },
        events () {
        }

    }
</script>
