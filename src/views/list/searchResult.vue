<template>
    <button-filters></button-filters>
    <div class="result-box">
        <div class="main-box clear" mod-id="lj-ershoufang-list" id="matchid">
            <div class="con-box">
                <div class="list-wrap">
                    <ul id="house-lst" class="house-lst">
                        <li data-index="0" data-id="" v-for="item in searchResult">
                            <div class="pic-panel">
                                <a target="_blank" href="/detail/jinganfu1"><img test="1" src="http://image1.ljcdn.com//xf-resblock/4f9e0ead-3dcc-4a48-8cec-8a1059495687.jpg.300x200.jpg" data-resblock-id="508779161676925" onerror="this.src='http://cdn.lianjia.com/pc/asset/img/new-version/default_block.png';this.onerror=null;" class="lj-lazy" style="display: inline;"></a>
                            </div>
                            <div class="info-panel">
                                <div class="col-1">
                                    <h2>
                                        <a target="_blank" href="/detail/jinganfu1">静安府</a>

                                            <div class="redTag">
                                                <span class="triangle"></span>
                                                <span class="text">9.9折</span>
                                                <span class="point">·</span>
                                            </div>

                                    </h2>
                                    <div class="where">
                            <span class="region" style="position: relative;left: -7pt;">
                                【<span>闸北&nbsp;永和</span>】平陆路999号（近汶水路）</span>
                                    </div>
                                    <div class="area">


                                            4居/3居<span>&nbsp;95~135平米
                                            </span>



                                    </div>
                                    <div class="type">



                                    <span class="normal-house">
                                    <span>普通住宅</span>
                                    </span>






                                    <span class="decorated-house">
                                    <span>精装修</span>
                                    </span>












                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="price">
                                        <div class="average">






                                                            均价待定






                                        </div>
                                        <div class="tehui">
                                            <div class="tehui-info">
                                                <div class="tehui-info-content">链家特惠房<span>（3套）</span></div>
                                                <div class="tehui-top">最高可省50万</div>
                                            </div>
                                            <div class="tehui-num">-50%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <pagination></pagination>
</template>
<style scoped>
    .result-box{
        width: 1000px;
        margin:0 auto;
    }
    .result-box .main-box {
        margin-top: 35px;
        position: relative;
        min-height: 320px;
        height: auto;
    }
    .house-lst li {
        border-bottom: 1px solid #e4e4e4;
        background: #fff;
        position: relative;
        transition: all .15s ease-in-out;
        padding-bottom: 35px;
        margin-top: 35px;
    }
    .house-lst .pic-panel {
        font-size: 0;
        position: relative;
        width: 239px;
        height: 174px;
        display: inline-block;
    }
    .house-lst .pic-panel img {
        width: 239px;
        height: 174px;
        transition-property: opacity;
        transition-duration: .15s;
        transition-timing-function: linear;
        transition-delay: 0;
    }
    .house-lst .info-panel {
        width: 720px;
        color: #565a5c;
        font-size: 0;
        position: relative;
        margin-left: 30px;
        height: 174px;
        display: inline-block;
    }
    .house-lst .info-panel .col-1 {
        width: 472px;
        height: 174px;
        float: left;
    }
    .house-lst .info-panel .col-1 div{

    }
    .house-lst .info-panel .col-2 {
        position: relative;
        float: right;
        width: 225px;
        height: 174px;
        line-height: 174px;
        color: #333;
        font-size: 18px;
        display: -webkit-box;
        -webkit-box-orient: horizontal;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        display: -moz-box;
        -moz-box-orient: horizontal;
        -moz-box-pack: center;
        -moz-box-align: center;
        display: -o-box;
        -o-box-orient: horizontal;
        -o-box-pack: center;
        -o-box-align: center;
        display: -ms-box;
        -ms-box-orient: horizontal;
        -ms-box-pack: center;
        -ms-box-align: center;
        display: box;
        box-orient: horizontal;
        box-pack: center;
        box-align: center;
        font-weight: 700;
    }
    .house-lst h2 {
        overflow: hidden;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        font-size: 20px;
        margin-bottom: 24px;
        white-space: nowrap;
        width: 100%;
        line-height: 1;
        vertical-align: middle;
    }
    .house-lst .info-panel h2 a {
        color: #333;
        font-size: 20px;
        font-weight: 700;
        vertical-align: middle;
    }
    .redTag {
        position: relative;
        display: inline-block;
        font-size: 12px;
        vertical-align: middle;
    }
    .house-lst .where {
        width: 100%;
        line-height: 1;
        margin-bottom: 24px;
    }
    .house-lst .where .region, .house-lst .info-panel .area, .house-lst .info-panel .other {
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
        width: 100%;
    }

    .house-lst .area {
        margin-bottom: 24px;
    }
    .house-lst .info-panel .type .normal-house {
        border-color: #e2d197;
        color: #e2d197;
        margin-right: 8px;
    }

    .house-lst .info-panel .type span {
        padding: 0 8px;
        border: 1px solid #fff;
        font-size: 12px;
        /* margin-right: 8px; */
        line-height: 22px;
        display: inline-block;
    }
    .house-lst .info-panel .type .decorated-house {
        border-color: #C5A9DD;
        color: #C5A9DD;
        margin-right: 8px;
    }
    .price .tehui {
        width: 225px;
        height: 85px;
        /*background-image: url("../img/xinfang/favorable.png");*/
        background-size: 225px 85px;
        background-repeat: no-repeat;
        margin-top: 15px;
        display: none;
    }
    .redTag .triangle {
        position: absolute;
        right: 0;
        height: 0;
        width: 0;
        border: #f15044 solid 12px;
        border-bottom-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
    }
    .redTag .text {
        color: white;
        height: 24px;
        display: inline-block;
        line-height: 24px;
        background-color: #f15044;
        padding: 0 7px;
        margin-right: 24px;
        vertical-align: top !important;
    }
    .redTag .point {
        position: absolute;
        display: inline-block;
        height: 24px;
        width: 12px;
        line-height: 24px;
        top: 0;
        right: 16px;
        font-size: 12px;
        color: white;
        text-align: center;
    }
    .house-lst .info-panel .type .car-enough-house {
        border-color: #E0A0A0;
        color: #E0A0A0;
        margin-right: 8px;
    }
    .house-lst .info-panel .type .park-house {
        border-color: #85c6dc;
        color: #85c6dc;
        margin-right: 8px;
    }
    .house-lst .info-panel .col-2 .average .num {
        color: #f15044;
        font-size: 30px;
        margin: 0 7px;
        font-family: "Tahoma";
        vertical-align: -2px;
    }
</style>
<script >
    import Pagination from "./pagination"
    import ButtonFilters from "./buttonFilters"
    export default {
        data (){
            return {}
        },
        components:{
            Pagination,
            ButtonFilters
        },
        vuex: {
            getters: {
                searchResult: state => {
                    console.log(state);
                    return state.list.searchResult
                }
            }
        }
    }
</script>
