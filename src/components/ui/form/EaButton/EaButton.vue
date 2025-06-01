<template>
  <div class="ea-button">
    <button :class="[buttonClass, {'small':size === 'small', 'large' : size === 'large'}]"
    :style="{backgroundColor: `${bgColour}`, 'color': `${textColour}`}"
    type="submit">
    <slot name="prefixIcon" />
    <p>{{ label }}</p>
    <slot name="suffixIcon"  />
  </button>
  </div>
</template>

<script setup lang="ts">
import type { IButtonProps } from './button.types';
import './button.style.scss'

defineProps<IButtonProps>()

</script>

