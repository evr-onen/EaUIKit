export interface IDropdownProps{
  panelHeight      ?: number
  panelWidth       ?: number
  options          ?: OptionsType[]
  closeOnSelect    ?: boolean
  typeCode         ?: string
  panelProc        ?: number
  resultCount      ?: number
}

type OptionsType = {
  [key:string]: string | number | unknown
}
