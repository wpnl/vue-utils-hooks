import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/userSize', name: 'UserSize', component: () => import('../views/hooksView/UserSizeView.vue') },
  { path: '/userHover', name: 'UserHoverView', component: () => import('../views/hooksView/UserHoverView.vue') },
  { path: '/useDocumentVisibility', name: 'UseDocumentVisibilityView', component: () => import('../views/hooksView/UseDocumentVisibilityView.vue') },
  { path: '/useFullscreen', name: 'UseFullscreenView', component: () => import('../views/hooksView/UseFullscreenView.vue') },
  { path: '/useInViewport', name: 'UseInViewportView', component: () => import('../views/hooksView/UseInViewportView.vue') },
  { path: '/useMouse', name: 'UseMouseView', component: () => import('../views/hooksView/UseMouseView.vue') },
  { path: '/useScroll', name: 'UseScrollView', component: () => import('../views/hooksView/UseScrollView.vue') },
  { path: '/useTextSelection', name: 'UseTextSelectionView', component: () => import('../views/hooksView/UseTextSelectionView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
