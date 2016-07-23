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
            require(['../views/index/index.vue'], resolve)
        }
    },
    '/list':{
        name:'list',
        component: (resolve) => {
            require(['../views/list/list.vue'],resolve)
        }
    },
    '/block/:blockId':{
        component : (resolve) => {
            require(['../views/list/list.vue'],resolve)
        }
    },
    '/404' : {
        component : (resolve) => {
            require(['../views/common/404.vue'],resolve)
        }
    },
    '/discovery' : {
        component : (resolve) => {
            require(['../views/discovery/discovery.vue'],resolve)
        }
    }
});

//定义全局的重定向规则。全局的重定向会在匹配当前路径之前执行。
//重定向任意未匹配路径到/index
router.redirect({
    '*':"/404"
});

//为路由器配置全局的别名规则
router.alias({
  '/': '/index',
})

export default router
