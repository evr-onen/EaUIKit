<template>
  <Teleport to="body">
    <div
      class="ea-drawer"
      :class="{
        'ea-drawer--dark': dark,
        'ea-drawer--no-animation': !animated,
        'ea-drawer--active': drawer.isOpen.value
      }"
    >
      <!-- Overlay -->
      <div
        v-if="drawer.overlay.value"
        class="ea-drawer__overlay"
        @click="handleOverlayClick"
      />

      <!-- Drawer Container -->
      <div
        ref="drawerRef"
        class="ea-drawer__container"
        :class="`ea-drawer__container--${drawer.position.value}`"
        :style="drawerStyles"
        @keydown.esc="handleEscapeKey"
        tabindex="-1"
      >
        <!-- Header -->
        <div v-if="showHeader" class="ea-drawer__header">
          <div>
            <h3 v-if="title">{{ title }}</h3>
            <slot name="header" />
          </div>
          <button
            v-if="drawer.closable.value"
            class="ea-drawer__close"
            @click="drawer.close"
            aria-label="Close drawer"
          >
            <svg class="" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z" fill="currentColor"/>
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="ea-drawer__content">
          <slot />
        </div>

        <!-- Footer -->
        <div v-if="slots.footer" class="ea-drawer__footer">
          <slot name="footer" />
        </div>
        </div>
      </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch, useSlots } from 'vue'
import { useDrawer, type DrawerPosition } from '@/composables/useDrawer'

// Props
interface Props {
  id?: string
  position?: DrawerPosition
  width?: string
  height?: string
  title?: string
  overlay?: boolean
  closable?: boolean
  closeOnOverlay?: boolean
  closeOnEscape?: boolean
  dark?: boolean
  animated?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: 'default',
  position: 'right',
  width: '300px',
  height: '100%',
  overlay: true,
  closable: true,
  closeOnOverlay: true,
  closeOnEscape: true,
  dark: false,
  animated: true
})

// Emits
const emit = defineEmits<{
  open: []
  close: []
  overlayClick: []
}>()

// Refs
const drawerRef = ref<HTMLElement>()

// Slots
const slots = useSlots() as any

// Composable
const drawer = useDrawer(props.id)

// Computed
const showHeader = computed(() => {
  return props.title || props.closable || !!slots.header
})

const drawerStyles = computed(() => {
  const styles: Record<string, string> = {}

  if (props.position === 'left' || props.position === 'right') {
    styles.width = props.width
  } else {
    styles.height = props.height
  }

  return styles
})

// Methods
const handleOverlayClick = () => {
  emit('overlayClick')
  if (props.closeOnOverlay && drawer.closable.value) {
    drawer.close()
  }
}

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.closeOnEscape && drawer.closable.value) {
    drawer.close()
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && drawer.isOpen.value && props.closeOnEscape) {
    handleEscapeKey(event)
  }
}

// Watch for drawer state changes
watch(
  () => drawer.isOpen.value,
  (isOpen) => {
    if (isOpen) {
      emit('open')
      // Focus the drawer for accessibility
      setTimeout(() => {
        drawerRef.value?.focus()
      }, 100)
    } else {
      emit('close')
    }
  }
)

// Sync props with drawer state
watch(
  () => ({
    position: props.position,
    overlay: props.overlay,
    closable: props.closable,
    width: props.width,
    height: props.height
  }),
  (newConfig) => {
    drawer.updateConfig(newConfig)
  },
  { immediate: true }
)

// Lifecycle
onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  // Reset body overflow when component is destroyed
  if (drawer.isOpen.value) {
    document.body.style.overflow = ''
  }
})

// Expose methods
defineExpose({
  open: drawer.open,
  close: drawer.close,
  toggle: drawer.toggle,
  isOpen: drawer.isOpen
})
</script>

<style scoped lang="scss">
@use './EaDrawer.scss';
</style>
