<template>
  <div class=" w-full flex flex-col justify-between items-center">
    <div class="flex gap-2  " >
      <div class="w-80 ">
        <EaDatePicker label="Single"  v-model="date" date-format="DD/MM/YYYY" />
      </div>
      <div class="w-80 ">
        <EaDatePicker label="Range"  v-model="rangeDate" range date-format="DD/MM/YYYY" />
      </div>
      {{ date }}
      {{ rangeDate }}
    </div>
  </div>
</template>

<script setup lang="ts">
import EaDatePicker from '@/components/ui/inputs/EADatePicker/index.vue';
import { ref } from 'vue';

const date = ref<Date | null>(null);
const rangeDate = ref<Date | null>(null);
</script>

<style scoped>

</style>
