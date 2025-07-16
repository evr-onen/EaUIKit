export interface IButtonProps {
  // Basic props
  label?: string
  variant?: ButtonVariant
  size?: SizeTypes

  // Styling props
  bgColour?: ColourTypes
  textColour?: ColourTypes
  buttonClass?: string
  fullWidth?: boolean

  // Gradient props
  gradient?: GradientType
  gradientDirection?: GradientDirection
  customGradient?: string

  // State props
  loading?: boolean
  disabled?: boolean

  // Icon props - Now accepts SVG filenames from assets/svg folder
  leftIcon?: string  // SVG filename without extension (e.g., 'check', 'plus')
  rightIcon?: string // SVG filename without extension (e.g., 'check', 'plus')
  iconOnly?: boolean
  iconSize?: IconSize

  // Interaction props
  onClick?: () => void
  type?: ButtonType

  // Advanced props
  rounded?: RoundedType
  shadow?: ShadowType
  animate?: boolean

  // Ripple effect props
  ripple?: boolean
  rippleColor?: string
  rippleSize?: RippleSize
}

// Type definitions
type SizeTypes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type ColourTypes = string
type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'ghost' | 'outline' | 'text' | 'gradient'
type ButtonType = 'button' | 'submit' | 'reset'
type IconSize = 'sm' | 'md' | 'lg'
type RoundedType = 'none' | 'sm' | 'md' | 'lg' | 'full'
type ShadowType = 'none' | 'sm' | 'md' | 'lg' | 'xl'
type GradientType = 'sunset' | 'ocean' | 'purple' | 'pink' | 'emerald' | 'fire' | 'sky' | 'rainbow' | 'dark' | 'gold' | 'error' | 'warning' | 'info' | 'success'
type GradientDirection = 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl'
type RippleSize = 'sm' | 'md' | 'lg'
