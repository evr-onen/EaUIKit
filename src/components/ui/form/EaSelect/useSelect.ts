import { ref, type Ref } from "vue";
import type { ISelectProps, OptionsType } from "./select.types";

const useSelect = (props: ISelectProps, selectValue: Ref<OptionsType | null>) => {

  const optionsContentRef = ref<HTMLUListElement | null>(null);

  const hoverIndex = ref<number | null>(null)

  const isSame = (option: OptionsType) => {
    if (selectValue.value) {
      return option[props.optionLabel!] === selectValue.value![props.optionLabel!]
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

  const optionClickHandler = (option: OptionsType, close: () => void) => {
    selectValue.value = option
    close()
  }

  const handleKeyDown = (e: KeyboardEvent, close: () => void) => {
    if (props.options.length === 0) return;
    e.preventDefault();
    console.log(e.key)
    if (e.key === "ArrowDown") {
      e.preventDefault();
      hoverIndex.value = (hoverIndex.value! + 1) % props.options.length;
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      hoverIndex.value =
        (hoverIndex.value! - 1 + props.options.length) % props.options.length;
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (hoverIndex.value !== null && hoverIndex.value >= 0) {
        selectValue.value = props.options[hoverIndex.value];
        close();
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  return {
    optionsContentRef,
    hoverIndex,
    isSame,
    onHover,
    optionClickHandler,
    handleKeyDown
  }
}

export default useSelect
