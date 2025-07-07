<template>
  <div class="h-full w-full flex p-8 flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h4 class="text-2xl font-bold">Ea Design System</h4>
      <p class="text-gray-500">Ea Design System is a design system for building user interfaces. It is a collection of components, styles, and patterns that can be used to create a consistent and reusable design.</p>
    </div>
    <div class="overflow-y-auto h-[300px]  ea-scroll-bar">
      <h4>Yapilacaklar</h4>
      <p>* entegre edilen projeye style dosyalarini kaydedip overright etmesini sagla.</p>
    </div>
    <EaIcon name="bars" class="text-red-500  border" size="100px" />


  </div>
</template>


<script setup lang="ts">
import EaIcon from '@/components/ui/EaIcon.vue';
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
