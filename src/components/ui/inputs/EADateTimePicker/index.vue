<template>
  <div class="ea-date-time-picker">
    <EaDatePicker label="Date" v-model="date" class="ea-date-time-picker__date" />
    <EaTimePicker label="Time" v-model="time" class="ea-date-time-picker__time" :minute-interval="minuteInterval" />
  </div>
</template>

<script setup lang="ts">
import EaDatePicker from '@/components/ui/inputs/EADatePicker/index.vue';
import EaTimePicker from '@/components/ui/inputs/EATimePicker/index.vue';
import { ref, watch, defineProps, withDefaults } from 'vue';
import type { IDateTimePickerProps } from './dateTimePicker.types';

withDefaults(defineProps<IDateTimePickerProps>(), {
  minuteInterval: 5
});

const model = defineModel<Date>({ required: true });
const date = ref<Date>(new Date(model.value));
const time = ref<Date | null>(model.value ? new Date(model.value) : null);

// DatePicker ve TimePicker'da değişiklik olduğunda model değerini güncelle
watch([date, time], ([newDate, newTime]) => {
  if (!newTime) return;

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
watch(model, (newValue) => {
  if (!newValue) return;

  date.value = new Date(newValue);
  time.value = new Date(newValue);
});
</script>

<style scoped lang="scss">
.ea-date-time-picker {
  @apply flex gap-2 w-full;
}

.ea-date-time-picker__date {
  @apply w-3/5;
}

.ea-date-time-picker__time {
  @apply w-2/5;
}


</style>
