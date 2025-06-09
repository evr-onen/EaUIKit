<template>
  <div class="ea-multiselect">
    <small v-if="label" class="ea-multiselect__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown v-model="selectValues" class="w-full" typeCode="ea-Multiselect" >
      <template #default="{openPanel}">
        <div class="ea-multiselect__placeholder"
          :class="size"
          tabindex="0" @keydown="(e)=>togglePanelKeypressHandler(e, openPanel)"
          @click="()=>openPanel(true)"
          >

          <div v-if="(selectValues!.length <= limit) && (selectValues?.length !=0)" class="flex gap-1 overflow-hidden ">
            <EaBadge v-for="(selectedItem, index) in selectValues" :key="index" :label="selectedItem[optionLabel] as string" bg-color="#76808b" text-color="#fff" :size="size"/>
          </div>

          <div v-if="(selectValues!.length > limit )" >
            <p>{{ selectValues?.length }} selected</p>
          </div>

          <p v-if="selectValues!.length === 0" class="text-placeholder">{{ (placeholder || "Please Select") }}</p>

          <ChavronDown class="size-6 text-placeholder ml-[12px]" />
        </div>
      </template>

      <template #panelContent="{ closePanel }">
        <ul ref="optionsContentRef" class="ea-multiselect__option-panel capitalize ">
          <li v-for="(option, index) in options" :key="index"
            :class="{ 'selectedOption': isSame(option), 'hoverOption': hoverIndex === index }"
            @click="optionClickHandler(option)"  @mouseenter="(e) => onHover(e.target, index)"
            @keydown="(e:KeyboardEvent) => handleKeyDown(e, closePanel)"   tabindex="0">
            <p class="">{{ option[optionLabel] }}</p>
          </li>
        </ul>
      </template>

    </Dropdown>
    <small v-if="error && errorMessage" class="ea-multiselect__error-message text-red-500 mt-1">{{ errorMessage }}</small>
    <small v-if="hint && !error" class="ea-multiselect__hint text-gray-500 mt-1">{{ hint }}</small>
  </div>
</template>

<script setup lang="ts">
import type { IMultiselectProps, OptionsType } from './multiselect.types';
import Dropdown from '@/components/ui/form/dropdown/index.vue';
import EaBadge from '@/components/ui/form/EaBadge/EaBadge.vue';
import "./multiselect.style.scss"
import ChavronDown from '@/components/icons/chavron-down.vue';
import useMultiselect from './useMultiselect';


const props = withDefaults(defineProps<IMultiselectProps>(), {
  optionLabel : 'name',
  size        : 'normal',
  limit       : 3,
  disabled    : false,
  error       : false,
  clearable   : false,
  isLoading   : false,
  multiselect : true,
  searchable  : false,
  required    : false
})

const selectValues = defineModel<OptionsType[]>();

const {
  hoverIndex,
  isSame,
  onHover,
  optionClickHandler,
  togglePanelKeypressHandler,
  handleKeyDown,
  optionsContentRef
} = useMultiselect(props, selectValues)

</script>

<style scoped></style>
