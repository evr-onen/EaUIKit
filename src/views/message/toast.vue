<template>
  <div class="toast-demo">
        <div class="toast-demo__header">
      <h1 class="toast-demo__title">Toast Message System</h1>
      <p class="toast-demo__description">
        You can test different types of toast messages
      </p>
    </div>

    <div class="toast-demo__buttons">
      <button
        class="toast-demo__button toast-demo__button--success"
        @click="showSuccessToast"
      >
        Success Message
      </button>

      <button
        class="toast-demo__button toast-demo__button--error"
        @click="showErrorToast"
      >
        Error Message
      </button>

      <button
        class="toast-demo__button toast-demo__button--warning"
        @click="showWarningToast"
      >
        Warning Message
      </button>

      <button
        class="toast-demo__button toast-demo__button--info"
        @click="showInfoToast"
      >
        Info Message
      </button>

      <button
        class="toast-demo__button toast-demo__button--clear"
        @click="clearAll"
      >
        Clear All
      </button>
    </div>

    <!-- Toast Component -->
    <EaToast />
  </div>
</template>

<script setup lang="ts">
import EaToast from '@/components/ui/messages/EaToast/EaToast.vue'
import { useToast } from '@/components/ui/messages/EaToast/useToast'

const { showSuccess, showError, showWarning, showInfo, clearAllToasts } = useToast()

// Toast trigger functions
const showSuccessToast = () => {
  showSuccess('Operation completed successfully!', 4000)
}

const showErrorToast = () => {
  showError('An error occurred. Please try again.', 5000)
}

const showWarningToast = () => {
  showWarning('This action cannot be undone!', 4000)
}

const showInfoToast = () => {
  showInfo('New update available.', 3000)
}

const clearAll = () => {
  clearAllToasts()
}
</script>

<style scoped>
@import './toast.scss';
</style>
