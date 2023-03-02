import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Compute from '../views/ComputedView.vue'
import Posts from '../views/PostView.vue'
import PostDetails from '../views/PostDetails.vue'

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
  }, {
    path: '/posts/:id',
    name: 'PostDetails',
    component: PostDetails,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
