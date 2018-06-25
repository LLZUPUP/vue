import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/article/article'
import Articles from '@/components/articles/articles'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Acticles',
      component: Articles
    }
  ]
})
