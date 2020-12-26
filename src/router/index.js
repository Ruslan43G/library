import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),

  },
  {
    path: '/edit/:id',
    name: 'editBook',
    component: () => import('../views/EditBook.vue'),
  },
  {
    path: '/bookslist',
    name: 'booksList',
    component: () => import('../views/BooksList.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
