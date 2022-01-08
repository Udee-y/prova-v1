import { createRouter, createWebHistory } from 'vue-router'
import Aboutus from '../views/aboutus.vue'

const routes = [
  {
    path: '/',
    name: 'About us',
    component: Aboutus 
  },
  {
    path: '/contact us',
    name: 'Contact us',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/contactus.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
