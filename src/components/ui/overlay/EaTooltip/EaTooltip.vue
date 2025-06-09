<template>
  <div class="tooltip-wrapper" ref="wrapperRef">
    <slot :show="showTooltip" :hide="hideTooltip" />

    <Teleport to="body">
      <Transition name="tooltip" appear>
        <div
          v-if="isVisible"
          ref="tooltipRef"
          :class="[
            'ea-tooltip',
            positionClasses,
            textClasses
          ]"
          :style="tooltipStyles"
          role="tooltip"
          :aria-hidden="!isVisible"
          @mouseenter="handleTooltipMouseEnter"
          @mouseleave="handleTooltipMouseLeave"
        >
          <div class="ea-tooltip-text">
            {{ tooltipContent }}
          </div>
          <div
            class="ea-tooltip-arrow"
            :style="arrowStyles"
          ></div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useTooltip, type TooltipOptions } from '@/composables/useTooltip'

interface Props {
  value?: string | TooltipOptions
  position?: 'top' | 'bottom' | 'left' | 'right'
  event?: 'hover' | 'focus'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'right',
  event: 'hover'
})

const wrapperRef = ref<HTMLElement>()
const tooltipRef = ref<HTMLElement>()
const tooltipStyles = ref<Record<string, string>>({})

const {
  isVisible,
  tooltipContent,
  tooltipPosition,
  tooltipEvent,
  showTooltip: showTooltipFn,
  hideTooltip: hideTooltipFn,
  positionClasses,
  textClasses,
  arrowStyles
} = useTooltip()

const showTooltip = (options?: string | TooltipOptions) => {
  let finalOptions: string | TooltipOptions

  if (options) {
    finalOptions = options
  } else if (props.value) {
    // If props.value is an object, merge it with props
    if (typeof props.value === 'object') {
      finalOptions = {
        ...props.value,
        position: props.value.position || props.position,
        event: props.value.event || props.event
      }
    } else {
      finalOptions = {
        value: props.value,
        position: props.position,
        event: props.event
      }
    }
  } else {
    finalOptions = {
      value: '',
      position: props.position,
      event: props.event
    }
  }

  showTooltipFn(finalOptions)

  nextTick(() => {
    // Wait a bit more for the tooltip to be fully rendered
    setTimeout(() => {
      updateTooltipPosition()
    }, 10)
  })
}

const hideTooltip = () => {
  hideTooltipFn()
}

const updateTooltipPosition = () => {
  if (!wrapperRef.value || !tooltipRef.value) return

  const wrapper = wrapperRef.value
  const tooltip = tooltipRef.value

  // Get the actual target element (first child of wrapper)
  const targetElement = wrapper.children[0] as HTMLElement
  if (!targetElement) return

    const wrapperRect = targetElement.getBoundingClientRect()
  const tooltipRect = tooltip.getBoundingClientRect()

  let top = 0
  let left = 0

  const arrowSize = 6
  const gap = 12
  const totalDistance = arrowSize + gap

  switch (tooltipPosition.value) {
    case 'top':
      top = wrapperRect.top - tooltipRect.height - totalDistance
      left = wrapperRect.left + (wrapperRect.width - tooltipRect.width) / 2
      break
    case 'bottom':
      top = wrapperRect.bottom + totalDistance
      left = wrapperRect.left + (wrapperRect.width - tooltipRect.width) / 2
      break
    case 'left':
      top = wrapperRect.top + (wrapperRect.height - tooltipRect.height) / 2
      left = wrapperRect.left - tooltipRect.width - totalDistance
      break
    case 'right':
    default:
      top = wrapperRect.top + (wrapperRect.height - tooltipRect.height) / 2
      left = wrapperRect.right + totalDistance
      break
  }

    // Ensure tooltip stays within viewport
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  // For left position, ensure minimum distance from viewport edge
  if (tooltipPosition.value === 'left' && left < 8) {
    left = 8
  } else if (tooltipPosition.value !== 'left' && left < 0) {
    left = 8
  }

  if (left + tooltipRect.width > viewportWidth) {
    left = viewportWidth - tooltipRect.width - 8
  }

  if (top < 0) top = 8
  if (top + tooltipRect.height > viewportHeight) {
    top = viewportHeight - tooltipRect.height - 8
  }

  tooltipStyles.value = {
    position: 'fixed',
    top: `${top}px`,
    left: `${left}px`,
    zIndex: '9999'
  }
}

const handleMouseEnter = () => {
  if (tooltipEvent.value === 'hover') {
    showTooltip()
  }
}

const handleMouseLeave = () => {
  if (tooltipEvent.value === 'hover') {
    hideTooltip()
  }
}

const handleFocus = () => {
  if (tooltipEvent.value === 'focus') {
    showTooltip()
  }
}

const handleBlur = () => {
  if (tooltipEvent.value === 'focus') {
    hideTooltip()
  }
}

const handleTooltipMouseEnter = () => {
  // No action needed since there are no delays
}

const handleTooltipMouseLeave = () => {
  // Auto-hide when leaving tooltip
  hideTooltip()
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && isVisible.value) {
    hideTooltip()
  }
}

const handleScroll = () => {
  if (isVisible.value) {
    hideTooltip()
  }
}

const handleResize = () => {
  if (isVisible.value) {
    updateTooltipPosition()
  }
}

onMounted(() => {
  if (wrapperRef.value) {
    const target = wrapperRef.value.children[0] as HTMLElement
    if (target) {
      target.addEventListener('mouseenter', handleMouseEnter)
      target.addEventListener('mouseleave', handleMouseLeave)
      target.addEventListener('focus', handleFocus)
      target.addEventListener('blur', handleBlur)
      target.addEventListener('keydown', handleKeydown)
    }
  }

  // Add scroll and resize event listeners
  window.addEventListener('scroll', handleScroll, true)
  document.addEventListener('scroll', handleScroll, true)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  if (wrapperRef.value) {
    const target = wrapperRef.value.children[0] as HTMLElement
    if (target) {
      target.removeEventListener('mouseenter', handleMouseEnter)
      target.removeEventListener('mouseleave', handleMouseLeave)
      target.removeEventListener('focus', handleFocus)
      target.removeEventListener('blur', handleBlur)
      target.removeEventListener('keydown', handleKeydown)
    }
  }

  // Remove scroll and resize event listeners
  window.removeEventListener('scroll', handleScroll, true)
  document.removeEventListener('scroll', handleScroll, true)
  window.removeEventListener('resize', handleResize)
})

defineExpose({
  showTooltip,
  hideTooltip
})
</script>

<style scoped lang="scss">
.tooltip-wrapper {
  display: inline-block;
}

.ea-tooltip {
  position: fixed;
  background: var(--p-surface-900, #1f2937);
  color: var(--p-surface-0, #ffffff);
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  max-width: 200px;
  word-wrap: break-word;
  z-index: 9999;
  // No transition for position changes
  transition: none;

  &.tooltip-top {
    .ea-tooltip-arrow {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid var(--p-surface-900, #1f2937);
    }
  }

  &.tooltip-bottom {
    .ea-tooltip-arrow {
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid var(--p-surface-900, #1f2937);
    }
  }

  &.tooltip-left {
    .ea-tooltip-arrow {
      position: absolute;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid var(--p-surface-900, #1f2937);
    }
  }

  &.tooltip-right {
    .ea-tooltip-arrow {
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 6px solid var(--p-surface-900, #1f2937);
    }
  }
}

.ea-tooltip-text {
  position: relative;
  z-index: 1;
}

.ea-tooltip-arrow {
  position: absolute;
}

// Transition animations - only for show/hide, not position
.tooltip-enter-active,
.tooltip-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-enter-from,
.tooltip-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.tooltip-enter-to,
.tooltip-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>