import { createRouter, createWebHistory } from 'vue-router'
import About from '../components/pages/About.vue'

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
    {
      path: '/about',
      name: 'About',
       component: () => import('../components/pages/about.vue'),
    }
  ],
})

export default router
