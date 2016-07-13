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
                <drop :items="conditions.salePoint" default="特色不限" field="salePoint"></drop>
                <drop :items="conditions.status" default="状态不限" field="status"></drop>
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
</style>
<script type="text/javascript">
import Field from './field'
import Drop from './drop'
import VueResource from 'vue-resource'
export default {
    data (){
        return {
            conditions : {
                district : ['浦东', '嘉定', '松江', '宝山' ,'闵行', '青浦', '普陀', '徐汇', '杨浦', '闸北', '黄浦', '奉贤', '长宁', '虹口', '静安', '金山', '崇明', '上海周边'],
                metro : ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线', '12号线', '13号线', '16号线', '17号线', '18号线'],
                room : ['一室', '二室', '三室', '四室', '五室', '五室以上'],
                price : ['100万以下', '100-150万', '150-200万', '200-300万', '300-500万', '500-800万', '800-1000万', '1000万以上'],
                pro : ['住宅', '别墅','商住'],
                salePoint:['精装修','近地铁'],
                status:['即将开盘','在售楼盘','售完楼盘']
            }
        }
    },
    components:{
        Field,
        Drop
    },
    created (){

    }
}
</script>
