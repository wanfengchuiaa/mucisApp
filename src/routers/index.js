import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/Home'
  },
  {
    path: '/play',
    component: () => import('@/views/Play')
  },
  {
    path: '/layout',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/layout/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/layout/search',
        component: () => import('@/views/Search')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
