import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../view/FormView.vue'
import HomeView from '../view/HomeView.vue'
import NewCategoryView from '../view/NewCategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-transaction',
      name: 'new-transaction',
      component: FormView
    },
    {
      path: '/new-category',
      name: 'new-category',
      component: NewCategoryView
    }
  ]
})
export default router
