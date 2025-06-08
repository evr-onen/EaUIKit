import { ref, computed, watch } from 'vue'

// Drawer position types
export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom'

// Drawer state type
export interface DrawerState {
  isOpen: boolean
  position: DrawerPosition
  overlay: boolean
  closable: boolean
  width?: string
  height?: string
}

// Default drawer configuration
const defaultConfig: DrawerState = {
  isOpen: false,
  position: 'right',
  overlay: true,
  closable: true,
  width: '300px',
  height: '100%'
}

// Global drawer state
const drawerStates = ref<Map<string, DrawerState>>(new Map())

export function useDrawer(id = 'default') {
  // Initialize drawer state if not exists
  if (!drawerStates.value.has(id)) {
    drawerStates.value.set(id, { ...defaultConfig })
  }

  const state = computed(() => drawerStates.value.get(id)!)

  // Open drawer
  const open = (config?: Partial<DrawerState>) => {
    const currentState = drawerStates.value.get(id)!
    drawerStates.value.set(id, {
      ...currentState,
      ...config,
      isOpen: true
    })
  }

  // Close drawer
  const close = () => {
    const currentState = drawerStates.value.get(id)!
    drawerStates.value.set(id, {
      ...currentState,
      isOpen: false
    })
  }

  // Toggle drawer
  const toggle = (config?: Partial<DrawerState>) => {
    if (state.value.isOpen) {
      close()
    } else {
      open(config)
    }
  }

  // Update drawer configuration
  const updateConfig = (config: Partial<DrawerState>) => {
    const currentState = drawerStates.value.get(id)!
    drawerStates.value.set(id, {
      ...currentState,
      ...config
    })
  }

  // Handle escape key
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && state.value.isOpen && state.value.closable) {
      close()
    }
  }

  // Prevent body scroll when drawer is open
  watch(
    () => state.value.isOpen,
    (isOpen) => {
      if (isOpen && state.value.overlay) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  )

  return {
    state: computed(() => state.value),
    isOpen: computed(() => state.value.isOpen),
    position: computed(() => state.value.position),
    overlay: computed(() => state.value.overlay),
    closable: computed(() => state.value.closable),
    width: computed(() => state.value.width),
    height: computed(() => state.value.height),
    open,
    close,
    toggle,
    updateConfig,
    handleEscape
  }
}
