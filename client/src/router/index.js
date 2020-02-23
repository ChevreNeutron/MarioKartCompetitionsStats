import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Characters from '@/components/Characters'
import Party from '@/components/Party'
import CreateParty from '@/components/CreateParty'

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
      path: '/party',
      name: 'party',
      component: Party
    },
    {
      path: '/party/create',
      name: 'create-party',
      component: CreateParty
    }
  ]
})
