import Vue from 'vue'
import VueRouter from 'vue-router'

const ShopCart = () => import("views/cart/ShopCart");
const CateGory = () => import("views/category/CateGory");
const Home = () => import("views/home/Home");
const ProFile = () => import("views/profile/ProFile");
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'About',
        component: Home
    },
    {
        path: '/cart',
        component: ShopCart
    },
    {
        path: '/category',
        component: CateGory
    },
    {
        path: '/personal',
        component: ProFile
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
