export interface ISelectProps{
  options         : OptionType[]
  placeholder    ?: string
  optionLabel    ?: string
  label          ?: string
  size           ?: sizeType
  limit          ?: number
  multiselect    ?: boolean
  disabled       ?: boolean
  error          ?: boolean
  errorMessage   ?: string
  clearable      ?: boolean
  isLoading      ?: boolean
  onLoad         ?: () => Promise<OptionType[]>
  hint           ?: string
}

export type OptionType = {
  [key:string]: string | number | unknown
}

type sizeType = 'small' | 'normal' | 'large'
