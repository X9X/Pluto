<template>
    <div class="drop-box">
        <span class="selected-txt">111</span>
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
        width:100px;
    }
    .drop-box .selected-txt{
        border:1px solid #ddd;
        text-align: center;
    }
    .drop-box .items-box{
        border:1px solid #00ae60;
        position: relative;
    }
    .drop-box .items-box ul li{
        width: 100%;
    }
</style>
<script type="text/javascript">
    export default {
        data (){
            return {
                items:[1,2,3,4]
            }
        }
    }
</script>
