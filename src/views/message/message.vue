<template>
  <div class="message-demo">
    <div class="page-header">
      <h1>Message Component</h1>
      <p>Versatile message component examples for forms and applications with various styles and interactions</p>
    </div>

    <!-- Basic Message Types -->
    <section class="demo-section">
      <h2>Basic Message Types</h2>
      <div class="message-examples">
        <EaMessage
          type="success"
          title="Form submitted successfully"
          message="Your information has been saved and a confirmation email will be sent to you."
          :closable="true"
        />

        <EaMessage
          type="error"
          title="Form submission failed"
          message="Please fill in the required fields and try again."
          :closable="true"
        />

        <EaMessage
          type="warning"
          title="Attention required"
          message="Some fields are missing or incorrect. Please check and correct them."
          :closable="true"
        />

        <EaMessage
          type="info"
          title="Information"
          message="You will receive a response within 24 hours after completing the form."
          :closable="true"
        />
      </div>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;!-- Success Message --&gt;
  &lt;EaMessage
    type="success"
    title="Form submitted successfully"
    message="Your information has been saved and a confirmation email will be sent to you."
    :closable="true"
  /&gt;

  &lt;!-- Error Message --&gt;
  &lt;EaMessage
    type="error"
    title="Form submission failed"
    message="Please fill in the required fields and try again."
    :closable="true"
  /&gt;

  &lt;!-- Warning Message --&gt;
  &lt;EaMessage
    type="warning"
    title="Attention required"
    message="Some fields are missing or incorrect. Please check and correct them."
    :closable="true"
  /&gt;

  &lt;!-- Info Message --&gt;
  &lt;EaMessage
    type="info"
    title="Information"
    message="You will receive a response within 24 hours after completing the form."
    :closable="true"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <!-- Different Variants -->
    <section class="demo-section">
      <h2>Message Variants</h2>

      <h3>Light (Default)</h3>
      <div class="message-examples">
        <EaMessage
          type="success"
          variant="light"
          message="This is a light variant success message with subtle background."
        />
        <EaMessage
          type="error"
          variant="light"
          message="This is a light variant error message with subtle background."
        />
      </div>

      <h3>Filled</h3>
      <div class="message-examples">
        <EaMessage
          type="success"
          variant="filled"
          message="This is a filled variant success message with solid background."
        />
        <EaMessage
          type="error"
          variant="filled"
          message="This is a filled variant error message with solid background."
        />
      </div>

      <h3>Outlined</h3>
      <div class="message-examples">
        <EaMessage
          type="success"
          variant="outlined"
          message="This is an outlined variant success message with border only."
        />
        <EaMessage
          type="error"
          variant="outlined"
          message="This is an outlined variant error message with border only."
        />
      </div>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;!-- Light Variant (Default) --&gt;
  &lt;EaMessage
    type="success"
    variant="light"
    message="This is a light variant success message with subtle background."
  /&gt;
  &lt;EaMessage
    type="error"
    variant="light"
    message="This is a light variant error message with subtle background."
  /&gt;

  &lt;!-- Filled Variant --&gt;
  &lt;EaMessage
    type="success"
    variant="filled"
    message="This is a filled variant success message with solid background."
  /&gt;
  &lt;EaMessage
    type="error"
    variant="filled"
    message="This is a filled variant error message with solid background."
  /&gt;

  &lt;!-- Outlined Variant --&gt;
  &lt;EaMessage
    type="success"
    variant="outlined"
    message="This is an outlined variant success message with border only."
  /&gt;
  &lt;EaMessage
    type="error"
    variant="outlined"
    message="This is an outlined variant error message with border only."
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <!-- Different Sizes -->
    <section class="demo-section">
      <h2>Message Sizes</h2>

      <h3>Small</h3>
      <EaMessage
        type="info"
        size="small"
        message="This is a small size message with compact padding and font size."
      />

      <h3>Medium (Default)</h3>
      <EaMessage
        type="info"
        size="medium"
        message="This is a medium size message with standard padding and font size."
      />

      <h3>Large</h3>
      <EaMessage
        type="info"
        size="large"
        message="This is a large size message with generous padding and font size."
      />

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;!-- Small Size --&gt;
  &lt;EaMessage
    type="info"
    size="small"
    message="This is a small size message with compact padding and font size."
  /&gt;

  &lt;!-- Medium Size (Default) --&gt;
  &lt;EaMessage
    type="info"
    size="medium"
    message="This is a medium size message with standard padding and font size."
  /&gt;

  &lt;!-- Large Size --&gt;
  &lt;EaMessage
    type="info"
    size="large"
    message="This is a large size message with generous padding and font size."
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <!-- Without Icons -->
    <section class="demo-section">
      <h2>Messages Without Icons</h2>
      <div class="message-examples">
        <EaMessage
          type="info"
          message="This message doesn't display an icon for a cleaner look."
          :show-icon="false"
        />

        <EaMessage
          type="success"
          title="Success Without Icon"
          message="This success message also doesn't show an icon."
          :show-icon="false"
        />
      </div>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;EaMessage
    type="info"
    message="This message doesn't display an icon for a cleaner look."
    :show-icon="false"
  /&gt;

  &lt;EaMessage
    type="success"
    title="Success Without Icon"
    message="This success message also doesn't show an icon."
    :show-icon="false"
  /&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <!-- Auto Close Messages -->
    <section class="demo-section">
      <h2>Auto-Closing Messages</h2>
      <div class="auto-close-demo">
        <EaButton
          label="Show Auto-Close Message (3 seconds)"
          variant="primary"
          @click="showAutoCloseMessage"
        />

        <EaMessage
          v-if="showAutoMessage"
          type="warning"
          title="Auto-Closing Message"
          message="This message will automatically close after 3 seconds."
          :duration="3000"
          :closable="false"
          @close="showAutoMessage = false"
        />
      </div>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;EaButton
    label="Show Auto-Close Message (3 seconds)"
    variant="primary"
    @click="showAutoCloseMessage"
  /&gt;

  &lt;EaMessage
    v-if="showAutoMessage"
    type="warning"
    title="Auto-Closing Message"
    message="This message will automatically close after 3 seconds."
    :duration="3000"
    :closable="false"
    @close="showAutoMessage = false"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const showAutoMessage = ref(false)

const showAutoCloseMessage = () => {
  showAutoMessage.value = true
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- Custom Content -->
    <section class="demo-section">
      <h2>Custom Content with Slots</h2>
      <EaMessage type="info" title="Message with Custom Content">
        <div class="custom-message-content">
          <p>This message uses slots to display custom content:</p>
          <ul>
            <li>Custom HTML elements</li>
            <li>Interactive components</li>
            <li>Rich formatting options</li>
          </ul>
          <div class="custom-message-actions">
            <EaButton label="Custom Action Button" variant="success" size="sm" />
          </div>
        </div>
      </EaMessage>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;EaMessage type="info" title="Message with Custom Content"&gt;
    &lt;div class="custom-message-content"&gt;
      &lt;p&gt;This message uses slots to display custom content:&lt;/p&gt;
      &lt;ul&gt;
        &lt;li&gt;Custom HTML elements&lt;/li&gt;
        &lt;li&gt;Interactive components&lt;/li&gt;
        &lt;li&gt;Rich formatting options&lt;/li&gt;
      &lt;/ul&gt;
      &lt;div class="custom-message-actions"&gt;
        &lt;EaButton label="Custom Action Button" variant="success" size="sm" /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/EaMessage&gt;
&lt;/template&gt;

&lt;style scoped&gt;
.custom-message-content p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.custom-message-content ul {
  margin: 1rem 0 1.5rem 0;
  padding-left: 1.5rem;
}

.custom-message-content li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.custom-message-actions {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}
&lt;/style&gt;</code></pre>
      </div>
    </section>

        <!-- Form Integration Example -->
    <section class="demo-section">
      <h2>Form Integration Example</h2>
      <Card
        title="Contact Form"
        content="Fill out the form below to see how messages integrate with form validation."
        variant="outlined"
      >
        <form @submit.prevent="submitForm" class="form-content">
          <!-- Form Messages -->
          <EaMessage
            v-if="formMessage.show"
            :type="formMessage.type"
            :title="formMessage.title"
            :message="formMessage.message"
            @close="formMessage.show = false"
          />

          <div class="form-group">
            <label for="name">Full Name</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              class="form-input"
              :class="{ 'error': formErrors.name }"
              placeholder="Enter your full name"
            />
          </div>

          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="form-input"
              :class="{ 'error': formErrors.email }"
              placeholder="Enter your email address"
            />
          </div>

          <div class="form-actions">
            <EaButton
              label="Submit"
              variant="success"
              type="submit"
            />
            <EaButton
              label="Simulate Error"
              variant="danger"
              type="button"
              @click="simulateError"
            />
          </div>
        </form>
      </Card>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;Card
    title="Contact Form"
    content="Fill out the form below to see how messages integrate with form validation."
    variant="outlined"
  &gt;
    &lt;form @submit.prevent="submitForm" class="form-content"&gt;
      &lt;!-- Form Messages --&gt;
      &lt;EaMessage
        v-if="formMessage.show"
        :type="formMessage.type"
        :title="formMessage.title"
        :message="formMessage.message"
        @close="formMessage.show = false"
      /&gt;

      &lt;div class="form-group"&gt;
        &lt;label for="name"&gt;Full Name&lt;/label&gt;
        &lt;input
          id="name"
          v-model="formData.name"
          type="text"
          class="form-input"
          :class="{ 'error': formErrors.name }"
          placeholder="Enter your full name"
        /&gt;
      &lt;/div&gt;

      &lt;div class="form-group"&gt;
        &lt;label for="email"&gt;Email Address&lt;/label&gt;
        &lt;input
          id="email"
          v-model="formData.email"
          type="email"
          class="form-input"
          :class="{ 'error': formErrors.email }"
          placeholder="Enter your email address"
        /&gt;
      &lt;/div&gt;

      &lt;div class="form-actions"&gt;
        &lt;EaButton
          label="Submit"
          variant="success"
          type="submit"
        /&gt;
        &lt;EaButton
          label="Simulate Error"
          variant="danger"
          type="button"
          @click="simulateError"
        /&gt;
      &lt;/div&gt;
    &lt;/form&gt;
  &lt;/Card&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: ''
})

const formErrors = reactive({
  name: false,
  email: false
})

const formMessage = reactive({
  show: false,
  type: 'info',
  title: '',
  message: ''
})

const submitForm = () => {
  // Validation logic here
  formMessage.show = true
  formMessage.type = 'success'
  formMessage.title = 'Form Submitted Successfully'
  formMessage.message = 'Your form has been successfully received.'
}

const simulateError = () => {
  formMessage.show = true
  formMessage.type = 'error'
  formMessage.title = 'Server Error'
  formMessage.message = 'An unexpected error occurred. Please try again later.'
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- Code Examples Section -->
    <section class="demo-section">
      <h2>Code Examples</h2>

      <!-- Basic Usage -->
      <div class="example">
        <h3>Basic Usage</h3>
        <p>Simple message with title and content.</p>

        <div class="code-example">
          <h4>Template</h4>
          <pre><code>&lt;template&gt;
  &lt;EaMessage
    type="success"
    title="Form submitted successfully"
    message="Your information has been saved."
    :closable="true"
  /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <!-- Variants Example -->
      <div class="example">
        <h3>Different Variants</h3>
        <p>Messages with different visual styles.</p>

        <div class="code-example">
          <h4>Template</h4>
          <pre><code>&lt;template&gt;
  &lt;!-- Light variant (default) --&gt;
  &lt;EaMessage
    type="success"
    variant="light"
    message="Light variant message"
  /&gt;

  &lt;!-- Filled variant --&gt;
  &lt;EaMessage
    type="error"
    variant="filled"
    message="Filled variant message"
  /&gt;

  &lt;!-- Outlined variant --&gt;
  &lt;EaMessage
    type="warning"
    variant="outlined"
    message="Outlined variant message"
  /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <!-- Auto-close Example -->
      <div class="example">
        <h3>Auto-Closing Message</h3>
        <p>Message that automatically closes after a specified duration.</p>

        <div class="code-example">
          <h4>Template</h4>
          <pre><code>&lt;template&gt;
  &lt;EaMessage
    v-if="showMessage"
    type="warning"
    title="Auto-Closing Message"
    message="This will close in 3 seconds"
    :duration="3000"
    :closable="false"
    @close="showMessage = false"
  /&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="code-example">
          <h4>Script</h4>
          <pre><code>&lt;script setup&gt;
import { ref } from 'vue';
import EaMessage from '@/components/ui/messages/EaMessage/EaMessage.vue';

const showMessage = ref(true);
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Custom Content Example -->
      <div class="example">
        <h3>Custom Content with Slots</h3>
        <p>Using slots for custom HTML content.</p>

        <div class="code-example">
          <h4>Template</h4>
          <pre><code>&lt;template&gt;
  &lt;EaMessage type="info" title="Custom Content"&gt;
    &lt;div&gt;
      &lt;p&gt;This message contains custom content:&lt;/p&gt;
      &lt;ul&gt;
        &lt;li&gt;Custom HTML elements&lt;/li&gt;
        &lt;li&gt;Interactive components&lt;/li&gt;
      &lt;/ul&gt;
      &lt;EaButton label="Action Button" variant="success" size="sm" /&gt;
    &lt;/div&gt;
  &lt;/EaMessage&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Props Documentation -->
    <section class="documentation-section">
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
              <td><code>type</code></td>
              <td>'success' | 'error' | 'warning' | 'info'</td>
              <td>'info'</td>
              <td>Type of message determining color scheme and icon</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>'light' | 'filled' | 'outlined'</td>
              <td>'light'</td>
              <td>Visual style variant of the message</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>'small' | 'medium' | 'large'</td>
              <td>'medium'</td>
              <td>Size of the message affecting padding and font size</td>
            </tr>
            <tr>
              <td><code>title</code></td>
              <td>String</td>
              <td>undefined</td>
              <td>Optional title text displayed in bold</td>
            </tr>
            <tr>
              <td><code>message</code></td>
              <td>String</td>
              <td>undefined</td>
              <td>Main message text (used when no slot content provided)</td>
            </tr>
            <tr>
              <td><code>showIcon</code></td>
              <td>Boolean</td>
              <td>true</td>
              <td>Whether to display the type-specific icon</td>
            </tr>
            <tr>
              <td><code>closable</code></td>
              <td>Boolean</td>
              <td>true</td>
              <td>Whether the message can be manually closed</td>
            </tr>
            <tr>
              <td><code>duration</code></td>
              <td>Number</td>
              <td>0</td>
              <td>Auto-close duration in milliseconds (0 = no auto-close)</td>
            </tr>
            <tr>
              <td><code>customClass</code></td>
              <td>String</td>
              <td>undefined</td>
              <td>Additional CSS class for custom styling</td>
            </tr>
            <tr>
              <td><code>iconClass</code></td>
              <td>String</td>
              <td>undefined</td>
              <td>Additional CSS class for the icon</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Events Documentation -->
    <section class="documentation-section">
      <h2>Events</h2>
      <div class="events-table">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Payload</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>close</code></td>
              <td>Emitted when the message is closed (manually or auto-close)</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Slots Documentation -->
    <section class="documentation-section">
      <h2>Slots</h2>
      <div class="slots-table">
        <table>
          <thead>
            <tr>
              <th>Slot Name</th>
              <th>Description</th>
              <th>Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>default</code></td>
              <td>Main content area (overrides message prop when provided)</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import EaMessage from '@/components/ui/messages/EaMessage/EaMessage.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'
import Card from '@/components/ui/panels/EaCard/EaCard.vue'

// Auto close message state
const showAutoMessage = ref(false)

// Form example state
const formData = reactive({
  name: '',
  email: ''
})

const formErrors = reactive({
  name: false,
  email: false
})

const formMessage = reactive({
  show: false,
  type: 'info' as 'success' | 'error' | 'warning' | 'info',
  title: '',
  message: ''
})

// Methods
const showAutoCloseMessage = () => {
  showAutoMessage.value = true
}

const submitForm = () => {
  // Reset errors
  formErrors.name = false
  formErrors.email = false

  // Simple validation
  if (!formData.name.trim()) {
    formErrors.name = true
  }

  if (!formData.email.trim() || !formData.email.includes('@')) {
    formErrors.email = true
  }

  if (formErrors.name || formErrors.email) {
    formMessage.show = true
    formMessage.type = 'error'
    formMessage.title = 'Form Error'
    formMessage.message = 'Please fill in all required fields correctly.'
    return
  }

  // Success
  formMessage.show = true
  formMessage.type = 'success'
  formMessage.title = 'Form Submitted Successfully'
  formMessage.message = `Hello ${formData.name}, your form has been successfully received. A confirmation email will be sent to ${formData.email}.`

  // Reset form
  formData.name = ''
  formData.email = ''
}

const simulateError = () => {
  formMessage.show = true
  formMessage.type = 'error'
  formMessage.title = 'Server Error'
  formMessage.message = 'An unexpected error occurred. Please try again later.'
}
</script>

<style scoped lang="scss">
.message-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    color: #6b7280;
  }
}

.demo-section {
  margin-bottom: 4rem;
  padding: 2rem;
  background: #fafbfc;
  border-radius: 12px;
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #e5e7eb;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #4b5563;
    margin: 2rem 0 1.5rem 0;
    padding-top: 1rem;
    border-top: 1px solid #e5e7eb;

    &:first-of-type {
      margin-top: 1.5rem;
      padding-top: 0;
      border-top: none;
    }
  }
}

.message-examples {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 1rem 0;
}

// Buttons are now using EaButton component

.auto-close-demo {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 0;
}

.form-content {
  padding: 0;
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &.error {
    border-color: #dc2626;

    &:focus {
      border-color: #dc2626;
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
  }
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

// Custom message content styling
.custom-message-content {
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  ul {
    margin: 1rem 0 1.5rem 0;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
      line-height: 1.5;
    }
  }
}

.custom-message-actions {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e5e7eb;
}

// Form buttons are now using EaButton component

// Documentation sections
.documentation-section {
  margin-bottom: 4rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1.5rem;
    padding-bottom: 0.75rem;
    border-bottom: 2px solid #e5e7eb;
  }
}

// Code examples
.example {
  background: white;
  border-radius: 12px;
  padding: 2.5rem;
  margin-bottom: 3rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border: 1px solid #e5e7eb;

  h3 {
    color: #2c3e50;
    margin-bottom: 0.75rem;
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    color: #666;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.code-example {
  background: #2d3748;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    background: #4a5568;
    color: white;
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
  }

  pre {
    margin: 0;
    padding: 1.5rem;
    overflow-x: auto;
  }

  code {
    color: #e2e8f0;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

// Documentation tables
.props-table,
.events-table,
.slots-table {
  overflow-x: auto;
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

th {
  background: #3b82f6;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
}

td code {
  background: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  color: #e74c3c;
}

// Responsive
@media (max-width: 768px) {
  .message-demo {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .demo-section {
    padding: 1.5rem;
    margin-bottom: 3rem;
  }

  .documentation-section {
    padding: 1.5rem;
    margin-bottom: 3rem;
  }

  .form-content {
    padding: 0;
  }

  .form-actions {
    flex-direction: column;
  }

  .example {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.75rem;
  }
}
</style>
