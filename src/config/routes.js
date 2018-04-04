// 引用模板
import index from '../pages/index.vue'
import add from '../pages/channelmanagement/add.vue'
import maintenance from '../pages/channelmanagement/maintenance.vue'

// 配置路由
export default [
  {
    path: '/',
    component: index,
    children: [{
      name: '新建渠道',
      path: 'channelmanagement/add',
      component: add
    }, {
      name: '渠道维护 ',
      path: 'channelmanagement/maintenance',
      component: maintenance
    }]
  }
]
