<template>
  <div class="ea-textinput" :class="textInputClasses">
    <!-- Label -->
    <label v-if="label" class="ea-textinput__label" :class="classLabel">
      {{ label }}
    </label>

    <!-- Input Container -->
    <div class="ea-textinput__input-container flex items-center" :class="[classInputContainer, `size-${size}`]">
      <!-- Prefix Icon -->
      <div v-if="prefixIcon && !loading" class="ea-textinput__prefix-icon"  :class="classPrefixIcon">

         <slot name="prefixIcon" />

      </div>

            <!-- Loading Icon -->
      <svg
        v-if="loading"
        class=""
        xmlns="http://www.w3.org/2000/svg"
        width="24" height="24"
        viewBox="0 0 24 24"
      >
        <g stroke="currentColor" stroke-width="1">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="1.4">
            <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"/>
            <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"/>
          </circle>
          <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </g>
      </svg>
      <!-- Input -->
      <input
        ref="inputRef"
        class="ea-textinput__input"
        :class="classInput"
        :type="inputType"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :maxlength="maxlength"
        :minlength="minlength"
        :autocomplete="autocomplete"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown="handleKeydown"
        @keyup="handleKeyup"
      >

      <!-- Clear Button -->
      <button
        v-if="clearable && modelValue && !disabled && !readonly"
        type="button"
        class="ea-textinput__clear-btn"
        @click="handleClear"
        tabindex="-1"
      >
        <Icon name="cross" size="16px" />
      </button>

      <!-- Show/Hide Password Button -->
      <button
        v-if="type === 'password'"
        type="button"
        class="ea-textinput__toggle-password"
        @click="togglePasswordVisibility"
        tabindex="-1"
      >
        <Icon :name="showPassword ? 'cross' : 'check'" size="20px" />
      </button>

      <!-- Suffix Icon -->
      <Icon
        v-if="suffixIcon && type !== 'password'"
        :name="suffixIcon"
        class="ea-textinput__suffix-icon"
        :class="classSuffixIcon"
        size="20px"
      />
    </div>

    <!-- Helper Text / Error Message / Character Counter -->
    <div v-if="helperText || errorMessage || (showCounter && maxlength)" class="ea-textinput__footer">
      <div class="ea-textinput__messages">
        <!-- Error Message -->
        <small v-if="errorMessage && isInvalid" class="ea-textinput__error-message">
          {{ errorMessage }}
        </small>
        <!-- Helper Text -->
        <small v-else-if="helperText" class="ea-textinput__helper-text">
          {{ helperText }}
        </small>
      </div>

      <!-- Character Counter -->
      <small v-if="showCounter && maxlength" class="ea-textinput__counter">
        {{ characterCount }}/{{ maxlength }}
      </small>
    </div>
  </div>
</template>

<script setup lang="ts">
import './textinput.style.scss';
import { ref, computed, watch, nextTick } from 'vue';
import type { ITextinputProps } from './textinput.types';
import Icon from '@/components/ui/EaIcon.vue';

// Model
const modelValue = defineModel<string | number>({ default: '' });

// Props
const props = withDefaults(defineProps<Omit<ITextinputProps, 'modelValue'>>(), {
  placeholder: 'Enter text...',
  size: 'md',
  type: 'text',
  prefixIcon: '',
  suffixIcon: '',
  isInvalid: false,
  disabled: false,
  readonly: false,
  required: false,
  loading: false,
  clearable: false,
  showCounter: false,
  debounce: 0,
});

// Emits
const emit = defineEmits<{
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
  input: [event: Event]
  change: [event: Event]
  clear: []
  keydown: [event: KeyboardEvent]
  keyup: [event: KeyboardEvent]
}>();

// Refs
const inputRef = ref<HTMLInputElement | null>(null);
const isFocus = ref(false);
const showPassword = ref(false);
const debounceTimer = ref<number | null>(null);

// Computed
const textInputClasses = computed(() => ({
  'ea-textinput--focus': isFocus.value,
  'ea-textinput--invalid': props.isInvalid,
  'ea-textinput--disabled': props.disabled,
  'ea-textinput--readonly': props.readonly,
  'ea-textinput--required': props.required,
  'ea-textinput--loading': props.loading,
}));

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password';
  }
  return props.type;
});

const characterCount = computed(() => {
  return String(modelValue.value || '').length;
});

const isInvalid = computed(() => {
  return props.isInvalid || (props.errorMessage && props.errorMessage.length > 0);
});

// Methods
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? Number(target.value) : target.value;

  if (props.debounce > 0) {
    if (debounceTimer.value) {
      clearTimeout(debounceTimer.value);
    }
    debounceTimer.value = setTimeout(() => {
      modelValue.value = value;
    }, props.debounce);
  } else {
    modelValue.value = value;
  }

  emit('input', event);
};

const handleChange = (event: Event) => {
  emit('change', event);
};

const handleFocus = (event: FocusEvent) => {
  isFocus.value = true;
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  isFocus.value = false;
  emit('blur', event);
};

const handleKeydown = (event: KeyboardEvent) => {
  emit('keydown', event);
};

const handleKeyup = (event: KeyboardEvent) => {
  emit('keyup', event);
};

const handleClear = () => {
  modelValue.value = '';
  emit('clear');
  nextTick(() => {
    inputRef.value?.focus();
  });
};

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

// Public methods
const focus = () => {
  inputRef.value?.focus();
};

const blur = () => {
  inputRef.value?.blur();
};

const select = () => {
  inputRef.value?.select();
};

// Expose methods
defineExpose({
  focus,
  blur,
  select,
  inputRef,
});

// Cleanup
watch(() => props.debounce, () => {
  if (debounceTimer.value) {
    clearTimeout(debounceTimer.value);
    debounceTimer.value = null;
  }
});

</script>

<style scoped lang="scss">
// Additional component-specific styles will be handled in textinput.style.scss
</style>
