export interface ITextinputProps{
  size                   ?: SizeType
  label                  ?: string
  placeholder            ?: string
  classLabel             ?: string
  classInput             ?: string
  classInputContainer    ?: string
  classPrefixIcon        ?: string
  classSuffixIcon        ?: string
  prefixIcon             ?: string
  suffixIcon             ?: string
  type                   ?: TextType
  isInvalid              ?: boolean
}

type SizeType = 'sm' | 'md' | 'lg'
type TextType = 'text' | 'number'

