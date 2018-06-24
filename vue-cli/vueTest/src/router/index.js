import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Hello1 from '@/components/hello1'
import Hello2 from '@/components/hello2'
import Params from '@/components/params'
import Error from '@/components/error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      component: HelloWorld,
      alias: '/index'
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle', //(\\d+)只允许传递数字参数
      component: Params,
      // beforeEnter:(to,from,next)=>{
      //   console.log(to)
      //   console.log(from)
      //   // next(true)
      //   next({
      //     path: '/'
      //   })
      // }
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goParams/:newsId(\\d+)/:newsTitle', //(\\d+)只允许传递数字参数
      redirect: '/params/:newsId(\\d+)/:newsTitle'
    },
    {
      path: '/hello1',
      component:Hello1,
      alias:'/alias'
    },
    {
      path:'*',
      component: Error
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
        {
          path:'/',
          name: 'Hi',
          component: Hi
        },
        {
          path: 'Hi1',
          name: 'Hi1',
          component: Hi1
        },
        {
          path: 'Hi2',
          name: 'Hi2',
          component: Hi2
        }
      ]
    },
  ]
})
