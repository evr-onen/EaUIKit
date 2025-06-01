<template>
  <div class="ea-radio-buttons">
    <div v-for="(option, index) in options" :key="index" class="radio-button-container">
      <input
        type="radio"
        :id="`${name}-${index}`"
        :name="name"
        :checked="isChecked(option)"
        :disabled="option.disabled"
        @click="handleClick(index)"
        :class="{ 'error': hasError, 'disabled': option.disabled }"
      />
      <label :for="`${name}-${index}`" :class="{ 'disabled': option.disabled }">
        {{ option.label }}
      </label>
    </div>
    <span v-if="hasError" class="error-message">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import useRadioButtons from './useRadioButtons';
import type { IRadioButtonsProps, RadioOption } from './EARadioButtons.types';
import "./radioButtons.style.scss"

const props = defineProps<IRadioButtonsProps>()

const modelValue = defineModel<RadioOption | null>({ required: true })

const {isChecked, hasError, handleClick} = useRadioButtons(props, modelValue)
</script>

<style scoped>

</style>
