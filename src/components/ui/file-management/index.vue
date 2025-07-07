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
      <p v-if="dragError" class="file-management__message" > {{errorMessage}}</p>
    </div>

    <div class="file-management__file-list" v-else>
      <FileItem
        v-for="file in files"
        :key="file.id"
        :file="file"
        @toggle-select="toggleSelection"
        @remove="handleRemoveFile"
        @select="handleFileSelect"
      />
      <div
        class="file-management__file"
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
      <div class="file-management__footer-info !text-red-500 text-sm font-bold" v-if="dragError">
        {{ errorMessage }}
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
import { ref, computed, onMounted, watch } from 'vue';
import { useFileManagement } from './useFileManagement';
import type { FileData } from './useFileManagement';
import FileItem from './FileItem.vue';
import EaIcons from '../EaIcon.vue';


// Initialize
const props = withDefaults(defineProps<{
  title?: string
  allowedFileTypes?: string[]
  maxFileSize?: number // in MB
  multiple?: boolean
}>(), {
  title: '',
  allowedFileTypes: () => ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx'],
  maxFileSize: 10,
  multiple: true
});

const modelValue = defineModel<FileData[]>('modelValue', { default: () => [] });

const emits = defineEmits<{
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

// Vars
const fileInputRef = ref<HTMLInputElement | null>(null);
const fileInput = computed(() => fileInputRef.value!);
const isDragging = ref(false);
const dragError = ref(false);
const errorMessage = ref('');


// Computed Propertise
const totalSize = computed(() => {
  return files.value.reduce((total, file) => total + file.size, 0);
});

const totalSizeFormatted = computed(() => {
  return formatFileSize(totalSize.value);
});

// Handlers
const handleDragOver = (event: DragEvent) => {
  isDragging.value = true;
  dragError.value = false;
  errorMessage.value = '';

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
  if(event.dataTransfer?.files && Array.from(event.dataTransfer.files).some(file => !isFileTypeAllowed(file.type))){
    dragError.value = true;
    return false
  }
  if(event.dataTransfer?.files && Array.from(event.dataTransfer.files).some(file => !isFileSizeAllowed(file.size))){
    dragError.value = true;
    return false
  }
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
    target.value = '';
  }
};

const handleFileSelect = (id: string) => {
  const file = files.value.find(f => f.id === id);
  if (file) {
    if (file.isSelected) {
      toggleSelection(id);
    } else {
      selectFile(id);
    }
  }
};

const isFileTypeAllowed = (fileType: string): boolean => {
  if(props.allowedFileTypes.some(ext => fileType.endsWith(ext))){
    return true
  }
  errorMessage.value = `The file type is not allowed: ${fileType}`;
  return false
};

const isFileSizeAllowed = (fileSize: number): boolean => {
  if(fileSize <= props.maxFileSize * 1024 * 1024){
    return true
  }
  errorMessage.value = `The file size is too large: ${formatFileSize(fileSize)}`;
  return false
};

const processFiles = (newFiles: File[]) => {
  const validFiles = newFiles.filter(file => {
    if (!isFileTypeAllowed(file.type)) {
      emits('error', `The file type is not allowed: ${file.name}`);
      return false;
    }

    if (!isFileSizeAllowed(file.size)) {
      emits('error', `The file size is too large: ${formatFileSize(file.size)}`);
      return false;
    }
    return true;
  });

  if (!props.multiple && files.value.length + validFiles.length > 1) {
    const lastFile = validFiles[validFiles.length - 1];
    if (lastFile) {
      while (files.value.length > 0) {
        removeFile(files.value[0].id);
      }
      const addedFiles = addFiles([lastFile]);
      emits('files-added', addedFiles);
    }
  } else {
    const addedFiles = addFiles(validFiles);
    emits('files-added', addedFiles);
  }
  modelValue.value = [...files.value];
};


// Lifecycle Hooks
onMounted(() => {
  if (modelValue.value && modelValue.value.length > 0) {
    files.value = [...modelValue.value];
  }
});

watch(files, (newVal, oldVal) => {
  if(newVal.length <  oldVal.length){
    modelValue.value = [...newVal];
  }
}, { deep: true });

const handleRemoveFile = (id: string) => {
  removeFile(id);
  modelValue.value = [...files.value];
};
</script>

<style scoped lang="scss">
@use './file-management.scss';
</style>
