// 引用模板
import index from '../pages/index.vue'
import add from '../pages/channelmanagement/add.vue'
import maintenance from '../pages/channelmanagement/maintenance.vue'
import practice from '../pages/practice/practice.vue'

// 配置路由
export default [
  {
    path: '/',
    component: index,
    name: '首页',
    children: [{
      name: '分组一',
      path: 'channelmanagement/add',
      component: add
    }, {
      name: '分组二',
      path: 'channelmanagement/maintenance',
      component: maintenance
    }]
  }, {
    path: '/practice/practice',
    component: practice,
    name: '基础练习'
  }
]
