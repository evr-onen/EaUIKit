<template>
  <div class="accordion-page ">
    <h1>Accordions</h1>

      <h2>Example 1: with Slots</h2>
      <Accordion :allowMultiple="true">
        <template #header-1>
          <div class="custom-header">
            <h3>🏠 Ev Bilgileri</h3>
          </div>
        </template>
        <template #content-1>
          <div class="custom-content">
            <p>Bu bölümde ev ile ilgili detaylı bilgiler yer almaktadır.</p>
            <ul>
              <li>3+1 Daire</li>
              <li>120 m²</li>
              <li>2. Kat</li>
            </ul>
          </div>
        </template>

        <template #header-2>
          <div class="custom-header">
            <h3>💰 Fiyat Bilgileri</h3>
          </div>
        </template>
        <template #content-2>
          <div class="custom-content">
            <p>Fiyat detayları ve ödeme seçenekleri:</p>
            <ul>
              <li>Satış Fiyatı: 850.000 TL</li>
              <li>Kira Fiyatı: 5.500 TL</li>
              <li>Aidat: 250 TL</li>
            </ul>
          </div>
        </template>

        <template #header-3>
          <div class="custom-header">
            <h3>📍 Konum Bilgileri</h3>
          </div>
        </template>
        <template #content-3>
          <div class="custom-content">
            <p>Konum ve ulaşım bilgileri:</p>
            <ul>
              <li>Kadıköy, İstanbul</li>
              <li>Metro'ya 5 dakika</li>
              <li>Sahile 10 dakika</li>
            </ul>
          </div>
        </template>
      </Accordion>
    </div>

    <div class="example-section">
      <h2>Örnek 2: Props ile Single Item</h2>
      <Accordion
        :items="accordionData"
        :allowMultiple="false"
      />
    </div>

    <div class="example-section">
      <h2>Örnek 3: Basit Kullanım</h2>
      <Accordion title="Basit Accordion">
        <template #header-1>
          <h3>Tek Item Accordion</h3>
        </template>
        <template #content-1>
          <p>Bu basit bir accordion örneğidir. Tek item içerir.</p>
        </template>
      </Accordion>
    </div>

    <div class="example-section">
      <h2>Örnek 4: Dynamic Content</h2>
      <Accordion :allowMultiple="true">
        <template
          v-for="(item, index) in dynamicItems"
          :key="index"
          #[`header-${index+1}`]
        >
          <h3>{{ item.title }}</h3>
        </template>

        <template
          v-for="(item, index) in dynamicItems"
          :key="index"
          #[`content-${index+1}`]
        >
          <div>{{ item.content }}</div>
        </template>
      </Accordion>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Accordion from '@/components/ui/panels/EaAccordion/EaAccordion.vue';

const accordionData = ref([
  {
    title: 'Ürün Özellikleri',
    content: 'Bu bölümde ürünün teknik özellikleri yer almaktadır.'
  },
  {
    title: 'Fiyat ve Teslimat',
    content: 'Fiyat bilgileri ve teslimat seçenekleri burada açıklanmaktadır.'
  },
  {
    title: 'Kullanıcı Yorumları',
    content: 'Müşteri yorumları ve değerlendirmeleri bu bölümde yer alır.'
  }
]);

const dynamicItems = ref([
  { title: 'FAQ 1', content: 'Bu sık sorulan ilk sorunun cevabıdır.' },
  { title: 'FAQ 2', content: 'Bu sık sorulan ikinci sorunun cevabıdır.' },
  { title: 'FAQ 3', content: 'Bu sık sorulan üçüncü sorunun cevabıdır.' },
  { title: 'FAQ 4', content: 'Bu sık sorulan dördüncü sorunun cevabıdır.' }
]);
</script>

<style scoped>
.accordion-page {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.example-section {
  margin-bottom: 40px;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.example-section h2 {
  margin-top: 0;
  color: #333;
  padding-bottom: 8px;

}

.custom-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.custom-header h3 {
  margin: 0;
  color: #333;
}

.custom-content {
  line-height: 1.6;
}

.custom-content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.custom-content li {
  margin: 5px 0;
}
</style>
