// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/health',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Health',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/usecases/practitioner/h2Health.vue'),
      },
    ],
  },
  {
    path: '/practice1',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'h2product1',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/products/h2p/practitioner/h2pV1.vue'),
      },
    ],
  },
  {
    path: '/practice2',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'h2product2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/products/h2p/practitioner/h2pV2.vue'),
      },
    ],
  },
  {
    path: '/creators',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'h2product2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/usecases/creators/h2Creators.vue'),
      },
    ],
  },
  {
    path: '/datascience',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'h2datascience',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/usecases/datascience/datascienceFeatures.vue'),
      },
    ],
  },
  {
    path: '/sensordata',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'h2devices',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/usecases/devices/deviceFeatures.vue'),
      },
    ],
  },
  {
    path: '/protocol',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'protocol',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/products/h2p/protocol/h2protocol.vue'),
      },
    ],
  },
  {
    path: '/hproducts',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/products/h2p/products/h2product.vue'),
      },
    ],
  },
  {
    path: '/ecommerce',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Ecommerce',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/usecases/ecommerce/h2Ecommerce.vue'),
      },
    ],
  },
  {
    path: '/payments',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Payments',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/products/payment/payments.vue'),
      },
    ],
  },
  {
    path: '/liberation',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'liberation',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/products/devices/liberateData.vue'),
      },
    ],
  },
  {
    path: '/support',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'support',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/support/learn.vue'),
      },
    ],
  },

  {
    path: '/developers',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Developers',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/developers/contribute.vue'),
      },
    ],
  },
  {
    path: '/company',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Company',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/company/about.vue'),
      },
    ],
  },
  {
    path: '/support',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Support',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/components/support/learn.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
