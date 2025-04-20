<template>
  <div class="ea-radio-buttons">
    <div v-for="(option, index) in options" :key="index" class="radio-button-container">
      <input
        type="radio"
        :id="`${name}-${index}`"
        :name="name"
        :checked="isChecked(option)"
        :disabled="option.disabled"
        @click="handleClick(index) && console.log(' asdasd')"
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
import { ref, defineProps } from 'vue'

interface RadioOption {
  label: string
  disabled?: boolean
}

const props = defineProps<{
  name            : string
  options         : RadioOption[]
  errorMessage    ?: string
}>()

const modelValue = defineModel<RadioOption | null>({ required: true })

const isChecked = (option: RadioOption) =>{
  if(option.disabled){
    if(JSON.stringify(modelValue.value) === JSON.stringify(option)){
      modelValue.value = null
    }
    return false
  }
 return JSON.stringify(modelValue.value) === JSON.stringify(option)
}

const hasError = ref(!!props.errorMessage)

const handleClick = (index: number) => modelValue.value = props.options[index]
</script>

<style scoped>
.ea-radio-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-button-container {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
}

/* Custom radio button styling */
input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #80ace2;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  outline: none;
  transition: all 0.2s ease-in-out;
}

/* Normal state hover */
input[type="radio"]:hover {
  border-color: #94a3b8;
}

/* Checked state */
input[type="radio"]:checked {
  border-color: #3b82f6;
  background-color: #fff;
}

/* Create the inner circle for checked state */
input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #3b82f6;
  transition: all 0.2s ease-in-out;
}

/* Error state */
input[type="radio"].error {
  border-color: #ef4444;
}

input[type="radio"].error:checked {
  border-color: #ef4444;
}

input[type="radio"].error:checked::after {
  background-color: #ef4444;
}

/* Disabled state */
input[type="radio"]:disabled {
  border-color: #e2e8f0 !important;
  background-color: #f1f5f9 !important;
  cursor: not-allowed !important;
}

input[type="radio"]:disabled:checked::after {
  background-color: #94a3b8;
}

/* Label styling */
label {
  font-size: 14px;
  color: #1e293b;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease-in-out;
}

label.disabled {
  color: #94a3b8 !important;
  cursor: not-allowed !important;
}

/* Error message styling */
.error-message {
  color: #ef4444;
  font-size: 12px;
  margin-top: 4px;
  font-weight: 500;
}

/* Focus state with keyboard navigation */
input[type="radio"]:focus-visible {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #3b82f6;
}

/* Hover effect for the entire container */
.radio-button-container:hover input[type="radio"]:not(:disabled):not(.error) {
  border-color: #3b82f6;
}
</style>
