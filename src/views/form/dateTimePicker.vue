<template>
  <div class="demo-container">
    <!-- Header -->
    <div class="demo-header">
      <h1 class="demo-title">EaDateTimePicker Component</h1>
      <p class="demo-description">
        A comprehensive date and time picker component that combines date selection with time selection.
        Perfect for scheduling events, appointments, and any scenario requiring both date and time input.
      </p>
    </div>

    <!-- Basic Usage -->
    <section class="demo-section">
      <h2 class="section-title">Basic Usage</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Simple DateTime Picker</h3>
          <EaDateTimePicker
            v-model="basicDateTime"
            label="Select Date & Time"
          />
          <p class="example-value">Selected: {{ formatDateTime(basicDateTime) }}</p>
        </div>

        <div class="example-item">
          <h3>With Custom Label</h3>
          <EaDateTimePicker
            v-model="customLabelDateTime"
            label="Event Start Time"
          />
          <p class="example-value">Selected: {{ formatDateTime(customLabelDateTime) }}</p>
        </div>

        <div class="example-item">
          <h3>No Label</h3>
          <EaDateTimePicker
            v-model="noLabelDateTime"
          />
          <p class="example-value">Selected: {{ formatDateTime(noLabelDateTime) }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Basic Usage --&gt;
&lt;EaDateTimePicker
  v-model="basicDateTime"
  label="Select Date & Time"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Different Sizes -->
    <section class="demo-section">
      <h2 class="section-title">Different Sizes</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Small</h3>
          <EaDateTimePicker
            v-model="sizeSmall"
            label="Small DateTime Picker"
            size="small"
          />
        </div>

        <div class="example-item">
          <h3>Normal (Default)</h3>
          <EaDateTimePicker
            v-model="sizeNormal"
            label="Normal DateTime Picker"
            size="normal"
          />
        </div>

        <div class="example-item">
          <h3>Large</h3>
          <EaDateTimePicker
            v-model="sizeLarge"
            label="Large DateTime Picker"
            size="large"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaDateTimePicker size="small" /&gt;
&lt;EaDateTimePicker size="normal" /&gt; &lt;!-- Default --&gt;
&lt;EaDateTimePicker size="large" /&gt;</code></pre>
      </div>
    </section>

    <!-- Required Fields -->
    <section class="demo-section">
      <h2 class="section-title">Required Fields</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Required DateTime</h3>
          <EaDateTimePicker
            v-model="requiredDateTime"
            label="Meeting Start Time"
            required
          />
          <p class="example-value">Selected: {{ formatDateTime(requiredDateTime) }}</p>
        </div>

        <div class="example-item">
          <h3>Optional DateTime</h3>
          <EaDateTimePicker
            v-model="optionalDateTime"
            label="Optional End Time"
          />
          <p class="example-value">Selected: {{ formatDateTime(optionalDateTime) }}</p>
        </div>

        <div class="example-item">
          <h3>Required with Custom Interval</h3>
          <EaDateTimePicker
            v-model="requiredCustomInterval"
            label="Appointment Time"
            required
            :minute-interval="15"
          />
          <p class="example-value">Selected: {{ formatDateTime(requiredCustomInterval) }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaDateTimePicker
  v-model="requiredDateTime"
  label="Meeting Start Time"
  required
/&gt;</code></pre>
      </div>
    </section>

    <!-- Error and Disabled States -->
    <section class="demo-section">
      <h2 class="section-title">Error and Disabled States</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Error State</h3>
          <EaDateTimePicker
            v-model="errorDateTime"
            label="Invalid DateTime"
            error
            error-message="Please select a valid date and time"
          />
        </div>

        <div class="example-item">
          <h3>Is-Invalid State</h3>
          <EaDateTimePicker
            v-model="invalidDateTime"
            label="Invalid DateTime Field"
            is-invalid
            error-message="DateTime must be in the future"
          />
        </div>

        <div class="example-item">
          <h3>Disabled State</h3>
          <EaDateTimePicker
            v-model="disabledDateTime"
            label="Disabled DateTime"
            disabled
          />
        </div>

        <div class="example-item">
          <h3>Disabled with Value</h3>
          <EaDateTimePicker
            v-model="disabledWithValueDateTime"
            label="Read-only DateTime"
            disabled
          />
        </div>

        <div class="example-item">
          <h3>Required + Error</h3>
          <EaDateTimePicker
            v-model="requiredErrorDateTime"
            label="Required Field"
            required
            error
            error-message="This field is required"
          />
        </div>

        <div class="example-item">
          <h3>Normal State</h3>
          <EaDateTimePicker
            v-model="normalStateDateTime"
            label="Normal DateTime"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Error State --&gt;
&lt;EaDateTimePicker
  v-model="errorDateTime"
  label="Invalid DateTime"
  error
  error-message="Please select a valid date and time"
/&gt;

&lt;!-- Is-Invalid State --&gt;
&lt;EaDateTimePicker
  v-model="invalidDateTime"
  label="Invalid DateTime Field"
  is-invalid
  error-message="DateTime must be in the future"
/&gt;

&lt;!-- Disabled State --&gt;
&lt;EaDateTimePicker
  v-model="disabledDateTime"
  label="Disabled DateTime"
  disabled
/&gt;</code></pre>
      </div>
    </section>

        <!-- Date Format -->
    <section class="demo-section">
      <h2 class="section-title">Date Format (Display)</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>DD/MM/YYYY (Default)</h3>
          <EaDateTimePicker
            v-model="ddmmDisplayDateTime"
            label="European Date Format"
            date-format="DD/MM/YYYY"
          />
          <p class="example-value">Display: DD/MM/YYYY format</p>
        </div>

        <div class="example-item">
          <h3>MM/DD/YYYY</h3>
          <EaDateTimePicker
            v-model="mmddDisplayDateTime"
            label="US Date Format"
            date-format="MM/DD/YYYY"
          />
          <p class="example-value">Display: MM/DD/YYYY format</p>
        </div>

        <div class="example-item">
          <h3>YYYY-MM-DD</h3>
          <EaDateTimePicker
            v-model="yyyymmddDisplayDateTime"
            label="ISO Date Format"
            date-format="YYYY-MM-DD"
          />
          <p class="example-value">Display: YYYY-MM-DD format</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Different date display formats --&gt;
&lt;EaDateTimePicker date-format="DD/MM/YYYY" /&gt; &lt;!-- Default --&gt;
&lt;EaDateTimePicker date-format="MM/DD/YYYY" /&gt;
&lt;EaDateTimePicker date-format="YYYY-MM-DD" /&gt;</code></pre>
      </div>
    </section>

    <!-- Value Format -->
    <section class="demo-section">
      <h2 class="section-title">Value Format (Output)</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Default (Date Object)</h3>
          <EaDateTimePicker
            v-model="defaultFormatDateTime"
            label="Returns Date Object"
          />
          <p class="example-value">Type: {{ typeof defaultFormatDateTime }}</p>
          <p class="example-value">Value: {{ defaultFormatDateTime }}</p>
        </div>

        <div class="example-item">
          <h3>DD/MM/YYYY HH:mm Format</h3>
          <EaDateTimePicker
            v-model="ddmmyyyyDateTime"
            label="European Format"
            value-format="DD/MM/YYYY HH:mm"
          />
          <p class="example-value">Type: {{ typeof ddmmyyyyDateTime }}</p>
          <p class="example-value">Value: {{ ddmmyyyyDateTime }}</p>
        </div>

        <div class="example-item">
          <h3>YYYY-MM-DD HH:mm Format</h3>
          <EaDateTimePicker
            v-model="isoFormatDateTime"
            label="ISO-like Format"
            value-format="YYYY-MM-DD HH:mm"
          />
          <p class="example-value">Type: {{ typeof isoFormatDateTime }}</p>
          <p class="example-value">Value: {{ isoFormatDateTime }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Returns Date object --&gt;
&lt;EaDateTimePicker v-model="dateValue" /&gt;

&lt;!-- Returns formatted string --&gt;
&lt;EaDateTimePicker
  v-model="stringValue"
  value-format="DD/MM/YYYY HH:mm"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Time Intervals -->
    <section class="demo-section">
      <h2 class="section-title">Time Intervals</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>5-Minute Intervals (Default)</h3>
          <EaDateTimePicker
            v-model="interval5DateTime"
            label="5-Minute Steps"
            :minute-interval="5"
          />
          <p class="example-hint">00, 05, 10, 15, 20, ...</p>
        </div>

        <div class="example-item">
          <h3>15-Minute Intervals</h3>
          <EaDateTimePicker
            v-model="interval15DateTime"
            label="15-Minute Steps"
            :minute-interval="15"
          />
          <p class="example-hint">00, 15, 30, 45</p>
        </div>

        <div class="example-item">
          <h3>30-Minute Intervals</h3>
          <EaDateTimePicker
            v-model="interval30DateTime"
            label="30-Minute Steps"
            :minute-interval="30"
          />
          <p class="example-hint">00, 30</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaDateTimePicker :minute-interval="5" /&gt;  &lt;!-- Default --&gt;
&lt;EaDateTimePicker :minute-interval="15" /&gt;
&lt;EaDateTimePicker :minute-interval="30" /&gt;</code></pre>
      </div>
    </section>

    <!-- Real-world Examples -->
    <section class="demo-section">
      <h2 class="section-title">Real-world Examples</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Event Scheduling</h3>
          <EaDateTimePicker
            v-model="eventDateTime"
            label="Event Start Time"
            required
            :minute-interval="15"
          />
          <p class="example-value">Event: {{ formatDateTime(eventDateTime) }}</p>
        </div>

        <div class="example-item">
          <h3>Meeting Planner</h3>
          <EaDateTimePicker
            v-model="meetingDateTime"
            label="Meeting Time"
            required
            :minute-interval="30"
          />
          <p class="example-value">Meeting: {{ formatDateTime(meetingDateTime) }}</p>
        </div>

        <div class="example-item">
          <h3>Appointment Booking</h3>
          <EaDateTimePicker
            v-model="appointmentDateTime"
            label="Appointment Time"
            required
            :minute-interval="15"
          />
          <p class="example-value">Appointment: {{ formatDateTime(appointmentDateTime) }}</p>
        </div>
      </div>
    </section>

    <!-- Props Documentation -->
    <section class="demo-section">
      <h2 class="section-title">Props Documentation</h2>
      <div class="props-table-container">
        <table class="props-table">
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
              <td>modelValue</td>
              <td>Date</td>
              <td>required</td>
              <td>Selected date and time value</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td>undefined</td>
              <td>Label text displayed above the picker</td>
            </tr>
            <tr>
              <td>size</td>
              <td>'small' | 'normal' | 'large'</td>
              <td>'normal'</td>
              <td>Size variant of the date time picker</td>
            </tr>
            <tr>
              <td>minuteInterval</td>
              <td>number</td>
              <td>5</td>
              <td>Time interval in minutes (1, 5, 15, 30)</td>
            </tr>
            <tr>
              <td>required</td>
              <td>boolean</td>
              <td>false</td>
              <td>Mark field as required (shows red asterisk)</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>boolean</td>
              <td>false</td>
              <td>Disable the date time picker</td>
            </tr>
            <tr>
              <td>error</td>
              <td>boolean</td>
              <td>false</td>
              <td>Show error state with red border</td>
            </tr>
            <tr>
              <td>isInvalid</td>
              <td>boolean</td>
              <td>false</td>
              <td>Show invalid state with red border (alias for error)</td>
            </tr>
            <tr>
              <td>errorMessage</td>
              <td>string</td>
              <td>undefined</td>
              <td>Error message to display below the input</td>
            </tr>
            <tr>
              <td>valueFormat</td>
              <td>string</td>
              <td>undefined</td>
              <td>Format string for output value (e.g., 'DD/MM/YYYY HH:mm'). If provided, returns formatted string instead of Date object</td>
            </tr>
            <tr>
              <td>dateFormat</td>
              <td>string</td>
              <td>'DD/MM/YYYY'</td>
              <td>Date format for display in DatePicker component (e.g., 'DD/MM/YYYY', 'MM/DD/YYYY', 'YYYY-MM-DD')</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Debug Section -->
    <section class="demo-section">
      <h2 class="section-title">Debug Values</h2>
      <div class="debug-grid">
        <div class="debug-item">
          <h4>Basic Examples:</h4>
          <pre>{{ JSON.stringify({
            basicDateTime: formatDateTime(basicDateTime),
            customLabelDateTime: formatDateTime(customLabelDateTime),
            requiredDateTime: formatDateTime(requiredDateTime)
          }, null, 2) }}</pre>
        </div>
        <div class="debug-item">
          <h4>Error & Disabled States:</h4>
          <pre>{{ JSON.stringify({
            errorDateTime: formatDateTime(errorDateTime),
            invalidDateTime: formatDateTime(invalidDateTime),
            disabledDateTime: formatDateTime(disabledDateTime),
            disabledWithValueDateTime: formatDateTime(disabledWithValueDateTime)
          }, null, 2) }}</pre>
        </div>
        <div class="debug-item">
          <h4>Date Format Examples:</h4>
          <pre>{{ JSON.stringify({
            ddmmDisplayDateTime: formatDateTime(ddmmDisplayDateTime),
            mmddDisplayDateTime: formatDateTime(mmddDisplayDateTime),
            yyyymmddDisplayDateTime: formatDateTime(yyyymmddDisplayDateTime)
          }, null, 2) }}</pre>
        </div>
        <div class="debug-item">
          <h4>Value Format Examples:</h4>
          <pre>{{ JSON.stringify({
            defaultFormatDateTime: {
              type: typeof defaultFormatDateTime,
              value: formatDateTime(defaultFormatDateTime)
            },
            ddmmyyyyDateTime: {
              type: typeof ddmmyyyyDateTime,
              value: ddmmyyyyDateTime
            },
            isoFormatDateTime: {
              type: typeof isoFormatDateTime,
              value: isoFormatDateTime
            }
          }, null, 2) }}</pre>
        </div>
        <div class="debug-item">
          <h4>Real-world Examples:</h4>
          <pre>{{ JSON.stringify({
            eventDateTime: formatDateTime(eventDateTime),
            meetingDateTime: formatDateTime(meetingDateTime),
            appointmentDateTime: formatDateTime(appointmentDateTime)
          }, null, 2) }}</pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EaDateTimePicker from '@/components/ui/form/EaDateTimePicker/index.vue';

// Basic examples
const basicDateTime = ref<Date>(new Date());
const customLabelDateTime = ref<Date>(new Date());
const noLabelDateTime = ref<Date>(new Date());

// Size examples
const sizeSmall = ref<Date>(new Date());
const sizeNormal = ref<Date>(new Date());
const sizeLarge = ref<Date>(new Date());

// Required examples
const requiredDateTime = ref<Date>(new Date());
const optionalDateTime = ref<Date>(new Date());
const requiredCustomInterval = ref<Date>(new Date());

// Error and disabled state examples
const errorDateTime = ref<Date>(new Date());
const invalidDateTime = ref<Date>(new Date());
const disabledDateTime = ref<Date>(new Date());
const createDisabledDateTimeValue = () => {
  const dateTime = new Date();
  dateTime.setDate(dateTime.getDate() + 3);
  dateTime.setHours(14, 30, 0, 0);
  return dateTime;
};
const disabledWithValueDateTime = ref<Date>(createDisabledDateTimeValue());
const requiredErrorDateTime = ref<Date>(new Date());
const normalStateDateTime = ref<Date>(new Date());

// Date format examples (display)
const ddmmDisplayDateTime = ref<Date>(new Date());
const mmddDisplayDateTime = ref<Date>(new Date());
const yyyymmddDisplayDateTime = ref<Date>(new Date());

// Value format examples (output)
const defaultFormatDateTime = ref<Date>(new Date());
const ddmmyyyyDateTime = ref<string>('25/12/2023 14:30');
const isoFormatDateTime = ref<string>('2023-12-25 14:30');

// Time interval examples
const interval5DateTime = ref<Date>(new Date());
const interval15DateTime = ref<Date>(new Date());
const interval30DateTime = ref<Date>(new Date());

// Real-world examples
const eventDateTime = ref<Date>(new Date());
const meetingDateTime = ref<Date>(new Date());
const appointmentDateTime = ref<Date>(new Date());

// Helper function
const formatDateTime = (date: Date | string | null): string => {
  if (!date) return 'Not selected';

  if (typeof date === 'string') return date;

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}/${month}/${year} ${hours}:${minutes}`;
};
</script>

<style scoped lang="scss">
.demo-container {
  @apply max-w-6xl mx-auto p-6 space-y-12;
}

.demo-header {
  @apply text-center mb-12;
}

.demo-title {
  @apply text-4xl font-bold text-gray-900 mb-4;
}

.demo-description {
  @apply text-lg text-gray-600 max-w-3xl mx-auto;
}

.demo-section {
  @apply space-y-6;
}

.section-title {
  @apply text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200;
}

.example-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.example-item {
  @apply bg-white rounded-lg border border-gray-200 p-6 space-y-4;

  h3 {
    @apply text-lg font-medium text-gray-800 mb-3;
  }
}

.example-value {
  @apply text-sm text-gray-600 bg-gray-50 p-2 rounded font-mono;
}

.example-hint {
  @apply text-xs text-blue-600 italic;
}

.code-example {
  @apply bg-gray-900 rounded-lg p-4 mt-6;

  h4 {
    @apply text-white text-sm font-medium mb-2;
  }

  pre {
    @apply text-green-400 text-sm overflow-x-auto;
  }
}

.props-table-container {
  @apply overflow-x-auto;
}

.props-table {
  @apply min-w-full bg-white border border-gray-200 rounded-lg;

  th {
    @apply px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-50;
  }

  td {
    @apply px-6 py-4 whitespace-nowrap text-sm border-t border-gray-200;

    &:first-child {
      @apply font-medium text-gray-900;
    }

    &:nth-child(2) {
      @apply text-blue-600 font-mono text-xs;
    }

    &:nth-child(3) {
      @apply text-gray-500 font-mono text-xs;
    }

    &:nth-child(4) {
      @apply text-gray-700;
    }
  }
}

.debug-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}

.debug-item {
  @apply bg-gray-50 rounded-lg p-4;

  h4 {
    @apply text-sm font-medium text-gray-700 mb-2;
  }

  pre {
    @apply text-xs text-gray-600 bg-white p-3 rounded border overflow-x-auto;
  }
}
</style>
