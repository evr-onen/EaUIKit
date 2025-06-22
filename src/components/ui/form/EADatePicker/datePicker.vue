<template>
  <div class="ea-datepicker" :class="{
    'ea-datepicker--required': required,
    'ea-datepicker--disabled': disabled,
    'ea-datepicker--error': error || isInvalid
  }">
    <small v-if="label" class="ea-datepicker__label capitalize text-textPrimary">
      {{ label }}
      <span v-if="required" class="ea-datepicker__required-asterisk">*</span>
    </small>
    <Dropdown class="w-full" typeCode="ea-datepicker" :panelHeight="390" :panel-width="panelWidth" :disabled="disabled">
      <template #default="{ openPanel }">
        <div
          class="flex justify-between items-center rounded-lg  relative"
          @click="!disabled && openPanel()"
          :class="size"
        >
          <input
            class="ea-datepicker__placeholder flex justify-between items-center py-1 w-full"
            :class="size"
            tabindex="0"
            :value="displayValue"
            :placeholder="placeholder || (range ? 'Select date range' : 'Select date')"
            @input="!disabled && handleInputChange"
            @keydown="!disabled && handleKeyDown"
            @blur="validateInput"
            :disabled="disabled"
            :readonly="disabled"
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

    <!-- Error Message -->
    <small v-if="(error || isInvalid) && errorMessage" class="ea-datepicker__error-message">
      {{ errorMessage }}
    </small>
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
  panelWidth: 300,
  required: false,
  disabled: false,
  error: false,
  isInvalid: false
});

const modelValue = defineModel<Date | [Date, Date] | string | [string, string] | null>({ default: null });

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
