<template>
  <div class=" w-full flex flex-col justify-between items-center">
    <div class="flex gap-2" >
      <div class="w-40 ">
        <EaTimePicker label="Time Picker" v-model="date" />
      </div>

      {{ date }}
    </div>
  </div>
</template>

<script setup lang="ts">
import EaTimePicker from '@/components/ui/form/EaTimePicker/index.vue';
import { ref } from 'vue';

const date = ref<Date | null>(null);
</script>

<style scoped>

</style>
