<template>
    <header class="lianjia-header lianjia-header-xinfang">
        <div>
            <ul>
                <li>
                    <a v-link="'/index'">首页</a>
                </li>
                <li>
                    <a  v-link="'/list'">
                        新房
                    </a>
                </li>
                <li>
                    <a v-link="'/discovery'">
                        发现
                    </a>
                </li>
            </ul>
            <ul class="login">
                <li>131****1315</li>
                <li>
                    <a v-link="'/404'">退出</a>
                </li>
            </ul>
        </div>
    </header>
    <div class="logo-box">
        <div>
            <div class="left">
                <a class="logo" href="/" title="链家房产网"></a>
                <span class="nav-border"></span>
                <a class="s-city" title="选择城市">上海</a>
            </div>
            <div class="right"><i class="phone"></i>客服热线  1010-9666</div>
        </div>
    </div>
</template>
<style type="text/css" scoped>
    header {
        background-color: #ececec;
        font-size: 12px;
        width: 100%;
        z-index: 9999;
    }
    header div{
        margin:0 auto;
        width:1000px;
        display: block;
    }
    header div ul{
        display: inline-block;
    }
    ul li {
        padding: 0 10px;
        display: inline-block;
    }
    a {
        text-decoration: none;
        color:#333333;
        line-height: 36px;
    }
    ul.login{
        float: right;
    }
    .logo-box{
        line-height: 84px;
        height: 84px;
        width: 100%;
    }
    .logo-box > div{
        width: 1000px;
        margin:0 auto;
    }
    span.nav-border{
        display: inline-block;
        width: 1px;
        height: 28px;
        margin: 0 16px 5px 16px;
        background: #ccc;
        vertical-align: middle;
    }
    a.logo{
        vertical-align: middle;
        display: inline-block;
        height: 33px;
        width: 223px;
        background: url(../../assets/logo.png) no-repeat;
        background-size: 100% 100%;
    }

    a.s-city{
        display: inline-block;
        height: 26px;
        padding: 0 8px;
        margin-bottom: 5px;
        line-height: 26px;
        border: 1px solid #dfdfdf;
        border-radius: 2px;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
    }
    a.s-city:after{
        content: "\0020";
        display: inline-block;
        width: 0;
        height: 0;
        margin: 2px 0 0 8px;
        border: 4px solid;
        border-color: #999 transparent transparent transparent;
        vertical-align: middle;
    }
    div.left{
        float: left;
        display: inline-block;
    }
    div.right{
        float: right;
        display: inline-block;
    }
    .right{
        color:#39AC6A;
    }


    .nav ul li a.v-link-active{
        background-color: #42b983;
        animation: rubberBand 1s ease 0s;
    }

    @keyframes rubberBand {
      from {
        transform: scale3d(1, 1, 1);
      }

      30% {
        transform: scale3d(1.25, 0.75, 1);
      }

      40% {
        transform: scale3d(0.75, 1.25, 1);
      }

      50% {
        transform: scale3d(1.15, 0.85, 1);
      }

      65% {
        transform: scale3d(.95, 1.05, 1);
      }

      75% {
        transform: scale3d(1.05, .95, 1);
      }

      to {
        transform: scale3d(1, 1, 1);
      }
    }
</style>
<script type="text/javascript">
    export default {
        data (){
            return {}
        }
    }
</script>
