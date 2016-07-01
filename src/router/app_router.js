import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

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
            require(['../views/404/404.vue'],resolve)
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
