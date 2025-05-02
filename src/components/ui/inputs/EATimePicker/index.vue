<template>
  <div class="ea-timepicker">
    <small v-if="label" class="ea-timepicker__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown class="ea-timepicker__container w-full h-8 border" >
      <template #default="{ openPanel }" >
        <input
          class="ea-timepicker__input"
          :class="size"
          ref="inputRef"
          type="text"
          v-model="displayValue"
          @focus="openPanel(true)"
          :placeholder="placeholder"
          readonly
        >
        <ChavronDown class="ea-timepicker__icon size-6" />
      </template>
      <template #panelContent>
        <div class="ea-timepicker__dropdowns">
          <!-- Saat Kolonu -->
          <div class="ea-timepicker__column">
            <div class="ea-timepicker__column-header">Hours</div>
            <div class="ea-timepicker__time-list">
              <div
                v-for="hour in hours"
                :key="hour.value"
                class="ea-timepicker__time-item"
                :class="{'selected': selectedHour === hour.value}"
                @click="selectHour(hour.value)"
              >
                {{ hour.display }}
              </div>
            </div>
          </div>

          <!-- Dakika Kolonu -->
          <div class="ea-timepicker__column">
            <div class="ea-timepicker__column-header">Minutes</div>
            <div class="ea-timepicker__time-list">
              <div
                v-for="minute in minutes"
                :key="minute.value"
                class="ea-timepicker__time-item"
                :class="{'selected': selectedMinute === minute.value}"
                @click="selectMinute(minute.value)"
              >
                {{ minute.display }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineModel, withDefaults, computed, ref, watch, onMounted } from 'vue';
import ChavronDown from '@/components/icons/chavron-down.vue';
import Dropdown from '@/components/ui/inputs/dropdown/index.vue';
import './timePicker.style.scss';
import type { ITimePickerProps } from './timePicker.types';

const props = withDefaults(defineProps<ITimePickerProps>(), {
  size: 'normal',
  placeholder: 'Select time',
  minuteInterval: 5
});

const modelValue = defineModel<Date | null>();
const selectedHour = ref<number | null>(null);
const selectedMinute = ref<number | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);

// Gösterilebilir değer
const displayValue = computed(() => {
  if (!selectedHour.value && selectedHour.value !== 0 || selectedMinute.value === null) {
    return '';
  }

  const hours = selectedHour.value.toString().padStart(2, '0');
  const minutes = selectedMinute.value.toString().padStart(2, '0');

  return `${hours}:${minutes}`;
});

// Saat listesi (0-23)
const hours = computed(() => {
  return Array.from({ length: 24 }, (_, i) => ({
    value: i,
    display: i.toString().padStart(2, '0')
  }));
});

// Dakika listesi (minuteInterval'a göre)
const minutes = computed(() => {
  const minuteInterval = props.minuteInterval;
  const minutesArray = [];

  for (let i = 0; i < 60; i += minuteInterval) {
    minutesArray.push({
      value: i,
      display: i.toString().padStart(2, '0')
    });
  }

  return minutesArray;
});

// Saat seçme fonksiyonu
const selectHour = (hour: number) => {
  selectedHour.value = hour;
  updateModelValue();
};

// Dakika seçme fonksiyonu
const selectMinute = (minute: number) => {
  selectedMinute.value = minute;
  updateModelValue();
};

// Model değerini güncelleme
const updateModelValue = () => {
  if (selectedHour.value === null && selectedHour.value !== 0 || selectedMinute.value === null) {
    return;
  }

  const date = new Date();
  date.setHours(selectedHour.value as number);
  date.setMinutes(selectedMinute.value as number);
  date.setSeconds(0);
  date.setMilliseconds(0);

  modelValue.value = date;
};

// Min/max zaman sınırlamaları için yardımcı fonksiyonlar
// İleride saat ve dakika sınırlamaları ekleyeceksek kullanılabilir
/*
const parseTimeString = (timeStr: string | undefined): Date | null => {
  if (!timeStr) return null;

  const [hoursStr, minutesStr] = timeStr.split(':');
  if (!hoursStr || !minutesStr) return null;

  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return null;
  }

  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return date;
};
*/

// Bu değişkenler daha sonra kullanılmak üzere burada tanımlanmıştır
// Eğer saat ve dakika sınırlamaları eklemek istersek kullanılabilir
// const minTime = computed(() => parseTimeString(props.minTime));
// const maxTime = computed(() => parseTimeString(props.maxTime));

// Modelden değerleri başlatma
const initializeFromModel = () => {
  if (!modelValue.value) {
    selectedHour.value = null;
    selectedMinute.value = null;
    return;
  }

  const hours = modelValue.value.getHours();
  const minutes = modelValue.value.getMinutes();

  // Aralığa göre en yakın dakika değeri
  const interval = props.minuteInterval;
  const roundedMinutes = Math.round(minutes / interval) * interval;

  selectedHour.value = hours;
  selectedMinute.value = roundedMinutes >= 60 ? 0 : roundedMinutes;
};

// Bileşen başlatıldığında değerleri ayarla
onMounted(() => {
  initializeFromModel();
});

// Model değeri değişirse yeniden başlat
watch(modelValue, () => {
  initializeFromModel();
});
</script>
