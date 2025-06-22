<template>
  <div class="demo-container">
    <!-- Header -->
    <div class="demo-header">
      <h1 class="demo-title">EaDatePicker Component</h1>
      <p class="demo-description">
        A comprehensive date picker component with single date selection, date range selection,
        keyboard navigation, and customizable formatting options.
      </p>
    </div>

    <!-- Basic Usage -->
    <section class="demo-section">
      <h2 class="section-title">Basic Usage</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Single Date</h3>
          <EaDatePicker
            v-model="singleDate"
            label="Select Date"
            placeholder="Choose a date"
          />
          <p class="example-value">Selected: {{ formatDate(singleDate) }}</p>
        </div>

        <div class="example-item">
          <h3>Date Range</h3>
          <EaDatePicker
            v-model="dateRange"
            label="Select Date Range"
            placeholder="Choose date range"
            range
          />
          <p class="example-value">Range: {{ formatDateRange(dateRange) }}</p>
        </div>

        <div class="example-item">
          <h3>With Custom Placeholder</h3>
          <EaDatePicker
            v-model="customPlaceholder"
            label="Event Date"
            placeholder="When is your event?"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Single Date --&gt;
&lt;EaDatePicker
  v-model="singleDate"
  label="Select Date"
  placeholder="Choose a date"
/&gt;

&lt;!-- Date Range --&gt;
&lt;EaDatePicker
  v-model="dateRange"
  label="Select Date Range"
  range
/&gt;</code></pre>
      </div>
    </section>

    <!-- Sizes -->
    <section class="demo-section">
      <h2 class="section-title">Different Sizes</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Small</h3>
          <EaDatePicker
            v-model="sizeSmall"
            label="Small Date Picker"
            placeholder="Small size"
            size="small"
          />
        </div>

        <div class="example-item">
          <h3>Normal (Default)</h3>
          <EaDatePicker
            v-model="sizeNormal"
            label="Normal Date Picker"
            placeholder="Normal size"
            size="normal"
          />
        </div>

        <div class="example-item">
          <h3>Large</h3>
          <EaDatePicker
            v-model="sizeLarge"
            label="Large Date Picker"
            placeholder="Large size"
            size="large"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaDatePicker size="small" /&gt;
&lt;EaDatePicker size="normal" /&gt; &lt;!-- Default --&gt;
&lt;EaDatePicker size="large" /&gt;</code></pre>
      </div>
    </section>

    <!-- Date Formats (Display) -->
    <section class="demo-section">
      <h2 class="section-title">Date Formats (Display)</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>DD/MM/YYYY (Default)</h3>
          <EaDatePicker
            v-model="formatDefault"
            label="Default Format"
            placeholder="DD/MM/YYYY"
            date-format="DD/MM/YYYY"
          />
          <p class="example-value">Value: {{ formatDefault }}</p>
        </div>

        <div class="example-item">
          <h3>MM/DD/YYYY</h3>
          <EaDatePicker
            v-model="formatUS"
            label="US Format"
            placeholder="MM/DD/YYYY"
            date-format="MM/DD/YYYY"
          />
          <p class="example-value">Value: {{ formatUS }}</p>
        </div>

        <div class="example-item">
          <h3>YYYY-MM-DD</h3>
          <EaDatePicker
            v-model="formatISO"
            label="ISO Format"
            placeholder="YYYY-MM-DD"
            date-format="YYYY-MM-DD"
          />
          <p class="example-value">Value: {{ formatISO }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaDatePicker date-format="DD/MM/YYYY" /&gt;
&lt;EaDatePicker date-format="MM/DD/YYYY" /&gt;
&lt;EaDatePicker date-format="YYYY-MM-DD" /&gt;</code></pre>
      </div>
    </section>

    <!-- Value Formats (Output) -->
    <section class="demo-section">
      <h2 class="section-title">Value Formats (Output)</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Default (Date Object)</h3>
          <EaDatePicker
            v-model="valueDefault"
            label="Returns Date Object"
            placeholder="Select date"
          />
          <p class="example-value">Type: {{ typeof valueDefault }}</p>
          <p class="example-value">Value: {{ valueDefault }}</p>
        </div>

        <div class="example-item">
          <h3>DD/MM/YYYY String</h3>
          <EaDatePicker
            v-model="valueString"
            label="Returns String"
            placeholder="Select date"
            value-format="DD/MM/YYYY"
          />
          <p class="example-value">Type: {{ typeof valueString }}</p>
          <p class="example-value">Value: {{ valueString }}</p>
        </div>

        <div class="example-item">
          <h3>YYYY-MM-DD String</h3>
          <EaDatePicker
            v-model="valueISOString"
            label="Returns ISO String"
            placeholder="Select date"
            value-format="YYYY-MM-DD"
          />
          <p class="example-value">Type: {{ typeof valueISOString }}</p>
          <p class="example-value">Value: {{ valueISOString }}</p>
        </div>

        <div class="example-item">
          <h3>Range with String Output</h3>
          <EaDatePicker
            v-model="valueRangeString"
            label="Range as Strings"
            placeholder="Select date range"
            range
            value-format="DD/MM/YYYY"
          />
          <p class="example-value">Type: {{ Array.isArray(valueRangeString) ? 'Array' : typeof valueRangeString }}</p>
          <p class="example-value">Value: {{ JSON.stringify(valueRangeString) }}</p>
        </div>

        <div class="example-item">
          <h3>Range with Date Output</h3>
          <EaDatePicker
            v-model="valueRangeDate"
            label="Range as Dates"
            placeholder="Select date range"
            range
          />
          <p class="example-value">Type: {{ Array.isArray(valueRangeDate) ? 'Array' : typeof valueRangeDate }}</p>
          <p class="example-value">Value: {{ formatDateRange(valueRangeDate) }}</p>
        </div>

        <div class="example-item">
          <h3>Combined: Display MM/DD, Output YYYY-MM-DD</h3>
          <EaDatePicker
            v-model="valueCombined"
            label="Different Display vs Output"
            placeholder="MM/DD/YYYY"
            date-format="MM/DD/YYYY"
            value-format="YYYY-MM-DD"
          />
          <p class="example-value">Display: MM/DD/YYYY format</p>
          <p class="example-value">Output: {{ valueCombined }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Returns Date object --&gt;
&lt;EaDatePicker v-model="dateValue" /&gt;

&lt;!-- Returns formatted string --&gt;
&lt;EaDatePicker
  v-model="stringValue"
  value-format="DD/MM/YYYY"
/&gt;

&lt;!-- Different display vs output format --&gt;
&lt;EaDatePicker
  v-model="combinedValue"
  date-format="MM/DD/YYYY"
  value-format="YYYY-MM-DD"
/&gt;</code></pre>
      </div>
    </section>

    <!-- Required Fields -->
    <section class="demo-section">
      <h2 class="section-title">Required Fields</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Required Date</h3>
          <EaDatePicker
            v-model="requiredDate"
            label="Birth Date"
            placeholder="Select your birth date"
            required
          />
        </div>

        <div class="example-item">
          <h3>Optional Date</h3>
          <EaDatePicker
            v-model="optionalDate"
            label="Optional Date"
            placeholder="This field is optional"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaDatePicker
  v-model="requiredDate"
  label="Birth Date"
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
          <EaDatePicker
            v-model="errorDate"
            label="Invalid Date"
            placeholder="This field has an error"
            error
            error-message="Please select a valid date"
          />
        </div>

        <div class="example-item">
          <h3>Is-Invalid State</h3>
          <EaDatePicker
            v-model="invalidDate"
            label="Invalid Date Field"
            placeholder="Using is-invalid prop"
            is-invalid
            error-message="Date must be in the future"
          />
        </div>

        <div class="example-item">
          <h3>Disabled State</h3>
          <EaDatePicker
            v-model="disabledDate"
            label="Disabled Date"
            placeholder="Cannot select date"
            disabled
          />
        </div>

        <div class="example-item">
          <h3>Disabled with Value</h3>
          <EaDatePicker
            v-model="disabledWithValueDate"
            label="Read-only Date"
            placeholder="Fixed date"
            disabled
          />
        </div>

        <div class="example-item">
          <h3>Required + Error</h3>
          <EaDatePicker
            v-model="requiredErrorDate"
            label="Required Field"
            placeholder="This field is required"
            required
            error
            error-message="This field is required"
          />
        </div>

        <div class="example-item">
          <h3>Range with Error</h3>
          <EaDatePicker
            v-model="rangeErrorDate"
            label="Invalid Range"
            placeholder="Select date range"
            range
            is-invalid
            error-message="End date must be after start date"
          />
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;!-- Error State --&gt;
&lt;EaDatePicker
  v-model="errorDate"
  label="Invalid Date"
  error
  error-message="Please select a valid date"
/&gt;

&lt;!-- Is-Invalid State --&gt;
&lt;EaDatePicker
  v-model="invalidDate"
  label="Invalid Date Field"
  is-invalid
  error-message="Date must be in the future"
/&gt;

&lt;!-- Disabled State --&gt;
&lt;EaDatePicker
  v-model="disabledDate"
  label="Disabled Date"
  disabled
/&gt;</code></pre>
      </div>
    </section>

    <!-- Range Selection Examples -->
    <section class="demo-section">
      <h2 class="section-title">Date Range Selection</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Vacation Dates</h3>
          <EaDatePicker
            v-model="vacationRange"
            label="Vacation Period"
            placeholder="Select vacation dates"
            range
          />
          <p class="example-value">Duration: {{ calculateDuration(vacationRange) }}</p>
        </div>

        <div class="example-item">
          <h3>Project Timeline</h3>
          <EaDatePicker
            v-model="projectRange"
            label="Project Duration"
            placeholder="Select project timeline"
            range
          />
          <p class="example-value">Duration: {{ calculateDuration(projectRange) }}</p>
        </div>
      </div>

      <div class="code-example">
        <h4>Code Example:</h4>
        <pre><code>&lt;EaDatePicker
  v-model="dateRange"
  label="Select Period"
  placeholder="Choose date range"
  range
/&gt;</code></pre>
      </div>
    </section>

    <!-- Interactive Features -->
    <section class="demo-section">
      <h2 class="section-title">Interactive Features</h2>
      <div class="example-grid">
        <div class="example-item">
          <h3>Today Button</h3>
          <EaDatePicker
            v-model="todayExample"
            label="Quick Today Selection"
            placeholder="Click Today button in calendar"
          />
          <p class="example-value">Selected: {{ formatDate(todayExample) }}</p>
        </div>

        <div class="example-item">
          <h3>Clear Button</h3>
          <EaDatePicker
            v-model="clearExample"
            label="Clearable Date"
            placeholder="Select date then clear"
          />
          <p class="example-value">Value: {{ clearExample ? formatDate(clearExample) : 'Empty' }}</p>
        </div>

        <div class="example-item">
          <h3>Keyboard Navigation</h3>
          <EaDatePicker
            v-model="keyboardExample"
            label="Keyboard Input"
            placeholder="Type date or use calendar"
          />
          <p class="example-hint">Try typing: 25/12/2024</p>
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
              <td>Date | [Date, Date] | null</td>
              <td>null</td>
              <td>Selected date(s) - single date or date range</td>
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
              <td>'Select date'</td>
              <td>Placeholder text in the input field</td>
            </tr>
            <tr>
              <td>size</td>
              <td>'small' | 'normal' | 'large'</td>
              <td>'normal'</td>
              <td>Size variant of the date picker</td>
            </tr>
            <tr>
              <td>range</td>
              <td>boolean</td>
              <td>false</td>
              <td>Enable date range selection</td>
            </tr>
            <tr>
              <td>dateFormat</td>
              <td>string</td>
              <td>'DD/MM/YYYY'</td>
              <td>Date display format</td>
            </tr>
            <tr>
              <td>valueFormat</td>
              <td>string</td>
              <td>undefined</td>
              <td>Format string for output value (e.g., 'DD/MM/YYYY'). If provided, returns formatted string instead of Date object</td>
            </tr>
            <tr>
              <td>panelWidth</td>
              <td>number</td>
              <td>300</td>
              <td>Width of the calendar panel in pixels</td>
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
              <td>Disable the date picker</td>
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
          <h4>Single Dates:</h4>
          <pre>{{ JSON.stringify({ singleDate, requiredDate, todayExample }, null, 2) }}</pre>
        </div>
        <div class="debug-item">
          <h4>Date Ranges:</h4>
          <pre>{{ JSON.stringify({ dateRange, vacationRange, projectRange }, null, 2) }}</pre>
        </div>
        <div class="debug-item">
          <h4>Value Format Examples:</h4>
          <pre>{{ JSON.stringify({
            valueDefault: { type: typeof valueDefault, value: valueDefault },
            valueString: { type: typeof valueString, value: valueString },
            valueISOString: { type: typeof valueISOString, value: valueISOString },
            valueRangeString: { type: typeof valueRangeString, value: valueRangeString },
            valueCombined: { type: typeof valueCombined, value: valueCombined }
          }, null, 2) }}</pre>
        </div>
        <div class="debug-item">
          <h4>Error & Disabled States:</h4>
          <pre>{{ JSON.stringify({
            errorDate: formatDate(errorDate),
            invalidDate: formatDate(invalidDate),
            disabledDate: formatDate(disabledDate),
            disabledWithValueDate: formatDate(disabledWithValueDate),
            requiredErrorDate: formatDate(requiredErrorDate),
            rangeErrorDate: formatDateRange(rangeErrorDate)
          }, null, 2) }}</pre>
        </div>
    </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EaDatePicker from '@/components/ui/form/EaDatePicker/datePicker.vue';

// Basic examples
const singleDate = ref<Date | null>(null);
const dateRange = ref<[Date, Date] | null>(null);
const customPlaceholder = ref<Date | null>(null);

// Size examples
const sizeSmall = ref<Date | null>(null);
const sizeNormal = ref<Date | null>(null);
const sizeLarge = ref<Date | null>(null);

// Format examples (display)
const formatDefault = ref<Date | null>(null);
const formatUS = ref<Date | null>(null);
const formatISO = ref<Date | null>(null);

// Value format examples (output)
const valueDefault = ref<Date | null>(null);
const valueString = ref<string | null>(null);
const valueISOString = ref<string | null>(null);
const valueRangeString = ref<[string, string] | null>(null);
const valueRangeDate = ref<[Date, Date] | null>(null);
const valueCombined = ref<string | null>(null);

// Required examples
const requiredDate = ref<Date | null>(null);
const optionalDate = ref<Date | null>(null);

// Error and disabled state examples
const errorDate = ref<Date | null>(null);
const invalidDate = ref<Date | null>(null);
const disabledDate = ref<Date | null>(null);
const createDisabledDateValue = () => {
  const date = new Date();
  date.setDate(date.getDate() + 7); // 7 days from now
  return date;
};
const disabledWithValueDate = ref<Date | null>(createDisabledDateValue());
const requiredErrorDate = ref<Date | null>(null);
const rangeErrorDate = ref<[Date, Date] | null>(null);

// Range examples
const vacationRange = ref<[Date, Date] | null>(null);
const projectRange = ref<[Date, Date] | null>(null);

// Interactive examples
const todayExample = ref<Date | null>(null);
const clearExample = ref<Date | null>(new Date());
const keyboardExample = ref<Date | null>(null);

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
