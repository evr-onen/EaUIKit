<template>
  <div class="datetime-picker-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaDateTimePicker Component</h1>
        <p class="demo-description">
          A comprehensive date and time picker component that combines date selection with time selection.
          Perfect for scheduling events, appointments, and any scenario requiring both date and time input.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different datetime picker variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic DateTime</h4>
            <p>Simple datetime picker with default settings</p>
            <EaDateTimePicker
              v-model="basicDateTime"
              label="Select Date & Time"
            />
            <p class="example-value">Selected: {{ formatDateTime(basicDateTime) }}</p>
          </div>

          <div class="demo-card">
            <h4>Required Field</h4>
            <p>Required datetime with asterisk indicator</p>
            <EaDateTimePicker
              v-model="requiredDateTime"
              label="Meeting Start Time"
              required
            />
            <p class="example-value">Selected: {{ formatDateTime(requiredDateTime) }}</p>
          </div>

          <div class="demo-card">
            <h4>Custom Interval</h4>
            <p>15-minute intervals for time selection</p>
            <EaDateTimePicker
              v-model="intervalDateTime"
              label="Appointment Time"
              :minute-interval="15"
            />
            <p class="example-value">Selected: {{ formatDateTime(intervalDateTime) }}</p>
          </div>

          <div class="demo-card">
            <h4>Wide Time Panel</h4>
            <p>Custom panel width for better visibility</p>
            <EaDateTimePicker
              v-model="widePanelDateTime"
              label="Event Schedule"
              :time-panel-width="250"
            />
            <p class="example-value">Selected: {{ formatDateTime(widePanelDateTime) }}</p>
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
          EaDateTimePicker supports three size options: small, normal (default), and large. Each size is optimized for different interface densities.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Small Size</h4>
            <p>Compact size for dense interfaces</p>
            <EaDateTimePicker
              v-model="sizeSmall"
              label="Small DateTime Picker"
              size="small"
            />
          </div>

          <div class="demo-card">
            <h4>Normal Size</h4>
            <p>Default size for standard interfaces</p>
            <EaDateTimePicker
              v-model="sizeNormal"
              label="Normal DateTime Picker"
              size="normal"
            />
          </div>

          <div class="demo-card">
            <h4>Large Size</h4>
            <p>Large size for prominent placement</p>
            <EaDateTimePicker
              v-model="sizeLarge"
              label="Large DateTime Picker"
              size="large"
            />
          </div>
        </div>

        <CodeBlock
          :code="sizeVariantsCode"
          title="Size Variants Example"
        />
      </section>

      <!-- Date Format Options -->
      <section class="demo-section">
        <h2>Date Format Options</h2>
        <p class="section-description">
          Control how dates are displayed in the date picker component with different format options.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>DD/MM/YYYY (Default)</h4>
            <p>European date format</p>
            <EaDateTimePicker
              v-model="ddmmDisplayDateTime"
              label="European Format"
              date-format="DD/MM/YYYY"
            />
            <p class="example-value">Format: DD/MM/YYYY</p>
          </div>

          <div class="demo-card">
            <h4>MM/DD/YYYY</h4>
            <p>US date format</p>
            <EaDateTimePicker
              v-model="mmddDisplayDateTime"
              label="US Format"
              date-format="MM/DD/YYYY"
            />
            <p class="example-value">Format: MM/DD/YYYY</p>
          </div>

          <div class="demo-card">
            <h4>YYYY-MM-DD</h4>
            <p>ISO date format</p>
            <EaDateTimePicker
              v-model="yyyymmddDisplayDateTime"
              label="ISO Format"
              date-format="YYYY-MM-DD"
            />
            <p class="example-value">Format: YYYY-MM-DD</p>
          </div>
        </div>

        <CodeBlock
          :code="dateFormatCode"
          title="Date Format Example"
        />
      </section>

      <!-- Value Format Options -->
      <section class="demo-section">
        <h2>Value Format Options</h2>
        <p class="section-description">
          Control the output format of the datetime picker. By default, it returns a Date object, but you can specify a custom string format.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Default (Date Object)</h4>
            <p>Returns native JavaScript Date object</p>
            <EaDateTimePicker
              v-model="defaultFormatDateTime"
              label="Date Object Output"
            />
            <p class="example-value">Type: {{ typeof defaultFormatDateTime }}</p>
            <p class="example-value">Value: {{ defaultFormatDateTime }}</p>
          </div>

          <div class="demo-card">
            <h4>DD/MM/YYYY HH:mm</h4>
            <p>European format string output</p>
            <EaDateTimePicker
              v-model="ddmmyyyyDateTime"
              label="European String Format"
              value-format="DD/MM/YYYY HH:mm"
            />
            <p class="example-value">Type: {{ typeof ddmmyyyyDateTime }}</p>
            <p class="example-value">Value: {{ ddmmyyyyDateTime }}</p>
          </div>

          <div class="demo-card">
            <h4>YYYY-MM-DD HH:mm</h4>
            <p>ISO-like format string output</p>
            <EaDateTimePicker
              v-model="isoFormatDateTime"
              label="ISO String Format"
              value-format="YYYY-MM-DD HH:mm"
            />
            <p class="example-value">Type: {{ typeof isoFormatDateTime }}</p>
            <p class="example-value">Value: {{ isoFormatDateTime }}</p>
          </div>
        </div>

        <CodeBlock
          :code="valueFormatCode"
          title="Value Format Example"
        />
      </section>

      <!-- Time Intervals -->
      <section class="demo-section">
        <h2>Time Intervals</h2>
        <p class="section-description">
          Configure minute intervals for the time picker to match your application's requirements.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>5-Minute Intervals</h4>
            <p>Default interval (00, 05, 10, 15...)</p>
            <EaDateTimePicker
              v-model="interval5DateTime"
              label="5-Minute Steps"
              :minute-interval="5"
            />
            <p class="example-hint">Available: 00, 05, 10, 15, 20...</p>
          </div>

          <div class="demo-card">
            <h4>15-Minute Intervals</h4>
            <p>Quarter-hour intervals</p>
            <EaDateTimePicker
              v-model="interval15DateTime"
              label="15-Minute Steps"
              :minute-interval="15"
            />
            <p class="example-hint">Available: 00, 15, 30, 45</p>
          </div>

          <div class="demo-card">
            <h4>30-Minute Intervals</h4>
            <p>Half-hour intervals</p>
            <EaDateTimePicker
              v-model="interval30DateTime"
              label="30-Minute Steps"
              :minute-interval="30"
            />
            <p class="example-hint">Available: 00, 30</p>
          </div>
        </div>

        <CodeBlock
          :code="timeIntervalsCode"
          title="Time Intervals Example"
        />
      </section>

      <!-- States and Validation -->
      <section class="demo-section">
        <h2>States and Validation</h2>
        <p class="section-description">
          Handle different states including required fields, error states, and disabled inputs.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Error State</h4>
            <p>Shows error styling with message</p>
            <EaDateTimePicker
              v-model="errorDateTime"
              label="Invalid DateTime"
              error
              error-message="Please select a valid date and time"
            />
          </div>

          <div class="demo-card">
            <h4>Invalid State</h4>
            <p>Alternative error state styling</p>
            <EaDateTimePicker
              v-model="invalidDateTime"
              label="Invalid Field"
              is-invalid
              error-message="DateTime must be in the future"
            />
          </div>

          <div class="demo-card">
            <h4>Disabled State</h4>
            <p>Disabled input with pre-filled value</p>
            <EaDateTimePicker
              v-model="disabledDateTime"
              label="Read-only DateTime"
              disabled
            />
          </div>
        </div>

        <CodeBlock
          :code="statesValidationCode"
          title="States and Validation Example"
        />
      </section>

      <!-- Panel Customization -->
      <section class="demo-section">
        <h2>Panel Customization</h2>
        <p class="section-description">
          Customize the time picker panel width for better user experience in different layouts.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Default Panel (200px)</h4>
            <p>Standard panel width</p>
            <EaDateTimePicker
              v-model="defaultPanelDateTime"
              label="Default Panel"
            />
          </div>

          <div class="demo-card">
            <h4>Wide Panel (300px)</h4>
            <p>Wider panel for better visibility</p>
            <EaDateTimePicker
              v-model="widePanelDateTime2"
              label="Wide Panel"
              :time-panel-width="300"
            />
          </div>

          <div class="demo-card">
            <h4>Narrow Panel (150px)</h4>
            <p>Compact panel for tight spaces</p>
            <EaDateTimePicker
              v-model="narrowPanelDateTime"
              label="Narrow Panel"
              :time-panel-width="150"
            />
          </div>
        </div>

        <CodeBlock
          :code="panelCustomizationCode"
          title="Panel Customization Example"
        />
      </section>

      <!-- Real-world Examples -->
      <section class="demo-section">
        <h2>Real-world Use Cases</h2>
        <p class="section-description">
          Common scenarios where EaDateTimePicker provides the perfect solution.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Event Scheduling</h4>
            <p>Conference event with 15-minute slots</p>
            <EaDateTimePicker
              v-model="eventDateTime"
              label="Event Start Time"
              required
              :minute-interval="15"
              :time-panel-width="250"
            />
            <p class="example-value">Event: {{ formatDateTime(eventDateTime) }}</p>
          </div>

          <div class="demo-card">
            <h4>Meeting Planner</h4>
            <p>Business meeting with 30-minute slots</p>
            <EaDateTimePicker
              v-model="meetingDateTime"
              label="Meeting Time"
              required
              :minute-interval="30"
              value-format="DD/MM/YYYY HH:mm"
            />
            <p class="example-value">Meeting: {{ meetingDateTime }}</p>
          </div>

          <div class="demo-card">
            <h4>Appointment Booking</h4>
            <p>Medical appointment system</p>
            <EaDateTimePicker
              v-model="appointmentDateTime"
              label="Appointment Time"
              required
              :minute-interval="15"
              date-format="MM/DD/YYYY"
            />
            <p class="example-value">Appointment: {{ formatDateTime(appointmentDateTime) }}</p>
          </div>
        </div>

        <CodeBlock
          :code="realWorldExamplesCode"
          title="Real-world Examples"
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
                <td>Date | string</td>
                <td><code>required</code></td>
                <td>Selected date and time value</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td>string</td>
                <td><code>undefined</code></td>
                <td>Label text displayed above the picker</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'small' | 'normal' | 'large'</td>
                <td><code>'normal'</code></td>
                <td>Size variant of the datetime picker</td>
              </tr>
              <tr>
                <td><code>minuteInterval</code></td>
                <td>number</td>
                <td><code>5</code></td>
                <td>Time interval in minutes (1, 5, 15, 30)</td>
              </tr>
              <tr>
                <td><code>timePanelWidth</code></td>
                <td>number</td>
                <td><code>200</code></td>
                <td>Panel width for time picker dropdown (in pixels)</td>
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
                <td>Disable the datetime picker</td>
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
                <td>Show invalid state with red border (alias for error)</td>
              </tr>
              <tr>
                <td><code>errorMessage</code></td>
                <td>string</td>
                <td><code>undefined</code></td>
                <td>Error message to display below the input</td>
              </tr>
              <tr>
                <td><code>valueFormat</code></td>
                <td>string</td>
                <td><code>undefined</code></td>
                <td>Format string for output value (e.g., 'DD/MM/YYYY HH:mm'). Returns formatted string instead of Date object</td>
              </tr>
              <tr>
                <td><code>dateFormat</code></td>
                <td>string</td>
                <td><code>'DD/MM/YYYY'</code></td>
                <td>Date format for display in DatePicker component</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Events Documentation -->
      <section class="demo-section">
        <h2>Events</h2>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Payload</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>update:modelValue</code></td>
                <td>Date | string</td>
                <td>Emitted when datetime value changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="demo-section">
        <h2>Best Practices</h2>
        <div class="best-practices">
          <div class="practice-item">
            <h4>🎯 Choose Appropriate Intervals</h4>
            <p>Use 5-minute intervals for general scheduling, 15-minute for appointments, and 30-minute for meetings.</p>
          </div>
          <div class="practice-item">
            <h4>📱 Consider Mobile Experience</h4>
            <p>Use appropriate sizes and panel widths for mobile devices. Test on different screen sizes.</p>
          </div>
          <div class="practice-item">
            <h4>🌍 Localization Support</h4>
            <p>Use appropriate date formats for your target audience. European: DD/MM/YYYY, US: MM/DD/YYYY.</p>
          </div>
          <div class="practice-item">
            <h4>✅ Validation Feedback</h4>
            <p>Provide clear error messages and visual feedback for validation errors.</p>
          </div>
          <div class="practice-item">
            <h4>🔄 Data Format Consistency</h4>
            <p>Choose between Date objects and formatted strings consistently throughout your application.</p>
          </div>
          <div class="practice-item">
            <h4>⚡ Performance Optimization</h4>
            <p>Use v-model efficiently and avoid unnecessary re-renders by stabilizing refs and computed values.</p>
          </div>
        </div>
      </section>

      <!-- Complete Usage Example -->
      <section class="demo-section">
        <h2>Complete Usage Example</h2>
        <p class="section-description">
          A comprehensive example showing advanced usage with form integration and validation.
        </p>

        <div class="complete-example">
          <div class="form-container">
            <h4>Event Registration Form</h4>
            <form @submit.prevent="handleSubmit" class="demo-form">
              <EaDateTimePicker
                v-model="formData.startTime"
                label="Event Start Time"
                required
                :minute-interval="15"
                :time-panel-width="250"
                :error="!!formErrors.startTime"
                :error-message="formErrors.startTime"
              />

              <EaDateTimePicker
                v-model="formData.endTime"
                label="Event End Time"
                required
                :minute-interval="15"
                :time-panel-width="250"
                :error="!!formErrors.endTime"
                :error-message="formErrors.endTime"
              />

              <div class="form-actions">
                <button type="submit" class="btn btn--primary">Register Event</button>
                <button type="button" @click="resetForm" class="btn btn--secondary">Reset</button>
              </div>
            </form>
          </div>

          <div class="form-output">
            <h4>Form Data:</h4>
            <pre>{{ JSON.stringify({
              startTime: formatDateTime(formData.startTime),
              endTime: formatDateTime(formData.endTime),
              isValid: Object.keys(formErrors).length === 0
            }, null, 2) }}</pre>
          </div>
        </div>

        <CodeBlock
          :code="completeUsageCode"
          title="Complete Usage Example"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EaDateTimePicker from '@/components/ui/form/EaDateTimePicker/index.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Basic examples
const basicDateTime = ref<Date>(new Date())
const requiredDateTime = ref<Date>(new Date())
const intervalDateTime = ref<Date>(new Date())
const widePanelDateTime = ref<Date>(new Date())

// Size examples
const sizeSmall = ref<Date>(new Date())
const sizeNormal = ref<Date>(new Date())
const sizeLarge = ref<Date>(new Date())

// Date format examples
const ddmmDisplayDateTime = ref<Date>(new Date())
const mmddDisplayDateTime = ref<Date>(new Date())
const yyyymmddDisplayDateTime = ref<Date>(new Date())

// Value format examples
const defaultFormatDateTime = ref<Date>(new Date())
const ddmmyyyyDateTime = ref<string>('25/12/2023 14:30')
const isoFormatDateTime = ref<string>('2023-12-25 14:30')

// Time interval examples
const interval5DateTime = ref<Date>(new Date())
const interval15DateTime = ref<Date>(new Date())
const interval30DateTime = ref<Date>(new Date())

// State examples
const errorDateTime = ref<Date>(new Date())
const invalidDateTime = ref<Date>(new Date())
const createDisabledDateTime = () => {
  const date = new Date()
  date.setDate(date.getDate() + 3)
  date.setHours(14, 30, 0, 0)
  return date
}
const disabledDateTime = ref<Date>(createDisabledDateTime())

// Panel customization examples
const defaultPanelDateTime = ref<Date>(new Date())
const widePanelDateTime2 = ref<Date>(new Date())
const narrowPanelDateTime = ref<Date>(new Date())

// Real-world examples
const eventDateTime = ref<Date>(new Date())
const meetingDateTime = ref<string>('25/12/2023 14:00')
const appointmentDateTime = ref<Date>(new Date())

// Form example
const formData = ref({
  startTime: new Date(),
  endTime: new Date(Date.now() + 2 * 60 * 60 * 1000) // 2 hours later
})

const formErrors = ref<Record<string, string>>({})

// Methods
const formatDateTime = (date: Date | string | null): string => {
  if (!date) return 'Not selected'

  if (typeof date === 'string') return date

  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}`
}

const validateForm = () => {
  const errors: Record<string, string> = {}

  if (!formData.value.startTime) {
    errors.startTime = 'Start time is required'
  }

  if (!formData.value.endTime) {
    errors.endTime = 'End time is required'
  }

  if (formData.value.startTime && formData.value.endTime) {
    const start = new Date(formData.value.startTime)
    const end = new Date(formData.value.endTime)

    if (end <= start) {
      errors.endTime = 'End time must be after start time'
    }
  }

  formErrors.value = errors
  return Object.keys(errors).length === 0
}

const handleSubmit = () => {
  if (validateForm()) {
    alert('Form submitted successfully!')
    console.log('Form data:', formData.value)
  }
}

const resetForm = () => {
  formData.value = {
    startTime: new Date(),
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000)
  }
  formErrors.value = {}
}

// Code examples
const quickDemoCode = `<template>
  <EaDateTimePicker
    v-model="basicDateTime"
    label="Select Date & Time"
  />

  <EaDateTimePicker
    v-model="requiredDateTime"
    label="Meeting Start Time"
    required
  />

  <EaDateTimePicker
    v-model="intervalDateTime"
    label="Appointment Time"
    :minute-interval="15"
  />

  <EaDateTimePicker
    v-model="widePanelDateTime"
    label="Event Schedule"
    :time-panel-width="250"
  />
</template>

import { ref } from 'vue'
import EaDateTimePicker from '@/components/ui/form/EaDateTimePicker/index.vue'

const basicDateTime = ref<Date>(new Date())
const requiredDateTime = ref<Date>(new Date())
const intervalDateTime = ref<Date>(new Date())
const widePanelDateTime = ref<Date>(new Date())`

const sizeVariantsCode = `<template>
  <EaDateTimePicker
    v-model="sizeSmall"
    label="Small DateTime Picker"
    size="small"
  />

  <EaDateTimePicker
    v-model="sizeNormal"
    label="Normal DateTime Picker"
    size="normal"
  />

  <EaDateTimePicker
    v-model="sizeLarge"
    label="Large DateTime Picker"
    size="large"
  />
</template>

import { ref } from 'vue'

const sizeSmall = ref<Date>(new Date())
const sizeNormal = ref<Date>(new Date())
const sizeLarge = ref<Date>(new Date())`

const dateFormatCode = `<template>
  <!-- European format -->
  <EaDateTimePicker
    v-model="ddmmDisplayDateTime"
    label="European Format"
    date-format="DD/MM/YYYY"
  />

  <!-- US format -->
  <EaDateTimePicker
    v-model="mmddDisplayDateTime"
    label="US Format"
    date-format="MM/DD/YYYY"
  />

  <!-- ISO format -->
  <EaDateTimePicker
    v-model="yyyymmddDisplayDateTime"
    label="ISO Format"
    date-format="YYYY-MM-DD"
  />
</template>`

const valueFormatCode = `<template>
  <!-- Returns Date object (default) -->
  <EaDateTimePicker
    v-model="defaultFormatDateTime"
    label="Date Object Output"
  />

  <!-- Returns formatted string -->
  <EaDateTimePicker
    v-model="ddmmyyyyDateTime"
    label="European String Format"
    value-format="DD/MM/YYYY HH:mm"
  />

  <!-- Returns ISO-like string -->
  <EaDateTimePicker
    v-model="isoFormatDateTime"
    label="ISO String Format"
    value-format="YYYY-MM-DD HH:mm"
  />
</template>

import { ref } from 'vue'

const defaultFormatDateTime = ref<Date>(new Date())
const ddmmyyyyDateTime = ref<string>('25/12/2023 14:30')
const isoFormatDateTime = ref<string>('2023-12-25 14:30')`

const timeIntervalsCode = `<template>
  <!-- 5-minute intervals (default) -->
  <EaDateTimePicker
    v-model="interval5DateTime"
    label="5-Minute Steps"
    :minute-interval="5"
  />

  <!-- 15-minute intervals -->
  <EaDateTimePicker
    v-model="interval15DateTime"
    label="15-Minute Steps"
    :minute-interval="15"
  />

  <!-- 30-minute intervals -->
  <EaDateTimePicker
    v-model="interval30DateTime"
    label="30-Minute Steps"
    :minute-interval="30"
  />
</template>`

const statesValidationCode = `<template>
  <!-- Error state -->
  <EaDateTimePicker
    v-model="errorDateTime"
    label="Invalid DateTime"
    error
    error-message="Please select a valid date and time"
  />

  <!-- Invalid state -->
  <EaDateTimePicker
    v-model="invalidDateTime"
    label="Invalid Field"
    is-invalid
    error-message="DateTime must be in the future"
  />

  <!-- Disabled state -->
  <EaDateTimePicker
    v-model="disabledDateTime"
    label="Read-only DateTime"
    disabled
  />
</template>`

const panelCustomizationCode = `<template>
  <!-- Default panel width (200px) -->
  <EaDateTimePicker
    v-model="defaultPanelDateTime"
    label="Default Panel"
  />

  <!-- Wide panel (300px) -->
  <EaDateTimePicker
    v-model="widePanelDateTime"
    label="Wide Panel"
    :time-panel-width="300"
  />

  <!-- Narrow panel (150px) -->
  <EaDateTimePicker
    v-model="narrowPanelDateTime"
    label="Narrow Panel"
    :time-panel-width="150"
  />
</template>`

const realWorldExamplesCode = `<template>
  <!-- Event scheduling -->
  <EaDateTimePicker
    v-model="eventDateTime"
    label="Event Start Time"
    required
    :minute-interval="15"
    :time-panel-width="250"
  />

  <!-- Meeting planner -->
  <EaDateTimePicker
    v-model="meetingDateTime"
    label="Meeting Time"
    required
    :minute-interval="30"
    value-format="DD/MM/YYYY HH:mm"
  />

  <!-- Appointment booking -->
  <EaDateTimePicker
    v-model="appointmentDateTime"
    label="Appointment Time"
    required
    :minute-interval="15"
    date-format="MM/DD/YYYY"
  />
</template>`

const completeUsageCode = `<template>
  <form @submit.prevent="handleSubmit">
    <EaDateTimePicker
      v-model="formData.startTime"
      label="Event Start Time"
      required
      :minute-interval="15"
      :time-panel-width="250"
      :error="!!formErrors.startTime"
      :error-message="formErrors.startTime"
    />

    <EaDateTimePicker
      v-model="formData.endTime"
      label="Event End Time"
      required
      :minute-interval="15"
      :time-panel-width="250"
      :error="!!formErrors.endTime"
      :error-message="formErrors.endTime"
    />

    <button type="submit">Register Event</button>
    <button type="button" @click="resetForm">Reset</button>
  </form>
</template>

import { ref } from 'vue'
import EaDateTimePicker from '@/components/ui/form/EaDateTimePicker/index.vue'

const formData = ref({
  startTime: new Date(),
  endTime: new Date(Date.now() + 2 * 60 * 60 * 1000)
})

const formErrors = ref<Record<string, string>>({})

const validateForm = () => {
  const errors: Record<string, string> = {}

  if (!formData.value.startTime) {
    errors.startTime = 'Start time is required'
  }

  if (!formData.value.endTime) {
    errors.endTime = 'End time is required'
  }

  if (formData.value.startTime && formData.value.endTime) {
    const start = new Date(formData.value.startTime)
    const end = new Date(formData.value.endTime)

    if (end <= start) {
      errors.endTime = 'End time must be after start time'
    }
  }

  formErrors.value = errors
  return Object.keys(errors).length === 0
}

const handleSubmit = () => {
  if (validateForm()) {
    alert('Form submitted successfully!')
    console.log('Form data:', formData.value)
  }
}

const resetForm = () => {
  formData.value = {
    startTime: new Date(),
    endTime: new Date(Date.now() + 2 * 60 * 60 * 1000)
  }
  formErrors.value = {}
}`
</script>

<style scoped lang="scss">
.datetime-picker-demo {
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

.example-value {
  font-size: 0.8rem;
  color: #64748b;
  background: #f1f5f9;
  padding: 0.5rem;
  border-radius: 6px;
  font-family: 'Monaco', 'Consolas', monospace;
  margin-top: 0.75rem;
}

.example-hint {
  font-size: 0.75rem;
  color: #3b82f6;
  font-style: italic;
  margin-top: 0.5rem;
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

.best-practices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.practice-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
  }
}

.complete-example {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.form-container {
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

.demo-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &--primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--secondary {
    background: white;
    color: #374151;
    border-color: #d1d5db;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    &:hover {
      background: #f9fafb;
      border-color: #9ca3af;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
    }
  }
}

.form-output {
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    color: #e2e8f0;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  pre {
    color: #94a3b8;
    font-size: 0.8rem;
    font-family: 'Monaco', 'Consolas', monospace;
    line-height: 1.5;
    overflow-x: auto;
  }
}

@media (max-width: 768px) {
  .datetime-picker-demo {
    padding: 1rem 0.5rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .demo-section {
    padding: 1.5rem;
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }

  .form-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>
