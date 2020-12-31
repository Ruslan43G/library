import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'booksList',
    component: () => import('../views/BooksList.vue'),

  },
  {
    path: '/edit/:id',
    name: 'editBook',
    component: () => import('../views/EditBook.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
