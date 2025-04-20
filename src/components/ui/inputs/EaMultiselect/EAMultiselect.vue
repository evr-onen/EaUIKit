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
  </div>
</template>

<script setup lang="ts">
import type { ISelectProps, OptionsType } from './multiselect.types';
import Dropdown from '@/components/ui/inputs/dropdown/index.vue';
import EaBadge from '@/components/ui/inputs/EaBadge/index.vue';
import "./multiselect.style.scss"
import ChavronDown from '@/components/icons/chavron-down.vue';
import { nextTick, ref } from 'vue';


const props = withDefaults(defineProps<ISelectProps>(), {
  optionLabel : 'name',
  size        : 'normal',
  limit       : 3
})

const optionsContentRef = ref<HTMLUListElement | null>(null);

const hoverIndex = ref<number | null>(null)
const selectValues = defineModel<OptionsType[]>();

const isSame = (option: OptionsType) => {
  if (selectValues.value) {
    const optionIndex = selectValues.value?.findIndex(optionItem=> optionItem[props.optionLabel] === option[props.optionLabel])
    return (optionIndex === -1 ? false : true)
  }
  return false
}

const onHover = (e:EventTarget | null  ,index: number) =>{
  const target = e as HTMLElement;
  if(target){
    target.focus()
  }
hoverIndex.value = index
}


const optionClickHandler = (option: OptionsType) => {
  const optionIndex = selectValues.value?.findIndex(optionItem=> optionItem[props.optionLabel] === option[props.optionLabel])

  if(optionIndex === -1){
    selectValues.value!.push(option)
  }else{
    selectValues.value?.splice(optionIndex as number, 1)
  }
}

const togglePanelKeypressHandler = async(e:KeyboardEvent, open:()=>void)=>{
  if(e.key === " "){
    open()
    e.preventDefault()
    await nextTick()
    if(optionsContentRef.value){
      (optionsContentRef.value?.children[0] as HTMLElement).focus()
      hoverIndex.value = 0
    }
  }
}

const handleKeyDown = (e: KeyboardEvent, close: () => void) => {
  if (props.options.length === 0) return
  e.preventDefault()
  if (e.key === "ArrowDown") {
    e.preventDefault()
    hoverIndex.value = (hoverIndex.value! + 1) % props.options.length
  } else if (e.key === "ArrowUp") {
    e.preventDefault()
    hoverIndex.value =
      (hoverIndex.value! - 1 + props.options.length) % props.options.length
  } else if (e.key === "Enter" || e.key === " ") {
    e.preventDefault()
    if (hoverIndex.value !== null && hoverIndex.value >= 0) {
      const selectedOption = props.options[hoverIndex.value]
      optionClickHandler(selectedOption)
    }
  } else if (e.key === "Escape") {
    e.preventDefault()
    close()
  }
}


</script>

<style scoped></style>
