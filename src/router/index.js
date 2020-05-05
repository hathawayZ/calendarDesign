import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/tool/:id/:key',
            component: () => import(/* webpackChunkName: "chart" */ '../components/BaseCharts.vue'),
            meta: {
                title: '返校活动管理'
            }
        }
    ]
});
