<template>
    <navi></navi>
     <div class="container">
    <h1>{{ msg }}</h1>
    </div>
</template>

<script>
import Navi from '../common/Navi.vue'
export default {
    data () {
        return {
            msg: 'So long, Solar...',
        }
    },
    components:{
        Navi
    }
}
</script>

<style scoped>
h1 {
    color: #42b983;
}
.container{
    /*background: url('../../assets/main.jpg') no-repeat;*/
    background-size:100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 1000px;
    margin:0 auto;
}
</style>
