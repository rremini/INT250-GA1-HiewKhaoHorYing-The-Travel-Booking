import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../pages/contact.vue'),
    },
    
  ],
})

export default router
