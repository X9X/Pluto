<template>
    <div class="pagination-box" v-show="total">
        <div class="page-box house-lst-page-box">
            <a href="javascript:0" data-page="2" @click="setPage('pre')">上一页</a>
            <a v-bind:class="isCurrent(page)" href="javascript:0;" v-for="page in pages" @click="setPage(page)">{{page}}</a>
            <a href="javascript:0" data-page="2" @click="setPage('next')">下一页</a>
        </div>
    </div>
</template>
<style type="text/css" scoped lang="scss">
    .pagination-box{
        width: 1000px;
        margin: 0 auto;
    }
    .page-box {
        padding: 30px 0;
        text-align: center;
    }
    .page-box a.on {
        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        cursor: default;
        background: #f5f5f5;
    }
    .page-box .on {
        background-color: #f15044 !important;
        color: white;
        border-color: #f15044;
    }
    .page-box a {
        height: 30px;
        padding: 0 12px;
        margin-left: 5px;
        text-align: center;
        line-height: 30px;
        border: 1px solid #b0b4b9;
        overflow: hidden;
        font-size: 12px;
        font-weight: 700;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #555;
        display: inline-block;
        zoom: 1;
        vertical-align: middle;
    }
    .page-box span {
        font-size: 16px;
        margin: 0 8px 0 13px;
    }
</style>
<script>
    import { setCurrentPage } from '../../vuex/modules/list/actions.js'
    export default {
        data (){
            return {}
        },
        vuex:{
            getters:{
                pages : state => {
                    let totalPage = state.list.pagination.totalPage;
                    let pages = [];
                    console.log(totalPage);
                    for(let i=0;i<totalPage;i++){
                        pages.push(i+1)
                    }
                    return pages
                },
                total: state => state.list.pagination.totalPage,
                current: state => state.list.pagination.currentPage
            },
            actions:{
                setCurrentPage
            }
        },
        methods:{
            isCurrent (page) {
                return  page == this.current ? ['on'] : []
            },
            setPage (param) {
                // console.log(param);
                let to
                if(isNaN(param)){
                    switch(param) {
                        case 'pre' :
                            to = (this.current - 1) == 0 ? 1 : this.current -1;
                            this.setCurrentPage(to);
                            break;
                        case 'next':
                            to = (this.current + 1 ) > this.total ? this.total : this.current +1;
                            this.setCurrentPage(to);
                    }
                } else {
                    this.setCurrentPage(param)
                }
            }
        }
    }
</script>
