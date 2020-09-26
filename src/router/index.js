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
                    path: "/jbxx2",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/jbxx2.vue'),
                    meta: { title: '基本信息填写' }
                },
                {
                    path: "/xzxz1",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/xzxz1.vue'),
                    meta: { title: '选择绣字撞色' }
                },
                {
                    path: "/xzxz2",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/xzxz2.vue'),
                    meta: { title: '选择绣字撞色' }
                },
                {
                    path: "/ltxx",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/ltxx.vue'),
                    meta: { title: '量体信息录入' }
                },
                {
                    path: "/plbx1/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/plbx1.vue'),
                    meta: { title: '品类版型选择' }
                },
                {
                    path: "/fzlb",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/fzlb.vue'),
                    meta: { title: '服装类别工艺' }
                },
                {
                    path: "/order7/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order7.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/order8/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order8.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/order9/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order9.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/order2/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order2.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/order3/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order3.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/order4/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order4.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/order5/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order5.vue'),
                    meta: { title: '选择面料辅料' }
                },
                {
                    path: "/order6/:id",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order6.vue'),
                    meta: { title: '选择面料辅料' }
                },
                // {
                //     path: "/order1",
                //     component: () => import(/* webpackChunkName: "icon" */ '../components/page/order1.vue'),
                //     meta: { title: '选择面料辅料' }
                // },
                {
                    path: "/order10",
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/order10.vue'),
                    meta: { title: '服装类别工艺' }
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
