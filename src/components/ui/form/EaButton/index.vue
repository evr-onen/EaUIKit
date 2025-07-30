<template>
  <div
      class="button"
      :class="[severityStyle, sizeStyle, isLoading && 'isLoading' ]"
  >
          <slot name="left-icon" :class="iconClass" />
          <p>
              <slot />
          </p>
          <span v-if="isLoading" class="isLoading-spinner" name="svg-spinners:ring-resize"  />
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

  p{
          opacity: 0;
  }
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
