import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/login/index.vue"

const routes = [
    { path: '/', component: Login },
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router