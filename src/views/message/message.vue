<template>
  <div class="message-demo">
    <div class="page-header">
      <h1>Mesaj Bileşeni</h1>
      <p>Form ve uygulama için kullanılabilen mesaj bileşeni örnekleri</p>
    </div>

    <!-- Form Messages -->
    <section class="demo-section">
      <h2>Form Mesajları</h2>
      <div class="message-examples">
        <EaMessage
          type="success"
          title="Form başarıyla gönderildi"
          message="Bilgileriniz kaydedildi ve size e-posta ile onay gönderilecek."
          :closable="true"
        />

        <EaMessage
          type="error"
          title="Form gönderilemedi"
          message="Lütfen gerekli alanları doldurun ve tekrar deneyin."
          :closable="true"
        />

        <EaMessage
          type="warning"
          title="Dikkat gerekli"
          message="Bazı alanlar eksik veya hatalı. Lütfen kontrol edin."
          :closable="true"
        />

        <EaMessage
          type="info"
          title="Bilgilendirme"
          message="Form tamamlandıktan sonra 24 saat içinde size dönüş yapılacaktır."
          :closable="true"
        />
      </div>
    </section>

    <!-- Different Variants -->
    <section class="demo-section">
      <h2>Farklı Stiller</h2>

      <h3>Light (Varsayılan)</h3>
      <div class="message-examples">
        <EaMessage
          type="success"
          variant="light"
          message="Bu light variant başarı mesajıdır."
        />
        <EaMessage
          type="error"
          variant="light"
          message="Bu light variant hata mesajıdır."
        />
      </div>

      <h3>Filled</h3>
      <div class="message-examples">
        <EaMessage
          type="success"
          variant="filled"
          message="Bu filled variant başarı mesajıdır."
        />
        <EaMessage
          type="error"
          variant="filled"
          message="Bu filled variant hata mesajıdır."
        />
      </div>

      <h3>Outlined</h3>
      <div class="message-examples">
        <EaMessage
          type="success"
          variant="outlined"
          message="Bu outlined variant başarı mesajıdır."
        />
        <EaMessage
          type="error"
          variant="outlined"
          message="Bu outlined variant hata mesajıdır."
        />
      </div>
    </section>

    <!-- Different Sizes -->
    <section class="demo-section">
      <h2>Farklı Boyutlar</h2>

      <h3>Küçük</h3>
      <EaMessage
        type="info"
        size="small"
        message="Bu küçük boyutta mesajdır."
      />

      <h3>Normal (Varsayılan)</h3>
      <EaMessage
        type="info"
        size="medium"
        message="Bu normal boyutta mesajdır."
      />

      <h3>Büyük</h3>
      <EaMessage
        type="info"
        size="large"
        message="Bu büyük boyutta mesajdır."
      />
    </section>

    <!-- Without Icons -->
    <section class="demo-section">
      <h2>İkonsuz Mesajlar</h2>
      <EaMessage
        type="info"
        message="Bu mesajda ikon bulunmuyor."
        :show-icon="false"
      />

      <EaMessage
        type="success"
        title="İkonsuz Başarı"
        message="Bu başarı mesajında da ikon yok."
        :show-icon="false"
      />
    </section>

    <!-- Auto Close Messages -->
    <section class="demo-section">
      <h2>Otomatik Kapanan Mesajlar</h2>
      <button
        @click="showAutoCloseMessage"
        class="demo-button"
      >
        3 Saniye Sonra Kapanan Mesaj Göster
      </button>

      <EaMessage
        v-if="showAutoMessage"
        type="warning"
        title="Otomatik Kapanacak"
        message="Bu mesaj 3 saniye sonra otomatik olarak kapanacak."
        :duration="3000"
        :closable="false"
        @close="showAutoMessage = false"
      />
    </section>

    <!-- Custom Content -->
    <section class="demo-section">
      <h2>Özel İçerik</h2>
      <EaMessage type="info" title="Özel İçerikli Mesaj">
        <div>
          <p>Bu mesaj slot kullanarak özel içerik barındırıyor:</p>
          <ul>
            <li>Liste öğesi 1</li>
            <li>Liste öğesi 2</li>
            <li>Liste öğesi 3</li>
          </ul>
          <button class="custom-button">Özel Buton</button>
        </div>
      </EaMessage>
    </section>

    <!-- Form Integration Example -->
    <section class="demo-section">
      <h2>Form Entegrasyonu Örneği</h2>
      <div class="form-example">
        <form @submit.prevent="submitForm">
          <!-- Form Messages -->
          <EaMessage
            v-if="formMessage.show"
            :type="formMessage.type"
            :title="formMessage.title"
            :message="formMessage.message"
            @close="formMessage.show = false"
          />

          <div class="form-group">
            <label for="name">Ad Soyad</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              class="form-input"
              :class="{ 'error': formErrors.name }"
              placeholder="Adınızı ve soyadınızı giriniz"
            />
          </div>

          <div class="form-group">
            <label for="email">E-posta</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              class="form-input"
              :class="{ 'error': formErrors.email }"
              placeholder="E-posta adresinizi giriniz"
            />
          </div>

          <div class="form-actions">
            <button type="submit" class="submit-button">Gönder</button>
            <button type="button" @click="simulateError" class="error-button">
              Hata Simülasyonu
            </button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import EaMessage from '@/components/ui/messages/EaMessage/EaMessage.vue'

// Auto close message state
const showAutoMessage = ref(false)

// Form example state
const formData = reactive({
  name: '',
  email: ''
})

const formErrors = reactive({
  name: false,
  email: false
})

const formMessage = reactive({
  show: false,
  type: 'info' as 'success' | 'error' | 'warning' | 'info',
  title: '',
  message: ''
})

// Methods
const showAutoCloseMessage = () => {
  showAutoMessage.value = true
}

const submitForm = () => {
  // Reset errors
  formErrors.name = false
  formErrors.email = false

  // Simple validation
  if (!formData.name.trim()) {
    formErrors.name = true
  }

  if (!formData.email.trim() || !formData.email.includes('@')) {
    formErrors.email = true
  }

  if (formErrors.name || formErrors.email) {
    formMessage.show = true
    formMessage.type = 'error'
    formMessage.title = 'Form Hatası'
    formMessage.message = 'Lütfen tüm gerekli alanları doğru şekilde doldurun.'
    return
  }

  // Success
  formMessage.show = true
  formMessage.type = 'success'
  formMessage.title = 'Form Başarıyla Gönderildi'
  formMessage.message = `Merhaba ${formData.name}, formunuz başarıyla alındı. ${formData.email} adresine onay e-postası gönderilecek.`

  // Reset form
  formData.name = ''
  formData.email = ''
}

const simulateError = () => {
  formMessage.show = true
  formMessage.type = 'error'
  formMessage.title = 'Sunucu Hatası'
  formMessage.message = 'Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
}
</script>

<style scoped lang="scss">
.message-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    color: #6b7280;
  }
}

.demo-section {
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #4b5563;
    margin: 1.5rem 0 1rem 0;
  }
}

.message-examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.demo-button {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2563eb;
  }
}

.custom-button {
  background-color: #10b981;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  margin-top: 0.5rem;

  &:hover {
    background-color: #059669;
  }
}

.form-example {
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
}

.form-group {
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &.error {
    border-color: #dc2626;

    &:focus {
      border-color: #dc2626;
      box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
    }
  }
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.submit-button {
  background-color: #16a34a;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #15803d;
  }
}

.error-button {
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #b91c1c;
  }
}

// Responsive
@media (max-width: 768px) {
  .message-demo {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .form-example {
    padding: 1.5rem;
  }

  .form-actions {
    flex-direction: column;
  }
}
</style>
