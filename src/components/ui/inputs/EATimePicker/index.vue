<template>
  <div class="ea-timepicker">
    <small v-if="label" class="ea-timepicker__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown class="ea-timepicker__container w-full h-8 border" >
      <template #default="{ openPanel }" >
        <input
          class="ea-timepicker__input rounded-lg"
          :class="size"
          ref="inputRef"
          type="text"
          v-model="displayValue"
          @focus="openPanel(true)"
          :placeholder="placeholder"
        >
        <ChavronDown class="ea-timepicker__icon size-6" />
      </template>
      <template #panelContent>
        <div class="ea-timepicker__dropdowns">
          <!-- Saat Kolonu -->
          <div class="ea-timepicker__column">
            <div class="ea-timepicker__column-header">Hours</div>
            <div class="ea-timepicker__time-list" ref="hoursListRef">
              <div
                v-for="hour in hours"
                :key="hour.value"
                class="ea-timepicker__time-item"
                :class="{'selected': selectedHour === hour.value}"
                @click="selectHour(hour.value)"
                :ref="(el) => { if (selectedHour === hour.value && el) selectedHourRef = el as HTMLElement }"
              >
                {{ hour.display }}
              </div>
            </div>
          </div>

          <!-- Dakika Kolonu -->
          <div class="ea-timepicker__column">
            <div class="ea-timepicker__column-header">Minutes</div>
            <div class="ea-timepicker__time-list" ref="minutesListRef">
              <div
                v-for="minute in minutes"
                :key="minute.value"
                class="ea-timepicker__time-item"
                :class="{'selected': selectedMinute === minute.value}"
                @click="selectMinute(minute.value)"
                :ref="(el) => { if (selectedMinute === minute.value && el) selectedMinuteRef = el as HTMLElement }"
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
import { defineProps, defineModel, withDefaults, computed, ref, watch, onMounted, nextTick } from 'vue';
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
const hoursListRef = ref<HTMLElement | null>(null);
const minutesListRef = ref<HTMLElement | null>(null);
const selectedHourRef = ref<HTMLElement | null>(null);
const selectedMinuteRef = ref<HTMLElement | null>(null);

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

  // Seçilen saatin görünür olması için scroll pozisyonunu ayarla
  nextTick(() => {
    scrollToSelectedItem(hoursListRef.value, selectedHourRef.value);
  });
};

// Dakika seçme fonksiyonu
const selectMinute = (minute: number) => {
  selectedMinute.value = minute;
  updateModelValue();

  // Seçilen dakikanın görünür olması için scroll pozisyonunu ayarla
  nextTick(() => {
    scrollToSelectedItem(minutesListRef.value, selectedMinuteRef.value);
  });
};

// Seçilen öğeye scroll yapma fonksiyonu
const scrollToSelectedItem = (containerEl: HTMLElement | null, selectedEl: HTMLElement | null) => {
  if (!containerEl || !selectedEl) return;

  const containerHeight = containerEl.clientHeight;
  const itemHeight = selectedEl.clientHeight;
  const itemTop = selectedEl.offsetTop;

  // Seçili öğeyi ortaya konumlandır
  containerEl.scrollTop = itemTop - (containerHeight / 2) + (itemHeight / 2);
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

  // DOM güncellemesi sonrası seçilen değerlere scroll
  nextTick(() => {
    scrollToSelectedItem(hoursListRef.value, selectedHourRef.value);
    scrollToSelectedItem(minutesListRef.value, selectedMinuteRef.value);
  });
};

// Bileşen başlatıldığında değerleri ayarla
onMounted(() => {
  initializeFromModel();
});

// Model değeri değişirse yeniden başlat
watch(modelValue, () => {
  initializeFromModel();
});

// İzleyici ekle - dropdown paneli açıldığında seçili elemana scroll
watch([hoursListRef, minutesListRef], () => {
  nextTick(() => {
    scrollToSelectedItem(hoursListRef.value, selectedHourRef.value);
    scrollToSelectedItem(minutesListRef.value, selectedMinuteRef.value);
  });
});
</script>
