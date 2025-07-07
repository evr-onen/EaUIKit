<template>
  <Teleport to="body">
    <div class="toast-container">
      <TransitionGroup name="toast" tag="div">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="getToastClasses(toast.type)"
          class="toast"
          :style="getCustomStyles(toast)"
        >
          <div class="toast__content">
            <div class="toast__icon" :style="getIconStyles(toast)">
              <!-- Custom Icon -->
              <div v-if="toast.type === 'custom' && toast.customIcon" v-html="toast.customIcon"></div>
              <!-- Success Icon -->
              <svg v-else-if="toast.type === 'success'" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              <!-- Error Icon -->
              <svg v-else-if="toast.type === 'error'" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
              <!-- Warning Icon -->
              <svg v-else-if="toast.type === 'warning'" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <!-- Info Icon -->
              <svg v-else-if="toast.type === 'info'" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <!-- Default Icon for custom without icon -->
              <svg v-else-if="toast.type === 'custom'" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="16" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
            </div>
            <div class="toast__message" :style="getTextStyles(toast)">
              {{ toast.message }}
            </div>
            <button
              class="toast__close"
              @click="removeToast(toast.id)"
              aria-label="Close toast"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 6.586L11.95 2.636a1 1 0 111.414 1.414L9.414 8l3.95 3.95a1 1 0 11-1.414 1.414L8 9.414l-3.95 3.95a1 1 0 11-1.414-1.414L6.586 8 2.636 4.05a1 1 0 111.414-1.414L8 6.586z"/>
              </svg>
            </button>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
// Vue imports not needed for this component
import { useToast, type ToastMessage } from './useToast'

const { toasts, removeToast } = useToast()

// Get CSS classes based on toast type
const getToastClasses = (type: ToastMessage['type']) => {
  return {
    [`toast--${type}`]: true
  }
}

// Get custom styles for toast container
const getCustomStyles = (toast: ToastMessage) => {
  if (toast.type === 'custom' && toast.customColor) {
    return {
      backgroundColor: `${toast.customColor} !important`,
      borderLeftColor: `${toast.customColor} !important`,
      borderColor: `${toast.customColor}40 !important` // 40 = 25% opacity
    }
  }
  return {}
}

// Get custom styles for icon
const getIconStyles = (toast: ToastMessage) => {
  if (toast.type === 'custom' && toast.customIconColor) {
    return {
      color: `${toast.customIconColor} !important`
    }
  }
  return {}
}

// Get custom styles for text
const getTextStyles = (toast: ToastMessage) => {
  if (toast.type === 'custom' && toast.customTextColor) {
    return {
      color: `${toast.customTextColor} !important`
    }
  }
  return {}
}
</script>

<style scoped>
@import './EaToast.scss';
</style>
