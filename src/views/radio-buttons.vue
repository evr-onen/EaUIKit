<template>
  <div class="h-[2500px] w-full flex flex-col justify-between items-center  p-6">
    <div class="flex gap-2" >
      <div class="w-80 ">
        <EARadioButtons :options="options" v-model="radioValue" name="name" errorMessage="" />
        {{ radioValue }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EARadioButtons from '@/components/ui/form/EaRadioButtons/EARadioButtons.vue';
import { ref } from 'vue';

const options = [
  { label: 'Option 1'},
  { label: 'Option 2'},
  { label: 'Option 3'},
];
const radioValue = ref(options[0])

</script>

<style scoped>

</style>
