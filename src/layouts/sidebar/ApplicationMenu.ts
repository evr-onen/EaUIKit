import type { ApplicationMenuItem } from "@/types/Global.types";


export const ApplicationContentMenu = () => {
    const items: ApplicationMenuItem[] = [
      {
        label: 'Home',
        path: '/',
        icon: 'dashboard',
        meta: {
            title: 'Home'
        },
        visibility: true
    },
    {
      label: 'Form',
      icon: 'inputs',
      meta: {
        title: 'Form Inputs'
      },
      visibility: true,
      children: [
        {
          label: 'Button',
          path: '/form/button',
          icon: '',
          meta: {
            title: 'Button'
          },
          visibility: true
        },
        {
          label: 'Select',
          path: '/form/select',
          icon: '',
          meta: {
            title: 'Select'
          },
          visibility: true
        },
        {
          label: 'Multiselect',
          path: '/form/multiselect',
          icon: '',
          meta: {
            title: 'Multiselect'
          },
          visibility: true
        },
        {
          label: 'Autocomplete',
          path: '/form/autocomplete',
          icon: '',
          meta: {
            title: 'Autocomplete'
          },
          visibility: true
        },
        {
          label: 'TextInput',
          path: '/form/textinput',
          icon: '',
          meta: {
            title: 'TextInput'
          },
          visibility: true
        },
        {
          label: 'Checkbox',
          path: '/form/checkbox',
          icon: '',
          meta: {
            title: 'Checkbox'
          },
          visibility: true
        },
        {
          label: 'Radio Buttons',
          path: '/form/radio-buttons',
          icon: '',
          meta: {
            title: 'Radio Buttons'
          },
          visibility: true
        },
        {
          label: 'Upload Image',
          path: '/form/upload-image',
          icon: '',
          meta: {
            title: 'Upload Image'
          },
          visibility: true
        },
        {
          label: 'DatePicker',
          path: '/form/datepicker',
          icon: '',
          meta: {
            title: 'DatePicker'
          },
          visibility: true
        },
        {
          label: 'DateTimePicker',
          path: '/form/dateTimePicker',
          icon: '',
          meta: {
            title: 'DatePicker'
          },
          visibility: true
        },
        {
          label: 'TimePicker',
          path: '/form/timePicker',
          icon: '',
          meta: {
            title: 'TimePicker'
          },
          visibility: true
        },
      ]
    },
    {
      label: 'Panels',
      icon: 'inputs',
      meta: {
        title: 'Form Inputs'
      },
      visibility: true,
      children: [
        {
          label: 'Accordion',
          path: '/panels/accordion',
          icon: '',
          meta: {
            title: 'Accordion'
          },
          visibility: true
        },
        {
          label: 'Card',
          path: '/panels/card',
          icon: '',
          meta: {
            title: 'Card'
          },
          visibility: true
        },
        {
          label: 'Tabs',
          path: '/panels/tabs',
          icon: '',
          meta: {
            title: 'Tabs'
          },
          visibility: true
        },

      ]
    },
    {
      label: 'Messages',
      icon: 'inputs',
      meta: {
        title: 'Messages'
      },
      visibility: true,
      children: [
        {
          label: 'Message',
          path: '/messages/message',
          icon: '',
          meta: {
            title: 'Message'
          },
          visibility: true
        },
        {
          label: 'Toast',
          path: '/messages/toast',
          icon: '',
          meta: {
            title: 'Toast'
          },
          visibility: true
        },

      ]
    },
    {
      label: 'Overlay',
      icon: 'inputs',
      meta: {
        title: 'Form Inputs'
      },
      visibility: true,
      children: [
        {
          label: 'Dialog',
          path: '/overlay/dialog',
          icon: '',
          meta: {
            title: 'Dialog'
          },
          visibility: true
        },
        {
          label: 'Drawer',
          path: '/overlay/drawer',
          icon: '',
          meta: {
            title: 'Drawer'
          },
          visibility: true
        },
        {
          label: 'Popover',
          path: '/overlay/popover',
          icon: '',
          meta: {
            title: 'Popover'
          },
          visibility: true
        },
        {
          label: 'Tooltip',
          path: '/overlay/tooltip',
          icon: '',
          meta: {
            title: 'Tooltip'
          },
          visibility: true
        },
        {
          label: 'Modal',
          path: '/overlay/modal',
          icon: '',
          meta: {
            title: 'Modal'
          },
          visibility: true
        },
        {
          label: 'Confirm Popup',
          path: '/overlay/confirm-popup',
          icon: '',
          meta: {
            title: 'Confirm Popup'
          },
          visibility: true
        },
      ]
    },
    {
      label: 'Directives',
      icon: 'inputs',
      meta: {
        title: 'Directives'
      },
      visibility: true,
      children: [
        {
          label: 'Scroll On Reveal',
          path: '/directives/scroll-on-reveal',
          icon: '',
          meta: {
            title: 'Scroll On Reveal'
          },
          visibility: true
        },

      ]
    },

    ]
    return items;
}

export const ApplicationFooterMenu = () => {
    const items: ApplicationMenuItem[] = []
    return items;
}
