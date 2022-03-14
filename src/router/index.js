import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cuenta from '../components/Cuenta.vue'
import LoginUser from '../components/LoginUser.vue'
import Registrarse from '../components/Registrarse.vue'
import RedAtencion from '../components/RedAtencion.vue'
import Contactos from '../components/Contactos.vue'
import Nosotros from '../components/Nosotros.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/LoginUser',
    name:'LoginUser',
    component:LoginUser
  },
  {
    path:'/Cuenta',
    name:'Cuenta',
    component:Cuenta
  },
  {
    path:'/Registrarse',
    name:'Registrarse',
    component:Registrarse
  },
  {
    path:'/RedAtencion',
    name:'RedAtencion',
    component:RedAtencion
  },
  {
    path:'/Nosotros',
    name:'Nosotros',
    component:Nosotros
  },
  {
    path:'/Contactos',
    name:'Contactos',
    component:Contactos
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
