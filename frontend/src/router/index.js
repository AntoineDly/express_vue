import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/subcategory/:id',
    name: 'SubCategory',
    component: () => import(/* webpackChunkName: "about" */ '../views/SubCategory.vue'),
	props: true
  },
	{
    path: '/products/:id',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue'),
		props: true
  },
	{
    path: '/product/:id',
    name: 'Product',
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue'),
		props: true
  },
	{
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'),
		props: true
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
