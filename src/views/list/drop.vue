<template>
    <div class="drop-box" @mouseenter="showItems" @mouseleave="hideItems">
        <span class="selected-txt" v-bind:class="{'active':active}">{{selectedTxt}}</span>
        <div class="items-box" v-show="show" transition="expand" stagger="100">
            <ul>
                <li @click="setParam(null)">{{default}}</li>
                <li v-for="item in items" @click="setParam(item)">{{item.text}}</li>
            </ul>
        </div>
    </div>
</template>
<style type="text/css" scoped lang="scss">
    .active{
        color:#00ae60;
    }
    .drop-box{
        display: inline-block;
        width:76px;
        position: relative;
        margin-right: 20px;
    }
    .drop-box .selected-txt{
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
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
    /* 必需 */
    .expand-transition {
      transition: all .3s ease;
      overflow: hidden;
    }

    /* .expand-enter 定义进入的开始状态 */
    /* .expand-leave 定义离开的结束状态 */
    .expand-enter, .expand-leave {
      /*height: 0;*/
      opacity: 0;
    }
</style>
<script type="text/javascript">
import {setFilter} from '../../vuex/modules/list/actions'
import { filter } from '../../vuex/modules/list/getters'

    export default {
        data (){
            return {
                show:false
            }
        },
        props:['items','default','field'],
        methods:{
            showItems(){
                this.show = true;
            },
            hideItems(){
                this.show = false;
            },
            setParam(item){
                let param = {
                    key:this.field,
                    value: (item ? item : null)
                }
                this.setFilter(param);
                this.hideItems();
            }
        },
        computed:{
            selectedTxt (){
                let selected = this.filter[this.field] ? this.filter[this.field] : null
                return selected ? selected.text : this.default;
            },
            active () {
                let selected = this.filter[this.field] ? this.filter[this.field] : null
                return !!selected
            }
        },
        vuex : {
            actions:{
                setFilter
            },
            getters : {
                filter
            }
        }
    }
</script>
