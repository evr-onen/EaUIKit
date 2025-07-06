<template>
  <div class="ea-date-time-picker" :class="{
    'ea-date-time-picker--required': required,
    'ea-date-time-picker--disabled': disabled,
    'ea-date-time-picker--error': error || isInvalid
  }">
    <small v-if="label" class="ea-date-time-picker__label capitalize text-textPrimary">
      {{ label }}
      <span v-if="required" class="ea-date-time-picker__required-asterisk">*</span>
    </small>

        <div class="ea-date-time-picker__inputs">
            <EaDatePicker
        v-model="date"
        class="ea-date-time-picker__date"
        :size="size"
        :disabled="disabled"
        :error="error || isInvalid"
        :date-format="dateFormat"
        placeholder="Select date"
      />
      <EaTimePicker
        v-model="time"
        class="ea-date-time-picker__time"
        :size="size"
        :minute-interval="minuteInterval"
        :panel-width="timePanelWidth"
        :disabled="disabled"
        :error="error || isInvalid"
        placeholder="Select time"
      />
    </div>

    <!-- Error Message -->
    <small v-if="(error || isInvalid) && errorMessage" class="ea-date-time-picker__error-message">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup lang="ts">
import EaDatePicker from '@/components/ui/form/EaDatePicker/datePicker.vue';
import EaTimePicker from '@/components/ui/form/EaTimePicker/index.vue';
import { ref, watch, defineProps, withDefaults, nextTick } from 'vue';
import type { IDateTimePickerProps } from './dateTimePicker.types';

const props = withDefaults(defineProps<IDateTimePickerProps>(), {
  minuteInterval: 5,
  size: 'normal',
  timePanelWidth: 200,
  required: false,
  disabled: false,
  error: false,
  isInvalid: false
});

const model = defineModel<Date | string>({ required: true });

// Initialize internal values
const initializeValues = () => {
  let initialDate: Date;

  if (typeof model.value === 'string') {
    if (model.value) {
      // Try to parse string value - handle different formats
      const parsedDate = new Date(model.value);
      if (!isNaN(parsedDate.getTime())) {
        initialDate = parsedDate;
      } else {
        // If parsing fails, use current date
        initialDate = new Date();
      }
    } else {
      initialDate = new Date();
    }
  } else {
    initialDate = model.value || new Date();
  }

  return initialDate;
};

const initialValue = initializeValues();
const date = ref<Date>(new Date(initialValue));
const time = ref<Date>(new Date(initialValue));

// Format date to string based on valueFormat prop
const formatDateTime = (dateTime: Date): string => {
  if (!props.valueFormat) return dateTime.toISOString();

  // Simple formatting - you can extend this with a proper date formatting library
  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const year = dateTime.getFullYear();
  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');

  // Replace format tokens
  return props.valueFormat
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year.toString())
    .replace('HH', hours)
    .replace('mm', minutes);
};

// Flag to prevent infinite loop
let isUpdatingFromModel = false;

watch([date, time], ([newDate, newTime]) => {
  // Prevent infinite loop when updating from model
  if (isUpdatingFromModel) {
    return;
  }

  if (!newDate || !newTime) {
    return;
  }

  const combinedDate = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    newDate.getDate(),
    newTime.getHours(),
    newTime.getMinutes()
  );

  // Return formatted string if valueFormat is provided, otherwise return Date
  if (props.valueFormat) {
    model.value = formatDateTime(combinedDate);
  } else {
    model.value = combinedDate;
  }
});

// Model değiştiğinde bileşen değerlerini güncelle
watch(model, (newValue) => {
  if (!newValue) {
    return;
  }

  let parsedDate: Date;

  if (typeof newValue === 'string') {
    parsedDate = new Date(newValue);
    if (isNaN(parsedDate.getTime())) {
      return; // Invalid date, don't update
    }
  } else {
    parsedDate = newValue;
  }

  // Set flag to prevent infinite loop
  isUpdatingFromModel = true;

  date.value = new Date(parsedDate);
  time.value = new Date(parsedDate);

  // Reset flag after next tick
  nextTick(() => {
    isUpdatingFromModel = false;
  });
}, { immediate: true });
</script>

<style scoped lang="scss">
.ea-date-time-picker {
  @apply w-full space-y-2;

  .ea-date-time-picker__label {
    @apply block mb-1;
  }

  .ea-date-time-picker__required-asterisk {
    @apply text-red-500 ml-1 font-bold;
  }

  .ea-date-time-picker__error-message {
    @apply text-red-500 text-xs mt-1 block;
  }

  .ea-date-time-picker__inputs {
    @apply flex gap-2 min-w-80;
    width: 100%;
  }

  .ea-date-time-picker__date {
    @apply w-[calc(100%-7rem)];
  }

  .ea-date-time-picker__time {
    @apply w-28;
  }

  // Error state
  &.ea-date-time-picker--error {
    // Error styles are handled by child components
  }

  // Disabled state
  &.ea-date-time-picker--disabled {
    .ea-date-time-picker__label {
      @apply text-gray-500;
    }
  }
}
</style>
