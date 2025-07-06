export interface ITimePickerProps {
  placeholder?: string;
  label?: string;
  size?: 'small' | 'normal' | 'large';
  /**
   * Minimum selectable time (in 24h format, e.g. '09:00')
   */
  minTime?: string;
  /**
   * Maximum selectable time (in 24h format, e.g. '18:00')
   */
  maxTime?: string;
  /**
   * Time interval in minutes for minutes dropdown
   * Default: 5 (shows times like 00:00, 00:05, 00:10, etc.)
   */
  minuteInterval?: number;
  /**
   * Panel width for the dropdown (in pixels)
   * Default: 200
   */
  panelWidth?: number;
  /**
   * Mark field as required (shows red asterisk)
   */
  required?: boolean;
  /**
   * Disable the time picker
   */
  disabled?: boolean;
  /**
   * Show error state with red border
   */
  error?: boolean;
  /**
   * Show invalid state with red border (alias for error)
   */
  isInvalid?: boolean;
  /**
   * Error message to display below the input
   */
  errorMessage?: string;
}
