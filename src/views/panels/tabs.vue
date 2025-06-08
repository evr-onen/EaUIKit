<template>
  <div class="tabs-demo">




    <div class="page-header">
      <h1>Tabs Bileşeni</h1>
      <p>Modern ve esnek tabs bileşeni örnekleri</p>
    </div>

    <!-- Default Tabs -->
    <section class="demo-section">
      <h2>Varsayılan Tabs</h2>
      <Tabs
        :tabs="defaultTabs"
        @tab-change="onTabChange"
      >
        <template #home>
          <div class="tab-content">
            <h3>Anasayfa</h3>
            <p>Bu anasayfa içeriğidir. Burada genel bilgiler ve önemli duyurular yer alır.</p>
            <ul>
              <li>Güncel haberler</li>
              <li>Önemli duyurular</li>
              <li>Hızlı erişim linkleri</li>
            </ul>
          </div>
        </template>

        <template #profile>
          <div class="tab-content">
            <h3>Profil</h3>
            <div class="profile-info">
              <div class="profile-field">
                <label>Ad Soyad:</label>
                <span>Ahmet Yılmaz</span>
              </div>
              <div class="profile-field">
                <label>E-posta:</label>
                <span>ahmet@example.com</span>
              </div>
              <div class="profile-field">
                <label>Telefon:</label>
                <span>+90 555 123 45 67</span>
              </div>
            </div>
          </div>
        </template>

        <template #settings>
          <div class="tab-content">
            <h3>Ayarlar</h3>
            <div class="settings-group">
              <h4>Görünüm Ayarları</h4>
              <label class="setting-item">
                <input type="checkbox" checked> Koyu tema
              </label>
              <label class="setting-item">
                <input type="checkbox"> Bildirimler
              </label>
            </div>
          </div>
        </template>

        <template #notifications>
          <div class="tab-content">
            <h3>Bildirimler</h3>
            <div class="notification-list">
              <div class="notification-item">
                <span class="notification-dot"></span>
                <div>
                  <strong>Yeni mesaj aldınız</strong>
                  <p>2 saat önce</p>
                </div>
              </div>
              <div class="notification-item">
                <span class="notification-dot"></span>
                <div>
                  <strong>Sistem güncellemesi</strong>
                  <p>1 gün önce</p>
                </div>
              </div>
            </div>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- Pills Variant -->
    <section class="demo-section">
      <h2>Pills Stili</h2>
      <Tabs
        :tabs="pillsTabs"
        variant="pills"
        @tab-change="onTabChange"
      >
        <template #overview>
          <div class="tab-content">
            <h3>Genel Bakış</h3>
            <div class="stats-grid">
              <div class="stats-card">
                <h4>Toplam Kullanıcı</h4>
                <span class="stats-number">1,234</span>
              </div>
              <div class="stats-card">
                <h4>Aktif Oturum</h4>
                <span class="stats-number">89</span>
              </div>
              <div class="stats-card">
                <h4>Bugünkü Ziyaret</h4>
                <span class="stats-number">456</span>
              </div>
            </div>
          </div>
        </template>

        <template #analytics>
          <div class="tab-content">
            <h3>Analitik</h3>
            <p>Detaylı analitik veriler burada gösterilir.</p>
            <div class="chart-placeholder">
              📊 Grafik Alanı
            </div>
          </div>
        </template>

        <template #reports>
          <div class="tab-content">
            <h3>Raporlar</h3>
            <div class="report-list">
              <div class="report-item">📄 Aylık Rapor</div>
              <div class="report-item">📄 Yıllık Rapor</div>
              <div class="report-item">📄 Özel Rapor</div>
            </div>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- Underline Variant -->
    <section class="demo-section">
      <h2>Alt Çizgi Stili</h2>
      <Tabs
        :tabs="underlineTabs"
        variant="underline"
        size="large"
        @tab-change="onTabChange"
      >
        <template #products>
          <div class="tab-content">
            <h3>Ürünler</h3>
            <div class="product-grid">
              <div class="product-card">
                <h4>Ürün 1</h4>
                <p>₺299</p>
              </div>
              <div class="product-card">
                <h4>Ürün 2</h4>
                <p>₺499</p>
              </div>
              <div class="product-card">
                <h4>Ürün 3</h4>
                <p>₺199</p>
              </div>
            </div>
          </div>
        </template>

        <template #services>
          <div class="tab-content">
            <h3>Hizmetler</h3>
            <ul class="service-list">
              <li>🔧 Teknik Destek</li>
              <li>🚚 Ücretsiz Kargo</li>
              <li>💳 Güvenli Ödeme</li>
              <li>🔄 Kolay İade</li>
            </ul>
          </div>
        </template>

        <template #contact>
          <div class="tab-content">
            <h3>İletişim</h3>
            <div class="contact-info">
              <div class="contact-item">
                <strong>📞 Telefon:</strong>
                <span>+90 555 123 45 67</span>
              </div>
              <div class="contact-item">
                <strong>📧 E-posta:</strong>
                <span>info@example.com</span>
              </div>
              <div class="contact-item">
                <strong>📍 Adres:</strong>
                <span>İstanbul, Türkiye</span>
              </div>
            </div>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- Small Size Example -->
    <section class="demo-section">
      <h2>Küçük Boyut</h2>
      <Tabs
        :tabs="smallTabs"
        size="small"
        @tab-change="onTabChange"
      >
        <template #tab1>
          <div class="tab-content">
            <p>İlk sekme içeriği</p>
          </div>
        </template>

        <template #tab2>
          <div class="tab-content">
            <p>İkinci sekme içeriği</p>
          </div>
        </template>

        <template #tab3>
          <div class="tab-content">
            <p>Üçüncü sekme içeriği (devre dışı)</p>
          </div>
        </template>
      </Tabs>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tabs from '@/components/ui/panels/EaTabs/EaTabs.vue'

// Default tabs data
const defaultTabs = ref([
  {
    id: 'home',
    label: 'Anasayfa',
    icon: 'dashboard'
  },
  {
    id: 'profile',
    label: 'Profil',
    icon: 'check'
  },
  {
    id: 'settings',
    label: 'Ayarlar',
    icon: 'bars'
  },
  {
    id: 'notifications',
    label: 'Bildirimler',
    icon: 'dot',
    badge: '3'
  }
])

// Pills tabs data
const pillsTabs = ref([
  {
    id: 'overview',
    label: 'Genel Bakış',
    icon: 'dashboard'
  },
  {
    id: 'analytics',
    label: 'Analitik',
    icon: 'plus'
  },
  {
    id: 'reports',
    label: 'Raporlar',
    icon: 'inputs',
    badge: '12'
  }
])

// Underline tabs data
const underlineTabs = ref([
  {
    id: 'products',
    label: 'Ürünler'
  },
  {
    id: 'services',
    label: 'Hizmetler'
  },
  {
    id: 'contact',
    label: 'İletişim'
  }
])
type SmallTabsType = {
  id: string
  label: string
  disabled?: boolean
}
// Small tabs data
const smallTabs = ref<SmallTabsType[]>([
  {
    id: 'tab1',
    label: 'Sekme 1'
  },
  {
    id: 'tab2',
    label: 'Sekme 2'
  },
  {
    id: 'tab3',
    label: 'Sekme 3',
    disabled: true
  }
])

// Types
interface Tab {
  id: string
  label: string
  content?: string
  icon?: string
  badge?: string | number
  disabled?: boolean
}

// Event handler
const onTabChange = (index: number, tab: Tab) => {
  console.log('Tab değişti:', { index, tab })
}
</script>

<style scoped lang="scss">
.tabs-demo {
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
}

.tab-content {
  padding: 1rem 0;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    color: #6b7280;

    li {
      margin-bottom: 0.5rem;
    }
  }
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.profile-field {
  display: flex;
  gap: 1rem;

  label {
    font-weight: 600;
    color: #374151;
    min-width: 80px;
  }

  span {
    color: #6b7280;
  }
}

.settings-group {
  margin-bottom: 1.5rem;

  h4 {
    margin-bottom: 1rem;
  }
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  color: #6b7280;

  input[type="checkbox"] {
    margin: 0;
  }
}

.notification-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
}

.notification-dot {
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
  margin-top: 0.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stats-card {
  padding: 1.5rem;
  background-color: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: center;

  h4 {
    font-size: 0.875rem;
    color: #64748b;
    margin-bottom: 0.5rem;
  }

  .stats-number {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
  }
}

.chart-placeholder {
  height: 200px;
  background-color: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  color: #64748b;
}

.report-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.report-item {
  padding: 1rem;
  background-color: #fefefe;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.product-card {
  padding: 1.5rem;
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  text-align: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 600;
    color: #059669;
    margin: 0;
  }
}

.service-list {
  list-style: none;
  margin-left: 0;

  li {
    padding: 0.75rem;
    background-color: #f0f9ff;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  strong {
    color: #374151;
  }

  span {
    color: #6b7280;
    margin-left: 1rem;
  }
}

// Responsive
@media (max-width: 768px) {
  .tabs-demo {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-item {
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .profile-field {
    flex-direction: column;
    gap: 0.25rem;

    label {
      min-width: auto;
    }
  }
}
</style>
