import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

import MenuPage from '@/pages/MenuPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'
import MapPage from '@/pages/MapPage.vue'
import BonusesPage from '@/pages/BonusesPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const routes = [
  { path: '/', redirect: '/menu' },
  { path: '/menu', component: MenuPage },
  { path: '/orders', component: OrdersPage },
  { path: '/map', component: MapPage },
  { path: '/bonuses', component: BonusesPage },
  { path: '/profile', component: ProfilePage },
  { path: '/login', component: LoginPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const user = useUserStore()
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && !user.isLoggedIn) {
    next('/login')
  } else if (to.path === '/login' && user.isLoggedIn) {
    // Якщо вже авторизований, не пускати на /login
    next('/profile')
  } else {
    next()
  }
})

export default router