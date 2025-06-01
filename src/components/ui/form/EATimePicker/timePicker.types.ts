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
}
