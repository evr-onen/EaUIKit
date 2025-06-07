<template>
  <div v-click-outside="handleOutsideClick" class="select-none" :class="[typeCode, {'contentPanelOpen':isOpen}]">
    <div ref="slotRef" class="" >
      <slot name="default" :openPanel="openPanel" />
    </div>
    <div v-if="isOpen && (resultCount !==0)" ref="dropdownPanelRef" class="dropdownPanelWrapper fixed scrollbar-custom flex flex-col"  :class="{'justify-end':isPanelOverflowing }"
      :style="{ top: `${panelPosition.y}px`, left: `${panelPosition.x}px`, width: `${panelWidth ?? panelPosition.width}px`, height: `${panelHeight}px` }"
      @click.self="handleOutsideClick">
      <div >
        <slot name='panelContent' :closePanel="() => isOpen = false" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {  nextTick, watch } from 'vue';
import vClickOutside from "@/directives/clickOutside.ts"
import type { IDropdownProps } from './dropdown.types';
import useDropdown from './useDropdown'

const props = withDefaults(defineProps<IDropdownProps>(), {
  panelHeight: 300,
  closeOnSelect: true,
  optionLabel : 'name',
  widthType: 'full'
})

const {
  slotRef,
  dropdownPanelRef,
  isOpen,
  panelPosition,
  isPanelOverflowing,
  scrollY,
  panelProcComputed,
  handleOutsideClick,
  openPanel
  } = useDropdown(props)

watch([isOpen, scrollY, panelProcComputed], async() => {
  await nextTick()
  if (isOpen.value === true && slotRef.value) {
    const rect = slotRef.value.getBoundingClientRect()
    const screenBottom = window.innerHeight + window.scrollY
    isPanelOverflowing.value = (rect.top + window.scrollY + rect.height + props.panelHeight!) > screenBottom

    if (!isPanelOverflowing.value) {
      panelPosition.value.y = rect.top + rect.height
    } else {
      panelPosition.value.y = rect.top - props.panelHeight!
    }
    panelPosition.value.x = rect.left + window.scrollX
    panelPosition.value.width = rect.width
  }

})

//NOTE - eger body disinda bir yerde overflow varsa ve o overflow olan yer scroll ise ve onun scrolly degeri degisirse kapanacak panel.
//  Bunu ayarlayacagiz yada bunun icin prop ekleyecegiz

</script>


