<template>
  <div>
    <FileManagement
      title="File Management x"
      :allowedFileTypes="['pdf','doc','docx','xls','xlsx','ppt','pptx', 'png']"
      :maxFileSize="1"
      :multiple="true"/>
  </div>
</template>

<script setup lang="ts">
import FileManagement from '@/components/ui/file-management/index.vue';
</script>

<style scoped>

</style>