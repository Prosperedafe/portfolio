import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Details from '../pages/Details.vue'
import Notfound from '../pages/404'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/about/:id',
        name: 'About-details',
        component: Details
    },
    {
        path: '/:catchAll(.*)',
        name: 'Not Found',
        component: Notfound
    },
    {
        path: '/about-us',
        redirect: 'about'
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router