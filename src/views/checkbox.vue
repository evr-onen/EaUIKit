<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">EACheckbox Bileşeni</h1>
        <p class="text-lg text-gray-600">Checkbox bileşeninin tüm özelliklerini keşfedin</p>
      </div>

      <!-- Özellikler Genel Bakış -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-gray-800">Özellikler</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-blue-50 p-4 rounded-lg">
            <h3 class="font-medium text-blue-900">Boyutlar</h3>
            <p class="text-sm text-blue-700">sm, md, lg</p>
          </div>
          <div class="bg-green-50 p-4 rounded-lg">
            <h3 class="font-medium text-green-900">Durumlar</h3>
            <p class="text-sm text-green-700">Normal, Disabled, Error</p>
          </div>
          <div class="bg-purple-50 p-4 rounded-lg">
            <h3 class="font-medium text-purple-900">v-model</h3>
            <p class="text-sm text-purple-700">İki yönlü veri bağlama</p>
          </div>
          <div class="bg-orange-50 p-4 rounded-lg">
            <h3 class="font-medium text-orange-900">Özelleştirme</h3>
            <p class="text-sm text-orange-700">Label, renk seçenekleri</p>
          </div>
        </div>
      </div>

      <!-- Temel Kullanım -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Temel Kullanım</h2>
        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <EACheckbox label="Basit Checkbox" v-model="basicCheck" />
            <span class="text-sm text-gray-500">Değer: {{ basicCheck }}</span>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg">
            <code class="text-sm">
              &lt;EACheckbox label="Basit Checkbox" v-model="basicCheck" /&gt;
            </code>
          </div>
        </div>
      </div>

      <!-- Boyut Örnekleri -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Boyut Seçenekleri</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="space-y-4">
            <h3 class="font-medium text-gray-700">Küçük (sm)</h3>
            <EACheckbox label="Küçük Checkbox" v-model="sizeSmall" size="sm"/>
            <div class="bg-gray-100 p-3 rounded">
              <code class="text-xs">size="sm"</code>
            </div>
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-700">Orta (md) - Varsayılan</h3>
            <EACheckbox label="Orta Checkbox" v-model="sizeMedium" />
            <div class="bg-gray-100 p-3 rounded">
              <code class="text-xs">size="md" (default)</code>
            </div>
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-700">Büyük (lg)</h3>
            <EACheckbox label="Büyük Checkbox" v-model="sizeLarge" size="lg"/>
            <div class="bg-gray-100 p-3 rounded">
              <code class="text-xs">size="lg"</code>
            </div>
          </div>
        </div>
      </div>

      <!-- Durumlar -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Durum Örnekleri</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="space-y-4">
            <h3 class="font-medium text-gray-700">Normal Durum</h3>
            <EACheckbox label="Normal Checkbox" v-model="normalState" />
            <span class="text-sm text-gray-500">Değer: {{ normalState }}</span>
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-700">Devre Dışı</h3>
            <EACheckbox label="Devre Dışı Checkbox" v-model="disabledState" :disabled="true" />
            <span class="text-sm text-gray-500">Değer: {{ disabledState }}</span>
          </div>
          <div class="space-y-4">
            <h3 class="font-medium text-gray-700">Hata Durumu</h3>
            <EACheckbox label="Hatalı Checkbox" v-model="errorState" :error="true" />
            <span class="text-sm text-red-500">Değer: {{ errorState }}</span>
          </div>
        </div>
      </div>

      <!-- Gerçek Hayat Örnekleri -->
      <div class="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Gerçek Hayat Örnekleri</h2>

        <!-- Form Örneği -->
        <div class="mb-8">
          <h3 class="text-lg font-medium mb-4 text-gray-700">Kullanıcı Kayıt Formu</h3>
          <div class="bg-gray-50 p-6 rounded-lg space-y-4">
            <EACheckbox label="Hizmet Şartlarını kabul ediyorum" v-model="termsAccepted" />
            <EACheckbox label="E-posta bildirimlerini almak istiyorum" v-model="emailNotifications" />
            <EACheckbox label="SMS bildirimlerini almak istiyorum" v-model="smsNotifications" />
            <EACheckbox label="Pazarlama e-postalarını almak istiyorum" v-model="marketingEmails" />

            <div class="mt-4 p-4 bg-white rounded border">
              <h4 class="font-medium mb-2">Seçilen Değerler:</h4>
              <ul class="text-sm space-y-1">
                <li>Şartlar: {{ termsAccepted ? '✓ Kabul edildi' : '✗ Kabul edilmedi' }}</li>
                <li>E-posta: {{ emailNotifications ? '✓ Aktif' : '✗ Pasif' }}</li>
                <li>SMS: {{ smsNotifications ? '✓ Aktif' : '✗ Pasif' }}</li>
                <li>Pazarlama: {{ marketingEmails ? '✓ Aktif' : '✗ Pasif' }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Ayarlar Örneği -->
        <div class="mb-8">
          <h3 class="text-lg font-medium mb-4 text-gray-700">Uygulama Ayarları</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <h4 class="font-medium text-gray-600">Bildirimler</h4>
                <EACheckbox label="Push bildirimleri" v-model="pushNotifications" size="sm"/>
                <EACheckbox label="Sesli bildirimler" v-model="soundNotifications" size="sm"/>
                <EACheckbox label="Titreşim" v-model="vibrationNotifications" size="sm"/>
              </div>
              <div class="space-y-3">
                <h4 class="font-medium text-gray-600">Gizlilik</h4>
                <EACheckbox label="Konum paylaşımı" v-model="locationSharing" size="sm"/>
                <EACheckbox label="Çevrimiçi durum" v-model="onlineStatus" size="sm"/>
                <EACheckbox label="Son görülme" v-model="lastSeen" size="sm"/>
              </div>
            </div>
          </div>
        </div>

        <!-- Hata Durumu Örneği -->
        <div>
          <h3 class="text-lg font-medium mb-4 text-gray-700">Validasyon Örneği</h3>
          <div class="bg-gray-50 p-6 rounded-lg">
            <EACheckbox
              label="Hizmet şartlarını kabul etmelisiniz"
              v-model="validationExample"
              :error="!validationExample && showValidationError"
            />
            <button
              @click="handleValidation"
              class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Formu Gönder
            </button>
            <p v-if="showValidationError && !validationExample" class="text-red-500 text-sm mt-2">
              * Bu alan zorunludur
            </p>
            <p v-if="validationExample && validationSuccess" class="text-green-500 text-sm mt-2">
              ✓ Form başarıyla gönderildi!
            </p>
          </div>
        </div>
      </div>

      <!-- Tüm Kombinasyonlar -->
      <div class="bg-white rounded-lg shadow-sm p-6">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Tüm Kombinasyonlar</h2>
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left p-3">Boyut</th>
                <th class="text-left p-3">Normal</th>
                <th class="text-left p-3">Seçili</th>
                <th class="text-left p-3">Devre Dışı</th>
                <th class="text-left p-3">Hata</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="p-3 font-medium">Küçük</td>
                <td class="p-3"><EACheckbox label="Küçük" v-model="demo1" size="sm"/></td>
                <td class="p-3"><EACheckbox label="Küçük" v-model="demo2" size="sm"/></td>
                <td class="p-3"><EACheckbox label="Küçük" v-model="demo3" size="sm" :disabled="true"/></td>
                <td class="p-3"><EACheckbox label="Küçük" v-model="demo4" size="sm" :error="true"/></td>
              </tr>
              <tr class="border-b">
                <td class="p-3 font-medium">Orta</td>
                <td class="p-3"><EACheckbox label="Orta" v-model="demo5"/></td>
                <td class="p-3"><EACheckbox label="Orta" v-model="demo6"/></td>
                <td class="p-3"><EACheckbox label="Orta" v-model="demo7" :disabled="true"/></td>
                <td class="p-3"><EACheckbox label="Orta" v-model="demo8" :error="true"/></td>
              </tr>
              <tr>
                <td class="p-3 font-medium">Büyük</td>
                <td class="p-3"><EACheckbox label="Büyük" v-model="demo9" size="lg"/></td>
                <td class="p-3"><EACheckbox label="Büyük" v-model="demo10" size="lg"/></td>
                <td class="p-3"><EACheckbox label="Büyük" v-model="demo11" size="lg" :disabled="true"/></td>
                <td class="p-3"><EACheckbox label="Büyük" v-model="demo12" size="lg" :error="true"/></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EACheckbox from '@/components/ui/form/EaCheckbox/EaCheckbox.vue';
import { ref } from 'vue';

// Basic examples
const basicCheck = ref(false);

// Size examples
const sizeSmall = ref(false);
const sizeMedium = ref(true);
const sizeLarge = ref(false);

// State examples
const normalState = ref(false);
const disabledState = ref(true);
const errorState = ref(false);

// Real-life examples - Registration form
const termsAccepted = ref(false);
const emailNotifications = ref(true);
const smsNotifications = ref(false);
const marketingEmails = ref(false);

// Settings example
const pushNotifications = ref(true);
const soundNotifications = ref(true);
const vibrationNotifications = ref(false);
const locationSharing = ref(false);
const onlineStatus = ref(true);
const lastSeen = ref(true);

// Validation example
const validationExample = ref(false);
const showValidationError = ref(false);
const validationSuccess = ref(false);

// All combinations demo
const demo1 = ref(false);
const demo2 = ref(true);
const demo3 = ref(false);
const demo4 = ref(false);
const demo5 = ref(false);
const demo6 = ref(true);
const demo7 = ref(false);
const demo8 = ref(false);
const demo9 = ref(false);
const demo10 = ref(true);
const demo11 = ref(false);
const demo12 = ref(false);

const handleValidation = () => {
  if (!validationExample.value) {
    showValidationError.value = true;
    validationSuccess.value = false;
  } else {
    showValidationError.value = false;
    validationSuccess.value = true;
    setTimeout(() => {
      validationSuccess.value = false;
    }, 3000);
  }
};
</script>

<style scoped>

</style>
