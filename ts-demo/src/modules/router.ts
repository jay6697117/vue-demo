import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: '/home',
            component: () => import('../views/home/index.vue'),
            children: [
                {
                    path: '/home',
                    component: () => import('../views/home/home.vue'),
                }, {
                    path: '/plug',
                    component: () => import('../views/home/plug.vue'),
                }
            ]
        },
        {
            path: '/list',
            name: 'list',
            // 分模块打包
            component: () => import(/* webpackChunkName: "other" */ '../views/list.vue')
        }
    ]
})
