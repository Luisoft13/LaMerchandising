import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

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
    path: '/despensa-bar',
    name: 'despensa-bar',
    component: () => import("@/pages/ProductsDespensaBarPage.vue")
  },
  {
    path: '/otros-productos',
    name: 'otros-productos',
    component: () => import("@/pages/ProductsOtrosProductosPage.vue")
  },
  {
    path: '/seguridad-higiene',
    name: 'seguridad-higiene',
    component: () => import("@/pages/ProductsSeguridadPage.vue")
  },
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
