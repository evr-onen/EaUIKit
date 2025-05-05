<template>
  <div class=" w-full flex flex-col justify-between items-center">
    <div class="flex gap-2  " >
      <div class="w-[300px]">
        <EaDateTimePicker v-model="date" label="Single"   date-format="DD/MM/YYYY" />
      </div>
      <!-- <div class="w-80 ">
        <EaDateTimePicker label="Range"  v-model="rangeDate" range date-format="DD/MM/YYYY" />
      </div> -->
      {{ date }}
      <!-- {{ rangeDate }} -->
    </div>
  </div>
</template>

<script setup lang="ts">
import EaDateTimePicker from '@/components/ui/inputs/EADateTimePicker/index.vue';
import { ref } from 'vue';

const date = ref<Date>(new Date());
const rangeDate = ref<Date | null>(null);
</script>

<style scoped>

</style>
