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

      <div class="code-section">
        <h3 class="code-title">Size Configuration</h3>
        <CodeBlock
          title="Size Variants"
          :code="`<!-- Small Size -->
<EaTimePicker
  v-model=\"timeValue\"
  size=\"small\"
  placeholder=\"Small time picker\"
/>

<!-- Normal Size (Default) -->
<EaTimePicker
  v-model=\"timeValue\"
  size=\"normal\"
  placeholder=\"Normal time picker\"
/>

<!-- Large Size -->
<EaTimePicker
  v-model=\"timeValue\"
  size=\"large\"
  placeholder=\"Large time picker\"
/>`"
        />
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

      <div class="code-section">
        <h3 class="code-title">Time Constraint Examples</h3>
        <CodeBlock
          title="Setting Time Limits"
          :code="`<!-- Business Hours Constraint -->
<EaTimePicker
  v-model=\"businessTime\"
  label=\"Business Hours\"
  min-time=\"09:00\"
  max-time=\"18:00\"
  placeholder=\"Select business time\"
/>

<!-- Morning Only -->
<EaTimePicker
  v-model=\"morningTime\"
  label=\"Morning Schedule\"
  min-time=\"06:00\"
  max-time=\"12:00\"
  placeholder=\"Morning hours only\"
/>

<!-- Evening Only -->
<EaTimePicker
  v-model=\"eveningTime\"
  label=\"Evening Schedule\"
  min-time=\"18:00\"
  max-time=\"23:00\"
  placeholder=\"Evening hours only\"
/>`"
        />
      </div>
    </section>

    <!-- Minute Intervals Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Minute Intervals</h2>
        <p class="section-description">
          Configure time step intervals to match your scheduling requirements.
        </p>
      </div>

      <div class="demo-grid">
        <div class="demo-card">
          <h3 class="demo-title">5-Minute Steps (Default)</h3>
          <EaTimePicker
            v-model="intervals.five"
            label="5-Minute Intervals"
            placeholder="Every 5 minutes"
            :minute-interval="5"
          />
          <p class="demo-hint">00, 05, 10, 15, 20, 25, 30...</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">15-Minute Steps</h3>
          <EaTimePicker
            v-model="intervals.fifteen"
            label="15-Minute Intervals"
            placeholder="Every 15 minutes"
            :minute-interval="15"
          />
          <p class="demo-hint">00, 15, 30, 45</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">30-Minute Steps</h3>
          <EaTimePicker
            v-model="intervals.thirty"
            label="30-Minute Intervals"
            placeholder="Every 30 minutes"
            :minute-interval="30"
          />
          <p class="demo-hint">00, 30</p>
        </div>

        <div class="demo-card">
          <h3 class="demo-title">1-Minute Precision</h3>
          <EaTimePicker
            v-model="intervals.one"
            label="1-Minute Intervals"
            placeholder="Every minute"
            :minute-interval="1"
          />
          <p class="demo-hint">Precise minute selection</p>
        </div>
      </div>

      <div class="code-section">
        <h3 class="code-title">Interval Configuration</h3>
        <CodeBlock
          title="Minute Intervals"
          :code="`<!-- 5-Minute Intervals (Default) -->
<EaTimePicker
  v-model=\"timeValue\"
  :minute-interval=\"5\"
  placeholder=\"Every 5 minutes\"
/>

<!-- 15-Minute Intervals -->
<EaTimePicker
  v-model=\"timeValue\"
  :minute-interval=\"15\"
  placeholder=\"Every 15 minutes\"
/>

<!-- 30-Minute Intervals -->
<EaTimePicker
  v-model=\"timeValue\"
  :minute-interval=\"30\"
  placeholder=\"Every 30 minutes\"
/>

<!-- 1-Minute Precision -->
<EaTimePicker
  v-model=\"timeValue\"
  :minute-interval=\"1\"
  placeholder=\"Every minute\"
/>`"
        />
      </div>
    </section>

    <!-- States & Validation Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">States & Validation</h2>
        <p class="section-description">
          Different states including required fields, error states, and disabled conditions.
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
            placeholder="This field has an error"
            error
            error-message="Please select a valid time"
          />
        </div>

        <div class="demo-card">
          <h3 class="demo-title">Is-Invalid State</h3>
          <EaTimePicker
            v-model="states.invalid"
            label="Invalid Time Field"
            placeholder="Using is-invalid prop"
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

      <div class="code-section">
        <h3 class="code-title">State Management</h3>
        <CodeBlock
          title="States and Validation"
          :code="`<!-- Required Field -->
<EaTimePicker
  v-model=\"timeValue\"
  label=\"Start Time\"
  required
  placeholder=\"Required field\"
/>

<!-- Error State -->
<EaTimePicker
  v-model=\"timeValue\"
  label=\"Invalid Time\"
  error
  error-message=\"Please select a valid time\"
/>

<!-- Is-Invalid State -->
<EaTimePicker
  v-model=\"timeValue\"
  label=\"Invalid Time Field\"
  is-invalid
  error-message=\"Time format is invalid\"
/>

<!-- Disabled State -->
<EaTimePicker
  v-model=\"timeValue\"
  label=\"Disabled Time\"
  disabled
  placeholder=\"Cannot select time\"
/>`"
        />
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

      <div class="code-section">
        <h3 class="code-title">Use Case Examples</h3>
        <CodeBlock
          title="Real-world Implementations"
          :code="`<!-- Doctor Appointment -->
<EaTimePicker
  v-model=\"appointmentTime\"
  label=\"Appointment Time\"
  min-time=\"08:00\"
  max-time=\"17:00\"
  :minute-interval=\"15\"
  required
  placeholder=\"Select appointment time\"
/>

<!-- Meeting Scheduler -->
<EaTimePicker
  v-model=\"meetingTime\"
  label=\"Meeting Time\"
  min-time=\"09:00\"
  max-time=\"18:00\"
  :minute-interval=\"30\"
  placeholder=\"Schedule meeting\"
/>

<!-- Alarm Clock -->
<EaTimePicker
  v-model=\"alarmTime\"
  label=\"Alarm Time\"
  :minute-interval=\"1\"
  placeholder=\"Set alarm\"
/>

<!-- Restaurant Reservation -->
<EaTimePicker
  v-model=\"reservationTime\"
  label=\"Reservation Time\"
  min-time=\"17:00\"
  max-time=\"22:00\"
  :minute-interval=\"15\"
  required
  placeholder=\"Select dining time\"
/>`"
        />
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
          <p class="prop-description">Show error state with red border styling</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">isInvalid</h4>
          <div class="prop-details">
            <span class="prop-type">boolean</span>
            <span class="prop-default">false</span>
          </div>
          <p class="prop-description">Alternative prop for error state (alias for error)</p>
        </div>

        <div class="prop-card">
          <h4 class="prop-name">errorMessage</h4>
          <div class="prop-details">
            <span class="prop-type">string</span>
            <span class="prop-default">undefined</span>
          </div>
          <p class="prop-description">Error message displayed below the input field</p>
        </div>
      </div>
    </section>

    <!-- Events Documentation Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Events Documentation</h2>
        <p class="section-description">
          Available events emitted by the TimePicker component.
        </p>
      </div>

      <div class="events-grid">
        <div class="event-card">
          <h4 class="event-name">update:modelValue</h4>
          <div class="event-payload">
            <span class="payload-type">Date | null</span>
          </div>
          <p class="event-description">Emitted when the selected time value changes</p>
        </div>

        <div class="event-card">
          <h4 class="event-name">change</h4>
          <div class="event-payload">
            <span class="payload-type">Date | null</span>
          </div>
          <p class="event-description">Emitted when the time selection is confirmed</p>
        </div>

        <div class="event-card">
          <h4 class="event-name">focus</h4>
          <div class="event-payload">
            <span class="payload-type">FocusEvent</span>
          </div>
          <p class="event-description">Emitted when the input field receives focus</p>
        </div>

        <div class="event-card">
          <h4 class="event-name">blur</h4>
          <div class="event-payload">
            <span class="payload-type">FocusEvent</span>
          </div>
          <p class="event-description">Emitted when the input field loses focus</p>
        </div>
      </div>
    </section>

    <!-- Complete Usage Example Section -->
    <section class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Complete Usage Example</h2>
        <p class="section-description">
          A comprehensive example showing advanced TimePicker usage with form validation.
        </p>
      </div>

      <div class="usage-demo">
        <div class="form-example">
          <h3 class="form-title">Appointment Booking Form</h3>

          <div class="form-row">
            <EaTimePicker
              v-model="completeExample.startTime"
              label="Start Time"
              placeholder="Select start time"
              min-time="08:00"
              max-time="18:00"
              :minute-interval="15"
              required
              :error="completeExample.errors.startTime"
              :error-message="completeExample.errors.startTimeMessage"
              @change="validateStartTime"
            />
          </div>

          <div class="form-row">
            <EaTimePicker
              v-model="completeExample.endTime"
              label="End Time"
              placeholder="Select end time"
              :min-time="getMinEndTime()"
              max-time="18:00"
              :minute-interval="15"
              required
              :error="completeExample.errors.endTime"
              :error-message="completeExample.errors.endTimeMessage"
              @change="validateEndTime"
            />
          </div>

          <div class="form-row">
            <EaTimePicker
              v-model="completeExample.breakTime"
              label="Break Time (Optional)"
              placeholder="Select break time"
              :min-time="getMinBreakTime()"
              :max-time="getMaxBreakTime()"
              :minute-interval="15"
              :disabled="!canSelectBreak()"
            />
          </div>

          <div class="form-feedback">
            <div class="feedback-row">
              <span class="feedback-label">Duration:</span>
              <span class="feedback-value">{{ calculateDuration() }}</span>
            </div>
            <div class="feedback-row">
              <span class="feedback-label">Total Time:</span>
              <span class="feedback-value">{{ calculateTotalTime() }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="code-section">
        <h3 class="code-title">Complete Implementation</h3>
        <CodeBlock
          title="Advanced Form Example"
          :code="`<template>
  <div class=\"appointment-form\">
    <EaTimePicker
      v-model=\"startTime\"
      label=\"Start Time\"
      placeholder=\"Select start time\"
      min-time=\"08:00\"
      max-time=\"18:00\"
      :minute-interval=\"15\"
      required
      :error=\"errors.startTime\"
      :error-message=\"errors.startTimeMessage\"
      @change=\"validateStartTime\"
    />

    <EaTimePicker
      v-model=\"endTime\"
      label=\"End Time\"
      placeholder=\"Select end time\"
      :min-time=\"getMinEndTime()\"
      max-time=\"18:00\"
      :minute-interval=\"15\"
      required
      :error=\"errors.endTime\"
      :error-message=\"errors.endTimeMessage\"
      @change=\"validateEndTime\"
    />

    <EaTimePicker
      v-model=\"breakTime\"
      label=\"Break Time (Optional)\"
      placeholder=\"Select break time\"
      :min-time=\"getMinBreakTime()\"
      :max-time=\"getMaxBreakTime()\"
      :minute-interval=\"15\"
      :disabled=\"!canSelectBreak()\"
    />
  </div>
</template>

const startTime = ref<Date | null>(null)
const endTime = ref<Date | null>(null)
const breakTime = ref<Date | null>(null)

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

  const hour = startTime.value.getHours()
  if (hour < 8 || hour >= 18) {
    errors.startTime = true
    errors.startTimeMessage = 'Start time must be between 8:00 and 18:00'
    return
  }

  errors.startTime = false
  errors.startTimeMessage = ''

  // Validate end time if it exists
  if (endTime.value) {
    validateEndTime()
  }
}

const validateEndTime = () => {
  if (!endTime.value || !startTime.value) return

  if (endTime.value <= startTime.value) {
    errors.endTime = true
    errors.endTimeMessage = 'End time must be after start time'
    return
  }

  errors.endTime = false
  errors.endTimeMessage = ''
}

const getMinEndTime = (): string => {
  if (!startTime.value) return '08:00'

  const nextSlot = new Date(startTime.value)
  nextSlot.setMinutes(nextSlot.getMinutes() + 15)

  return nextSlot.toTimeString().slice(0, 5)
}

const calculateDuration = (): string => {
  if (!startTime.value || !endTime.value) return 'Not calculated'

  const diff = endTime.value.getTime() - startTime.value.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return hours > 0 ? \`\${hours}h \${minutes}m\` : \`\${minutes}m\`
}`"
        />
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
import CodeBlock from '@/components/general/CodeBlock.vue'

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

// Complete Example
const completeExample = reactive({
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
  if (!completeExample.startTime) {
    completeExample.errors.startTime = true
    completeExample.errors.startTimeMessage = 'Start time is required'
    return
  }

  const hour = completeExample.startTime.getHours()
  if (hour < 8 || hour >= 18) {
    completeExample.errors.startTime = true
    completeExample.errors.startTimeMessage = 'Start time must be between 8:00 and 18:00'
    return
  }

  completeExample.errors.startTime = false
  completeExample.errors.startTimeMessage = ''

  if (completeExample.endTime) {
    validateEndTime()
  }
}

const validateEndTime = () => {
  if (!completeExample.endTime || !completeExample.startTime) return

  if (completeExample.endTime <= completeExample.startTime) {
    completeExample.errors.endTime = true
    completeExample.errors.endTimeMessage = 'End time must be after start time'
    return
  }

  completeExample.errors.endTime = false
  completeExample.errors.endTimeMessage = ''
}

const getMinEndTime = (): string => {
  if (!completeExample.startTime) return '08:00'

  const nextSlot = new Date(completeExample.startTime)
  nextSlot.setMinutes(nextSlot.getMinutes() + 15)

  return nextSlot.toTimeString().slice(0, 5)
}

const getMinBreakTime = (): string => {
  if (!completeExample.startTime) return '08:00'
  return completeExample.startTime.toTimeString().slice(0, 5)
}

const getMaxBreakTime = (): string => {
  if (!completeExample.endTime) return '18:00'
  return completeExample.endTime.toTimeString().slice(0, 5)
}

const canSelectBreak = (): boolean => {
  return !!(completeExample.startTime && completeExample.endTime)
}

const calculateDuration = (): string => {
  if (!completeExample.startTime || !completeExample.endTime) return 'Not calculated'

  const diff = completeExample.endTime.getTime() - completeExample.startTime.getTime()
  const hours = Math.floor(diff / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

  return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`
}

const calculateTotalTime = (): string => {
  const duration = calculateDuration()
  if (duration === 'Not calculated') return duration

  if (completeExample.breakTime && completeExample.startTime && completeExample.endTime) {
    return `${duration} (including break time)`
  }

  return duration
}
</script>

<style scoped lang="scss">
.page-container {
  @apply min-h-screen bg-gradient-to-br from-slate-50 to-blue-50;
}

.page-header {
  @apply bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16;

  .header-content {
    @apply max-w-4xl mx-auto px-6 text-center;
  }

  .page-title {
    @apply text-4xl md:text-5xl font-bold mb-4;
  }

  .page-description {
    @apply text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed;
  }
}

.demo-section {
  @apply max-w-6xl mx-auto px-6 py-12;
}

.section-header {
  @apply text-center mb-10;

  .section-title {
    @apply text-3xl font-bold text-gray-900 mb-4;
  }

  .section-description {
    @apply text-lg text-gray-600 max-w-2xl mx-auto;
  }
}

.demo-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mb-8;
}

.demo-card {
  @apply bg-white rounded-xl shadow-lg border border-gray-100 p-6 space-y-4 hover:shadow-xl transition-shadow;

  .demo-title {
    @apply text-lg font-semibold text-gray-800 mb-4;
  }

  .demo-hint {
    @apply text-sm text-blue-600 italic;
  }

  .demo-feedback {
    @apply bg-gray-50 rounded-lg p-3 space-y-1;

    .feedback-label {
      @apply text-sm font-medium text-gray-600;
    }

    .feedback-value {
      @apply text-sm font-mono text-gray-900 ml-2;
    }
  }
}

.size-demo {
  @apply space-y-6 mb-8;

  .size-item {
    @apply flex items-center space-x-4;

    .size-label {
      @apply w-32 text-sm font-medium text-gray-700;
    }
  }
}

.code-section {
  @apply mt-8;

  .code-title {
    @apply text-xl font-semibold text-gray-800 mb-4;
  }
}

.props-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
}

.prop-card {
  @apply bg-white rounded-lg border border-gray-200 p-4 space-y-3;

  .prop-name {
    @apply text-lg font-semibold text-blue-600;
  }

  .prop-details {
    @apply flex flex-col space-y-1;

    .prop-type {
      @apply text-sm font-mono text-purple-600 bg-purple-50 px-2 py-1 rounded;
    }

    .prop-default {
      @apply text-sm font-mono text-gray-500 bg-gray-50 px-2 py-1 rounded;
    }
  }

  .prop-description {
    @apply text-sm text-gray-600 leading-relaxed;
  }
}

.events-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.event-card {
  @apply bg-white rounded-lg border border-gray-200 p-4 space-y-3;

  .event-name {
    @apply text-lg font-semibold text-green-600;
  }

  .event-payload {
    .payload-type {
      @apply text-sm font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded;
    }
  }

  .event-description {
    @apply text-sm text-gray-600 leading-relaxed;
  }
}

.usage-demo {
  @apply mb-8;
}

.form-example {
  @apply bg-white rounded-xl shadow-lg border border-gray-100 p-8;

  .form-title {
    @apply text-2xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200;
  }

  .form-row {
    @apply mb-6;
  }

  .form-feedback {
    @apply bg-blue-50 rounded-lg p-4 space-y-2 mt-6;

    .feedback-row {
      @apply flex justify-between items-center;

      .feedback-label {
        @apply font-medium text-gray-700;
      }

      .feedback-value {
        @apply font-mono text-blue-600;
      }
    }
  }
}

.practices-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6;
}

.practice-card {
  @apply bg-white rounded-lg border border-gray-200 p-6 space-y-3 hover:shadow-lg transition-shadow;

  .practice-title {
    @apply text-lg font-semibold text-gray-800;
  }

  .practice-description {
    @apply text-sm text-gray-600 leading-relaxed;
  }
}
</style>
