export interface ISelectProps{
options       : OptionType[]
placeholder  ?: string
optionLabel  ?: string
label        ?: string
size         ?: sizeType
limit        ?: number
multiselect  ?: boolean
}

export type OptionType = {
  [key:string]: string | number | unknown
}

type sizeType = 'small' | 'normal' | 'large'
