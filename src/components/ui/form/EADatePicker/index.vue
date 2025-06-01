<template>
  <div class="ea-datepicker">
    <small v-if="label" class="ea-datepicker__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown class="w-full" typeCode="ea-datepicker" :panelHeight="390" :panel-width="panelWidth">
      <template #default="{ openPanel }">
        <div
          class="flex justify-between items-center rounded-lg  relative"
          @click="() => openPanel()"
          :class="size"
        >
          <input
            class="ea-datepicker__placeholder flex justify-between items-center py-1 w-full"
            :class="size"
            tabindex="0"
            :value="displayValue"
            :placeholder="placeholder || (range ? 'Select date range' : 'Select date')"
            @input="handleInputChange"
            @keydown="handleKeyDown"
            @blur="validateInput"
          >
          <ChavronDown class="size-6 text-placeholder absolute right-2" />
        </div>
      </template>

      <template #panelContent="{ closePanel }">
        <div class="ea-datepicker__panel min-w-[300px]">
          <div class="ea-datepicker__header">
            <button @click="prevMonth" class="ea-datepicker__nav-btn">
              <ChavronDown class="size-5 rotate-90" />
            </button>
            <div class="ea-datepicker__header-text">
              <span class="year">{{ currentYear }}</span>
              <span class="month">{{ currentMonthName }}</span>
            </div>
            <button @click="nextMonth" class="ea-datepicker__nav-btn">
              <ChavronDown class="size-5 -rotate-90" />
            </button>
          </div>

          <div class="ea-datepicker__days-header">
            <span v-for="day in daysOfWeek" :key="day">{{ day }}</span>
          </div>

          <div class="ea-datepicker__calendar ">
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              class="ea-datepicker__day"
              :class="getDayClasses(day.date, day.currentMonth)"
              @click="day.currentMonth && handleDateSelection(day.date, day.currentMonth, closePanel)"
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
import Dropdown from '@/components/ui/form/dropdown/index.vue';
import ChavronDown from '@/components/icons/chavron-down.vue';
import './datepicker.style.scss';
import type { IDatepickerProps } from './datepicker.types';

const props = withDefaults(defineProps<IDatepickerProps>(), {
  size: 'normal',
  placeholder: 'Select date',
  range: false,
  dateFormat: 'DD/MM/YYYY',
  panelWidth: 300
});

const modelValue = defineModel<Date | [Date, Date] | null>();

// Range selection temporary state
const tempRangeStart = ref<Date | null>(null);
const isRangeSelectionActive = ref(false);
const hoverDate = ref<Date | null>(null);
const inputValue = ref('');

// Computed value that displays in the input field
const displayValue = computed((): string => {
  if (!modelValue.value) return inputValue.value;

  if (props.range && Array.isArray(modelValue.value)) {
    const [start, end] = modelValue.value;
    if (!start) return inputValue.value;
    if (!end) return formatDate(start);
    return `${formatDate(start)} - ${formatDate(end)}`;
  }

  // Single date mode
  if (!Array.isArray(modelValue.value)) {
    return formatDate(modelValue.value);
  }

  return inputValue.value;
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

// Format date according to the selected format
const formatDate = (date: Date): string => {
  if (!date) return '';

  // Get date components directly to avoid timezone issues
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  let result = props.dateFormat;
  result = result.replace('DD', day);
  result = result.replace('MM', month);
  result = result.replace('YYYY', year.toString());

  return result;
};

// Validate and correct date parts
const validateAndCorrectDate = (day: number, month: number, year: number): [number, number, number] => {
  // Validate year (keep as is if reasonable)

  // Correct month (1-12)
  const correctedMonth = Math.min(Math.max(1, month), 12);

  // Get max days for the corrected month and year
  const daysInMonth = new Date(year, correctedMonth, 0).getDate();

  // Correct day based on the month
  const correctedDay = Math.min(Math.max(1, day), daysInMonth);

  return [correctedDay, correctedMonth, year];
};

// Parse date string based on the dateFormat
const parseDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;

  const format = props.dateFormat;
  let day = 1, month = 0, year = new Date().getFullYear();

  // Extract day, month, year based on the format
  if (format.includes('DD')) {
    const dayIndex = format.indexOf('DD');
    day = parseInt(dateStr.substring(dayIndex, dayIndex + 2));
  }

  if (format.includes('MM')) {
    const monthIndex = format.indexOf('MM');
    month = parseInt(dateStr.substring(monthIndex, monthIndex + 2)) - 1; // JS months are 0-indexed
  }

  if (format.includes('YYYY')) {
    const yearIndex = format.indexOf('YYYY');
    year = parseInt(dateStr.substring(yearIndex, yearIndex + 4));
  }

  // Check if any part is NaN
  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

  // Validate and correct the date parts
  const [correctedDay, correctedMonth, correctedYear] = validateAndCorrectDate(day, month + 1, year);

  // Create and return the date (adjust month back to 0-indexed)
  return createDateAtNoonUTC(new Date(correctedYear, correctedMonth - 1, correctedDay));
};

// Parse date range string (format: "date - date")
const parseDateRange = (rangeStr: string): [Date, Date] | null => {
  if (!rangeStr.includes('-')) return null;

  const [startStr, endStr] = rangeStr.split('-').map(s => s.trim());
  const startDate = parseDate(startStr);
  const endDate = parseDate(endStr);

  if (!startDate || !endDate) return null;
  return [startDate, endDate];
};

// Apply mask to input
const applyMask = (value: string): string => {
  const format = props.dateFormat;
  let result = '';
  let valueIndex = 0;

  for (let i = 0; i < format.length; i++) {
    if (valueIndex >= value.length) break;

    const formatChar = format[i];
    const valueChar = value[valueIndex];

    if (formatChar === 'D' || formatChar === 'M' || formatChar === 'Y') {
      // If the format character expects a digit
      if (/\d/.test(valueChar)) {
        result += valueChar;
        valueIndex++;
      } else {
        valueIndex++; // Skip non-digit character
      }
    } else {
      // For separators, add them automatically
      result += formatChar;
      // Skip the separator in input if it matches
      if (valueChar === formatChar) {
        valueIndex++;
      }
    }
  }

  return result;
};

// Apply mask to range input
const applyRangeMask = (value: string): string => {
  if (!value.includes('-')) {
    // If no range separator yet, just mask the first date
    const maskedValue = applyMask(value);

    // Automatically add range separator if first date is complete
    if (maskedValue.length === props.dateFormat.length) {
      return `${maskedValue} - `;
    }

    return maskedValue;
  }

  // Split by dash and mask both parts
  const [startStr, ...endParts] = value.split('-');
  const maskedStart = applyMask(startStr.trim());

  // Handle the end part if it exists
  if (endParts.length > 0) {
    const endStr = endParts.join('-').trim(); // Rejoin in case there were multiple dashes
    const maskedEnd = applyMask(endStr);
    return `${maskedStart} - ${maskedEnd}`;
  }

  // If there's just a dash with no end date yet
  return `${maskedStart} -`;
};

// Position cursor at the end of input
const positionCursorAtEnd = (input: HTMLInputElement) => {
  setTimeout(() => {
    const len = input.value.length;
    input.setSelectionRange(len, len);
  }, 0);
};

// Handle input change
const handleInputChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = target.value;

  if (props.range) {
    const oldValue = inputValue.value;
    // Apply mask for range input
    inputValue.value = applyRangeMask(value);
    target.value = inputValue.value;

    // Set cursor position to after dash if first date was just completed
    if (oldValue.length < props.dateFormat.length &&
        inputValue.value.length > props.dateFormat.length &&
        inputValue.value.includes(' - ')) {
      const newPosition = inputValue.value.indexOf('-') + 2;
      setTimeout(() => {
        target.setSelectionRange(newPosition, newPosition);
      }, 0);
    } else {
      // Retain cursor position if it wasn't an auto-format
      if (oldValue.length !== inputValue.value.length) {
        positionCursorAtEnd(target);
      }
    }

    // If we have a complete range format, validate immediately
    if (inputValue.value.includes('-')) {
      const [startStr, endStr] = inputValue.value.split('-').map(s => s.trim());
      if (startStr.length === props.dateFormat.length &&
          endStr && endStr.length === props.dateFormat.length) {
        validateInput();
      }
    }
  } else {
    // Apply mask as user types
    inputValue.value = applyMask(value);
    target.value = inputValue.value;

    // If we have a complete date format, validate immediately
    if (inputValue.value.length === props.dateFormat.length) {
      validateInput();
    }
  }
};

// Validate input on blur
const validateInput = () => {
  if (!inputValue.value) {
    modelValue.value = null;
    return;
  }

  if (props.range) {
    const dateRange = parseDateRange(inputValue.value);
    if (dateRange) {
      modelValue.value = dateRange;
      // Update the input with formatted date range
      inputValue.value = `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`;

      // Update calendar view to show first date in the range
      currentDate.value = new Date(dateRange[0].getFullYear(), dateRange[0].getMonth(), 1);
    }
  } else {
    const date = parseDate(inputValue.value);
    if (date) {
      modelValue.value = date;
      inputValue.value = formatDate(date);

      // Update calendar view to show the selected date
      currentDate.value = new Date(date.getFullYear(), date.getMonth(), 1);
    }
  }
};

// Handle keyboard navigation
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    validateInput();
  }
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
const handleRangeSelection = (date: Date, closePanel: () => void) => {
  // Create a date at noon UTC to avoid timezone issues
  const noonDate = createDateAtNoonUTC(date);

  if (!isRangeSelectionActive.value) {
    // First click - Start selecting range
    tempRangeStart.value = noonDate;
    isRangeSelectionActive.value = true;
    modelValue.value = [noonDate, null] as unknown as [Date, Date];
    inputValue.value = formatDate(noonDate);
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
      inputValue.value = `${formatDate(rangeStart)} - ${formatDate(rangeEnd)}`;
    }

    // Reset temporary state
    tempRangeStart.value = null;
    isRangeSelectionActive.value = false;

    // Paneli kapat - ikinci tarih seçildiğinde
    closePanel();
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
const handleDateSelection = (date: Date, isCurrentMonth: boolean, closePanel: () => void) => {
  if (!isCurrentMonth) return;

  if (props.range) {
    handleRangeSelection(date, closePanel);
  } else {
    // Single date selection with UTC noon time to avoid timezone issues
    const noonDate = createDateAtNoonUTC(date);
    modelValue.value = noonDate;
    inputValue.value = formatDate(noonDate);
    closePanel()
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
    inputValue.value = `${formatDate(noonToday)} - ${formatDate(noonToday)}`;
  } else {
    modelValue.value = noonToday;
    inputValue.value = formatDate(noonToday);
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
  inputValue.value = '';
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
