<template>
  <div class="min-h-screen w-full p-8 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-8">EARadioButtons Component Demo</h1>

        <!-- Basic Usage -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Basic Usage</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <EARadioButtons
              :options="basicOptions"
              v-model="basicValue"
              name="basic-demo"
              errorMessage=""
            />
            <div class="mt-4 p-3 bg-blue-50 rounded">
              <strong>Selected Value:</strong> {{ basicValue ? basicValue.label : 'None' }}
            </div>
          </div>
        </section>

        <!-- With Error State -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Error State</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <EARadioButtons
              :options="errorOptions"
              v-model="errorValue"
              name="error-demo"
              errorMessage="Please select an option"
            />
            <div class="mt-4 p-3 bg-blue-50 rounded">
              <strong>Selected Value:</strong> {{ errorValue ? errorValue.label : 'None' }}
            </div>
          </div>
        </section>

        <!-- With Disabled Options -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Disabled Options</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <EARadioButtons
              :options="disabledOptions"
              v-model="disabledValue"
              name="disabled-demo"
              errorMessage=""
            />
            <div class="mt-4 p-3 bg-blue-50 rounded">
              <strong>Selected Value:</strong> {{ disabledValue ? disabledValue.label : 'None' }}
            </div>
          </div>
        </section>

        <!-- Size Options (if implemented) -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Different Scenarios</h2>

          <!-- Payment Methods -->
          <div class="mb-8">
            <h3 class="text-lg font-medium text-gray-600 mb-3">Payment Methods</h3>
            <div class="bg-gray-50 p-6 rounded-lg">
              <EARadioButtons
                :options="paymentOptions"
                v-model="paymentValue"
                name="payment-demo"
                errorMessage=""
              />
              <div class="mt-4 p-3 bg-blue-50 rounded">
                <strong>Selected Payment:</strong> {{ paymentValue ? paymentValue.label : 'None' }}
              </div>
            </div>
          </div>

          <!-- Priority Levels -->
          <div class="mb-8">
            <h3 class="text-lg font-medium text-gray-600 mb-3">Priority Levels</h3>
            <div class="bg-gray-50 p-6 rounded-lg">
              <EARadioButtons
                :options="priorityOptions"
                v-model="priorityValue"
                name="priority-demo"
                errorMessage=""
              />
              <div class="mt-4 p-3 bg-blue-50 rounded">
                <strong>Selected Priority:</strong> {{ priorityValue ? priorityValue.label : 'None' }}
              </div>
            </div>
          </div>
        </section>

        <!-- Form Validation Example -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Form Validation Example</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <form @submit.prevent="handleSubmit">
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Subscription Plan *
                </label>
                <EARadioButtons
                  :options="subscriptionOptions"
                  v-model="subscriptionValue"
                  name="subscription-demo"
                  :errorMessage="subscriptionError"
                />
              </div>

              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Newsletter Frequency
                </label>
                <EARadioButtons
                  :options="newsletterOptions"
                  v-model="newsletterValue"
                  name="newsletter-demo"
                  errorMessage=""
                />
              </div>

              <button
                type="submit"
                class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Submit Form
              </button>
            </form>

            <div v-if="formResult" class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 class="font-medium text-green-800 mb-2">Form Submitted Successfully!</h4>
              <p><strong>Subscription:</strong> {{ formResult.subscription }}</p>
              <p><strong>Newsletter:</strong> {{ formResult.newsletter }}</p>
            </div>
          </div>
        </section>

        <!-- API Documentation -->
        <section class="mb-12">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">API Documentation</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-600 mb-3">Props</h3>
            <div class="overflow-x-auto">
              <table class="min-w-full table-auto border-collapse">
                <thead>
                  <tr class="bg-gray-100">
                    <th class="border border-gray-300 px-4 py-2 text-left">Prop</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Required</th>
                    <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="border border-gray-300 px-4 py-2 font-mono">options</td>
                    <td class="border border-gray-300 px-4 py-2">RadioOption[]</td>
                    <td class="border border-gray-300 px-4 py-2">Yes</td>
                    <td class="border border-gray-300 px-4 py-2">Array of radio button options</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-2 font-mono">name</td>
                    <td class="border border-gray-300 px-4 py-2">string</td>
                    <td class="border border-gray-300 px-4 py-2">Yes</td>
                    <td class="border border-gray-300 px-4 py-2">Name attribute for the radio group</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-2 font-mono">v-model</td>
                    <td class="border border-gray-300 px-4 py-2">RadioOption | null</td>
                    <td class="border border-gray-300 px-4 py-2">Yes</td>
                    <td class="border border-gray-300 px-4 py-2">Selected option object</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-2 font-mono">errorMessage</td>
                    <td class="border border-gray-300 px-4 py-2">string</td>
                    <td class="border border-gray-300 px-4 py-2">No</td>
                    <td class="border border-gray-300 px-4 py-2">Error message to display</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 class="text-lg font-medium text-gray-600 mb-3 mt-6">RadioOption Interface</h3>
            <div class="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono text-sm">
              <div>interface RadioOption {</div>
              <div class="ml-4">label: string;</div>
              <div class="ml-4">disabled?: boolean;</div>
              <div>}</div>
            </div>
          </div>
        </section>

        <!-- Code Examples -->
        <section>
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Code Examples</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-medium text-gray-600 mb-3">Basic Usage</h3>
            <pre class="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;template&gt;
  &lt;EARadioButtons
    :options="options"
    v-model="selectedValue"
    name="my-radio-group"
    errorMessage=""
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const options = [
  { label: 'Option 1' },
  { label: 'Option 2', disabled: true },
  { label: 'Option 3' },
];

const selectedValue = ref(null);
&lt;/script&gt;</code></pre>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EARadioButtons from '@/components/ui/form/EaRadioButtons/EARadioButtons.vue';
import { ref } from 'vue';

// Basic Usage
const basicOptions = [
  { label: 'Small' },
  { label: 'Medium' },
  { label: 'Large' },
];
const basicValue = ref(null);

// Error State
const errorOptions = [
  { label: 'Yes' },
  { label: 'No' },
  { label: 'Maybe' },
];
const errorValue = ref(null);

// Disabled Options
const disabledOptions = [
  { label: 'Available Option' },
  { label: 'Disabled Option', disabled: true },
  { label: 'Another Available' },
  { label: 'Also Disabled', disabled: true },
];
const disabledValue = ref(null);

// Payment Methods
const paymentOptions = [
  { label: 'Credit Card' },
  { label: 'Debit Card' },
  { label: 'PayPal' },
  { label: 'Bank Transfer', disabled: true },
  { label: 'Cryptocurrency' },
];
const paymentValue = ref(null);

// Priority Levels
const priorityOptions = [
  { label: 'Low Priority' },
  { label: 'Normal Priority' },
  { label: 'High Priority' },
  { label: 'Critical Priority' },
];
const priorityValue = ref(null);

// Form Validation
const subscriptionOptions = [
  { label: 'Free Plan' },
  { label: 'Basic Plan - $9.99/month' },
  { label: 'Premium Plan - $19.99/month' },
  { label: 'Enterprise Plan - $49.99/month' },
];
const subscriptionValue = ref(null);
const subscriptionError = ref('');

const newsletterOptions = [
  { label: 'Daily' },
  { label: 'Weekly' },
  { label: 'Monthly' },
  { label: 'Never' },
];
const newsletterValue = ref(newsletterOptions[2]); // Default to Monthly

const formResult = ref(null);

const handleSubmit = () => {
  // Reset error
  subscriptionError.value = '';

  // Validate required field
  if (!subscriptionValue.value) {
    subscriptionError.value = 'Please select a subscription plan';
    return;
  }

  // Submit form
  formResult.value = {
    subscription: subscriptionValue.value.label,
    newsletter: newsletterValue.value ? newsletterValue.value.label : 'Not selected'
  };

  // Reset form after 3 seconds
  setTimeout(() => {
    formResult.value = null;
  }, 3000);
};
</script>

<style scoped>
/* Additional custom styles for demo page */
</style>
