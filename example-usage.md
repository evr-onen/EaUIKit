# EA-Kit Kullanım Örnekleri

## Kurulum

```bash
npm install ea-kit
```

## Temel Kullanım

### Vue 3 + Vite Projesi

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Tüm stilleri import et
import 'ea-kit/dist/ea-kit.css'

const app = createApp(App)
app.mount('#app')
```

### Bileşenleri Import Etme

```vue
<template>
  <div>
    <!-- Button örneği -->
    <EaButton 
      variant="primary" 
      @click="handleClick"
    >
      Tıkla
    </EaButton>

    <!-- Text Input örneği -->
    <EaTextInput 
      v-model="email"
      placeholder="E-posta adresiniz"
      type="email"
    />

    <!-- Select örneği -->
    <EaSelect 
      v-model="selectedOption"
      :options="options"
      option-label="label"
      option-value="value"
      placeholder="Seçiniz"
    />

    <!-- Modal örneği -->
    <EaModal v-model="showModal">
      <template #header>
        <h2>Modal Başlığı</h2>
      </template>
      <p>Modal içeriği buraya gelir</p>
    </EaModal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  EaButton, 
  EaTextInput, 
  EaSelect, 
  EaModal,
  useToast,
  type IButtonProps,
  type ITextInputProps
} from 'ea-kit'

const email = ref('')
const selectedOption = ref('')
const showModal = ref(false)

const options = [
  { label: 'Seçenek 1', value: 'option1' },
  { label: 'Seçenek 2', value: 'option2' },
  { label: 'Seçenek 3', value: 'option3' }
]

const { showToast } = useToast()

const handleClick = () => {
  showToast({
    type: 'success',
    message: 'Butona tıklandı!'
  })
}
</script>
```

### Composable Kullanımı

```typescript
// useExample.ts
import { useBreakpoint, useToast, useModal } from 'ea-kit'

export function useExample() {
  const { isMobile, isTablet, isDesktop } = useBreakpoint()
  const { showToast } = useToast()
  const { openModal, closeModal } = useModal()

  const handleResponsiveAction = () => {
    if (isMobile.value) {
      showToast({
        type: 'info',
        message: 'Mobil cihazdasınız'
      })
    } else {
      openModal({
        title: 'Masaüstü Modal',
        content: 'Bu bir masaüstü modal'
      })
    }
  }

  return {
    handleResponsiveAction,
    isMobile,
    isTablet,
    isDesktop
  }
}
```

### Global Kayıt

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Tüm bileşenleri import et
import * as EaKit from 'ea-kit'
import 'ea-kit/dist/ea-kit.css'

const app = createApp(App)

// Tüm bileşenleri global olarak kaydet
Object.entries(EaKit).forEach(([name, component]) => {
  if (name.startsWith('Ea')) {
    app.component(name, component)
  }
})

app.mount('#app')
```

## TypeScript Desteği

```typescript
import type { 
  IButtonProps, 
  ITextInputProps, 
  ISelectProps,
  SelectOptionsType 
} from 'ea-kit'

// Props tiplerini kullanma
const buttonProps: IButtonProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false
}

const inputProps: ITextInputProps = {
  placeholder: 'Metin girin',
  type: 'text',
  required: true
}

const selectOptions: SelectOptionsType = [
  { label: 'Seçenek 1', value: 'opt1' },
  { label: 'Seçenek 2', value: 'opt2' }
]
```

## Stil Özelleştirme

CSS değişkenlerini kullanarak temaları özelleştirebilirsiniz:

```css
/* custom-theme.css */
:root {
  --ea-primary-color: #3b82f6;
  --ea-secondary-color: #64748b;
  --ea-success-color: #10b981;
  --ea-warning-color: #f59e0b;
  --ea-error-color: #ef4444;
  --ea-border-radius: 8px;
  --ea-font-family: 'Inter', sans-serif;
}
```

```typescript
// main.ts
import 'ea-kit/dist/ea-kit.css'
import './custom-theme.css'
``` 