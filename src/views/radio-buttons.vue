<template>
  <div class="radio-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EARadioButtons Component</h1>
        <p class="demo-description">
          A flexible and accessible radio button group component with various configuration options,
          error handling, and customizable styling for forms and user interfaces.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different radio button variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Usage</h4>
            <p>Simple radio group with multiple options</p>
            <EARadioButtons
              :options="basicOptions"
              v-model="basicValue"
              name="basic-demo"
              errorMessage=""
            />
            <div class="result-display">
              <strong>Selected:</strong> {{ basicValue?.label || 'None' }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Error State</h4>
            <p>Radio group with validation error</p>
            <EARadioButtons
              :options="errorOptions"
              v-model="errorValue"
              name="error-demo"
              errorMessage="Please select an option"
            />
            <div class="result-display">
              <strong>Selected:</strong> {{ errorValue?.label || 'None' }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Disabled Options</h4>
            <p>Radio group with some disabled options</p>
            <EARadioButtons
              :options="disabledOptions"
              v-model="disabledValue"
              name="disabled-demo"
              errorMessage=""
            />
            <div class="result-display">
              <strong>Selected:</strong> {{ disabledValue?.label || 'None' }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Payment Methods</h4>
            <p>Real-world example with payment options</p>
            <EARadioButtons
              :options="paymentOptions"
              v-model="paymentValue"
              name="payment-demo"
              errorMessage=""
            />
            <div class="result-display">
              <strong>Selected:</strong> {{ paymentValue?.label || 'None' }}
            </div>
          </div>
        </div>

        <CodeBlock
          :code="quickDemoCode"
          title="Quick Demo Usage"
        />
      </section>

      <!-- Use Cases -->
      <section class="demo-section">
        <h2>Common Use Cases</h2>
        <p class="section-description">
          EARadioButtons is perfect for various scenarios where users need to select one option from multiple choices.
        </p>

        <div class="demo-group">
          <!-- Priority Levels -->
          <div class="use-case-demo">
            <h3>Priority Levels</h3>
            <div class="demo-content">
              <EARadioButtons
                :options="priorityOptions"
                v-model="priorityValue"
                name="priority-demo"
                errorMessage=""
              />
              <div class="result-display">
                <strong>Selected Priority:</strong> {{ priorityValue?.label || 'None' }}
              </div>
            </div>
          </div>

          <!-- Subscription Plans -->
          <div class="use-case-demo">
            <h3>Subscription Plans</h3>
            <div class="demo-content">
              <EARadioButtons
                :options="subscriptionOptions"
                v-model="subscriptionValue"
                name="subscription-demo"
                errorMessage=""
              />
              <div class="result-display">
                <strong>Selected Plan:</strong> {{ subscriptionValue?.label || 'None' }}
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="useCasesCode"
          title="Use Cases Example"
        />
      </section>

      <!-- Form Validation -->
      <section class="demo-section">
        <h2>Form Validation Example</h2>
        <p class="section-description">
          Demonstrate form validation with required fields and error handling.
        </p>

        <div class="form-demo">
          <form @submit.prevent="handleSubmit">
            <div class="form-field">
              <label class="form-label">
                Subscription Plan *
              </label>
              <EARadioButtons
                :options="formSubscriptionOptions"
                v-model="formSubscriptionValue"
                name="form-subscription"
                :errorMessage="subscriptionError"
              />
            </div>

            <div class="form-field">
              <label class="form-label">
                Newsletter Frequency
              </label>
              <EARadioButtons
                :options="newsletterOptions"
                v-model="newsletterValue"
                name="newsletter-demo"
                errorMessage=""
              />
            </div>

            <button type="submit" class="btn btn--primary">
              Submit Form
            </button>
          </form>

          <div v-if="formResult" class="form-result">
            <h4>Form Submitted Successfully!</h4>
            <p><strong>Subscription:</strong> {{ formResult.subscription }}</p>
            <p><strong>Newsletter:</strong> {{ formResult.newsletter }}</p>
          </div>
        </div>

        <CodeBlock
          :code="formValidationCode"
          title="Form Validation Example"
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
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>options</code></td>
                <td>RadioOption[]</td>
                <td>Yes</td>
                <td>-</td>
                <td>Array of radio button options with label and disabled properties</td>
              </tr>
              <tr>
                <td><code>name</code></td>
                <td>string</td>
                <td>Yes</td>
                <td>-</td>
                <td>Name attribute for the radio group (required for accessibility)</td>
              </tr>
              <tr>
                <td><code>v-model</code></td>
                <td>RadioOption | null</td>
                <td>Yes</td>
                <td>null</td>
                <td>Selected option object, null when no option is selected</td>
              </tr>
              <tr>
                <td><code>errorMessage</code></td>
                <td>string</td>
                <td>No</td>
                <td>''</td>
                <td>Error message to display below the radio group</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- RadioOption Interface -->
      <section class="demo-section">
        <h2>RadioOption Interface</h2>
        <p class="section-description">
          The RadioOption interface defines the structure for each radio button option.
        </p>

        <CodeBlock
          :code="radioOptionInterface"
          title="RadioOption Interface"
        />
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
                <td>RadioOption | null</td>
                <td>Emitted when the selected option changes</td>
              </tr>
              <tr>
                <td><code>change</code></td>
                <td>RadioOption | null</td>
                <td>Emitted when the user selects a different option</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Usage Examples -->
      <section class="demo-section">
        <h2>Complete Usage Examples</h2>
        <p class="section-description">
          Comprehensive examples showing different ways to implement EARadioButtons in your applications.
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

          <h3>Dynamic Options</h3>
          <CodeBlock
            :code="dynamicOptionsCode"
            title="Dynamic Options Example"
          />
        </div>
      </section>

      <!-- Accessibility -->
      <section class="demo-section">
        <h2>Accessibility Features</h2>
        <p class="section-description">
          EARadioButtons is built with accessibility in mind, following WCAG guidelines and best practices.
        </p>

        <div class="accessibility-features">
          <div class="feature-item">
            <h4>🎯 Keyboard Navigation</h4>
            <p>Use arrow keys to navigate between options, Space/Enter to select</p>
          </div>
          <div class="feature-item">
            <h4>🔍 Screen Reader Support</h4>
            <p>Proper ARIA labels and roles for assistive technologies</p>
          </div>
          <div class="feature-item">
            <h4>🎨 Focus Management</h4>
            <p>Clear visual focus indicators and logical tab order</p>
          </div>
          <div class="feature-item">
            <h4>📝 Semantic HTML</h4>
            <p>Uses native radio input elements with proper labeling</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import EARadioButtons from '@/components/ui/form/EaRadioButtons/EARadioButtons.vue';
import CodeBlock from '@/components/general/CodeBlock.vue';
import { ref } from 'vue';

// Define RadioOption interface for type safety
interface RadioOption {
  label: string;
  disabled?: boolean;
}

interface FormResult {
  subscription: string;
  newsletter: string;
}

// Basic Usage
const basicOptions: RadioOption[] = [
  { label: 'Small' },
  { label: 'Medium' },
  { label: 'Large' },
];
const basicValue = ref<RadioOption | null>(null);

// Error State
const errorOptions: RadioOption[] = [
  { label: 'Yes' },
  { label: 'No' },
  { label: 'Maybe' },
];
const errorValue = ref<RadioOption | null>(null);

// Disabled Options
const disabledOptions: RadioOption[] = [
  { label: 'Available Option' },
  { label: 'Disabled Option', disabled: true },
  { label: 'Another Available' },
  { label: 'Also Disabled', disabled: true },
];
const disabledValue = ref<RadioOption | null>(null);

// Payment Methods
const paymentOptions: RadioOption[] = [
  { label: 'Credit Card' },
  { label: 'Debit Card' },
  { label: 'PayPal' },
  { label: 'Bank Transfer', disabled: true },
  { label: 'Cryptocurrency' },
];
const paymentValue = ref<RadioOption | null>(null);

// Priority Levels
const priorityOptions: RadioOption[] = [
  { label: 'Low Priority' },
  { label: 'Normal Priority' },
  { label: 'High Priority' },
  { label: 'Critical Priority' },
];
const priorityValue = ref<RadioOption | null>(null);

// Subscription Plans
const subscriptionOptions: RadioOption[] = [
  { label: 'Free Plan' },
  { label: 'Basic Plan - $9.99/month' },
  { label: 'Premium Plan - $19.99/month' },
  { label: 'Enterprise Plan - $49.99/month' },
];
const subscriptionValue = ref<RadioOption | null>(null);

// Form Validation
const formSubscriptionOptions: RadioOption[] = [
  { label: 'Free Plan' },
  { label: 'Basic Plan - $9.99/month' },
  { label: 'Premium Plan - $19.99/month' },
  { label: 'Enterprise Plan - $49.99/month' },
];
const formSubscriptionValue = ref<RadioOption | null>(null);
const subscriptionError = ref('');

const newsletterOptions: RadioOption[] = [
  { label: 'Daily' },
  { label: 'Weekly' },
  { label: 'Monthly' },
  { label: 'Never' },
];
const newsletterValue = ref<RadioOption | null>(newsletterOptions[2]); // Default to Monthly

const formResult = ref<FormResult | null>(null);

const handleSubmit = () => {
  // Reset error
  subscriptionError.value = '';

  // Validate required field
  if (!formSubscriptionValue.value) {
    subscriptionError.value = 'Please select a subscription plan';
    return;
  }

  // Submit form
  formResult.value = {
    subscription: formSubscriptionValue.value.label,
    newsletter: newsletterValue.value ? newsletterValue.value.label : 'Not selected'
  };

  // Reset form after 3 seconds
  setTimeout(() => {
    formResult.value = null;
  }, 3000);
};

// Code examples
const quickDemoCode = `<template>
  <EARadioButtons
    :options="basicOptions"
    v-model="selectedValue"
    name="basic-demo"
    errorMessage=""
  />

  <div class="result">
    Selected: {{ selectedValue?.label || 'None' }}
  </div>
</template>

import { ref } from 'vue';
import EARadioButtons from '@/components/ui/form/EaRadioButtons/EARadioButtons.vue';

interface RadioOption {
  label: string;
  disabled?: boolean;
}

const basicOptions: RadioOption[] = [
  { label: 'Small' },
  { label: 'Medium' },
  { label: 'Large' },
];

const selectedValue = ref<RadioOption | null>(null);`;

const useCasesCode = `<template>
  <!-- Priority Selection -->
  <EARadioButtons
    :options="priorityOptions"
    v-model="priorityValue"
    name="priority-selection"
    errorMessage=""
  />

  <!-- Payment Methods -->
  <EARadioButtons
    :options="paymentOptions"
    v-model="paymentValue"
    name="payment-method"
    errorMessage=""
  />
</template>

const priorityOptions: RadioOption[] = [
  { label: 'Low Priority' },
  { label: 'Normal Priority' },
  { label: 'High Priority' },
  { label: 'Critical Priority' },
];

const paymentOptions: RadioOption[] = [
  { label: 'Credit Card' },
  { label: 'Debit Card' },
  { label: 'PayPal' },
  { label: 'Bank Transfer', disabled: true },
  { label: 'Cryptocurrency' },
];`;

const formValidationCode = `<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-field">
      <label class="form-label">Subscription Plan *</label>
      <EARadioButtons
        :options="subscriptionOptions"
        v-model="subscriptionValue"
        name="subscription"
        :errorMessage="subscriptionError"
      />
    </div>

    <button type="submit" class="btn btn--primary">
      Submit Form
    </button>
  </form>
</template>

const subscriptionOptions: RadioOption[] = [
  { label: 'Free Plan' },
  { label: 'Basic Plan - $9.99/month' },
  { label: 'Premium Plan - $19.99/month' },
  { label: 'Enterprise Plan - $49.99/month' },
];

const subscriptionValue = ref<RadioOption | null>(null);
const subscriptionError = ref('');

const handleSubmit = () => {
  subscriptionError.value = '';

  if (!subscriptionValue.value) {
    subscriptionError.value = 'Please select a subscription plan';
    return;
  }

  // Process form submission
  console.log('Selected plan:', subscriptionValue.value.label);
};`;

const radioOptionInterface = `interface RadioOption {
  label: string;        // Display text for the radio button
  disabled?: boolean;   // Optional: disable the option
}

// Usage example
const options: RadioOption[] = [
  { label: 'Option 1' },
  { label: 'Option 2', disabled: true },
  { label: 'Option 3' },
];`;

const basicImplementationCode = `<template>
  <div class="radio-group">
    <h3>Select Size</h3>
    <EARadioButtons
      :options="sizeOptions"
      v-model="selectedSize"
      name="size-selection"
      errorMessage=""
    />

    <p v-if="selectedSize">
      You selected: {{ selectedSize.label }}
    </p>
  </div>
</template>

import { ref } from 'vue';
import EARadioButtons from '@/components/ui/form/EaRadioButtons/EARadioButtons.vue';

interface RadioOption {
  label: string;
  disabled?: boolean;
}

const sizeOptions: RadioOption[] = [
  { label: 'Small' },
  { label: 'Medium' },
  { label: 'Large' },
  { label: 'Extra Large' },
];

const selectedSize = ref<RadioOption | null>(null);`;

const advancedFormCode = `<template>
  <form @submit.prevent="submitForm" class="user-form">
    <div class="form-section">
      <h3>Account Type</h3>
      <EARadioButtons
        :options="accountTypes"
        v-model="formData.accountType"
        name="account-type"
        :errorMessage="errors.accountType"
      />
    </div>

    <div class="form-section">
      <h3>Notification Preferences</h3>
      <EARadioButtons
        :options="notificationOptions"
        v-model="formData.notifications"
        name="notifications"
        :errorMessage="errors.notifications"
      />
    </div>

    <button type="submit" :disabled="!isFormValid" class="submit-btn">
      Create Account
    </button>
  </form>
</template>

import { ref, computed } from 'vue';

interface FormData {
  accountType: RadioOption | null;
  notifications: RadioOption | null;
}

const formData = ref<FormData>({
  accountType: null,
  notifications: null,
});

const errors = ref({
  accountType: '',
  notifications: '',
});

const accountTypes: RadioOption[] = [
  { label: 'Personal Account' },
  { label: 'Business Account' },
  { label: 'Developer Account' },
];

const notificationOptions: RadioOption[] = [
  { label: 'All Notifications' },
  { label: 'Important Only' },
  { label: 'No Notifications' },
];

const isFormValid = computed(() => {
  return formData.value.accountType && formData.value.notifications;
});

const submitForm = () => {
  // Validate form
  errors.value.accountType = formData.value.accountType ? '' : 'Please select an account type';
  errors.value.notifications = formData.value.notifications ? '' : 'Please select notification preference';

  if (isFormValid.value) {
    // Submit form data
    console.log('Form submitted:', formData.value);
  }
};`;

const dynamicOptionsCode = `<template>
  <div class="dynamic-radio-demo">
    <div class="controls">
      <button @click="loadCountries" class="btn btn--secondary">
        Load Countries
      </button>
      <button @click="loadLanguages" class="btn btn--secondary">
        Load Languages
      </button>
    </div>

    <EARadioButtons
      v-if="dynamicOptions.length > 0"
      :options="dynamicOptions"
      v-model="selectedOption"
      name="dynamic-selection"
      :errorMessage="dynamicError"
    />

    <div v-if="loading" class="loading">
      Loading options...
    </div>
  </div>
</template>

const dynamicOptions = ref<RadioOption[]>([]);
const selectedOption = ref<RadioOption | null>(null);
const dynamicError = ref('');
const loading = ref(false);

const loadCountries = async () => {
  loading.value = true;
  dynamicError.value = '';

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    dynamicOptions.value = [
      { label: 'United States' },
      { label: 'United Kingdom' },
      { label: 'Germany' },
      { label: 'France' },
      { label: 'Japan' },
    ];
  } catch (error) {
    dynamicError.value = 'Failed to load countries';
  } finally {
    loading.value = false;
  }
};

const loadLanguages = async () => {
  loading.value = true;
  dynamicError.value = '';

  try {
    await new Promise(resolve => setTimeout(resolve, 800));

    dynamicOptions.value = [
      { label: 'English' },
      { label: 'Spanish' },
      { label: 'French' },
      { label: 'German' },
      { label: 'Chinese', disabled: true },
    ];
  } catch (error) {
    dynamicError.value = 'Failed to load languages';
  } finally {
    loading.value = false;
  }
};`;
</script>

<style scoped lang="scss">
.radio-demo {
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
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
  gap: 2rem;
}

.use-case-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .demo-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.form-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2rem;

  .form-field {
    margin-bottom: 1.5rem;
  }

  .form-label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }
}

.form-result {
  margin-top: 1.5rem;
  padding: 1rem;
  background: #dcfce7;
  border: 1px solid #bbf7d0;
  border-radius: 8px;

  h4 {
    font-weight: 600;
    color: #166534;
    margin-bottom: 0.5rem;
  }

  p {
    color: #166534;
    margin: 0.25rem 0;
  }
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
  }
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

.accessibility-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.feature-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.5;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .radio-demo {
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

  .accessibility-features {
    grid-template-columns: 1fr;
  }
}
</style>
