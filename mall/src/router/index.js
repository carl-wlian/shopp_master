import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '@/views/category'
import categorylist from '@/views/categorylist'
import product from '@/views/product'
import buycart from '@/views/buycart'
import Special from '@/views/special'
import Cart from '@/views/cart'
import My from '@/views/my'
import Login from '@/views/login'
import Email from '@/views/email'
import Couponlist from '@/views/couponlist'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: Category

    }, {
        path: '/categorylist/:id',
        name: 'categorylist',
        component: categorylist,
        props: true
    }, {
        path: "/product/:id",
        name: "product",
        component: product,
        props: true
    }, {
        path: "/buycart",
        name: "buycart",
        component: buycart
    }, {
        path: '/special',
        name: 'special',
        component: Special
    }, {
        path: '/cart',
        name: 'cart',
        component: Cart
    }, {
        path: '/my',
        name: 'my',
        component: My
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/email',
        name: 'email',
        component: Email
    }, {
        path: '/couponlist',
        name: 'couponlist',
        component: Couponlist
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router