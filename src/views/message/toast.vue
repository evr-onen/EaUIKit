<template>
  <div class="toast-demo">
    <div class="page-header">
      <h1>Toast Component</h1>
      <p>Interactive toast notifications that appear at the top-right corner of the screen with smooth animations</p>
    </div>

    <!-- Basic Toast Types -->
    <section class="demo-section">
      <h2>Basic Toast Types</h2>
      <p>Click the buttons below to trigger different types of toast notifications:</p>

      <div class="toast-buttons">
        <EaButton
          label="Success Toast"
          variant="success"
          @click="showSuccessToast"
        />

        <EaButton
          label="Error Toast"
          variant="danger"
          @click="showErrorToast"
        />

        <EaButton
          label="Warning Toast"
          variant="warning"
          @click="showWarningToast"
        />

        <EaButton
          label="Info Toast"
          variant="info"
          @click="showInfoToast"
        />

        <EaButton
          label="Clear All Toasts"
          variant="secondary"
          @click="clearAll"
        />
      </div>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;template&gt;
  &lt;EaButton label="Success Toast" variant="success" @click="showSuccessToast" /&gt;
  &lt;EaButton label="Error Toast" variant="danger" @click="showErrorToast" /&gt;
  &lt;EaButton label="Warning Toast" variant="warning" @click="showWarningToast" /&gt;
  &lt;EaButton label="Info Toast" variant="info" @click="showInfoToast" /&gt;

  &lt;!-- Toast Component --&gt;
  &lt;EaToast /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { useToast } from '@/components/ui/messages/EaToast/useToast'
import EaToast from '@/components/ui/messages/EaToast/EaToast.vue'

const { showSuccess, showError, showWarning, showInfo, clearAllToasts } = useToast()

const showSuccessToast = () => {
  showSuccess('Operation completed successfully!', 4000)
}

const showErrorToast = () => {
  showError('An error occurred. Please try again.', 5000)
}

const showWarningToast = () => {
  showWarning('This action cannot be undone!', 4000)
}

const showInfoToast = () => {
  showInfo('New update available.', 3000)
}

const clearAll = () => {
  clearAllToasts()
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- Custom Duration -->
    <section class="demo-section">
      <h2>Custom Duration</h2>
      <p>Toast messages can have different auto-close durations:</p>

      <div class="toast-buttons">
        <EaButton
          label="Quick Toast (2s)"
          variant="primary"
          @click="showQuickToast"
        />

        <EaButton
          label="Long Toast (8s)"
          variant="primary"
          @click="showLongToast"
        />

        <EaButton
          label="Persistent Toast"
          variant="primary"
          @click="showPersistentToast"
        />
      </div>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;script setup&gt;
const showQuickToast = () => {
  showInfo('This toast will close in 2 seconds', 2000)
}

const showLongToast = () => {
  showInfo('This toast will stay for 8 seconds', 8000)
}

const showPersistentToast = () => {
  showInfo('This toast stays until manually closed', 0) // 0 = no auto-close
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- Multiple Toasts -->
    <section class="demo-section">
      <h2>Multiple Toasts</h2>
      <p>Multiple toast messages can be displayed simultaneously and stack vertically:</p>

      <div class="toast-buttons">
        <EaButton
          label="Show Multiple Toasts"
          variant="primary"
          @click="showMultipleToasts"
        />

        <EaButton
          label="Show Sequence"
          variant="secondary"
          @click="showSequentialToasts"
        />
      </div>

      <div class="code-example">
        <h4>Code</h4>
        <pre><code>&lt;script setup&gt;
const showMultipleToasts = () => {
  showSuccess('First toast message')
  showInfo('Second toast message')
  showWarning('Third toast message')
}

const showSequentialToasts = () => {
  showInfo('Toast 1 of 3')

  setTimeout(() => {
    showSuccess('Toast 2 of 3')
  }, 1000)

  setTimeout(() => {
    showWarning('Toast 3 of 3')
  }, 2000)
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <!-- Toast Component -->
    <EaToast />

    <!-- Props Documentation -->
    <section class="documentation-section">
      <h2>useToast Composable</h2>
      <div class="props-table">
        <table>
          <thead>
            <tr>
              <th>Method</th>
              <th>Parameters</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>showSuccess(message, duration?)</code></td>
              <td>message: string, duration?: number</td>
              <td>Shows a success toast with green styling</td>
            </tr>
            <tr>
              <td><code>showError(message, duration?)</code></td>
              <td>message: string, duration?: number</td>
              <td>Shows an error toast with red styling</td>
            </tr>
            <tr>
              <td><code>showWarning(message, duration?)</code></td>
              <td>message: string, duration?: number</td>
              <td>Shows a warning toast with orange styling</td>
            </tr>
            <tr>
              <td><code>showInfo(message, duration?)</code></td>
              <td>message: string, duration?: number</td>
              <td>Shows an info toast with blue styling</td>
            </tr>
            <tr>
              <td><code>clearAllToasts()</code></td>
              <td>none</td>
              <td>Removes all currently displayed toasts</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Toast Properties -->
    <section class="documentation-section">
      <h2>Toast Properties</h2>
      <div class="props-table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>message</code></td>
              <td>string</td>
              <td>required</td>
              <td>The text content of the toast message</td>
            </tr>
            <tr>
              <td><code>type</code></td>
              <td>'success' | 'error' | 'warning' | 'info'</td>
              <td>'info'</td>
              <td>The type of toast determining color and icon</td>
            </tr>
            <tr>
              <td><code>duration</code></td>
              <td>number</td>
              <td>4000</td>
              <td>Auto-close duration in milliseconds (0 = no auto-close)</td>
            </tr>
            <tr>
              <td><code>id</code></td>
              <td>string</td>
              <td>auto-generated</td>
              <td>Unique identifier for the toast instance</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Features -->
    <section class="documentation-section">
      <h2>Features</h2>
      <div class="feature-list">
        <div class="feature-item">
          <h3>🎯 Position</h3>
          <p>Toasts appear at the top-right corner of the screen and stack vertically</p>
        </div>
        <div class="feature-item">
          <h3>🎨 Visual Types</h3>
          <p>Four distinct visual styles: success (green), error (red), warning (orange), info (blue)</p>
        </div>
        <div class="feature-item">
          <h3>⏱️ Auto-Close</h3>
          <p>Configurable auto-close duration or persistent display until manual close</p>
        </div>
        <div class="feature-item">
          <h3>✨ Animations</h3>
          <p>Smooth slide-in and slide-out animations with proper transitions</p>
        </div>
        <div class="feature-item">
          <h3>📱 Responsive</h3>
          <p>Adapts to mobile screens with appropriate sizing and positioning</p>
        </div>
        <div class="feature-item">
          <h3>♿ Accessible</h3>
          <p>Proper ARIA labels and keyboard navigation support</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import EaToast from '@/components/ui/messages/EaToast/EaToast.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'
import { useToast } from '@/components/ui/messages/EaToast/useToast'

const { showSuccess, showError, showWarning, showInfo, clearAllToasts } = useToast()

// Basic toast functions
const showSuccessToast = () => {
  showSuccess('Operation completed successfully!', 4000)
}

const showErrorToast = () => {
  showError('An error occurred. Please try again.', 5000)
}

const showWarningToast = () => {
  showWarning('This action cannot be undone!', 4000)
}

const showInfoToast = () => {
  showInfo('New update available.', 3000)
}

const clearAll = () => {
  clearAllToasts()
}

// Custom duration functions
const showQuickToast = () => {
  showInfo('This toast will close in 2 seconds', 2000)
}

const showLongToast = () => {
  showInfo('This toast will stay for 8 seconds', 8000)
}

const showPersistentToast = () => {
  showInfo('This toast stays until manually closed', 0) // 0 = no auto-close
}

// Multiple toast functions
const showMultipleToasts = () => {
  showSuccess('First toast message')
  showInfo('Second toast message')
  showWarning('Third toast message')
}

const showSequentialToasts = () => {
  showInfo('Toast 1 of 3')

  setTimeout(() => {
    showSuccess('Toast 2 of 3')
  }, 1000)

  setTimeout(() => {
    showWarning('Toast 3 of 3')
  }, 2000)
}
</script>

<style scoped lang="scss">
.toast-demo {
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

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
}

.toast-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

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
.code-example {
  background: #2d3748;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 1.5rem;

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
.props-table {
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

// Feature list
.feature-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
    margin-bottom: 0.5rem;
  }

  p {
    color: #4a5568;
    margin: 0;
    line-height: 1.5;
  }
}

// Responsive
@media (max-width: 768px) {
  .toast-demo {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .demo-section,
  .documentation-section {
    padding: 1.5rem;
    margin-bottom: 3rem;
  }

  .toast-buttons {
    flex-direction: column;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.75rem;
  }
}
</style>
