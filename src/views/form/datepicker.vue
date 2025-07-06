<template>
  <div class="datepicker-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaDatePicker Component</h1>
        <p class="demo-description">
          A comprehensive and flexible date picker component with single date selection,
          date range selection, keyboard navigation, and customizable formatting options.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different date picker variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Single Date</h4>
            <p>Basic date selection with default settings</p>
            <EaDatePicker
              v-model="singleDate"
              label="Select Date"
              placeholder="Choose a date"
            />
            <div class="result-display">
              <strong>Selected:</strong> {{ formatDate(singleDate) }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Date Range</h4>
            <p>Select start and end dates for a period</p>
            <EaDatePicker
              v-model="dateRange"
              label="Select Date Range"
              placeholder="Choose date range"
              range
            />
            <div class="result-display">
              <strong>Range:</strong> {{ formatDateRange(dateRange) }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Required Field</h4>
            <p>Date picker with required validation</p>
            <EaDatePicker
              v-model="requiredDate"
              label="Birth Date"
              placeholder="Select your birth date"
              required
            />
            <div class="result-display">
              <strong>Value:</strong> {{ formatDate(requiredDate) }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Custom Format</h4>
            <p>US date format (MM/DD/YYYY)</p>
            <EaDatePicker
              v-model="formatUS"
              label="US Format"
              placeholder="MM/DD/YYYY"
              date-format="MM/DD/YYYY"
            />
            <div class="result-display">
              <strong>Display:</strong> {{ formatUS }}
            </div>
          </div>
        </div>

        <CodeBlock
          :code="quickDemoCode"
          title="Quick Demo Usage"
        />
      </section>

      <!-- Size Variants -->
      <section class="demo-section">
        <h2>Size Variants</h2>
        <p class="section-description">
          EaDatePicker supports three size options: small, normal (default), and large.
        </p>

        <div class="demo-group">
          <div class="size-demo">
            <h4>Small</h4>
            <EaDatePicker
              v-model="sizeSmall"
              label="Small Date Picker"
              placeholder="Small size"
              size="small"
            />
          </div>

          <div class="size-demo">
            <h4>Normal (Default)</h4>
            <EaDatePicker
              v-model="sizeNormal"
              label="Normal Date Picker"
              placeholder="Normal size"
              size="normal"
            />
          </div>

          <div class="size-demo">
            <h4>Large</h4>
            <EaDatePicker
              v-model="sizeLarge"
              label="Large Date Picker"
              placeholder="Large size"
              size="large"
            />
          </div>
        </div>

        <CodeBlock
          :code="sizeVariantsCode"
          title="Size Variants Example"
        />
      </section>

      <!-- Date Formats -->
      <section class="demo-section">
        <h2>Date Formats</h2>
        <p class="section-description">
          Customize how dates are displayed and formatted in the input field.
        </p>

        <div class="demo-group">
          <div class="format-demo">
            <h4>DD/MM/YYYY (Default)</h4>
            <EaDatePicker
              v-model="formatDefault"
              label="Default Format"
              placeholder="DD/MM/YYYY"
              date-format="DD/MM/YYYY"
            />
            <div class="format-info">European format</div>
          </div>

          <div class="format-demo">
            <h4>MM/DD/YYYY</h4>
            <EaDatePicker
              v-model="formatUS"
              label="US Format"
              placeholder="MM/DD/YYYY"
              date-format="MM/DD/YYYY"
            />
            <div class="format-info">American format</div>
          </div>

          <div class="format-demo">
            <h4>YYYY-MM-DD</h4>
            <EaDatePicker
              v-model="formatISO"
              label="ISO Format"
              placeholder="YYYY-MM-DD"
              date-format="YYYY-MM-DD"
            />
            <div class="format-info">ISO 8601 format</div>
          </div>
        </div>

        <CodeBlock
          :code="dateFormatsCode"
          title="Date Formats Example"
        />
      </section>

      <!-- Value Formats -->
      <section class="demo-section">
        <h2>Value Formats</h2>
        <p class="section-description">
          Control the output format of the selected date - return Date objects or formatted strings.
        </p>

        <div class="value-formats">
          <div class="value-demo">
            <h4>Date Object (Default)</h4>
            <EaDatePicker
              v-model="valueDefault"
              label="Returns Date Object"
              placeholder="Select date"
            />
            <div class="value-info">
              <p><strong>Type:</strong> {{ typeof valueDefault }}</p>
              <p><strong>Value:</strong> {{ valueDefault }}</p>
            </div>
          </div>

          <div class="value-demo">
            <h4>String Output</h4>
            <EaDatePicker
              v-model="valueString"
              label="Returns String"
              placeholder="Select date"
              value-format="DD/MM/YYYY"
            />
            <div class="value-info">
              <p><strong>Type:</strong> {{ typeof valueString }}</p>
              <p><strong>Value:</strong> {{ valueString }}</p>
            </div>
          </div>

          <div class="value-demo">
            <h4>Range with String Output</h4>
            <EaDatePicker
              v-model="valueRangeString"
              label="Range as Strings"
              placeholder="Select date range"
              range
              value-format="DD/MM/YYYY"
            />
            <div class="value-info">
              <p><strong>Type:</strong> {{ Array.isArray(valueRangeString) ? 'Array' : typeof valueRangeString }}</p>
              <p><strong>Value:</strong> {{ JSON.stringify(valueRangeString) }}</p>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="valueFormatsCode"
          title="Value Formats Example"
        />
      </section>

      <!-- Range Selection -->
      <section class="demo-section">
        <h2>Date Range Selection</h2>
        <p class="section-description">
          Select date ranges for periods, vacations, project timelines, and more.
        </p>

        <div class="range-demos">
          <div class="range-demo">
            <h4>Vacation Dates</h4>
            <EaDatePicker
              v-model="vacationRange"
              label="Vacation Period"
              placeholder="Select vacation dates"
              range
            />
            <div class="range-info">
              <p><strong>Duration:</strong> {{ calculateDuration(vacationRange) }}</p>
              <p><strong>Dates:</strong> {{ formatDateRange(vacationRange) }}</p>
            </div>
          </div>

          <div class="range-demo">
            <h4>Project Timeline</h4>
            <EaDatePicker
              v-model="projectRange"
              label="Project Duration"
              placeholder="Select project timeline"
              range
            />
            <div class="range-info">
              <p><strong>Duration:</strong> {{ calculateDuration(projectRange) }}</p>
              <p><strong>Dates:</strong> {{ formatDateRange(projectRange) }}</p>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="rangeSelectionCode"
          title="Range Selection Example"
        />
      </section>

      <!-- States and Validation -->
      <section class="demo-section">
        <h2>States and Validation</h2>
        <p class="section-description">
          Handle different states including error, disabled, and validation scenarios.
        </p>

        <div class="states-grid">
          <div class="state-demo">
            <h4>Error State</h4>
            <EaDatePicker
              v-model="errorDate"
              label="Invalid Date"
              placeholder="This field has an error"
              error
              error-message="Please select a valid date"
            />
          </div>

          <div class="state-demo">
            <h4>Disabled State</h4>
            <EaDatePicker
              v-model="disabledDate"
              label="Disabled Date"
              placeholder="Cannot select date"
              disabled
            />
          </div>

          <div class="state-demo">
            <h4>Required Field</h4>
            <EaDatePicker
              v-model="requiredErrorDate"
              label="Required Field"
              placeholder="This field is required"
              required
              :error="!requiredErrorDate"
              error-message="This field is required"
            />
          </div>

          <div class="state-demo">
            <h4>Range with Validation</h4>
            <EaDatePicker
              v-model="rangeErrorDate"
              label="Date Range"
              placeholder="Select date range"
              range
              :is-invalid="isRangeInvalid"
              error-message="End date must be after start date"
            />
          </div>
        </div>

        <CodeBlock
          :code="statesValidationCode"
          title="States and Validation Example"
        />
      </section>

      <!-- Interactive Features -->
      <section class="demo-section">
        <h2>Interactive Features</h2>
        <p class="section-description">
          Explore keyboard navigation, today button, clear functionality, and other interactive features.
        </p>

        <div class="interactive-demos">
          <div class="interactive-demo">
            <h4>Today Button</h4>
            <EaDatePicker
              v-model="todayExample"
              label="Quick Today Selection"
              placeholder="Click Today button in calendar"
            />
            <div class="feature-info">
              <p>Click "Today" button in the calendar panel for quick selection</p>
              <p><strong>Selected:</strong> {{ formatDate(todayExample) }}</p>
            </div>
          </div>

          <div class="interactive-demo">
            <h4>Clear Button</h4>
            <EaDatePicker
              v-model="clearExample"
              label="Clearable Date"
              placeholder="Select date then clear"
            />
            <div class="feature-info">
              <p>Clear button appears when a date is selected</p>
              <p><strong>Value:</strong> {{ clearExample ? formatDate(clearExample) : 'Empty' }}</p>
            </div>
          </div>

          <div class="interactive-demo">
            <h4>Keyboard Input</h4>
            <EaDatePicker
              v-model="keyboardExample"
              label="Keyboard Navigation"
              placeholder="Type date or use calendar"
            />
            <div class="feature-info">
              <p>Try typing: 25/12/2024</p>
              <p><strong>Value:</strong> {{ formatDate(keyboardExample) }}</p>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="interactiveFeaturesCode"
          title="Interactive Features Example"
        />
      </section>

      <!-- Props Documentation -->
      <section class="demo-section">
        <h2>Props</h2>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>modelValue</code></td>
                <td>Date | [Date, Date] | string | [string, string] | null</td>
                <td><code>null</code></td>
                <td>Selected date(s) - single date or date range</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td>string</td>
                <td><code>undefined</code></td>
                <td>Label text displayed above the picker</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td>string</td>
                <td><code>'Select date'</code></td>
                <td>Placeholder text in the input field</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'small' | 'normal' | 'large'</td>
                <td><code>'normal'</code></td>
                <td>Size variant of the date picker</td>
              </tr>
              <tr>
                <td><code>range</code></td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Enable date range selection</td>
              </tr>
              <tr>
                <td><code>dateFormat</code></td>
                <td>string</td>
                <td><code>'DD/MM/YYYY'</code></td>
                <td>Date display format in input field</td>
              </tr>
              <tr>
                <td><code>valueFormat</code></td>
                <td>string</td>
                <td><code>undefined</code></td>
                <td>Output value format - returns string if provided, Date object if not</td>
              </tr>
              <tr>
                <td><code>panelWidth</code></td>
                <td>number</td>
                <td><code>300</code></td>
                <td>Width of the calendar panel in pixels</td>
              </tr>
              <tr>
                <td><code>required</code></td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Mark field as required (shows red asterisk)</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Disable the date picker</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Show error state with red border</td>
              </tr>
              <tr>
                <td><code>isInvalid</code></td>
                <td>boolean</td>
                <td><code>false</code></td>
                <td>Show invalid state with red border</td>
              </tr>
              <tr>
                <td><code>errorMessage</code></td>
                <td>string</td>
                <td><code>undefined</code></td>
                <td>Error message to display below the input</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Usage Examples -->
      <section class="demo-section">
        <h2>Complete Usage Examples</h2>
        <p class="section-description">
          Comprehensive examples showing different implementation patterns and advanced features.
        </p>

        <div class="example-tabs">
          <h3>Basic Implementation</h3>
          <CodeBlock
            :code="basicImplementationCode"
            title="Basic Implementation"
          />

          <h3>Advanced Form Integration</h3>
          <CodeBlock
            :code="advancedFormCode"
            title="Advanced Form Integration"
          />

          <h3>Custom Validation</h3>
          <CodeBlock
            :code="customValidationCode"
            title="Custom Validation Example"
          />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import EaDatePicker from '@/components/ui/form/EaDatePicker/datePicker.vue';
import CodeBlock from '@/components/general/CodeBlock.vue';

// Quick Demo
const singleDate = ref<Date | null>(null);
const dateRange = ref<[Date, Date] | null>(null);
const requiredDate = ref<Date | null>(null);
const formatUS = ref<Date | null>(null);

// Size variants
const sizeSmall = ref<Date | null>(null);
const sizeNormal = ref<Date | null>(null);
const sizeLarge = ref<Date | null>(null);

// Date formats
const formatDefault = ref<Date | null>(null);
const formatISO = ref<Date | null>(null);

// Value formats
const valueDefault = ref<Date | null>(null);
const valueString = ref<string | null>(null);
const valueRangeString = ref<[string, string] | null>(null);

// Range selection
const vacationRange = ref<[Date, Date] | null>(null);
const projectRange = ref<[Date, Date] | null>(null);

// States and validation
const errorDate = ref<Date | null>(null);
const disabledDate = ref<Date | null>(null);
const requiredErrorDate = ref<Date | null>(null);
const rangeErrorDate = ref<[Date, Date] | null>(null);

// Interactive features
const todayExample = ref<Date | null>(null);
const clearExample = ref<Date | null>(new Date());
const keyboardExample = ref<Date | null>(null);

// Computed
const isRangeInvalid = computed(() => {
  if (!rangeErrorDate.value || !Array.isArray(rangeErrorDate.value)) return false;
  const [start, end] = rangeErrorDate.value;
  return start && end && start >= end;
});

// Helper functions
const formatDate = (date: Date | null): string => {
  if (!date) return 'Not selected';
  return date.toLocaleDateString('en-GB');
};

const formatDateRange = (range: [Date, Date] | null): string => {
  if (!range || !Array.isArray(range) || range.length !== 2) return 'Not selected';
  return `${formatDate(range[0])} - ${formatDate(range[1])}`;
};

const calculateDuration = (range: [Date, Date] | null): string => {
  if (!range || !Array.isArray(range) || range.length !== 2) return 'Not selected';
  const diffTime = Math.abs(range[1].getTime() - range[0].getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
};

// Code examples
const quickDemoCode = `<template>
  <!-- Single Date -->
  <EaDatePicker
    v-model="singleDate"
    label="Select Date"
    placeholder="Choose a date"
  />

  <!-- Date Range -->
  <EaDatePicker
    v-model="dateRange"
    label="Select Date Range"
    placeholder="Choose date range"
    range
  />

  <!-- Required Field -->
  <EaDatePicker
    v-model="requiredDate"
    label="Birth Date"
    placeholder="Select your birth date"
    required
  />
</template>

import { ref } from 'vue';
import EaDatePicker from '@/components/ui/form/EaDatePicker/datePicker.vue';

const singleDate = ref<Date | null>(null);
const dateRange = ref<[Date, Date] | null>(null);
const requiredDate = ref<Date | null>(null);`;

const sizeVariantsCode = `<template>
  <EaDatePicker
    v-model="dateSmall"
    label="Small Date Picker"
    size="small"
  />

  <EaDatePicker
    v-model="dateNormal"
    label="Normal Date Picker"
    size="normal"
  />

  <EaDatePicker
    v-model="dateLarge"
    label="Large Date Picker"
    size="large"
  />
</template>

const dateSmall = ref<Date | null>(null);
const dateNormal = ref<Date | null>(null);
const dateLarge = ref<Date | null>(null);`;

const dateFormatsCode = `<template>
  <!-- European Format (Default) -->
  <EaDatePicker
    v-model="dateEU"
    label="European Format"
    date-format="DD/MM/YYYY"
  />

  <!-- American Format -->
  <EaDatePicker
    v-model="dateUS"
    label="American Format"
    date-format="MM/DD/YYYY"
  />

  <!-- ISO Format -->
  <EaDatePicker
    v-model="dateISO"
    label="ISO Format"
    date-format="YYYY-MM-DD"
  />
</template>

const dateEU = ref<Date | null>(null);
const dateUS = ref<Date | null>(null);
const dateISO = ref<Date | null>(null);`;

const valueFormatsCode = `<template>
  <!-- Returns Date Object (Default) -->
  <EaDatePicker
    v-model="dateObject"
    label="Date Object Output"
  />

  <!-- Returns Formatted String -->
  <EaDatePicker
    v-model="dateString"
    label="String Output"
    value-format="DD/MM/YYYY"
  />

  <!-- Range with String Output -->
  <EaDatePicker
    v-model="rangeString"
    label="Range as Strings"
    range
    value-format="DD/MM/YYYY"
  />
</template>

const dateObject = ref<Date | null>(null);
const dateString = ref<string | null>(null);
const rangeString = ref<[string, string] | null>(null);`;

const rangeSelectionCode = `<template>
  <EaDatePicker
    v-model="vacationDates"
    label="Vacation Period"
    placeholder="Select vacation dates"
    range
  />

  <EaDatePicker
    v-model="projectTimeline"
    label="Project Duration"
    placeholder="Select project timeline"
    range
  />
</template>

const vacationDates = ref<[Date, Date] | null>(null);
const projectTimeline = ref<[Date, Date] | null>(null);

// Calculate duration
const calculateDuration = (range: [Date, Date] | null): string => {
  if (!range) return 'Not selected';
  const diffTime = Math.abs(range[1].getTime() - range[0].getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return \`\${diffDays} day\${diffDays !== 1 ? 's' : ''}\`;
};`;

const statesValidationCode = `<template>
  <!-- Error State -->
  <EaDatePicker
    v-model="errorDate"
    label="Invalid Date"
    error
    error-message="Please select a valid date"
  />

  <!-- Disabled State -->
  <EaDatePicker
    v-model="disabledDate"
    label="Disabled Date"
    disabled
  />

  <!-- Required Field with Validation -->
  <EaDatePicker
    v-model="requiredDate"
    label="Required Field"
    required
    :error="!requiredDate"
    error-message="This field is required"
  />
</template>

const errorDate = ref<Date | null>(null);
const disabledDate = ref<Date | null>(null);
const requiredDate = ref<Date | null>(null);`;

const interactiveFeaturesCode = `<template>
  <!-- Today Button -->
  <EaDatePicker
    v-model="todayDate"
    label="Quick Today Selection"
    placeholder="Click Today button in calendar"
  />

  <!-- Clear Button -->
  <EaDatePicker
    v-model="clearableDate"
    label="Clearable Date"
    placeholder="Select date then clear"
  />

  <!-- Keyboard Input -->
  <EaDatePicker
    v-model="keyboardDate"
    label="Keyboard Navigation"
    placeholder="Type date or use calendar"
  />
</template>

const todayDate = ref<Date | null>(null);
const clearableDate = ref<Date | null>(new Date());
const keyboardDate = ref<Date | null>(null);`;

const basicImplementationCode = `<template>
  <div class="date-form">
    <h3>Event Registration</h3>

    <EaDatePicker
      v-model="eventDate"
      label="Event Date"
      placeholder="Select event date"
      required
      :error="!eventDate && submitted"
      error-message="Event date is required"
    />

    <EaDatePicker
      v-model="registrationDeadline"
      label="Registration Deadline"
      placeholder="Select deadline"
      :error="isDeadlineInvalid"
      error-message="Deadline must be before event date"
    />

    <button @click="submitForm" class="submit-btn">
      Register Event
    </button>
  </div>
</template>

import { ref, computed } from 'vue';
import EaDatePicker from '@/components/ui/form/EaDatePicker/datePicker.vue';

const eventDate = ref<Date | null>(null);
const registrationDeadline = ref<Date | null>(null);
const submitted = ref(false);

const isDeadlineInvalid = computed(() => {
  if (!eventDate.value || !registrationDeadline.value) return false;
  return registrationDeadline.value >= eventDate.value;
});

const submitForm = () => {
  submitted.value = true;
  if (eventDate.value && !isDeadlineInvalid.value) {
    console.log('Form submitted:', {
      eventDate: eventDate.value,
      deadline: registrationDeadline.value
    });
  }
};`;

const advancedFormCode = `<template>
  <form @submit.prevent="submitBooking" class="booking-form">
    <div class="form-section">
      <h3>Hotel Booking</h3>

      <div class="date-range">
        <EaDatePicker
          v-model="bookingDates"
          label="Stay Period"
          placeholder="Select check-in and check-out dates"
          range
          :error="isBookingInvalid"
          error-message="Check-out must be after check-in"
        />
      </div>

      <div class="guest-info">
        <label>Number of Guests</label>
        <select v-model="guestCount">
          <option value="1">1 Guest</option>
          <option value="2">2 Guests</option>
          <option value="3">3 Guests</option>
          <option value="4">4+ Guests</option>
        </select>
      </div>
    </div>

    <div class="booking-summary" v-if="bookingDates">
      <h4>Booking Summary</h4>
      <p>Check-in: {{ formatDate(bookingDates[0]) }}</p>
      <p>Check-out: {{ formatDate(bookingDates[1]) }}</p>
      <p>Duration: {{ calculateNights(bookingDates) }}</p>
      <p>Guests: {{ guestCount }}</p>
    </div>

    <button type="submit" :disabled="!isFormValid" class="book-btn">
      Book Now
    </button>
  </form>
</template>

interface BookingData {
  dates: [Date, Date] | null;
  guests: number;
}

const bookingDates = ref<[Date, Date] | null>(null);
const guestCount = ref<number>(2);

const isBookingInvalid = computed(() => {
  if (!bookingDates.value) return false;
  const [checkIn, checkOut] = bookingDates.value;
  return checkOut <= checkIn;
});

const isFormValid = computed(() => {
  return bookingDates.value && !isBookingInvalid.value;
});

const calculateNights = (dates: [Date, Date]): string => {
  const diffTime = dates[1].getTime() - dates[0].getTime();
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return \`\${nights} night\${nights !== 1 ? 's' : ''}\`;
};

const submitBooking = () => {
  if (!isFormValid.value) return;

  const booking: BookingData = {
    dates: bookingDates.value,
    guests: guestCount.value
  };

  console.log('Booking submitted:', booking);
};`;

const customValidationCode = `<template>
  <div class="appointment-form">
    <EaDatePicker
      v-model="appointmentDate"
      label="Appointment Date"
      placeholder="Select appointment date"
      :error="hasDateError"
      :error-message="dateErrorMessage"
      @update:modelValue="validateDate"
    />

    <div v-if="availableSlots.length > 0" class="time-slots">
      <h4>Available Time Slots</h4>
      <div class="slots-grid">
        <button
          v-for="slot in availableSlots"
          :key="slot"
          @click="selectedTime = slot"
          :class="{ active: selectedTime === slot }"
          class="time-slot"
        >
          {{ slot }}
        </button>
      </div>
    </div>
  </div>
</template>

import { ref, computed } from 'vue';

const appointmentDate = ref<Date | null>(null);
const selectedTime = ref<string>('');
const dateError = ref<string>('');

// Custom validation rules
const isWeekend = (date: Date): boolean => {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday or Saturday
};

const isPastDate = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today;
};

const isTooFarInFuture = (date: Date): boolean => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3); // 3 months from now
  return date > maxDate;
};

const hasDateError = computed(() => dateError.value !== '');
const dateErrorMessage = computed(() => dateError.value);

const availableSlots = computed(() => {
  if (!appointmentDate.value || hasDateError.value) return [];

  // Mock available slots based on day
  const day = appointmentDate.value.getDay();
  if (day === 1 || day === 3 || day === 5) { // Mon, Wed, Fri
    return ['09:00', '10:30', '14:00', '15:30'];
  } else { // Tue, Thu
    return ['10:00', '11:30', '13:00', '16:00'];
  }
});

const validateDate = (date: Date | null) => {
  dateError.value = '';
  selectedTime.value = '';

  if (!date) return;

  if (isPastDate(date)) {
    dateError.value = 'Cannot select past dates';
  } else if (isWeekend(date)) {
    dateError.value = 'Appointments not available on weekends';
  } else if (isTooFarInFuture(date)) {
    dateError.value = 'Cannot book more than 3 months in advance';
  }
};`;
</script>

<style scoped lang="scss">
.datepicker-demo {
  background: #f8fafc;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .demo-description {
    font-size: 1.25rem;
    color: #64748b;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.demo-section {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 4px;
      height: 2rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
  }

  .section-description {
    font-size: 1rem;
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.demo-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
}

.result-display {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #dbeafe;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #1e40af;
}

.demo-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.size-demo, .format-demo, .value-demo, .range-demo, .state-demo, .interactive-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }
}

.format-info, .value-info, .range-info, .feature-info {
  margin-top: 1rem;
  padding: 0.75rem;
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  font-size: 0.875rem;
  color: #64748b;
}

.value-formats, .range-demos, .states-grid, .interactive-demos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.props-table {
  overflow-x: auto;
  margin-top: 1.5rem;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    th, td {
      padding: 1rem 1.25rem;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }

    th {
      background: #f8fafc;
      font-weight: 600;
      color: #374151;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    td {
      color: #6b7280;
      font-size: 0.875rem;
      line-height: 1.5;

      code {
        background: #f1f5f9;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: 'Monaco', 'Consolas', monospace;
        font-size: 0.8rem;
        color: #1e293b;
        font-weight: 500;
      }
    }

    tr:last-child {
      th, td {
        border-bottom: none;
      }
    }

    tr:hover {
      background: #f8fafc;
    }
  }
}

.example-tabs {
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin: 2rem 0 1rem 0;

    &:first-child {
      margin-top: 0;
    }
  }
}

@media (max-width: 768px) {
  .datepicker-demo {
    padding: 1rem 0.5rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .demo-section {
    padding: 1.5rem;
  }

  .value-formats, .range-demos, .states-grid, .interactive-demos {
    grid-template-columns: 1fr;
  }
}
</style>
