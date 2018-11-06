import Vue from 'vue'
import Router from 'vue-router'

import Login from './views/Login.vue'
import Layout from './views/Layout.vue'
import Landing from './views/Landing.vue'
import Registro from './views/Registro.vue'
import Bienvenido from './views/Bienvenido.vue'
import Inicio from './views/Inicio.vue'
import Prueba from './views/Prueba.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/landing',
      name: 'landing',
      component: Landing,
    },

    {
      path: '/',
      name: 'layout',
      component: Layout,
    },

    {
     path: '/login',
     name:'login',
     component: Login
    },

    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },

    {
      path: '/bienvenido',
      name: 'bienvenido',
      component: Bienvenido
    },

    {

    path: '/inicio',
    name: 'inicio',
    component: Inicio

   },

   {
    path: '/Prueba',
    name: 'prueba',
    component: Prueba,
  },

  ]
})
