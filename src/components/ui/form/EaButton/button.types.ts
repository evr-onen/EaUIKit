export interface IButtonProps{
label              : string
bgColour          ?: ColourTypes
textColour        ?: ColourTypes
size              ?: SizeTypes
buttonClass       ?: string
}



type SizeTypes = 'small' | 'normal' | 'large'
type ColourTypes = string
