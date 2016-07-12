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
            <field name="类型" field="pro" :items="conditions.pro"></field>
            <div class="row">
                <span class="filter-name">
                    其他：
                </span>
                <drop :items="conditions.salePoint" default="特色不限"></drop>
                <drop :items="conditions.status" default="状态不限"></drop>
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

</style>
<script type="text/javascript">
import Field from './field'
import Drop from './drop'
export default {
    data (){
        return {
            conditions : {
                district : ['浦东', '嘉定', '松江', '宝山' ,'闵行', '青浦', '普陀', '徐汇', '杨浦', '闸北', '黄浦', '奉贤', '长宁', '虹口', '静安', '金山', '崇明', '上海周边'],
                metro : ['1号线', '2号线', '3号线', '4号线', '5号线', '6号线', '7号线', '8号线', '9号线', '10号线', '11号线', '12号线', '13号线', '16号线', '17号线', '18号线'],
                room : ['一室', '二室', '三室', '四室', '五室', '五室以上'],
                price : ['100万以下', '100-150万', '150-200万', '200-300万', '300-500万', '500-800万', '800-1000万', '1000万以上'],
                pro : ['住宅', '别墅','商住'],
                salePoint:['特色不限','精装修','近地铁'],
                status:['状态不限','即将开盘','在售楼盘','售完楼盘']
            }
        }
    },
    components:{
        Field,
        Drop
    }
}
</script>
