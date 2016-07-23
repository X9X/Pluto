<template>
    <div class="button-filters-box">
        <div class="list-head clear">
            <div class="view-type" id="viewType">
                <div class="modeshows modeshow">
                    <span class="l-show view-mod" v-bind:class="{current:!discount}">
                        <a href="javascript:0;">全部楼盘</a>
                    </span>
                    <span class="h-show view-mod" v-bind:class="{current:discount}">
                        <a href="javascript:0;">优惠楼盘</a>
                    </span>
                </div>
            </div>
            <span class="order">
                <div>
                    <a v-bind:class="{'default-order': !order.p&&!order.date }" href="javascript:0" @click="setOrderFilter('default')">默认排序</a>
                </div>
                <div>
                    <a href="javascript:0" v-bind:class="{'default-order': order.p}" @click="setOrderFilter('p')">按均价排序</a>
                </div>
                <div>
                    <a href="javascript:0" v-bind:class="{'default-order': order.date}" @click="setOrderFilter('date')">开盘时间</a>
                </div>
            </span>
        </div>
    </div>
</template>
<style  lang="scss" scoped>
    .button-filters-box{
        width: 1000px;
        margin:0 auto;
    }
    .list-head {
        height: 33px;
        line-height: 33px;
        background: #fff;
        margin-top: 45px;
    }
    .list-head .view-type {
        float: left;
        color: #999999;
        font-size: 14px;
    }
    .list-head .view-type .modeshows {
        float: left;
    }
    .list-head .view-type .modeshows .current {
        background-color: #666;
        color: #fff;
        border-right: 2px;
    }
    .list-head .view-type .modeshows span {
        display: inline-block;
        width: 90px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        cursor: pointer;
    }
    .list-head .view-type .modeshows .current a {
        color: #fff;
    }
    .list-head .view-type .modeshows span {
        display: inline-block;
        width: 90px;
        height: 32px;
        text-align: center;
        line-height: 32px;
        cursor: pointer;
    }
    .list-head .view-type a {
        color: #999999;
    }
    .list-head .order {
        font-size: 14px;
        float: right;
    }
    .list-head .order div:first-child {
        margin-left: 0px;
    }
    .list-head .order div {
        display: inline-block;
        margin-left: 10px;
        position: relative;
    }

    .list-head .order .default-order {
        border-color: #00AE66;
        /* font-weight: bold; */
        color: #00AE66;
    }

    .list-head .order div>a {
        color: #333333;
        display: inline-block;
        width: 126px;
        text-align: center;
        height: 33px;
        border: 1px solid #e4e4e4;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        padding: 0 10px;
    }
</style>
<script>
    import { setOrder, setDiscount } from '../../vuex/modules/list/actions.js'
    export default {
        data(){
            return {}
        },
        vuex:{
            getters:{
                discount : (state) => state.list.discount,
                order: (state) => state.list.order
            },
            actions:{
                setOrder,
                setDiscount
            }
        },
        methods:{
            setOrderFilter(field) {
                let val = this.order[field] ? ( this.order[field] == 'asc' ? 'desc' : 'asc') : 'asc'
                let param = {
                    key: field,
                    value:val
                }
                this.setOrder(param)
            }
        }
    }
</script>
