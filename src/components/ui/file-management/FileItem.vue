<template>
  <div
    class="file-management__file"
    :class="{ 'file-management__file--selected': file.isSelected }"
    @click="onClick"
  >
    <div
      class="file-management__checkbox"
      :class="{ 'file-management__checkbox--selected': file.isSelected }"
      @click.stop="$emit('toggle-select', file.id)"
    >
    </div>

    <div class="file-management__file-preview">
      <img
        v-if="file.type.startsWith('image/') && file.url"
        :src="file.url"
        :alt="file.name"
      />
      <div v-else-if="file.type === 'application/pdf' && file.url" class="bg-red-50 w-full h-full flex items-center justify-center">
        <PdfIcon />
      </div>
      <div v-else class="w-full h-full flex items-center justify-center">
        <template v-if="fileIcon === 'file'">
          <FileIcon />
        </template>
        <template v-else-if="fileIcon === 'document'">
          <DocumentIcon />
        </template>
        <template v-else-if="fileIcon === 'video'">
          <VideoIcon />
        </template>
        <template v-else-if="fileIcon === 'audio'">
          <AudioIcon />
        </template>
        <template v-else-if="fileIcon === 'spreadsheet'">
          <SpreadsheetIcon />
        </template>
        <template v-else-if="fileIcon === 'presentation'">
          <PresentationIcon />
        </template>
      </div>
    </div>

    <div class="file-management__file-info">
      <div class="file-management__file-name" :title="file.name">{{ file.name }}</div>
      <div class="file-management__file-size">{{ formatFileSize(file.size) }}</div>
    </div>

    <div class="file-management__file-actions absolute top-0 right-0">
      <button
        class="file-management__action-button file-management__action-button--danger"
        @click.stop="$emit('remove', file.id)"
        title="Sil"
      >
        <div class=" rounded-full bg-red-500 p-1 text-white border border-white shadow-md">
          <TrashIcon class="w-4 h-4  " />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type{ FileData } from './useFileManagement';
import TrashIcon from './icons/trashIcon.vue';
import PresentationIcon from './icons/presentationIcon.vue';
import SpreadsheetIcon from './icons/spreadsheetIcon.vue';
import AudioIcon from './icons/audioIcon.vue';
import VideoIcon from './icons/videoIcon.vue';
import DocumentIcon from './icons/documentIcon.vue';
import FileIcon from './icons/fileIcon.vue';
import PdfIcon from './icons/pdfIcon.vue';

const props = defineProps<{
  file: FileData
}>();

const emits = defineEmits<{
  'toggle-select': [id: string]
  'remove': [id: string]
  'select': [id: string]
}>();

const fileIcon = computed(() => {
  if (props.file.type.startsWith('image/')) {
    return 'image';
  } else if (props.file.type === 'application/pdf') {
    return 'pdf';
  } else if (props.file.type.startsWith('video/')) {
    return 'video';
  } else if (props.file.type.startsWith('audio/')) {
    return 'audio';
  } else if (props.file.type.includes('word') || props.file.type.includes('document')) {
    return 'document';
  } else if (props.file.type.includes('excel') || props.file.type.includes('spreadsheet')) {
    return 'spreadsheet';
  } else if (props.file.type.includes('presentation') || props.file.type.includes('powerpoint')) {
    return 'presentation';
  } else {
    return 'file';
  }
});

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

const onClick = (event: MouseEvent) => {
  // Only trigger select if not clicking on actions or checkbox
  const target = event.target as HTMLElement;
  if (!target.closest('.file-management__file-actions') && !target.closest('.file-management__checkbox')) {
    emits('select', props.file.id);
  }
};
</script>
