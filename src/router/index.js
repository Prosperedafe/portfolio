import { createRouter, createWebHistory } from "vue-router";

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Details from '../views/Details.vue'
import Notfound from '../views/404'

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