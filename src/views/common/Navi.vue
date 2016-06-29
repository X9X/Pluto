<template>
    <div class="nav">
        <ul>
            <li v-for="item in navList"><a v-link="item.url">{{item.linkName}}</a></a></li>
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
<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      navList: [
        {linkName: '首页',url:'/index'},
        {linkName: '列表',url:'/list'},
        {linkName: '发现',url:'/discovery'}
        ]
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
