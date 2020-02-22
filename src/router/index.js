import Vue from 'vue'
import VueRouter from 'vue-router'

const ShopCart = () => import("views/cart/ShopCart");
const CateGory = () => import("views/category/CateGory");
const Home = () => import("views/home/Home");
const ProFile = () => import("views/profile/ProFile");
const Detail = () => import("views/detail/Detail")
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
    },
    {
        path:'/detail/:iid',
        component:Detail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
