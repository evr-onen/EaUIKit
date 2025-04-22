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

// Calendar navigation computed properties
const currentYear = computed(() => currentDate.value.getFullYear());
const currentMonth = computed(() => currentDate.value.getMonth());
const currentMonthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString('tr-TR', { month: 'long' });
});

// Format date according to format prop
const formatDate = (date: Date): string => {
  if (!date) return '';

  // Get date components directly to avoid timezone issues
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  if (props.format === 'DD/MM/YYYY') {
    return `${day}/${month}/${year}`;
  }

  // Use custom formatting instead of toLocaleDateString which can be affected by timezone
  return `${day}.${month}.${year}`;
};

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

// Helper function to normalize date (removes time component and sets to noon UTC)
const normalizeDate = (date: Date): Date => {
  return createDateAtNoonUTC(date);
};

// Helper function to compare dates (ignores time)
const isSameDate = (date1: Date, date2: Date): boolean => {
  // Compare only year, month, and day components
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
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

    if (start && end) {
      // Convert all dates to comparable timestamps at noon UTC
      const dateTime = normalizeDate(date).getTime();
      const startTime = normalizeDate(start).getTime();
      const endTime = normalizeDate(end).getTime();

      // Check if date is between start and end (not inclusive)
      if (dateTime > startTime && dateTime < endTime) {
        classes['in-range'] = true;
      }
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
    if (hoverDate.value) {
      // Convert all dates to comparable timestamps at noon UTC
      const hoveredTime = normalizeDate(hoverDate.value).getTime();
      const startTime = normalizeDate(start).getTime();
      const dateTime = normalizeDate(date).getTime();

      // Check if date is in hover range
      if (startTime < hoveredTime && dateTime > startTime && dateTime <= hoveredTime) {
        classes['hover-range'] = true;
      }

      if (startTime > hoveredTime && dateTime >= hoveredTime && dateTime < startTime) {
        classes['hover-range'] = true;
      }

      // Mark hovered date as potential end
      if (isSameDate(date, hoverDate.value)) {
        classes['hover-end'] = true;
      }
    }
  }

  return classes;
};

// Handle range selection
const handleRangeSelection = (date: Date) => {
  // Create a date at noon UTC to avoid timezone issues
  const noonDate = createDateAtNoonUTC(date);

  if (!isRangeSelectionActive.value) {
    // First click - Start selecting range
    tempRangeStart.value = noonDate;
    isRangeSelectionActive.value = true;
    modelValue.value = [noonDate, null] as unknown as [Date, Date];
    // Panel stays open for selecting end date
  } else {
    // Second click - Finish selecting range
    const start = tempRangeStart.value;

    if (start) {
      let rangeStart = start;
      let rangeEnd = noonDate;

      // Swap if end date is before start date
      if (noonDate.getTime() < start.getTime()) {
        rangeStart = noonDate;
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

// Create a Date object set to noon UTC for the given date
const createDateAtNoonUTC = (date: Date): Date => {
  // Extract the date components in local time
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  // Create a new date at noon UTC
  const utcDate = new Date(Date.UTC(year, month, day, 12, 0, 0, 0));
  return utcDate;
};

// Handle date selection
const handleDateSelection = (date: Date, isCurrentMonth: boolean) => {
  if (!isCurrentMonth) return;

  if (props.range) {
    handleRangeSelection(date);
  } else {
    // Single date selection with UTC noon time to avoid timezone issues
    const noonDate = createDateAtNoonUTC(date);
    modelValue.value = noonDate;
    // Panel stays open after selection
  }
};

// Select today
const selectToday = () => {
  const now = new Date();

  // Create today at noon UTC
  const noonToday = createDateAtNoonUTC(now);

  if (props.range) {
    modelValue.value = [noonToday, noonToday] as [Date, Date];
  } else {
    modelValue.value = noonToday;
  }

  // Update current date for calendar view
  currentDate.value = new Date(
    now.getFullYear(),
    now.getMonth(),
    1
  );
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
    // Use noon UTC for hover date
    hoverDate.value = createDateAtNoonUTC(date);
  }
};

const resetHoverState = () => {
  hoverDate.value = null;
};
</script>
