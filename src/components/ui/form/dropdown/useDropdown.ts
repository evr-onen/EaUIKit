import { computed, onMounted, onUnmounted, ref } from "vue";
import type { IDropdownProps } from "./dropdown.types";

const useDropdown = (props: IDropdownProps) => {
//Vars
const slotRef = ref<HTMLElement | null>(null)
const dropdownPanelRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const panelPosition = ref({ x: 0, y: 0, width: 0, height: 0 })
const isPanelOverflowing = ref(false)
const scrollY = ref(0)

//Computed
const panelProcComputed = computed(()=>props.panelProc)

//Methods - Event Handlers
const handleOutsideClick = () => isOpen.value = false

const updateScroll = () => {
  scrollY.value = window.scrollY
}

//Methods - Open/Close
const openPanel = (isToggle: boolean = false) => isOpen.value = isToggle ? !isOpen.value : true

//LifeCycle Hooks
onMounted(() => {
  window.addEventListener('scroll', updateScroll)

})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})

return {
  slotRef,
  dropdownPanelRef,
  isOpen,
  panelPosition,
  isPanelOverflowing,
  scrollY,
  panelProcComputed,
  handleOutsideClick,
  updateScroll,
  openPanel
}
}

export default useDropdown