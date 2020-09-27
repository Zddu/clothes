import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: "/jbxx1",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/jbxx1.vue'),
                    meta: { title: '基本信息填写' }
                },
                {
                    path: "/xzxz1",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/xzxz1.vue'),
                    meta: { title: '选择绣字撞色' }
                },
                {
                    path: "/ltxx",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/ltxx.vue'),
                    meta: { title: '量体信息录入' }
                },
                {
                    path: "/plbx1",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/plbx1.vue'),
                    meta: { title: '品类版型选择' }
                },
                {
                    path: "/fzlb",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/fzlb.vue'),
                    meta: { title: '服装类别工艺' }
                },
                {
                    path: "/order7",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order7.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/OrderDetails",
                    component: () => import('./../components/page/OrderDetails.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
