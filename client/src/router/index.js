import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import Board from '../views/dashboard/dashboard/index.vue'
import Client from '../views/dashboard/client/index.vue'
import Offer from '../views/dashboard/offer/index.vue'
import New from '../views/dashboard/new/index.vue'
import Project from '../views/dashboard/project/index.vue'
import Calendar from '../views/dashboard/calendar/index.vue'


const routes = [
    { path: '/', component: Login, name: 'Login' },
    { path: '', component: Dashboard, name: 'Dashboard', children: [
      {path: 'dashboard', component: Board, name: 'Board'},
      {path: 'client', component: Client, name: 'Client'},
      {path: 'offer', component: Offer, name: 'Offer'},
      {path: 'new', component: New, name: 'New'},
      {path: 'project', component: Project, name: 'Project'},
      {path: 'calendar', component: Calendar, name: 'Calendar'},
    ] }
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router