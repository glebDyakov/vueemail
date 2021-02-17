import { createRouter, createWebHistory, createMemoryHistory, createWebHashHistory } from 'vue-router'
import Login from './views/Login'
import Forget from './views/Forget'
import Forget from './views/Dashboard'
import Forget from './views/Mail'
export default createRouter({

    history: createWebHistory(),
    routes: [
        { path: '/login', component: Login, alias: '/' },
        { path: '/forget', component: Forget },
        { path: '/dashboard', component: Dashboard },
        { path: '/mail', component: Mail },
    ],
    linkExactActiveClass: 'exactactive',
    linkActiveClass: 'active',
})