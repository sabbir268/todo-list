import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import ListTask from './components/ListTask'
import ActiveTask from './components/ActiveTask'
import CompletedTask from './components/CompletedTask'

const routes = [{
        path: '/',
        component: ListTask
    },
    {
        path: '/active',
        component: ActiveTask
    },
    {
        path: '/completed',
        component: CompletedTask
    }

]



const router = new VueRouter({
    routes, // short for `routes: routes`,
    hashbang: false,
    mode: 'history'
})


export default router
