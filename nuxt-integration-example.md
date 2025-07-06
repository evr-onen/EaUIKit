# EA-Kit Nuxt 3 Entegrasyon Rehberi

## 📦 Kurulum

```bash
npm install ea-kit
```

## 🔧 Nuxt 3 Konfigürasyonu

### 1. CSS Import (nuxt.config.ts)

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'ea-kit/dist/ea-kit.css'
  ],
  // SSR için gerekli
  ssr: true,
  // Build optimizasyonu
  build: {
    transpile: ['ea-kit']
  }
})
```

### 2. Plugin Oluşturma (plugins/ea-kit.client.ts)

```typescript
// plugins/ea-kit.client.ts
import { 
  EaButton, 
  EaTextInput, 
  EaSelect,
  EaModal,
  EaToast,
  EaDialog,
  EaDrawer,
  EaCard,
  EaTabs,
  EaAccordion
} from 'ea-kit'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      eaKit: {
        EaButton,
        EaTextInput,
        EaSelect,
        EaModal,
        EaToast,
        EaDialog,
        EaDrawer,
        EaCard,
        EaTabs,
        EaAccordion
      }
    }
  }
})
```

### 3. Global Components (Opsiyonel - plugins/ea-kit-global.client.ts)

```typescript
// plugins/ea-kit-global.client.ts
import { 
  EaButton, 
  EaTextInput, 
  EaSelect,
  EaModal
} from 'ea-kit'

export default defineNuxtPlugin((nuxtApp) => {
  // Global olarak kaydet
  nuxtApp.vueApp.component('EaButton', EaButton)
  nuxtApp.vueApp.component('EaTextInput', EaTextInput)
  nuxtApp.vueApp.component('EaSelect', EaSelect)
  nuxtApp.vueApp.component('EaModal', EaModal)
})
```

## 🎯 Kullanım Örnekleri

### 1. Sayfa İçinde Kullanım (pages/index.vue)

```vue
<template>
  <div class="container mx-auto p-8">
    <h1 class="text-3xl font-bold mb-8">EA-Kit Nuxt Demo</h1>
    
    <!-- Button Örneği -->
    <div class="mb-6">
      <EaButton 
        variant="primary" 
        @click="handleButtonClick"
      >
        Tıkla
      </EaButton>
    </div>

    <!-- Form Örneği -->
    <div class="mb-6 max-w-md">
      <EaTextInput 
        v-model="email"
        placeholder="E-posta adresiniz"
        type="email"
        label="E-posta"
      />
    </div>

    <!-- Select Örneği -->
    <div class="mb-6 max-w-md">
      <EaSelect 
        v-model="selectedOption"
        :options="options"
        option-label="label"
        option-value="value"
        placeholder="Seçiniz"
        label="Seçenek"
      />
    </div>

    <!-- Modal Örneği -->
    <div class="mb-6">
      <EaButton @click="showModal = true">
        Modal Aç
      </EaButton>
      
      <EaModal v-model="showModal">
        <template #header>
          <h2>Modal Başlığı</h2>
        </template>
        <p>Bu bir Nuxt modal örneğidir.</p>
        <template #footer>
          <EaButton @click="showModal = false">
            Kapat
          </EaButton>
        </template>
      </EaModal>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  EaButton, 
  EaTextInput, 
  EaSelect, 
  EaModal,
  useToast 
} from 'ea-kit'

// SEO için meta
useSeoMeta({
  title: 'EA-Kit Nuxt Demo',
  description: 'EA-Kit bileşenlerinin Nuxt 3 ile kullanımı'
})

// Reactive data
const email = ref('')
const selectedOption = ref('')
const showModal = ref(false)

const options = [
  { label: 'Seçenek 1', value: 'option1' },
  { label: 'Seçenek 2', value: 'option2' },
  { label: 'Seçenek 3', value: 'option3' }
]

// Composables
const { showToast } = useToast()

// Methods
const handleButtonClick = () => {
  showToast({
    type: 'success',
    message: 'Butona tıklandı!'
  })
}
</script>
```

### 2. Composable Kullanımı (composables/useEaKit.ts)

```typescript
// composables/useEaKit.ts
import { 
  useToast, 
  useModal, 
  useDialog, 
  useBreakpoint 
} from 'ea-kit'

export const useEaKit = () => {
  const toast = useToast()
  const modal = useModal()
  const dialog = useDialog()
  const breakpoint = useBreakpoint()

  const showSuccessToast = (message: string) => {
    toast.showToast({
      type: 'success',
      message
    })
  }

  const showErrorToast = (message: string) => {
    toast.showToast({
      type: 'error',
      message
    })
  }

  const confirmAction = async (message: string) => {
    return await dialog.confirm({
      title: 'Onay',
      message,
      confirmText: 'Evet',
      cancelText: 'Hayır'
    })
  }

  return {
    toast,
    modal,
    dialog,
    breakpoint,
    showSuccessToast,
    showErrorToast,
    confirmAction
  }
}
```

### 3. Layout İçinde Kullanım (layouts/default.vue)

```vue
<template>
  <div>
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold">
            My App
          </NuxtLink>
          
          <div class="flex gap-4">
            <EaButton 
              variant="outline" 
              @click="openDrawer"
            >
              Menu
            </EaButton>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Drawer -->
    <EaDrawer 
      v-model="isDrawerOpen"
      position="right"
      width="300px"
    >
      <template #header>
        <h3>Navigation</h3>
      </template>
      
      <div class="p-4">
        <nav class="space-y-2">
          <NuxtLink to="/" class="block p-2 hover:bg-gray-100 rounded">
            Ana Sayfa
          </NuxtLink>
          <NuxtLink to="/about" class="block p-2 hover:bg-gray-100 rounded">
            Hakkında
          </NuxtLink>
        </nav>
      </div>
    </EaDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { EaButton, EaDrawer } from 'ea-kit'

const isDrawerOpen = ref(false)

const openDrawer = () => {
  isDrawerOpen.value = true
}
</script>
```

## 🎨 Stil Özelleştirme

### 1. Tailwind CSS ile Entegrasyon

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    'ea-kit/dist/ea-kit.css',
    '~/assets/css/custom.css'
  ],
  modules: ['@nuxtjs/tailwindcss']
})
```

```css
/* assets/css/custom.css */
:root {
  --ea-primary-color: #3b82f6;
  --ea-secondary-color: #64748b;
  --ea-success-color: #10b981;
  --ea-warning-color: #f59e0b;
  --ea-error-color: #ef4444;
}

/* EA-Kit bileşenlerini özelleştir */
.ea-button--primary {
  @apply bg-blue-600 hover:bg-blue-700;
}
```

## 🔧 TypeScript Desteği

### 1. Type Imports

```typescript
// types/ea-kit.d.ts
import type {
  IButtonProps,
  ITextInputProps,
  ISelectProps,
  SelectOptionsType
} from 'ea-kit'

export {
  IButtonProps,
  ITextInputProps,
  ISelectProps,
  SelectOptionsType
}
```

### 2. Component Props ile Kullanım

```vue
<script setup lang="ts">
import type { IButtonProps } from 'ea-kit'

interface Props {
  buttonProps?: IButtonProps
}

const props = withDefaults(defineProps<Props>(), {
  buttonProps: () => ({
    variant: 'primary',
    size: 'md'
  })
})
</script>
```

## 🚀 Server-Side Rendering (SSR)

EA-Kit SSR ile uyumludur, ancak bazı bileşenler client-side only olabilir:

```vue
<template>
  <div>
    <!-- SSR Safe -->
    <EaButton>SSR Button</EaButton>
    
    <!-- Client Only -->
    <ClientOnly>
      <EaModal v-model="showModal">
        <p>Bu modal sadece client-side render edilir</p>
      </EaModal>
    </ClientOnly>
  </div>
</template>
```

## 📱 Responsive Kullanım

```vue
<script setup lang="ts">
import { useBreakpoint } from 'ea-kit'

const { isMobile, isTablet, isDesktop } = useBreakpoint()
</script>

<template>
  <div>
    <EaButton 
      :size="isMobile ? 'sm' : 'md'"
      :full-width="isMobile"
    >
      Responsive Button
    </EaButton>
  </div>
</template>
```

## 🎯 Performans Optimizasyonu

### 1. Tree Shaking

```typescript
// Sadece ihtiyacınız olan bileşenleri import edin
import { EaButton, EaTextInput } from 'ea-kit'

// Tüm paketi import etmeyin
// import * as EaKit from 'ea-kit' // ❌
```

### 2. Lazy Loading

```vue
<script setup lang="ts">
// Lazy import
const EaModal = defineAsyncComponent(() => import('ea-kit').then(m => m.EaModal))
</script>
```

## 🔍 Debugging

### 1. Development Mode

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['ea-kit/dist/ea-kit.css'],
  build: {
    transpile: process.env.NODE_ENV === 'development' ? ['ea-kit'] : []
  }
})
``` 