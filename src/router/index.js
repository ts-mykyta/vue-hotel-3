import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Contact from '../pages/Contact.vue'
import Privacy from '../pages/Privacy.vue'
import Terms from '../pages/Terms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {title: "Home"}
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {title: "Contact"}
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
      meta: {title: "Privacy Policy"}
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
      meta: {title: "Terms"}
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  const defaultTitle = 'Discover Australia';
  document.title = to.meta.title || defaultTitle;
  next();
})

export default router
