import { onMounted, onUnmounted, ref } from "vue";
import type { IDropdownProps } from "./dropdown.types";

const useDropdown = (props: IDropdownProps) => {
//Vars
const slotRef = ref<HTMLElement | null>(null)
const dropdownPanelRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)
const panelPosition = ref({ x: 0, y: 0, width: 0, height: 0 })
const isPanelOverflowing = ref(false)


//Methods - Event Handlers
const handleOutsideClick = () => isOpen.value = false


// Update position on any scroll or resize
const updatePosition = () => {
  if (isOpen.value && slotRef.value) {
    const rect = slotRef.value.getBoundingClientRect()
    const screenBottom = window.innerHeight

    // With teleport to body, we can use simple viewport positioning
    // Calculate if panel would overflow at the bottom
    isPanelOverflowing.value = (rect.bottom + (props.panelHeight || 300)) > screenBottom

    // Position panel based on overflow
    if (!isPanelOverflowing.value) {
      // Position below the element
      panelPosition.value.y = rect.bottom
    } else {
      // Position above the element
      panelPosition.value.y = rect.top - (props.panelHeight || 300)
    }

    // Set horizontal position and width
    panelPosition.value.x = rect.left
    panelPosition.value.width = rect.width
  }
}

// Handle scroll events (including nested scroll containers)
const handleScroll = () => {
  updatePosition()
}

//Methods - Open/Close
const openPanel = (isToggle: boolean = false) => isOpen.value = isToggle ? !isOpen.value : true

//LifeCycle Hooks
onMounted(() => {
  // Listen to scroll and resize events for position updates
  window.addEventListener('scroll', handleScroll, true)
  window.addEventListener('resize', updatePosition)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll, true)
  window.removeEventListener('resize', updatePosition)
})

return {
  slotRef,
  dropdownPanelRef,
  isOpen,
  panelPosition,
  isPanelOverflowing,
  handleOutsideClick,
  updatePosition,
  openPanel
}
}

export default useDropdown