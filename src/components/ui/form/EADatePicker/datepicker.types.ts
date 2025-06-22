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
   * Format string for output value
   * If provided, returns formatted string instead of Date object
   * Example: 'DD/MM/YYYY' returns '25/12/2023'
   * Default: undefined (returns Date object)
   */
  valueFormat?: string;
  panelWidth?: number;
  required?: boolean;
  /**
   * Disable the date picker
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
