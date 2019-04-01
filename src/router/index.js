import Vue from 'vue'
import Router from 'vue-router'
import BasicsCom from '@/components/basicsCom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicsCom',
      component: BasicsCom
    }
  ]
})
