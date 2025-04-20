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
  </div>
</template>

<script setup lang="ts">
import type { ISelectProps, OptionType } from './autocomplete.types';
import Dropdown from '@/components/ui/inputs/dropdown/index.vue';
import EaBadge from '@/components/ui/inputs/EaBadge/index.vue';
import "./autocomplete.style.scss"
import { nextTick, ref, watch } from 'vue';


const props = withDefaults(defineProps<ISelectProps>(), {
  optionLabel   : 'name',
  size          : 'normal',
  limit         : 3,
  multiselect   : false
})

const selectValues = defineModel<OptionType[]>();

const optionsContentRef = ref<HTMLUListElement | null>(null);
const hoverIndex = ref<number | null>(null)
const textValue = ref<string>('')
const filteredOptions = ref<OptionType[]>(props.options)
const panelProc = ref(0)


const isSame = (option: OptionType) => {
  if (selectValues.value) {
    const optionIndex = selectValues.value?.findIndex(optionItem => optionItem[props.optionLabel] === option[props.optionLabel])
    return (optionIndex === -1 ? false : true)
  }
  return false
}

const onHover = (e: EventTarget | null, index: number) => {
  const target = e as HTMLElement;
  if (target) {
    // target.focus()
  }
  hoverIndex.value = index
}


const optionClickHandler = (option: OptionType) => {
  const optionIndex = selectValues.value?.findIndex(optionItem => optionItem[props.optionLabel] === option[props.optionLabel])


    panelProc.value++

    if (optionIndex === -1) {
      if(props.multiselect){
        selectValues.value!.push(option)
      }else{
        selectValues.value! = [option]
      }
    } else {
      selectValues.value?.splice(optionIndex as number, 1)
    }

}

const removeOption =(option: OptionType)=>{
  const optionIndex = selectValues.value?.findIndex(optionItem => optionItem[props.optionLabel] === option[props.optionLabel])
  selectValues.value?.splice(optionIndex as number, 1)
}

const togglePanelKeypressHandler = async (e: KeyboardEvent, open: () => void) => {
  if (e.key === " ") {

    e.preventDefault()
    await nextTick()
    if (optionsContentRef.value) {
      // (optionsContentRef.value?.children[0] as HTMLElement).focus()
      hoverIndex.value = 0
    }
  }

}

const handleKeyDown = (e: KeyboardEvent, close: () => void) => {
  if (filteredOptions.value.length === 0) return
  e.preventDefault()
  if (e.key === "ArrowDown") {
    e.preventDefault()
    hoverIndex.value = (hoverIndex.value! + 1) % filteredOptions.value.length
  } else if (e.key === "ArrowUp") {
    e.preventDefault()
    hoverIndex.value =
      (hoverIndex.value! - 1 + filteredOptions.value.length) % filteredOptions.value.length
  } else if (e.key === "Enter" || e.key === " ") {
    e.preventDefault()
    if (hoverIndex.value !== null && hoverIndex.value >= 0) {
      const selectedOption = filteredOptions.value[hoverIndex.value]
      optionClickHandler(selectedOption)
    }
  } else if (e.key === "Escape") {
    e.preventDefault()
    close()
  }
}

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
