<template>
  <div class="ea-autocomplete">
    <small v-if="label" class="ea-autocomplete__label capitalize text-textPrimary">{{ label }}</small>
    <Dropdown v-model="selectValues" class="w-full" typeCode="ea-autocomplete" :panelProc="panelProc" :resultCount="filteredOptions.length">
      <template #default="{ openPanel }">
        <div class="ea-autocomplete__placeholder flex flex-col gap-1 justify-center items-start py-1" :class="size"
          @keydown="(e) => togglePanelKeypressHandler(e, openPanel)">

          <div v-if="selectValues!.length > 0" class="flex gap-1 flex-wrap w-full">
            <EaBadge v-for="(selectedItem, index) in selectValues" :key="index" :label="selectedItem[optionLabel] as string" bg-color="#76808b" text-color="#fff" :size="size"
             class="cursor-pointer" @click="removeOption(selectedItem)"/>
          </div>
          <input type="text" v-model="textValue" class="w-full" @focus="openPanel(true)" :placeholder="placeholder" tabindex="0"/>
        </div>
      </template>

      <template #panelContent="{ closePanel }">
        <ul ref="optionsContentRef" class="ea-autocomplete__option-panel capitalize ">
          <li v-for="(option, index) in filteredOptions" :key="index"
            :class="{ 'selectedOption': isSame(option), 'hoverOption': hoverIndex === index }"
            @click="optionClickHandler(option)" @mouseenter="(e) => onHover(e.target, index)"
            @keydown="(e: KeyboardEvent) => handleKeyDown(e, closePanel)" tabindex="0">
            <p class="">{{ option[optionLabel] }}</p>
          </li>
        </ul>
      </template>

    </Dropdown>
    {{ selectValues }}
  </div>
</template>

<script setup lang="ts">
import type { ISelectProps, OptionType } from './autocomplete.types';
import Dropdown from '@/components/ui/form/dropdown/index.vue';
import EaBadge from '@/components/ui/form/EaBadge/EaBadge.vue';
import "./autocomplete.style.scss"
import {  watch } from 'vue';
import useAutocomplate from './useAutocomplate';


const props = withDefaults(defineProps<ISelectProps>(), {
  optionLabel   : 'name',
  size          : 'normal',
  limit         : 3,
  multiselect   : false
})

const selectValues = defineModel<OptionType[]>();

const {
  optionsContentRef,
  hoverIndex,
  textValue,
  filteredOptions,
  panelProc,
  isSame,
  onHover,
  optionClickHandler,
  removeOption,
  togglePanelKeypressHandler,
  handleKeyDown
} = useAutocomplate(props, selectValues)

watch(textValue, ()=>{
  if(textValue.value){
   const filtered =  props.options.filter((optionItem) =>{
    return (optionItem[props.optionLabel] as string).toLowerCase().includes(textValue.value!.toLowerCase())
  })
   filteredOptions.value = filtered
  }else{
    filteredOptions.value = props.options
  }

})

</script>

<style scoped></style>
