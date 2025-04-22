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
            :value="displayValue"
            :placeholder="placeholder || (range ? 'Select date range' : 'Select date')"
            
          >
          <ChavronDown class="size-6 text-placeholder absolute right-2" />
        </div>
      </template>

      <template #panelContent>
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
              :class="getDayClasses(day.date, day.currentMonth)"
              @click="day.currentMonth && handleDateSelection(day.date, day.currentMonth)"
              @mouseenter="day.currentMonth && props.range && handleHover(day.date)"
              @mouseleave="resetHoverState"
            >
              {{ day.dayNumber }}
            </div>
          </div>

          <div class="ea-datepicker__footer">
            <button
              class="ea-datepicker__today-btn"
              @click="selectToday()"
            >
              Today
            </button>
            <button
              v-if="hasValue"
              class="ea-datepicker__clear-btn"
              @click="clearDate()"
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
  placeholder: 'Select date',
  range: false
});

const modelValue = defineModel<Date | [Date, Date] | null>();

// Range selection temporary state
const tempRangeStart = ref<Date | null>(null);
const isRangeSelectionActive = ref(false);
const hoverDate = ref<Date | null>(null);

// Computed value that displays in the input field
const displayValue = computed((): string => {
  if (!modelValue.value) return '';

  if (props.range && Array.isArray(modelValue.value)) {
    const [start, end] = modelValue.value;
    if (!start) return '';
    if (!end) return formatDate(start);
    return `${formatDate(start)} - ${formatDate(end)}`;
  }

  // Single date mode
  if (!Array.isArray(modelValue.value)) {
    return formatDate(modelValue.value);
  }

  return '';
});

// Check if there's any selected value
const hasValue = computed((): boolean => {
  return modelValue.value !== null;
});

// Calendar state
const currentDate = ref(new Date());

// Format date according to format prop
const formatDate = (date: Date): string => {
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

// Helper function to compare dates
const isSameDate = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

// Get classes for a calendar day
const getDayClasses = (date: Date, isCurrentMonth: boolean) => {
  if (!isCurrentMonth) {
    return { 'disabled': true };
  }

  const classes: Record<string, boolean> = {
    'disabled': false,
    'today': isSameDate(date, new Date())
  };

  // Single date selection
  if (!props.range && modelValue.value && !Array.isArray(modelValue.value)) {
    classes['selected'] = isSameDate(date, modelValue.value);
  }

  // Range selection
  if (props.range && Array.isArray(modelValue.value)) {
    const [start, end] = modelValue.value;

    if (start && isSameDate(date, start)) {
      classes['range-start'] = true;
      classes['selected'] = true;
    }

    if (end && isSameDate(date, end)) {
      classes['range-end'] = true;
      classes['selected'] = true;
    }

    if (start && end && date > start && date < end) {
      classes['in-range'] = true;
    }
  }

  // Temporary selection during range selection
  if (props.range && isRangeSelectionActive.value && tempRangeStart.value) {
    const start = tempRangeStart.value;

    if (isSameDate(date, start)) {
      classes['range-start'] = true;
      classes['selected'] = true;
    }

    // Hover effect for potential end date
    if (hoverDate.value && date > start && date <= hoverDate.value) {
      classes['hover-range'] = true;
    }

    if (hoverDate.value && date >= hoverDate.value && date < start) {
      classes['hover-range'] = true;
    }

    // Mark hovered date as potential end
    if (hoverDate.value && isSameDate(date, hoverDate.value)) {
      classes['hover-end'] = true;
    }
  }

  return classes;
};

// Handle date selection
const handleDateSelection = (date: Date, isCurrentMonth: boolean) => {
  if (!isCurrentMonth) return;

  if (props.range) {
    handleRangeSelection(date);
  } else {
    // Single date selection
    modelValue.value = new Date(date);
    // Panel stays open after selection
  }
};

// Handle range selection
const handleRangeSelection = (date: Date) => {
  const newDate = new Date(date);

  if (!isRangeSelectionActive.value) {
    // Start selecting range
    tempRangeStart.value = newDate;
    isRangeSelectionActive.value = true;
    modelValue.value = [newDate, null] as unknown as [Date, Date];
    // Panel stays open for selecting end date
  } else {
    // Finish selecting range
    const start = tempRangeStart.value;

    if (start) {
      let rangeStart = start;
      let rangeEnd = newDate;

      // Swap if end date is before start date
      if (newDate < start) {
        rangeStart = newDate;
        rangeEnd = start;
      }

      modelValue.value = [rangeStart, rangeEnd] as [Date, Date];
    }

    // Reset temporary state
    tempRangeStart.value = null;
    isRangeSelectionActive.value = false;
    // Panel stays open after selection
  }
};

// Select today
const selectToday = () => {
  const today = new Date();

  if (props.range) {
    modelValue.value = [today, today] as [Date, Date];
  } else {
    modelValue.value = today;
  }

  currentDate.value = new Date();
  // Panel stays open after selecting today
};

// Clear selected date
const clearDate = () => {
  modelValue.value = null;
  tempRangeStart.value = null;
  isRangeSelectionActive.value = false;
  // Panel stays open after clearing
};

// Hover states for range selection
const handleHover = (date: Date) => {
  if (props.range && isRangeSelectionActive.value && tempRangeStart.value) {
    hoverDate.value = new Date(date);
  }
};

const resetHoverState = () => {
  hoverDate.value = null;
};
</script>
