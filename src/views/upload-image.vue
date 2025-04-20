<template>
  <div class="h-[2500px] w-full flex flex-col justify-between items-center  ">
    <div class="grid grid-cols-12 w-full" >
      <div class="col-span-4">
        <EAFileUploader label="Logo" v-model="logo" @file-size="(e:string)=>fileSize=e" @files-count="(e:number)=>fileCount=e"/>
      </div>
    </div>
    <p>see console for logo</p>
    {{ console.log(logo) }}

  </div>
</template>

<script setup lang="ts">
import EAFileUploader from '@/components/ui/inputs/EaUploadImage/EaUploadImage.vue';
import { ref } from 'vue';

interface FileData {
  base64: string;
  name: string;
  mime: string;
  size: number;
}

const logo = ref<FileData[]>([]);
const fileSize = ref<string>('');
const fileCount = ref<number>(0);
</script>

<style scoped>

</style>
