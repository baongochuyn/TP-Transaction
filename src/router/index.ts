import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../view/FormView.vue'
import HomeView from '../view/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add',
      name: 'add',
      component: FormView
    }
  ]
})
export default router
