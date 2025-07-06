<template>
  <div class="multiselect-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaMultiselect Component</h1>
        <p class="demo-description">
          A powerful and flexible multiselect component with badge display, overflow handling,
          and comprehensive features for modern form interfaces.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different multiselect configurations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Multiselect</h4>
            <p>Simple multiple selection with badges</p>
            <EaMultiselect
              placeholder="Choose options"
              v-model="basicValue"
              :options="sampleOptions"
              label="Basic Multiselect"
            />
            <div class="result-display">
              Selected: {{ basicValue.length }} items
            </div>
          </div>

          <div class="demo-card">
            <h4>Required Field</h4>
            <p>Field marked as required with asterisk</p>
            <EaMultiselect
              placeholder="This field is required"
              v-model="requiredValue"
              :options="sampleOptions"
              label="Required Field"
              required
            />
            <div class="result-display">
              Selected: {{ requiredValue.length }} items
            </div>
          </div>

          <div class="demo-card">
            <h4>Large Size</h4>
            <p>Multiselect with larger size variant</p>
            <EaMultiselect
              placeholder="Large size select"
              v-model="largeValue"
              :options="sampleOptions"
              label="Large Multiselect"
              size="large"
            />
            <div class="result-display">
              Selected: {{ largeValue.length }} items
            </div>
          </div>

          <div class="demo-card">
            <h4>Clearable</h4>
            <p>Multiselect with clear all option</p>
            <EaMultiselect
              placeholder="Clearable select"
              v-model="clearableValue"
              :options="sampleOptions"
              label="Clearable Multiselect"
              clearable
            />
            <div class="result-display">
              Selected: {{ clearableValue.length }} items
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
          EaMultiselect supports three different size options: small, normal (default), and large for various UI contexts.
        </p>

        <div class="demo-group">
          <div class="size-demo-item">
            <EaMultiselect
              placeholder="Small Size"
              v-model="sizeSmallValue"
              :options="sampleOptions"
              label="Small Size"
              size="small"
            />
          </div>
          <div class="size-demo-item">
            <EaMultiselect
              placeholder="Normal Size (Default)"
              v-model="sizeNormalValue"
              :options="sampleOptions"
              label="Normal Size"
            />
          </div>
          <div class="size-demo-item">
            <EaMultiselect
              placeholder="Large Size"
              v-model="sizeLargeValue"
              :options="sampleOptions"
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

      <!-- Badge Overflow Handling -->
      <section class="demo-section">
        <h2>Badge Overflow Handling</h2>
        <p class="section-description">
          Intelligent badge display with automatic overflow handling. When badges exceed container width, they automatically collapse to show count.
        </p>

        <div class="demo-group">
          <div class="overflow-demo-narrow">
            <h4>Narrow Container (Auto Overflow)</h4>
            <div class="narrow-container">
              <EaMultiselect
                placeholder="Select multiple options"
                v-model="overflowTestValue"
                :options="sampleOptions"
                label="Narrow Container Test"
              />
            </div>
            <div class="overflow-info">
              Select multiple items to see overflow behavior
            </div>
          </div>

          <div class="overflow-demo-wide">
            <h4>Wide Container</h4>
            <EaMultiselect
              placeholder="Select multiple options"
              v-model="overflowTestValue2"
              :options="sampleOptions"
              label="Wide Container Test"
            />
            <div class="overflow-info">
              More space allows for more visible badges
            </div>
          </div>
        </div>

        <CodeBlock
          :code="overflowCode"
          title="Badge Overflow Example"
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
            <EaMultiselect
              placeholder="Select by title"
              v-model="customLabelValue"
              :options="customLabelOptions"
              label="Using 'title' as Label"
              option-label="title"
            />
            <div class="result-display">
              <h4>Selected Items:</h4>
              <div v-for="item in customLabelValue" :key="item.id" class="selected-item">
                <strong>{{ item.title }}</strong> - {{ item.category }}
              </div>
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
            <EaMultiselect
              placeholder="Disabled Select"
              v-model="disabledValue"
              :options="sampleOptions"
              label="Disabled State"
              disabled
            />
          </div>
          <div class="state-demo-item">
            <EaMultiselect
              placeholder="Error Select"
              v-model="errorValue"
              :options="sampleOptions"
              label="Error State"
              error
              error-message="Please select at least one option"
            />
          </div>
          <div class="state-demo-item">
            <EaMultiselect
              placeholder="Loading Select"
              v-model="loadingValue"
              :options="sampleOptions"
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

      <!-- With Hints -->
      <section class="demo-section">
        <h2>Help Text and Hints</h2>
        <p class="section-description">
          Provide additional context and guidance with hint text below the multiselect component.
        </p>

        <div class="demo-group">
          <div class="hint-demo">
            <EaMultiselect
              placeholder="Select your skills"
              v-model="hintValue"
              :options="customLabelOptions"
              label="Skills"
              option-label="title"
              hint="Choose multiple skills that match your expertise level"
            />
            <div class="selected-count">
              Selected skills: {{ hintValue.length }}
            </div>
          </div>
        </div>

        <CodeBlock
          :code="hintsCode"
          title="Help Text and Hints Example"
        />
      </section>

      <!-- Async Data Loading -->
      <section class="demo-section">
        <h2>Async Data Loading</h2>
        <p class="section-description">
          Dynamic data loading with async operations and loading states for remote data sources.
        </p>

        <div class="demo-group">
          <div class="async-demo">
            <EaButton
              label="Load Async Data"
              variant="primary"
              :loading="asyncLoading"
              :on-click="loadAsyncData"
            />
            <EaMultiselect
              placeholder="Select from loaded data"
              v-model="asyncValue"
              :options="asyncOptions"
              label="Async Loaded Options"
              :disabled="!asyncDataLoaded"
              hint="Click the button above to load options dynamically"
            />
            <div class="async-status">
              Status: {{ asyncDataLoaded ? `${asyncOptions.length} options loaded` : 'Click button to load data' }}
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
                <td>Placeholder text when no options are selected</td>
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
                <td>Label text displayed above the multiselect input</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'small' | 'normal' | 'large'</td>
                <td><code>'normal'</code></td>
                <td>Size variant of the multiselect component</td>
              </tr>
              <tr>
                <td><code>modelValue</code></td>
                <td>OptionsType[]</td>
                <td><code>[]</code></td>
                <td>Selected options array (two-way binding)</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Disables the multiselect component</td>
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
                <td>Shows clear all button to remove all selections</td>
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
              <tr>
                <td><code>hint</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Help text displayed below the component</td>
              </tr>
              <tr>
                <td><code>onLoad</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Async function to load options dynamically</td>
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
                <td>OptionsType[]</td>
                <td>Emitted when selection changes</td>
              </tr>
              <tr>
                <td><code>change</code></td>
                <td>OptionsType[]</td>
                <td>Emitted when user modifies selections</td>
              </tr>
              <tr>
                <td><code>clear</code></td>
                <td>-</td>
                <td>Emitted when clear all button is clicked</td>
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
              <tr>
                <td><code>select</code></td>
                <td>OptionsType</td>
                <td>Emitted when an option is selected</td>
              </tr>
              <tr>
                <td><code>deselect</code></td>
                <td>OptionsType</td>
                <td>Emitted when an option is deselected</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Advanced Examples -->
      <section class="demo-section">
        <h2>Advanced Examples</h2>
        <p class="section-description">
          Complex configurations and real-world use cases for professional applications.
        </p>

        <div class="demo-group">
          <div class="advanced-demo">
            <EaMultiselect
              placeholder="Advanced configuration"
              v-model="advancedValue"
              :options="advancedOptions"
              label="Advanced Multiselect"
              option-label="title"
              clearable
              required
              hint="Select multiple technologies for your project stack"
            />
            <div v-if="advancedValue.length > 0" class="advanced-result">
              <h4>Selected Technologies:</h4>
              <div class="tech-grid">
                <div v-for="tech in advancedValue" :key="tech.id" class="tech-item">
                  <div class="tech-title">{{ tech.title }}</div>
                  <div class="tech-category">{{ tech.category }}</div>
                  <div class="tech-level">{{ tech.level }}</div>
                </div>
              </div>
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
import EaMultiselect from '@/components/ui/form/EaMultiselect/index.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Reactive state
const basicValue = ref([])
const requiredValue = ref([])
const largeValue = ref([])
const clearableValue = ref([])

const sizeSmallValue = ref([])
const sizeNormalValue = ref([])
const sizeLargeValue = ref([])

const customLabelValue = ref([])
const disabledValue = ref([])
const errorValue = ref([])
const loadingValue = ref([])

const overflowTestValue = ref([])
const overflowTestValue2 = ref([])
const hintValue = ref([])

const asyncValue = ref([])
const asyncOptions = ref([])
const asyncLoading = ref(false)
const asyncDataLoaded = ref(false)

const advancedValue = ref([])

// Options data
const sampleOptions = [
  { id: 1, name: 'Frontend Developer', department: 'Engineering', level: 'Senior' },
  { id: 2, name: 'Backend Developer', department: 'Engineering', level: 'Mid' },
  { id: 3, name: 'UI/UX Designer', department: 'Design', level: 'Senior' },
  { id: 4, name: 'Product Manager', department: 'Product', level: 'Lead' },
  { id: 5, name: 'DevOps Engineer', department: 'Engineering', level: 'Senior' },
  { id: 6, name: 'Data Scientist', department: 'Analytics', level: 'Mid' },
  { id: 7, name: 'Marketing Specialist', department: 'Marketing', level: 'Junior' },
  { id: 8, name: 'Sales Representative', department: 'Sales', level: 'Mid' }
]

const customLabelOptions = [
  { id: 1, title: 'React Development', category: 'Frontend', difficulty: 'Intermediate' },
  { id: 2, title: 'Node.js Development', category: 'Backend', difficulty: 'Intermediate' },
  { id: 3, title: 'Vue.js Development', category: 'Frontend', difficulty: 'Beginner' },
  { id: 4, title: 'Python Development', category: 'Backend', difficulty: 'Beginner' },
  { id: 5, title: 'Mobile Development', category: 'Mobile', difficulty: 'Advanced' },
  { id: 6, title: 'Database Design', category: 'Backend', difficulty: 'Intermediate' },
  { id: 7, title: 'UI/UX Design', category: 'Design', difficulty: 'Intermediate' }
]

const advancedOptions = [
  { id: 1, title: 'JavaScript', category: 'Frontend', level: 'Essential' },
  { id: 2, title: 'TypeScript', category: 'Frontend', level: 'Advanced' },
  { id: 3, title: 'Vue.js', category: 'Frontend', level: 'Framework' },
  { id: 4, title: 'React', category: 'Frontend', level: 'Framework' },
  { id: 5, title: 'Node.js', category: 'Backend', level: 'Runtime' },
  { id: 6, title: 'Python', category: 'Backend', level: 'Language' },
  { id: 7, title: 'PostgreSQL', category: 'Database', level: 'SQL' },
  { id: 8, title: 'MongoDB', category: 'Database', level: 'NoSQL' },
  { id: 9, title: 'Docker', category: 'DevOps', level: 'Container' },
  { id: 10, title: 'AWS', category: 'Cloud', level: 'Platform' }
]

// Methods
const loadAsyncData = async () => {
  asyncLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  asyncOptions.value = [
    { id: 1, name: 'Async Option 1', category: 'Remote' },
    { id: 2, name: 'Async Option 2', category: 'Remote' },
    { id: 3, name: 'Async Option 3', category: 'Remote' },
    { id: 4, name: 'Async Option 4', category: 'Remote' },
    { id: 5, name: 'Async Option 5', category: 'Remote' },
    { id: 6, name: 'Async Option 6', category: 'Remote' },
    { id: 7, name: 'Async Option 7', category: 'Remote' }
  ]

  asyncLoading.value = false
  asyncDataLoaded.value = true
}

// Code examples
const quickDemoCode = `<template>
  <!-- Basic Multiselect -->
  <EaMultiselect
    placeholder="Choose options"
    v-model="basicValue"
    :options="sampleOptions"
    label="Basic Multiselect"
  />

  <!-- Required Field -->
  <EaMultiselect
    placeholder="This field is required"
    v-model="requiredValue"
    :options="sampleOptions"
    label="Required Field"
    required
  />

  <!-- Large Size -->
  <EaMultiselect
    placeholder="Large size select"
    v-model="largeValue"
    :options="sampleOptions"
    label="Large Multiselect"
    size="large"
  />

  <!-- Clearable -->
  <EaMultiselect
    placeholder="Clearable select"
    v-model="clearableValue"
    :options="sampleOptions"
    label="Clearable Multiselect"
    clearable
  />
</template>

<script setup>
import { ref } from 'vue'
import EaMultiselect from '@/components/ui/form/EaMultiselect/index.vue'

const basicValue = ref([])
const sampleOptions = [
  { id: 1, name: 'Frontend Developer' },
  { id: 2, name: 'Backend Developer' },
  { id: 3, name: 'UI/UX Designer' }
]
<\/script>`

const sizesCode = `<template>
  <!-- Small Size -->
  <EaMultiselect
    placeholder="Small Size"
    v-model="sizeSmallValue"
    :options="sampleOptions"
    label="Small Size"
    size="small"
  />

  <!-- Normal Size (Default) -->
  <EaMultiselect
    placeholder="Normal Size (Default)"
    v-model="sizeNormalValue"
    :options="sampleOptions"
    label="Normal Size"
  />

  <!-- Large Size -->
  <EaMultiselect
    placeholder="Large Size"
    v-model="sizeLargeValue"
    :options="sampleOptions"
    label="Large Size"
    size="large"
  />
</template>`

const overflowCode = `<template>
  <!-- Narrow Container - Auto Overflow -->
  <div class="narrow-container" style="width: 300px;">
    <EaMultiselect
      placeholder="Select multiple options"
      v-model="overflowTestValue"
      :options="sampleOptions"
      label="Narrow Container Test"
    />
  </div>

  <!-- Wide Container -->
  <EaMultiselect
    placeholder="Select multiple options"
    v-model="overflowTestValue2"
    :options="sampleOptions"
    label="Wide Container Test"
  />
</template>

<!--
  Badge Overflow Features:
  - Automatic overflow detection
  - Dynamic "+X more" display
  - Responsive to container width
  - No manual limit configuration needed
-->`

const customLabelCode = `<template>
  <EaMultiselect
    placeholder="Select by title"
    v-model="customLabelValue"
    :options="customLabelOptions"
    label="Using 'title' as Label"
    option-label="title"
  />
</template>

<script setup>
const customLabelOptions = [
  { id: 1, title: 'React Development', category: 'Frontend' },
  { id: 2, title: 'Node.js Development', category: 'Backend' },
  { id: 3, title: 'Vue.js Development', category: 'Frontend' }
]
<\/script>`

const statesCode = `<template>
  <!-- Disabled State -->
  <EaMultiselect
    placeholder="Disabled Select"
    v-model="disabledValue"
    :options="sampleOptions"
    label="Disabled State"
    disabled
  />

  <!-- Error State -->
  <EaMultiselect
    placeholder="Error Select"
    v-model="errorValue"
    :options="sampleOptions"
    label="Error State"
    error
    error-message="Please select at least one option"
  />

  <!-- Loading State -->
  <EaMultiselect
    placeholder="Loading Select"
    v-model="loadingValue"
    :options="sampleOptions"
    label="Loading State"
    is-loading
  />
</template>`

const hintsCode = `<template>
  <EaMultiselect
    placeholder="Select your skills"
    v-model="hintValue"
    :options="customLabelOptions"
    label="Skills"
    option-label="title"
    hint="Choose multiple skills that match your expertise level"
  />
</template>`

const asyncLoadingCode = `<template>
  <EaButton
    label="Load Async Data"
    variant="primary"
    :loading="asyncLoading"
    :on-click="loadAsyncData"
  />
  <EaMultiselect
    placeholder="Select from loaded data"
    v-model="asyncValue"
    :options="asyncOptions"
    label="Async Loaded Options"
    :disabled="!asyncDataLoaded"
    hint="Click the button above to load options dynamically"
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
    { id: 1, name: 'Async Option 1', category: 'Remote' },
    { id: 2, name: 'Async Option 2', category: 'Remote' },
    { id: 3, name: 'Async Option 3', category: 'Remote' }
  ]

  asyncLoading.value = false
  asyncDataLoaded.value = true
}
<\/script>`

const advancedCode = `<template>
  <EaMultiselect
    placeholder="Advanced configuration"
    v-model="advancedValue"
    :options="advancedOptions"
    label="Advanced Multiselect"
    option-label="title"
    clearable
    required
    hint="Select multiple technologies for your project stack"
  />
</template>

<script setup>
const advancedOptions = [
  { id: 1, title: 'JavaScript', category: 'Frontend', level: 'Essential' },
  { id: 2, title: 'TypeScript', category: 'Frontend', level: 'Advanced' },
  { id: 3, title: 'Vue.js', category: 'Frontend', level: 'Framework' }
]
<\/script>`
</script>

<style scoped lang="scss">
.multiselect-demo {
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

.overflow-demo-narrow {
  .narrow-container {
    width: 300px;
    padding: 1rem;
    background: #f8fafc;
    border: 2px dashed #e2e8f0;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .overflow-info {
    font-size: 0.875rem;
    color: #64748b;
    font-style: italic;
  }
}

.overflow-demo-wide {
  flex: 1;
  min-width: 400px;

  .overflow-info {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: #64748b;
    font-style: italic;
  }
}

.custom-label-demo {
  width: 100%;
  max-width: 500px;

  .result-display {
    margin-top: 1rem;
    padding: 1rem;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 8px;

    h4 {
      color: #1e293b;
      margin-bottom: 0.75rem;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .selected-item {
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      background: white;
      border-radius: 6px;
      font-size: 0.875rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.state-demo-item {
  flex: 1;
  min-width: 280px;
}

.hint-demo {
  width: 100%;
  max-width: 500px;

  .selected-count {
    margin-top: 1rem;
    padding: 0.75rem;
    background: #f1f5f9;
    border-radius: 6px;
    font-size: 0.875rem;
    color: #475569;
    font-weight: 500;
  }
}

.async-demo {
  width: 100%;
  max-width: 500px;

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
  max-width: 600px;

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

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;

      .tech-item {
        padding: 1rem;
        background: white;
        border-radius: 8px;
        border: 1px solid #e2e8f0;

        .tech-title {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .tech-category {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .tech-level {
          font-size: 0.75rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
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
  .multiselect-demo {
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

  .overflow-demo-narrow .narrow-container {
    width: 100%;
  }

  .advanced-demo .tech-grid {
    grid-template-columns: 1fr;
  }

  .props-table {
    font-size: 0.8rem;
  }
}
</style>
