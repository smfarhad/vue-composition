import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Compute from '../views/ComputedView.vue'
import Posts from '../views/PostsView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }, {
    path: '/compute',
    name: 'compute',
    component: Compute
  }, {
    path: '/posts',
    name: 'posts',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
