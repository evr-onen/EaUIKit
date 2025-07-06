<template>
  <div class="ea-timepicker" :class="{
    'ea-timepicker--required': required,
    'ea-timepicker--disabled': disabled,
    'ea-timepicker--error': error || isInvalid
  }">
    <small v-if="label" class="ea-timepicker__label capitalize text-textPrimary">
      {{ label }}
      <span v-if="required" class="ea-timepicker__required-asterisk">*</span>
    </small>
    <Dropdown class="ea-timepicker__container w-full h-8 border" :disabled="disabled" :close-on-select="false" :panel-width="panelWidth">
      <template #default="{ openPanel }" >
              <div class="flex" @click="!disabled && openPanel()">
        <input
        class="ea-timepicker__input rounded-lg"
          :class="size"
          ref="inputRef"
          type="text"
          v-model="displayValue"
          @focus="!disabled && openPanel()"
          :placeholder="placeholder"
          @input="!disabled && handleInputChange"
          @blur="validateInput"
          :disabled="disabled"
          :readonly="disabled"
          maxlength="5"
          >
          <ChavronDown class="ea-timepicker__icon size-6" />
        </div>
      </template>
      <template #panelContent="{ closePanel }">
        <div class="ea-timepicker__dropdowns" @click.stop>
          <!-- Saat Kolonu -->
          <div class="ea-timepicker__column">
            <div class="ea-timepicker__column-header">Hours</div>
            <div class="ea-timepicker__time-list" ref="hoursListRef">
              <div
                v-for="hour in hours"
                :key="`hour-${hour.value}-${hour.isExtra ? 'extra' : 'main'}`"
                class="ea-timepicker__time-item"
                :class="{
                  'selected': selectedHour === hour.value && !hour.isExtra,
                  'extra-item': hour.isExtra
                }"
                @click.stop="!hour.isExtra && selectHour(hour.value)"
                :ref="(el) => { if (selectedHour === hour.value && !hour.isExtra && el) selectedHourRef = el as HTMLElement }"
              >
                <span v-if="!hour.isExtra">{{ hour.display }}</span>
                <span v-else class="invisible">{{ hour.display }}</span>
              </div>
            </div>
          </div>

          <!-- Dakika Kolonu -->
          <div class="ea-timepicker__column">
            <div class="ea-timepicker__column-header">Minutes</div>
            <div class="ea-timepicker__time-list" ref="minutesListRef">
              <div
                v-for="minute in minutes"
                :key="`minute-${minute.value}-${minute.isExtra ? 'extra' : 'main'}`"
                class="ea-timepicker__time-item"
                :class="{
                  'selected': selectedMinute === minute.value && !minute.isExtra,
                  'extra-item': minute.isExtra
                }"
                @click.stop="!minute.isExtra && selectMinute(minute.value, closePanel)"
                :ref="(el) => { if (selectedMinute === minute.value && !minute.isExtra && el) selectedMinuteRef = el as HTMLElement }"
              >
                <span v-if="!minute.isExtra">{{ minute.display }}</span>
                <span v-else class="invisible">{{ minute.display }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Dropdown>

    <!-- Error Message -->
    <small v-if="(error || isInvalid) && errorMessage" class="ea-timepicker__error-message">
      {{ errorMessage }}
    </small>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineModel, withDefaults, computed, ref, watch, onMounted, nextTick } from 'vue';
import ChavronDown from '@/components/icons/chavron-down.vue';
import Dropdown from '@/components/ui/form/dropdown/index.vue';
import './timePicker.style.scss';
import type { ITimePickerProps } from './timePicker.types';

const props = withDefaults(defineProps<ITimePickerProps>(), {
  size: 'normal',
  placeholder: 'Select time',
  minuteInterval: 5,
  panelWidth: 200,
  required: false,
  disabled: false,
  error: false,
  isInvalid: false
});

const modelValue = defineModel<Date | null>();
const selectedHour = ref<number | null>(null);
const selectedMinute = ref<number | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);
const hoursListRef = ref<HTMLElement | null>(null);
const minutesListRef = ref<HTMLElement | null>(null);
const selectedHourRef = ref<HTMLElement | null>(null);
const selectedMinuteRef = ref<HTMLElement | null>(null);
const inputValue = ref('');

// Gösterilebilir değer
const displayValue = computed({
  get: () => {
    if ((!selectedHour.value && selectedHour.value !== 0) || selectedMinute.value === null) {
      return inputValue.value;
    }

    const hours = selectedHour.value.toString().padStart(2, '0');
    const minutes = selectedMinute.value.toString().padStart(2, '0');

    return `${hours}:${minutes}`;
  },
  set: (value) => {
    inputValue.value = value;
  }
});

// Input değişikliğini maskeleme ve doğrulama
const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  let value = target.value.replace(/[^\d:]/g, ''); // Sadece rakam ve : karakteri

  // Mask uygula (HH:MM formatı)
  if (value.length > 0) {
    // İlk 2 karakterden sonra : ekleme
    if (value.length >= 2 && !value.includes(':')) {
      const hours = value.substring(0, 2);
      const rest = value.substring(2);
      value = `${hours}:${rest}`;
    }

    // : işaretinden sonraki kısmı sadece 2 karakter olarak sınırla
    if (value.includes(':')) {
      const [hours, minutes] = value.split(':');
      value = `${hours}:${minutes?.substring(0, 2) || ''}`;
    }
  }

  inputValue.value = value;

  // Anlık doğrulama ve model güncelleme
  if (value.match(/^\d{2}:\d{2}$/)) {
    parseAndValidateTime(value);
  }
};

// Değeri doğrulama ve modeli güncelleme
const validateInput = () => {
  const value = inputValue.value;

  if (!value) {
    return;
  }

  if (value.match(/^\d{2}:\d{2}$/)) {
    parseAndValidateTime(value);
  } else {
    // Geçersiz formattaki değerleri düzelt
    if (selectedHour.value !== null && selectedMinute.value !== null) {
      inputValue.value = displayValue.value; // Geçerli değeri geri yükle
    }
  }
};

// Zamanı ayrıştırma ve doğrulama
const parseAndValidateTime = (timeStr: string) => {
  const [hoursStr, minutesStr] = timeStr.split(':');
  let hours = parseInt(hoursStr, 10);
  let minutes = parseInt(minutesStr, 10);

  // Geçerlilik kontrolü ve düzeltme
  let isAdjusted = false;

  // Saat değeri 24'ten büyükse 23'e düzeltilir
  if (hours >= 24) {
    hours = 23;
    isAdjusted = true;
  }

  // Dakika değeri 60'tan büyükse 59'a düzeltilir
  if (minutes >= 60) {
    minutes = 59;
    isAdjusted = true;
  }

  // Negatif değerlerin kontrolü
  if (hours < 0) {
    hours = 0;
    isAdjusted = true;
  }

  if (minutes < 0) {
    minutes = 0;
    isAdjusted = true;
  }

  // Dakika değerini minuteInterval'a uygun olarak yuvarla
  const interval = props.minuteInterval;
  const roundedMinutes = Math.round(minutes / interval) * interval;
  const validMinutes = roundedMinutes >= 60 ? (60 - interval) : roundedMinutes;

  // Değerleri güncelle
  selectedHour.value = hours;
  selectedMinute.value = validMinutes;

  // Model değerini güncelle
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(validMinutes);
  date.setSeconds(0);
  date.setMilliseconds(0);
  modelValue.value = date;

  // Düzeltme veya yuvarlama nedeniyle değişiklik olmuşsa gösterilen değeri güncelle
  if (isAdjusted || validMinutes !== minutes) {
    inputValue.value = `${hours.toString().padStart(2, '0')}:${validMinutes.toString().padStart(2, '0')}`;
  }
};

// Saat listesi (0-23) - Scroll için ekstra değerler ekleniyor
const hours = computed(() => {
  // Ana saat listesi
  const mainHours = Array.from({ length: 24 }, (_, i) => ({
    value: i,
    display: i.toString().padStart(2, '0'),
    isExtra: false
  }));

  // Ekstra saatler (5 tane) - saat listesinin başından devam eden değerler
  const extraHours = Array.from({ length: 5 }, (_, i) => ({
    value: i,
    display: i.toString().padStart(2, '0'),
    isExtra: true
  }));

  return [...mainHours, ...extraHours];
});

// Dakika listesi (minuteInterval'a göre) - Scroll için ekstra değerler ekleniyor
const minutes = computed(() => {
  const minuteInterval = props.minuteInterval;
  const minutesArray = [];

  // Ana dakika listesi
  for (let i = 0; i < 60; i += minuteInterval) {
    minutesArray.push({
      value: i,
      display: i.toString().padStart(2, '0'),
      isExtra: false
    });
  }

  // Ekstra dakikalar (5 tane) - dakika listesinin başından devam eden değerler
  const extraMinutes = [];
  const totalItems = Math.floor(60 / minuteInterval);

  for (let i = 0; i < 5; i++) {
    // Modül işlemi ile döngüsel olarak listenin başına dön
    const index = i % totalItems;
    const value = index * minuteInterval;

    extraMinutes.push({
      value: value,
      display: value.toString().padStart(2, '0'),
      isExtra: true
    });
  }

  return [...minutesArray, ...extraMinutes];
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
const selectMinute = (minute: number, closePanel?: () => void) => {
  selectedMinute.value = minute;
  updateModelValue();

  // Seçilen dakikanın görünür olması için scroll pozisyonunu ayarla
  nextTick(() => {
    scrollToSelectedItem(minutesListRef.value, selectedMinuteRef.value);
  });

  // Dakika seçildikten sonra paneli kapat
  if (closePanel) {
    closePanel();
  }
};

// Seçilen öğeye scroll yapma fonksiyonu - Ekstra değerleri de hesaba katarak
const scrollToSelectedItem = (containerEl: HTMLElement | null, selectedEl: HTMLElement | null) => {
  if (!containerEl || !selectedEl) return;

  const containerHeight = containerEl.clientHeight;
  const itemHeight = selectedEl.clientHeight;
  const itemTop = selectedEl.offsetTop;

  // Eğer seçili eleman en sona yakınsa, scroll pozisyonunu düzgün ayarla
  if (itemTop + itemHeight > containerEl.scrollHeight - containerHeight / 2) {
    // Son elemanlardaysa, en sona scroll yapma, ortada kal
    containerEl.scrollTop = itemTop - (containerHeight / 2) + (itemHeight / 2);
    return;
  }

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

  // Input değerini de güncelle
  const hours = selectedHour.value.toString().padStart(2, '0');
  const minutes = selectedMinute.value.toString().padStart(2, '0');
  inputValue.value = `${hours}:${minutes}`;
};

// Modelden değerleri başlatma
const initializeFromModel = () => {
  if (!modelValue.value) {
    selectedHour.value = null;
    selectedMinute.value = null;
    inputValue.value = '';
    return;
  }

  const hours = modelValue.value.getHours();
  const minutes = modelValue.value.getMinutes();

  // Aralığa göre en yakın dakika değeri
  const interval = props.minuteInterval;
  const roundedMinutes = Math.round(minutes / interval) * interval;
  const validMinutes = roundedMinutes >= 60 ? 0 : roundedMinutes;

  selectedHour.value = hours;
  selectedMinute.value = validMinutes;
  inputValue.value = `${hours.toString().padStart(2, '0')}:${validMinutes.toString().padStart(2, '0')}`;

  // DOM güncellemesi sonrası seçilen değerlere scroll
  if(!hoursListRef.value && !minutesListRef.value){
    nextTick(() => {
      scrollToSelectedItem(hoursListRef.value, selectedHourRef.value);
      scrollToSelectedItem(minutesListRef.value, selectedMinuteRef.value);
    });
  }
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

<style lang="scss">
// TimePicker component styles are now in main.scss for teleport compatibility
</style>
