<template>
    <router-link
      :to="item.path"
      class="flex items-center justify-start hover:text-white gap-2  rounded-lg p-2 text-[#898fa9] duration-500"
      :class="{ 'font-[500] text-[#FFF]  hover:text-white/90': isActive }"
    >
      <EaIcons v-if="item.icon || linkType === 'child'" :name="linkType === 'child' ? 'dot' : item.icon" />
      <span >{{ item.label }}</span>
    </router-link>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import EaIcons from '@/components/ui/EaIcons.vue';

const props = defineProps<{
  item: Record<string, any>
  linkType: 'parent' | 'child' | 'regular'
}>()

const route = useRoute();
const isActive = ref(false);

watch(()=>route.path, (newPath) => {
  isActive.value = newPath === props.item.path;
}, { immediate: true });



</script>

<style scoped>

</style>