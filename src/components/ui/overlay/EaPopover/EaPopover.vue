<template>
  <div class="ea-popover">
    <!-- Trigger Element -->
    <div
      ref="triggerRef"
      class="ea-popover__trigger"
      :class="{ 'ea-popover__trigger--disabled': disabled }"
      @click="handleTriggerClick"
      @mouseenter="handleTriggerMouseEnter"
      @mouseleave="handleTriggerMouseLeave"
    >
      <slot name="trigger" :isVisible="isVisible" :toggle="toggle" />
    </div>

        <!-- Popover Content -->
    <Teleport to="body">
      <Transition name="ea-popover">
        <div
          v-if="isVisible"
          ref="popoverRef"
          class="ea-popover__content"
          :class="[
            `ea-popover__content--${position.placement}`,
            { 'ea-popover__content--arrow': arrow }
          ]"
          :style="popoverStyle"
          @mouseenter="handlePopoverMouseEnter"
          @mouseleave="handlePopoverMouseLeave"
        >
          <!-- Arrow -->
          <div v-if="arrow" class="ea-popover__arrow" />

          <!-- Content -->
          <div class="ea-popover__body">
            <slot name="content" :hide="hide" :isVisible="isVisible" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { usePopover } from './usePopover'
import type { IPopoverProps } from './popover.types'

const props = withDefaults(defineProps<IPopoverProps>(), {
  trigger: 'click',
  placement: 'bottom',
  offset: 8,
  arrow: true,
  disabled: false,
  closeOnClickOutside: true,
  closeOnEscape: true,
  closeOnScroll: true,
  showDelay: 0,
  hideDelay: 0,
  zIndex: 1000
})

const {
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
  handlePopoverMouseLeave
} = usePopover(props)

// Expose methods for parent components
defineExpose({
  show,
  hide,
  toggle,
  isVisible
})
</script>

<style lang="scss" scoped>
.ea-popover {
  display: inline-block;

  &__trigger {
    cursor: pointer;
    display: inline-block;

    &--disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  &__content {
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    padding: 12px;
    position: relative;
    min-width: 100px;
    max-width: 320px;

    &--arrow {
      &.ea-popover__content--top {
        margin-bottom: 8px;
      }
      &.ea-popover__content--bottom {
        margin-top: 8px;
      }
      &.ea-popover__content--left {
        margin-right: 8px;
      }
      &.ea-popover__content--right {
        margin-left: 8px;
      }
      &.ea-popover__content--top-start,
      &.ea-popover__content--top-end {
        margin-bottom: 8px;
      }
      &.ea-popover__content--bottom-start,
      &.ea-popover__content--bottom-end {
        margin-top: 8px;
      }
    }
  }

  &__arrow {
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;

    .ea-popover__content--top & {
      bottom: -12px;
      left: 50%;
      transform: translateX(-50%);
      border-top-color: white;
      border-bottom: none;

      &::before {
        content: '';
        position: absolute;
        top: -7px;
        left: -6px;
        border: 6px solid transparent;
        border-top-color: #e5e7eb;
        border-bottom: none;
      }
    }

    .ea-popover__content--bottom & {
      top: -12px;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: white;
      border-top: none;

      &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -6px;
        border: 6px solid transparent;
        border-bottom-color: #e5e7eb;
        border-top: none;
      }
    }

    .ea-popover__content--left & {
      right: -12px;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: white;
      border-right: none;

      &::before {
        content: '';
        position: absolute;
        top: -6px;
        left: -7px;
        border: 6px solid transparent;
        border-left-color: #e5e7eb;
        border-right: none;
      }
    }

    .ea-popover__content--right & {
      left: -12px;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: white;
      border-left: none;

      &::before {
        content: '';
        position: absolute;
        top: -6px;
        left: -5px;
        border: 6px solid transparent;
        border-right-color: #e5e7eb;
        border-left: none;
      }
    }

    .ea-popover__content--top-start &,
    .ea-popover__content--top-end & {
      bottom: -12px;
      border-top-color: white;
      border-bottom: none;

      &::before {
        content: '';
        position: absolute;
        top: -7px;
        left: -6px;
        border: 6px solid transparent;
        border-top-color: #e5e7eb;
        border-bottom: none;
      }
    }

    .ea-popover__content--top-start & {
      left: 16px;
    }

    .ea-popover__content--top-end & {
      right: 16px;
    }

    .ea-popover__content--bottom-start &,
    .ea-popover__content--bottom-end & {
      top: -12px;
      border-bottom-color: white;
      border-top: none;

      &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -6px;
        border: 6px solid transparent;
        border-bottom-color: #e5e7eb;
        border-top: none;
      }
    }

    .ea-popover__content--bottom-start & {
      left: 16px;
    }

    .ea-popover__content--bottom-end & {
      right: 16px;
    }
  }

  &__body {
    font-size: 14px;
    line-height: 1.5;
    color: #374151;
  }
}

// Transition animations
.ea-popover-enter-active,
.ea-popover-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.ea-popover-enter-from,
.ea-popover-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-4px);
}

.ea-popover-enter-to,
.ea-popover-leave-from {
  opacity: 1;
  transform: scale(1) translateY(0);
}
</style>
