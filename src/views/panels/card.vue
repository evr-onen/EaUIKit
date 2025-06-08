<template>
  <div class="card-page flex justify-center items-center h-full">
    <Card class="w-[500px] h-[400px] m-auto" headerClass="bg-red-500" footerClass="bg-blue-500">
      <template #header>
        <h1>Card Header</h1>
      </template>
      <template #default>
        <p>Card Content</p>
      </template>
      <template #footer>
        <h1>Card Footer</h1>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/panels/EaCard/EaCard.vue';
</script>

<style scoped>

</style>
