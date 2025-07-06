<template>
  <div class="autocomplete-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaAutocomplete Component</h1>
        <p class="demo-description">
          A versatile autocomplete component with intelligent search functionality, async loading capabilities,
          and multiple selection support for modern form interfaces.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different autocomplete configurations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Autocomplete</h4>
            <p>Simple search and select functionality</p>
            <EaAutocomplete
              placeholder="Search and select..."
              v-model="basicValue"
              :options="sampleOptions"
              label="Basic Autocomplete"
            />
            <div class="result-display">
              Selected: {{ formatSelection(basicValue) }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Multiple Selection</h4>
            <p>Select multiple options with chips display</p>
            <EaAutocomplete
              placeholder="Select multiple options..."
              v-model="multiValue"
              :options="sampleOptions"
              label="Multi-select Autocomplete"
              :multiselect="true"
              :clearable="true"
            />
            <div class="result-display">
              Selected: {{ multiValue.length }} items
            </div>
          </div>

          <div class="demo-card">
            <h4>Large Size</h4>
            <p>Autocomplete with larger size variant</p>
            <EaAutocomplete
              placeholder="Large autocomplete..."
              v-model="largeValue"
              :options="sampleOptions"
              label="Large Autocomplete"
              size="large"
            />
            <div class="result-display">
              Selected: {{ formatSelection(largeValue) }}
            </div>
          </div>

          <div class="demo-card">
            <h4>With Hint</h4>
            <p>Autocomplete with helpful guidance</p>
            <EaAutocomplete
              placeholder="Type to search..."
              v-model="hintValue"
              :options="sampleOptions"
              label="With Helpful Hint"
              hint="Start typing to see filtered options"
            />
            <div class="result-display">
              Selected: {{ formatSelection(hintValue) }}
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
          EaAutocomplete supports three different size options: small, normal (default), and large for various UI contexts.
        </p>

        <div class="demo-group">
          <div class="size-demo-item">
            <EaAutocomplete
              placeholder="Small size..."
              v-model="sizeSmallValue"
              :options="sampleOptions"
              label="Small Size"
              size="small"
            />
          </div>
          <div class="size-demo-item">
            <EaAutocomplete
              placeholder="Normal size (default)..."
              v-model="sizeNormalValue"
              :options="sampleOptions"
              label="Normal Size"
            />
          </div>
          <div class="size-demo-item">
            <EaAutocomplete
              placeholder="Large size..."
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

      <!-- Search and Filtering -->
      <section class="demo-section">
        <h2>Search and Filtering</h2>
        <p class="section-description">
          Intelligent search functionality with real-time filtering and highlight matching text.
        </p>

        <div class="demo-group">
          <div class="search-demo">
            <EaAutocomplete
              placeholder="Type to search through options..."
              v-model="searchValue"
              :options="extendedOptions"
              label="Smart Search"
              hint="Search by name, category, or department - results are filtered in real-time"
            />
            <div class="search-stats">
              <div class="stat-item">
                <span class="stat-label">Total Options:</span>
                <span class="stat-value">{{ extendedOptions.length }}</span>
              </div>
              <div class="stat-item">
                <span class="stat-label">Selected:</span>
                <span class="stat-value">{{ formatSelection(searchValue) }}</span>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="searchCode"
          title="Search and Filtering Example"
        />
      </section>

      <!-- Multiple Selection Features -->
      <section class="demo-section">
        <h2>Multiple Selection Features</h2>
        <p class="section-description">
          Advanced multiple selection with chip display, individual removal, and bulk operations.
        </p>

        <div class="demo-group">
          <div class="multi-demo">
            <EaAutocomplete
              placeholder="Select your team members..."
              v-model="teamValue"
              :options="teamOptions"
              label="Team Selection"
              option-label="title"
              :multiselect="true"
              :clearable="true"
              hint="Select multiple team members for your project"
            />
            <div v-if="teamValue.length > 0" class="team-display">
              <h4>Selected Team Members:</h4>
              <div class="team-grid">
                <div v-for="member in teamValue" :key="member.id" class="team-member">
                  <div class="member-title">{{ member.title }}</div>
                  <div class="member-role">{{ member.role }}</div>
                  <div class="member-department">{{ member.department }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="multiSelectCode"
          title="Multiple Selection Example"
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
            <EaAutocomplete
              placeholder="Disabled autocomplete..."
              v-model="disabledValue"
              :options="sampleOptions"
              label="Disabled State"
              disabled
            />
          </div>
          <div class="state-demo-item">
            <EaAutocomplete
              placeholder="Error autocomplete..."
              v-model="errorValue"
              :options="sampleOptions"
              label="Error State"
              error
              error-message="Please select a valid option"
            />
          </div>
          <div class="state-demo-item">
            <EaAutocomplete
              placeholder="Loading autocomplete..."
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

      <!-- Async Data Loading -->
      <section class="demo-section">
        <h2>Async Data Loading</h2>
        <p class="section-description">
          Dynamic data loading with async operations and loading states for remote data sources.
        </p>

        <div class="demo-group">
          <div class="async-demo">
            <EaButton
              label="Load Remote Data"
              variant="primary"
              :loading="asyncLoading"
              :on-click="loadAsyncData"
            />
            <EaAutocomplete
              placeholder="Select from remote data..."
              v-model="asyncValue"
              :options="asyncOptions"
              label="Remote Data Autocomplete"
              :disabled="!asyncDataLoaded"
              hint="Click the button above to load options from remote source"
            />
            <div class="async-status">
              Status: {{ asyncDataLoaded ? `${asyncOptions.length} options loaded from remote` : 'Click button to load remote data' }}
            </div>
          </div>
        </div>

        <CodeBlock
          :code="asyncLoadingCode"
          title="Async Data Loading Example"
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
            <EaAutocomplete
              placeholder="Search by skill title..."
              v-model="customLabelValue"
              :options="skillOptions"
              label="Skills Autocomplete"
              option-label="title"
              :multiselect="true"
              hint="Custom label field demonstration using 'title' property"
            />
            <div v-if="customLabelValue.length > 0" class="result-display">
              <h4>Selected Skills:</h4>
              <div v-for="skill in customLabelValue" :key="skill.id" class="selected-item">
                <strong>{{ skill.title }}</strong> - {{ skill.category }} ({{ skill.level }})
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="customLabelCode"
          title="Custom Option Labels Example"
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
                <td>OptionType[]</td>
                <td><code>[]</code></td>
                <td>Array of option objects to search and select from</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Placeholder text displayed in the input field</td>
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
                <td>Label text displayed above the autocomplete input</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'small' | 'normal' | 'large'</td>
                <td><code>'normal'</code></td>
                <td>Size variant of the autocomplete component</td>
              </tr>
              <tr>
                <td><code>modelValue</code></td>
                <td>OptionType | OptionType[]</td>
                <td><code>undefined</code></td>
                <td>Selected option(s) for two-way binding</td>
              </tr>
              <tr>
                <td><code>multiselect</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Enable multiple selection with chips display</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Disables the autocomplete component</td>
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
                <td>Shows clear button to remove all selections</td>
              </tr>
              <tr>
                <td><code>isLoading</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Shows loading state with spinner</td>
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
                <td>OptionType | OptionType[]</td>
                <td>Emitted when selection changes</td>
              </tr>
              <tr>
                <td><code>change</code></td>
                <td>OptionType | OptionType[]</td>
                <td>Emitted when user modifies selection</td>
              </tr>
              <tr>
                <td><code>search</code></td>
                <td>String</td>
                <td>Emitted when user types in search input</td>
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
              <tr>
                <td><code>select</code></td>
                <td>OptionType</td>
                <td>Emitted when an option is selected</td>
              </tr>
              <tr>
                <td><code>deselect</code></td>
                <td>OptionType</td>
                <td>Emitted when an option is deselected (multiselect)</td>
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
            <EaAutocomplete
              placeholder="Search for technologies and tools..."
              v-model="advancedValue"
              :options="advancedOptions"
              label="Technology Stack Selector"
              option-label="title"
              :multiselect="true"
              :clearable="true"
              hint="Build your technology stack by searching and selecting multiple technologies"
            />
            <div v-if="advancedValue.length > 0" class="advanced-result">
              <h4>Selected Technologies:</h4>
              <div class="tech-categories">
                <div v-for="category in getGroupedTechnologies(advancedValue)" :key="category.name" class="tech-category">
                  <div class="category-header">{{ category.name }}</div>
                  <div class="tech-items">
                    <div v-for="tech in category.items" :key="tech.id" class="tech-item">
                      <div class="tech-title">{{ tech.title }}</div>
                      <div class="tech-type">{{ tech.type }}</div>
                    </div>
                  </div>
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
import { ref, computed } from 'vue'
import EaAutocomplete from '@/components/ui/form/EaAutocomplete/index.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Reactive state
const basicValue = ref([])
const multiValue = ref([])
const largeValue = ref([])
const hintValue = ref([])

const sizeSmallValue = ref([])
const sizeNormalValue = ref([])
const sizeLargeValue = ref([])

const searchValue = ref([])
const teamValue = ref([])
const customLabelValue = ref([])

const disabledValue = ref([])
const errorValue = ref([])
const loadingValue = ref([])

const asyncValue = ref([])
const asyncOptions = ref([])
const asyncLoading = ref(false)
const asyncDataLoaded = ref(false)

const advancedValue = ref([])

// Options data
const sampleOptions = [
  { id: 1, name: 'John Smith', department: 'Engineering', role: 'Senior Developer' },
  { id: 2, name: 'Sarah Johnson', department: 'Design', role: 'UI/UX Designer' },
  { id: 3, name: 'Mike Wilson', department: 'Product', role: 'Product Manager' },
  { id: 4, name: 'Emily Davis', department: 'Marketing', role: 'Marketing Specialist' },
  { id: 5, name: 'David Brown', department: 'Engineering', role: 'DevOps Engineer' },
  { id: 6, name: 'Lisa Garcia', department: 'Sales', role: 'Sales Representative' },
  { id: 7, name: 'Tom Anderson', department: 'Engineering', role: 'Frontend Developer' },
  { id: 8, name: 'Anna Taylor', department: 'Design', role: 'Graphic Designer' }
]

const extendedOptions = [
  ...sampleOptions,
  { id: 9, name: 'Robert Lee', department: 'Analytics', role: 'Data Scientist' },
  { id: 10, name: 'Jennifer White', department: 'HR', role: 'HR Manager' },
  { id: 11, name: 'Michael Clark', department: 'Finance', role: 'Financial Analyst' },
  { id: 12, name: 'Jessica Martinez', department: 'Operations', role: 'Operations Manager' },
  { id: 13, name: 'Daniel Rodriguez', department: 'Engineering', role: 'Backend Developer' },
  { id: 14, name: 'Ashley Thompson', department: 'Marketing', role: 'Content Manager' },
  { id: 15, name: 'Christopher Harris', department: 'Sales', role: 'Sales Manager' }
]

const teamOptions = [
  { id: 1, title: 'John Smith', role: 'Senior Developer', department: 'Engineering' },
  { id: 2, title: 'Sarah Johnson', role: 'UI/UX Designer', department: 'Design' },
  { id: 3, title: 'Mike Wilson', role: 'Product Manager', department: 'Product' },
  { id: 4, title: 'Emily Davis', role: 'Marketing Specialist', department: 'Marketing' },
  { id: 5, title: 'David Brown', role: 'DevOps Engineer', department: 'Engineering' },
  { id: 6, title: 'Lisa Garcia', role: 'Sales Representative', department: 'Sales' },
  { id: 7, title: 'Tom Anderson', role: 'Frontend Developer', department: 'Engineering' },
  { id: 8, title: 'Anna Taylor', role: 'Graphic Designer', department: 'Design' }
]

const skillOptions = [
  { id: 1, title: 'JavaScript', category: 'Programming', level: 'Essential' },
  { id: 2, title: 'TypeScript', category: 'Programming', level: 'Advanced' },
  { id: 3, title: 'Vue.js', category: 'Framework', level: 'Frontend' },
  { id: 4, title: 'React', category: 'Framework', level: 'Frontend' },
  { id: 5, title: 'Node.js', category: 'Runtime', level: 'Backend' },
  { id: 6, title: 'Python', category: 'Programming', level: 'Backend' },
  { id: 7, title: 'UI/UX Design', category: 'Design', level: 'Creative' },
  { id: 8, title: 'Project Management', category: 'Management', level: 'Leadership' }
]

const advancedOptions = [
  { id: 1, title: 'JavaScript', category: 'Frontend', type: 'Language' },
  { id: 2, title: 'TypeScript', category: 'Frontend', type: 'Language' },
  { id: 3, title: 'Vue.js', category: 'Frontend', type: 'Framework' },
  { id: 4, title: 'React', category: 'Frontend', type: 'Framework' },
  { id: 5, title: 'Angular', category: 'Frontend', type: 'Framework' },
  { id: 6, title: 'Node.js', category: 'Backend', type: 'Runtime' },
  { id: 7, title: 'Python', category: 'Backend', type: 'Language' },
  { id: 8, title: 'Java', category: 'Backend', type: 'Language' },
  { id: 9, title: 'PostgreSQL', category: 'Database', type: 'SQL' },
  { id: 10, title: 'MongoDB', category: 'Database', type: 'NoSQL' },
  { id: 11, title: 'Redis', category: 'Database', type: 'Cache' },
  { id: 12, title: 'Docker', category: 'DevOps', type: 'Container' },
  { id: 13, title: 'Kubernetes', category: 'DevOps', type: 'Orchestration' },
  { id: 14, title: 'AWS', category: 'Cloud', type: 'Platform' },
  { id: 15, title: 'Azure', category: 'Cloud', type: 'Platform' }
]

// Helper functions
const formatSelection = (value: any) => {
  if (Array.isArray(value)) {
    return value.length > 0 ? `${value.length} items` : 'None'
  }
  return value ? value.name || value.title || 'Selected' : 'None'
}

const getGroupedTechnologies = (technologies: any[]) => {
  const grouped = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {})

  return Object.keys(grouped).map(category => ({
    name: category,
    items: grouped[category]
  }))
}

// Methods
const loadAsyncData = async () => {
  asyncLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))

  asyncOptions.value = [
    { id: 101, name: 'Remote User 1', department: 'Remote Engineering' },
    { id: 102, name: 'Remote User 2', department: 'Remote Design' },
    { id: 103, name: 'Remote User 3', department: 'Remote Product' },
    { id: 104, name: 'Remote User 4', department: 'Remote Marketing' },
    { id: 105, name: 'Remote User 5', department: 'Remote Sales' },
    { id: 106, name: 'Async Data Source', department: 'External API' },
    { id: 107, name: 'Dynamic Option', department: 'Real-time Data' }
  ]

  asyncLoading.value = false
  asyncDataLoaded.value = true
}

// Code examples
const quickDemoCode = `<template>
  <!-- Basic Autocomplete -->
  <EaAutocomplete
    placeholder="Search and select..."
    v-model="basicValue"
    :options="sampleOptions"
    label="Basic Autocomplete"
  />

  <!-- Multiple Selection -->
  <EaAutocomplete
    placeholder="Select multiple options..."
    v-model="multiValue"
    :options="sampleOptions"
    label="Multi-select Autocomplete"
    :multiselect="true"
    :clearable="true"
  />

  <!-- Large Size -->
  <EaAutocomplete
    placeholder="Large autocomplete..."
    v-model="largeValue"
    :options="sampleOptions"
    label="Large Autocomplete"
    size="large"
  />

  <!-- With Hint -->
  <EaAutocomplete
    placeholder="Type to search..."
    v-model="hintValue"
    :options="sampleOptions"
    label="With Helpful Hint"
    hint="Start typing to see filtered options"
  />
</template>

<script setup>
import { ref } from 'vue'
import EaAutocomplete from '@/components/ui/form/EaAutocomplete/index.vue'

const basicValue = ref([])
const sampleOptions = [
  { id: 1, name: 'John Smith', department: 'Engineering' },
  { id: 2, name: 'Sarah Johnson', department: 'Design' },
  { id: 3, name: 'Mike Wilson', department: 'Product' }
]
<\/script>`

const sizesCode = `<template>
  <!-- Small Size -->
  <EaAutocomplete
    placeholder="Small size..."
    v-model="sizeSmallValue"
    :options="sampleOptions"
    label="Small Size"
    size="small"
  />

  <!-- Normal Size (Default) -->
  <EaAutocomplete
    placeholder="Normal size (default)..."
    v-model="sizeNormalValue"
    :options="sampleOptions"
    label="Normal Size"
  />

  <!-- Large Size -->
  <EaAutocomplete
    placeholder="Large size..."
    v-model="sizeLargeValue"
    :options="sampleOptions"
    label="Large Size"
    size="large"
  />
</template>`

const searchCode = `<template>
  <EaAutocomplete
    placeholder="Type to search through options..."
    v-model="searchValue"
    :options="extendedOptions"
    label="Smart Search"
    hint="Search by name, category, or department - results are filtered in real-time"
  />
</template>

<script setup>
const extendedOptions = [
  { id: 1, name: 'John Smith', department: 'Engineering', role: 'Senior Developer' },
  { id: 2, name: 'Sarah Johnson', department: 'Design', role: 'UI/UX Designer' },
  { id: 3, name: 'Mike Wilson', department: 'Product', role: 'Product Manager' }
  // ... more options
]
<\/script>`

const multiSelectCode = `<template>
  <EaAutocomplete
    placeholder="Select your team members..."
    v-model="teamValue"
    :options="teamOptions"
    label="Team Selection"
    option-label="title"
    :multiselect="true"
    :clearable="true"
    hint="Select multiple team members for your project"
  />
</template>

<script setup>
const teamOptions = [
  { id: 1, title: 'John Smith', role: 'Senior Developer', department: 'Engineering' },
  { id: 2, title: 'Sarah Johnson', role: 'UI/UX Designer', department: 'Design' }
]
<\/script>`

const statesCode = `<template>
  <!-- Disabled State -->
  <EaAutocomplete
    placeholder="Disabled autocomplete..."
    v-model="disabledValue"
    :options="sampleOptions"
    label="Disabled State"
    disabled
  />

  <!-- Error State -->
  <EaAutocomplete
    placeholder="Error autocomplete..."
    v-model="errorValue"
    :options="sampleOptions"
    label="Error State"
    error
    error-message="Please select a valid option"
  />

  <!-- Loading State -->
  <EaAutocomplete
    placeholder="Loading autocomplete..."
    v-model="loadingValue"
    :options="sampleOptions"
    label="Loading State"
    is-loading
  />
</template>`

const asyncLoadingCode = `<template>
  <EaButton
    label="Load Remote Data"
    variant="primary"
    :loading="asyncLoading"
    :on-click="loadAsyncData"
  />
  <EaAutocomplete
    placeholder="Select from remote data..."
    v-model="asyncValue"
    :options="asyncOptions"
    label="Remote Data Autocomplete"
    :disabled="!asyncDataLoaded"
    hint="Click the button above to load options from remote source"
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
    { id: 101, name: 'Remote User 1', department: 'Remote Engineering' },
    { id: 102, name: 'Remote User 2', department: 'Remote Design' }
  ]

  asyncLoading.value = false
  asyncDataLoaded.value = true
}
<\/script>`

const customLabelCode = `<template>
  <EaAutocomplete
    placeholder="Search by skill title..."
    v-model="customLabelValue"
    :options="skillOptions"
    label="Skills Autocomplete"
    option-label="title"
    :multiselect="true"
    hint="Custom label field demonstration using 'title' property"
  />
</template>

<script setup>
const skillOptions = [
  { id: 1, title: 'JavaScript', category: 'Programming', level: 'Essential' },
  { id: 2, title: 'TypeScript', category: 'Programming', level: 'Advanced' },
  { id: 3, title: 'Vue.js', category: 'Framework', level: 'Frontend' }
]
<\/script>`

const advancedCode = `<template>
  <EaAutocomplete
    placeholder="Search for technologies and tools..."
    v-model="advancedValue"
    :options="advancedOptions"
    label="Technology Stack Selector"
    option-label="title"
    :multiselect="true"
    :clearable="true"
    hint="Build your technology stack by searching and selecting multiple technologies"
  />
</template>

<script setup>
const advancedOptions = [
  { id: 1, title: 'JavaScript', category: 'Frontend', type: 'Language' },
  { id: 2, title: 'TypeScript', category: 'Frontend', type: 'Language' },
  { id: 3, title: 'Vue.js', category: 'Frontend', type: 'Framework' }
]

// Group technologies by category
const getGroupedTechnologies = (technologies) => {
  const grouped = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {})

  return Object.keys(grouped).map(category => ({
    name: category,
    items: grouped[category]
  }))
}
<\/script>`
</script>

<style scoped lang="scss">
.autocomplete-demo {
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
  position: relative;

  &:hover {
    z-index: 1000;
    // transform: translateY(-2px);
    top: -2px;
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
  min-width: 280px;
}

.search-demo {
  width: 100%;
  max-width: 600px;

  .search-stats {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 8px;

    .stat-item {
      display: flex;
      gap: 0.5rem;

      .stat-label {
        font-size: 0.875rem;
        color: #64748b;
        font-weight: 500;
      }

      .stat-value {
        font-size: 0.875rem;
        color: #1e293b;
        font-weight: 600;
        font-family: monospace;
      }
    }
  }
}

.multi-demo {
  width: 100%;
  max-width: 600px;

  .team-display {
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

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;

      .team-member {
        padding: 1rem;
        background: white;
        border-radius: 8px;
        border: 1px solid #e2e8f0;

        .member-title {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.25rem;
        }

        .member-role {
          font-size: 0.875rem;
          color: #6b7280;
          margin-bottom: 0.25rem;
        }

        .member-department {
          font-size: 0.75rem;
          color: #9ca3af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
      }
    }
  }
}

.state-demo-item {
  flex: 1;
  min-width: 280px;
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

.custom-label-demo {
  width: 100%;
  max-width: 600px;

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

.advanced-demo {
  width: 100%;
  max-width: 700px;

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

    .tech-categories {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .tech-category {
        .category-header {
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 0.5rem;
          padding: 0.5rem;
          background: #e2e8f0;
          border-radius: 6px;
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .tech-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 0.5rem;

          .tech-item {
            padding: 0.75rem;
            background: white;
            border-radius: 6px;
            border: 1px solid #e2e8f0;

            .tech-title {
              font-weight: 600;
              color: #1e293b;
              margin-bottom: 0.25rem;
              font-size: 0.875rem;
            }

            .tech-type {
              font-size: 0.75rem;
              color: #9ca3af;
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }
          }
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
  .autocomplete-demo {
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

  .multi-demo .team-grid {
    grid-template-columns: 1fr;
  }

  .advanced-demo .tech-categories .tech-category .tech-items {
    grid-template-columns: 1fr;
  }

  .props-table {
    font-size: 0.8rem;
  }
}
</style>
