import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import HotelDetail from '../pages/HotelDetail.vue'
import Usa from '../pages/countries/Usa.vue'
import Canada from '../pages/countries/Canada.vue'
import Australia from '../pages/countries/Australia.vue'
import Privacy from '../pages/Privacy.vue'
import Terms from '../pages/Terms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {title: "Home - Hotels & Casino"}
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {title: "About Us - Hotels & Casino"}
    },
    {
      path: '/hotel/:id',
      name: 'HotelDetail',
      component: HotelDetail,
      props: true,
      meta: {title: "Details - Hotels & Casino"}
    },
    {
      path: '/usa',
      name: 'USA',
      component: Usa,
      meta: {title: "USA - Hotels & Casino"}
    },
    {
      path: '/canada',
      name: 'Canada',
      component: Canada,
      meta: {title: "Canada - Hotels & Casino"}
    },
    {
      path: '/australia',
      name: 'Australia',
      component: Australia,
      meta: {title: "Australia - Hotels & Casino"}
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
      meta: {title: "Privacy Policy - Hotels & Casino"}
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
      meta: {title: "Terms - Hotels & Casino"}
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
