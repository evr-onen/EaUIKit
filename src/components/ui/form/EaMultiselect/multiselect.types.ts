export interface IMultiselectProps{
options       : OptionsType[]
placeholder  ?: string
optionLabel  ?: string
label        ?: string
size         ?: sizeType
limit        ?: number
}

export type OptionsType = {
  [key:string]: string | number | unknown
}

type sizeType = 'small' | 'normal' | 'large'
