export interface IDatepickerProps {
  placeholder?: string;
  label?: string;
  size?: 'small' | 'normal' | 'large';
  format?: string;
  /**
   * Enables date range selection mode.
   * When true, modelValue is expected to be an array of two dates [startDate, endDate].
   */
  range?: boolean;
  /**
   * The format to use for input masking and parsing.
   * Examples: 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'
   * Default: 'DD/MM/YYYY'
   */
  dateFormat?: string;
  /**
   * Whether to show the time picker component.
   * Default: false (date only)
   */
  showTimePicker?: boolean;
  /**
   * Time interval in minutes for the time picker
   * Default: 5 (shows times like 00:00, 00:05, 00:10, etc.)
   */
  timeInterval?: number;
  /**
   * Minimum selectable time (in 24h format, e.g. '09:00')
   */
  minTime?: string;
  /**
   * Maximum selectable time (in 24h format, e.g. '18:00')
   */
  maxTime?: string;
}

export interface IDateTimePickerProps {
  /**
   * Time interval in minutes for the time picker
   * Default: 5 (shows times like 00:00, 00:05, 00:10, etc.)
   */
  minuteInterval?: number;
  /**
   * Label for the date time picker
   */
  label?: string;
  /**
   * Size of the date time picker
   */
  size?: 'small' | 'normal' | 'large';
  /**
   * Mark field as required (shows red asterisk)
   */
  required?: boolean;
  /**
   * Disable the date time picker
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
  /**
   * Format string for output value
   * If provided, returns formatted string instead of Date object
   * Example: 'DD/MM/YYYY HH:mm' returns '25/12/2023 14:30'
   * Default: undefined (returns Date object)
   */
  valueFormat?: string;
  /**
   * Date format for display in DatePicker component
   * Example: 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD'
   * Default: 'DD/MM/YYYY'
   */
  dateFormat?: string;
  /**
   * Panel width for the time picker dropdown (in pixels)
   * Default: 200
   */
  timePanelWidth?: number;
}
