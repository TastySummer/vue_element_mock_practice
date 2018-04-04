import Vue from 'vue'
import Router from 'vue-router'
import watchExampleVM from '@/components/watchExampleVM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'watchExampleVM',
      component: watchExampleVM
    }
  ]
})
