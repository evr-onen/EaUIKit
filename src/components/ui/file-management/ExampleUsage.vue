<!-- <template>
  <div class="container mx-auto p-4 max-w-5xl">
    <h1 class="text-2xl font-bold mb-6">Dosya Yönetim Paneli Örneği</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 class="text-lg font-semibold mb-4">Tek Dosya Yükleme</h2>
        <FileManagement
          v-model="singleFile"
          title="Profil Resmi"
          :multiple="false"
          :allowedFileTypes="['image/*']"
          @files-added="handleFilesAdded"
          @error="handleError"
        />
      </div>

      <div>
        <h2 class="text-lg font-semibold mb-4">Çoklu Dosya Yükleme</h2>
        <FileManagement
          v-model="multipleFiles"
          title="Belgeler"
          :allowedFileTypes="['image/*', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']"
          @files-added="handleFilesAdded"
          @error="handleError"
        />
      </div>
    </div>

    <div class="mt-8" v-if="errorMessage">
      <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>{{ errorMessage }}</p>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="text-lg font-semibold mb-4">Seçilen Dosyalar</h2>
      <pre class="bg-gray-100 p-4 rounded-lg overflow-auto max-h-80">{{ selectedFilesJson }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import FileManagement from './index.vue';
import { FileData } from './useFileManagement';

const singleFile = ref<FileData[]>([]);
const multipleFiles = ref<FileData[]>([]);
const errorMessage = ref<string | null>(null);

const selectedFilesJson = computed(() => {
  const result = {
    singleFile: singleFile.value.map(file => ({
      id: file.id,
      name: file.name,
      size: file.size,
      type: file.type
    })),
    multipleFiles: multipleFiles.value.map(file => ({
      id: file.id,
      name: file.name,
      size: file.size,
      type: file.type
    }))
  };

  return JSON.stringify(result, null, 2);
});

const handleFilesAdded = (files: FileData[]) => {
  console.log('Dosyalar eklendi:', files);
  errorMessage.value = null;
};

const handleError = (message: string) => {
  errorMessage.value = message;
  // 3 saniye sonra hata mesajını temizle
  setTimeout(() => {
    errorMessage.value = null;
  }, 3000);
};
</script> -->
