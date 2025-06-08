<template>
  <div class="dialog-demo">
        <h1 class="demo-title">Dialog Component Demo</h1>

    <div class="demo-section">
      <h2 class="section-title">Programmatic Dialog Usage</h2>
      <p class="section-description">
        You can easily open dialogs like toast using the useDialog composable.
      </p>

      <div class="button-grid">
        <button class="demo-button demo-button-primary" @click="showBasicConfirm">
          Basic Confirmation
        </button>

        <button class="demo-button demo-button-danger" @click="showDeleteConfirm">
          Delete Confirmation
        </button>

        <button class="demo-button demo-button-warning" @click="showWarning">
          Warning Message
        </button>

        <button class="demo-button demo-button-info" @click="showCustomDialog">
          Custom Dialog
        </button>
      </div>
    </div>

    <div class="demo-section">
      <h2 class="section-title">Component Usage</h2>
      <p class="section-description">
        You can also use the EaDialog component directly in templates.
      </p>

      <button class="demo-button demo-button-secondary" @click="toggleComponentDialog">
        Toggle Component Dialog
      </button>

            <EaDialog
        v-model="showComponentDialog"
        title="Component Dialog"
        message="This dialog is being used directly as a component."
        @confirm="handleComponentConfirm"
        @cancel="handleComponentCancel"
      />
    </div>

    <div class="demo-section" v-if="lastResult">
      <h2 class="section-title">Last Dialog Result</h2>
      <div class="result-box" :class="lastResult.type">
        <strong>{{ lastResult.title }}:</strong> {{ lastResult.message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EaDialog from '@/components/ui/overlay/EaDialog/EaDialog.vue';
import { useDialog } from '@/components/ui/overlay/EaDialog/useDialog';

const { confirm, deleteConfirm, warning, show } = useDialog();

const showComponentDialog = ref(false);
const lastResult = ref<{
  type: string;
  title: string;
  message: string;
} | null>(null);

const showBasicConfirm = async () => {
  const result = await confirm('Are you sure you want to perform this action?');

  if (result.confirmed) {
    // User confirmed - positive action
    console.log('User confirmed the action');

    lastResult.value = {
      type: 'success',
      title: 'Basic Confirmation',
      message: 'Action was confirmed and executed'
    };

    // Add your positive action logic here
    // Example: save data, delete item, etc.

  } else {
    // User cancelled - negative action
    console.log('User cancelled the action');

    lastResult.value = {
      type: 'cancel',
      title: 'Basic Confirmation',
      message: 'Action was cancelled by user'
    };

    // Add your cancellation logic here
    // Example: show message, reset form, etc.
  }
};

const showDeleteConfirm = async () => {
  const result = await deleteConfirm('The selected item will be permanently deleted.');

  if (result.confirmed) {
    // User confirmed deletion - perform delete action
    console.log('Deleting item...');

    lastResult.value = {
      type: 'danger',
      title: 'Delete Confirmation',
      message: 'Item has been successfully deleted'
    };

    // Add your delete logic here
    // Example: call API to delete, remove from list, etc.

  } else {
    // User cancelled deletion - no action needed
    console.log('Delete operation cancelled');

    lastResult.value = {
      type: 'cancel',
      title: 'Delete Confirmation',
      message: 'Delete operation was cancelled'
    };

    // Add cancellation logic if needed
    // Example: show cancellation message, etc.
  }
};

const showWarning = async () => {
  const result = await warning('Some features may not work properly due to system maintenance.');

  if (result.confirmed) {
    // User acknowledged warning - continue with action
    console.log('Warning acknowledged, continuing...');

    lastResult.value = {
      type: 'warning',
      title: 'Warning',
      message: 'Warning acknowledged, proceeding with action'
    };

    // Add your continue logic here
    // Example: proceed with the action despite warning

  } else {
    // User dismissed warning - stop action
    console.log('Warning dismissed, stopping action');

    lastResult.value = {
      type: 'cancel',
      title: 'Warning',
      message: 'Warning was dismissed, action stopped'
    };

    // Add your stop logic here
    // Example: return to previous state, show alternative options
  }
};

const showCustomDialog = async () => {
  const result = await show({
    title: 'Custom Message',
    message: 'This is a completely customizable dialog example. Title, message and button texts can be changed.',
    confirmText: 'Great!',
    cancelText: 'Back',
    persistent: true // Won't close when clicking overlay
  });

  if (result.confirmed) {
    // User liked the custom dialog - positive feedback
    console.log('User liked the custom dialog');

    lastResult.value = {
      type: 'info',
      title: 'Custom Dialog',
      message: 'Thanks for the positive feedback!'
    };

    // Add your positive feedback logic here
    // Example: save user preference, show next step, etc.

  } else {
    // User went back - handle navigation
    console.log('User went back from custom dialog');

    lastResult.value = {
      type: 'cancel',
      title: 'Custom Dialog',
      message: 'User decided to go back'
    };

    // Add your back navigation logic here
    // Example: navigate to previous page, reset form, etc.
  }
};

const toggleComponentDialog = () => {
  showComponentDialog.value = !showComponentDialog.value;
};

const handleComponentConfirm = () => {
  lastResult.value = {
    type: 'success',
    title: 'Component Dialog',
    message: 'Component dialog confirmed'
  };
};

const handleComponentCancel = () => {
  lastResult.value = {
    type: 'cancel',
    title: 'Component Dialog',
    message: 'Component dialog cancelled'
  };
};
</script>

<style scoped>
.dialog-demo {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: system-ui, -apple-system, sans-serif;
}

.demo-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
  margin-bottom: 3rem;
}

.demo-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
}

.section-description {
  color: #6b7280;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.demo-button {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.demo-button-primary {
  background-color: #3b82f6;
  color: white;
}

.demo-button-primary:hover {
  background-color: #2563eb;
}

.demo-button-danger {
  background-color: #ef4444;
  color: white;
}

.demo-button-danger:hover {
  background-color: #dc2626;
}

.demo-button-warning {
  background-color: #f59e0b;
  color: white;
}

.demo-button-warning:hover {
  background-color: #d97706;
}

.demo-button-info {
  background-color: #06b6d4;
  color: white;
}

.demo-button-info:hover {
  background-color: #0891b2;
}

.demo-button-secondary {
  background-color: #6b7280;
  color: white;
}

.demo-button-secondary:hover {
  background-color: #4b5563;
}

.result-box {
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid;
}

.result-box.success {
  background-color: #ecfdf5;
  border-color: #10b981;
  color: #065f46;
}

.result-box.danger {
  background-color: #fef2f2;
  border-color: #ef4444;
  color: #991b1b;
}

.result-box.warning {
  background-color: #fffbeb;
  border-color: #f59e0b;
  color: #92400e;
}

.result-box.info {
  background-color: #eff6ff;
  border-color: #3b82f6;
  color: #1e40af;
}

.result-box.cancel {
  background-color: #f3f4f6;
  border-color: #6b7280;
  color: #374151;
}
</style>
