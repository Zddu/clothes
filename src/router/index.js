import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            children: [{
                    path: '/dashboard',
                    component: () => import('../components/page/Dashboard.vue'),
                },
                {
                    path: '/icon',
                    component: () => import('../components/page/Icon.vue'),
                },
                {
                    path: '/IndividualOrder',
                    component: () => import('../components/page/IndividualOrder.vue'),
                },
                {
                    path: "/OrderDetails",
                    component: () => import('./../components/page/OrderDetails.vue')
                },
                {
                    path: "/copy",
                    component: () => import('./../components/page/copy.vue')
                }
            ]
        },
        {
            path: '/login',
            component: () => import('../components/page/Login.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});