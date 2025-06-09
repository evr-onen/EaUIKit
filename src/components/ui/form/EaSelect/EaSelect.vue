<template>
  <div class="ea-select" :class="{ 'ea-select--disabled': disabled, 'ea-select--error': error }">
    <small v-if="label" class="ea-select__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown v-model="selectValue" class="w-full" typeCode="ea-Select" >
      <template #default="{openPanel}">
        <div class="ea-select__placeholder h-[2.0625rem]"
          :class="{
            '!h-[1.7188rem]': size === 'small',
            '!h-[2.4375rem]': size === 'large',
            'ea-select__placeholder--disabled': disabled,
            'ea-select__placeholder--error': error,
            'ea-select__placeholder--loading': isLoadingState
          }"
          :tabindex="disabled ? -1 : 0"
          @click="() => !disabled && handleSelectClick(openPanel)"
        >
          <div class="flex items-center">
            <p v-if="selectValue" class="text-textPrimary">{{ selectValue![optionLabel] }}</p>
            <p v-else class="text-placeholder">{{ (placeholder || "Please Select") }}</p>
          </div>
          <div class="flex items-center gap-2">
            <button
              v-if="clearable && selectValue && !disabled && !isLoadingState"
              @click.stop="clearSelection"
              class="ea-select__clear-btn"
              type="button"
              tabindex="-1"
            >
              <svg class="size-4 text-placeholder hover:text-textPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <div v-if="isLoadingState" class="ea-select__loading">
              <svg class="animate-spin size-4 text-placeholder" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <ChavronDown v-if="!isLoadingState" class="size-6 text-placeholder" :class="{ 'opacity-50': disabled }" />
          </div>
        </div>
      </template>

      <template #panelContent="{ closePanel }">
        <ul ref="optionsContentRef" class="ea-select__option-panel capitalize ">
          <li v-if="isLoadingState && finalOptions.length === 0" class="px-4 py-3 text-center">
            <div class="flex items-center justify-center gap-2">
              <svg class="animate-spin size-4 text-placeholder" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-placeholder">Loading options...</span>
            </div>
          </li>
          <li v-for="(option, index) in finalOptions" :key="index"
            :class="{ 'selectedOption': isSame(option), 'hoverOption': hoverIndex === index }"
            @click="optionClickHandler(option, closePanel)"  @mouseenter="(e) => onHover(e.target, index)"
            @keydown="(e:KeyboardEvent) => handleKeyDown(e, closePanel)"   tabindex="0">
            <p class="">{{ option[optionLabel] }}</p>
          </li>
        </ul>
      </template>

    </Dropdown>
    <small v-if="error && errorMessage" class="ea-select__error-message text-red-500 mt-1">{{ errorMessage }}</small>
  </div>
</template>

<script setup lang="ts">
import type { ISelectProps, OptionsType } from './select.types';
import Dropdown from '@/components/ui/form/dropdown/index.vue';

import "./select.style.scss"
import ChavronDown from '@/components/icons/chavron-down.vue';
import useSelect from './useSelect';
import type { Ref } from 'vue';


const props = withDefaults(defineProps<ISelectProps>(), {
  optionLabel: 'name',
  size: 'normal',
  disabled: false,
  error: false,
  clearable: false,
  isLoading: false
})
const selectValue = defineModel<OptionsType | null>()

const clearSelection = () => {
  if (!props.disabled && !isLoadingState.value) {
    selectValue.value = null
  }
}

const {optionsContentRef, hoverIndex, finalOptions, isLoadingState, isSame, onHover, optionClickHandler, handleKeyDown, loadAsyncData} = useSelect(props, selectValue as Ref<OptionsType | null>)

// Handle select click - load async data if needed
const handleSelectClick = async (openPanel: () => void) => {
  if (props.onLoad && finalOptions.value.length === 0) {
    // Load async data and open panel
    await loadAsyncData(openPanel)
  } else {
    // Just open panel normally
    openPanel()
  }
}

</script>
