import { ref, computed } from 'vue';

export interface FileData {
  id: string;
  file: File | null;
  name: string;
  size: number;
  type: string;
  url: string | null;
  isSelected: boolean;
  createdAt: Date;
}

export function useFileManagement() {
  const files = ref<FileData[]>([]);
  const selectedFiles = computed(() => files.value.filter(file => file.isSelected));

  const addFiles = (newFiles: File[]) => {
    const fileEntries = newFiles.map(file => {
      const fileUrl = file.type.startsWith('image/') || file.type === 'application/pdf'
        ? URL.createObjectURL(file)
        : null;

      return {
        id: generateId(),
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        url: fileUrl,
        isSelected: false,
        createdAt: new Date()
      } as FileData;
    });

    files.value = [...files.value, ...fileEntries];
    return fileEntries;
  };

  const removeFile = (id: string) => {
    const fileIndex = files.value.findIndex(file => file.id === id);
    if (fileIndex !== -1) {
      const file = files.value[fileIndex];
      if (file.url) {
        URL.revokeObjectURL(file.url);
      }
      files.value.splice(fileIndex, 1);
    }
  };

  const selectFile = (id: string, selected: boolean = true) => {
    const fileIndex = files.value.findIndex(file => file.id === id);
    if (fileIndex !== -1) {
      files.value[fileIndex].isSelected = selected;
    }
  };

  const toggleSelection = (id: string) => {
    const fileIndex = files.value.findIndex(file => file.id === id);
    if (fileIndex !== -1) {
      files.value[fileIndex].isSelected = !files.value[fileIndex].isSelected;
    }
  };

  const selectAll = (selected: boolean = true) => {
    files.value.forEach(file => {
      file.isSelected = selected;
    });
  };

  const clearSelection = () => {
    selectAll(false);
  };

  const removeSelected = () => {
    const toRemove = files.value.filter(file => file.isSelected);
    toRemove.forEach(file => {
      if (file.url) {
        URL.revokeObjectURL(file.url);
      }
    });

    files.value = files.value.filter(file => !file.isSelected);
  };

  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) {
      return 'image';
    } else if (fileType === 'application/pdf') {
      return 'pdf';
    } else if (fileType.startsWith('video/')) {
      return 'video';
    } else if (fileType.startsWith('audio/')) {
      return 'audio';
    } else if (fileType.includes('word') || fileType.includes('document')) {
      return 'document';
    } else if (fileType.includes('excel') || fileType.includes('spreadsheet')) {
      return 'spreadsheet';
    } else if (fileType.includes('presentation') || fileType.includes('powerpoint')) {
      return 'presentation';
    } else {
      return 'file';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return {
    files,
    selectedFiles,
    addFiles,
    removeFile,
    selectFile,
    toggleSelection,
    selectAll,
    clearSelection,
    removeSelected,
    getFileIcon,
    formatFileSize
  };
}
