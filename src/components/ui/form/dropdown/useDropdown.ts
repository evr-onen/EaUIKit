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

  const updatePosition = () => {
    if (isOpen.value && slotRef.value) {
      const rect = slotRef.value.getBoundingClientRect()
      const screenBottom = window.innerHeight

      isPanelOverflowing.value = (rect.bottom + (props.panelHeight || 300)) > screenBottom

      if (!isPanelOverflowing.value) {
        panelPosition.value.y = rect.bottom
      } else {
        panelPosition.value.y = rect.top - (props.panelHeight || 300)
      }

      panelPosition.value.x = rect.left
      panelPosition.value.width = rect.width
    }
  }

  const handleScroll = () => {
    updatePosition()
  }

  const openPanel = (isToggle: boolean = false) => isOpen.value = isToggle ? !isOpen.value : true

  //LifeCycle Hooks
  onMounted(() => {
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
