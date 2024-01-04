import Home from '../Pages/Home.vue';
import About from '../Pages/About.vue';
import Contact from '../Pages/Contact.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About Me',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact Me',
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
