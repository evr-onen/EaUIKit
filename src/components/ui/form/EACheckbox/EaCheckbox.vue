<template>
  <div class="ea-checkbox-wrapper"
       :class="{ 'ea-checkbox-wrapper--disabled': disabled }"
       @click="() => !disabled && handleClick()">
    <input type="checkbox" class="ea-checkbox-input" :checked="modelValue" :disabled="disabled" />
    <label for="checkbox" class="ea-checkbox-label" :class="{ 'ea-checkbox-label--disabled': disabled }">
      <span class="ea-checkbox-custom"
            :class="[
              `ea-checkbox-custom--${size}`,
              { 'ea-checkbox-custom--checked': modelValue },
              { 'ea-checkbox-custom--error': error }
            ]">
        <Check v-if="modelValue" class="ea-checkbox-icon" :class="`ea-checkbox-icon--${size}`" />
      </span>
      <span class="ea-checkbox-text" :class="{ 'ea-checkbox-text--error': error }">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import Check from '@/components/icons/check.vue'
import './checkBox.style.scss'
import type { ICheckboxProps } from './checkbox.types';

const props = withDefaults(defineProps<ICheckboxProps>(), {
  disabled: false,
  error: false,
  size: 'md'
})

const modelValue = defineModel<boolean>({ required: true })

const handleClick = () => {
  if (!props.disabled) {
    modelValue.value = !modelValue.value
  }
}
</script>

<style scoped>

</style>
