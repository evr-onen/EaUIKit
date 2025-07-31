<template>
  <div
      class="button"
      :class="[severityStyle, sizeStyle, isLoading && 'isLoading', disabled && 'disabled' ]"
      :disabled="disabled"
  >
          <slot name="left-icon" :class="iconClass" />
          <p>
              <slot />
          </p>
          <div v-if="isLoading" class="isLoading-spinner">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z">
              <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
              </path>
            </svg>
          </div>
          <slot name="right-icon" :class="iconClass" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface buttonPropTypes {
  severity        ?: 'filled' | 'outlined' | 'ghost'
  color           ?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'
  size            ?: 'sm' | 'md' | 'lg'
  disabled        ?: boolean
  isLoading       ?: boolean
  iconClass       ?: string
  textColor       ?: string
}


const props = withDefaults(defineProps<buttonPropTypes>(), {
  severity            : 'filled',
  color               : 'primary',
  size                : 'md',
  disabled            : false,
  isLoading           : false,
  iconClass           : '',
  textColor           : '#fff'
})



const severityStyle = computed(() => {
  if (props.severity === 'filled') return 'filledStyle'
  if (props.severity === 'outlined') return 'outlinedStyle'
  if (props.severity === 'ghost') return 'ghostStyle'
  return 'filledStyle'
})

const sizeStyle = computed(() => {
  if (props.size === 'sm') return 'smallStyle'
  if (props.size === 'md') return 'mediumStyle'
  if (props.size === 'lg') return 'largeStyle'
  return 'mediumStyle'
})

const buttonColor = computed(() => {
  if (props.color === 'primary') return 'var(--primary-500)'
  if (props.color === 'secondary') return 'var(--secondary-500)'
  if (props.color === 'tertiary') return 'var(--tertiary-500)'
  if (props.color === 'danger') return 'var(--danger-500)'
  if (props.color === 'success') return 'var(--success-500)'
  return 'var(--primary-500)'
})

const buttonTextColor = computed(() => {
  if (props.textColor) return props.textColor
  return '#fff'
})

</script>

<style scoped>
.button{
  text-transform: capitalize;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  white-space: nowrap;
  background-color: inherit;
  user-select: none;
  position: relative;

  .isLoading-spinner{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
  }

  .spinner {
    width: 20px;
    height: 20px;
    border: 3px solid rgba(128, 128, 128, 0.3);
    border-left-color: v-bind(buttonTextColor);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

/* Event Styles */
.button:hover{
  filter: brightness(0.9);
}

.button:active{
  filter: brightness(0.5);
}

/* isLoading Styles */
.button.isLoading{
  cursor: not-allowed;
  pointer-events: none;

  p{
          opacity: 0;
  }
}

/* Disabled Styles */
.button.disabled{
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.6;
  filter: grayscale(50%);
}

.button.disabled:hover,
.button.disabled:active{
  filter: grayscale(50%);
}

/* Severity Styles */
.button.filledStyle{
  background-color: v-bind(buttonColor);
  color: v-bind(buttonTextColor);
}

.button.outlinedStyle{
  background-color: inherit;
  color: v-bind(buttonColor);
  border: 1px solid v-bind(buttonColor);
}

/* Size Styles */
.button.smallStyle{
  font-size: .875rem;
  font-weight: 500;
  height: 2.25rem;
  padding: 0 16px;
}

.button.mediumStyle{
  font-size: 1rem;
  font-weight: 500;
  height: 2.75rem;
  padding: 0 16px;
}

.button.largeStyle{
  font-size: 1.125rem;
  font-weight: 500;
  height: 3.5rem;
  padding: 0 24px;
}
</style>
