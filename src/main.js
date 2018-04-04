// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import lodash from 'lodash'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import routes from './config/routes'
import '../theme/index.css'
import './style/common.css'
require('./mock.js')
import api from './config/api.js'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

/* 要定义在前面，否则原型链会被重写 */
Object.defineProperties(Vue.prototype, {
  '$lodash': {
    value: lodash
  }
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



