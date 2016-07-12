<template>
    <div class="drop-box">
        <span class="selected-txt">{{default}}</span>
        <div class="items-box">
            <ul>
                <li v-for="item in items">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css" scoped>
    .drop-box{
        display: inline-block;
        width:76px;
        position: relative;
        margin-right: 20px;
    }
    .drop-box .selected-txt{
        border:1px solid #ddd;
        text-align: center;
        padding: 2px 8px;
        border-radius: 2px;
    }
    .drop-box .items-box{
        width: 100%;
        background-color: #fff;
        border:1px solid #00ae60;
        position: absolute;
        top:-3px;
        border-radius: 2px;
        display: none;
    }
    .drop-box .items-box ul li{
        height: 27px;
        line-height: 27px;
        text-align: center;
        width: 100%;
        cursor: pointer;
    }
    .drop-box .items-box ul li:hover{
        color:#00ae60;
        text-decoration: underline;
    }
</style>
<script type="text/javascript">
    export default {
        data (){
            return {

            }
        },
        props:['items','default']
    }
</script>
