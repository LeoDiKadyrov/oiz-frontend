import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import HomePage from '@/views/HomePage.vue'
import RegistrationPage from '@/views/RegistrationPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ForgotPassword
  },
  {
    path: '/register',
    name: 'RegistrationPage',
    component: RegistrationPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
