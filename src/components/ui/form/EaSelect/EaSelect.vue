<template>
  <div class="ea-select">
    <small v-if="label" class="ea-select__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown v-model="selectValue" class="w-full" typeCode="ea-Select" >
      <template #default="{openPanel}">
        <div class="ea-select__placeholder h-[2.0625rem]"
          :class="{ '!h-[1.7188rem]': size === 'small', '!h-[2.4375rem]': size === 'large' }"
          tabindex="0"
          @click="()=>openPanel(true)"
        >
          <p v-if="selectValue" class="text-textPrimary">{{ selectValue![optionLabel] }}</p>
          <p v-else class="text-placeholder">{{ (placeholder || "Please Select") }}</p>
          <ChavronDown class="size-6 text-placeholder" />
        </div>
      </template>

      <template #panelContent="{ closePanel }">
        <ul ref="optionsContentRef" class="ea-select__option-panel capitalize ">
          <li v-for="(option, index) in options" :key="index"
            :class="{ 'selectedOption': isSame(option), 'hoverOption': hoverIndex === index }"
            @click="optionClickHandler(option, closePanel)"  @mouseenter="(e) => onHover(e.target, index)"
            @keydown="(e:KeyboardEvent) => handleKeyDown(e, closePanel)"   tabindex="0">
            <p class="">{{ option[optionLabel] }}</p>
          </li>
        </ul>
      </template>

    </Dropdown>
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
  size: 'normal'
})
const selectValue = defineModel<OptionsType | null>()

const {optionsContentRef, hoverIndex, isSame, onHover, optionClickHandler, handleKeyDown} = useSelect(props, selectValue as Ref<OptionsType | null>)

</script>