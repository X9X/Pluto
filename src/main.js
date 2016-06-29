import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './views/index/Index'
// import store from './vuex/index/store'
import router from './router/index'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

router.start(App, 'index')
