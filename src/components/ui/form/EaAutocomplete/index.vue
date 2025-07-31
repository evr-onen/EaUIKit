<template>
  <div class="ea-autocomplete" :class="{ 'ea-autocomplete--disabled': disabled, 'ea-autocomplete--error': error }">
    <small v-if="label" class="ea-autocomplete__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown v-model="selectValues" class="w-full" typeCode="ea-autocomplete" :panelProc="panelProc" :resultCount="filteredOptions.length">
      <template #default="{ openPanel }">
        <div class="ea-autocomplete__placeholder flex flex-col gap-1 justify-center items-start py-1"
          :class="[size, {
            'ea-autocomplete__placeholder--disabled': disabled,
            'ea-autocomplete__placeholder--error': error,
            'ea-autocomplete__placeholder--loading': isLoadingState
          }]"
          :tabindex="disabled ? -1 : 0"
          @keydown="(e) => togglePanelKeypressHandler(e, openPanel)"
          @click="() => handleAutocompleteClick(openPanel)">

          <div v-if="selectValues!.length > 0" class="flex gap-1 flex-wrap w-full">
            <EaBadge v-for="(selectedItem, index) in selectValues" :key="index" :label="selectedItem[optionLabel] as string" bg-color="#76808b" text-color="#fff" :size="size"
             class="cursor-pointer" @click="removeOption(selectedItem)"/>
          </div>
          <div class="flex items-center w-full">
            <input
              type="text"
              v-model="textValue"
              class="flex-1"
              @focus="openPanel(true)"
              :placeholder="placeholder"
              :disabled="disabled || isLoadingState"
              tabindex="0"
            />
            <div class="flex items-center gap-2 ml-auto">
              <button
                v-if="clearable && selectValues?.length && selectValues.length > 0 && !disabled && !isLoadingState"
                @click.stop="clearSelection"
                class="ea-autocomplete__clear-btn"
                type="button"
                tabindex="-1"
              >
                <svg class="size-4 text-placeholder hover:text-textPrimary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              <div v-if="isLoadingState" class="ea-autocomplete__loading">
                <svg class="animate-spin size-4 text-placeholder" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </template>

      <template #panelContent="{ closePanel }">
        <ul ref="optionsContentRef" class="ea-autocomplete__option-panel capitalize ">
          <li v-if="isLoadingState && filteredOptions.length === 0" class="px-4 py-3 text-center">
            <div class="flex items-center justify-center gap-2">
              <svg class="animate-spin size-4 text-placeholder" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 714 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="text-placeholder">Loading options...</span>
            </div>
          </li>
          <li v-for="(option, index) in filteredOptions" :key="index"
            :class="{ 'selectedOption': isSame(option), 'hoverOption': hoverIndex === index }"
            @click="optionClickHandler(option)" @mouseenter="(e) => onHover(e.target, index)"
            @keydown="(e: KeyboardEvent) => handleKeyDown(e, closePanel)" tabindex="0">
            <p class="">{{ option[optionLabel] }}</p>
          </li>
        </ul>
      </template>

    </Dropdown>
    <small v-if="error && errorMessage" class="ea-autocomplete__error-message text-red-500 mt-1">{{ errorMessage }}</small>
    <small v-if="hint && !error" class="ea-autocomplete__hint text-gray-500 mt-1">{{ hint }}</small>
  </div>
</template>

<script setup lang="ts">
import type { ISelectProps, OptionType } from './autocomplete.types';
import Dropdown from '@/components/ui/form/dropdown/index.vue';
import EaBadge from '@/components/ui/form/EaBadge/EaBadge.vue';
import "./autocomplete.style.scss"
import { watch } from 'vue';
import useAutocomplate from './useAutocomplete';

const props = withDefaults(defineProps<ISelectProps>(), {
  optionLabel   : 'name',
  size          : 'normal',
  limit         : 3,
  multiselect   : false,
  disabled      : false,
  error         : false,
  clearable     : false,
  isLoading     : false
})

const selectValues = defineModel<OptionType[]>();

const {
  optionsContentRef,
  hoverIndex,
  textValue,
  filteredOptions,
  panelProc,
  finalOptions,
  isLoadingState,
  isSame,
  onHover,
  optionClickHandler,
  removeOption,
  togglePanelKeypressHandler,
  handleKeyDown,
  clearSelection,
  loadAsyncData
} = useAutocomplate(props, selectValues)

// Handle autocomplete click - load async data if needed
const handleAutocompleteClick = async (openPanel: () => void) => {
  if (props.disabled) return

  if (props.onLoad && finalOptions.value.length === 0) {
    // Load async data and open panel
    await loadAsyncData(openPanel)
  } else {
    // Just open panel normally
    openPanel()
  }
}

watch(textValue, () => {
  if (textValue.value) {
    const currentOptions = finalOptions.value
    const filtered = currentOptions.filter((optionItem) => {
      return (optionItem[props.optionLabel] as string).toLowerCase().includes(textValue.value!.toLowerCase())
    })
    filteredOptions.value = filtered
  } else {
    filteredOptions.value = finalOptions.value
  }
})

</script>

<style scoped></style>
