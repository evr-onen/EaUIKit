export interface IMultiselectProps{
  options         : OptionsType[]
  placeholder    ?: string
  optionLabel    ?: string
  label          ?: string
  size           ?: sizeType
  disabled       ?: boolean
  error          ?: boolean
  errorMessage   ?: string
  clearable      ?: boolean
  isLoading      ?: boolean
  onLoad         ?: () => Promise<OptionsType[]>
  multiselect    ?: boolean
  searchable     ?: boolean
  required       ?: boolean
  hint           ?: string
}

export type OptionsType = {
  [key:string]: string | number | unknown
}

type sizeType = 'small' | 'normal' | 'large'
