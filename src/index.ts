// Form Components
export { default as EaButton } from './components/ui/form/EaButton/index.vue'
export { default as EaTextInput } from './components/ui/form/EaTextInput/index.vue'
export { default as EaSelect } from './components/ui/form/EaSelect/EaSelect.vue'
export { default as EaCheckbox } from './components/ui/form/EaCheckbox/EaCheckbox.vue'
export { default as EaRadioButtons } from './components/ui/form/EaRadioButtons/EARadioButtons.vue'
export { default as EaDatePicker } from './components/ui/form/EaDatePicker/datePicker.vue'
export { default as EaTimePicker } from './components/ui/form/EaTimePicker/index.vue'
export { default as EaDateTimePicker } from './components/ui/form/EaDateTimePicker/index.vue'
export { default as EaAutocomplete } from './components/ui/form/EaAutocomplete/index.vue'
export { default as EaMultiselect } from './components/ui/form/EaMultiselect/index.vue'
export { default as EaBadge } from './components/ui/form/EaBadge/EaBadge.vue'
export { default as EaUploadImage } from './components/ui/form/EaUploadImage/EaUploadImage.vue'
export { default as EaDropdown } from './components/ui/form/dropdown/index.vue'

// Overlay Components
export { default as EaModal } from './components/ui/overlay/EaModal/index.vue'
export { default as EaDialog } from './components/ui/overlay/EaDialog/EaDialog.vue'
export { default as EaDrawer } from './components/ui/overlay/EaDrawer/index.vue'
export { default as EaTooltip } from './components/ui/overlay/EaTooltip/EaTooltip.vue'
export { default as EaConfirmPopup } from './components/ui/overlay/EaConfirmPopup/EaConfirmPopup.vue'

// Popover - has its own index.ts
export { default as EaPopover, usePopover } from './components/ui/overlay/EaPopover/index'

// Message Components
export { default as EaMessage } from './components/ui/messages/EaMessage/EaMessage.vue'
export { default as EaToast } from './components/ui/messages/EaToast/EaToast.vue'

// Panel Components
export { default as EaCard } from './components/ui/panels/EaCard/EaCard.vue'
export { default as EaTabs } from './components/ui/panels/EaTabs/EaTabs.vue'
export { default as EaAccordion } from './components/ui/panels/EaAccordion/EaAccordion.vue'

// File Management
export { default as EaFileManagement } from './components/ui/file-management/index.vue'
export { default as FileItem } from './components/ui/file-management/FileItem.vue'

// General Components
// export { default as EaIcon } from './components/ui/EaIcon.vue'
export { default as CodeBlock } from './components/general/CodeBlock.vue'

// Composables
export { useBreakpoint } from './composables/useBreakpoint'
export { useDrawer } from './composables/useDrawer'
export { useScrollReveal } from './composables/useScrollReveal'
export { useTooltip } from './composables/useTooltip'
export { useFileManagement } from './components/ui/file-management/useFileManagement'

// Toast composable
export { useToast, type ToastMessage } from './components/ui/messages/EaToast/useToast'

// Modal composable
export { useModal } from './components/ui/overlay/EaModal/useModal'

// Dialog composable
export { useDialog } from './components/ui/overlay/EaDialog/useDialog'

// Form composables
export { default as useDropdown } from './components/ui/form/dropdown/useDropdown'
export { default as useAutocomplate } from './components/ui/form/EaAutocomplete/useAutocomplate'
export { default as useMultiselect } from './components/ui/form/EaMultiselect/useMultiselect'
export { default as useSelect } from './components/ui/form/EaSelect/useSelect'
export { default as useRadioButtons } from './components/ui/form/EaRadioButtons/useRadioButtons'
export { default as useDatePicker } from './components/ui/form/EaDatePicker/useDatePicker'
export { default as useUploadImage } from './components/ui/form/EaUploadImage/useUploadImage'

// Directives
export { default as vClickOutside } from './directives/clickOutside'
export { default as vScrollOnReveal } from './directives/scrollOnReveal'

// Types
export type * from './types/Global.types'

// Form Types
export type {
  IButtonProps
} from './components/ui/form/EaButton/button.types'

export type {
  ITextinputProps as ITextInputProps,
  ITextinputEmits as ITextInputEmits
} from './components/ui/form/EaTextInput/textinput.types'

export type {
  ISelectProps,
  OptionsType as SelectOptionsType
} from './components/ui/form/EaSelect/select.types'

export type {
  ICheckboxProps
} from './components/ui/form/EaCheckbox/checkbox.types'

export type {
  IRadioButtonsProps
} from './components/ui/form/EaRadioButtons/EARadioButtons.types'

export type {
  IDatepickerProps as IDatePickerProps
} from './components/ui/form/EaDatePicker/datepicker.types'

export type {
  ITimePickerProps
} from './components/ui/form/EaTimePicker/timePicker.types'

export type {
  IDateTimePickerProps
} from './components/ui/form/EaDateTimePicker/dateTimePicker.types'

export type {
  ISelectProps as IAutocompleteProps,
  OptionType as AutocompleteOptionType
} from './components/ui/form/EaAutocomplete/autocomplete.types'

export type {
  IMultiselectProps,
  OptionsType as MultiselectOptionsType
} from './components/ui/form/EaMultiselect/multiselect.types'

export type {
  IBadgeProps
} from './components/ui/form/EaBadge/badge.types'

export type {
  IUploadImageProps
} from './components/ui/form/EaUploadImage/uploadImage.types'

export type {
  IDropdownProps
} from './components/ui/form/dropdown/dropdown.types'

// Overlay Types
export type {
  IPopoverProps,
  IPopoverPosition
} from './components/ui/overlay/EaPopover/popover.types'

// File Management Types
export type * from './components/ui/file-management/file-management.types'
