import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
});

export default router;
