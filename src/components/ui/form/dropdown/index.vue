<template>
  <div v-click-outside="handleOutsideClick" class="select-none" :class="[typeCode, {'contentPanelOpen':isOpen}]">
    <div ref="slotRef" class="" >
      <slot name="default" :openPanel="openPanel" />
    </div>
    <Teleport to="body">
      <div v-if="isOpen && (resultCount !==0)" ref="dropdownPanelRef" class="dropdownPanelWrapper fixed scrollbar-custom flex flex-col"  :class="{'justify-end':isPanelOverflowing }"
        :style="{ top: `${panelPosition.y}px`, left: `${panelPosition.x}px`, width: `${panelWidth ?? panelPosition.width}px`, height: `${panelHeight}px` }"
        @click.self="props.closeOnSelect ? handleOutsideClick : undefined">
        <div >
          <slot name='panelContent' :closePanel="() => isOpen = false" />
        </div>
      </div>
    </Teleport>

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
  handleOutsideClick,
  updatePosition,
  openPanel
  } = useDropdown(props)

watch([isOpen], async() => {
  await nextTick()
  updatePosition()
})

//NOTE - eger body disinda bir yerde overflow varsa ve o overflow olan yer scroll ise ve onun scrolly degeri degisirse kapanacak panel.
//  Bunu ayarlayacagiz yada bunun icin prop ekleyecegiz

</script>

<style lang="scss">
@import './dropdown.style.scss';
</style>

