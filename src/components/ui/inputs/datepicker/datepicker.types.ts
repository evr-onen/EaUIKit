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
}
