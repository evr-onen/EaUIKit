<template>
  <div class="file-management">
    <div class="file-management__header">
      <h3 class="file-management__title">{{ title }}</h3>
    </div>

    <div
      class="file-management__dropzone"
      :class="{
        'file-management__dropzone--active': isDragging,
        'file-management__dropzone--error': dragError
      }"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
      v-if="files.length === 0"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-gray-400 mb-3" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l4.5 4.5a.75.75 0 01-1.06 1.06l-3.22-3.22V16.5a.75.75 0 01-1.5 0V4.81L8.03 8.03a.75.75 0 01-1.06-1.06l4.5-4.5zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
      </svg>
      <p class="text-gray-800 font-medium">Drag and drop files here or</p>
      <button
        class="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md"
        @click="fileInput.click()"
      >
        Select From Your Computer
      </button>
      <p class="file-management__message" v-if="dragError">Only allowed file types: {{ allowedFileTypesDisplay }}</p>
    </div>

    <div class="file-management__file-list" v-else>
      <FileItem
        v-for="file in files"
        :key="file.id"
        :file="file"
        @toggle-select="toggleSelection"
        @remove="removeFile"
        @select="handleFileSelect"
      />
      <!-- &:hover, &--active {
      @apply bg-gray-50 border-blue-400;
    } -->
      <div
        class="flex justify-center items-center file-management__file hover:bg-gray-50 hover:border-blue-400 active:!bg-gray-500 !active:border-blue-400"
        @click="fileInput.click()"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
      >
        <EaIcons name="plus" class="text-5xl text-gray-500" />
      </div>
    </div>

    <div class="file-management__footer" v-if="files.length > 0">
      <div class="file-management__footer-info">
        {{ files.length }} file{{ files.length > 1 ? 's' : '' }} | Total size: {{ totalSizeFormatted }}
      </div>
      <div class="file-management__actions">
        <button
          class="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
          @click="() => selectAll()"
          >
          Select All
        </button>
        <button
          v-if="selectedFiles.length > 0"
          class="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm ml-2"
          @click="clearSelection"
        >
          Clear Selection
        </button>
        <button
          v-if="selectedFiles.length > 0"
          class="px-2 py-1 bg-red-500 text-white rounded text-sm"
          @click="removeSelected"
        >
          Remove Selected Files ({{ selectedFiles.length }})
        </button>
      </div>
    </div>

    <input
      ref="fileInputRef"
      type="file"
      multiple
      class="hidden"
      :accept="allowedFileTypes.join(',')"
      @change="handleFileChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useFileManagement } from './useFileManagement';
import type { FileData } from './useFileManagement';
import FileItem from './FileItem.vue';
import EaIcons from '../EaIcons.vue';

const props = withDefaults(defineProps<{
  modelValue?: FileData[]
  title?: string
  allowedFileTypes?: string[]
  maxFileSize?: number // in MB
  multiple?: boolean
}>(), {
  modelValue: () => [],
  title: 'Dosya Yönetimi',
  allowedFileTypes: () => ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'],
  maxFileSize: 10,
  multiple: true
});

const emits = defineEmits<{
  'update:modelValue': [files: FileData[]]
  'files-added': [files: FileData[]]
  'file-removed': [file: FileData]
  'error': [message: string]
}>();

const {
  files,
  selectedFiles,
  addFiles,
  removeFile,
  selectFile,
  toggleSelection,
  selectAll,
  clearSelection,
  removeSelected,
  formatFileSize
} = useFileManagement();

const fileInputRef = ref<HTMLInputElement | null>(null);
const fileInput = computed(() => fileInputRef.value!);
const isDragging = ref(false);
const dragError = ref(false);

const totalSize = computed(() => {
  return files.value.reduce((total, file) => total + file.size, 0);
});

const totalSizeFormatted = computed(() => {
  return formatFileSize(totalSize.value);
});

const allowedFileTypesDisplay = computed(() => {
  return props.allowedFileTypes
    .map(type => type.startsWith('.') ? type.substring(1).toUpperCase() : type.toUpperCase())
    .join(', ');
});

const handleDragOver = (event: DragEvent) => {
  isDragging.value = true;
  dragError.value = false;

  // Check if all files are allowed
  if (event.dataTransfer?.items) {
    for (let i = 0; i < event.dataTransfer.items.length; i++) {
      const item = event.dataTransfer.items[i];
      if (!isFileTypeAllowed(item.type)) {
        dragError.value = true;
        break;
      }
    }
  }
};

const handleDragLeave = () => {
  isDragging.value = false;
  dragError.value = false;
};

const handleDrop = (event: DragEvent) => {
  isDragging.value = false;
  dragError.value = false;

  if (event.dataTransfer?.files) {
    processFiles(Array.from(event.dataTransfer.files));
  }
};

const handleFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    processFiles(Array.from(target.files));
    // Clear the file input so the same file can be selected again
    target.value = '';
  }
};

const handleFileSelect = (id: string) => {
  // Toggle selection if already selected, otherwise select only this file
  const file = files.value.find(f => f.id === id);
  if (file) {
    if (file.isSelected) {
      toggleSelection(id);
    } else {
      // If not holding shift, clear selection first
      if (!event || !(event as KeyboardEvent).shiftKey) {
        clearSelection();
      }
      selectFile(id);
    }
  }
};

const isFileTypeAllowed = (fileType: string, fileName?: string): boolean => {
  // Eğer MIME tipi varsa
  if (fileType) {
    // Bilinen MIME tiplerini uzantılara eşleştir
    const mimeToExt: Record<string, string[]> = {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
      'application/vnd.ms-powerpoint': ['.ppt'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    };

    // MIME tipine karşılık gelen uzantılar
    const extensions = mimeToExt[fileType];
    if (extensions) {
      return extensions.some(ext => props.allowedFileTypes.includes(ext));
    }
  }

  // Dosya adını kontrol et (MIME tipi yoksa veya tanımlanmamışsa)
  if (fileName) {
    return props.allowedFileTypes.some(ext => fileName.toLowerCase().endsWith(ext));
  }

  return false;
};

const isFileSizeAllowed = (fileSize: number): boolean => {
  return fileSize <= props.maxFileSize * 1024 * 1024; // Convert MB to bytes
};

const processFiles = (newFiles: File[]) => {
  // Filter for allowed types and sizes
  const validFiles = newFiles.filter(file => {
    if (!isFileTypeAllowed(file.type, file.name)) {
      emits('error', `Dosya türü kabul edilmiyor: ${file.name}`);
      return false;
    }

    if (!isFileSizeAllowed(file.size)) {
      emits('error', `Dosya boyutu çok büyük: ${formatFileSize(file.size)}`);
      return false;
    }

    return true;
  });

  if (!props.multiple && files.value.length + validFiles.length > 1) {
    // If multiple is false, only use the last valid file
    const lastFile = validFiles[validFiles.length - 1];
    if (lastFile) {
      // Remove existing files
      while (files.value.length > 0) {
        removeFile(files.value[0].id);
      }
      const addedFiles = addFiles([lastFile]);
      emits('files-added', addedFiles);
    }
  } else {
    // Add all valid files
    const addedFiles = addFiles(validFiles);
    emits('files-added', addedFiles);
  }

  // Update model value
  emits('update:modelValue', [...files.value]);
};

// Initialize with provided model value if any
onMounted(() => {
  if (props.modelValue && props.modelValue.length > 0) {
    // We only use the IDs from the model as our files are managed internally
    files.value = [...props.modelValue];
  }
});
</script>

<style scoped lang="scss">
@import './file-management.scss';
</style>