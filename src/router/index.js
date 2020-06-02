import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/userSize', name: 'UserSize', component: () => import('../views/hooksView/UserSizeView.vue') },
  { path: '/userHover', name: 'UserHoverView', component: () => import('../views/hooksView/UserHoverView.vue') },
  { path: '/useDocumentVisibility', name: 'useDocumentVisibilityView', component: () => import('../views/hooksView/UseDocumentVisibilityView.vue') },
  { path: '/useFullscreen', name: 'useFullscreenView', component: () => import('../views/hooksView/UseFullscreenView.vue') },
  { path: '/useInViewport', name: 'UseInViewportView', component: () => import('../views/hooksView/UseInViewportView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
