<template>
  <div class="dialog-demo">
    <div class="container">
      <!-- Header Section -->
      <div class="demo-header">
      <h1 class="demo-title">EaDialog Component</h1>
      <p class="demo-subtitle">
        A flexible and customizable dialog component for Vue 3 applications.
        Supports both programmatic usage via composable and direct component usage.
      </p>
    </div>

    <!-- Programmatic Usage Section -->
    <div class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Programmatic Usage</h2>
        <p class="section-description">
          Use the <code>useDialog</code> composable to show dialogs programmatically with async/await support.
        </p>
      </div>

      <div class="examples-grid">
        <!-- Basic Confirm Example -->
        <div class="example-card">
          <div class="example-header">
            <h3 class="example-title">Basic Confirmation</h3>
            <p class="example-description">Simple yes/no confirmation dialog</p>
          </div>

          <div class="example-demo">
            <button class="demo-btn demo-btn-primary" @click="showBasicConfirm">
              Show Basic Confirm
            </button>
          </div>
        </div>

        <!-- Delete Confirmation Example -->
        <div class="example-card">
          <div class="example-header">
            <h3 class="example-title">Delete Confirmation</h3>
            <p class="example-description">Destructive action confirmation with custom styling</p>
          </div>

          <div class="example-demo">
            <button class="demo-btn demo-btn-danger" @click="showDeleteConfirm">
              Show Delete Confirm
            </button>
          </div>
        </div>

        <!-- Warning Dialog Example -->
        <div class="example-card">
          <div class="example-header">
            <h3 class="example-title">Warning Dialog</h3>
            <p class="example-description">Warning message with acknowledgment</p>
          </div>

          <div class="example-demo">
            <button class="demo-btn demo-btn-warning" @click="showWarning">
              Show Warning
            </button>
          </div>
        </div>

        <!-- Custom Dialog Example -->
        <div class="example-card">
          <div class="example-header">
            <h3 class="example-title">Custom Dialog</h3>
            <p class="example-description">Fully customizable dialog with custom texts and persistence</p>
          </div>

          <div class="example-demo">
            <button class="demo-btn demo-btn-info" @click="showCustomDialog">
              Show Custom Dialog
            </button>
          </div>
        </div>
      </div>

      <!-- Combined Code Examples -->
      <div class="combined-examples">
        <CodeBlock :code="allExamplesCode" title="All Examples Code" language="javascript" />
      </div>
    </div>

    <!-- Component Usage Section -->
    <div class="demo-section">
      <div class="section-header">
        <h2 class="section-title">Component Usage</h2>
        <p class="section-description">
          Use the <code>EaDialog</code> component directly in your templates with v-model.
        </p>
      </div>

      <div class="example-card">
        <div class="example-header">
          <h3 class="example-title">Template Dialog</h3>
          <p class="example-description">Dialog component used directly in template</p>
        </div>

        <div class="example-demo">
          <button class="demo-btn demo-btn-secondary" @click="toggleComponentDialog">
            Toggle Component Dialog
          </button>
        </div>

        <CodeBlock :code="componentTemplateCode" title="Template Code" language="html" />
        <CodeBlock :code="componentScriptCode" title="Script Code" language="javascript" />
      </div>
    </div>

    <!-- API Documentation Section -->
    <div class="demo-section">
      <div class="section-header">
        <h2 class="section-title">API Documentation</h2>
      </div>

      <div class="api-grid">
        <div class="api-card">
          <h3 class="api-title">Component Props</h3>
          <div class="api-table">
            <div class="api-row api-header-row">
              <div class="api-cell">Prop</div>
              <div class="api-cell">Type</div>
              <div class="api-cell">Default</div>
              <div class="api-cell">Description</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>modelValue</code></div>
              <div class="api-cell">boolean</div>
              <div class="api-cell">false</div>
              <div class="api-cell">Controls dialog visibility</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>title</code></div>
              <div class="api-cell">string</div>
              <div class="api-cell">''</div>
              <div class="api-cell">Dialog title</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>message</code></div>
              <div class="api-cell">string</div>
              <div class="api-cell">-</div>
              <div class="api-cell">Dialog message (required)</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>confirmText</code></div>
              <div class="api-cell">string</div>
              <div class="api-cell">'OK'</div>
              <div class="api-cell">Confirm button text</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>cancelText</code></div>
              <div class="api-cell">string</div>
              <div class="api-cell">'Cancel'</div>
              <div class="api-cell">Cancel button text</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>persistent</code></div>
              <div class="api-cell">boolean</div>
              <div class="api-cell">false</div>
              <div class="api-cell">Prevent closing on overlay click</div>
            </div>
          </div>
        </div>

        <div class="api-card">
          <h3 class="api-title">useDialog Methods</h3>
          <div class="api-table">
            <div class="api-row api-header-row">
              <div class="api-cell">Method</div>
              <div class="api-cell">Parameters</div>
              <div class="api-cell">Description</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>confirm()</code></div>
              <div class="api-cell">message, title?</div>
              <div class="api-cell">Show basic confirmation dialog</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>deleteConfirm()</code></div>
              <div class="api-cell">message?</div>
              <div class="api-cell">Show delete confirmation dialog</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>warning()</code></div>
              <div class="api-cell">message, title?</div>
              <div class="api-cell">Show warning dialog</div>
            </div>
            <div class="api-row">
              <div class="api-cell"><code>show()</code></div>
              <div class="api-cell">options</div>
              <div class="api-cell">Show custom dialog with full options</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Result Display -->
    <div class="demo-section" v-if="lastResult">
      <div class="section-header">
        <h2 class="section-title">Last Dialog Result</h2>
      </div>
      <div class="result-card" :class="lastResult.type">
        <div class="result-icon">
          <component :is="getResultIcon(lastResult.type)" />
        </div>
        <div class="result-content">
          <h4 class="result-title">{{ lastResult.title }}</h4>
          <p class="result-message">{{ lastResult.message }}</p>
        </div>
      </div>
    </div>

    <!-- Component Dialog -->
    <EaDialog
      v-model="showComponentDialog"
      title="Component Dialog Example"
      message="This dialog is being used directly as a component in the template. You can control its visibility with v-model and handle events with @confirm and @cancel."
      confirm-text="Awesome!"
      cancel-text="Close"
      @confirm="handleComponentConfirm"
      @cancel="handleComponentCancel"
    />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EaDialog from '@/components/ui/overlay/EaDialog/EaDialog.vue';
import { useDialog } from '@/components/ui/overlay/EaDialog/useDialog';
import CodeBlock from '@/components/general/CodeBlock.vue';

const { confirm, deleteConfirm, warning, show } = useDialog();

const showComponentDialog = ref(false);
const lastResult = ref<{
  type: string;
  title: string;
  message: string;
} | null>(null);

// Combined code examples
const allExamplesCode = `const { confirm, deleteConfirm, warning, show } = useDialog();

// Basic Confirmation
const handleBasicConfirm = async () => {
  const result = await confirm('Are you sure you want to proceed?');

  if (result.confirmed) {
    console.log('User confirmed');
    // Handle confirmation
  } else {
    console.log('User cancelled');
    // Handle cancellation
  }
};

// Delete Confirmation
const handleDelete = async () => {
  const result = await deleteConfirm('This item will be permanently deleted.');

  if (result.confirmed) {
    console.log('Deleting item...');
    // Perform delete operation
  }
};

// Warning Dialog
const showWarning = async () => {
  const result = await warning(
    'This action may have side effects.',
    'Warning'
  );

  if (result.confirmed) {
    console.log('User acknowledged warning');
    // Continue with action
  }
};

// Custom Dialog
const showCustom = async () => {
  const result = await show({
    title: 'Custom Title',
    message: 'Your custom message here',
    confirmText: 'Yes, Continue',
    cancelText: 'No, Go Back',
    persistent: true // Won't close on overlay click
  });

  if (result.confirmed) {
    // Handle custom confirmation
  }
};`;

const componentTemplateCode = `<template>
  <div>
    <button @click="showDialog = true">Show Dialog</button>

    <EaDialog
      v-model="showDialog"
      title="Dialog Title"
      message="Your dialog message"
      @confirm="handleConfirm"
      @cancel="handleCancel"
    />
  </div>
</template>`;

const componentScriptCode = `<script setup>
import { ref } from 'vue';
import EaDialog from '@/components/ui/overlay/EaDialog/EaDialog.vue';

const showDialog = ref(false);

const handleConfirm = () => {
  console.log('Dialog confirmed');
};

const handleCancel = () => {
  console.log('Dialog cancelled');
};
<\/script>`;

// Dialog handlers
const showBasicConfirm = async () => {
  const result = await confirm('Are you sure you want to perform this action?');

  lastResult.value = {
    type: result.confirmed ? 'success' : 'cancel',
    title: 'Basic Confirmation',
    message: result.confirmed ? 'Action was confirmed' : 'Action was cancelled'
  };
};

const showDeleteConfirm = async () => {
  const result = await deleteConfirm('This item will be permanently deleted and cannot be recovered.');

  lastResult.value = {
    type: result.confirmed ? 'danger' : 'cancel',
    title: 'Delete Confirmation',
    message: result.confirmed ? 'Item has been deleted' : 'Delete operation was cancelled'
  };
};

const showWarning = async () => {
  const result = await warning('Some features may not work properly due to system maintenance.');

  lastResult.value = {
    type: result.confirmed ? 'warning' : 'cancel',
    title: 'Warning Dialog',
    message: result.confirmed ? 'Warning acknowledged' : 'Warning was dismissed'
  };
};

const showCustomDialog = async () => {
  const result = await show({
    title: 'Custom Dialog Example',
    message: 'This is a fully customizable dialog. You can set custom titles, messages, button texts, and even make it persistent.',
    confirmText: 'That\'s Great!',
    cancelText: 'Go Back',
    persistent: true
  });

  lastResult.value = {
    type: result.confirmed ? 'info' : 'cancel',
    title: 'Custom Dialog',
    message: result.confirmed ? 'Thanks for the feedback!' : 'User chose to go back'
  };
};

const toggleComponentDialog = () => {
  showComponentDialog.value = !showComponentDialog.value;
};

const handleComponentConfirm = () => {
  lastResult.value = {
    type: 'success',
    title: 'Component Dialog',
    message: 'Component dialog was confirmed'
  };
};

const handleComponentCancel = () => {
  lastResult.value = {
    type: 'cancel',
    title: 'Component Dialog',
    message: 'Component dialog was cancelled'
  };
};



const getResultIcon = (type: string) => {
  const icons = {
    success: 'CheckIcon',
    danger: 'XMarkIcon',
    warning: 'ExclamationTriangleIcon',
    info: 'InformationCircleIcon',
    cancel: 'XMarkIcon'
  };
  return icons[type as keyof typeof icons] || 'InformationCircleIcon';
};
</script>

<style scoped>
.dialog-demo {
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.demo-header {
  text-align: center;
  margin-bottom: 4rem;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  letter-spacing: -0.025em;
}

.demo-subtitle {
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

/* Sections */
.demo-section {
  margin-bottom: 4rem;
}

.section-header {
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
}

.section-description code {
  background: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: #1f2937;
}

/* Examples Grid */
.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.combined-examples {
  margin-top: 2rem;
}

.example-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.example-card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transform: translateY(-1px);
}

.example-header {
  margin-bottom: 1.5rem;
}

.example-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.example-description {
  color: #6b7280;
  font-size: 0.875rem;
}

.example-demo {
  margin-bottom: 1.5rem;
}

/* Buttons */
.demo-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-btn-primary {
  background: #3b82f6;
  color: white;
}

.demo-btn-primary:hover {
  background: #2563eb;
}

.demo-btn-danger {
  background: #ef4444;
  color: white;
}

.demo-btn-danger:hover {
  background: #dc2626;
}

.demo-btn-warning {
  background: #f59e0b;
  color: white;
}

.demo-btn-warning:hover {
  background: #d97706;
}

.demo-btn-info {
  background: #06b6d4;
  color: white;
}

.demo-btn-info:hover {
  background: #0891b2;
}

.demo-btn-secondary {
  background: #6b7280;
  color: white;
}

.demo-btn-secondary:hover {
  background: #4b5563;
}



/* API Documentation */
.api-grid {
  display: grid;
  gap: 2rem;
}

.api-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

.api-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.api-table {
  display: grid;
  gap: 0.5rem;
}

.api-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  gap: 1rem;
  padding: 0.75rem;
  border-radius: 0.5rem;
}

.api-header-row {
  background: #f9fafb;
  font-weight: 600;
  color: #374151;
}

.api-row:not(.api-header-row) {
  border: 1px solid #f3f4f6;
}

.api-cell {
  font-size: 0.875rem;
}

.api-cell code {
  background: #f3f4f6;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  color: #1f2937;
}

/* Result Display */
.result-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 1rem;
  border-left: 4px solid;
}

.result-card.success {
  background: #ecfdf5;
  border-color: #10b981;
}

.result-card.danger {
  background: #fef2f2;
  border-color: #ef4444;
}

.result-card.warning {
  background: #fffbeb;
  border-color: #f59e0b;
}

.result-card.info {
  background: #eff6ff;
  border-color: #3b82f6;
}

.result-card.cancel {
  background: #f9fafb;
  border-color: #6b7280;
}

.result-icon {
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
}

.result-title {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #1f2937;
}

.result-message {
  color: #6b7280;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .dialog-demo {
    padding: 1rem;
  }

  .demo-title {
    font-size: 2rem;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }

  .api-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .api-cell {
    padding: 0.25rem 0;
  }
}
</style>
