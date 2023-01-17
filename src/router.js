import { createRouter, createWebHistory } from 'vue-router'


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
    path: '/',
    component: () => import('./views/Home.vue'),
  },
    {
        name: 'about',
      path: '/about',
      component: () => import('./views/About.vue'),
    },
    {
        name: 'contact',
      path: '/contact',
      component: () => import('./views/Contact.vue'),
    },
  ],
})

