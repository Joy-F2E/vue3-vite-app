import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ "../pages/About.vue")
  },
  {
    path: '/code',
    name: 'Code',
    component: () => import(/* webpackChunkName: "code" */ "../pages/Code.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router