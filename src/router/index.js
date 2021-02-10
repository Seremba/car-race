import { createRouter, createWebHistory } from '@ionic/vue-router';

import ResultsPage from '../pages/ResultsPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/results'
  },
  {
    path: '/results',
    component: ResultsPage
  },
  
  {
    path: '/results/add',
    component: () => import('../components/results/CreateResultForm.vue')
  }
    
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
