import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('../views/Home.vue') },
  { path: '/destination', component: () => import('../views/Destination.vue') },
  { path: '/crew', component: () => import('../views/Crew.vue') },
  { path: '/technology', component: () => import('../views/Technology.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

