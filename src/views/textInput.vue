<template>
  <div class="textinput-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaTextInput Component</h1>
        <p class="demo-description">
          A versatile and feature-rich text input component with validation, icons,
          and multiple interaction states for modern web applications.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different text input variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Input</h4>
            <p>Simple text input with label</p>
            <EaTextInput
              v-model="basicExample"
              label="Username"
              placeholder="Enter your username"
            />
          </div>

          <div class="demo-card">
            <h4>With Validation</h4>
            <p>Input with error state</p>
            <EaTextInput
              v-model="errorExample"
              label="Email"
              placeholder="Enter email"
              is-invalid
              error-message="Please enter a valid email"
            />
          </div>

          <div class="demo-card">
            <h4>With Icons</h4>
            <p>Input with prefix icon</p>
            <EaTextInput
              v-model="iconExample"
              label="Search"
              placeholder="Search products..."
              prefix-icon="bars"
            />
          </div>

          <div class="demo-card">
            <h4>Loading State</h4>
            <p>Input with loading indicator</p>
            <EaTextInput
              v-model="loadingExample"
              label="Processing"
              placeholder="Loading..."
              loading
            />
          </div>
        </div>

        <CodeBlock
          :code="quickDemoCode"
          title="Quick Demo Usage"
        />
      </section>

      <!-- Basic Examples -->
      <section class="demo-section">
        <h2>Basic Usage</h2>
        <p class="section-description">
          Essential text input configurations for common use cases.
        </p>

        <div class="demo-group">
          <div class="input-example">
            <h4>Default Input</h4>
            <EaTextInput
              v-model="basicExample"
              label="Username"
              placeholder="Enter your username"
            />
            <span class="example-value">Value: {{ basicExample }}</span>
          </div>

          <div class="input-example">
            <h4>With Helper Text</h4>
            <EaTextInput
              v-model="helperExample"
              label="Email"
              placeholder="Enter your email"
              helper-text="We'll never share your email with anyone."
              type="email"
            />
          </div>

          <div class="input-example">
            <h4>Required Field</h4>
            <EaTextInput
              v-model="requiredExample"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
          </div>
        </div>

        <CodeBlock
          :code="basicUsageCode"
          title="Basic Usage Example"
        />
      </section>

      <!-- Sizes -->
      <section class="demo-section">
        <h2>Size Variants</h2>
        <p class="section-description">
          Choose from three different sizes to match your interface design.
        </p>

        <div class="demo-group">
          <div class="input-example">
            <h4>Small</h4>
            <EaTextInput
              v-model="sizeSmall"
              label="Small Input"
              placeholder="Small size"
              size="sm"
            />
          </div>

          <div class="input-example">
            <h4>Medium (Default)</h4>
            <EaTextInput
              v-model="sizeMedium"
              label="Medium Input"
              placeholder="Medium size"
              size="md"
            />
          </div>

          <div class="input-example">
            <h4>Large</h4>
            <EaTextInput
              v-model="sizeLarge"
              label="Large Input"
              placeholder="Large size"
              size="lg"
            />
          </div>
        </div>

        <CodeBlock
          :code="sizesCode"
          title="Size Variants Example"
        />
      </section>

      <!-- Input Types -->
      <section class="demo-section">
        <h2>Input Types</h2>
        <p class="section-description">
          Support for various HTML5 input types with proper validation and styling.
        </p>

        <div class="demo-group">
          <div class="input-example">
            <h4>Password</h4>
            <EaTextInput
              v-model="passwordExample"
              label="Password"
              placeholder="Enter password"
              type="password"
            />
          </div>

          <div class="input-example">
            <h4>Email</h4>
            <EaTextInput
              v-model="emailExample"
              label="Email"
              placeholder="Enter email"
              type="email"
            />
          </div>

          <div class="input-example">
            <h4>Number</h4>
            <EaTextInput
              v-model="numberExample"
              label="Age"
              placeholder="Enter age"
              type="number"
            />
          </div>

          <div class="input-example">
            <h4>Search</h4>
            <EaTextInput
              v-model="searchExample"
              label="Search"
              placeholder="Search products..."
              type="search"
              prefix-icon="bars"
              clearable
            />
          </div>
        </div>

        <CodeBlock
          :code="inputTypesCode"
          title="Input Types Example"
        />
      </section>

      <!-- States -->
      <section class="demo-section">
        <h2>Input States</h2>
        <p class="section-description">
          Handle different interaction states including disabled, readonly, loading, and error states.
        </p>

        <div class="demo-group">
          <div class="input-example">
            <h4>Normal State</h4>
            <EaTextInput
              v-model="normalExample"
              label="Normal Input"
              placeholder="Type something..."
            />
          </div>

          <div class="input-example">
            <h4>Disabled</h4>
            <EaTextInput
              v-model="disabledExample"
              label="Disabled Input"
              placeholder="This is disabled"
              disabled
            />
          </div>

          <div class="input-example">
            <h4>Readonly</h4>
            <EaTextInput
              v-model="readonlyExample"
              label="Readonly Input"
              placeholder="This is readonly"
              readonly
            />
          </div>

          <div class="input-example">
            <h4>Loading</h4>
            <EaTextInput
              v-model="loadingExample"
              label="Loading Input"
              placeholder="Loading..."
              loading
            />
          </div>

          <div class="input-example">
            <h4>Error State</h4>
            <EaTextInput
              v-model="errorExample"
              label="Email"
              placeholder="Enter email"
              is-invalid
              error-message="Please enter a valid email address"
            />
          </div>

          <div class="input-example">
            <h4>Success State</h4>
            <EaTextInput
              v-model="successExample"
              label="Valid Email"
              placeholder="Enter email"
              is-valid
              success-message="Email format is correct"
            />
          </div>
        </div>

        <CodeBlock
          :code="statesCode"
          title="Input States Example"
        />
      </section>

      <!-- Icons and Enhancements -->
      <section class="demo-section">
        <h2>Icons and Enhancements</h2>
        <p class="section-description">
          Enhance inputs with prefix icons, suffix icons, and clearable functionality.
        </p>

        <div class="demo-group">
          <div class="input-example">
            <h4>Prefix Icon</h4>
            <EaTextInput
              v-model="prefixExample"
              label="Search"
              placeholder="Search..."
              prefix-icon="bars"
            />
          </div>

          <div class="input-example">
            <h4>Suffix Icon</h4>
            <EaTextInput
              v-model="suffixExample"
              label="Website"
              placeholder="Enter URL"
              suffix-icon="check"
            />
          </div>

          <div class="input-example">
            <h4>Clearable Input</h4>
            <EaTextInput
              v-model="clearableExample"
              label="Clearable"
              placeholder="Type to see clear button"
              clearable
            />
          </div>

          <div class="input-example">
            <h4>Multiple Icons</h4>
            <EaTextInput
              v-model="multiIconExample"
              label="Enhanced Input"
              placeholder="With prefix and clearable"
              prefix-icon="bars"
              clearable
            />
          </div>
        </div>

        <CodeBlock
          :code="iconsCode"
          title="Icons and Enhancements Example"
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
                <td><code>modelValue</code></td>
                <td>String</td>
                <td><code>''</code></td>
                <td>The value of the input (v-model)</td>
              </tr>
              <tr>
                <td><code>label</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Input label text</td>
              </tr>
              <tr>
                <td><code>placeholder</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Input placeholder text</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td>'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url'</td>
                <td><code>'text'</code></td>
                <td>HTML input type</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'sm' | 'md' | 'lg'</td>
                <td><code>'md'</code></td>
                <td>Input size variant</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Disable the input</td>
              </tr>
              <tr>
                <td><code>readonly</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Make input readonly</td>
              </tr>
              <tr>
                <td><code>required</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Mark input as required</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Show loading state</td>
              </tr>
              <tr>
                <td><code>clearable</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Show clear button when input has value</td>
              </tr>
              <tr>
                <td><code>prefixIcon</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Icon name for prefix position</td>
              </tr>
              <tr>
                <td><code>suffixIcon</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Icon name for suffix position</td>
              </tr>
              <tr>
                <td><code>isInvalid</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Show error state</td>
              </tr>
              <tr>
                <td><code>isValid</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Show success state</td>
              </tr>
              <tr>
                <td><code>errorMessage</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Error message text</td>
              </tr>
              <tr>
                <td><code>successMessage</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Success message text</td>
              </tr>
              <tr>
                <td><code>helperText</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Helper text below input</td>
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
                <td>String</td>
                <td>Emitted when input value changes</td>
              </tr>
              <tr>
                <td><code>focus</code></td>
                <td>Event</td>
                <td>Emitted when input receives focus</td>
              </tr>
              <tr>
                <td><code>blur</code></td>
                <td>Event</td>
                <td>Emitted when input loses focus</td>
              </tr>
              <tr>
                <td><code>input</code></td>
                <td>Event</td>
                <td>Emitted on input event</td>
              </tr>
              <tr>
                <td><code>clear</code></td>
                <td>-</td>
                <td>Emitted when clear button is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EaTextInput from '@/components/ui/form/EaTextInput/index.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Reactive data
const basicExample = ref('')
const helperExample = ref('')
const requiredExample = ref('')
const errorExample = ref('invalid-email')
const iconExample = ref('')
const loadingExample = ref('')

// Sizes
const sizeSmall = ref('')
const sizeMedium = ref('')
const sizeLarge = ref('')

// Types
const passwordExample = ref('')
const emailExample = ref('')
const numberExample = ref('')
const searchExample = ref('')

// States
const normalExample = ref('')
const disabledExample = ref('Disabled value')
const readonlyExample = ref('Readonly value')
const successExample = ref('user@example.com')

// Icons
const prefixExample = ref('')
const suffixExample = ref('')
const clearableExample = ref('')
const multiIconExample = ref('')

// Code examples
const quickDemoCode = `<template>
  <EaTextInput
    v-model="username"
    label="Username"
    placeholder="Enter your username"
  />

  <EaTextInput
    v-model="email"
    label="Email"
    placeholder="Enter email"
    is-invalid
    error-message="Please enter a valid email"
  />

  <EaTextInput
    v-model="search"
    label="Search"
    placeholder="Search products..."
    prefix-icon="bars"
  />
</template>

<script setup>
import { ref } from 'vue'
import EaTextInput from '@/components/ui/form/EaTextInput/index.vue'

const username = ref('')
const email = ref('')
const search = ref('')
<\/script>`

const basicUsageCode = `<template>
  <EaTextInput
    v-model="inputValue"
    label="Username"
    placeholder="Enter your username"
  />

  <EaTextInput
    v-model="email"
    label="Email"
    placeholder="Enter your email"
    helper-text="We'll never share your email with anyone."
    type="email"
  />

  <EaTextInput
    v-model="fullName"
    label="Full Name"
    placeholder="Enter your full name"
    required
  />
</template>`

const sizesCode = `<template>
  <EaTextInput size="sm" label="Small" placeholder="Small input" />
  <EaTextInput size="md" label="Medium" placeholder="Medium input" />
  <EaTextInput size="lg" label="Large" placeholder="Large input" />
</template>`

const inputTypesCode = `<template>
  <EaTextInput type="text" label="Text" placeholder="Text input" />
  <EaTextInput type="email" label="Email" placeholder="email@example.com" />
  <EaTextInput type="password" label="Password" placeholder="Password" />
  <EaTextInput type="number" label="Number" placeholder="123" />
  <EaTextInput type="search" label="Search" placeholder="Search..." />
</template>`

const statesCode = `<template>
  <!-- Normal -->
  <EaTextInput v-model="normal" label="Normal" />

  <!-- Disabled -->
  <EaTextInput v-model="disabled" label="Disabled" disabled />

  <!-- Readonly -->
  <EaTextInput v-model="readonly" label="Readonly" readonly />

  <!-- Loading -->
  <EaTextInput v-model="loading" label="Loading" loading />

  <!-- Error -->
  <EaTextInput
    v-model="error"
    label="Error"
    is-invalid
    error-message="This field is required"
  />

  <!-- Success -->
  <EaTextInput
    v-model="success"
    label="Success"
    is-valid
    success-message="Looks good!"
  />
</template>`

const iconsCode = `<template>
  <!-- Prefix Icon -->
  <EaTextInput
    v-model="search"
    label="Search"
    placeholder="Search..."
    prefix-icon="bars"
  />

  <!-- Suffix Icon -->
  <EaTextInput
    v-model="website"
    label="Website"
    placeholder="Enter URL"
    suffix-icon="check"
  />

  <!-- Clearable -->
  <EaTextInput
    v-model="clearable"
    label="Clearable"
    placeholder="Type to see clear button"
    clearable
  />

  <!-- Multiple Features -->
  <EaTextInput
    v-model="enhanced"
    label="Enhanced"
    placeholder="With prefix and clearable"
    prefix-icon="bars"
    clearable
  />
</template>`
</script>

<style scoped lang="scss">
.textinput-demo {
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

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.75rem;
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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

.demo-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.input-example {
  padding: 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;

  .example-value {
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 0.5rem;
    display: block;
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
  .textinput-demo {
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
    grid-template-columns: 1fr;
  }
}
</style>
