import { computed, nextTick, onMounted, onUnmounted, ref, type Ref } from 'vue'
import type { IPopoverProps, IPopoverPosition } from './popover.types'

export const usePopover = (props: IPopoverProps) => {
  // Refs
  const triggerRef = ref<HTMLElement | null>(null)
  const popoverRef = ref<HTMLElement | null>(null)
  const isVisible = ref(false)
  const position = ref<IPopoverPosition>({
    x: 0,
    y: 0,
    placement: props.placement || 'bottom'
  })

  // Timers
  let showTimer: number | null = null
  let hideTimer: number | null = null

  // Computed
  const popoverStyle = computed(() => ({
    position: 'fixed' as const,
    top: `${position.value.y}px`,
    left: `${position.value.x}px`,
    zIndex: props.zIndex || 1000,
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    maxWidth: typeof props.maxWidth === 'number' ? `${props.maxWidth}px` : props.maxWidth
  }))

  // Methods
  const calculatePosition = () => {
    if (!triggerRef.value || !popoverRef.value) return

    const triggerRect = triggerRef.value.getBoundingClientRect()
    const popoverRect = popoverRef.value.getBoundingClientRect()
    const offset = props.offset || 8
    const placement = props.placement || 'bottom'

    let x = 0
    let y = 0

    switch (placement) {
      case 'top':
        x = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
        y = triggerRect.top - popoverRect.height - offset
        break
      case 'top-start':
        x = triggerRect.left
        y = triggerRect.top - popoverRect.height - offset
        break
      case 'top-end':
        x = triggerRect.right - popoverRect.width
        y = triggerRect.top - popoverRect.height - offset
        break
      case 'bottom':
        x = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2
        y = triggerRect.bottom + offset
        break
      case 'bottom-start':
        x = triggerRect.left
        y = triggerRect.bottom + offset
        break
      case 'bottom-end':
        x = triggerRect.right - popoverRect.width
        y = triggerRect.bottom + offset
        break
      case 'left':
        x = triggerRect.left - popoverRect.width - offset
        y = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
        break
      case 'right':
        x = triggerRect.right + offset
        y = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2
        break
    }

    // Keep popover within viewport
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight

    x = Math.max(8, Math.min(x, viewportWidth - popoverRect.width - 8))
    y = Math.max(8, Math.min(y, viewportHeight - popoverRect.height - 8))

    position.value = { x, y, placement }
  }

  const show = () => {
    if (props.disabled) return

    if (hideTimer) {
      clearTimeout(hideTimer)
      hideTimer = null
    }

    const delay = props.showDelay || 0
    if (delay > 0) {
      showTimer = window.setTimeout(() => {
        isVisible.value = true
        nextTick(calculatePosition)
      }, delay)
    } else {
      isVisible.value = true
      nextTick(calculatePosition)
    }
  }

  const hide = () => {
    if (showTimer) {
      clearTimeout(showTimer)
      showTimer = null
    }

    const delay = props.hideDelay || 0
    if (delay > 0) {
      hideTimer = window.setTimeout(() => {
        isVisible.value = false
      }, delay)
    } else {
      isVisible.value = false
    }
  }

  const toggle = () => {
    if (isVisible.value) {
      hide()
    } else {
      show()
    }
  }

  const handleTriggerClick = () => {
    if (props.trigger === 'click' || !props.trigger) {
      toggle()
    }
  }

  const handleTriggerMouseEnter = () => {
    if (props.trigger === 'hover') {
      show()
    }
  }

  const handleTriggerMouseLeave = () => {
    if (props.trigger === 'hover') {
      hide()
    }
  }

  const handlePopoverMouseEnter = () => {
    if (props.trigger === 'hover' && hideTimer) {
      clearTimeout(hideTimer)
      hideTimer = null
    }
  }

  const handlePopoverMouseLeave = () => {
    if (props.trigger === 'hover') {
      hide()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      props.closeOnClickOutside !== false &&
      isVisible.value &&
      triggerRef.value &&
      popoverRef.value &&
      !triggerRef.value.contains(event.target as Node) &&
      !popoverRef.value.contains(event.target as Node)
    ) {
      hide()
    }
  }

    const handleEscapeKey = (event: KeyboardEvent) => {
    if (props.closeOnEscape !== false && isVisible.value && event.key === 'Escape') {
      hide()
    }
  }

  const handleScroll = () => {
    if (props.closeOnScroll !== false && isVisible.value) {
      hide()
    } else {
      calculatePosition()
    }
  }

    // Lifecycle
  onMounted(() => {
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscapeKey)
    window.addEventListener('scroll', handleScroll, true)
    document.addEventListener('scroll', handleScroll, true)
    window.addEventListener('resize', calculatePosition)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside)
    document.removeEventListener('keydown', handleEscapeKey)
    window.removeEventListener('scroll', handleScroll, true)
    document.removeEventListener('scroll', handleScroll, true)
    window.removeEventListener('resize', calculatePosition)

    if (showTimer) clearTimeout(showTimer)
    if (hideTimer) clearTimeout(hideTimer)
  })

  return {
    triggerRef,
    popoverRef,
    isVisible,
    position,
    popoverStyle,
    show,
    hide,
    toggle,
    handleTriggerClick,
    handleTriggerMouseEnter,
    handleTriggerMouseLeave,
    handlePopoverMouseEnter,
    handlePopoverMouseLeave,
    calculatePosition
  }
}
