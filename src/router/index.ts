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
    // {
    //   path: '/form/dropdown',
    //   name: 'about',
    //   component: () => import('@/views/dropdown.vue'),
    // },
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
    {
      path: '/form/dateTimePicker',
      name: 'dateTimePicker',
      component: () => import('@/views/form/dateTimePicker.vue'),
    },
    {
      path: '/file-management',
      name: 'file-management',
      component: () => import('@/views/file-management.vue'),
    },
    {
      path: '/form/timePicker',
      name: 'timePicker',
      component: () => import('@/views/form/timepicker.vue'),
    },
    {
      path: '/messages/message',
      name: 'Message',
      component: () => import('@/views/message/message.vue'),
    },
    {
      path: '/messages/toast',
      name: 'Toast',
      component: () => import('@/views/message/toast.vue'),
    },
    {
      path: '/overlay/modal',
      name: 'Confirm Dialog',
      component: () => import('@/views/overlay/modal.vue'),
    },
    {
      path: '/overlay/dialog',
      name: 'Dialog',
      component: () => import('@/views/overlay/dialog.vue'),
    },
    {
      path: '/overlay/drawer',
      name: 'Drawer',
      component: () => import('@/views/overlay/drawer.vue'),
    },
    {
      path: '/overlay/popover',
      name: 'Popover',
      component: () => import('@/views/overlay/popover.vue'),
    },
    {
      path: '/overlay/tooltip',
      name: 'Tooltip',
      component: () => import('@/views/overlay/tooltip.vue'),
    },
    {
      path: '/panels/accordion',
      name: 'Accordion',
      component: () => import('@/views/panels/accordion.vue'),
    },
    {
      path: '/panels/card',
      name: 'Card',
      component: () => import('@/views/panels/card.vue'),
    },
    {
      path: '/panels/tabs',
      name: 'Tabs',
      component: () => import('@/views/panels/tabs.vue'),
    },
    {
      path: '/directives/scroll-on-reveal',
      name: 'Scroll On Reveal',
      component: () => import('@/views/directives/scrollOnReveal.vue'),
    },


  ],
})

export default router
