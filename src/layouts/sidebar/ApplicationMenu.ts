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
      label: 'Form Inputs',
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
          label: 'Dropdown',
          path: '/form/dropdown',
          icon: '',
          meta: {
            title: 'Dropdown'
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
      ]
    },

    ]
    return items;
}

export const ApplicationFooterMenu = () => {
    const items: ApplicationMenuItem[] = []
    return items;
}
