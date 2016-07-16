<template>
    <div class="field-box">
        <span class="filter-name">{{name}}:</span>
        <span class="filter-items" v-bind:class="isActive(0)" @click="setParam(null,0)">不限</span>
        <span v-for="item in items" class="filter-items" v-bind:class="isActive($index + 1)" @click="setParam(item,$index + 1)">{{item.text}}</span>
    </div>
</template>
<script>
import {setFilter} from '../../vuex/modules/list/actions'
export default {
    props : ['items', 'field', 'name'],
    data () {
        return {
            active : 0,
        }
    },
    methods:{
        isActive (index) {
            return this.active == index ? ['active'] : [''];
        },
        setParam (item , index){
            let param = {
                key:this.field,
                value: (item ? item : null)
            }
            this.active = index;
            this.setFilter(param);
        }
    },
    vuex:{
        getters:{

        },
        actions:{
            setFilter,
        }
    }
}
</script>
<style type="text/css" scoped>
    .field-box{
        width:1000px;
        margin:8px auto;
    }
    span.filter-name{
        font-weight: bold;
        margin-right:8px;
    }
    span.filter-items{
        color:#333333;
        margin:0 8px;
    }
    span.filter-items:hover{
        text-decoration: underline;
        color:#00ae60;
        cursor: pointer;
    }
    span.active{
        color:#00ae60;
    }
</style>
