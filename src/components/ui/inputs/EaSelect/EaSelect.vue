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
import Dropdown from '@/components/ui/inputs/dropdown/index.vue';
import "./select.style.scss"
import ChavronDown from '@/components/icons/chavron-down.vue';
import { nextTick, ref } from 'vue';


const props = withDefaults(defineProps<ISelectProps>(), {
  optionLabel: 'name',
  size: 'normal'
})

const optionsContentRef = ref<HTMLUListElement | null>(null);

const hoverIndex = ref<number | null>(null)
const selectValue = defineModel<OptionsType | null>()

const isSame = (option: OptionsType) => {
  if (selectValue.value) {
    return option[props.optionLabel] === selectValue.value![props.optionLabel]
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


const optionClickHandler = (option: OptionsType, close: () => void) => {
  selectValue.value = option
  close()

}
// const togglePanelKeypressHandler = async(e: KeyboardEvent, open: (value: boolean) => void) => {
//   open(true)
//   if(e.key === " "){
//     e.preventDefault()
//     await nextTick()
//     if(optionsContentRef.value){
//       optionsContentRef.value?.children[0].focus()
//       hoverIndex.value = 0
//     }
//   }
// }


const handleKeyDown = (e: KeyboardEvent, close: () => void) => {
  if (props.options.length === 0) return;
  e.preventDefault();
  console.log(e.key)
  if (e.key === "ArrowDown") {
    e.preventDefault();
    hoverIndex.value = (hoverIndex.value! + 1) % props.options.length;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    hoverIndex.value =
      (hoverIndex.value! - 1 + props.options.length) % props.options.length;
  } else if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    if (hoverIndex.value !== null && hoverIndex.value >= 0) {
      selectValue.value = props.options[hoverIndex.value];
      close();
    }
  } else if (e.key === "Escape") {
    e.preventDefault();
    close();
  }
};


</script>

<style scoped lang="scss">

</style>
