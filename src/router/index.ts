import { createWebHistory, createWebHashHistory, RouterHistory, createRouter } from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import ProductDetail from '../pages/ProductDetail.vue';
import ProductDetail1 from '../pages/ProductDetail1.vue';
import ProductDetail2 from '../pages/ProductDetail2.vue';
import ProductDetail3 from '../pages/ProductDetail3.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    name: 'About'
  },
  {
    path: '/products',
    component: ProductDetail,
    name: 'ProductDetail'
  },
  {
    path: '/products_1',
    component: ProductDetail1,
    name: 'ProductDetail1'
  },
  {
    path: '/products_2',
    component: ProductDetail2,
    name: 'ProductDetail2'
  },
  {
    path: '/products_3',
    component: ProductDetail3,
    name: 'ProductDetail3'
  },
];

function createWebHistoryType(type: string = 'history'): RouterHistory {
  if(type === 'hash') {
    return createWebHashHistory();
  }
  return createWebHistory();
}

export default createRouter({
  history: createWebHistoryType(),
  routes
})
