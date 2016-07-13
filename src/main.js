import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'

import App from './views/App'
import router from './router/app_router'
import store from './vuex/store'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.debug = process.env.NODE_ENV === 'dev'

Vue.config.devtools = true

sync(store, router)

router.start(App, 'index')
