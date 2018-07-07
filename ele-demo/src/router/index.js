import Vue from 'vue'
import Router from 'vue-router'
const home = () => import('@/page/home')
const login = () => import('@/page/login')
const city = () => import('@/page/city')
const msite = () => import('@/page/msite')
// lazyload
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      }
    },
    {
      path: '/city/:cityid',
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
