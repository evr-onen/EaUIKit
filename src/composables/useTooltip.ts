import { ref, computed, nextTick } from 'vue'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'
export type TooltipEvent = 'hover' | 'focus'

export interface TooltipOptions {
  value: string
  position?: TooltipPosition
  event?: TooltipEvent
  pt?: {
    arrow?: {
      style?: Record<string, string>
    }
    text?: string
  }
}

export const useTooltip = () => {
  const isVisible = ref(false)
  const tooltipContent = ref('')
  const tooltipPosition = ref<TooltipPosition>('right')
  const tooltipEvent = ref<TooltipEvent>('hover')
  const customStyles = ref<TooltipOptions['pt']>()

    const showTooltip = (options: string | TooltipOptions) => {
    if (typeof options === 'string') {
      tooltipContent.value = options
      tooltipPosition.value = 'right'
      tooltipEvent.value = 'hover'
      customStyles.value = undefined
    } else {
      tooltipContent.value = options.value
      tooltipPosition.value = options.position || 'right'
      tooltipEvent.value = options.event || 'hover'
      customStyles.value = options.pt
    }

    isVisible.value = true
  }

    const hideTooltip = () => {
    isVisible.value = false
  }

  const positionClasses = computed(() => {
    return `tooltip-${tooltipPosition.value}`
  })

  const textClasses = computed(() => {
    if (customStyles.value?.text) {
      return customStyles.value.text
    }
    return ''
  })

  const arrowStyles = computed(() => {
    return customStyles.value?.arrow?.style || {}
  })

  return {
    isVisible,
    tooltipContent,
    tooltipPosition,
    tooltipEvent,
    showTooltip,
    hideTooltip,
    positionClasses,
    textClasses,
    arrowStyles
  }
}
