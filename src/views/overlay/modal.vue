<template>
  <div class="modal-demo">
    <div class="demo-container">
      <h1>Modal Component Demo</h1>
      <p class="demo-description">
        A flexible and accessible modal component with various configuration options.
      </p>

      <!-- Basic Usage -->
      <section class="demo-section">
        <h2>Basic Usage</h2>
        <div class="demo-group">
          <button @click="openBasicModal" class="btn btn--primary">
            Open Basic Modal
          </button>


        </div>

        <div class="code-example">
          <h4>Code Example:</h4>
          <pre><code>&lt;template&gt;
  &lt;button @click="basicModal = true"&gt;Open Modal&lt;/button&gt;

  &lt;EaModal
    v-model="basicModal"
    title="Basic Modal"
    content="This is a basic modal with default settings."
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'
import EaModal from '@/components/ui/overlay/EaModal/index.vue'

const basicModal = ref(false)
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- Size Variants -->
      <section class="demo-section">
        <h2>Size Variants</h2>
        <div class="demo-group">
          <button @click="openSizeModal('sm')" class="btn btn--secondary">Small</button>
          <button @click="openSizeModal('md')" class="btn btn--secondary">Medium</button>
          <button @click="openSizeModal('lg')" class="btn btn--secondary">Large</button>
          <button @click="openSizeModal('xl')" class="btn btn--secondary">Extra Large</button>
        </div>



        <div class="code-example">
          <h4>Code Example:</h4>
          <pre><code>&lt;EaModal
  v-model="modalVisible"
  title="Large Modal"
  size="lg"
  content="This is a large modal."
/&gt;</code></pre>
        </div>
      </section>

      <!-- Custom Content -->
      <section class="demo-section">
        <h2>Custom Content with Slots</h2>
        <div class="demo-group">
          <button @click="openCustomModal" class="btn btn--primary">
            Open Custom Modal
          </button>
        </div>



        <div class="code-example">
          <h4>Code Example:</h4>
          <pre><code>&lt;EaModal v-model="customModal" size="lg"&gt;
  &lt;template #header&gt;
    &lt;div class="custom-header"&gt;
      &lt;h3&gt;🎉 Custom Header&lt;/h3&gt;
      &lt;span class="badge"&gt;New&lt;/span&gt;
    &lt;/div&gt;
  &lt;/template&gt;

  &lt;div class="custom-content"&gt;
    &lt;!-- Your custom content here --&gt;
  &lt;/div&gt;

  &lt;template #footer&gt;
    &lt;button @click="handleSave"&gt;Save&lt;/button&gt;
  &lt;/template&gt;
&lt;/EaModal&gt;</code></pre>
        </div>
      </section>

      <!-- Configuration Options -->
      <section class="demo-section">
        <h2>Configuration Options</h2>
        <div class="demo-group">
          <button @click="openConfigModal" class="btn btn--primary">
            Open Configured Modal
          </button>
        </div>



        <div class="code-example">
          <h4>Code Example:</h4>
          <pre><code>&lt;EaModal
  v-model="configModal"
  title="Configured Modal"
  :closable="false"
  :mask-closable="false"
  :show-footer="true"
  content="This modal cannot be closed by clicking outside."
  @confirm="handleConfigConfirm"
/&gt;</code></pre>
        </div>
      </section>

            <!-- Lifecycle Methods -->
      <section class="demo-section">
        <h2>Lifecycle Methods</h2>
        <div class="demo-group">
          <button @click="openLifecycleModal" class="btn btn--primary">
            Open with Lifecycle Events
          </button>
          <button @click="clearLogs" class="btn btn--secondary">
            Clear Logs
          </button>
        </div>



        <div class="logs-container">
          <h4>Event Logs:</h4>
          <div class="logs">
            <div v-for="(log, index) in eventLogs" :key="index" class="log-item">
              <span class="log-time">{{ log.time }}</span>
              <span class="log-message">{{ log.message }}</span>
            </div>
            <div v-if="eventLogs.length === 0" class="log-empty">
              No events logged yet. Open the modal to see lifecycle events.
            </div>
          </div>
        </div>

        <div class="code-example">
          <h4>Code Example:</h4>
          <pre><code>&lt;EaModal
  v-model="modalVisible"
  title="Lifecycle Modal"
  :on-before-open="handleBeforeOpen"
  :on-open="handleOpen"
  :on-before-close="handleBeforeClose"
  :on-close="handleClose"
  @before-open="onBeforeOpenEvent"
  @open="onOpenEvent"
  @close="onCloseEvent"
/&gt;

&lt;script setup&gt;
const handleBeforeOpen = () => {
  console.log('Modal is about to open')
}

const handleOpen = () => {
  console.log('Modal has opened')
}

const handleBeforeClose = () => {
  console.log('Modal is about to close')
}

const handleClose = () => {
  console.log('Modal has closed')
}
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- Programmatic Control -->
      <section class="demo-section">
        <h2>Programmatic Control with useModal</h2>
        <div class="demo-group">
          <button @click="openProgrammaticModal" class="btn btn--primary">
            Open via useModal
          </button>
          <button @click="openConfirmModal" class="btn btn--secondary">
            Confirm Modal
          </button>
          <button @click="openAlertModal" class="btn btn--secondary">
            Alert Modal
          </button>
        </div>

                <!-- Single global modal for all operations -->
        <EaModal />

        <div class="code-example">
          <h4>Code Example:</h4>
          <pre><code>&lt;script setup&gt;
import { useModal } from '@/components/ui/overlay/EaModal/useModal'

const { openModal, showConfirmModal, showAlertModal } = useModal()

const openProgrammaticModal = () => {
  openModal({
    title: 'Programmatic Modal',
    content: 'This modal was opened programmatically.',
    size: 'md',
    onOpen: () => console.log('Modal opened!'),
    onClose: () => console.log('Modal closed!')
  })
}

const openConfirmModal = () => {
  showConfirmModal(
    'Confirm Action',
    'Are you sure you want to proceed?',
    () => console.log('Confirmed!'),
    () => console.log('Cancelled!')
  )
}
&lt;/script&gt;</code></pre>
        </div>
      </section>

      <!-- Props Documentation -->
      <section class="demo-section">
        <h2>Props Documentation</h2>
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
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Controls the visibility of the modal</td>
              </tr>
              <tr>
                <td><code>title</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Modal title text</td>
              </tr>
              <tr>
                <td><code>content</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Modal content text</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'sm' | 'md' | 'lg' | 'xl'</td>
                <td><code>'md'</code></td>
                <td>Size of the modal</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Whether to show the close button</td>
              </tr>
              <tr>
                <td><code>maskClosable</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Whether clicking the mask closes the modal</td>
              </tr>
              <tr>
                <td><code>showHeader</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Whether to show the header section</td>
              </tr>
              <tr>
                <td><code>showFooter</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Whether to show the footer section</td>
              </tr>
              <tr>
                <td><code>onOpen</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called when modal opens</td>
              </tr>
              <tr>
                <td><code>onClose</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called when modal closes</td>
              </tr>
              <tr>
                <td><code>onBeforeOpen</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called before modal opens</td>
              </tr>
              <tr>
                <td><code>onBeforeClose</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called before modal closes</td>
              </tr>
              <tr>
                <td><code>onAfterOpen</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called after modal opens</td>
              </tr>
              <tr>
                <td><code>onAfterClose</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called after modal closes</td>
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
import EaModal from '@/components/ui/overlay/EaModal/index.vue'
import { useModal } from '@/components/ui/overlay/EaModal/useModal'

// Basic modal
const basicModal = ref(false)

// Size variants modal
const sizeModal = reactive({
  show: false,
  size: 'md' as 'sm' | 'md' | 'lg' | 'xl'
})

// Custom content modal
const customModal = ref(false)
const exampleInput = ref('')

// Configuration modal
const configModal = ref(false)

// Lifecycle modal
const lifecycleModal = ref(false)

// Event logging
interface LogEntry {
  time: string
  message: string
}

const eventLogs = ref<LogEntry[]>([])

// useModal composable
const { openModal, showConfirmModal, showAlertModal } = useModal()

// Methods
const openBasicModal = () => {
  openModal({
    title: 'Basic Modal',
    content: 'This is a basic modal with default settings.',
    size: 'md'
  })
}

const openSizeModal = (size: 'sm' | 'md' | 'lg' | 'xl') => {
  openModal({
    title: `${size.toUpperCase()} Modal`,
    content: `This is a ${size} sized modal.`,
    size: size
  })
}

const openCustomModal = () => {
  openModal({
    title: '🎉 Custom Header',
    content: `Custom Modal Content

You can use slots to customize the modal content completely.

✅ Custom headers
✅ Rich content
✅ Custom footers
✅ Any Vue components

This is a safe text-only approach without HTML injection risks.`,
    size: 'lg'
  })
}

const openConfigModal = () => {
  openModal({
    title: 'Configured Modal',
    content: 'This modal cannot be closed by clicking outside or the X button.',
    size: 'md',
    closable: false,
    maskClosable: false
  })
}

const openLifecycleModal = () => {
  openModal({
    title: 'Lifecycle Modal',
    content: 'This modal demonstrates lifecycle events. Check the logs below!',
    size: 'md',
    onBeforeOpen: handleBeforeOpen,
    onOpen: handleOpen,
    onBeforeClose: handleBeforeClose,
    onClose: handleClose,
    onAfterOpen: handleAfterOpen,
    onAfterClose: handleAfterClose
  })
}

// Lifecycle event handlers
const logEvent = (message: string) => {
  const now = new Date()
  const time = now.toLocaleTimeString()
  eventLogs.value.push({ time, message })
}

const clearLogs = () => {
  eventLogs.value = []
}

// Lifecycle callback methods
const handleBeforeOpen = () => {
  logEvent('Callback: before-open')
}

const handleOpen = () => {
  logEvent('Callback: open')
}

const handleBeforeClose = () => {
  logEvent('Callback: before-close')
}

const handleClose = () => {
  logEvent('Callback: close')
}

const handleAfterOpen = () => {
  logEvent('Callback: after-open')
}

const handleAfterClose = () => {
  logEvent('Callback: after-close')
}

const openProgrammaticModal = () => {
  openModal({
    title: 'Programmatic Modal',
    content: 'This modal was opened programmatically.',
    size: 'md',
    onOpen: () => console.log('Modal opened!'),
    onClose: () => console.log('Modal closed!')
  })
}

const openConfirmModal = () => {
  showConfirmModal(
    'Confirm Action',
    'Are you sure you want to proceed?',
    () => console.log('Confirmed!'),
    () => console.log('Cancelled!')
  )
}

const openAlertModal = () => {
  showAlertModal(
    'Alert',
    'This is an alert message!',
    () => console.log('Alert acknowledged!')
  )
}
</script>

<style scoped lang="scss">
.modal-demo {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-container {
  h1 {
    font-size: 2.5rem;
    color: #1f2937;
    margin-bottom: 1rem;
    text-align: center;
  }

  .demo-description {
    font-size: 1.1rem;
    color: #6b7280;
    text-align: center;
    margin-bottom: 3rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
}

.demo-section {
  margin-bottom: 4rem;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 1.8rem;
    color: #1f2937;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid #3b82f6;
    padding-bottom: 0.5rem;
  }
}

.demo-group {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.code-example {
  background: #1f2937;
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 2rem;

  h4 {
    color: #f9fafb;
    margin-bottom: 1rem;
    font-size: 1rem;
  }

  pre {
    margin: 0;
    overflow-x: auto;

    code {
      color: #e5e7eb;
      font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
      font-size: 0.9rem;
      line-height: 1.5;
      white-space: pre;
    }
  }
}

// Custom modal content styles
.custom-header {
  display: flex;
  align-items: center;
  gap: 12px;

  h3 {
    margin: 0;
    color: #1f2937;
  }

  .badge {
    background: #3b82f6;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
  }
}

.custom-content {
  h4 {
    color: #1f2937;
    margin-bottom: 1rem;
  }

  p {
    color: #6b7280;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  ul {
    margin-bottom: 2rem;

    li {
      color: #374151;
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }
  }
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #374151;
  }

  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 1rem;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
  }
}

.custom-footer {
  display: flex;
  gap: 12px;
}

// Logs container styles
.logs-container {
  margin-top: 2rem;

  h4 {
    color: #1f2937;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
}

.logs {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.875rem;
}

.log-item {
  display: flex;
  gap: 12px;
  padding: 4px 0;
  border-bottom: 1px solid #e9ecef;

  &:last-child {
    border-bottom: none;
  }
}

.log-time {
  color: #6c757d;
  font-weight: 500;
  min-width: 80px;
}

.log-message {
  color: #212529;
  flex: 1;
}

.log-empty {
  color: #6c757d;
  font-style: italic;
  text-align: center;
  padding: 1rem;
}

// Props documentation table
.props-table {
  overflow-x: auto;
  margin-top: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    th, td {
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }

    th {
      background: #f3f4f6;
      font-weight: 600;
      color: #374151;
    }

    td {
      color: #6b7280;

      code {
        background: #f3f4f6;
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Fira Code', monospace;
        font-size: 0.875rem;
        color: #374151;
      }
    }

    tr:last-child {
      th, td {
        border-bottom: none;
      }
    }
  }
}

// Button styles
.btn {
  padding: 10px 20px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &--primary {
    background-color: #3b82f6;
    color: white;

    &:hover {
      background-color: #2563eb;
    }

    &:focus {
      outline: 2px solid #3b82f6;
      outline-offset: 2px;
    }
  }

  &--secondary {
    background-color: #f3f4f6;
    color: #374151;
    border-color: #d1d5db;

    &:hover {
      background-color: #e5e7eb;
    }

    &:focus {
      outline: 2px solid #6b7280;
      outline-offset: 2px;
    }
  }
}

// Responsive design
@media (max-width: 768px) {
  .modal-demo {
    padding: 20px 16px;
  }

  .demo-section {
    padding: 1.5rem;
  }

  .demo-group {
    flex-direction: column;
    align-items: flex-start;
  }

  .btn {
    width: 100%;
  }

  .props-table {
    font-size: 0.875rem;
  }
}
</style>
