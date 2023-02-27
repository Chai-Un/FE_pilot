import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/components/Layout/MainLayout.vue'),
    children: [
      {
        path: '/pool',
        name: 'pool',
        component: () => import('@/views/PoolView.vue')
      },
      {
        path: '/pool/:walletAddress',
        name: 'deposit',
        component: () => import('@/views/DepositView.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes
})

export default router
