<template>
    <button-filters></button-filters>
    <div class="result-box">
        <div class="main-box clear" mod-id="lj-ershoufang-list" id="matchid">
            <div class="con-box">
                <div class="list-wrap">
                    <ul id="house-lst" class="house-lst">
                        <li data-index="0" data-id="" v-for="item in searchResult">
                            <div class="pic-panel">
                                <a target="_blank" href="/detail/{{item.blockLabe}}"><img  :src="item.slevelImageUrl || 'http://sh.lianjia.com/static/img/new-version/default_block.png'"></a>
                            </div>
                            <div class="info-panel">
                                <div class="col-1">
                                    <h2>
                                        <a target="_blank" href="/detail/jinganfu1">{{item.nameShow}}</a>
                                            <div class="redTag" v-if="item.bDiscount">
                                                <span class="triangle"></span>
                                                <span class="text">{{item.discountTitle}}</span>
                                                <span class="point">·</span>
                                            </div>
                                    </h2>
                                    <div class="where">
                                    <span class="region">
                                【<span>{{item.districtName}}&nbsp;{{item.bizcircleName}}</span>】{{item.buildAddr}}</span>
                                    </div>
                                    <div class="area"><span>{{roomInfo(item)}}</span>
                                    </div>
                                    <div class="type">
                                    <span class="normal-house" v-if="item.blockTag1">
                                        <span>{{item.blockTag1}}</span>
                                    </span>
                                    <span class="decorated-house" v-if="item.blockTag2">
                                        <span>{{item.blockTag2}}</span>
                                    </span>
                                    <span class="car-enough-house" v-if="item.blockTag3">
                                        <span>{{item.blockTag3}}</span>
                                    </span>
                                    <span class="park-house" v-if="item.blockTag4">
                                        <span>{{item.blockTag4}}</span>
                                    </span>
                                    </div>
                                </div>
                                <div class="col-2">
                                    <div class="price">
                                        <div class="average">
                                            <template v-if="item.villaName=='别墅'">
                                                <template v-if="item.totalPriceMin && item.totalPriceMin">
                                                    总价 <span class="num">{{item.totalPriceMin}}</span>万/套起
                                                </template>
                                                <template v-else>总价待定</template>
                                            </template>
                                            <template v-else>
                                                <template v-if="item.avgPrice">
                                                    <span class="num">{{item.avgPrice}}</span>元/平
                                                </template>
                                                <template v-else>均价待定</template>
                                            </template>
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
                searchResult: state => state.list.searchResult
            }
        },
        methods:{
            roomInfo(block){
                if(block.roomCntSet && block.roomCntSet.length){
                    let roomCntTxt = block.roomCntSet.map(i=>i+'居').join('/');
                    roomCntTxt += '  ' + parseInt(block.minArea) + '~' + parseInt(block.maxArea) + '平米';
                    return roomCntTxt
                } else {
                    return '户型未知'
                }
            },
        },
        computed: {

        },
    }
</script>
<style scoped lang="scss">
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
    span.region{
        position: relative;
        left: -7pt;
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

