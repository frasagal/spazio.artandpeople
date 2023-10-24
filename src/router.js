import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage'
import ThankYouPage from './pages/AboutPage'
import BadgesPage from './pages/BadgesPage'
import JoinPage from './pages/JoinPage'

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
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouPage
    },
    {
      path: '/join',
      name: 'join',
      component: JoinPage
    },
    {
      path: '/badges',
      name: 'badges',
      component: BadgesPage
    }
  ]
});

export default router;
