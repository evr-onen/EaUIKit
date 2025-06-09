export interface ITextinputProps{
  // Basic props
  size                   ?: SizeType
  label                  ?: string
  placeholder            ?: string
  modelValue            ?: string | number

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
  loading                ?: boolean

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
  (event: 'focus', event: FocusEvent): void
  (event: 'blur', event: FocusEvent): void
  (event: 'input', event: Event): void
  (event: 'change', event: Event): void
  (event: 'clear'): void
  (event: 'keydown', event: KeyboardEvent): void
  (event: 'keyup', event: KeyboardEvent): void
}

type SizeType = 'sm' | 'md' | 'lg'
type TextType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search'

