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
  panelWidth?: number;
}
