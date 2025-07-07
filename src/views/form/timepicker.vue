<template>
  <div class="page-container">
    <!-- Header Section -->
    <div class="page-header">
      <div class="header-content">
        <h1 class="page-title">TimePicker Component</h1>
        <p class="page-description">
          A powerful and flexible time picker component with customizable intervals,
          constraints, keyboard input support, and comprehensive validation features.
        </p>
      </div>
    </div>

    <!-- Quick Demo Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Quick Demo</h2>
        <p class="section-description">
          Interactive examples showing the core functionality of the TimePicker component.
        </p>
      </div>

      <div class="demo-grid">
        <div class="demo-card">
          <h3 class="demo-title">Basic Time Selection</h3>
          <EaTimePicker
            v-model="quickDemo.basic"
            label="Select Time"
            placeholder="Choose a time"
          />
          <div class="demo-feedback">
            <span class="feedback-label">Selected:</span>
            <span class="feedback-value">{{ formatTime(quickDemo.basic) }}</span>
          </div>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Business Hours Only</h3>
          <EaTimePicker
            v-model="quickDemo.business"
            label="Meeting Time"
            placeholder="Business hours only"
            min-time="09:00"
            max-time="18:00"
            :minute-interval="15"
          />
          <div class="demo-feedback">
            <span class="feedback-label">Meeting:</span>
            <span class="feedback-value">{{ formatTime(quickDemo.business) }}</span>
          </div>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">30-Minute Intervals</h3>
          <EaTimePicker
            v-model="quickDemo.intervals"
            label="Appointment Time"
            placeholder="Every 30 minutes"
            :minute-interval="30"
          />
          <div class="demo-feedback">
            <span class="feedback-label">Appointment:</span>
            <span class="feedback-value">{{ formatTime(quickDemo.intervals) }}</span>
          </div>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Keyboard Input</h3>
          <EaTimePicker
            v-model="quickDemo.keyboard"
            label="Type Time"
            placeholder="Type time directly (HH:MM)"
          />
          <div class="demo-feedback">
            <span class="feedback-label">Typed:</span>
            <span class="feedback-value">{{ formatTime(quickDemo.keyboard) }}</span>
          </div>
        </div>
      </div>

      <div class="code-example">
        <h3 class="code-title">Size Configuration</h3>
        <div class="code-blocks">
          <div class="code-block">
            <h4 class="code-subtitle">Size Variants</h4>
            <pre><code>&lt;!-- Small Size --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  size="small"
  placeholder="Small time picker"
/&gt;

&lt;!-- Normal Size (Default) --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  size="normal"
  placeholder="Normal time picker"
/&gt;

&lt;!-- Large Size --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  size="large"
  placeholder="Large time picker"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Size Variants Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Size Variants</h2>
        <p class="section-description">
          Different size options to fit various UI contexts and design requirements.
        </p>
      </div>

      <div class="size-demo">
        <div class="size-item">
          <label class="size-label">Small</label>
          <EaTimePicker
            v-model="sizeDemo.small"
            placeholder="Small size"
            size="small"
          />
        </div>
        <div class="size-item">
          <label class="size-label">Normal (Default)</label>
          <EaTimePicker
            v-model="sizeDemo.normal"
            placeholder="Normal size"
            size="normal"
          />
        </div>
        <div class="size-item">
          <label class="size-label">Large</label>
          <EaTimePicker
            v-model="sizeDemo.large"
            placeholder="Large size"
            size="large"
          />
        </div>
      </div>

      <div class="code-example">
        <h3 class="code-title">Code Examples</h3>
        <div class="code-blocks">
          <div class="code-block">
            <h4 class="code-subtitle">Basic Usage</h4>
            <pre><code>&lt;EaTimePicker
  v-model="timeValue"
  label="Select Time"
  placeholder="Choose a time"
/&gt;</code></pre>
          </div>

          <div class="code-block">
            <h4 class="code-subtitle">With Constraints</h4>
            <pre><code>&lt;EaTimePicker
  v-model="businessTime"
  label="Meeting Time"
  min-time="09:00"
  max-time="18:00"
  :minute-interval="15"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Time Constraints Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Time Constraints</h2>
        <p class="section-description">
          Set minimum and maximum time limits to restrict available time options.
        </p>
      </div>

      <div class="demo-grid">
        <div class="demo-card">
          <h3 class="demo-title">Business Hours (9 AM - 6 PM)</h3>
          <EaTimePicker
            v-model="constraints.business"
            label="Business Hours"
            placeholder="Select business time"
            min-time="09:00"
            max-time="18:00"
          />
          <p class="demo-hint">Only times between 09:00 and 18:00 are available</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Morning Schedule (6 AM - 12 PM)</h3>
          <EaTimePicker
            v-model="constraints.morning"
            label="Morning Time"
            placeholder="Morning hours only"
            min-time="06:00"
            max-time="12:00"
          />
          <p class="demo-hint">Limited to morning hours only</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Evening Hours (6 PM - 11 PM)</h3>
          <EaTimePicker
            v-model="constraints.evening"
            label="Evening Time"
            placeholder="Evening hours only"
            min-time="18:00"
            max-time="23:00"
          />
          <p class="demo-hint">Available for evening appointments</p>
        </div>
      </div>

      <div class="code-example">
        <h3 class="code-title">Time Constraints Examples</h3>
        <div class="code-blocks">
          <div class="code-block">
            <h4 class="code-subtitle">Business Hours & Time Limits</h4>
            <pre><code>&lt;!-- Business Hours (9 AM - 6 PM) --&gt;
&lt;EaTimePicker
  v-model="businessTime"
  label="Business Hours"
  min-time="09:00"
  max-time="18:00"
  placeholder="Select business time"
/&gt;

&lt;!-- Morning Schedule --&gt;
&lt;EaTimePicker
  v-model="morningTime"
  label="Morning Schedule"
  min-time="06:00"
  max-time="12:00"
  placeholder="Morning hours only"
/&gt;

&lt;!-- Evening Hours --&gt;
&lt;EaTimePicker
  v-model="eveningTime"
  label="Evening Schedule"
  min-time="18:00"
  max-time="23:00"
  placeholder="Evening hours only"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Minute Intervals Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Minute Intervals</h2>
        <p class="section-description">
          Control the granularity of time selection with different minute intervals.
        </p>
      </div>

      <div class="demo-grid">
        <div class="demo-card">
          <h3 class="demo-title">5-Minute Steps (Default)</h3>
          <EaTimePicker
            v-model="intervals.five"
            label="Default Interval"
            placeholder="5-minute steps"
            :minute-interval="5"
          />
          <p class="demo-hint">00, 05, 10, 15, 20, 25, 30...</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">15-Minute Steps</h3>
          <EaTimePicker
            v-model="intervals.fifteen"
            label="Appointment Slots"
            placeholder="15-minute steps"
            :minute-interval="15"
          />
          <p class="demo-hint">00, 15, 30, 45</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">30-Minute Steps</h3>
          <EaTimePicker
            v-model="intervals.thirty"
            label="Meeting Slots"
            placeholder="30-minute steps"
            :minute-interval="30"
          />
          <p class="demo-hint">00, 30</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">1-Minute Precision</h3>
          <EaTimePicker
            v-model="intervals.one"
            label="Precise Time"
            placeholder="1-minute precision"
            :minute-interval="1"
          />
          <p class="demo-hint">Precise minute selection</p>
        </div>
      </div>

      <div class="code-example">
        <h3 class="code-title">Minute Intervals Configuration</h3>
        <div class="code-blocks">
          <div class="code-block">
            <h4 class="code-subtitle">Different Time Intervals</h4>
            <pre><code>&lt;!-- 5-Minute Intervals (Default) --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  :minute-interval="5"
  placeholder="Every 5 minutes"
/&gt;

&lt;!-- 15-Minute Intervals --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  :minute-interval="15"
  placeholder="Every 15 minutes"
/&gt;

&lt;!-- 30-Minute Intervals --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  :minute-interval="30"
  placeholder="Every 30 minutes"
/&gt;

&lt;!-- 1-Minute Precision --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  :minute-interval="1"
  placeholder="Every minute"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- States & Validation Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">States & Validation</h2>
        <p class="section-description">
          Different states and validation options for comprehensive form integration.
        </p>
      </div>

      <div class="demo-grid">
        <div class="demo-card">
          <h3 class="demo-title">Required Field</h3>
          <EaTimePicker
            v-model="states.required"
            label="Start Time"
            placeholder="Required field"
            required
          />
          <div class="demo-feedback">
            <span class="feedback-label">Value:</span>
            <span class="feedback-value">{{ formatTime(states.required) }}</span>
          </div>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Error State</h3>
          <EaTimePicker
            v-model="states.error"
            label="Invalid Time"
            placeholder="Error state"
            error
            error-message="Please select a valid time"
          />
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Is-Invalid State</h3>
          <EaTimePicker
            v-model="states.invalid"
            label="Invalid Time Field"
            placeholder="Invalid state"
            is-invalid
            error-message="Time format is invalid"
          />
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Disabled State</h3>
          <EaTimePicker
            v-model="states.disabled"
            label="Disabled Time"
            placeholder="Cannot select time"
            disabled
          />
        </div>
      </div>

      <div class="code-example">
        <h3 class="code-title">States & Validation Examples</h3>
        <div class="code-blocks">
          <div class="code-block">
            <h4 class="code-subtitle">Form States</h4>
            <pre><code>&lt;!-- Required Field --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  label="Start Time"
  required
  placeholder="Required field"
/&gt;

&lt;!-- Error State --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  label="Invalid Time"
  error
  error-message="Please select a valid time"
/&gt;

&lt;!-- Disabled State --&gt;
&lt;EaTimePicker
  v-model="timeValue"
  label="Disabled Time"
  disabled
  placeholder="Cannot select time"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Real-world Use Cases Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Real-world Use Cases</h2>
        <p class="section-description">
          Practical examples showing how to implement TimePicker in common scenarios.
        </p>
      </div>

      <div class="demo-grid">
        <div class="demo-card">
          <h3 class="demo-title">Doctor Appointment</h3>
          <EaTimePicker
            v-model="useCases.doctor"
            label="Appointment Time"
            placeholder="Select appointment time"
            min-time="08:00"
            max-time="17:00"
            :minute-interval="15"
            required
          />
          <p class="demo-hint">8 AM - 5 PM, 15-minute intervals</p>
          <div class="demo-feedback">
            <span class="feedback-label">Appointment:</span>
            <span class="feedback-value">{{ formatTime(useCases.doctor) }}</span>
          </div>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Meeting Scheduler</h3>
          <EaTimePicker
            v-model="useCases.meeting"
            label="Meeting Time"
            placeholder="Schedule meeting"
            min-time="09:00"
            max-time="18:00"
            :minute-interval="30"
          />
          <p class="demo-hint">Business hours, 30-minute slots</p>
          <div class="demo-feedback">
            <span class="feedback-label">Meeting:</span>
            <span class="feedback-value">{{ formatTime(useCases.meeting) }}</span>
          </div>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Alarm Clock</h3>
          <EaTimePicker
            v-model="useCases.alarm"
            label="Alarm Time"
            placeholder="Set alarm"
            :minute-interval="1"
          />
          <p class="demo-hint">Precise minute selection</p>
          <div class="demo-feedback">
            <span class="feedback-label">Alarm:</span>
            <span class="feedback-value">{{ formatTime(useCases.alarm) }}</span>
          </div>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Restaurant Reservation</h3>
          <EaTimePicker
            v-model="useCases.restaurant"
            label="Reservation Time"
            placeholder="Select dining time"
            min-time="17:00"
            max-time="22:00"
            :minute-interval="15"
            required
          />
          <p class="demo-hint">Dinner hours, 15-minute slots</p>
          <div class="demo-feedback">
            <span class="feedback-label">Reservation:</span>
            <span class="feedback-value">{{ formatTime(useCases.restaurant) }}</span>
          </div>
        </div>
      </div>

      <div class="code-example">
        <h3 class="code-title">Real-world Implementation Examples</h3>
        <div class="code-blocks">
          <div class="code-block">
            <h4 class="code-subtitle">Common Use Cases</h4>
            <pre><code>&lt;!-- Doctor Appointment --&gt;
&lt;EaTimePicker
  v-model="appointmentTime"
  label="Appointment Time"
  min-time="08:00"
  max-time="17:00"
  :minute-interval="15"
  required
  placeholder="Select appointment time"
/&gt;

&lt;!-- Meeting Scheduler --&gt;
&lt;EaTimePicker
  v-model="meetingTime"
  label="Meeting Time"
  min-time="09:00"
  max-time="18:00"
  :minute-interval="30"
  placeholder="Schedule meeting"
/&gt;

&lt;!-- Restaurant Reservation --&gt;
&lt;EaTimePicker
  v-model="reservationTime"
  label="Reservation Time"
  min-time="17:00"
  max-time="22:00"
  :minute-interval="15"
  required
  placeholder="Select dining time"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Example Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Advanced Example</h2>
        <p class="section-description">
          Complex time validation with start/end time relationships and duration calculation.
        </p>
      </div>

      <div class="advanced-demo">
        <div class="demo-card large">
          <h3 class="demo-title">Appointment Scheduling Form</h3>

          <div class="form-row">
            <EaTimePicker
              v-model="advanced.startTime"
              label="Start Time"
              placeholder="Select start time"
              min-time="08:00"
              max-time="18:00"
              :minute-interval="15"
              required
              :error="advanced.errors.startTime"
              :error-message="advanced.errors.startTimeMessage"
              @update:model-value="validateStartTime"
            />

            <EaTimePicker
              v-model="advanced.endTime"
              label="End Time"
              placeholder="Select end time"
              :min-time="getMinEndTime()"
              max-time="18:00"
              :minute-interval="15"
              required
              :error="advanced.errors.endTime"
              :error-message="advanced.errors.endTimeMessage"
              @update:model-value="validateEndTime"
            />
          </div>

          <div class="form-row">
            <EaTimePicker
              v-model="advanced.breakTime"
              label="Break Time (Optional)"
              placeholder="Select break time"
              :min-time="getMinBreakTime()"
              :max-time="getMaxBreakTime()"
              :minute-interval="15"
              :disabled="!canSelectBreak()"
            />
          </div>

          <div class="advanced-feedback">
            <div class="feedback-item">
              <span class="label">Duration:</span>
              <span class="value">{{ calculateDuration() }}</span>
            </div>
            <div class="feedback-item">
              <span class="label">Break Time:</span>
              <span class="value">{{ formatTime(advanced.breakTime) || 'No break' }}</span>
            </div>
            <div class="feedback-item">
              <span class="label">Total with Break:</span>
              <span class="value">{{ calculateTotalDuration() }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="code-example">
        <h3 class="code-title">Advanced Form Implementation</h3>
        <div class="code-blocks">
          <div class="code-block">
            <h4 class="code-subtitle">Complex Validation Example</h4>
            <pre><code>&lt;template&gt;
  &lt;div class="appointment-form"&gt;
    &lt;EaTimePicker
      v-model="startTime"
      label="Start Time"
      placeholder="Select start time"
      min-time="08:00"
      max-time="18:00"
      :minute-interval="15"
      required
      :error="errors.startTime"
      :error-message="errors.startTimeMessage"
      @update:model-value="validateStartTime"
    /&gt;

    &lt;EaTimePicker
      v-model="endTime"
      label="End Time"
      placeholder="Select end time"
      :min-time="getMinEndTime()"
      max-time="18:00"
      :minute-interval="15"
      required
      :error="errors.endTime"
      :error-message="errors.endTimeMessage"
      @update:model-value="validateEndTime"
    /&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
          </div>

          <div class="code-block">
            <h4 class="code-subtitle">Script Implementation</h4>
            <pre><code>&lt;script setup&gt;
const startTime = ref(null)
const endTime = ref(null)

const errors = reactive({
  startTime: false,
  startTimeMessage: '',
  endTime: false,
  endTimeMessage: ''
})

const validateStartTime = () => {
  if (!startTime.value) {
    errors.startTime = true
    errors.startTimeMessage = 'Start time is required'
    return
  }
  errors.startTime = false
  errors.startTimeMessage = ''
}

const getMinEndTime = () => {
  if (!startTime.value) return '08:00'
  const nextSlot = new Date(startTime.value)
  nextSlot.setMinutes(nextSlot.getMinutes() + 15)
  return nextSlot.toTimeString().slice(0, 5)
}
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Props Documentation Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Props Documentation</h2>
        <p class="section-description">
          Complete reference of all available props and their usage.
        </p>
      </div>

      <div class="props-grid">
        <div class="prop-card">
          <h4 class="prop-name">modelValue</h4>
          <div class="prop-details">
            <span class="prop-type">Date | null</span>
            <span class="prop-default">null</span>
          </div>
          <p class="prop-description">The selected time value bound to the component</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">label</h4>
          <div class="prop-details">
            <span class="prop-type">string</span>
            <span class="prop-default">undefined</span>
          </div>
          <p class="prop-description">Label text displayed above the time picker</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">placeholder</h4>
          <div class="prop-details">
            <span class="prop-type">string</span>
            <span class="prop-default">'Select time'</span>
          </div>
          <p class="prop-description">Placeholder text shown in the input field</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">size</h4>
          <div class="prop-details">
            <span class="prop-type">'small' | 'normal' | 'large'</span>
            <span class="prop-default">'normal'</span>
          </div>
          <p class="prop-description">Size variant of the time picker component</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">minTime</h4>
          <div class="prop-details">
            <span class="prop-type">string</span>
            <span class="prop-default">undefined</span>
          </div>
          <p class="prop-description">Minimum selectable time in 24-hour format (e.g., '09:00')</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">maxTime</h4>
          <div class="prop-details">
            <span class="prop-type">string</span>
            <span class="prop-default">undefined</span>
          </div>
          <p class="prop-description">Maximum selectable time in 24-hour format (e.g., '18:00')</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">minuteInterval</h4>
          <div class="prop-details">
            <span class="prop-type">number</span>
            <span class="prop-default">5</span>
          </div>
          <p class="prop-description">Time interval in minutes (1, 5, 15, 30, etc.)</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">required</h4>
          <div class="prop-details">
            <span class="prop-type">boolean</span>
            <span class="prop-default">false</span>
          </div>
          <p class="prop-description">Mark the field as required (shows red asterisk)</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">disabled</h4>
          <div class="prop-details">
            <span class="prop-type">boolean</span>
            <span class="prop-default">false</span>
          </div>
          <p class="prop-description">Disable the time picker interaction</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">error</h4>
          <div class="prop-details">
            <span class="prop-type">boolean</span>
            <span class="prop-default">false</span>
          </div>
          <p class="prop-description">Show error state with red border</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">isInvalid</h4>
          <div class="prop-details">
            <span class="prop-type">boolean</span>
            <span class="prop-default">false</span>
          </div>
          <p class="prop-description">Show invalid state (alias for error)</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">errorMessage</h4>
          <div class="prop-details">
            <span class="prop-type">string</span>
            <span class="prop-default">undefined</span>
          </div>
          <p class="prop-description">Error message to display below the input</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">panelWidth</h4>
          <div class="prop-details">
            <span class="prop-type">number</span>
            <span class="prop-default">200</span>
          </div>
          <p class="prop-description">Width of the dropdown panel in pixels</p>
        </div>
      </div>
    </section>

    <!-- Best Practices Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Best Practices</h2>
        <p class="section-description">
          Guidelines and recommendations for optimal TimePicker implementation.
        </p>
      </div>

      <div class="practices-grid">
        <div class="practice-card">
          <h4 class="practice-title">⏰ Choose Appropriate Intervals</h4>
          <p class="practice-description">
            Use 15-30 minute intervals for appointments, 5 minutes for general scheduling,
            and 1 minute for precise timing applications.
          </p>
        </div>

        <div class="practice-card">
          <h4 class="practice-title">🕐 Set Realistic Constraints</h4>
          <p class="practice-description">
            Define min/max times based on business hours or logical time ranges
            to prevent invalid selections.
          </p>
        </div>

        <div class="practice-card">
          <h4 class="practice-title">✅ Provide Clear Validation</h4>
          <p class="practice-description">
            Show meaningful error messages and validate time relationships
            (e.g., end time after start time).
          </p>
        </div>

        <div class="practice-card">
          <h4 class="practice-title">📱 Consider Mobile Experience</h4>
          <p class="practice-description">
            Test on mobile devices and ensure the time picker is easily
            accessible and usable on touch screens.
          </p>
        </div>

        <div class="practice-card">
          <h4 class="practice-title">🎯 Enable Keyboard Input</h4>
          <p class="practice-description">
            Allow users to type time directly for faster input,
            especially for power users and accessibility.
          </p>
        </div>

        <div class="practice-card">
          <h4 class="practice-title">💡 Show Time Format Hints</h4>
          <p class="practice-description">
            Use placeholders or hints to indicate expected time format
            (24-hour vs 12-hour) and available ranges.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import EaTimePicker from '@/components/ui/form/EaTimePicker/index.vue'

// Quick Demo
const quickDemo = reactive({
  basic: null as Date | null,
  business: null as Date | null,
  intervals: null as Date | null,
  keyboard: null as Date | null
})

// Size Demo
const sizeDemo = reactive({
  small: null as Date | null,
  normal: null as Date | null,
  large: null as Date | null
})

// Constraints Demo
const constraints = reactive({
  business: null as Date | null,
  morning: null as Date | null,
  evening: null as Date | null
})

// Intervals Demo
const intervals = reactive({
  five: null as Date | null,
  fifteen: null as Date | null,
  thirty: null as Date | null,
  one: null as Date | null
})

// States Demo
const states = reactive({
  required: null as Date | null,
  error: null as Date | null,
  invalid: null as Date | null,
  disabled: null as Date | null
})

// Use Cases Demo
const useCases = reactive({
  doctor: null as Date | null,
  meeting: null as Date | null,
  alarm: null as Date | null,
  restaurant: null as Date | null
})

// Advanced Example
const advanced = reactive({
  startTime: null as Date | null,
  endTime: null as Date | null,
  breakTime: null as Date | null,
  errors: {
    startTime: false,
    startTimeMessage: '',
    endTime: false,
    endTimeMessage: ''
  }
})

// Helper Functions
const formatTime = (date: Date | null): string => {
  if (!date) return 'Not selected'
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  })
}

const validateStartTime = () => {
  if (!advanced.startTime) {
    advanced.errors.startTime = true
    advanced.errors.startTimeMessage = 'Start time is required'
    return
  }

  const hour = advanced.startTime.getHours()
  if (hour < 8 || hour >= 18) {
    advanced.errors.startTime = true
    advanced.errors.startTimeMessage = 'Start time must be between 8:00 and 18:00'
    return
  }

  advanced.errors.startTime = false
  advanced.errors.startTimeMessage = ''

  if (advanced.endTime) {
    validateEndTime()
  }
}

const validateEndTime = () => {
  if (!advanced.endTime || !advanced.startTime) return

  if (advanced.endTime <= advanced.startTime) {
    advanced.errors.endTime = true
    advanced.errors.endTimeMessage = 'End time must be after start time'
    return
  }

  advanced.errors.endTime = false
  advanced.errors.endTimeMessage = ''
}

const getMinEndTime = (): string => {
  if (!advanced.startTime) return '08:00'

  const nextSlot = new Date(advanced.startTime)
  nextSlot.setMinutes(nextSlot.getMinutes() + 15)

  return nextSlot.toTimeString().slice(0, 5)
}

const getMinBreakTime = (): string => {
  if (!advanced.startTime) return '08:00'
  return advanced.startTime.toTimeString().slice(0, 5)
}

const getMaxBreakTime = (): string => {
  if (!advanced.endTime) return '18:00'
  return advanced.endTime.toTimeString().slice(0, 5)
}

const canSelectBreak = (): boolean => {
  return !!(advanced.startTime && advanced.endTime)
}

const calculateDuration = (): string => {
  if (!advanced.startTime || !advanced.endTime) return 'Not calculated'

  const diff = advanced.endTime.getTime() - advanced.startTime.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
}

const calculateTotalDuration = (): string => {
  const duration = calculateDuration()
  if (duration === 'Not calculated') return duration

  if (advanced.breakTime && advanced.startTime && advanced.endTime) {
    return `${duration} (including break time)`
  }

  return duration
}
</script>

<style scoped lang="scss">
@use '@/assets/main.scss';

.page-container {
  @apply min-h-screen bg-gray-50 py-8;
}

.page-header {
  @apply mb-12;

  .header-content {
    @apply max-w-6xl mx-auto px-6;
  }

  .page-title {
    @apply text-4xl font-bold text-gray-900 mb-4;
  }

  .page-description {
    @apply text-lg text-gray-600 leading-relaxed;
  }
}

.demo-section {
  @apply mb-16;

  .section-header {
    @apply max-w-6xl mx-auto px-6 mb-8;
  }

  .section-title {
    @apply text-2xl font-semibold text-gray-900 mb-4;
  }

  .section-description {
    @apply text-gray-600 leading-relaxed;
  }
}

.demo-grid {
  @apply max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6;
}

.demo-card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;

  &.large {
    @apply md:col-span-2;
  }

  .demo-title {
    @apply text-lg font-medium text-gray-900 mb-4;
  }

  .demo-hint {
    @apply text-sm text-gray-500 mt-2;
  }

  .demo-feedback {
    @apply mt-4 p-3 bg-gray-50 rounded-md;

    .feedback-label {
      @apply text-sm font-medium text-gray-600;
    }

    .feedback-value {
      @apply text-sm text-gray-900 ml-2;
    }
  }
}

.size-demo {
  @apply max-w-6xl mx-auto px-6 space-y-6;

  .size-item {
    @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;

    .size-label {
      @apply block text-sm font-medium text-gray-700 mb-3;
    }
  }
}

.advanced-demo {
  @apply max-w-6xl mx-auto px-6;

  .form-row {
    @apply grid grid-cols-1 md:grid-cols-2 gap-6 mb-6;
  }

  .advanced-feedback {
    @apply mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200;

    .feedback-item {
      @apply flex justify-between items-center py-2;

      .label {
        @apply font-medium text-blue-900;
      }

      .value {
        @apply text-blue-700;
      }
    }
  }
}

.props-grid {
  @apply max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}

.prop-card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-4;

  .prop-name {
    @apply text-sm font-semibold text-gray-900 mb-2;
  }

  .prop-details {
    @apply flex flex-wrap gap-2 mb-2;

    .prop-type {
      @apply text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded;
    }

    .prop-default {
      @apply text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded;
    }
  }

  .prop-description {
    @apply text-sm text-gray-600;
  }
}

.practices-grid {
  @apply max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.practice-card {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6;

  .practice-title {
    @apply text-lg font-medium text-gray-900 mb-3;
  }

  .practice-description {
    @apply text-gray-600 leading-relaxed;
  }
}

.code-example {
  @apply max-w-6xl mx-auto px-6 mt-8;

  .code-title {
    @apply text-xl font-semibold text-gray-900 mb-6;
  }

  .code-blocks {
    @apply space-y-6;
  }

  .code-block {
    @apply bg-gray-900 rounded-lg overflow-hidden;

    .code-subtitle {
      @apply text-sm font-medium text-gray-300 bg-gray-800 px-4 py-2 border-b border-gray-700;
    }

    pre {
      @apply p-4 overflow-x-auto;

      code {
        @apply text-sm text-gray-300 font-mono leading-relaxed;

        &::selection {
          @apply bg-blue-600 bg-opacity-50;
        }
      }
    }
  }
}
</style>

