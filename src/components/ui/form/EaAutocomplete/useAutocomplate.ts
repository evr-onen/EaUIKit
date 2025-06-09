import { nextTick, ref, type Ref, computed, watch } from "vue";
import type { ISelectProps, OptionType } from "./autocomplete.types";

const useAutocomplate = (props: ISelectProps, selectValues: Ref<OptionType[] | undefined>) => {
  const optionsContentRef = ref<HTMLUListElement | null>(null);
  const hoverIndex = ref<number | null>(null)
  const textValue = ref<string>('')
  const filteredOptions = ref<OptionType[]>(props.options)
  const panelProc = ref(0)
  const internalLoading = ref(false)
  const loadedOptions = ref<OptionType[]>([])

  // Computed for final options (either props.options or loaded options)
  const finalOptions = computed(() => {
    if (props.onLoad && loadedOptions.value.length > 0) {
      return loadedOptions.value
    }
    return props.options || []
  })

  // Computed for loading state (either prop or internal loading)
  const isLoadingState = computed(() => props.isLoading || internalLoading.value)

  // Watch finalOptions and update filteredOptions when no text search
  watch(finalOptions, (newOptions) => {
    if (!textValue.value) {
      filteredOptions.value = newOptions
    }
  }, { immediate: true })

  const isSame = (option: OptionType) => {
    if (selectValues.value) {
      const optionIndex = selectValues.value?.findIndex(optionItem => optionItem[props.optionLabel!] === option[props.optionLabel!])
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
    if (props.disabled || isLoadingState.value) return

    const optionIndex = selectValues.value?.findIndex(optionItem => optionItem[props.optionLabel!] === option[props.optionLabel!])
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

  const removeOption = (option: OptionType) => {
    if (props.disabled || isLoadingState.value) return

    const optionIndex = selectValues.value?.findIndex(optionItem => optionItem[props.optionLabel!] === option[props.optionLabel!])
    selectValues.value?.splice(optionIndex as number, 1)
  }

  // Async data loading function
  const loadAsyncData = async (openPanel: () => void) => {
    if (!props.onLoad || props.disabled) return

    try {
      internalLoading.value = true

      // Open panel first to show loading state
      openPanel()

      // Fetch data
      const fetchedOptions = await props.onLoad()
      loadedOptions.value = fetchedOptions

      // Update filtered options immediately after loading
      filteredOptions.value = fetchedOptions

    } catch (error) {
      console.error('Error loading autocomplete options:', error)
      loadedOptions.value = []
      filteredOptions.value = []
    } finally {
      internalLoading.value = false
    }
  }

  const togglePanelKeypressHandler = async (e: KeyboardEvent, open: () => void) => {
    if (e.key === " ") {
      e.preventDefault()

      // If onLoad is defined and no options loaded yet, load async data
      if (props.onLoad && finalOptions.value.length === 0) {
        await loadAsyncData(open)
      } else {
        open()
      }

      await nextTick()
      if (optionsContentRef.value) {
        // (optionsContentRef.value?.children[0] as HTMLElement).focus()
        hoverIndex.value = 0
      }
    } else {
      open()
    }
  }

  const handleKeyDown = (e: KeyboardEvent, close: () => void) => {
    if (filteredOptions.value.length === 0 || props.disabled || isLoadingState.value) return
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

  // Clear selection function
  const clearSelection = () => {
    if (!props.disabled && !isLoadingState.value) {
      selectValues.value = []
    }
  }

  return {
    isSame,
    onHover,
    optionClickHandler,
    removeOption,
    togglePanelKeypressHandler,
    handleKeyDown,
    clearSelection,
    loadAsyncData,
    optionsContentRef,
    hoverIndex,
    textValue,
    filteredOptions,
    panelProc,
    finalOptions,
    isLoadingState
  }
}

export default useAutocomplate