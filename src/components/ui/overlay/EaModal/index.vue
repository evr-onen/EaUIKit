<template>
  <Transition name="fade" @before-enter="handleBeforeOpen" @after-leave="handleAfterClose">
    <div
      v-if="isOpen"
      class="ea-modal__overlay"
      @click="handleOverlayClick"
    >
      <Transition name="scale" @after-enter="handleAfterOpen" @before-leave="handleBeforeClose">
        <div
          v-if="isOpen"
          :class="containerClasses"
          @click.stop
        >
          <!-- Header -->
          <div v-if="showHeader" class="ea-modal__header">
            <h3 v-if="title">{{ title }}</h3>
            <slot name="header" />
            <button
              v-if="closable"
              class="ea-modal__close-btn"
              @click="handleClose"
              aria-label="Close modal"
            >
              <EaIcons name="cross" size="24" />
            </button>
          </div>

          <!-- Body -->
          <div class="ea-modal__body">
            <slot>
              <div v-if="content" class="modal-content">
                <p v-for="line in contentLines" :key="line" :class="{ 'list-item': line.startsWith('✅') }">
                  {{ line }}
                </p>
              </div>
            </slot>
          </div>

          <!-- Footer -->
          <div v-if="showFooter" class="ea-modal__footer">
            <slot name="footer">
              <EaButton
                v-if="showDefaultButtons"
                variant="secondary"
                size="md"
                label="Back"
                @click="handleClose"
              />
              <EaButton
                v-if="showDefaultButtons"
                variant="primary"
                size="md"
                label="Confirm"
                @click="handleConfirm"
              />
            </slot>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, watch } from 'vue'
import { useModal } from './useModal'
import EaIcons from '@/components/ui/EaIcon.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'

interface Props {
  // Modal state
  modelValue?: boolean
  title?: string
  content?: string

  // Size options
  size?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full'

  // Behavior options
  closable?: boolean
  maskClosable?: boolean

  // Layout options
  showHeader?: boolean
  showFooter?: boolean
  showDefaultButtons?: boolean

  // Lifecycle callbacks
  onOpen?: () => void | Promise<void>
  onClose?: () => void | Promise<void>
  onBeforeOpen?: () => void | Promise<void>
  onBeforeClose?: () => void | Promise<void>
  onAfterOpen?: () => void | Promise<void>
  onAfterClose?: () => void | Promise<void>
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void
  (e: 'close'): void
  (e: 'confirm'): void
  (e: 'open'): void
  (e: 'before-open'): void
  (e: 'before-close'): void
  (e: 'after-open'): void
  (e: 'after-close'): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: 'auto',
  closable: true,
  maskClosable: true,
  showHeader: true,
  showFooter: false,
  showDefaultButtons: true
})

const emit = defineEmits<Emits>()

// Use modal composable for global state management
const {
  isOpen: globalIsOpen,
  title: globalTitle,
  content: globalContent,
  size: globalSize,
  closable: globalClosable,
  maskClosable: globalMaskClosable,
  showFooter: globalShowFooter,
  closeModal
} = useModal()

// Computed properties
const isOpen = computed(() => {
  // If using global state, prioritize it
  if (globalIsOpen.value) {
    return globalIsOpen.value
  }
  // Otherwise use local prop
  return props.modelValue
})
const title = computed(() => props.title || globalTitle.value)
const content = computed(() => props.content || globalContent.value)
const size = computed(() => {
  // If using global modal (programmatic), use global size
  if (globalIsOpen.value) {
    return globalSize.value || 'auto'
  }
  // Otherwise use local prop (if explicitly set, use it; otherwise auto)
  return props.size
})
const closable = computed(() => {
  // If using global modal (programmatic), use global closable
  if (globalIsOpen.value) {
    return globalClosable.value !== undefined ? globalClosable.value : true
  }
  // Otherwise use local prop
  return props.closable
})
const maskClosable = computed(() => {
  // If using global modal (programmatic), use global maskClosable
  if (globalIsOpen.value) {
    return globalMaskClosable.value !== undefined ? globalMaskClosable.value : true
  }
  // Otherwise use local prop
  return props.maskClosable
})
const showFooter = computed(() => {
  // If using global modal (programmatic), use global showFooter
  if (globalIsOpen.value) {
    return globalShowFooter.value || false
  }
  // Otherwise use local prop
  return props.showFooter || false
})



// Safe content processing
const contentLines = computed(() => {
  if (!content.value) return []
  return content.value
    .split('\n')
    .filter(line => line.trim() !== '')
    .map(line => line.trim())
})

const containerClasses = computed(() => [
  'ea-modal__container',
  `ea-modal__container--${size.value}`
])

// Lifecycle event handlers
const handleBeforeOpen = async () => {
  emit('before-open')
  if (props.onBeforeOpen) {
    await props.onBeforeOpen()
  }
}

const handleAfterOpen = async () => {
  emit('open')
  emit('after-open')
  if (props.onOpen) {
    await props.onOpen()
  }
  if (props.onAfterOpen) {
    await props.onAfterOpen()
  }
}

const handleBeforeClose = async () => {
  emit('before-close')
  if (props.onBeforeClose) {
    await props.onBeforeClose()
  }
}

const handleAfterClose = async () => {
  emit('after-close')
  if (props.onClose) {
    await props.onClose()
  }
  if (props.onAfterClose) {
    await props.onAfterClose()
  }
}

// Methods
const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
  closeModal()
}

const handleConfirm = () => {
  emit('confirm')
}

const handleOverlayClick = () => {
  if (maskClosable.value) {
    handleClose()
  }
}

// Keyboard event handler
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && closable.value && isOpen.value) {
    handleClose()
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  // Prevent body scroll when modal is open
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})

// Watch for modal state changes to control body scroll
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<style lang="scss">
@use './style.scss';
</style>
