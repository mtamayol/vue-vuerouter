import Vue from 'vue'
import VueRouter from 'vue-router'

import Inicio from '../views/Inicio.vue'
import Articulo from '../views/Articulo.vue'
import Contacto from '../views/Contacto.vue'
import NotFound from '../views/NotFound.vue'
import Post from '../views/Post.vue'
import SobreMi from '../views/SobreMi.vue'

Vue.use(VueRouter)

  const routes = [
      {
        path: '/',
        name: 'inicio',
        component: Inicio
    },
    {
        path: '/sobremi',
        name: 'sobremi',
        component: SobreMi
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: Contacto
    },
    {
        path: '/post/:numero',
        name: 'Post',
        component: Post,
        redirect: { name: 'Articulo' },
        children: [
            {
                path: 'articulo',
                component: Articulo,
                name: 'Articulo'
            }
        ]
      },
      {
          path: '*',
          component: NotFound
      }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
