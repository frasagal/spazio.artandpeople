import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BadgesPage from './pages/BadgesPage'

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
    },
    {
      path: '/badges',
      name: 'badges',
      component: BadgesPage
    }
  ]
});

export default router;
