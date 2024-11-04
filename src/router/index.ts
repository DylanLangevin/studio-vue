import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage/Homepage.vue'
import Collection from '../views/Collection/Collection.vue'
import Contact from '../views/Contact/Contact.vue'
import Candle from '../views/Candle/Candle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage,
    meta: {
      title: 'Accueil - Studio Bougie'
    }
  },
  {
    path: '/collection',
    name: 'collection',
    component: Collection,
    meta: {
      title: 'Collection - Studio Bougie'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
    meta: {
      title: 'Contact - Studio Bougie'
    }
  },
  {
    path: '/candle/:slug',
    name: 'candle',
    component: Candle,
    meta: {
      title: 'Bougie - Studio Bougie'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Hook global pour mettre à jour le titre de la page
router.beforeEach((to, from, next) => {
  const defaultTitle = 'Studio Bougie';  // Titre par défaut
  document.title = to.meta.title || defaultTitle;
  next();
})

export default router