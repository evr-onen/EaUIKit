<template>
  <div class="upload-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaUploadImage Component</h1>
        <p class="demo-description">
          A powerful and flexible image upload component with drag & drop support,
          file validation, preview functionality, and comprehensive customization options.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different upload variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Upload</h4>
            <p>Simple image upload with default settings</p>
            <EaUploadImage
              label="Profile Picture"
              v-model="basicUpload"
              @file-size="(e: string) => basicFileSize = e"
              @files-count="(e: number) => basicFileCount = e"
            />
            <div class="result-display">
              <strong>Files:</strong> {{ basicFileCount }} |
              <strong>Size:</strong> {{ basicFileSize }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Multiple Files</h4>
            <p>Upload multiple images at once</p>
            <EaUploadImage
              label="Gallery Images"
              v-model="multipleUpload"
              multiple
              @file-size="(e: string) => multipleFileSize = e"
              @files-count="(e: number) => multipleFileCount = e"
            />
            <div class="result-display">
              <strong>Files:</strong> {{ multipleFileCount }} |
              <strong>Size:</strong> {{ multipleFileSize }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Custom Label</h4>
            <p>Upload with custom styling and labels</p>
            <EaUploadImage
              label="Company Logo"
              v-model="customUpload"
              @file-size="(e: string) => customFileSize = e"
              @files-count="(e: number) => customFileCount = e"
            />
            <div class="result-display">
              <strong>Files:</strong> {{ customFileCount }} |
              <strong>Size:</strong> {{ customFileSize }}
            </div>
          </div>

          <div class="demo-card">
            <h4>Document Upload</h4>
            <p>Upload various file types with validation</p>
            <EaUploadImage
              label="Documents"
              v-model="documentUpload"
              multiple
              @file-size="(e: string) => documentFileSize = e"
              @files-count="(e: number) => documentFileCount = e"
            />
            <div class="result-display">
              <strong>Files:</strong> {{ documentFileCount }} |
              <strong>Size:</strong> {{ documentFileSize }}
            </div>
          </div>
        </div>

        <CodeBlock
          :code="quickDemoCode"
          title="Quick Demo Usage"
        />
      </section>

      <!-- Features Section -->
      <section class="demo-section">
        <h2>Key Features</h2>
        <p class="section-description">
          EaUploadImage provides comprehensive file upload functionality with modern UX patterns.
        </p>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📁</div>
            <h4>Drag & Drop</h4>
            <p>Intuitive drag and drop interface for easy file selection</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🖼️</div>
            <h4>Image Preview</h4>
            <p>Real-time preview of uploaded images with thumbnail generation</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h4>File Validation</h4>
            <p>Built-in validation for file types, sizes, and count limits</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h4>Progress Tracking</h4>
            <p>Upload progress indicators and status feedback</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h4>Responsive Design</h4>
            <p>Works seamlessly across desktop, tablet, and mobile devices</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h4>Performance</h4>
            <p>Optimized for large files with efficient memory management</p>
          </div>
        </div>

        <CodeBlock
          :code="featuresCode"
          title="Features Implementation"
        />
      </section>

      <!-- Use Cases Section -->
      <section class="demo-section">
        <h2>Common Use Cases</h2>
        <p class="section-description">
          Real-world examples demonstrating different upload scenarios and configurations.
        </p>

        <div class="use-cases">
          <div class="use-case">
            <h3>Profile Avatar Upload</h3>
            <div class="use-case-demo">
              <EaUploadImage
                label="Upload Avatar"
                v-model="avatarUpload"
                @file-size="(e: string) => avatarFileSize = e"
                @files-count="(e: number) => avatarFileCount = e"
              />
              <div class="upload-info">
                <p><strong>Purpose:</strong> Single profile image upload</p>
                <p><strong>Restrictions:</strong> Image files only, max 5MB</p>
                <p><strong>Files:</strong> {{ avatarFileCount }} | <strong>Size:</strong> {{ avatarFileSize }}</p>
              </div>
            </div>
          </div>

          <div class="use-case">
            <h3>Product Gallery</h3>
            <div class="use-case-demo">
              <EaUploadImage
                label="Product Images"
                v-model="galleryUpload"
                multiple
                @file-size="(e: string) => galleryFileSize = e"
                @files-count="(e: number) => galleryFileCount = e"
              />
              <div class="upload-info">
                <p><strong>Purpose:</strong> Multiple product images</p>
                <p><strong>Restrictions:</strong> Up to 10 images, max 2MB each</p>
                <p><strong>Files:</strong> {{ galleryFileCount }} | <strong>Size:</strong> {{ galleryFileSize }}</p>
              </div>
            </div>
          </div>

          <div class="use-case">
            <h3>Document Upload</h3>
            <div class="use-case-demo">
              <EaUploadImage
                label="Supporting Documents"
                v-model="docsUpload"
                multiple
                @file-size="(e: string) => docsFileSize = e"
                @files-count="(e: number) => docsFileCount = e"
              />
              <div class="upload-info">
                <p><strong>Purpose:</strong> Various document types</p>
                <p><strong>Restrictions:</strong> PDF, DOC, images allowed</p>
                <p><strong>Files:</strong> {{ docsFileCount }} | <strong>Size:</strong> {{ docsFileSize }}</p>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock
          :code="useCasesCode"
          title="Use Cases Implementation"
        />
      </section>

      <!-- File Data Structure -->
      <section class="demo-section">
        <h2>File Data Structure</h2>
        <p class="section-description">
          Understanding the FileData interface and how uploaded files are structured in the component.
        </p>

        <div class="data-structure">
          <h3>FileData Interface</h3>
          <CodeBlock
            :code="fileDataInterface"
            title="FileData Interface"
          />

          <h3>Example Output</h3>
          <div class="example-output">
            <div class="output-card">
              <h4>Current Upload Data:</h4>
              <pre class="output-data">{{ JSON.stringify(basicUpload, null, 2) }}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Props Documentation -->
      <section class="demo-section">
        <h2>Props</h2>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Required</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>label</code></td>
                <td>string</td>
                <td>Yes</td>
                <td>-</td>
                <td>Display label for the upload component</td>
              </tr>
              <tr>
                <td><code>v-model</code></td>
                <td>FileData[]</td>
                <td>Yes</td>
                <td>[]</td>
                <td>Array of uploaded file data objects</td>
              </tr>
              <tr>
                <td><code>multiple</code></td>
                <td>boolean</td>
                <td>No</td>
                <td>false</td>
                <td>Allow multiple file selection</td>
              </tr>
              <tr>
                <td><code>accept</code></td>
                <td>string</td>
                <td>No</td>
                <td>'image/*'</td>
                <td>Accepted file types (MIME types)</td>
              </tr>
              <tr>
                <td><code>maxSize</code></td>
                <td>number</td>
                <td>No</td>
                <td>5242880</td>
                <td>Maximum file size in bytes (default 5MB)</td>
              </tr>
              <tr>
                <td><code>maxFiles</code></td>
                <td>number</td>
                <td>No</td>
                <td>10</td>
                <td>Maximum number of files when multiple is true</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Events Documentation -->
      <section class="demo-section">
        <h2>Events</h2>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Payload</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>update:modelValue</code></td>
                <td>FileData[]</td>
                <td>Emitted when files are added or removed</td>
              </tr>
              <tr>
                <td><code>file-size</code></td>
                <td>string</td>
                <td>Emitted with formatted total file size</td>
              </tr>
              <tr>
                <td><code>files-count</code></td>
                <td>number</td>
                <td>Emitted with current number of files</td>
              </tr>
              <tr>
                <td><code>upload-start</code></td>
                <td>-</td>
                <td>Emitted when file upload process starts</td>
              </tr>
              <tr>
                <td><code>upload-complete</code></td>
                <td>FileData[]</td>
                <td>Emitted when all files are processed</td>
              </tr>
              <tr>
                <td><code>upload-error</code></td>
                <td>Error</td>
                <td>Emitted when upload fails or validation errors occur</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Usage Examples -->
      <section class="demo-section">
        <h2>Complete Usage Examples</h2>
        <p class="section-description">
          Comprehensive examples showing different implementation patterns and advanced features.
        </p>

        <div class="example-tabs">
          <h3>Basic Implementation</h3>
          <CodeBlock
            :code="basicImplementationCode"
            title="Basic Implementation"
          />

          <h3>Advanced Form Integration</h3>
          <CodeBlock
            :code="advancedFormCode"
            title="Advanced Form Integration"
          />

          <h3>Custom Validation</h3>
          <CodeBlock
            :code="customValidationCode"
            title="Custom Validation Example"
          />
        </div>
      </section>

      <!-- Best Practices -->
      <section class="demo-section">
        <h2>Best Practices</h2>
        <p class="section-description">
          Guidelines and recommendations for optimal usage of the EaUploadImage component.
        </p>

        <div class="best-practices">
          <div class="practice-item">
            <h4>🎯 File Size Optimization</h4>
            <p>Set appropriate maxSize limits based on your use case. For profile pictures, 2-5MB is usually sufficient.</p>
          </div>
          <div class="practice-item">
            <h4>📝 Clear Labeling</h4>
            <p>Use descriptive labels that clearly indicate what type of files are expected and any restrictions.</p>
          </div>
          <div class="practice-item">
            <h4>🔒 Security Validation</h4>
            <p>Always validate file types and sizes on both client and server side for security.</p>
          </div>
          <div class="practice-item">
            <h4>📱 Mobile Experience</h4>
            <p>Test upload functionality on mobile devices, especially drag & drop alternatives.</p>
          </div>
          <div class="practice-item">
            <h4>⚡ Performance</h4>
            <p>For large files, consider implementing chunked uploads and progress indicators.</p>
          </div>
          <div class="practice-item">
            <h4>♿ Accessibility</h4>
            <p>Ensure keyboard navigation works and provide screen reader friendly labels.</p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import EaUploadImage from '@/components/ui/form/EaUploadImage/EaUploadImage.vue';
import CodeBlock from '@/components/general/CodeBlock.vue';
import { ref } from 'vue';

// Define FileData interface for type safety
interface FileData {
  base64: string;
  name: string;
  mime: string;
  size: number;
}

// Quick Demo uploads
const basicUpload = ref<FileData[]>([]);
const basicFileSize = ref<string>('');
const basicFileCount = ref<number>(0);

const multipleUpload = ref<FileData[]>([]);
const multipleFileSize = ref<string>('');
const multipleFileCount = ref<number>(0);

const customUpload = ref<FileData[]>([]);
const customFileSize = ref<string>('');
const customFileCount = ref<number>(0);

const documentUpload = ref<FileData[]>([]);
const documentFileSize = ref<string>('');
const documentFileCount = ref<number>(0);

// Use Cases uploads
const avatarUpload = ref<FileData[]>([]);
const avatarFileSize = ref<string>('');
const avatarFileCount = ref<number>(0);

const galleryUpload = ref<FileData[]>([]);
const galleryFileSize = ref<string>('');
const galleryFileCount = ref<number>(0);

const docsUpload = ref<FileData[]>([]);
const docsFileSize = ref<string>('');
const docsFileCount = ref<number>(0);

// Code examples
const quickDemoCode = `<template>
  <EaUploadImage
    label="Profile Picture"
    v-model="uploadedFiles"
    @file-size="handleFileSize"
    @files-count="handleFileCount"
  />

  <div class="upload-info">
    Files: {{ fileCount }} | Size: {{ fileSize }}
  </div>
</template>

import { ref } from 'vue';
import EaUploadImage from '@/components/ui/form/EaUploadImage/EaUploadImage.vue';

interface FileData {
  base64: string;
  name: string;
  mime: string;
  size: number;
}

const uploadedFiles = ref<FileData[]>([]);
const fileSize = ref<string>('');
const fileCount = ref<number>(0);

const handleFileSize = (size: string) => {
  fileSize.value = size;
};

const handleFileCount = (count: number) => {
  fileCount.value = count;
};`;

const featuresCode = `<template>
  <!-- Drag & Drop with Multiple Files -->
  <EaUploadImage
    label="Gallery Images"
    v-model="galleryFiles"
    multiple
    :maxFiles="10"
    :maxSize="2097152"
    accept="image/jpeg,image/png,image/webp"
    @upload-start="handleUploadStart"
    @upload-complete="handleUploadComplete"
    @upload-error="handleUploadError"
  />

  <!-- Document Upload with Custom Validation -->
  <EaUploadImage
    label="Documents"
    v-model="documentFiles"
    multiple
    accept=".pdf,.doc,.docx,image/*"
    :maxSize="10485760"
    @file-size="updateTotalSize"
  />
</template>

const galleryFiles = ref<FileData[]>([]);
const documentFiles = ref<FileData[]>([]);

const handleUploadStart = () => {
  console.log('Upload started');
};

const handleUploadComplete = (files: FileData[]) => {
  console.log('Upload completed:', files);
};

const handleUploadError = (error: Error) => {
  console.error('Upload error:', error);
};`;

const useCasesCode = `<template>
  <!-- Profile Avatar (Single Image) -->
  <div class="avatar-upload">
    <EaUploadImage
      label="Profile Picture"
      v-model="avatar"
      :maxSize="5242880"
      accept="image/jpeg,image/png"
    />
  </div>

  <!-- Product Gallery (Multiple Images) -->
  <div class="gallery-upload">
    <EaUploadImage
      label="Product Images"
      v-model="productImages"
      multiple
      :maxFiles="8"
      :maxSize="2097152"
      accept="image/*"
    />
  </div>

  <!-- Document Upload (Mixed Types) -->
  <div class="document-upload">
    <EaUploadImage
      label="Supporting Documents"
      v-model="documents"
      multiple
      :maxFiles="5"
      :maxSize="10485760"
      accept=".pdf,.doc,.docx,.txt,image/*"
    />
  </div>
</template>

// Different use cases with specific configurations
const avatar = ref<FileData[]>([]);
const productImages = ref<FileData[]>([]);
const documents = ref<FileData[]>([]);`;

const fileDataInterface = `interface FileData {
  base64: string;    // Base64 encoded file content
  name: string;      // Original filename
  mime: string;      // MIME type (e.g., 'image/jpeg')
  size: number;      // File size in bytes
}

// Example FileData object:
{
  base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
  name: "profile-picture.jpg",
  mime: "image/jpeg",
  size: 245760
}

// Array of uploaded files:
const uploadedFiles = ref<FileData[]>([
  {
    base64: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    name: "image1.jpg",
    mime: "image/jpeg",
    size: 245760
  },
  {
    base64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...",
    name: "image2.png",
    mime: "image/png",
    size: 189432
  }
]);`;

const basicImplementationCode = `<template>
  <div class="upload-container">
    <h3>Upload Your Files</h3>

    <EaUploadImage
      label="Choose Files"
      v-model="files"
      multiple
      @file-size="updateFileSize"
      @files-count="updateFileCount"
      @upload-complete="onUploadComplete"
    />

    <div v-if="files.length > 0" class="file-list">
      <h4>Uploaded Files ({{ fileCount }}):</h4>
      <ul>
        <li v-for="file in files" :key="file.name">
          {{ file.name }} ({{ formatFileSize(file.size) }})
        </li>
      </ul>
      <p>Total Size: {{ fileSize }}</p>
    </div>
  </div>
</template>

import { ref } from 'vue';
import EaUploadImage from '@/components/ui/form/EaUploadImage/EaUploadImage.vue';

interface FileData {
  base64: string;
  name: string;
  mime: string;
  size: number;
}

const files = ref<FileData[]>([]);
const fileSize = ref<string>('');
const fileCount = ref<number>(0);

const updateFileSize = (size: string) => {
  fileSize.value = size;
};

const updateFileCount = (count: number) => {
  fileCount.value = count;
};

const onUploadComplete = (uploadedFiles: FileData[]) => {
  console.log('All files uploaded:', uploadedFiles);
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};`;

const advancedFormCode = `<template>
  <form @submit.prevent="submitForm" class="upload-form">
    <div class="form-section">
      <h3>Project Information</h3>

      <div class="form-field">
        <label>Project Name</label>
        <input v-model="formData.projectName" type="text" required />
      </div>

      <div class="form-field">
        <label>Description</label>
        <textarea v-model="formData.description" rows="3"></textarea>
      </div>
    </div>

    <div class="form-section">
      <h3>Project Assets</h3>

      <div class="upload-group">
        <EaUploadImage
          label="Project Images"
          v-model="formData.images"
          multiple
          :maxFiles="10"
          accept="image/*"
          @upload-error="handleUploadError"
        />
      </div>

      <div class="upload-group">
        <EaUploadImage
          label="Project Documents"
          v-model="formData.documents"
          multiple
          :maxFiles="5"
          accept=".pdf,.doc,.docx"
          @files-count="updateDocumentCount"
        />
      </div>
    </div>

    <div class="form-actions">
      <button type="submit" :disabled="!isFormValid" class="submit-btn">
        Submit Project
      </button>
      <button type="button" @click="resetForm" class="reset-btn">
        Reset Form
      </button>
    </div>

    <div v-if="submitResult" class="submit-result">
      <h4>Form Submitted Successfully!</h4>
      <p>Project: {{ submitResult.projectName }}</p>
      <p>Images: {{ submitResult.imageCount }}</p>
      <p>Documents: {{ submitResult.documentCount }}</p>
    </div>
  </form>
</template>

import { ref, computed } from 'vue';

interface ProjectFormData {
  projectName: string;
  description: string;
  images: FileData[];
  documents: FileData[];
}

const formData = ref<ProjectFormData>({
  projectName: '',
  description: '',
  images: [],
  documents: []
});

const documentCount = ref<number>(0);
const submitResult = ref<any>(null);

const isFormValid = computed(() => {
  return formData.value.projectName.trim().length > 0 &&
         formData.value.images.length > 0;
});

const updateDocumentCount = (count: number) => {
  documentCount.value = count;
};

const handleUploadError = (error: Error) => {
  console.error('Upload error:', error);
  alert('Upload failed: ' + error.message);
};

const submitForm = () => {
  if (!isFormValid.value) return;

  submitResult.value = {
    projectName: formData.value.projectName,
    imageCount: formData.value.images.length,
    documentCount: formData.value.documents.length
  };

  // Reset form after 3 seconds
  setTimeout(() => {
    submitResult.value = null;
  }, 3000);
};

const resetForm = () => {
  formData.value = {
    projectName: '',
    description: '',
    images: [],
    documents: []
  };
  submitResult.value = null;
};`;

const customValidationCode = `<template>
  <div class="custom-upload">
    <EaUploadImage
      label="Upload Images"
      v-model="validatedFiles"
      multiple
      @upload-start="validateFiles"
      @upload-error="handleValidationError"
    />

    <div v-if="validationErrors.length > 0" class="validation-errors">
      <h4>Validation Errors:</h4>
      <ul>
        <li v-for="error in validationErrors" :key="error" class="error">
          {{ error }}
        </li>
      </ul>
    </div>

    <div v-if="validFiles.length > 0" class="valid-files">
      <h4>Valid Files:</h4>
      <div v-for="file in validFiles" :key="file.name" class="file-item">
        <img v-if="isImage(file)" :src="file.base64" alt="preview" class="preview" />
        <span>{{ file.name }}</span>
        <span class="file-size">({{ formatSize(file.size) }})</span>
      </div>
    </div>
  </div>
</template>

import { ref, computed } from 'vue';

const validatedFiles = ref<FileData[]>([]);
const validationErrors = ref<string[]>([]);

// Custom validation rules
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_DIMENSION = 2048; // pixels

const validFiles = computed(() => {
  return validatedFiles.value.filter(file =>
    validateFileSize(file) &&
    validateFileType(file)
  );
});

const validateFiles = () => {
  validationErrors.value = [];

  validatedFiles.value.forEach(file => {
    if (!validateFileSize(file)) {
      validationErrors.value.push(\`\${file.name}: File size exceeds 5MB limit\`);
    }

    if (!validateFileType(file)) {
      validationErrors.value.push(\`\${file.name}: Invalid file type. Only JPEG, PNG, WebP allowed\`);
    }

    if (isImage(file)) {
      validateImageDimensions(file);
    }
  });
};

const validateFileSize = (file: FileData): boolean => {
  return file.size <= MAX_FILE_SIZE;
};

const validateFileType = (file: FileData): boolean => {
  return ALLOWED_TYPES.includes(file.mime);
};

const validateImageDimensions = (file: FileData) => {
  const img = new Image();
  img.onload = () => {
    if (img.width > MAX_DIMENSION || img.height > MAX_DIMENSION) {
      validationErrors.value.push(
        \`\${file.name}: Image dimensions exceed \${MAX_DIMENSION}px limit\`
      );
    }
  };
  img.src = file.base64;
};

const isImage = (file: FileData): boolean => {
  return file.mime.startsWith('image/');
};

const formatSize = (bytes: number): string => {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
};

const handleValidationError = (error: Error) => {
  validationErrors.value.push(error.message);
};`;
</script>

<style scoped lang="scss">
.upload-demo {
  background: #f8fafc;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .demo-description {
    font-size: 1.25rem;
    color: #64748b;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.demo-section {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 4px;
      height: 2rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
  }

  .section-description {
    font-size: 1rem;
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.demo-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
}

.result-display {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #dbeafe;
  border-radius: 8px;
  font-size: 0.875rem;
  color: #1e40af;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }

  .feature-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.5;
    margin: 0;
  }
}

.use-cases {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.use-case {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .use-case-demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .upload-info {
    padding: 1rem;
    background: white;
    border-radius: 8px;
    border: 1px solid #e2e8f0;

    p {
      margin: 0.5rem 0;
      font-size: 0.875rem;
      color: #64748b;

      strong {
        color: #1e293b;
      }
    }
  }
}

.data-structure {
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin: 2rem 0 1rem 0;

    &:first-child {
      margin-top: 0;
    }
  }
}

.example-output {
  margin-top: 1.5rem;

  .output-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 1.5rem;

    h4 {
      font-size: 1rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 1rem;
    }

    .output-data {
      background: #1e293b;
      color: #e2e8f0;
      padding: 1rem;
      border-radius: 8px;
      font-family: 'Monaco', 'Consolas', monospace;
      font-size: 0.875rem;
      line-height: 1.5;
      overflow-x: auto;
      max-height: 200px;
      overflow-y: auto;
    }
  }
}

.props-table {
  overflow-x: auto;
  margin-top: 1.5rem;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    th, td {
      padding: 1rem 1.25rem;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }

    th {
      background: #f8fafc;
      font-weight: 600;
      color: #374151;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    td {
      color: #6b7280;
      font-size: 0.875rem;
      line-height: 1.5;

      code {
        background: #f1f5f9;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: 'Monaco', 'Consolas', monospace;
        font-size: 0.8rem;
        color: #1e293b;
        font-weight: 500;
      }
    }

    tr:last-child {
      th, td {
        border-bottom: none;
      }
    }

    tr:hover {
      background: #f8fafc;
    }
  }
}

.example-tabs {
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin: 2rem 0 1rem 0;

    &:first-child {
      margin-top: 0;
    }
  }
}

.best-practices {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.practice-item {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    line-height: 1.5;
    margin: 0;
  }
}

@media (max-width: 768px) {
  .upload-demo {
    padding: 1rem 0.5rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .demo-section {
    padding: 1.5rem;
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  .best-practices {
    grid-template-columns: 1fr;
  }
}
</style>
