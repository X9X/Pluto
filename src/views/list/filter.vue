<template>
    <section>
        <div class="filter-box">
            <div class="breadcrumb">
                <span>上海链家网 > 上海新房</span>
            </div>
            <field name="区域" field="district" :items="conditions.district"></field>
            <field name="地铁" field="metro" :items="conditions.metro"></field>
            <field name="房型" field="room" :items="conditions.room"></field>
            <field name="总价" field="price" :items="conditions.price"></field>
            <div class="custom">
                <div class="txt-box">
                    <input type="text" class="txt" name="min_price">
                </div>
                &nbsp;-&nbsp;
                <div class="txt-box">
                    <input type="text" class="txt" name="max_price">
                </div>
                &nbsp;万
                <input type="button" data-type="price" class="ok" value="确定">
            </div>
            <field name="类型" field="pro" :items="conditions.pro"></field>
            <div class="row">
                <span class="filter-name">
                    其他：
                </span>
                <drop :items="conditions.fea" default="特色不限" field="fea"></drop>
                <drop :items="conditions.sta" default="状态不限" field="sta"></drop>
            </div>
            <div class="choice"><span class="choice-head">已选条件：</span>
                <span>
                    <a class="choice-item" href="javascript:0;">
                        <span class="choice-name">100-150万</span>
                        <i data-url="/list/zhabei/metro7room6" class="statusRemove" @click="clearFilter()">×</i>
                    </a>
                </span>
                <a class="clear-choice" href="javascript:0"><i class="delete-icon" @click="clearAll()"></i>清空所有</a>
            </div>
        </div>
    </section>
</template>
<style type="text/css" scoped>
    section{
        font-size: 12px;
        margin: 20px 0;
    }
    .filter-box{
        margin:0 auto;
        width:1000px;
        background-color: #fff;
        position: relative;
    }
    .filter-box .breadcrumb{
        margin-bottom: 35px;
        padding:10px 0;
        color:#555555;
        border-bottom: 1px solid #eaeaea;
    }
    .filter-box .filter-name{
        font-weight: bold;
        margin-right: 8px;
    }
    .custom{
        font-size: 12px;
        display: inline-block;
        zoom: 1;
        position: absolute;
        right:0;
        top:146px;
    }
    .txt-box {
        display:inline-block;
        width: 40px;
        border: 1px solid #e3e3e3;
        position: relative;
        vertical-align: middle;
        border-radius: 2px;
    }
    .txt-box .txt {
        display: inline-block;
        border: 0 none;
        width: 35px;
        padding: 2px 1px;
        text-align: center;
        color: #333;
        height: 18px;
        line-height: 18px;
    }
    .custom .ok {
        width: 43px;
        line-height: 22px;
        text-align: center;
        border: 1px solid #b7b7b7;
        border-radius: 2px;
        background-color: #fff;
        cursor: pointer;
        margin-left: 5px;
        color: #555;
        font-size: 12px;
        vertical-align: middle;
        height: 24px;
        box-sizing: border-box;
    }
    .choice {
        width: 1000px;
        height: 43px;
        line-height: 43px;
        background-color: #f5f5f5;
        font-size: 12px;
        margin: 35px auto;
    }
    .choice-head {
        font-weight: 700;
        margin: 0 20px;
    }
    .choice, .clear-choice {
        color: #333;
    }
    .choice-item:last-child {
        margin-right: 20px;
    }
    .choice-item {
        margin-right: 13px;
        height: 18px;
        font-size: 0;
        color: #333;
    }
    .choice-name {
        border: 1px solid #dfdfdf;
        height: 16px;
        line-height: 16px;
        background-color: #fff;
        padding: 0 5px;
        display: inline-block;
        font-size: 12px;
    }
    .choice-item i {
        display: inline-block;
        height: 18px;
        line-height: 18px;
        color: #fff;
        font-weight: 700;
        background-color: #dfdfdf;
        width: 18px;
        text-align: center;
        font-size: 12px;
        font-style: normal;
    }
</style>
<script type="text/javascript">
import Field from './field'
import Drop from './drop'
export default {
    data (){
        return {
            conditions : {
                district: null,
                metro: null,
                sta: null,
                fea: null,
                price: null,
                pro: null,
                room: null
            }
        }
    },
    methods:{
        clearFilter (param) {

        },
        clearAll () {

        }
    },
    components:{
        Field,
        Drop
    },
    // component private data
    created (){
        this.$http.get('http://localhost:8080/list/ajax/conditions').then((response) => {
            this.conditions = response.data
        }, (response) =>{
            console.error('Ooooops....');
        })
    }
}
</script>
