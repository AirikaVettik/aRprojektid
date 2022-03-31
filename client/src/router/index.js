import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import Calendar from '../views/dashboard/calendar/index.vue'
import Offer from '../views/dashboard/offer/index.vue'
import Client from '../views/dashboard/client/index.vue'
import NewOffer from '../views/dashboard/offer/newOffer.vue'

const routes = [
    { path: '/', component: Login, name: 'Login' },
    { path: '/dashboard', component: Dashboard, name: 'Dashboard', children: [
      {path: 'calendar', component: Calendar, name: 'Calendar'},
      {path: 'offer', component: Offer, name: 'Offer'},
      {path: 'client', component: Client, name: 'Client'},
      {path: 'newoffer', component: NewOffer, name: 'Newoffer'}
    ] }
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router