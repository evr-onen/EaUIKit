<template>
  <div class="select-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaSelect Component</h1>
        <p class="demo-description">
          A versatile and accessible select dropdown component with keyboard navigation,
          multiple sizes, and extensive customization options for modern form interfaces.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different select configurations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Select</h4>
            <p>Simple dropdown with default options</p>
            <EaSelect
              placeholder="Choose an option"
              v-model="basicValue"
              :options="basicOptions"
              label="Basic Select"
            />
            <div class="result-display">
              Selected: {{ basicValue?.name || 'None' }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Required Field</h4>
            <p>Field marked as required with asterisk</p>
            <EaSelect
              placeholder="This field is required"
              v-model="requiredValue"
              :options="basicOptions"
              label="Required Field"
              required
            />
            <div class="result-display">
              Selected: {{ requiredValue?.name || 'None' }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Large Size</h4>
            <p>Select with larger size variant</p>
            <EaSelect
              placeholder="Large size select"
              v-model="largeValue"
              :options="basicOptions"
              label="Large Select"
              size="large"
            />
            <div class="result-display">
              Selected: {{ largeValue?.name || 'None' }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Clearable</h4>
            <p>Select with clear button option</p>
            <EaSelect
              placeholder="Clearable select"
              v-model="clearableValue"
              :options="basicOptions"
              label="Clearable Select"
              clearable
            />
            <div class="result-display">
              Selected: {{ clearableValue?.name || 'None' }}
            </div>
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
          EaSelect supports three different size options: small, normal (default), and large for various UI contexts.
        </p>

        <div class="demo-group">
          <div class="size-demo-item">
            <EaSelect
              placeholder="Small Size"
              v-model="sizeSmallValue"
              :options="basicOptions"
              label="Small Size"
              size="small"
            />
          </div>
          <div class="size-demo-item">
            <EaSelect
              placeholder="Normal Size (Default)"
              v-model="sizeNormalValue"
              :options="basicOptions"
              label="Normal Size"
            />
          </div>
          <div class="size-demo-item">
            <EaSelect
              placeholder="Large Size"
              v-model="sizeLargeValue"
              :options="basicOptions"
              label="Large Size"
              size="large"
            />
          </div>
        </div>

        <CodeBlock
          :code="sizesCode"
          title="Size Variants Example"
        />
      </section>

      <!-- Custom Option Labels -->
      <section class="demo-section">
        <h2>Custom Option Labels</h2>
        <p class="section-description">
          Customize which property to display from your option objects using the optionLabel prop.
        </p>

        <div class="demo-group">
          <div class="custom-label-demo">
            <EaSelect
              placeholder="Select by title"
              v-model="customLabelValue"
              :options="customLabelOptions"
              label="Using 'title' as Label"
              optionLabel="title"
            />
            <div class="result-display">
              Selected: {{ customLabelValue?.title || 'None' }}<br>
              Category: {{ customLabelValue?.category || 'None' }}
            </div>
          </div>
        </div>

        <CodeBlock
          :code="customLabelCode"
          title="Custom Option Labels Example"
        />
      </section>

      <!-- States and Behaviors -->
      <section class="demo-section">
        <h2>States and Behaviors</h2>
        <p class="section-description">
          Different states and interactive behaviors for various use cases and user feedback.
        </p>

        <div class="demo-group">
          <div class="state-demo-item">
            <EaSelect
              placeholder="Disabled Select"
              v-model="disabledValue"
              :options="basicOptions"
              label="Disabled State"
              disabled
            />
          </div>
          <div class="state-demo-item">
            <EaSelect
              placeholder="Error Select"
              v-model="errorValue"
              :options="basicOptions"
              label="Error State"
              error
              error-message="Please select a valid option"
            />
          </div>
          <div class="state-demo-item">
            <EaSelect
              placeholder="Loading Select"
              v-model="loadingValue"
              :options="basicOptions"
              label="Loading State"
              is-loading
            />
          </div>
        </div>

        <CodeBlock
          :code="statesCode"
          title="States and Behaviors Example"
        />
      </section>

      <!-- Complex Data -->
      <section class="demo-section">
        <h2>Complex Data Structure</h2>
        <p class="section-description">
          Working with complex nested objects and displaying additional information.
        </p>

        <div class="demo-group">
          <div class="complex-demo">
            <EaSelect
              placeholder="Select a user"
              v-model="complexValue"
              :options="complexOptions"
              label="Users with Complex Data"
            />
            <div class="complex-result" v-if="complexValue">
              <h4>Selected User Details:</h4>
              <p><strong>Name:</strong> {{ complexValue.name }}</p>
              <p><strong>Family Members:</strong> {{ complexValue.family?.length || 0 }}</p>
              <div v-if="complexValue.family" class="family-list">
                <p><strong>Family:</strong></p>
                <ul>
                  <li v-for="member in complexValue.family" :key="member.name">
                    {{ member.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="complexDataCode"
          title="Complex Data Structure Example"
        />
      </section>

      <!-- Multiple Instances -->
      <section class="demo-section">
        <h2>Multiple Select Integration</h2>
        <p class="section-description">
          Demonstrating multiple select components working together in a form-like interface.
        </p>

        <div class="multiple-selects-demo">
          <div class="select-row">
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

          <div class="selection-summary">
            <h4>Selection Summary</h4>
            <div class="summary-grid">
              <div class="summary-item">
                <span class="label">Country:</span>
                <span class="value">{{ countryValue?.name || 'Not selected' }}</span>
              </div>
              <div class="summary-item">
                <span class="label">City:</span>
                <span class="value">{{ cityValue?.name || 'Not selected' }}</span>
              </div>
              <div class="summary-item">
                <span class="label">Language:</span>
                <span class="value">{{ languageValue?.name || 'Not selected' }}</span>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="multipleSelectsCode"
          title="Multiple Select Integration Example"
        />
      </section>

      <!-- Keyboard Navigation -->
      <section class="demo-section">
        <h2>Keyboard Navigation & Accessibility</h2>
        <p class="section-description">
          Full keyboard navigation support with accessibility features for inclusive user experience.
        </p>

        <div class="demo-group">
          <div class="keyboard-demo">
            <EaSelect
              placeholder="Try keyboard navigation"
              v-model="keyboardValue"
              :options="keyboardOptions"
              label="Keyboard Navigation Test"
            />
            <div class="keyboard-shortcuts">
              <h4>Keyboard Shortcuts:</h4>
              <div class="shortcuts-grid">
                <div class="shortcut-item">
                  <kbd>Space</kbd> or <kbd>Enter</kbd>
                  <span>Open dropdown</span>
                </div>
                <div class="shortcut-item">
                  <kbd>↑</kbd> <kbd>↓</kbd>
                  <span>Navigate options</span>
                </div>
                <div class="shortcut-item">
                  <kbd>Enter</kbd>
                  <span>Select option</span>
                </div>
                <div class="shortcut-item">
                  <kbd>Escape</kbd>
                  <span>Close dropdown</span>
                </div>
              </div>
            </div>
          </div>

          <div class="accessibility-features">
            <h4>Accessibility Features</h4>
            <ul class="features-list">
              <li>✓ Full keyboard navigation support</li>
              <li>✓ ARIA-compliant markup</li>
              <li>✓ Focus management</li>
              <li>✓ Screen reader friendly</li>
              <li>✓ Tab navigation support</li>
              <li>✓ Escape key handling</li>
            </ul>
          </div>
        </div>

        <CodeBlock
          :code="keyboardCode"
          title="Keyboard Navigation Example"
        />
      </section>

      <!-- Async Data Loading -->
      <section class="demo-section">
        <h2>Async Data Loading</h2>
        <p class="section-description">
          Dynamic data loading with async operations and loading states.
        </p>

        <div class="demo-group">
          <div class="async-demo">
            <EaButton
              label="Load Async Data"
              variant="primary"
              :loading="asyncLoading"
              :on-click="loadAsyncData"
            />
            <EaSelect
              placeholder="Select from loaded data"
              v-model="asyncValue"
              :options="asyncOptions"
              label="Async Loaded Options"
              :disabled="!asyncDataLoaded"
            />
            <div class="async-status">
              Status: {{ asyncDataLoaded ? 'Data loaded successfully' : 'Click button to load data' }}
            </div>
          </div>
        </div>

        <CodeBlock
          :code="asyncLoadingCode"
          title="Async Data Loading Example"
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
                <td><code>options</code></td>
                <td>OptionsType[]</td>
                <td><code>[]</code></td>
                <td>Array of option objects to display in dropdown</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td>String</td>
                <td><code>"Please Select"</code></td>
                <td>Placeholder text when no option is selected</td>
              </tr>
              <tr>
                <td><code>optionLabel</code></td>
                <td>String</td>
                <td><code>"name"</code></td>
                <td>Property name to use as display label from option objects</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Label text displayed above the select input</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'small' | 'normal' | 'large'</td>
                <td><code>'normal'</code></td>
                <td>Size variant of the select component</td>
              </tr>
              <tr>
                <td><code>modelValue</code></td>
                <td>OptionsType | null</td>
                <td><code>null</code></td>
                <td>Selected option object (two-way binding)</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Disables the select component</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Shows error state styling</td>
              </tr>
              <tr>
                <td><code>errorMessage</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Error message to display when error is true</td>
              </tr>
              <tr>
                <td><code>clearable</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Shows clear button to remove selection</td>
              </tr>
              <tr>
                <td><code>isLoading</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Shows loading state with spinner</td>
              </tr>
              <tr>
                <td><code>required</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Shows red asterisk (*) next to label for required fields</td>
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
                <td>OptionsType | null</td>
                <td>Emitted when selection changes</td>
              </tr>
              <tr>
                <td><code>change</code></td>
                <td>OptionsType | null</td>
                <td>Emitted when user selects an option</td>
              </tr>
              <tr>
                <td><code>clear</code></td>
                <td>-</td>
                <td>Emitted when clear button is clicked</td>
              </tr>
              <tr>
                <td><code>open</code></td>
                <td>-</td>
                <td>Emitted when dropdown opens</td>
              </tr>
              <tr>
                <td><code>close</code></td>
                <td>-</td>
                <td>Emitted when dropdown closes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Advanced Examples -->
      <section class="demo-section">
        <h2>Advanced Examples</h2>
        <p class="section-description">
          Complex configurations and advanced use cases for professional applications.
        </p>

        <div class="demo-group">
          <div class="advanced-demo">
            <EaSelect
              placeholder="Advanced configuration"
              v-model="advancedValue"
              :options="advancedOptions"
              label="Advanced Select"
              optionLabel="title"
              clearable
              required
            />
            <div v-if="advancedValue" class="advanced-result">
              <h4>Advanced Selection Details:</h4>
              <p><strong>Title:</strong> {{ advancedValue.title }}</p>
              <p><strong>Category:</strong> {{ advancedValue.category }}</p>
              <p><strong>Level:</strong> {{ advancedValue.level }}</p>
              <p><strong>Skills:</strong> {{ advancedValue.skills?.join(', ') }}</p>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="advancedCode"
          title="Advanced Examples"
        />
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EaSelect from '@/components/ui/form/EaSelect/EaSelect.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Reactive state
const basicValue = ref(null)
const requiredValue = ref(null)
const largeValue = ref(null)
const clearableValue = ref(null)

const sizeSmallValue = ref(null)
const sizeNormalValue = ref(null)
const sizeLargeValue = ref(null)

const customLabelValue = ref(null)
const disabledValue = ref(null)
const errorValue = ref(null)
const loadingValue = ref(null)
const complexValue = ref(null)

const countryValue = ref(null)
const cityValue = ref(null)
const languageValue = ref(null)

const keyboardValue = ref(null)

const asyncValue = ref(null)
const asyncOptions = ref([])
const asyncLoading = ref(false)
const asyncDataLoaded = ref(false)

const advancedValue = ref(null)

// Options data
const basicOptions = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Vue.js' },
  { id: 4, name: 'React' },
  { id: 5, name: 'Angular' }
]

const customLabelOptions = [
  { id: 1, title: 'JavaScript Developer', category: 'Frontend' },
  { id: 2, title: 'Python Developer', category: 'Backend' },
  { id: 3, title: 'DevOps Engineer', category: 'Infrastructure' },
  { id: 4, title: 'UI/UX Designer', category: 'Design' },
  { id: 5, title: 'Data Scientist', category: 'Analytics' }
]

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

const advancedOptions = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    category: 'Engineering',
    level: 'Senior',
    skills: ['JavaScript', 'Vue.js', 'React', 'TypeScript']
  },
  {
    id: 2,
    title: 'Backend Engineer',
    category: 'Engineering',
    level: 'Mid-level',
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis']
  },
  {
    id: 3,
    title: 'Full Stack Developer',
    category: 'Engineering',
    level: 'Senior',
    skills: ['JavaScript', 'Node.js', 'React', 'MongoDB']
  }
]

// Methods
const loadAsyncData = async () => {
  asyncLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  asyncOptions.value = [
    { id: 1, name: 'Async Option 1' },
    { id: 2, name: 'Async Option 2' },
    { id: 3, name: 'Async Option 3' },
    { id: 4, name: 'Async Option 4' },
    { id: 5, name: 'Async Option 5' }
  ]

  asyncLoading.value = false
  asyncDataLoaded.value = true
}

// Code examples
const quickDemoCode = `<template>
  <!-- Basic Select -->
  <EaSelect
    placeholder="Choose an option"
    v-model="basicValue"
    :options="basicOptions"
    label="Basic Select"
  />

  <!-- Required Field -->
  <EaSelect
    placeholder="This field is required"
    v-model="requiredValue"
    :options="basicOptions"
    label="Required Field"
    required
  />

  <!-- Large Size -->
  <EaSelect
    placeholder="Large size select"
    v-model="largeValue"
    :options="basicOptions"
    label="Large Select"
    size="large"
  />

  <!-- Clearable -->
  <EaSelect
    placeholder="Clearable select"
    v-model="clearableValue"
    :options="basicOptions"
    label="Clearable Select"
    clearable
  />
</template>

<script setup>
import { ref } from 'vue'
import EaSelect from '@/components/ui/form/EaSelect/EaSelect.vue'

const basicValue = ref(null)
const basicOptions = [
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'TypeScript' },
  { id: 3, name: 'Vue.js' }
]
<\/script>`

const sizesCode = `<template>
  <!-- Small Size -->
  <EaSelect
    placeholder="Small Size"
    v-model="sizeSmallValue"
    :options="basicOptions"
    label="Small Size"
    size="small"
  />

  <!-- Normal Size (Default) -->
  <EaSelect
    placeholder="Normal Size (Default)"
    v-model="sizeNormalValue"
    :options="basicOptions"
    label="Normal Size"
  />

  <!-- Large Size -->
  <EaSelect
    placeholder="Large Size"
    v-model="sizeLargeValue"
    :options="basicOptions"
    label="Large Size"
    size="large"
  />
</template>`

const customLabelCode = `<template>
  <EaSelect
    placeholder="Select by title"
    v-model="customLabelValue"
    :options="customLabelOptions"
    label="Using 'title' as Label"
    optionLabel="title"
  />
</template>

<script setup>
const customLabelOptions = [
  { id: 1, title: 'JavaScript Developer', category: 'Frontend' },
  { id: 2, title: 'Python Developer', category: 'Backend' },
  { id: 3, title: 'DevOps Engineer', category: 'Infrastructure' }
]
<\/script>`

const statesCode = `<template>
  <!-- Disabled State -->
  <EaSelect
    placeholder="Disabled Select"
    v-model="disabledValue"
    :options="basicOptions"
    label="Disabled State"
    disabled
  />

  <!-- Error State -->
  <EaSelect
    placeholder="Error Select"
    v-model="errorValue"
    :options="basicOptions"
    label="Error State"
    error
    error-message="Please select a valid option"
  />

  <!-- Loading State -->
  <EaSelect
    placeholder="Loading Select"
    v-model="loadingValue"
    :options="basicOptions"
    label="Loading State"
    is-loading
  />
</template>`

const complexDataCode = `<template>
  <EaSelect
    placeholder="Select a user"
    v-model="complexValue"
    :options="complexOptions"
    label="Users with Complex Data"
  />
</template>

<script setup>
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
  }
]
<\/script>`

const multipleSelectsCode = `<template>
  <div class="select-row">
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
</template>`

const keyboardCode = `<template>
  <EaSelect
    placeholder="Try keyboard navigation"
    v-model="keyboardValue"
    :options="keyboardOptions"
    label="Keyboard Navigation Test"
  />
</template>

<!-- Keyboard Shortcuts:
  Space/Enter - Open dropdown
  ↑↓ - Navigate options
  Enter - Select option
  Escape - Close dropdown
-->`

const asyncLoadingCode = `<template>
  <EaButton
    label="Load Async Data"
    variant="primary"
    :loading="asyncLoading"
    :on-click="loadAsyncData"
  />
  <EaSelect
    placeholder="Select from loaded data"
    v-model="asyncValue"
    :options="asyncOptions"
    label="Async Loaded Options"
    :disabled="!asyncDataLoaded"
  />
</template>

<script setup>
import { ref } from 'vue'

const asyncOptions = ref([])
const asyncLoading = ref(false)
const asyncDataLoaded = ref(false)

const loadAsyncData = async () => {
  asyncLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  asyncOptions.value = [
    { id: 1, name: 'Async Option 1' },
    { id: 2, name: 'Async Option 2' },
    { id: 3, name: 'Async Option 3' }
  ]

  asyncLoading.value = false
  asyncDataLoaded.value = true
}
<\/script>`

const advancedCode = `<template>
  <EaSelect
    placeholder="Advanced configuration"
    v-model="advancedValue"
    :options="advancedOptions"
    label="Advanced Select"
    optionLabel="title"
    clearable
    required
  />
</template>

<script setup>
const advancedOptions = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    category: 'Engineering',
    level: 'Senior',
    skills: ['JavaScript', 'Vue.js', 'React', 'TypeScript']
  },
  {
    id: 2,
    title: 'Backend Engineer',
    category: 'Engineering',
    level: 'Mid-level',
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis']
  }
]
<\/script>`
</script>

<style scoped lang="scss">
.select-demo {
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

  .result-display {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #f1f5f9;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #475569;
    font-family: monospace;
  }
}

.demo-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;
}

.size-demo-item {
  flex: 1;
  min-width: 250px;
}

.custom-label-demo {
  width: 100%;
  max-width: 400px;

  .result-display {
    margin-top: 1rem;
    padding: 1rem;
    background: #f1f5f9;
    border-radius: 8px;
    font-size: 0.875rem;
    color: #475569;
  }
}

.state-demo-item {
  flex: 1;
  min-width: 280px;
}

.complex-demo {
  width: 100%;
  max-width: 500px;

  .complex-result {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;

    h4 {
      color: #1e293b;
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 600;
    }

    p {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      color: #475569;
    }

    .family-list {
      margin-top: 1rem;

      ul {
        margin-left: 1rem;

        li {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 0.25rem;
        }
      }
    }
  }
}

.multiple-selects-demo {
  .select-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .selection-summary {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem;

    h4 {
      color: #1e293b;
      margin-bottom: 1rem;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .summary-grid {
      display: grid;
      gap: 0.75rem;

      .summary-item {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem 0;
        border-bottom: 1px solid #e2e8f0;

        &:last-child {
          border-bottom: none;
        }

        .label {
          font-weight: 500;
          color: #374151;
        }

        .value {
          color: #6b7280;
          font-family: monospace;
          font-size: 0.875rem;
        }
      }
    }
  }
}

.keyboard-demo {
  width: 100%;
  max-width: 400px;

  .keyboard-shortcuts {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;

    h4 {
      color: #1e293b;
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 600;
    }

    .shortcuts-grid {
      display: grid;
      gap: 0.75rem;

      .shortcut-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.875rem;

        kbd {
          background: #e2e8f0;
          color: #374151;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid #d1d5db;
        }

        span {
          color: #6b7280;
        }
      }
    }
  }
}

.accessibility-features {
  background: #dbeafe;
  border: 1px solid #bfdbfe;
  border-radius: 8px;
  padding: 1.5rem;

  h4 {
    color: #1e40af;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: #1e40af;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
      padding-left: 0;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.async-demo {
  width: 100%;
  max-width: 400px;

  .async-status {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #f1f5f9;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #475569;
    font-style: italic;
  }
}

.advanced-demo {
  width: 100%;
  max-width: 500px;

  .advanced-result {
    margin-top: 1.5rem;
    padding: 1.5rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;

    h4 {
      color: #1e293b;
      margin-bottom: 1rem;
      font-size: 1rem;
      font-weight: 600;
    }

    p {
      margin-bottom: 0.5rem;
      font-size: 0.875rem;
      color: #475569;

      &:last-child {
        margin-bottom: 0;
      }
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

@media (max-width: 768px) {
  .select-demo {
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

  .demo-group {
    flex-direction: column;
    align-items: stretch;
  }

  .multiple-selects-demo .select-row {
    grid-template-columns: 1fr;
  }

  .props-table {
    font-size: 0.8rem;
  }
}
</style>
