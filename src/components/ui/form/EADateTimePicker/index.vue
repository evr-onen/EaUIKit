<template>
  <div class="ea-date-time-picker relative ">
    <EaDatePicker label="Date" v-model="date" class="ea-date-time-picker__date w-full pr-2"/>
    <EaTimePicker label="Time" v-model="time" class="ea-date-time-picker__time w-1/3 absolute right-0" :minute-interval="minuteInterval" />
  </div>
</template>

<script setup lang="ts">
import EaDatePicker from '@/components/ui/form/EaDatePicker/datePicker.vue';
import EaTimePicker from '@/components/ui/form/EaTimePicker/index.vue';
import { ref, watch, defineProps, withDefaults } from 'vue';
import type { IDateTimePickerProps } from './dateTimePicker.types';

withDefaults(defineProps<IDateTimePickerProps>(), {
  minuteInterval: 5,
});

const model = defineModel<Date>({ required: true });
const date = ref<Date>(new Date(model.value));
const time = ref<Date | null>(model.value ? new Date(model.value) : null);

watch([date, time], ([newDate, newTime]) => {
  if (!newTime || !newDate) return;
  const combinedDate = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    newDate.getDate(),
    newTime.getHours(),
    newTime.getMinutes()
  );

  model.value = combinedDate;
});

// Model değiştiğinde bileşen değerlerini güncelle
// watch(model, (newValue) => {
//   if (!newValue) return;

//   date.value = new Date(newValue);
//   time.value = new Date(newValue);
// });
</script>

<style scoped lang="scss">
.ea-date-time-picker {
  @apply flex gap-2 min-w-80;
  width: 100%;
}

.ea-date-time-picker__date {
  @apply  w-[calc(100%-7rem)];
}

.ea-date-time-picker__time {
  @apply w-28;
}


</style>
