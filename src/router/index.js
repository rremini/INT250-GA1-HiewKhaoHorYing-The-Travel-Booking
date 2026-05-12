import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/pages/PageHome.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../components/pages/contact.vue'),
    },
     {
      path: '/news',
      name: 'News',
      component: () => import('../components/pages/news.vue'),
    },
  ],
})

export default router
