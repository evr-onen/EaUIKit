<template>
  <div class="autocomplete-demo-page p-8 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">EaAutocomplete Component</h1>
      <p class="text-lg text-gray-600">A versatile autocomplete component with search functionality, async loading, and multiple selection support.</p>
    </div>

    <!-- Examples -->
    <div class="space-y-12">
      <!-- Basic Usage -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Basic Usage</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-4">Single Selection</h3>
            <EaAutocomplete
              placeholder="Search and select..."
              v-model="basicValue"
              :options="optionsDummy"
              label="Basic Autocomplete"
            />
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <pre class="text-sm text-gray-800"><code>&lt;EaAutocomplete
  placeholder="Search and select..."
  v-model="basicValue"
  :options="optionsDummy"
  label="Basic Autocomplete"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Multiple Selection -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Multiple Selection</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-4">Multi-select with Clear Button</h3>
            <EaAutocomplete
              placeholder="Select multiple options..."
              v-model="multiValue"
              :options="optionsDummy"
              label="Multi-select Autocomplete"
              :multiselect="true"
              :clearable="true"
            />
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <pre class="text-sm text-gray-800"><code>&lt;EaAutocomplete
  placeholder="Select multiple options..."
  v-model="multiValue"
  :options="optionsDummy"
  label="Multi-select Autocomplete"
  :multiselect="true"
  :clearable="true"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Different Sizes -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Different Sizes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-4">Small</h3>
            <EaAutocomplete
              placeholder="Small size..."
              v-model="smallValue"
              :options="optionsDummy"
              label="Small Size"
              size="small"
            />
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-4">Normal</h3>
            <EaAutocomplete
              placeholder="Normal size..."
              v-model="normalValue"
              :options="optionsDummy"
              label="Normal Size"
              size="normal"
            />
          </div>
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-4">Large</h3>
            <EaAutocomplete
              placeholder="Large size..."
              v-model="largeValue"
              :options="optionsDummy"
              label="Large Size"
              size="large"
            />
          </div>
        </div>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <pre class="text-sm text-gray-800"><code>&lt;EaAutocomplete size="small" ... /&gt;
&lt;EaAutocomplete size="normal" ... /&gt;
&lt;EaAutocomplete size="large" ... /&gt;</code></pre>
        </div>
      </div>

      <!-- Error and Hint States -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Error and Hint States</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">With Hint</h3>
              <EaAutocomplete
                placeholder="Type to search..."
                v-model="hintValue"
                :options="optionsDummy"
                label="With Hint"
                hint="This is a helpful hint message"
              />
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">With Error</h3>
              <EaAutocomplete
                placeholder="This has an error..."
                v-model="errorValue"
                :options="optionsDummy"
                label="With Error"
                :error="true"
                errorMessage="This field is required"
              />
            </div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <pre class="text-sm text-gray-800"><code>&lt;!-- With Hint --&gt;
&lt;EaAutocomplete
  v-model="value"
  :options="options"
  hint="This is a helpful hint message"
/&gt;

&lt;!-- With Error --&gt;
&lt;EaAutocomplete
  v-model="value"
  :options="options"
  :error="true"
  errorMessage="This field is required"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Async Loading -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Async Loading</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Async Data Loading</h3>
              <EaAutocomplete
                placeholder="Click to load async data..."
                v-model="asyncValue"
                :options="[]"
                label="Async Loading"
                :onLoad="loadAsyncData"
                hint="Data will be loaded when dropdown opens"
              />
            </div>
            <div>
              <h3 class="text-lg font-medium text-gray-700 mb-4">Loading State</h3>
              <EaAutocomplete
                placeholder="Loading..."
                v-model="loadingValue"
                :options="optionsDummy"
                label="Loading State"
                :isLoading="true"
              />
            </div>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <pre class="text-sm text-gray-800"><code>&lt;!-- Async Loading --&gt;
&lt;EaAutocomplete
  v-model="value"
  :options="[]"
  :onLoad="loadAsyncData"
/&gt;

&lt;!-- Manual Loading State --&gt;
&lt;EaAutocomplete
  v-model="value"
  :options="options"
  :isLoading="true"
/&gt;

&lt;script&gt;
const loadAsyncData = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  return [
    { id: 1, name: 'Async Option 1' },
    { id: 2, name: 'Async Option 2' }
  ]
}
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Disabled State -->
      <div>
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Disabled State</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 class="text-lg font-medium text-gray-700 mb-4">Disabled Component</h3>
            <EaAutocomplete
              placeholder="This is disabled..."
              v-model="disabledValue"
              :options="optionsDummy"
              label="Disabled Autocomplete"
              :disabled="true"
            />
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <pre class="text-sm text-gray-800"><code>&lt;EaAutocomplete
  v-model="value"
  :options="options"
  :disabled="true"
/&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Values Display -->
    <div class="mt-12 p-6 bg-blue-50 rounded-lg">
      <h3 class="text-lg font-semibold text-gray-800 mb-4">Current Values</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div><strong>Basic:</strong> {{ basicValue }}</div>
        <div><strong>Multi:</strong> {{ multiValue }}</div>
        <div><strong>Small:</strong> {{ smallValue }}</div>
        <div><strong>Normal:</strong> {{ normalValue }}</div>
        <div><strong>Large:</strong> {{ largeValue }}</div>
        <div><strong>Hint:</strong> {{ hintValue }}</div>
        <div><strong>Error:</strong> {{ errorValue }}</div>
        <div><strong>Async:</strong> {{ asyncValue }}</div>
      </div>
    </div>

    <!-- Props Documentation -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Props</h2>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prop</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">options</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">OptionType[]</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">required</td>
              <td class="px-6 py-4 text-sm text-gray-500">Array of options to display</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">placeholder</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Input placeholder text</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">optionLabel</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'name'</td>
              <td class="px-6 py-4 text-sm text-gray-500">Property to use as option label</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">label</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Field label</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">size</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'small' | 'normal' | 'large'</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'normal'</td>
              <td class="px-6 py-4 text-sm text-gray-500">Component size</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">multiselect</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Enable multiple selection</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">disabled</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Disable the component</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">error</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Show error state</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">errorMessage</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Error message to display</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">clearable</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Show clear button</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">isLoading</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Show loading state</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">onLoad</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">() => Promise&lt;OptionType[]&gt;</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Async function to load options</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">hint</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Help text to display</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EaAutocomplete from '@/components/ui/form/EaAutocomplete/index.vue';
import { ref } from 'vue';

// Model values for different examples
const basicValue = ref([])
const multiValue = ref([])
const smallValue = ref([])
const normalValue = ref([])
const largeValue = ref([])
const hintValue = ref([])
const errorValue = ref([])
const asyncValue = ref([])
const loadingValue = ref([])
const disabledValue = ref([])

// Sample options data
const optionsDummy = [
  {
    id: 1,
    name: 'Evren',
    family: [{ name: 'asdasd' }, { name: 'asdasd' }, { name: 'asdasd' }, { name: 'asdasd' },]
  },
  {
    id: 2,
    name: 'Erdem',
  },
  {
    id: 3,
    name: 'Melek',
  },
  {
    id: 4,
    name: 'Ihsan',
  },
  {
    id: 5,
    name: 'Coskun',
  },
  {
    id: 6,
    name: 'Ayşe',
  },
  {
    id: 7,
    name: 'Mehmet',
  },
  {
    id: 8,
    name: 'Fatma',
  },
]

// Async data loading function
const loadAsyncData = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  return [
    { id: 101, name: 'Async User 1' },
    { id: 102, name: 'Async User 2' },
    { id: 103, name: 'Async User 3' },
    { id: 104, name: 'Async User 4' },
    { id: 105, name: 'Remote Data Option' },
  ]
}

</script>

<style scoped></style>
