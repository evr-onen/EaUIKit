import { ref, type Ref } from "vue"
import type { IRadioButtonsProps, RadioOption } from "./EARadioButtons.types"

const useRadioButtons = (props: IRadioButtonsProps, modelValue: Ref<RadioOption | null>) => {
  const isChecked = (option: RadioOption) =>{
    if(option.disabled){
      if(JSON.stringify(modelValue.value) === JSON.stringify(option)){
        modelValue.value = null
      }
      return false
    }
   return JSON.stringify(modelValue.value) === JSON.stringify(option)
  }

  const hasError = ref(!!props.errorMessage)

  const handleClick = (index: number) => modelValue.value = props.options[index]

return {
  isChecked,
  hasError,
  handleClick
}

}

export default useRadioButtons
