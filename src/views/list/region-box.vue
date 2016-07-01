<template>
    <div class="region-box" v-on:mouseenter="showFirst()" v-on:mouseleave="hideFirst()">
        <a href="javascript:;" class="{{field}} {{active}}" >
            {{filteredTxt}}
        </a>
        <div class="info-list" v-show="show_first">
            <ul>
                <li v-on:click="clearParam()" v-on:mouseenter="showSecond(null)">不限</li>
                <li v-for="item in items" v-on:mouseenter="showSecond(item)">{{item.text}}</li>
            </ul>
        </div>
            <div class="second-info-list" v-show="show_second">
            <ul>
                <li  v-on:click="clearParam()">全部</li>
                <li v-for="t in selected" v-on:click="setParam(t)" >{{t.text}}</li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        props(){
            return ['items', 'field', 'name']
        },
        data () {
            return {
                'search':null,
                'active': '',
                'show_first': false,
                'show_second': false,
                'filtered': null,
                'filteredTxt':this.name,
                'selected': []
            }
        },
        methods (){
            return {
                showFirst: function () {
                    this.show_first = true;
                    this.active = 'active' ;
                },
                hideFirst: function () {
                    this.show_first = false;
                    this.show_second = false;
                    this.active = (this.filteredTxt == this.name) ? '' :'active';
                },
                showSecond:function (item) {
                    if(!item){
                        this.show_second = false;
                    } else {
                        this.filtered = item.field;
                        this.selected = item.data;
                        this.show_second = true;
                    }
                },
                hideSecond:function () {
                    this.show_second = false;
                },
                setParam: function (item) {
                    var param = {
                        name : item ? item.text : null,
                        key: this.filtered,
                        value: item ? item.value : null
                    };

                    this.filteredTxt = item ? item.text : this.name;
                    this.hideFirst();
                    this.$dispatch('setCondition', param);
                },
                setDistrict:function(value){
                    if(value){
                        var district = this.$parent.params.district.filter(function(item){
                            return item.value == value;
                        })[0];
                        var param = {
                            name : district.text,
                            key: "district",
                            value: district.value
                        };
                        this.filteredTxt = district.text;
                        this.active = "active";
                        this.$dispatch('setCondition', param);
                    }
                },
                clearParam:function () {
                    this.setParam({key:'metro',value:null,name:null});
                    this.hideFirst();
                    this.filteredTxt = this.name;
                    this.active = "";
                }
            }
        },
        events () {
            return {
                clearFilter:function (param) {
                    if (param && param == this.field){
                        this.clearParam();
                    } else if (param == 'all'){
                        this.filteredTxt = this.name;
                        this.active = ''
                    }
                }
            }
        }

    }
</script>
