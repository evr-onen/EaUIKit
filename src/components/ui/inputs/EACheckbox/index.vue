<template>
  <div class="flex items-center gap-2 cursor-pointer select-none"
       :class="{ 'opacity-30': disabled }"
       @click="() => !disabled && handleClick()">
    <input type="checkbox" class="hidden" :checked="modelValue" :disabled="disabled" />
    <label for="checkbox" class="flex items-center gap-2" :class="{ '!cursor-not-allowed': disabled }">
      <span class="checkbox-custom border rounded-sm flex items-center justify-center"
            :class="[
              sizeClasses[size],
              { 'checkbox-checked': modelValue },
              { 'border-red-500': error }
            ]">
        <Check v-if="modelValue" class="text-white" :class="checkSizeClasses[size]" />
      </span>
      <span class="text-sm" :class="{ 'text-red-500': error }">{{ label }}</span>
    </label>
  </div>
</template>

<script setup lang="ts">
import Check from '@/components/icons/check.vue'

interface Props {
  label: string
  disabled?: boolean
  error?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  error: false,
  size: 'md'
})

const modelValue = defineModel<boolean>({ required: true })

const sizeClasses = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6'
}

const checkSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-5 h-5'
}

const handleClick = () => {
  if (!props.disabled) {
    modelValue.value = !modelValue.value
  }
}
</script>

<style scoped>
.checkbox-custom {
  transition: all 0.15s ease;
  background: white;
}

.checkbox-checked {
  background: #3498db;
  border-color: #3498db;
}
</style>