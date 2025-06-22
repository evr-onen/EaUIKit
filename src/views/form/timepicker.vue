<template>
  <div class="demo-container">
    <!-- Header -->
    <div class="demo-header">
      <h1 class="demo-title">EaTimePicker Component</h1>
      <p class="demo-description">
        A comprehensive time picker component with customizable time intervals,
        min/max time constraints, keyboard input support, and various size options.
      </p>
    </div>

    <!-- Basic Usage -->
    <section class="demo-section">
      <h2 class="section-title">Basic Usage</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Simple Time Picker</h3>
          <EaTimePicker
            v-model="basicTime"
            label="Select Time"
            placeholder="Choose a time"
          />
          <p class="example-value">Selected: {{ formatTime(basicTime) }}</p>
        </div>

        <div class="example-item">
          <h3>With Custom Label</h3>
          <EaTimePicker
            v-model="customLabelTime"
            label="Meeting Time"
            placeholder="When is the meeting?"
          />
          <p class="example-value">Selected: {{ formatTime(customLabelTime) }}</p>
        </div>

        <div class="example-item">
          <h3>No Label</h3>
          <EaTimePicker
            v-model="noLabelTime"
            placeholder="Select appointment time"
          />
          <p class="example-value">Selected: {{ formatTime(noLabelTime) }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Basic Usage --&gt;
&lt;EaTimePicker
  v-model="basicTime"
  label="Select Time"
  placeholder="Choose a time"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Different Sizes -->
    <section class="demo-section">
      <h2 class="section-title">Different Sizes</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Small</h3>
          <EaTimePicker
            v-model="sizeSmall"
            label="Small Time Picker"
            placeholder="Small size"
            size="small"
          />
        </div>

        <div class="example-item">
          <h3>Normal (Default)</h3>
          <EaTimePicker
            v-model="sizeNormal"
            label="Normal Time Picker"
            placeholder="Normal size"
            size="normal"
          />
        </div>

        <div class="example-item">
          <h3>Large</h3>
          <EaTimePicker
            v-model="sizeLarge"
            label="Large Time Picker"
            placeholder="Large size"
            size="large"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTimePicker size="small" /&gt;
&lt;EaTimePicker size="normal" /&gt; &lt;!-- Default --&gt;
&lt;EaTimePicker size="large" /&gt;</code></pre>
      </div>
    </section>

    <!-- Time Constraints -->
    <section class="demo-section">
      <h2 class="section-title">Time Constraints</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Business Hours (09:00 - 18:00)</h3>
          <EaTimePicker
            v-model="businessHours"
            label="Business Hours"
            placeholder="Select business time"
            min-time="09:00"
            max-time="18:00"
          />
          <p class="example-hint">Only times between 09:00 and 18:00 available</p>
        </div>

        <div class="example-item">
          <h3>Morning Only (06:00 - 12:00)</h3>
          <EaTimePicker
            v-model="morningOnly"
            label="Morning Schedule"
            placeholder="Select morning time"
            min-time="06:00"
            max-time="12:00"
          />
          <p class="example-hint">Only morning hours available</p>
        </div>

        <div class="example-item">
          <h3>Evening Only (18:00 - 23:00)</h3>
          <EaTimePicker
            v-model="eveningOnly"
            label="Evening Schedule"
            placeholder="Select evening time"
            min-time="18:00"
            max-time="23:00"
          />
          <p class="example-hint">Only evening hours available</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTimePicker
  v-model="businessHours"
  label="Business Hours"
  min-time="09:00"
  max-time="18:00"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Minute Intervals -->
    <section class="demo-section">
      <h2 class="section-title">Minute Intervals</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>5-Minute Intervals (Default)</h3>
          <EaTimePicker
            v-model="interval5"
            label="5-Minute Steps"
            placeholder="Every 5 minutes"
            :minute-interval="5"
          />
          <p class="example-hint">00, 05, 10, 15, 20, ...</p>
        </div>

        <div class="example-item">
          <h3>15-Minute Intervals</h3>
          <EaTimePicker
            v-model="interval15"
            label="15-Minute Steps"
            placeholder="Every 15 minutes"
            :minute-interval="15"
          />
          <p class="example-hint">00, 15, 30, 45</p>
        </div>

        <div class="example-item">
          <h3>30-Minute Intervals</h3>
          <EaTimePicker
            v-model="interval30"
            label="30-Minute Steps"
            placeholder="Every 30 minutes"
            :minute-interval="30"
          />
          <p class="example-hint">00, 30</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTimePicker :minute-interval="5" /&gt;  &lt;!-- Default --&gt;
&lt;EaTimePicker :minute-interval="15" /&gt;
&lt;EaTimePicker :minute-interval="30" /&gt;</code></pre>
      </div>
    </section>

    <!-- Real-world Examples -->
    <section class="demo-section">
      <h2 class="section-title">Real-world Examples</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Doctor Appointment (08:00 - 17:00)</h3>
          <EaTimePicker
            v-model="doctorAppointment"
            label="Appointment Time"
            placeholder="Select appointment time"
            min-time="08:00"
            max-time="17:00"
            :minute-interval="15"
          />
          <p class="example-value">Appointment: {{ formatTime(doctorAppointment) }}</p>
        </div>

        <div class="example-item">
          <h3>Meeting Scheduler (09:00 - 18:00)</h3>
          <EaTimePicker
            v-model="meetingTime"
            label="Meeting Time"
            placeholder="Schedule meeting"
            min-time="09:00"
            max-time="18:00"
            :minute-interval="30"
          />
          <p class="example-value">Meeting: {{ formatTime(meetingTime) }}</p>
        </div>

        <div class="example-item">
          <h3>Alarm Clock</h3>
          <EaTimePicker
            v-model="alarmTime"
            label="Alarm Time"
            placeholder="Set alarm"
            :minute-interval="1"
          />
          <p class="example-value">Alarm: {{ formatTime(alarmTime) }}</p>
        </div>
      </div>
    </section>

    <!-- Required Fields -->
    <section class="demo-section">
      <h2 class="section-title">Required Fields</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Required Time</h3>
          <EaTimePicker
            v-model="requiredTime"
            label="Start Time"
            placeholder="Select start time"
            required
          />
          <p class="example-value">Selected: {{ formatTime(requiredTime) }}</p>
        </div>

        <div class="example-item">
          <h3>Optional Time</h3>
          <EaTimePicker
            v-model="optionalTime"
            label="Break Time"
            placeholder="Optional break time"
          />
          <p class="example-value">Selected: {{ formatTime(optionalTime) }}</p>
        </div>

        <div class="example-item">
          <h3>Required with Constraints</h3>
          <EaTimePicker
            v-model="requiredConstrained"
            label="Meeting Time"
            placeholder="Required meeting time"
            min-time="09:00"
            max-time="17:00"
            :minute-interval="15"
            required
          />
          <p class="example-value">Selected: {{ formatTime(requiredConstrained) }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaTimePicker
  v-model="requiredTime"
  label="Start Time"
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
          <EaTimePicker
            v-model="errorTime"
            label="Invalid Time"
            placeholder="This field has an error"
            error
            error-message="Please select a valid time"
          />
        </div>

        <div class="example-item">
          <h3>Error with Value</h3>
          <EaTimePicker
            v-model="errorWithValue"
            label="Time with Error"
            placeholder="Select time"
            error
            error-message="Time must be within business hours"
          />
        </div>

        <div class="example-item">
          <h3>Is-Invalid State</h3>
          <EaTimePicker
            v-model="invalidTime"
            label="Invalid Time Field"
            placeholder="Using is-invalid prop"
            is-invalid
            error-message="Time format is invalid"
          />
        </div>

        <div class="example-item">
          <h3>Disabled State</h3>
          <EaTimePicker
            v-model="disabledTime"
            label="Disabled Time"
            placeholder="Cannot select time"
            disabled
          />
        </div>

        <div class="example-item">
          <h3>Disabled with Value</h3>
          <EaTimePicker
            v-model="disabledWithValue"
            label="Read-only Time"
            placeholder="Fixed time"
            disabled
          />
        </div>

        <div class="example-item">
          <h3>Required + Error</h3>
          <EaTimePicker
            v-model="requiredError"
            label="Required Field"
            placeholder="This field is required"
            required
            error
            error-message="This field is required"
          />
        </div>

        <div class="example-item">
          <h3>Normal State</h3>
          <EaTimePicker
            v-model="normalState"
            label="Normal Time"
            placeholder="Select time normally"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Error State --&gt;
&lt;EaTimePicker
  v-model="errorTime"
  label="Invalid Time"
  error
  error-message="Please select a valid time"
/&gt;

&lt;!-- Is-Invalid State --&gt;
&lt;EaTimePicker
  v-model="invalidTime"
  label="Invalid Time Field"
  is-invalid
  error-message="Time format is invalid"
/&gt;

&lt;!-- Disabled State --&gt;
&lt;EaTimePicker
  v-model="disabledTime"
  label="Disabled Time"
  disabled
/&gt;</code></pre>
      </div>
    </section>

    <!-- Keyboard Input -->
    <section class="demo-section">
      <h2 class="section-title">Keyboard Input</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Type Time Directly</h3>
          <EaTimePicker
            v-model="keyboardInput"
            label="Keyboard Input"
            placeholder="Type time (HH:MM)"
          />
          <p class="example-hint">Try typing: 14:30, 9:15, 23:45</p>
          <p class="example-value">Value: {{ formatTime(keyboardInput) }}</p>
        </div>

        <div class="example-item">
          <h3>Auto-formatting</h3>
          <EaTimePicker
            v-model="autoFormat"
            label="Auto Format"
            placeholder="Type numbers only"
          />
          <p class="example-hint">Type: 1430 → becomes 14:30</p>
          <p class="example-value">Value: {{ formatTime(autoFormat) }}</p>
        </div>

        <div class="example-item">
          <h3>Validation</h3>
          <EaTimePicker
            v-model="validation"
            label="Input Validation"
            placeholder="Invalid times corrected"
          />
          <p class="example-hint">Try: 25:70 → becomes 23:59</p>
          <p class="example-value">Value: {{ formatTime(validation) }}</p>
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
              <td>Date | null</td>
              <td>null</td>
              <td>Selected time value</td>
            </tr>
            <tr>
              <td>label</td>
              <td>string</td>
              <td>undefined</td>
              <td>Label text displayed above the picker</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>string</td>
              <td>'Select time'</td>
              <td>Placeholder text in the input field</td>
            </tr>
            <tr>
              <td>size</td>
              <td>'small' | 'normal' | 'large'</td>
              <td>'normal'</td>
              <td>Size variant of the time picker</td>
            </tr>
            <tr>
              <td>minTime</td>
              <td>string</td>
              <td>undefined</td>
              <td>Minimum selectable time (24-hour format, e.g. '09:00')</td>
            </tr>
            <tr>
              <td>maxTime</td>
              <td>string</td>
              <td>undefined</td>
              <td>Maximum selectable time (24-hour format, e.g. '18:00')</td>
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
              <td>Disable the time picker</td>
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
            basicTime: formatTime(basicTime),
            customLabelTime: formatTime(customLabelTime),
            keyboardInput: formatTime(keyboardInput)
          }, null, 2) }}</pre>
        </div>
                <div class="debug-item">
          <h4>Required Fields:</h4>
          <pre>{{ JSON.stringify({
            requiredTime: formatTime(requiredTime),
            optionalTime: formatTime(optionalTime),
            requiredConstrained: formatTime(requiredConstrained)
          }, null, 2) }}</pre>
        </div>
                <div class="debug-item">
          <h4>Error & Disabled States:</h4>
          <pre>{{ JSON.stringify({
            errorTime: formatTime(errorTime),
            errorWithValue: formatTime(errorWithValue),
            invalidTime: formatTime(invalidTime),
            disabledTime: formatTime(disabledTime),
            disabledWithValue: formatTime(disabledWithValue)
          }, null, 2) }}</pre>
        </div>
    </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EaTimePicker from '@/components/ui/form/EaTimePicker/index.vue';

// Basic examples
const basicTime = ref<Date | null>(null);
const customLabelTime = ref<Date | null>(null);
const noLabelTime = ref<Date | null>(null);

// Size examples
const sizeSmall = ref<Date | null>(null);
const sizeNormal = ref<Date | null>(null);
const sizeLarge = ref<Date | null>(null);

// Time constraint examples
const businessHours = ref<Date | null>(null);
const morningOnly = ref<Date | null>(null);
const eveningOnly = ref<Date | null>(null);

// Interval examples
const interval5 = ref<Date | null>(null);
const interval15 = ref<Date | null>(null);
const interval30 = ref<Date | null>(null);

// Real-world examples
const doctorAppointment = ref<Date | null>(null);
const meetingTime = ref<Date | null>(null);
const alarmTime = ref<Date | null>(null);

// Required field examples
const requiredTime = ref<Date | null>(null);
const optionalTime = ref<Date | null>(null);
const requiredConstrained = ref<Date | null>(null);

// Error and disabled state examples
const errorTime = ref<Date | null>(null);
const errorWithValue = ref<Date | null>(new Date());
const invalidTime = ref<Date | null>(null);
const disabledTime = ref<Date | null>(null);
// Create a date with specific time (14:30)
const createDisabledTime = () => {
  const time = new Date();
  time.setHours(14, 30, 0, 0);
  return time;
};
const disabledWithValue = ref<Date | null>(createDisabledTime());
const requiredError = ref<Date | null>(null);
const normalState = ref<Date | null>(null);

// Keyboard input examples
const keyboardInput = ref<Date | null>(null);
const autoFormat = ref<Date | null>(null);
const validation = ref<Date | null>(null);

// Helper function
const formatTime = (date: Date | null): string => {
  if (!date) return 'Not selected';
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });
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
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
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
