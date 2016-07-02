<template>
    <div class="filter-box" v-on:mouseenter="showList()" v-on:mouseleave="hideList()">
        <a href="javascript:;" class="filter {{field}} {{active}}" >
            <span>{{filtered}}</span>
        </a>
        <div class="info-list" v-show="show">
            <ul>
                <li  v-on:click="setParam(null)">全部\</li>
                <li v-for="item in items" v-on:click="setParam(item)">{{item.text}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props () {
        return ['items', 'field', 'name']
    },
    data () {
        return {
            'active': '',
            'show': false,
            'filtered': this.name
        }
    },
    methods() {
        return {
            showList: function () {
                this.show = true;
                this.active = 'active';
            },
            hideList:function () {
                this.show = false;
                this.active = (this.filtered == this.name ? '' : 'active');
            },
            setParam: function (item) {
                var param = {
                    name : item ? item.text : null,
                    key: this.field,
                    value: item ? item.value : null
                };
                this.filtered = item ? item.text : this.name;
                this.active = item ? 'active' : '';
                this.show = false;
                this.$dispatch('setCondition', param);
            },
            clearParam:function () {
                this.setParam({key:this.field,value:null,name:null});
                this.hideList();
                this.filtered = this.name;
                this.active = "";
            }
        }
    },
    events () {
        return {
            clearFilter:function (param) {
                if (param && param == this.field){
                    this.clearParam();
                } else if(param == 'all'){
                    this.filtered = this.name;
                    this.active = '';
                }
            }
        }
    }
}
</script>
<style type="text/css" scoped>

</style>
