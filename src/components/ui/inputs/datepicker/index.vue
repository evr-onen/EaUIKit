<template>
  <div class="ea-datepicker">
    <small v-if="label" class="ea-datepicker__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown class="w-full" typeCode="ea-datepicker" :panelHeight="390">
      <template #default="{ openPanel }">
        <div
          class="flex justify-between items-center rounded-lg  relative"
          @click="() => openPanel(true)"
          :class="size"
        >

          <input
          class="ea-datepicker__placeholder flex justify-between items-center py-1 w-full"
          :class="size"
          tabindex="0"
          :value="formatDisplayDate(modelValue!)"
          :placeholder="placeholder || 'Select date'"
        >
          <ChavronDown class="size-6 text-placeholder absolute right-2" />
        </div>
      </template>

      <template #panelContent="{ closePanel }">
        <div class="ea-datepicker__panel">
          <div class="ea-datepicker__header">
            <button @click="prevMonth" class="ea-datepicker__nav-btn">
              <ChavronDown class="size-5 rotate-90" />
            </button>
            <div class="ea-datepicker__header-text">
              <span class="month">{{ currentMonthName }}</span>
              <span class="year">{{ currentYear }}</span>
            </div>
            <button @click="nextMonth" class="ea-datepicker__nav-btn">
              <ChavronDown class="size-5 -rotate-90" />
            </button>
          </div>

          <div class="ea-datepicker__days-header">
            <span v-for="day in daysOfWeek" :key="day">{{ day }}</span>
          </div>

          <div class="ea-datepicker__calendar">
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              class="ea-datepicker__day"
              :class="{
                'disabled': !day.currentMonth,
                'selected': isSelectedDate(day.date),
                'today': isToday(day.date)
              }"
              @click="day.currentMonth && selectDate(day.date, closePanel)"
            >
              {{ day.dayNumber }}
            </div>
          </div>

          <div class="ea-datepicker__footer">
            <button
              class="ea-datepicker__today-btn"
              @click="selectToday(closePanel)"
            >
              Today
            </button>
            <button
              v-if="modelValue"
              class="ea-datepicker__clear-btn"
              @click="clearDate(closePanel)"
            >
              Clear
            </button>
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, defineProps, defineModel } from 'vue';
import Dropdown from '@/components/ui/inputs/dropdown/index.vue';
import ChavronDown from '@/components/icons/chavron-down.vue';
import './datepicker.style.scss';
import type { IDatepickerProps } from './datepicker.types';

const props = withDefaults(defineProps<IDatepickerProps>(), {
  size: 'normal',
  format: 'DD/MM/YYYY',
  placeholder: 'Select date'
});

const modelValue = defineModel<Date | null>();

// Calendar state
const currentDate = ref(new Date());

// Format functions
const formatDisplayDate = (date: Date): string => {
  if (!date) return '';
  if (props.format === 'DD/MM/YYYY') {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  return date.toLocaleDateString('tr-TR');
};

// Calendar navigation
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentMonthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString('tr-TR', { month: 'long' });
});

const prevMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
};

// Days of week
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Calendar days generation
const calendarDays = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;

  // Get first day of month
  const firstDayOfMonth = new Date(year, month, 1);
  // Get day of week (0-6, 0 is Sunday)
  let dayOfWeek = firstDayOfMonth.getDay();
  // Adjust for Monday as first day
  dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;

  // Get last day of month
  const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

  // Generate calendar grid (6 rows x 7 columns)
  const days = [];

  // Add days from previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = dayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthLastDay - i);
    days.push({
      date,
      dayNumber: prevMonthLastDay - i,
      currentMonth: false
    });
  }

  // Add days from current month
  for (let i = 1; i <= lastDayOfMonth; i++) {
    const date = new Date(year, month, i);
    days.push({
      date,
      dayNumber: i,
      currentMonth: true
    });
  }

  // Add days from next month to fill out grid
  const remainingDays = 42 - days.length; // 6x7 grid
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push({
      date,
      dayNumber: i,
      currentMonth: false
    });
  }

  return days;
});

// Date selection functions
const isSelectedDate = (date: Date): boolean => {
  if (!modelValue.value) return false;
  return (
    date.getDate() === modelValue.value.getDate() &&
    date.getMonth() === modelValue.value.getMonth() &&
    date.getFullYear() === modelValue.value.getFullYear()
  );
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

const selectDate = (date: Date, closePanel: () => void) => {
  modelValue.value = new Date(date);
  closePanel();
};

const selectToday = (closePanel: () => void) => {
  modelValue.value = new Date();
  currentDate.value = new Date();
  closePanel();
};

const clearDate = (closePanel: () => void) => {
  modelValue.value = null;
  closePanel();
};
</script>
