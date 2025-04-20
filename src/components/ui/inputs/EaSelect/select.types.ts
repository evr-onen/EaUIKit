export interface ISelectProps{
options       : OptionsType[]
placeholder  ?: string
optionLabel  ?: string
label        ?: string
size         ?: sizeType
}

export type OptionsType = {
  [key:string]: string | number | unknown
}

type sizeType = 'small' | 'normal' | 'large'
