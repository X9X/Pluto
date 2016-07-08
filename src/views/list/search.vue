<template>
    <div class="search-box">
        <div class="search">
            <div class="input-box">
                <input type="text" placeholder="请输入区域、板块或楼盘名" class="search-input">
                <button type="button"><i></i></button>
                <ul class="think-list">
                    <li v-for="item in hot_list" v-on:click="setKeyword(item.showName)" v-bind:class="highLight($index)">
                        <span class="name-span">{{{item.showName}}}</span>
                    </li>
                </ul>
                <span class="history">
                    <span class="history-name">历史搜索：</span>
                </span>
                <span class="history-list"></span>
            </div>
            <!-- <div class="bar"></div> -->
        </div>
    </div>
    <filter></filter>
</template>
<style type="text/css" scoped>
    .search-box{
        background-color: #edeff1;
    }
    .search{
        width:1000px;
        margin:0px auto;
        height: 72px;
    }
    .search .input-box{
        position: relative;
        top:18px;
    }
    .input-box button{
        position: absolute;
        border:none;
        height: 36px;
        width: 36px;
        text-align: center;
        background-color: #f15044;
        box-sizing: border-box;
    }
    .input-box button i{
        width: 20px;
        height: 20px;
        background: url('../../assets/btn-search.png') no-repeat left -2px;
        display: inline-block;
        vertical-align: middle;
    }
    .think-list{
        position: absolute;
    }
    .search-input{
        height: 36px;
        line-height: 36px;
        width:371px;
        font-size: 14px;
        outline: none;
        text-indent: 15px;
        vertical-align: middle;
        border-width: 0;
        box-sizing: border-box;
    }
    span.history-name{
        color:#999;
    }

    span.history{
        font-size: 12px;
        display: inline-block;
        position: absolute;
        left: 433px;
        height: 36px;
        line-height: 36px;
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
