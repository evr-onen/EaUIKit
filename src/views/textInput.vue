<template>
  <div class="h-[2500px] w-full flex flex-col justify-between items-center  ">
    <div class="flex gap-2" >
      <div class="w-80 ">
        <EaTextInput label="Label Example" placeholder="Placeholder Example" suffixIcon="chavron-down" prefixIcon="chavron-down" size="lg" />
      </div>
      <div class="w-80">
        <EaTextInput label="Label Example" placeholder="Placeholder Example" suffixIcon="chavron-down" prefixIcon="chavron-down" size="md" />
      </div>
      <div class="w-80">
        <EaTextInput label="Label Example" placeholder="Placeholder Example" suffixIcon="chavron-down" prefixIcon="chavron-down" size="sm" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EaTextInput from '@/components/ui/form/EaTextInput/EaTextInput.vue';
</script>

<style scoped>

</style>
