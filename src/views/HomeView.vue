<template>
  <div class="h-full w-full flex p-8 flex-col gap-4">
    <div class="flex flex-col gap-4">
    </div>
    <div class="overflow-y-auto h-[300px]  ea-scroll-bar">
    </div>
<EaButton size="sm">qweqwe</EaButton>
    <EaTextInput loading size="sm" label="qweqwe" />
  </div>
</template>


<script setup lang="ts">
import EaButton from '@/components/ui/form/EaButton/index.vue';
import EaTextInput from '@/components/ui/form/EaTextInput/index.vue';
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
