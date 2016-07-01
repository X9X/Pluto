<template>
    <div class="filter-box" v-on:mouseenter="showList()" v-on:mouseleave="hideList()">' +
        '<a href="javascript:;" class="filter {{field}} {{active}}" ><span>{{filtered}}</span><i class="iconfont switch-label">&#xe608;</i></a>' +
        '<div class="info-list" v-show="show"><ul><li  v-on:click="setParam(null)">全部</li><li v-for="item in items" v-on:click="setParam(item)">{{item.text}}</li></ul></div>' +
        '</div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'So long, Solar...'
            }
        }
    }
</script>
