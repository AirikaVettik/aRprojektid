import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import Calendar from '../views/dashboard/calendar/index.vue'

const routes = [
    { path: '/', component: Login, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard', children: [
      {path: 'calendar', component: Calendar, name: 'Calendar', }
    ] }
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router