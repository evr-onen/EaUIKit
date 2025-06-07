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
import { defineProps, defineModel } from 'vue';
import Dropdown from '@/components/ui/form/dropdown/index.vue';
import ChavronDown from '@/components/icons/chavron-down.vue';
import './datepicker.style.scss';
import type { IDatepickerProps } from './datepicker.types';
import useDatePicker from './useDatePicker';

const props = withDefaults(defineProps<IDatepickerProps>(), {
  size: 'normal',
  placeholder: 'Select date',
  range: false,
  dateFormat: 'DD/MM/YYYY',
  panelWidth: 300
});

const modelValue = defineModel<Date | [Date, Date] | null>({ default: null });

const {
  displayValue,
  hasValue,
  currentYear,
  currentMonthName,
  handleInputChange,
  handleKeyDown,
  prevMonth,
  nextMonth,
  daysOfWeek,
  calendarDays,
  getDayClasses,
  handleDateSelection,
  selectToday,
  clearDate,
  handleHover,
  resetHoverState,
  validateInput
} = useDatePicker(props, modelValue);
</script>
