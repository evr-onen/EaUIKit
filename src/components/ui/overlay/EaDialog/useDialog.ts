import { ref, createApp, h } from 'vue';
import EaDialog from './EaDialog.vue';

interface DialogOptions {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  persistent?: boolean;
}

interface DialogResult {
  confirmed: boolean;
}

// Global dialog state management
const dialogs = ref<Array<{
  id: string;
  options: DialogOptions;
  resolve: (result: DialogResult) => void;
}>>([]);

let dialogIdCounter = 0;

export function useDialog() {
  const show = (options: DialogOptions): Promise<DialogResult> => {
    return new Promise((resolve) => {
      const id = `dialog-${++dialogIdCounter}`;

      dialogs.value.push({
        id,
        options,
        resolve
      });

      // Create and mount dialog component
      createDialogInstance(id, options, resolve);
    });
  };

  const confirm = (message: string, title?: string): Promise<DialogResult> => {
    return show({
      title: title || 'Confirm',
      message,
      confirmText: 'OK',
      cancelText: 'Cancel'
    });
  };

  const deleteConfirm = (message?: string): Promise<DialogResult> => {
    return show({
      title: 'Delete Confirmation',
      message: message || 'This action cannot be undone. Are you sure you want to delete?',
      confirmText: 'Delete',
      cancelText: 'Cancel'
    });
  };

  const warning = (message: string, title?: string): Promise<DialogResult> => {
    return show({
      title: title || 'Warning',
      message,
      confirmText: 'I Understand',
      cancelText: 'Cancel'
    });
  };

  return {
    show,
    confirm,
    deleteConfirm,
    warning
  };
}

function createDialogInstance(
  id: string,
  options: DialogOptions,
  resolve: (result: DialogResult) => void
) {
  // Create container element
  const container = document.createElement('div');
  container.id = `dialog-${id}`;
  document.body.appendChild(container);

  // Create Vue app instance
  const app = createApp({
    setup() {
      const isVisible = ref(true);

      const handleConfirm = () => {
        cleanup();
        resolve({ confirmed: true });
      };

      const handleCancel = () => {
        cleanup();
        resolve({ confirmed: false });
      };

      const cleanup = () => {
        isVisible.value = false;
        // Remove from global state
        const index = dialogs.value.findIndex(d => d.id === id);
        if (index > -1) {
          dialogs.value.splice(index, 1);
        }

        // Delay unmount to allow transition
        setTimeout(() => {
          app.unmount();
          if (container.parentNode) {
            container.parentNode.removeChild(container);
          }
        }, 200);
      };

      return () => h(EaDialog, {
        modelValue: isVisible.value,
        title: options.title,
        message: options.message,
        confirmText: options.confirmText,
        cancelText: options.cancelText,
        persistent: options.persistent,
        onConfirm: handleConfirm,
        onCancel: handleCancel,
        'onUpdate:modelValue': (value: boolean) => {
          if (!value) {
            handleCancel();
          }
        }
      });
    }
  });

  app.mount(container);
}

// Global dialog helper for direct usage
export const $dialog = useDialog();
