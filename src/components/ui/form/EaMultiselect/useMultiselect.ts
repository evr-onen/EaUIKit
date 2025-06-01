import type { Ref } from "vue";
import { nextTick, ref } from "vue";
import type { IMultiselectProps, OptionsType } from "./multiselect.types";
const optionsContentRef = ref<HTMLUListElement | null>(null);

const useMultiselect = (props: IMultiselectProps, selectValues: Ref<OptionsType[] | undefined>) => {
  const hoverIndex = ref<number | null>(null)

  const isSame = (option: OptionsType) => {
    if (selectValues.value) {
      const optionIndex = selectValues.value?.findIndex(optionItem=> optionItem[props.optionLabel!] === option[props.optionLabel!])
      return (optionIndex === -1 ? false : true)
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

  const optionClickHandler = (option: OptionsType) => {
    const optionIndex = selectValues.value?.findIndex(optionItem=> optionItem[props.optionLabel!] === option[props.optionLabel!])

    if(optionIndex === -1){
      selectValues.value!.push(option)
    }else{
      selectValues.value?.splice(optionIndex as number, 1)
    }
  }

  const togglePanelKeypressHandler = async(e:KeyboardEvent, open:()=>void)=>{
    if(e.key === " "){
      open()
      e.preventDefault()
      await nextTick()
      if(optionsContentRef.value){
        (optionsContentRef.value?.children[0] as HTMLElement).focus()
        hoverIndex.value = 0
      }
    }
  }

  const handleKeyDown = (e: KeyboardEvent, close: () => void) => {
    if (props.options.length === 0) return
    e.preventDefault()
    if (e.key === "ArrowDown") {
      e.preventDefault()
      hoverIndex.value = (hoverIndex.value! + 1) % props.options.length
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      hoverIndex.value =
        (hoverIndex.value! - 1 + props.options.length) % props.options.length
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      if (hoverIndex.value !== null && hoverIndex.value >= 0) {
        const selectedOption = props.options[hoverIndex.value]
        optionClickHandler(selectedOption)
      }
    } else if (e.key === "Escape") {
      e.preventDefault()
      close()
    }
  }

  return {
    hoverIndex,
    isSame,
    onHover,
    optionClickHandler,
    togglePanelKeypressHandler,
    handleKeyDown,
    optionsContentRef,
  }
}

export default useMultiselect
