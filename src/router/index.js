import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import article from '@/components/article'
import about from '@/components/about'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/t',
      name: 't',
      component: require('@/components/test/test')
    }
  ]
})
