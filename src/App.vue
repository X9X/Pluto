<template>
  <div id="app">
    <!-- <img class="logo" src="./assets/logo.png"> -->
    <hello></hello>
    <navi></navi>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Navi from './components/Navi'

export default {
  components: {
    Hello,
    Navi
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: "PingFang SC","苹方","Hiragino Sans GB","Microsoft Yahei","微软雅黑", "Microsoft Yahei UI", 'Segoe UI', Tahoma,SimSun, sans-serif;;
  text-align: center;
}

#app a {
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
