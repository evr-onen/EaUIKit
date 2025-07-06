<template>
  <div class="checkbox-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaCheckbox Component</h1>
        <p class="demo-description">
          A customizable checkbox component with multiple sizes, states, and validation support.
          Perfect for forms, settings panels, and user preferences with full accessibility features.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different checkbox variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Checkbox</h4>
            <p>Simple checkbox with label</p>
            <EACheckbox label="Accept terms" v-model="basicCheck" />
            <span class="value-display">Value: {{ basicCheck }}</span>
          </div>

          <div class="demo-card">
            <h4>Size Variants</h4>
            <p>Small, medium, and large options</p>
            <div class="checkbox-group">
              <EACheckbox label="Small" v-model="sizeDemo" size="sm" />
              <EACheckbox label="Medium" v-model="sizeDemo" size="md" />
              <EACheckbox label="Large" v-model="sizeDemo" size="lg" />
            </div>
          </div>

          <div class="demo-card">
            <h4>Disabled State</h4>
            <p>Non-interactive checkbox</p>
            <div class="checkbox-group">
              <EACheckbox label="Disabled unchecked" v-model="disabledUnchecked" :disabled="true" />
              <EACheckbox label="Disabled checked" v-model="disabledChecked" :disabled="true" />
            </div>
          </div>

          <div class="demo-card">
            <h4>Error State</h4>
            <p>Validation error styling</p>
            <EACheckbox label="Required field" v-model="errorCheck" :error="!errorCheck && showError" />
            <button @click="showError = !showError" class="btn btn--secondary btn--sm">
              Toggle Error
            </button>
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
          EaCheckbox supports three size options: sm, md (default), and lg. Each size maintains proper proportions and accessibility standards.
        </p>

        <div class="demo-group">
          <button @click="activateSize('sm')" class="btn btn--secondary">Small (sm)</button>
          <button @click="activateSize('md')" class="btn btn--secondary">Medium (md)</button>
          <button @click="activateSize('lg')" class="btn btn--secondary">Large (lg)</button>
        </div>

        <div class="showcase-grid">
          <div class="showcase-item">
            <div class="showcase-demo">
              <EACheckbox label="Small checkbox" v-model="sizeSm" size="sm" />
            </div>
            <div class="showcase-info">
              <h4>Small (sm)</h4>
              <p>Compact size for dense layouts and space-constrained interfaces</p>
            </div>
          </div>

          <div class="showcase-item">
            <div class="showcase-demo">
              <EACheckbox label="Medium checkbox" v-model="sizeMd" size="md" />
            </div>
            <div class="showcase-info">
              <h4>Medium (md)</h4>
              <p>Default size that works well for most use cases and applications</p>
            </div>
          </div>

          <div class="showcase-item">
            <div class="showcase-demo">
              <EACheckbox label="Large checkbox" v-model="sizeLg" size="lg" />
            </div>
            <div class="showcase-info">
              <h4>Large (lg)</h4>
              <p>Larger size for better accessibility and mobile interfaces</p>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="sizeVariantsCode"
          title="Size Variants Example"
        />
      </section>

      <!-- States and Validation -->
      <section class="demo-section">
        <h2>States and Validation</h2>
        <p class="section-description">
          Handle different checkbox states including normal, disabled, and error states for comprehensive form validation.
        </p>

        <div class="demo-group">
          <button @click="toggleState('normal')" class="btn btn--secondary">Normal State</button>
          <button @click="toggleState('disabled')" class="btn btn--secondary">Disabled State</button>
          <button @click="toggleState('error')" class="btn btn--secondary">Error State</button>
        </div>

        <div class="showcase-grid">
          <div class="showcase-item">
            <div class="showcase-demo">
              <EACheckbox label="Normal checkbox" v-model="normalState" />
            </div>
            <div class="showcase-info">
              <h4>Normal</h4>
              <p>Default interactive state with standard styling and behavior</p>
            </div>
          </div>

          <div class="showcase-item">
            <div class="showcase-demo">
              <EACheckbox label="Disabled checkbox" v-model="disabledState" :disabled="true" />
            </div>
            <div class="showcase-info">
              <h4>Disabled</h4>
              <p>Non-interactive state with reduced opacity and no pointer events</p>
            </div>
          </div>

          <div class="showcase-item">
            <div class="showcase-demo">
              <EACheckbox label="Error checkbox" v-model="errorState" :error="true" />
            </div>
            <div class="showcase-info">
              <h4>Error</h4>
              <p>Validation error state with red border and error styling</p>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="statesCode"
          title="States Example"
        />
      </section>

      <!-- Form Integration -->
      <section class="demo-section">
        <h2>Form Integration</h2>
        <p class="section-description">
          Real-world examples demonstrating checkbox integration in forms with validation, user preferences, and state management.
        </p>

        <div class="form-demo-container">
          <div class="form-demo">
            <h4>User Registration Form</h4>
            <div class="form-group">
              <EACheckbox
                label="I agree to the Terms of Service"
                v-model="formData.termsAccepted"
                :error="!formData.termsAccepted && formValidation.showErrors"
              />
              <EACheckbox
                label="Subscribe to newsletter updates"
                v-model="formData.newsletter"
              />
              <EACheckbox
                label="Enable email notifications"
                v-model="formData.emailNotifications"
              />
              <EACheckbox
                label="Enable SMS notifications"
                v-model="formData.smsNotifications"
              />
            </div>

            <div class="form-actions">
              <button @click="validateForm" class="btn btn--primary">
                Submit Registration
              </button>
              <button @click="resetForm" class="btn btn--secondary">
                Reset Form
              </button>
            </div>

            <div v-if="formValidation.showErrors && !formData.termsAccepted" class="error-message">
              ⚠️ Please accept the Terms of Service to continue.
            </div>

            <div v-if="formValidation.success" class="success-message">
              ✅ Registration submitted successfully!
            </div>
          </div>

          <div class="form-state">
            <h5>Form State Monitor</h5>
            <div class="state-grid">
              <div class="state-item">
                <span class="state-label">Terms:</span>
                <span :class="formData.termsAccepted ? 'state-true' : 'state-false'">
                  {{ formData.termsAccepted ? '✓ Accepted' : '✗ Not accepted' }}
                </span>
              </div>
              <div class="state-item">
                <span class="state-label">Newsletter:</span>
                <span :class="formData.newsletter ? 'state-true' : 'state-false'">
                  {{ formData.newsletter ? '✓ Subscribed' : '✗ Not subscribed' }}
                </span>
              </div>
              <div class="state-item">
                <span class="state-label">Email:</span>
                <span :class="formData.emailNotifications ? 'state-true' : 'state-false'">
                  {{ formData.emailNotifications ? '✓ Enabled' : '✗ Disabled' }}
                </span>
              </div>
              <div class="state-item">
                <span class="state-label">SMS:</span>
                <span :class="formData.smsNotifications ? 'state-true' : 'state-false'">
                  {{ formData.smsNotifications ? '✓ Enabled' : '✗ Disabled' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="formIntegrationCode"
          title="Form Integration Example"
        />
      </section>

      <!-- Settings Panel -->
      <section class="demo-section">
        <h2>Settings Panel</h2>
        <p class="section-description">
          Example of using checkboxes in a settings or preferences panel with grouped options and categories.
        </p>

        <div class="settings-demo">
          <div class="settings-group">
            <h4>🔔 Notifications</h4>
            <div class="settings-options">
              <EACheckbox label="Push notifications" v-model="settings.pushNotifications" size="sm" />
              <EACheckbox label="Sound alerts" v-model="settings.soundAlerts" size="sm" />
              <EACheckbox label="Vibration feedback" v-model="settings.vibration" size="sm" />
              <EACheckbox label="Email digest" v-model="settings.emailDigest" size="sm" />
            </div>
          </div>

          <div class="settings-group">
            <h4>🔒 Privacy</h4>
            <div class="settings-options">
              <EACheckbox label="Share location data" v-model="settings.shareLocation" size="sm" />
              <EACheckbox label="Show online status" v-model="settings.showOnlineStatus" size="sm" />
              <EACheckbox label="Allow data collection" v-model="settings.allowDataCollection" size="sm" />
              <EACheckbox label="Anonymous analytics" v-model="settings.anonymousAnalytics" size="sm" />
            </div>
          </div>

          <div class="settings-group">
            <h4>♿ Accessibility</h4>
            <div class="settings-options">
              <EACheckbox label="High contrast mode" v-model="settings.highContrast" size="sm" />
              <EACheckbox label="Large text display" v-model="settings.largeText" size="sm" />
              <EACheckbox label="Reduce motion effects" v-model="settings.reduceMotion" size="sm" />
              <EACheckbox label="Screen reader support" v-model="settings.screenReader" size="sm" />
            </div>
          </div>
        </div>

        <CodeBlock
          :code="settingsPanelCode"
          title="Settings Panel Example"
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
                <td><code>label</code></td>
                <td><code>string</code></td>
                <td><code>''</code></td>
                <td>Text label displayed next to the checkbox</td>
              </tr>
              <tr>
                <td><code>v-model</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Checked state of the checkbox (required)</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td><code>'sm' | 'md' | 'lg'</code></td>
                <td><code>'md'</code></td>
                <td>Size variant of the checkbox component</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Disables the checkbox interaction</td>
              </tr>
              <tr>
                <td><code>error</code></td>
                <td><code>boolean</code></td>
                <td><code>false</code></td>
                <td>Shows error state with validation styling</td>
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
                <td><code>boolean</code></td>
                <td>Emitted when checkbox state changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import EACheckbox from '@/components/ui/form/EaCheckbox/EaCheckbox.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Quick Demo
const basicCheck = ref(false)
const sizeDemo = ref(true)
const disabledUnchecked = ref(false)
const disabledChecked = ref(true)
const errorCheck = ref(false)
const showError = ref(true)

// Size Variants
const sizeSm = ref(true)
const sizeMd = ref(true)
const sizeLg = ref(true)

// States
const normalState = ref(false)
const disabledState = ref(true)
const errorState = ref(false)

// Form Integration
const formData = reactive({
  termsAccepted: false,
  newsletter: false,
  emailNotifications: true,
  smsNotifications: false
})

const formValidation = reactive({
  showErrors: false,
  success: false
})

// Settings
const settings = reactive({
  pushNotifications: true,
  soundAlerts: false,
  vibration: true,
  emailDigest: false,
  shareLocation: false,
  showOnlineStatus: true,
  allowDataCollection: false,
  anonymousAnalytics: true,
  highContrast: false,
  largeText: false,
  reduceMotion: false,
  screenReader: false
})

// Methods
const activateSize = (size: string) => {
  console.log(`Activated ${size} size demo`)
}

const toggleState = (state: string) => {
  console.log(`Toggled ${state} state demo`)
}

const validateForm = () => {
  formValidation.showErrors = true
  if (formData.termsAccepted) {
    formValidation.success = true
    setTimeout(() => {
      formValidation.success = false
    }, 3000)
  }
}

const resetForm = () => {
  Object.assign(formData, {
    termsAccepted: false,
    newsletter: false,
    emailNotifications: true,
    smsNotifications: false
  })
  formValidation.showErrors = false
  formValidation.success = false
}

// Code Examples
const quickDemoCode = `<template>
  <div class="checkbox-examples">
    <!-- Basic checkbox -->
    <EACheckbox label="Accept terms" v-model="basicCheck" />

    <!-- Size variants -->
    <EACheckbox label="Small" v-model="sizeDemo" size="sm" />
    <EACheckbox label="Medium" v-model="sizeDemo" size="md" />
    <EACheckbox label="Large" v-model="sizeDemo" size="lg" />

    <!-- Disabled state -->
    <EACheckbox label="Disabled" v-model="disabled" :disabled="true" />

    <!-- Error state -->
    <EACheckbox label="Required field" v-model="errorCheck" :error="!errorCheck" />
  </div>
</template>

//script
import { ref } from 'vue'
import EACheckbox from '@/components/ui/form/EaCheckbox/EaCheckbox.vue'

const basicCheck = ref(false)
const sizeDemo = ref(true)
const disabled = ref(true)
const errorCheck = ref(false)`

const sizeVariantsCode = `<template>
  <div class="size-examples">
    <!-- Small checkbox -->
    <EACheckbox
      label="Small checkbox"
      v-model="sizeSm"
      size="sm"
    />

    <!-- Medium checkbox (default) -->
    <EACheckbox
      label="Medium checkbox"
      v-model="sizeMd"
      size="md"
    />

    <!-- Large checkbox -->
    <EACheckbox
      label="Large checkbox"
      v-model="sizeLg"
      size="lg"
    />
  </div>
</template>

//script
import { ref } from 'vue'

const sizeSm = ref(true)
const sizeMd = ref(true)
const sizeLg = ref(true)`

const statesCode = `<template>
  <div class="states-examples">
    <!-- Normal state -->
    <EACheckbox
      label="Normal checkbox"
      v-model="normalState"
    />

    <!-- Disabled state -->
    <EACheckbox
      label="Disabled checkbox"
      v-model="disabledState"
      :disabled="true"
    />

    <!-- Error state -->
    <EACheckbox
      label="Error checkbox"
      v-model="errorState"
      :error="true"
    />
  </div>
</template>

//script
import { ref } from 'vue'

const normalState = ref(false)
const disabledState = ref(true)
const errorState = ref(false)`

const formIntegrationCode = `<template>
  <form @submit.prevent="validateForm">
    <EACheckbox
      label="I agree to the Terms of Service"
      v-model="formData.termsAccepted"
      :error="!formData.termsAccepted && showErrors"
    />

    <EACheckbox
      label="Subscribe to newsletter"
      v-model="formData.newsletter"
    />

    <EACheckbox
      label="Enable email notifications"
      v-model="formData.emailNotifications"
    />

    <button type="submit">Submit Registration</button>

    <div v-if="showErrors && !formData.termsAccepted" class="error">
      Please accept the Terms of Service to continue.
    </div>
  </form>
</template>

//script
import { reactive, ref } from 'vue'

const formData = reactive({
  termsAccepted: false,
  newsletter: false,
  emailNotifications: true
})

const showErrors = ref(false)

const validateForm = () => {
  showErrors.value = true
  if (formData.termsAccepted) {
    console.log('Form submitted:', formData)
  }
}`

const settingsPanelCode = `<template>
  <div class="settings-panel">
    <div class="settings-group">
      <h4>Notifications</h4>
      <EACheckbox label="Push notifications" v-model="settings.pushNotifications" size="sm" />
      <EACheckbox label="Sound alerts" v-model="settings.soundAlerts" size="sm" />
      <EACheckbox label="Email digest" v-model="settings.emailDigest" size="sm" />
    </div>

    <div class="settings-group">
      <h4>Privacy</h4>
      <EACheckbox label="Share location" v-model="settings.shareLocation" size="sm" />
      <EACheckbox label="Show online status" v-model="settings.showOnlineStatus" size="sm" />
    </div>
  </div>
</template>

//script
import { reactive } from 'vue'

const settings = reactive({
  pushNotifications: true,
  soundAlerts: false,
  emailDigest: false,
  shareLocation: false,
  showOnlineStatus: true
})`
</script>

<style scoped lang="scss">
.checkbox-demo {
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
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.demo-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
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

.checkbox-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.value-display {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
}

.demo-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.showcase-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }
}

.showcase-demo {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
}

.showcase-info {
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
  }
}

.form-demo-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.form-demo {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.form-actions {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.form-state {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  height: fit-content;

  h5 {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }
}

.state-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.state-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.state-label {
  font-weight: 500;
  color: #64748b;
}

.state-true {
  color: #059669;
  font-weight: 500;
}

.state-false {
  color: #dc2626;
  font-weight: 500;
}

.settings-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.settings-group {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }
}

.settings-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
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
  min-width: 120px;

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

    &:active {
      transform: translateY(0);
    }
  }

  &--sm {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    min-width: 100px;
  }
}

.error-message {
  color: #dc2626;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #fef2f2;
  border-radius: 6px;
  border: 1px solid #fecaca;
}

.success-message {
  color: #059669;
  font-size: 0.875rem;
  font-weight: 500;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #f0fdf4;
  border-radius: 6px;
  border: 1px solid #bbf7d0;
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
  .checkbox-demo {
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
  }

  .form-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .props-table {
    font-size: 0.8rem;
  }
}
</style>
