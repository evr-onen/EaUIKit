import { nextTick, ref, type Ref } from "vue";
import type { ISelectProps, OptionType } from "./autocomplete.types";

const useAutocomplate = (props: ISelectProps, selectValues: Ref<OptionType[] | undefined>) => {
  const optionsContentRef = ref<HTMLUListElement | null>(null);
  const hoverIndex = ref<number | null>(null)
  const textValue = ref<string>('')
  const filteredOptions = ref<OptionType[]>(props.options)
  const panelProc = ref(0)


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

  const removeOption =(option: OptionType)=>{
    const optionIndex = selectValues.value?.findIndex(optionItem => optionItem[props.optionLabel!] === option[props.optionLabel!])
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
    }else{
      open()
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

  return {
    isSame,
    onHover,
    optionClickHandler,
    removeOption,
    togglePanelKeypressHandler,
    handleKeyDown,
    optionsContentRef,
    hoverIndex,
    textValue,
    filteredOptions,
    panelProc
  }
}

export default useAutocomplate