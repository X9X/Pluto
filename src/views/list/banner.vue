<template>
    <div class="activity-container">
        <div class="activity-box">
            <div class="activity" v-for="i in [1,2,3,4]">
                <a v-link="'/404'">
                    <img src="../../assets/404.jpg">
                </a>
            </div>
        </div>
    </div>
</template>
<style type="text/css" scoped>
    .activity-container{
        margin-top:20px;
        background-color: #edeef1;
    }
    .activity-container .activity-box{
        width:1000px;
        margin:0 auto;
        padding: 20px 0;
    }
    .activity-container .activity-box a{
        width:250px;
        display: inline-block;
    }
    .activity-container .activity{
        text-align: center;
        display: inline-block;
    }
    .activity-container .activity-box a img{
        display: inline-block;
        box-sizing: border-box;
        width: 95%;
    }
</style>
<script type="text/javascript">
    export default {
        data (){
            return {}
        }
    }
</script>
