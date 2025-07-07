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
            <EaIcons name="cross" size="20" />
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
import EaIcons from '@/components/ui/EaIcon.vue'

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
