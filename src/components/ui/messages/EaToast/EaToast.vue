<template>
  <Teleport to="body">
    <div class="toast-container">
      <TransitionGroup name="toast" tag="div">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="getToastClasses(toast.type)"
          class="toast"
        >
          <div class="toast__content">
            <div class="toast__icon">
              <EaIcons :name="toast.type" size="20" />
            </div>
            <div class="toast__message">
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
import EaIcons from '@/components/ui/EaIcons.vue'

const { toasts, removeToast } = useToast()

// Get CSS classes based on toast type
const getToastClasses = (type: ToastMessage['type']) => {
  return {
    [`toast--${type}`]: true
  }
}

// Icons are now inline in the template for better performance and simplicity
</script>

<style scoped>
@import './EaToast.scss';
</style>
