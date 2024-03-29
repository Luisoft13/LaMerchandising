import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'

Vue.use(VueRouter)
Vue.use(VueMeta)

const routes = [
  {
    path: '/',
    name: 'welcome',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("@/pages/Home.vue")
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: () => import("@/pages/Nosotros.vue")
  },
  {
    path: '/textiles',
    name: 'textiles',
    component: () => import("@/pages/ProductsTextilesPage.vue")
  },
  {
    path: '/tecnologia',
    name: 'tecnologia',
    component: () => import("@/pages/ProductsTecnologiaPage.vue")
  },
  {
    path: '/dulces-despensa-bar',
    name: 'dulces-despensa-bar',
    component: () => import("@/pages/ProductsDespensaBarPage.vue")
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import("@/pages/ProductsOtrosProductosPage.vue")
  },
  {
    path: '/seguridad-higiene',
    name: 'seguridad-higiene',
    component: () => import("@/pages/ProductsSeguridadPage.vue")
  },
  {
    path: '/regalos',
    name: 'regalos',
    component: () => import("@/pages/ProductsRelagosPage.vue")
  },
]

const router = new VueRouter({
  mode: '',
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            offset: { x: 0, y: 0 },
            behavior: 'smooth'
          })
        }, 2000)
      })
    }

    return { x: 0, y: 0 }
  }
})

export default router
