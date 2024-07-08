import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage/Homepage.vue'
import Collection from '../views/Collection/Collection.vue'
import Contact from '../views/Contact/Contact.vue'
import Basket from '../views/Basket/Basket.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/basket',
      name: 'basket',
      component: Basket
    }
  ]
})

export default router
