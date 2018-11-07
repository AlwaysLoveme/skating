import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [{
      path: '/',
      redirect: '/index',
      component: () => import('./../views/index')
    },
    {
      path: '/index',
      component: () => import('./../views/index'),
      children: [{
          path: '/',
          redirect: '/home',
          component: () => import('./../views/home')
        },
        {
          path: '/home',
          component: () => import('./../views/home')
        },
        {
          path: '/about',
          component: () => import('./../views/about')
        },
        {
          path: '/trends',
          component: () => import('./../views/trends')
        },
        {
          path: '/video',
          component: () => import('./../views/video')
        },
        {
          path: '/announcement',
          component: () => import('./../views/announcement')
        },
        {
          path: '/course',
          component: () => import('./../views/course')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./../views/login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./../views/register')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./../views/user')
    }
  ]
})
export default router