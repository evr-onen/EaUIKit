<template>
  <Teleport to="body">
    <Transition name="dialog" appear>
      <div
        v-if="isVisible"
        class="dialog-overlay"
        @click="handleOverlayClick"
      >
        <div class="dialog-container" @click.stop>
          <div class="dialog-header" v-if="title">
            <h3 class="dialog-title">{{ title }}</h3>
          </div>

          <div class="dialog-content">
            <p class="dialog-message">{{ message }}</p>
          </div>

          <div class="dialog-actions">
            <button
              class="dialog-button dialog-button-cancel"
              @click="handleCancel"
            >
              {{ cancelText }}
            </button>
            <button
              class="dialog-button dialog-button-confirm"
              @click="handleConfirm"
            >
              {{ confirmText }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

interface Props {
  modelValue?: boolean;
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  persistent?: boolean; // overlay click ile kapanmasın
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  title: '',
  confirmText: 'OK',
  cancelText: 'Cancel',
  persistent: false
});

const emit = defineEmits<Emits>();

const isVisible = ref(props.modelValue);

watch(() => props.modelValue, (newValue) => {
  isVisible.value = newValue;
});

const handleOverlayClick = () => {
  if (!props.persistent) {
    handleCancel();
  }
};

const handleConfirm = () => {
  emit('confirm');
  emit('update:modelValue', false);
  isVisible.value = false;
};

const handleCancel = () => {
  emit('cancel');
  emit('update:modelValue', false);
  isVisible.value = false;
};
</script>

<style scoped lang="scss">
@use './EaDialog.scss';
</style>
