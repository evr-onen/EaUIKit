import { computed, ref, type Ref } from "vue";
import type { IDatepickerProps } from "./datepicker.types";

const useDatePicker = (props: IDatepickerProps, modelValue: Ref<Date | [Date, Date] | null>) => {
  //vars
  const tempRangeStart = ref<Date | null>(null);
  const isRangeSelectionActive = ref(false);
  const hoverDate = ref<Date | null>(null);
  const inputValue = ref('');
  const currentDate = ref(new Date());

  //computed properties
  const prevMonth = () => {
    currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1);
  };

  const nextMonth = () => {
    currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1);
  };

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const calendarDays = computed(() => {
    const year = currentYear.value;
    const month = currentMonth.value;

    const firstDayOfMonth = new Date(year, month, 1);
    let dayOfWeek = firstDayOfMonth.getDay();
    dayOfWeek = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = dayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonthLastDay - i);
      days.push({
        date,
        dayNumber: prevMonthLastDay - i,
        currentMonth: false
      });
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      const date = new Date(year, month, i);
      days.push({
        date,
        dayNumber: i,
        currentMonth: true
      });
    }

    const remainingDays = 42 - days.length; // 6x7 grid
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      days.push({
        date,
        dayNumber: i,
        currentMonth: false
      });
    }

    return days;
  });

  const currentYear = computed(() => currentDate.value.getFullYear());
  const currentMonth = computed(() => currentDate.value.getMonth());
  const currentMonthName = computed(() => {
    return new Date(currentYear.value, currentMonth.value).toLocaleString('tr-TR', { month: 'long' });
  });


  const displayValue = computed((): string => {
    if (!modelValue.value) return inputValue.value;

    if (props.range && Array.isArray(modelValue.value)) {
      const [start, end] = modelValue.value;
      if (!start) return inputValue.value;
      if (!end) return formatDate(start);
      return `${formatDate(start)} - ${formatDate(end)}`;
    }

    if (!Array.isArray(modelValue.value)) {
      return formatDate(modelValue.value);
    }

    return inputValue.value;
  });

  const hasValue = computed((): boolean => {
    return modelValue.value !== null;
  });




  const formatDate = (date: Date): string => {
    if (!date) return '';

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    let result = props.dateFormat!;
    result = result.replace('DD', day);
    result = result.replace('MM', month);
    result = result.replace('YYYY', year.toString());

    return result;
  };

  const validateAndCorrectDate = (day: number, month: number, year: number): [number, number, number] => {
    const correctedMonth = Math.min(Math.max(1, month), 12);
    const daysInMonth = new Date(year, correctedMonth, 0).getDate();
    const correctedDay = Math.min(Math.max(1, day), daysInMonth);

    return [correctedDay, correctedMonth, year];
  };

  const parseDate = (dateStr: string): Date | null => {
    if (!dateStr) return null;
    const format = props.dateFormat!;
    let day = 1, month = 0, year = new Date().getFullYear();
    if (format.includes('DD')) {
      const dayIndex = format.indexOf('DD');
      day = parseInt(dateStr.substring(dayIndex, dayIndex + 2));
    }

    if (format.includes('MM')) {
      const monthIndex = format.indexOf('MM');
      month = parseInt(dateStr.substring(monthIndex, monthIndex + 2)) - 1; // JS months are 0-indexed
    }

    if (format.includes('YYYY')) {
      const yearIndex = format.indexOf('YYYY');
      year = parseInt(dateStr.substring(yearIndex, yearIndex + 4));
    }

    if (isNaN(day) || isNaN(month) || isNaN(year)) return null;
    const [correctedDay, correctedMonth, correctedYear] = validateAndCorrectDate(day, month + 1, year);

    return createDateAtNoonUTC(new Date(correctedYear, correctedMonth - 1, correctedDay));
  };

  const parseDateRange = (rangeStr: string): [Date, Date] | null => {
    if (!rangeStr.includes('-')) return null;
    const [startStr, endStr] = rangeStr.split('-').map(s => s.trim());
    const startDate = parseDate(startStr);
    const endDate = parseDate(endStr);
    if (!startDate || !endDate) return null;

    return [startDate, endDate];
  };

  const applyMask = (value: string): string => {
    const format = props.dateFormat!;
    let result = '';
    let valueIndex = 0;

    for (let i = 0; i < format.length; i++) {
      if (valueIndex >= value.length) break;

      const formatChar = format[i];
      const valueChar = value[valueIndex];

      if (formatChar === 'D' || formatChar === 'M' || formatChar === 'Y') {
        if (/\d/.test(valueChar)) {
          result += valueChar;
          valueIndex++;
        } else {
          valueIndex++;
        }
      } else {
        result += formatChar;
        if (valueChar === formatChar) {
          valueIndex++;
        }
      }
    }

    return result;
  };

  const applyRangeMask = (value: string): string => {
    if (!value.includes('-')) {
      const maskedValue = applyMask(value);
      if (maskedValue.length === props.dateFormat!.length) {
        return `${maskedValue} - `;
      }

      return maskedValue;
    }

    const [startStr, ...endParts] = value.split('-');
    const maskedStart = applyMask(startStr.trim());

    if (endParts.length > 0) {
      const endStr = endParts.join('-').trim(); // Rejoin in case there were multiple dashes
      const maskedEnd = applyMask(endStr);
      return `${maskedStart} - ${maskedEnd}`;
    }

    return `${maskedStart} -`;
  };

// for ranged calendar betweeb dates styles
  const positionCursorAtEnd = (input: HTMLInputElement) => {
    setTimeout(() => {
      const len = input.value.length;
      input.setSelectionRange(len, len);
    }, 0);
  };

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    if (props.range) {
      const oldValue = inputValue.value;
      inputValue.value = applyRangeMask(value);
      target.value = inputValue.value;

      if (oldValue.length < props.dateFormat!.length &&
          inputValue.value.length > props.dateFormat!.length &&
          inputValue.value.includes(' - ')) {
        const newPosition = inputValue.value.indexOf('-') + 2;
        setTimeout(() => {
          target.setSelectionRange(newPosition, newPosition);
        }, 0);
      } else {
        if (oldValue.length !== inputValue.value.length) {
          positionCursorAtEnd(target);
        }
      }

      if (inputValue.value.includes('-')) {
        const [startStr, endStr] = inputValue.value.split('-').map(s => s.trim());
        if (startStr.length === props.dateFormat!.length &&
            endStr && endStr.length === props.dateFormat!.length) {
          validateInput();
        }
      }
    } else {
      inputValue.value = applyMask(value);
      target.value = inputValue.value;

      if (inputValue.value.length === props.dateFormat!.length) {
        validateInput();
      }
    }
  };

  const validateInput = () => {
    if (!inputValue.value) {
      modelValue.value = null;
      return;
    }

    if (props.range) {
      const dateRange = parseDateRange(inputValue.value);
      if (dateRange) {
        modelValue.value = dateRange;
        // Update the input with formatted date range
        inputValue.value = `${formatDate(dateRange[0])} - ${formatDate(dateRange[1])}`;

        // Update calendar view to show first date in the range
        currentDate.value = new Date(dateRange[0].getFullYear(), dateRange[0].getMonth(), 1);
      }
    } else {
      const date = parseDate(inputValue.value);
      if (date) {
        modelValue.value = date;
        inputValue.value = formatDate(date);

        currentDate.value = new Date(date.getFullYear(), date.getMonth(), 1);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      validateInput();
    }
  };


  const normalizeDate = (date: Date): Date => {
    return createDateAtNoonUTC(date);
  };

  const isSameDate = (date1: Date, date2: Date): boolean => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const getDayClasses = (date: Date, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) {
      return { 'disabled': true };
    }

    const classes: Record<string, boolean> = {
      'disabled': false,
      'today': isSameDate(date, new Date())
    };

    if (!props.range && modelValue.value && !Array.isArray(modelValue.value)) {
      classes['selected'] = isSameDate(date, modelValue.value);
    }

    if (props.range && Array.isArray(modelValue.value)) {
      const [start, end] = modelValue.value;

      if (start && isSameDate(date, start)) {
        classes['range-start'] = true;
        classes['selected'] = true;
      }

      if (end && isSameDate(date, end)) {
        classes['range-end'] = true;
        classes['selected'] = true;
      }

      if (start && end) {
        const dateTime = normalizeDate(date).getTime();
        const startTime = normalizeDate(start).getTime();
        const endTime = normalizeDate(end).getTime();

        if (dateTime > startTime && dateTime < endTime) {
          classes['in-range'] = true;
        }
      }
    }

    if (props.range && isRangeSelectionActive.value && tempRangeStart.value) {
      const start = tempRangeStart.value;

      if (isSameDate(date, start)) {
        classes['range-start'] = true;
        classes['selected'] = true;
      }

      if (hoverDate.value) {
        const hoveredTime = normalizeDate(hoverDate.value).getTime();
        const startTime = normalizeDate(start).getTime();
        const dateTime = normalizeDate(date).getTime();

        if (startTime < hoveredTime && dateTime > startTime && dateTime <= hoveredTime) {
          classes['hover-range'] = true;
        }

        if (startTime > hoveredTime && dateTime >= hoveredTime && dateTime < startTime) {
          classes['hover-range'] = true;
        }

        if (isSameDate(date, hoverDate.value)) {
          classes['hover-end'] = true;
        }
      }
    }

    return classes;
  };

  const handleRangeSelection = (date: Date, closePanel: () => void) => {
    const noonDate = createDateAtNoonUTC(date);

    if (!isRangeSelectionActive.value) {
      tempRangeStart.value = noonDate;
      isRangeSelectionActive.value = true;
      modelValue.value = [noonDate, null] as unknown as [Date, Date];
      inputValue.value = formatDate(noonDate);
    } else {
      const start = tempRangeStart.value;

      if (start) {
        let rangeStart = start;
        let rangeEnd = noonDate;

        if (noonDate.getTime() < start.getTime()) {
          rangeStart = noonDate;
          rangeEnd = start;
        }

        modelValue.value = [rangeStart, rangeEnd] as [Date, Date];
        inputValue.value = `${formatDate(rangeStart)} - ${formatDate(rangeEnd)}`;
      }

      tempRangeStart.value = null;
      isRangeSelectionActive.value = false;

      closePanel();
    }
  };

  const createDateAtNoonUTC = (date: Date): Date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const utcDate = new Date(Date.UTC(year, month, day, 12, 0, 0, 0));
    return utcDate;
  };

  const handleDateSelection = (date: Date, isCurrentMonth: boolean, closePanel: () => void) => {
    if (!isCurrentMonth) return;

    if (props.range) {
      handleRangeSelection(date, closePanel);
    } else {
      const noonDate = createDateAtNoonUTC(date);
      modelValue.value = noonDate;
      inputValue.value = formatDate(noonDate);
      closePanel()
    }
  };

  const selectToday = () => {
    const now = new Date();

    const noonToday = createDateAtNoonUTC(now);

    if (props.range) {
      modelValue.value = [noonToday, noonToday] as [Date, Date];
      inputValue.value = `${formatDate(noonToday)} - ${formatDate(noonToday)}`;
    } else {
      modelValue.value = noonToday;
      inputValue.value = formatDate(noonToday);
    }

    currentDate.value = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );
  };

  const clearDate = () => {
    modelValue.value = null;
    inputValue.value = '';
    tempRangeStart.value = null;
    isRangeSelectionActive.value = false;
  };

  const handleHover = (date: Date) => {
    if (props.range && isRangeSelectionActive.value && tempRangeStart.value) {
      hoverDate.value = createDateAtNoonUTC(date);
    }
  };

  const resetHoverState = () => {
    hoverDate.value = null;
  };
  return {
    displayValue,
    hasValue,
    currentDate,
    currentYear,
    currentMonthName,
    handleInputChange,
    handleKeyDown,
    prevMonth,
    nextMonth,
    daysOfWeek,
    calendarDays,
    getDayClasses,
    handleRangeSelection,
    handleDateSelection,
    selectToday,
    clearDate,
    handleHover,
    resetHoverState,
    validateInput
  }
}

export default useDatePicker;