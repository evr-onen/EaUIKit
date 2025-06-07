<template>
  <div class=" w-full flex flex-col justify-between items-center">
    <div class="flex gap-2  border " >
      <div class="w-80 h-40">
        <EaDatePicker label="Single"  v-model="date"  />
      </div>
      <div class="w-80 ">
        <EaDatePicker label="Range"  v-model="rangeDate" range  />
      </div>
      {{ date }}
      {{ rangeDate }}
    </div>
  </div>
</template>

<script setup lang="ts">
import EaDatePicker from '@/components/ui/form/EaDatePicker/datePicker.vue';
import { ref } from 'vue';

const date = ref<Date | null>(null);
const rangeDate = ref<Date | null>(null);
</script>
