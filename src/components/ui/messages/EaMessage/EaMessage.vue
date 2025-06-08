<template>
  <Transition
    name="ea-message"
    enter-active-class="ea-message-enter-active"
    leave-active-class="ea-message-leave-active"
    enter-from-class="ea-message-enter-from"
    leave-to-class="ea-message-leave-to"
  >
    <div
      v-if="visible"
      class="ea-message"
      :class="[
        `ea-message--${type}`,
        `ea-message--${variant}`,
        `ea-message--${size}`,
        customClass
      ]"
      role="alert"
      :aria-live="type === 'error' ? 'assertive' : 'polite'"
    >
      <!-- Icon -->
      <div class="ea-message__icon" v-if="showIcon">
        <EaIcons :name="iconName" class="w-5 h-5" :class="iconClass" />
      </div>

      <!-- Content -->
      <div class="ea-message__content">
        <h4 v-if="title" class="ea-message__title">{{ title }}</h4>
        <div class="ea-message__text">
          <slot>{{ message }}</slot>
        </div>
      </div>

      <!-- Close Button -->
      <button
        v-if="closable"
        class="ea-message__close"
        @click="handleClose"
        aria-label="Mesajı kapat"
      >
        <EaIcons name="cross" class="size-8" />
      </button>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import EaIcons from '@/components/ui/EaIcons.vue'

// Types
type MessageType = 'success' | 'error' | 'warning' | 'info'
type MessageVariant = 'filled' | 'outlined' | 'light'
type MessageSize = 'small' | 'medium' | 'large'

interface Props {
  type?: MessageType
  variant?: MessageVariant
  size?: MessageSize
  title?: string
  message?: string
  showIcon?: boolean
  closable?: boolean
  duration?: number
  customClass?: string
  iconClass?: string
}

// Props
const props = withDefaults(defineProps<Props>(), {
  type: 'info',
  variant: 'light',
  size: 'medium',
  showIcon: true,
  closable: true,
  duration: 0
})

// Emits
const emit = defineEmits<{
  close: []
}>()

// State
const visible = ref(true)
const timer = ref<number | null>(null)

// Computed
const iconName = computed(() => {
  const iconMap = {
    success: 'check',
    error: 'cross',
    warning: 'dot',
    info: 'dashboard'
  }
  return iconMap[props.type]
})

// Methods
const handleClose = () => {
  visible.value = false
  emit('close')
}

const startTimer = () => {
  if (props.duration > 0) {
    timer.value = setTimeout(() => {
      handleClose()
    }, props.duration)
  }
}

const clearTimer = () => {
  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }
}

// Lifecycle
onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  clearTimer()
})

// Expose methods for parent components
defineExpose({
  close: handleClose
})
</script>

<style scoped lang="scss">
.ea-message {
  display: flex;
  align-items: flex-center;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  font-size: 0.875rem;
  line-height: 1.5;
  position: relative;
  margin-bottom: 0.75rem;

  &__icon {
    flex-shrink: 0;
    margin-top: 0.125rem;
  }

  &__content {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-weight: 600;
    margin: 0 0 0.25rem 0;
    font-size: 0.875rem;
  }

  &__text {
    margin: 0;
    word-wrap: break-word;
  }

  &__close {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-40%);
    flex-shrink: 0;
    background: none;
    border: none;
    border-radius: 100%;
    cursor: pointer;
    padding: 0.25rem;
    margin: -0.25rem;
    // border-radius: 0.25rem;
    opacity: 0.7;
    transition: all 0.2s ease;

    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  // Types - Light variant
  &--light {
    &.ea-message--success {
      background-color: #f0fdf4;
      border-color: #bbf7d0;
      color: #166534;

      .ea-message__icon {
        color: #16a34a;
      }

      .ea-message__close:hover {
        background-color: rgba(22, 101, 52, 0.1);
      }
    }

    &.ea-message--error {
      background-color: #fef2f2;
      border-color: #fecaca;
      color: #991b1b;

      .ea-message__icon {
        color: #dc2626;
      }

      .ea-message__close:hover {
        background-color: rgba(153, 27, 27, 0.1);
      }
    }

    &.ea-message--warning {
      background-color: #fffbeb;
      border-color: #fed7aa;
      color: #92400e;

      .ea-message__icon {
        color: #f59e0b;
      }

      .ea-message__close:hover {
        background-color: rgba(146, 64, 14, 0.1);
      }
    }

    &.ea-message--info {
      background-color: #eff6ff;
      border-color: #bfdbfe;
      color: #1e40af;

      .ea-message__icon {
        color: #3b82f6;
      }

      .ea-message__close:hover {
        background-color: rgba(30, 64, 175, 0.1);
      }
    }
  }

  // Types - Filled variant
  &--filled {
    color: white;

    &.ea-message--success {
      background-color: #16a34a;
      border-color: #16a34a;
    }

    &.ea-message--error {
      background-color: #dc2626;
      border-color: #dc2626;
    }

    &.ea-message--warning {
      background-color: #f59e0b;
      border-color: #f59e0b;
    }

    &.ea-message--info {
      background-color: #3b82f6;
      border-color: #3b82f6;
    }

    .ea-message__close:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }

  // Types - Outlined variant
  &--outlined {
    background-color: transparent;

    &.ea-message--success {
      border-color: #16a34a;
      color: #166534;

      .ea-message__icon {
        color: #16a34a;
      }
    }

    &.ea-message--error {
      border-color: #dc2626;
      color: #991b1b;

      .ea-message__icon {
        color: #dc2626;
      }
    }

    &.ea-message--warning {
      border-color: #f59e0b;
      color: #92400e;

      .ea-message__icon {
        color: #f59e0b;
      }
    }

    &.ea-message--info {
      border-color: #3b82f6;
      color: #1e40af;

      .ea-message__icon {
        color: #3b82f6;
      }
    }
  }

  // Sizes
  &--small {
    padding: 0.75rem;
    font-size: 0.8rem;

    .ea-message__icon {
      .w-5 {
        width: 1rem;
        height: 1rem;
      }
    }

    .ea-message__title {
      font-size: 0.8rem;
    }
  }

  &--large {
    padding: 1.25rem;
    font-size: 1rem;

    .ea-message__icon {
      .w-5 {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .ea-message__title {
      font-size: 1rem;
    }
  }
}

// Transitions
.ea-message-enter-active,
.ea-message-leave-active {
  transition: all 0.3s ease;
}

.ea-message-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.ea-message-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

// Responsive
@media (max-width: 640px) {
  .ea-message {
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    border-radius: 0;
  }
}
</style>