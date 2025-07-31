export interface ITextinputProps{
  // Basic props
  size                   ?: SizeType
  label                  ?: string
  placeholder            ?: string
  modelValue             ?: string | number

  // Style classes
  classLabel             ?: string
  classInput             ?: string
  classInputContainer    ?: string
  classPrefixIcon        ?: string
  classSuffixIcon        ?: string

  // Icons
  prefixIcon             ?: string
  suffixIcon             ?: string

  // Input properties
  type                   ?: TextType
  maxlength              ?: number
  minlength              ?: number
  autocomplete           ?: string

  // States
  isInvalid              ?: boolean
  disabled               ?: boolean
  readonly               ?: boolean
  required               ?: boolean
  isLoading              ?: boolean

  // Messages
  errorMessage           ?: string
  helperText             ?: string

  // Features
  clearable              ?: boolean
  showCounter            ?: boolean
  debounce              ?: number
}

export interface ITextinputEmits {
  (event: 'update:modelValue', value: string | number): void
  (event: 'focus', focusEvent: FocusEvent): void
  (event: 'blur', focusEvent: FocusEvent): void
  (event: 'input', inputEvent: Event): void
  (event: 'change', changeEvent: Event): void
  (event: 'clear'): void
  (event: 'keydown', keyEvent: KeyboardEvent): void
  (event: 'keyup', keyEvent: KeyboardEvent): void
}

type SizeType = 'sm' | 'md' | 'lg'
type TextType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'

