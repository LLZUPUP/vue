import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth.js'
import About from '@/views/About'
import Dashboard from '@/views/Dashboard'
import Login from '@/views/Login'


Vue.use(Router)

const requireAuth = (to, from, next) => {
  console.log(to, from);
  // 用户有登录权限？
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
  next();
}
const requireIndex = (to,from,next)=> {
  if(auth.loggedIn()) {
    next({
      path: '/login',
      query: {
        redirect: '/'
      }
    })
  }
  next();
}
export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/about'
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/dashboard',
      component: Dashboard,
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: requireIndex
    }
  ]
})