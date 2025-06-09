<template>
  <button
    :class="computedClasses"
    :style="computedStyles"
    :type="type || 'button'"
    :disabled="disabled || loading"
    :aria-label="label || 'Button'"
    :aria-disabled="disabled || loading"
    @click="handleClick"
    ref="buttonRef"
  >
    <!-- Loading spinner -->
    <div
      v-if="loading"
      class="ea-spinner"
      :class="{ 'ea-spinner-sm': size === 'xs' || size === 'sm' }"
    />

    <!-- Left icon -->
    <i
      v-if="leftIcon && !loading"
      :class="[leftIcon, iconClasses]"
      aria-hidden="true"
    />

    <!-- Prefix icon slot (for custom icons) -->
    <slot v-if="!loading && !leftIcon" name="prefixIcon" />

    <!-- Button text -->
    <span v-if="label && !iconOnly" class="ea-button-text">
      {{ label }}
    </span>

    <!-- Default slot for custom content -->
    <slot v-if="!label && !iconOnly" />

    <!-- Right icon -->
    <i
      v-if="rightIcon && !loading"
      :class="[rightIcon, iconClasses]"
      aria-hidden="true"
    />

    <!-- Suffix icon slot (for custom icons) -->
    <slot v-if="!loading && !rightIcon" name="suffixIcon" />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { IButtonProps } from './button.types'
import './button.style.scss'

// Template ref
const buttonRef = ref<HTMLButtonElement>()

// Props with defaults
const props = withDefaults(defineProps<IButtonProps>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  rounded: 'md',
  shadow: 'sm',
  animate: true,
  iconSize: 'md',
  loading: false,
  disabled: false,
  fullWidth: false,
  iconOnly: false,
  gradient: 'sunset',
  gradientDirection: 'to-r',
  ripple: false,
  rippleColor: 'rgba(255, 255, 255, 0.8)',
  rippleSize: 'md'
})

// Computed classes
const computedClasses = computed(() => {
  const classes = ['ea-button']

  // Variant classes
  if (props.variant === 'gradient') {
    classes.push('ea-button--gradient')
    classes.push(`ea-button--gradient-${props.gradient}`)
    classes.push(`ea-button--gradient-${props.gradientDirection}`)
  } else {
    classes.push(`ea-button--${props.variant}`)
  }

  // Size classes
  classes.push(`ea-button--${props.size}`)

  // State classes
  if (props.loading) classes.push('ea-button--loading')
  if (props.disabled) classes.push('ea-button--disabled')
  if (props.fullWidth) classes.push('ea-button--full-width')
  if (props.iconOnly) classes.push('ea-button--icon-only')

  // Styling classes
  classes.push(`ea-button--rounded-${props.rounded}`)
  classes.push(`ea-button--shadow-${props.shadow}`)

  if (props.animate) classes.push('ea-button--animated')
  if (props.ripple) classes.push('ea-button--ripple')

  // Custom classes
  if (props.buttonClass) classes.push(props.buttonClass)

  return classes
})

// Computed styles with smart ripple color detection
const computedStyles = computed(() => {
  const styles: Record<string, string> = {}

  // Custom gradient override
  if (props.customGradient) {
    styles.background = props.customGradient
  }
  // Custom solid colors (only if not using gradient variant)
  else if (props.variant !== 'gradient') {
    if (props.bgColour) {
      styles.backgroundColor = props.bgColour
    }
  }

  if (props.textColour) {
    styles.color = props.textColour
  }

  // Smart ripple color based on variant
  if (props.ripple) {
    let rippleColor = props.rippleColor

    // Auto-adjust ripple color based on button variant
    if (props.rippleColor === 'rgba(255, 255, 255, 0.8)') { // If using default
      switch (props.variant) {
        case 'ghost':
        case 'outline':
        case 'text':
          rippleColor = 'rgba(0, 0, 0, 0.15)'
          break
        case 'gradient':
          // For gradients, let CSS handle the color (will be overridden by SCSS)
          rippleColor = 'rgba(255, 255, 255, 0.9)'
          break
        default:
          // Keep white for solid color buttons
          rippleColor = 'rgba(255, 255, 255, 0.8)'
      }
    }

    styles['--ripple-color'] = rippleColor
  }

  return styles
})

// Icon classes
const iconClasses = computed(() => {
  const classes = ['ea-button-icon']
  classes.push(`ea-button-icon--${props.iconSize}`)
  return classes
})

// Ripple effect function - Enhanced for gradients
const createRipple = (event: MouseEvent) => {
  if (!props.ripple || !buttonRef.value) return

  const button = buttonRef.value
  const rect = button.getBoundingClientRect()

  // Calculate click position relative to button
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  // Create ripple element
  const ripple = document.createElement('span')
  ripple.className = `ea-ripple ea-ripple--${props.rippleSize}`

  // Set position only - no color for any button type
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  // Let CSS handle all colors via classes and CSS variables
  // Don't set backgroundColor in JavaScript at all

  // Add to button
  button.appendChild(ripple)

  // Remove after animation (250ms + 50ms buffer)
  setTimeout(() => {
    if (ripple.parentNode) {
      ripple.parentNode.removeChild(ripple)
    }
  }, 300)
}

// Click handler
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    // Create ripple effect
    if (props.ripple) {
      createRipple(event)
    }

    // Execute onClick callback
    props.onClick?.()
  }
}
</script>

