<template>
  <div class="max-w-7xl mx-auto p-8 space-y-12">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">EaSelect Component</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        A versatile and customizable select dropdown component with keyboard navigation,
        different sizes, and clean design. Perfect for forms and data selection interfaces.
      </p>
    </div>

    <!-- Basic Usage -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Basic Usage</h2>
        <p class="text-gray-600">Simple select with default options and placeholder.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Demo</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="w-80">
              <EaSelect
                placeholder="Choose an option"
                v-model="basicValue"
                :options="basicOptions"
                label="Basic Select"
              />
            </div>
            <div class="mt-4 text-sm text-gray-600">
              Selected: <code class="bg-gray-200 px-2 py-1 rounded">{{ basicValue?.name || 'None' }}</code>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Code</h3>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;EaSelect
  placeholder="Choose an option"
  v-model="basicValue"
  :options="basicOptions"
  label="Basic Select"
/&gt;

// Options data
const basicOptions = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' }
]</code></pre>
        </div>
      </div>
    </section>

    <!-- Sizes -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Different Sizes</h2>
        <p class="text-gray-600">The component supports three different sizes: small, normal (default), and large.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6">
          <h3 class="text-lg font-medium text-gray-800">Demo</h3>
          <div class="bg-gray-50 p-6 rounded-lg space-y-4">
            <div class="w-80">
              <EaSelect
                placeholder="Small Size"
                v-model="sizeSmallValue"
                :options="basicOptions"
                label="Small Size"
                size="small"
              />
            </div>
            <div class="w-80">
              <EaSelect
                placeholder="Normal Size (Default)"
                v-model="sizeNormalValue"
                :options="basicOptions"
                label="Normal Size"
              />
            </div>
            <div class="w-80">
              <EaSelect
                placeholder="Large Size"
                v-model="sizeLargeValue"
                :options="basicOptions"
                label="Large Size"
                size="large"
              />
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Code</h3>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;!-- Small Size --&gt;
&lt;EaSelect
  size="small"
  placeholder="Small Size"
  v-model="value"
  :options="options"
/&gt;

&lt;!-- Normal Size (Default) --&gt;
&lt;EaSelect
  placeholder="Normal Size"
  v-model="value"
  :options="options"
/&gt;

&lt;!-- Large Size --&gt;
&lt;EaSelect
  size="large"
  placeholder="Large Size"
  v-model="value"
  :options="options"
/&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Custom Option Label -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Custom Option Label</h2>
        <p class="text-gray-600">Customize which property to display from your option objects using the optionLabel prop.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Demo</h3>
          <div class="bg-gray-50 p-6 rounded-lg space-y-4">
            <div class="w-80">
              <EaSelect
                placeholder="Select by title"
                v-model="customLabelValue"
                :options="customLabelOptions"
                label="Using 'title' as Label"
                optionLabel="title"
              />
            </div>
            <div class="mt-4 text-sm text-gray-600">
              Selected Object: <code class="bg-gray-200 px-2 py-1 rounded">{{ JSON.stringify(customLabelValue) }}</code>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Code</h3>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;EaSelect
  placeholder="Select by title"
  v-model="value"
  :options="customOptions"
  label="Using 'title' as Label"
  optionLabel="title"
/&gt;

// Custom options with different label property
const customOptions = [
  { id: 1, title: 'JavaScript Developer', category: 'Frontend' },
  { id: 2, title: 'Python Developer', category: 'Backend' },
  { id: 3, title: 'DevOps Engineer', category: 'Infrastructure' }
]</code></pre>
        </div>
      </div>
    </section>

    <!-- Complex Data -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Complex Data Structure</h2>
        <p class="text-gray-600">Working with complex nested objects and arrays in options.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Demo</h3>
          <div class="bg-gray-50 p-6 rounded-lg space-y-4">
            <div class="w-80">
              <EaSelect
                placeholder="Select a user"
                v-model="complexValue"
                :options="complexOptions"
                label="Users with Complex Data"
              />
            </div>
            <div class="mt-4 text-sm text-gray-600">
              <p>Selected User Family Members: {{ complexValue?.family?.length || 0 }}</p>
              <div v-if="complexValue?.family" class="mt-2">
                <p class="font-medium">Family:</p>
                <ul class="list-disc list-inside ml-4">
                  <li v-for="member in complexValue.family" :key="member.name" class="text-xs">
                    {{ member.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Code</h3>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>// Complex nested data structure
const complexOptions = [
  {
    id: 1,
    name: 'John Doe',
    family: [
      { name: 'Jane Doe' },
      { name: 'Jack Doe' }
    ]
  },
  {
    id: 2,
    name: 'Alice Smith',
    family: [
      { name: 'Bob Smith' },
      { name: 'Carol Smith' }
    ]
  }
]

&lt;EaSelect
  v-model="selectedUser"
  :options="complexOptions"
  placeholder="Select a user"
/&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Multiple Instances -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Multiple Instances</h2>
        <p class="text-gray-600">Using multiple select components with different configurations.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Demo</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <EaSelect
                placeholder="Country"
                v-model="countryValue"
                :options="countryOptions"
                label="Country"
                size="large"
              />
              <EaSelect
                placeholder="City"
                v-model="cityValue"
                :options="cityOptions"
                label="City"
              />
              <EaSelect
                placeholder="Language"
                v-model="languageValue"
                :options="languageOptions"
                label="Language"
                size="small"
              />
            </div>
            <div class="mt-4 p-4 bg-white rounded border">
              <h4 class="font-medium text-gray-800 mb-2">Selection Summary:</h4>
              <ul class="text-sm text-gray-600 space-y-1">
                <li>Country: <span class="font-medium">{{ countryValue?.name || 'Not selected' }}</span></li>
                <li>City: <span class="font-medium">{{ cityValue?.name || 'Not selected' }}</span></li>
                <li>Language: <span class="font-medium">{{ languageValue?.name || 'Not selected' }}</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Code</h3>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;div class="grid grid-cols-3 gap-4"&gt;
  &lt;EaSelect
    placeholder="Country"
    v-model="countryValue"
    :options="countryOptions"
    label="Country"
    size="large"
  /&gt;

  &lt;EaSelect
    placeholder="City"
    v-model="cityValue"
    :options="cityOptions"
    label="City"
  /&gt;

  &lt;EaSelect
    placeholder="Language"
    v-model="languageValue"
    :options="languageOptions"
    label="Language"
    size="small"
  /&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Keyboard Navigation -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Keyboard Navigation</h2>
        <p class="text-gray-600">The component supports full keyboard navigation for accessibility.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Demo</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="w-80">
              <EaSelect
                placeholder="Try keyboard navigation"
                v-model="keyboardValue"
                :options="keyboardOptions"
                label="Keyboard Navigation Test"
              />
            </div>
            <div class="mt-4 text-sm text-gray-600">
              <p class="font-medium mb-2">Keyboard shortcuts:</p>
              <ul class="list-disc list-inside space-y-1 text-xs">
                <li><kbd class="bg-gray-200 px-1 rounded">Space</kbd> or <kbd class="bg-gray-200 px-1 rounded">Enter</kbd> - Open dropdown</li>
                <li><kbd class="bg-gray-200 px-1 rounded">↑</kbd> <kbd class="bg-gray-200 px-1 rounded">↓</kbd> - Navigate options</li>
                <li><kbd class="bg-gray-200 px-1 rounded">Enter</kbd> - Select option</li>
                <li><kbd class="bg-gray-200 px-1 rounded">Escape</kbd> - Close dropdown</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Accessibility Features</h3>
          <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul class="text-sm text-blue-800 space-y-2">
              <li>✓ Full keyboard navigation support</li>
              <li>✓ ARIA-compliant markup</li>
              <li>✓ Focus management</li>
              <li>✓ Screen reader friendly</li>
              <li>✓ Tab navigation support</li>
              <li>✓ Escape key handling</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Props Reference -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Props Reference</h2>
        <p class="text-gray-600">Complete list of available props and their descriptions.</p>
      </div>

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
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">options</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">OptionsType[]</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Array of option objects to display in dropdown</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">placeholder</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"Please Select"</td>
              <td class="px-6 py-4 text-sm text-gray-500">Placeholder text when no option is selected</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">optionLabel</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">"name"</td>
              <td class="px-6 py-4 text-sm text-gray-500">Property name to use as display label from option objects</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">label</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Label text displayed above the select input</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">size</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'small' | 'normal' | 'large'</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">'normal'</td>
              <td class="px-6 py-4 text-sm text-gray-500">Size variant of the select component</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">v-model</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">OptionsType | null</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">null</td>
              <td class="px-6 py-4 text-sm text-gray-500">Selected option object (two-way binding)</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">disabled</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Disables the select component</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">error</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Shows error state styling</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">errorMessage</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">-</td>
              <td class="px-6 py-4 text-sm text-gray-500">Error message to display when error is true</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">clearable</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Shows clear button to remove selection</td>
            </tr>
            <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">loading</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">boolean</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">false</td>
              <td class="px-6 py-4 text-sm text-gray-500">Shows loading state with spinner</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Events -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Events</h2>
        <p class="text-gray-600">Events emitted by the component.</p>
      </div>

      <div class="overflow-x-auto">
        <table class="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payload</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <!-- Events are handled automatically by defineModel -->
          </tbody>
        </table>
      </div>
    </section>

        <!-- Advanced Features -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Advanced Features</h2>
        <p class="text-gray-600">Disabled, error states, clearable options, static loading and async data loading.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div class="space-y-6">
          <h3 class="text-lg font-medium text-gray-800">Demo</h3>
          <div class="bg-gray-50 p-6 rounded-lg space-y-4">
            <div class="w-80">
              <EaSelect
                placeholder="Disabled Select"
                v-model="disabledValue"
                :options="basicOptions"
                label="Disabled State"
                disabled
              />
            </div>
            <div class="w-80">
              <EaSelect
                placeholder="Error Select"
                v-model="errorValue"
                :options="basicOptions"
                label="Error State"
                error
                error-message="Please select a valid option"
              />
            </div>
            <div class="w-80">
              <EaSelect
                placeholder="Clearable Select"
                v-model="clearableValue"
                :options="basicOptions"
                label="Clearable Select"
                clearable
              />
            </div>
            <div class="w-80">
              <EaSelect
                placeholder="Static Loading"
                v-model="staticLoadingValue"
                :options="basicOptions"
                label="Static Loading State"
                is-loading
              />
            </div>
            <div class="w-80">
              <EaSelect
                placeholder="Click to load data..."
                v-model="asyncLoadingValue"
                :options="[]"
                label="Async Data Loading"
                :on-load="loadAsyncOptions"
              />
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-lg font-medium text-gray-800">Code</h3>
          <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>&lt;!-- Disabled State --&gt;
&lt;EaSelect
  placeholder="Disabled Select"
  v-model="value"
  :options="options"
  label="Disabled State"
  disabled
/&gt;

&lt;!-- Error State --&gt;
&lt;EaSelect
  v-model="value"
  :options="options"
  label="Error State"
  error
  error-message="Please select a valid option"
/&gt;

&lt;!-- Clearable --&gt;
&lt;EaSelect
  v-model="value"
  :options="options"
  label="Clearable Select"
  clearable
/&gt;

&lt;!-- Static Loading State --&gt;
&lt;EaSelect
  v-model="value"
  :options="options"
  label="Static Loading State"
  is-loading
/&gt;

&lt;!-- Async Data Loading --&gt;
&lt;EaSelect
  placeholder="Click to load data..."
  v-model="value"
  :options="[]"
  label="Async Data Loading"
  :on-load="loadDataAsync"
/&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Type Definitions -->
    <section class="space-y-6">
      <div class="border-b border-gray-200 pb-4">
        <h2 class="text-2xl font-semibold text-gray-900 mb-2">Type Definitions</h2>
        <p class="text-gray-600">TypeScript type definitions for the component.</p>
      </div>

      <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm"><code>interface ISelectProps {
  options: OptionsType[]
  placeholder?: string
  optionLabel?: string
  label?: string
  size?: 'small' | 'normal' | 'large'
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  clearable?: boolean
  isLoading?: boolean
  onLoad?: () => Promise&lt;OptionsType[]&gt;
}

type OptionsType = {
  [key: string]: string | number | unknown
}

// Usage with TypeScript
const options: OptionsType[] = [
  { id: 1, name: 'Option 1', value: 'opt1' },
  { id: 2, name: 'Option 2', value: 'opt2' }
]

const selectedValue = ref&lt;OptionsType | null&gt;(null)

// Async loading example
const loadDataAsync = async (): Promise&lt;OptionsType[]&gt; => {
  const response = await fetch('/api/options')
  return response.json()
}</code></pre>
    </section>
  </div>
</template>

<script setup lang="ts">
import EaSelect from '@/components/ui/form/EaSelect/EaSelect.vue';
import { ref } from 'vue';

// Basic usage
const basicValue = ref(null)
const basicOptions = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Vue.js' },
  { id: 4, name: 'React' },
  { id: 5, name: 'Angular' }
]

// Different sizes
const sizeSmallValue = ref(null)
const sizeNormalValue = ref(null)
const sizeLargeValue = ref(null)

// Custom option label
const customLabelValue = ref(null)
const customLabelOptions = [
  { id: 1, title: 'JavaScript Developer', category: 'Frontend' },
  { id: 2, title: 'Python Developer', category: 'Backend' },
  { id: 3, title: 'DevOps Engineer', category: 'Infrastructure' },
  { id: 4, title: 'UI/UX Designer', category: 'Design' },
  { id: 5, title: 'Data Scientist', category: 'Analytics' }
]

// Complex data
const complexValue = ref(null)
const complexOptions = [
  {
    id: 1,
    name: 'John Doe',
    family: [
      { name: 'Jane Doe' },
      { name: 'Jack Doe' },
      { name: 'Jill Doe' }
    ]
  },
  {
    id: 2,
    name: 'Alice Smith',
    family: [
      { name: 'Bob Smith' },
      { name: 'Carol Smith' }
    ]
  },
  {
    id: 3,
    name: 'David Wilson',
    family: [
      { name: 'Emma Wilson' },
      { name: 'Ethan Wilson' },
      { name: 'Olivia Wilson' },
      { name: 'Liam Wilson' }
    ]
  }
]

// Multiple instances
const countryValue = ref(null)
const cityValue = ref(null)
const languageValue = ref(null)

const countryOptions = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'Canada' },
  { id: 3, name: 'United Kingdom' },
  { id: 4, name: 'Germany' },
  { id: 5, name: 'France' }
]

const cityOptions = [
  { id: 1, name: 'New York' },
  { id: 2, name: 'Los Angeles' },
  { id: 3, name: 'Chicago' },
  { id: 4, name: 'Houston' },
  { id: 5, name: 'Phoenix' }
]

const languageOptions = [
  { id: 1, name: 'English' },
  { id: 2, name: 'Spanish' },
  { id: 3, name: 'French' },
  { id: 4, name: 'German' },
  { id: 5, name: 'Chinese' }
]

// Keyboard navigation
const keyboardValue = ref(null)
const keyboardOptions = [
  { id: 1, name: 'First Option' },
  { id: 2, name: 'Second Option' },
  { id: 3, name: 'Third Option' },
  { id: 4, name: 'Fourth Option' },
  { id: 5, name: 'Fifth Option' },
  { id: 6, name: 'Sixth Option' },
  { id: 7, name: 'Seventh Option' },
  { id: 8, name: 'Eighth Option' }
]

// Advanced features
const disabledValue = ref(null)
const errorValue = ref(null)
const clearableValue = ref(null)
const staticLoadingValue = ref(null)
const asyncLoadingValue = ref(null)

// Async data loading function
const loadAsyncOptions = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Return mock data
  return [
    { id: 1, name: 'Async Option 1' },
    { id: 2, name: 'Async Option 2' },
    { id: 3, name: 'Async Option 3' },
    { id: 4, name: 'Async Option 4' },
    { id: 5, name: 'Async Option 5' }
  ]
}
</script>

<style scoped>
kbd {
  @apply bg-gray-200 px-1 py-0.5 rounded text-xs font-mono;
}
</style>
