<template>
  <div class="container">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'So long, Solar...'
    }
  }
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
.container{
    background: url('../../assets/main.jpg') no-repeat;
    background-size:100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom:0;
}
</style>
