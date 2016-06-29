import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    history: true
})

router.map({
    '/index': {
        name: 'index',
        component: (resolve) => {
            require(['../views/index/Hello.vue'], resolve)
        }
    }
});
router.alias({
  '/': '/index',
})

export default router
