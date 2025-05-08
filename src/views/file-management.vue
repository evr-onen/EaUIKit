<template>
  <div>
    <FileManagement
      title="File Management x"
      :allowedFileTypes="['pdf','doc','docx','xls','xlsx','ppt','pptx', 'png']"
      :maxFileSize="4"
      :multiple="true"
      @error="handleError"
      v-model="files"
      />
  </div>
</template>

<script setup lang="ts">
import FileManagement from '@/components/ui/file-management/index.vue';
import type { FileData } from '@/components/ui/file-management/useFileManagement';
import { ref, watch } from 'vue';

const files = ref<FileData[]>([]);

watch(files, (newVal) => {
  console.log(newVal);
}, { deep: true });
const handleError = (error: string) => {
  console.log(error);
};
</script>

<style scoped>

</style>