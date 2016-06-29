<template>
    <div class="nav">
        <ul>
            <li v-for="item in navList"><a v-link="index">{{item.linkName}}</a></a></li>
        </ul>
    </div>
</template>
<style type="text/css" scoped>
    .nav {
        display: inline-block;
        width: 200px;
        background-color: rgba(51,51,51,0.75);
        font-size: 16px;
        position: fixed;
        z-index: 1000;
        left: 0;
        top:0;
        bottom: 0;
    }
    .nav ul{
        width: 100%;
    }
    .nav ul li {
        border-radius: 2px;
        list-style: none;
        display:block;
        width: 100%;
        text-align: center;
        height: 60px;
        line-height: 60px;
    }
    .nav ul li a{
        display: inline-block;
        width:100%;
        height:100%;
        text-decoration: none;
        color:#ffffff;
    }
    .nav ul li:hover{
        text-decoration: none;
        background-color: rgba(66,185,131,0.75);
    }
</style>
<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      navList: [{linkName: '首页'}, {linkName: '列表'}, {linkName: '发现'}]
    }
  },
  methods () {
    return {
      linkTo () {
        window.alert('where to link ?')
      }
    }
  }
}

</script>
