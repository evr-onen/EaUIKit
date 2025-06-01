<template>
  <div class="h-full w-full flex p-8 flex-col gap-4">
    <div class="flex flex-col gap-4">
      <h4 class="text-2xl font-bold">Ea Design System</h4>
      <p class="text-gray-500">Ea Design System is a design system for building user interfaces. It is a collection of components, styles, and patterns that can be used to create a consistent and reusable design.</p>
    </div>
    <div class="overflow-y-auto h-[300px]  ea-scroll-bar">
      <h4>Yapilacaklar</h4>
      <p>Tum form elementleri</p>
      <p>- checkbox</p>
      <p>- Radio Buttons</p>
      <p>- Upload Files & Images</p>
      <p>- Color Picker</p>
      <p>- Time Picker</p>
      <p>- Date Picker</p>
      <p>- DateTime Picker</p>
      <p>Dialog</p>
      <p>Accordion</p>
      <p>Tabs</p>
      <p>Drawer</p>
      <p>popup</p>
      <p>Toast</p>
      <p>Alert</p>
      <p>Badge</p>
      <p>V-Directive (animate on Scroll)</p>
      <p>Card</p>
      <p>Menu</p>
    </div>
    <EaIcons name="bars" class="text-red-100  border" size="100px" />
  </div>
</template>


<script setup lang="ts">
import EaIcons from '@/components/ui/EaIcons.vue';

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
