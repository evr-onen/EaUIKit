<template>
  <div v-click-outside="handleOutsideClick" class="select-none" :class="[typeCode, {'contentPanelOpen':isOpen}]">
    <div ref="slotRef" class="" >
      <slot name="default" :openPanel="openPanel" />
    </div>
    <div v-if="isOpen && (resultCount !==0)" ref="dropdownPanelRef" class="dropdownPanelWrapper scrollbar-custom flex flex-col"  :class="{'justify-end':isPanelOverflowing }"
      :style="{ top: `${panelPosition.y}px`, left: `${panelPosition.x}px`, width: `${panelWidth ?? panelPosition.width}px`, height: `${panelHeight}px` }"
      @click.self="handleOutsideClick">
      <div >
        <slot name='panelContent' :closePanel="() => isOpen = false" />
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import vClickOutside from "@/directives/clickOutside.ts"
import type { IDropdownProps } from './dropdown.types';

const props = withDefaults(defineProps<IDropdownProps>(), {
  panelHeight: 300,
  closeOnSelect: true,
  optionLabel : 'name',
  widthType: 'full'
})

const openPanel = (isToggle: boolean = false) => isOpen.value = isToggle ? !isOpen.value : true

// const modelValue = defineModel()

const slotRef = ref<HTMLElement | null>(null)
const dropdownPanelRef = ref<HTMLElement | null>(null)

const isOpen = ref(false)
const panelPosition = ref({ x: 0, y: 0, width: 0, height: 0 })
const isPanelOverflowing = ref(false)
const scrollY = ref(0)
const panelProcComputed = computed(()=>props.panelProc)

// const showPanelHandler = () => isOpen.value = true
const handleOutsideClick = () => isOpen.value = false


const updateScroll = () => {
  scrollY.value = window.scrollY
}

//NOTE - eger body disinda bir yerde overflow varsa ve o overflow olan yer scroll ise ve onun scrolly degeri degisirse kapanacak panel.
//  Bunu ayarlayacagiz yada bunun icin prop ekleyecegiz



onMounted(() => {
  window.addEventListener('scroll', updateScroll)

})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

//  const optionClickHandler = (option: unknown) => {
//   modelValue.value = option

//   if (props.closeOnSelect) {
//     isOpen.value = false
//   }
// }

watch([isOpen, scrollY, panelProcComputed], async() => {

    await nextTick()
    if (isOpen.value === true && slotRef.value) {
      const rect = slotRef.value.getBoundingClientRect()
      const screenBottom = window.innerHeight + window.scrollY
      isPanelOverflowing.value = (rect.top + window.scrollY + rect.height + props.panelHeight) > screenBottom

      if (!isPanelOverflowing.value) {
        panelPosition.value.y = rect.top + rect.height
      } else {
        panelPosition.value.y = rect.top - props.panelHeight
      }
      panelPosition.value.x = rect.left + window.scrollX
      panelPosition.value.width = rect.width
    }

})
</script>


