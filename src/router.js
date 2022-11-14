import { createWebHistory, createRouter } from "vue-router";

import LoginPage from './components/LoginPage.vue';
import Main from './components/Main.vue';

const routes = [
    {
        path: '/login',
        component: LoginPage,
    },{
        main : '/',
        component: Main,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;