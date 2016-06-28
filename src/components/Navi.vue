<template>
    <div class="nav">
        <ul>
            <li v-for="item in navList"><a href="/" @click="linkTo()">{{item.linkName}}</a></li>
        </ul>
    </div>
</template>
<style type="text/css" scoped>
    .nav {
        display: inline-block;
        width: 200px;
        background-color: #333333;
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
        list-style: none;
        display:block;
        width: 100%;
        text-align: center;
        padding: 20px 0;
    }
    .nav ul li a{
        color:#ffffff;
    }
    .nav ul li:hover{
        background-color: #42b983;
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
