import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../layout/Admin'),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import('../views/Home')
      }
    ]
  },
  {
    path: "/",
    name: "Home",
    component: () => import('../views/Home')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/user/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
