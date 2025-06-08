<template>
  <div class="ea-card">
    <div class="ea-card-header" :class="headerClass" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div class="ea-card-content" :class="contentClass">
      <slot />
    </div>
    <div class="ea-card-footer" :class="footerClass" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  footerClass?: string;
  headerClass?: string;
  contentClass?: string;
}>();
</script>

<style scoped>
.ea-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  border: 0.5px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}
.ea-card-header {
  padding: 16px;
  border-radius: 8px;
}
.ea-card-content {
  padding: 16px;
}
.ea-card-footer {
  padding: 16px;
  border-radius: 8px;
}
</style>