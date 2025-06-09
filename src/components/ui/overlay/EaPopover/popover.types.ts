export interface IPopoverProps {
  trigger?: 'click' | 'hover'
  placement?: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end'
  offset?: number
  arrow?: boolean
  disabled?: boolean
  closeOnClickOutside?: boolean
  closeOnEscape?: boolean
  closeOnScroll?: boolean
  showDelay?: number
  hideDelay?: number
  width?: number | string
  maxWidth?: number | string
  zIndex?: number
}

export interface IPopoverPosition {
  x: number
  y: number
  arrowX?: number
  arrowY?: number
  placement: string
}
