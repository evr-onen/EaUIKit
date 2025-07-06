# EA-Kit

A comprehensive Vue 3 UI component library with TypeScript support, designed for modern web applications.

## 🚀 Features

- 🎨 **Rich Component Set**: 25+ carefully crafted components
- 🔧 **TypeScript Support**: Full TypeScript support with type definitions
- 🎯 **Vue 3 Composition API**: Built with Vue 3 and Composition API
- 📱 **Responsive Design**: Mobile-first responsive components
- 🎨 **Customizable**: Easy to customize and theme
- 🔧 **Composables**: Reusable composable functions
- 📦 **Tree Shakeable**: Import only what you need

## 📦 Installation

```bash
npm install ea-kit
```

## 🎯 Quick Start

```typescript
import { createApp } from 'vue'
import { EaButton, EaTextInput } from 'ea-kit'
import 'ea-kit/dist/ea-kit.css'

const app = createApp(App)

app.component('EaButton', EaButton)
app.component('EaTextInput', EaTextInput)

app.mount('#app')
```

## 🧩 Available Components

### Form Components
- `EaButton` - Button component with multiple variants
- `EaTextInput` - Text input with validation
- `EaSelect` - Select dropdown component
- `EaCheckbox` - Checkbox component
- `EaRadioButtons` - Radio button group
- `EaDatePicker` - Date picker component
- `EaTimePicker` - Time picker component
- `EaDateTimePicker` - Date and time picker
- `EaAutocomplete` - Autocomplete input
- `EaMultiselect` - Multi-select dropdown
- `EaBadge` - Badge component
- `EaUploadImage` - Image upload component
- `EaDropdown` - Dropdown component

### Overlay Components
- `EaModal` - Modal dialog
- `EaDialog` - Dialog component
- `EaDrawer` - Slide-out drawer
- `EaTooltip` - Tooltip component
- `EaPopover` - Popover component
- `EaConfirmPopup` - Confirmation popup

### Message Components
- `EaMessage` - Message component
- `EaToast` - Toast notifications

### Panel Components
- `EaCard` - Card component
- `EaTabs` - Tab component
- `EaAccordion` - Accordion component

### File Management
- `EaFileManagement` - File management component
- `FileItem` - File item component

### General Components
- `EaIcons` - Icon component
- `CodeBlock` - Code block component

## 🔧 Composables

The library includes several useful composables:

```typescript
import { 
  useBreakpoint, 
  useDrawer, 
  useScrollReveal, 
  useTooltip,
  useToast,
  useModal,
  useDialog
} from 'ea-kit'
```

## 📝 Usage Examples

### Basic Button
```vue
<template>
  <EaButton variant="primary" @click="handleClick">
    Click me
  </EaButton>
</template>

<script setup>
import { EaButton } from 'ea-kit'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>
```

### Text Input with Validation
```vue
<template>
  <EaTextInput 
    v-model="email"
    placeholder="Enter your email"
    type="email"
    :error="emailError"
  />
</template>

<script setup>
import { ref } from 'vue'
import { EaTextInput } from 'ea-kit'

const email = ref('')
const emailError = ref('')
</script>
```

### Toast Notifications
```vue
<script setup>
import { useToast } from 'ea-kit'

const { showToast } = useToast()

const showSuccess = () => {
  showToast({
    type: 'success',
    message: 'Operation completed successfully!'
  })
}
</script>
```

## 🎨 Styling

Import the CSS file in your main application:

```typescript
import 'ea-kit/dist/ea-kit.css'
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build library
npm run build:lib

# Type check
npm run type-check

# Lint
npm run lint
```

## 📄 License

MIT License

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.
