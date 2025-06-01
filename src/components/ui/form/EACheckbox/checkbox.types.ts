export interface ICheckboxProps{
label        : string
bgColor     ?: string
textColor   ?: string
size        ?: SizeType
disabled    ?: boolean
error       ?: boolean
}


type SizeType = 'sm' | 'md' | 'lg'
