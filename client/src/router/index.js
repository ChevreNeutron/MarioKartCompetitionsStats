import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Characters from '@/components/Characters'
import Addgame from '@/components/Addgame'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/root',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/addgame',
      name: 'Addgame',
      component: Addgame
    },
  ]
})
