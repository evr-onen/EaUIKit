<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">EaMultiselect Component</h1>
        <p class="text-lg text-gray-600">A powerful and flexible multiselect component with comprehensive features</p>
      </div>

      <!-- Basic Usage -->
      <section class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Basic Usage</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Large Size</h3>
            <EaMultiselect
              placeholder="Choose options"
              v-model="basicValue"
              :options="sampleOptions"
              label="Large Multiselect"
              size="large"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Normal Size</h3>
            <EaMultiselect
              placeholder="Select items"
              v-model="normalValue"
              :options="sampleOptions"
              label="Normal Multiselect"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Small Size</h3>
            <EaMultiselect
              placeholder="Pick options"
              v-model="smallValue"
              :options="sampleOptions"
              label="Small Multiselect"
              size="small"
            />
          </div>
        </div>

        <!-- Code Example -->
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>&lt;EaMultiselect
  placeholder="Choose options"
  v-model="basicValue"
  :options="sampleOptions"
  label="Large Multiselect"
  size="large"
/&gt;</code></pre>
        </div>
      </section>

      <!-- Component States -->
      <section class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Component States</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Disabled</h3>
            <EaMultiselect
              placeholder="Disabled field"
              v-model="disabledValue"
              :options="sampleOptions"
              label="Disabled State"
              :disabled="true"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Loading</h3>
            <EaMultiselect
              placeholder="Loading..."
              v-model="loadingValue"
              :options="sampleOptions"
              label="Loading State"
              :isLoading="true"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">With Error</h3>
            <EaMultiselect
              placeholder="Has error"
              v-model="errorValue"
              :options="sampleOptions"
              label="Error State"
              :error="true"
              errorMessage="This field is required"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Clearable</h3>
            <EaMultiselect
              placeholder="Clearable field"
              v-model="clearableValue"
              :options="sampleOptions"
              label="Clearable State"
              :clearable="true"
            />
          </div>
        </div>

        <!-- Code Example -->
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>&lt;EaMultiselect
  placeholder="Has error"
  v-model="errorValue"
  :options="sampleOptions"
  label="Error State"
  :error="true"
  errorMessage="This field is required"
/&gt;</code></pre>
        </div>
      </section>

      <!-- Selection Limits -->
      <section class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Dynamic Badge Display</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Auto Overflow (Narrow Container)</h3>
            <div class="w-60">
              <EaMultiselect
                placeholder="Select multiple"
                v-model="overflowTestValue"
                :options="sampleOptions"
                label="Narrow Container Test"
              />
            </div>
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Auto Overflow (Wide Container)</h3>
            <EaMultiselect
              placeholder="Select multiple"
              v-model="overflowTestValue2"
              :options="sampleOptions"
              label="Wide Container Test"
            />
          </div>
        </div>

        <!-- Code Example -->
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>&lt;!-- Dynamic overflow detection - no limit needed --&gt;
&lt;EaMultiselect
  placeholder="Select multiple"
  v-model="overflowTestValue"
  :options="sampleOptions"
  label="Auto Overflow Test"
/&gt;

&lt;!-- Badges automatically collapse to "+X more" when they overflow --&gt;</code></pre>
        </div>
      </section>

      <!-- Custom Option Labels -->
      <section class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Custom Option Labels</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Using 'title' as Label</h3>
            <EaMultiselect
              placeholder="Select by title"
              v-model="customLabelValue"
              :options="customLabelOptions"
              label="Custom Label Field"
              option-label="title"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Using 'description' as Label</h3>
            <EaMultiselect
              placeholder="Select by description"
              v-model="customLabelValue2"
              :options="customLabelOptions"
              label="Description Field"
              option-label="description"
            />
          </div>
        </div>

        <!-- Code Example -->
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>&lt;EaMultiselect
  placeholder="Select by title"
  v-model="customLabelValue"
  :options="customLabelOptions"
  label="Custom Label Field"
  option-label="title"
/&gt;</code></pre>
        </div>
      </section>

      <!-- With Hints -->
      <section class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">With Hints</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Field with Hint</h3>
            <EaMultiselect
              placeholder="Select options"
              v-model="hintValue"
              :options="sampleOptions"
              label="Skills"
              hint="Choose multiple skills that match your expertise"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Required Field</h3>
            <EaMultiselect
              placeholder="Required field"
              v-model="requiredValue"
              :options="sampleOptions"
              label="Required Field *"
              :required="true"
              hint="This field is mandatory"
            />
          </div>
        </div>

        <!-- Code Example -->
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>&lt;EaMultiselect
  placeholder="Select options"
  v-model="hintValue"
  :options="sampleOptions"
  label="Skills"
  hint="Choose multiple skills that match your expertise"
/&gt;</code></pre>
        </div>
      </section>

      <!-- Async Loading -->
      <section class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Async Loading</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Load from API</h3>
            <EaMultiselect
              placeholder="Click to load data"
              v-model="asyncValue"
              :options="[]"
              label="Async Loading"
              :onLoad="loadAsyncOptions"
              hint="Options will be loaded asynchronously"
            />
          </div>
          <div>
            <h3 class="text-sm font-medium mb-2 text-gray-700">Dynamic Overflow Test</h3>
            <div class="w-80">
              <EaMultiselect
                placeholder="Test overflow behavior"
                v-model="strictLimitValue"
                :options="sampleOptions"
                label="Container Overflow Test"
                hint="Select multiple items to see overflow"
              />
            </div>
          </div>
        </div>

        <!-- Code Example -->
        <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <pre class="text-green-400 text-sm"><code>&lt;EaMultiselect
  placeholder="Click to load data"
  v-model="asyncValue"
  :options="[]"
  label="Async Loading"
  :onLoad="loadAsyncOptions"
  hint="Options will be loaded asynchronously"
/&gt;

&lt;script&gt;
const loadAsyncOptions = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  return [
    { id: 1, name: 'Async Option 1', category: 'Remote' },
    { id: 2, name: 'Async Option 2', category: 'Remote' },
    { id: 3, name: 'Async Option 3', category: 'Remote' },
    { id: 4, name: 'Async Option 4', category: 'Remote' },
    { id: 5, name: 'Async Option 5', category: 'Remote' }
  ]
}
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- Props Documentation -->
      <section class="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Props Documentation</h2>
        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Prop</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Default</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">options</td>
                <td class="border border-gray-300 px-4 py-2">OptionsType[]</td>
                <td class="border border-gray-300 px-4 py-2">-</td>
                <td class="border border-gray-300 px-4 py-2">Array of options to display</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">placeholder</td>
                <td class="border border-gray-300 px-4 py-2">string</td>
                <td class="border border-gray-300 px-4 py-2">"Please Select"</td>
                <td class="border border-gray-300 px-4 py-2">Placeholder text</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">optionLabel</td>
                <td class="border border-gray-300 px-4 py-2">string</td>
                <td class="border border-gray-300 px-4 py-2">'name'</td>
                <td class="border border-gray-300 px-4 py-2">Property name to use as display label</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">label</td>
                <td class="border border-gray-300 px-4 py-2">string</td>
                <td class="border border-gray-300 px-4 py-2">-</td>
                <td class="border border-gray-300 px-4 py-2">Label for the field</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">size</td>
                <td class="border border-gray-300 px-4 py-2">'small' | 'normal' | 'large'</td>
                <td class="border border-gray-300 px-4 py-2">'normal'</td>
                <td class="border border-gray-300 px-4 py-2">Size of the component</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">disabled</td>
                <td class="border border-gray-300 px-4 py-2">boolean</td>
                <td class="border border-gray-300 px-4 py-2">false</td>
                <td class="border border-gray-300 px-4 py-2">Disable the component</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">error</td>
                <td class="border border-gray-300 px-4 py-2">boolean</td>
                <td class="border border-gray-300 px-4 py-2">false</td>
                <td class="border border-gray-300 px-4 py-2">Show error state</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">errorMessage</td>
                <td class="border border-gray-300 px-4 py-2">string</td>
                <td class="border border-gray-300 px-4 py-2">-</td>
                <td class="border border-gray-300 px-4 py-2">Error message to display</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">clearable</td>
                <td class="border border-gray-300 px-4 py-2">boolean</td>
                <td class="border border-gray-300 px-4 py-2">false</td>
                <td class="border border-gray-300 px-4 py-2">Show clear button</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">isLoading</td>
                <td class="border border-gray-300 px-4 py-2">boolean</td>
                <td class="border border-gray-300 px-4 py-2">false</td>
                <td class="border border-gray-300 px-4 py-2">Show loading state</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">hint</td>
                <td class="border border-gray-300 px-4 py-2">string</td>
                <td class="border border-gray-300 px-4 py-2">-</td>
                <td class="border border-gray-300 px-4 py-2">Help text to display</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">onLoad</td>
                <td class="border border-gray-300 px-4 py-2">() => Promise&lt;OptionsType[]&gt;</td>
                <td class="border border-gray-300 px-4 py-2">-</td>
                <td class="border border-gray-300 px-4 py-2">Async function to load options</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono">multiselect</td>
                <td class="border border-gray-300 px-4 py-2">boolean</td>
                <td class="border border-gray-300 px-4 py-2">true</td>
                <td class="border border-gray-300 px-4 py-2">Enable multiple selection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Debug Section -->
      <section class="bg-gray-100 rounded-lg p-6">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Selected Values (Debug)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-medium mb-2">Basic Values:</h3>
            <pre class="bg-white p-3 rounded border text-xs overflow-auto max-h-40">{{ JSON.stringify({ basicValue, normalValue, smallValue }, null, 2) }}</pre>
          </div>
          <div>
            <h3 class="font-medium mb-2">State Values:</h3>
            <pre class="bg-white p-3 rounded border text-xs overflow-auto max-h-40">{{ JSON.stringify({ disabledValue, loadingValue, errorValue, clearableValue }, null, 2) }}</pre>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import EaMultiselect from '@/components/ui/form/EaMultiselect/index.vue';
import { ref } from 'vue';

// Basic usage values
const basicValue = ref([])
const normalValue = ref([])
const smallValue = ref([])

// State values
const disabledValue = ref([])
const loadingValue = ref([])
const errorValue = ref([])
const clearableValue = ref([])

// Limit values
const overflowTestValue = ref([])
const overflowTestValue2 = ref([])

// Custom label values
const customLabelValue = ref([])
const customLabelValue2 = ref([])

// Additional values
const hintValue = ref([])
const requiredValue = ref([])

// Async values
const asyncValue = ref([])
const strictLimitValue = ref([])

// Sample options with standard structure
const sampleOptions = [
  {
    id: 1,
    name: 'Frontend Developer',
    department: 'Engineering',
    level: 'Senior'
  },
  {
    id: 2,
    name: 'Backend Developer',
    department: 'Engineering',
    level: 'Mid'
  },
  {
    id: 3,
    name: 'UI/UX Designer',
    department: 'Design',
    level: 'Senior'
  },
  {
    id: 4,
    name: 'Product Manager',
    department: 'Product',
    level: 'Lead'
  },
  {
    id: 5,
    name: 'DevOps Engineer',
    department: 'Engineering',
    level: 'Senior'
  },
  {
    id: 6,
    name: 'Data Scientist',
    department: 'Analytics',
    level: 'Mid'
  },
  {
    id: 7,
    name: 'Marketing Specialist',
    department: 'Marketing',
    level: 'Junior'
  },
  {
    id: 8,
    name: 'Sales Representative',
    department: 'Sales',
    level: 'Mid'
  }
]

// Custom label options for demonstration
const customLabelOptions = [
  {
    id: 1,
    title: 'React Development',
    description: 'Modern frontend framework for building user interfaces',
    category: 'Frontend',
    difficulty: 'Intermediate'
  },
  {
    id: 2,
    title: 'Node.js Development',
    description: 'Server-side JavaScript runtime environment',
    category: 'Backend',
    difficulty: 'Intermediate'
  },
  {
    id: 3,
    title: 'Vue.js Development',
    description: 'Progressive framework for building user interfaces',
    category: 'Frontend',
    difficulty: 'Beginner'
  },
  {
    id: 4,
    title: 'Python Development',
    description: 'Versatile programming language for web and data science',
    category: 'Backend',
    difficulty: 'Beginner'
  },
  {
    id: 5,
    title: 'Mobile Development',
    description: 'Cross-platform mobile application development',
    category: 'Mobile',
    difficulty: 'Advanced'
  }
]

// Async loading function
const loadAsyncOptions = async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  return [
    { id: 1, name: 'Async Option 1', category: 'Remote' },
    { id: 2, name: 'Async Option 2', category: 'Remote' },
    { id: 3, name: 'Async Option 3', category: 'Remote' },
    { id: 4, name: 'Async Option 4', category: 'Remote' },
    { id: 5, name: 'Async Option 5', category: 'Remote' }
  ]
}
</script>

<style scoped>
/* Custom responsive grid styles */
.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .lg\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

/* Custom scrollbar for code blocks */
pre::-webkit-scrollbar {
  height: 6px;
}

pre::-webkit-scrollbar-track {
  background: #1f2937;
}

pre::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}

pre::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
