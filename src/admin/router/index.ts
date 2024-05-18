import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/department',
    name: 'Department',
    component: () => import('../views/Department.vue'),
  },
  {
    path: '/employee',
    name: 'Employee',
    component: () => import('../views/Employee.vue'),
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../components/Cart.vue'),
      },
      {
        path: 'list',
        component: () => import('../components/ProductList.vue'),
      },
    ],
  },
];
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
