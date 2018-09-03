import Vue from 'vue'
import Router from 'vue-router'
import Interface from './views/Interface.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Interface',
      component: Interface
    },
  ]
})
