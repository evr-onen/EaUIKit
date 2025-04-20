<template>
  <div class="px-3 py-[0.8px] flex items-center shadow-lg border-borderColor/50 rounded-[.5rem]"
  :class="{'py-[0.1px]': size === 'small', 'py-[2px]': size === 'large' }"
  :style="{backgroundColor: bgColor, color: textColor, fontSize: sizeValue}">
    {{ label }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IBadgeProps } from './badge.types';


const props = withDefaults(defineProps<IBadgeProps>(), {
  size      : 'normal',
})

const sizeValue = computed(()=>{
  if(props.size === 'large'){
    return '1rem'
  }else if(props.size === 'small'){
    return '.75rem'
  }
  return '.875rem'
})


</script>

<style scoped>

</style>
