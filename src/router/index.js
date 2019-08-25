import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import article from '@/components/article'
import about from '@/components/about'

Vue.use(Router)
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true // 需要缓存
      }

    },
    {
      path: '/article',
      name: 'article',
      component: article,
      meta: {
        keepAlive: false
      }

    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        keepAlive: false
      }

    }
  ]
})
