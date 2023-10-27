import { createRouter, createWebHistory } from '@ionic/vue-router';
import tabs from '../views/tabs.vue'
import Inicio from '../views/inicio.vue'
import CalculoCivil from '../views/CalculoCivil.vue'
import Calculo from '../views/Calculo.vue'
import Formulas from '../views/Formulas.vue'
import Procedimiento from '../views/Procedimiento.vue'
import Productos from '../views/Productos.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/inicio'
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs,
    children: [
      {
        path: 'inicio',
        name: 'inicio',
        component: Inicio
      },
      {
        path: 'CalculoCivil',
        name: 'CalculoCivil',
        component: CalculoCivil
      },
      {
        path: 'Calculo/:categoria',
        name: 'Calculo',
        component: Calculo
      },
      {
        path: 'Formulas/:formula',
        name: 'Formulas',
        component: Formulas
      },
      {
        path: 'Procedimiento/:tipo',
        name: 'Procedimiento',
        component: Procedimiento
      },
      {
        path: 'Productos',
        name: 'Productos',
        component: Productos
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
