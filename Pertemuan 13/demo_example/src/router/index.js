import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

import User from '@/components/User'
import UserAdd from '@/components/UserAdd'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path: '/UserAdd',
      name: 'UserAdd',
      component: UserAdd
    },
    {
      path: '/UserDetail',
      name: 'UserDetail',
      component: UserDetail
    }
  ]
})