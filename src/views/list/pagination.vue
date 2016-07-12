<template>
    <div class="pagination-box">
        <div class="page-box house-lst-page-box" comp-module="page" page-url="/list/pg{page}" page-data="{&quot;totalPage&quot;:72,&quot;curPage&quot;:1}">
            <a class="on" href="/list/pg1" data-page="1">1</a>
            <a href="/list/pg2" data-page="2">2</a>
            <a href="/list/pg3" data-page="3">3</a>
            <span>...</span>
            <a href="/list/pg72" data-page="72">72</a>
            <a href="/list/pg2" data-page="2">下一页</a>
        </div>
    </div>
</template>
<style type="text/css" scoped>
    .pagination-box{
        width: 1000px;
        margin: 0 auto;
    }
    .page-box {
        padding: 30px 0;
        text-align: center;
    }
    .page-box a.on {
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        cursor: default;
        background: #f5f5f5;
    }
    .page-box .on {
        background-color: #f15044 !important;
        color: white;
        border-color: #f15044;
    }
    .page-box a {
        height: 30px;
        padding: 0 12px;
        margin-left: 5px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #b0b4b9;
        overflow: hidden;
        font-size: 12px;
        font-weight: 700;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #555;
        display: inline-block;
        zoom: 1;
        vertical-align: middle;
    }
    .page-box span {
        font-size: 16px;
        margin: 0 8px 0 13px;
    }
</style>
<script>
    export default {
        data (){
            return {}
        }
    }
</script>
