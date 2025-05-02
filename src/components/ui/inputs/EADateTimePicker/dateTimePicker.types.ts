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
}
