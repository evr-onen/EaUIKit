<template>
  <div class="h-full w-full flex p-8 flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h4 class="text-2xl font-bold">Ea Design System</h4>
      <p class="text-gray-500">Ea Design System is a design system for building user interfaces. It is a collection of components, styles, and patterns that can be used to create a consistent and reusable design.</p>
    </div>
    <div class="overflow-y-auto h-[300px]  ea-scroll-bar">
      <h4>Yapilacaklar</h4>
      <p>* Sayfa sayfa proplari tet etmek ve fixlemek lazim Ayrica demo sayfasi yoksa eklemeli tr ise en ye cevirmeliyiz</p>
      <p>* Sayfalardaki demolar tek bir type olacak. Birbirinden tutatsiz sayfa olmamasi lazim</p>
      <p>* code lari temize cekmek gerekiyor</p>
      <p>* Library yapip icons componenti test edilmeli. svg lerin tutulacagi yeri env de belirtmeliyiz. Yada bi config dosyasi yarrattirip oraya yazdirmaliyiz.</p>
      <p>* Componentlerdeki classnamesleri yazmaliyiz. buna gore style dosyalarini kullanmaliyiz. tum bu css dosyalarini bir yerde toplamaliyiz. Cunku bunlari library olarak eklendigimiz projeye aktarip bu cssleri overright etmesi lazim. Boylelikle default bir style yapisi olup styles oalrak istedigi cssleri yazma ozgurlugunu vermis oluruz </p>
    </div>
    <EaIcons name="bars" class="text-red-100  border" size="100px" />
    <EaButton class="w-[200px]" label="Button Example" left-icon="bars" :loading="false">

    </EaButton>
  </div>
</template>


<script setup lang="ts">
import EaIcons from '@/components/ui/EaIcons.vue';
import EaButton from '@/components/ui/form/EaButton/index.vue';
// import Icon from '@/components/ui/inputs/index.vue';

</script>

<style>
.ea-scroll-bar {
  /* Firefox için */
  /* scrollbar-width: thin;
  scrollbar-color: #6366f1 #e5e7eb; */

  /* Internet Explorer için */
  -ms-overflow-style: auto;

  /* Webkit tabanlı tarayıcılar (Chrome, Safari, Edge) için */
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #6366f1;
    border-radius: 4px;
  }

  /* &::-webkit-scrollbar-thumb:hover {
    background: #4f46e5;
  } */

  /* &::-webkit-scrollbar-corner {
    background: #e5e7eb;
  } */
}
</style>
