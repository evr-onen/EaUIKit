import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/form/dropdown',
      name: 'about',
      component: () => import('@/views/dropdown.vue'),
    },
    {
      path: '/form/select',
      name: 'select',
      component: () => import('@/views/select.vue'),
    },
    {
      path: '/form/multiselect',
      name: 'multiselect',
      component: () => import('@/views/multiselect.vue'),
    },
    {
      path: '/form/autocomplete',
      name: 'autocomplete',
      component: () => import('@/views/autocomplete.vue'),
    },
    {
      path: '/form/button',
      name: 'button',
      component: () => import('@/views/button.vue'),
    },
    {
      path: '/form/textinput',
      name: 'modal',
      component: () => import('@/views/textInput.vue'),
    },
    {
      path: '/form/checkbox',
      name: 'checkbox',
      component: () => import('@/views/checkbox.vue'),
    },
    {
      path: '/form/radio-buttons',
      name: 'radio-buttons',
      component: () => import('@/views/radio-buttons.vue'),
    },
    {
      path: '/form/upload-image',
      name: 'upload-image',
      component: () => import('@/views/upload-image.vue'),
    },
    {
      path: '/form/datepicker',
      name: 'datepicker',
      component: () => import('@/views/form/datepicker.vue'),
    },
  ],
})

export default router
