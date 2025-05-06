<template>
  <div v-if="'path' in item || (item && item.path)">
    <NavLinkItem :item="item" linkType="regular"/>
  </div>
  <div v-else>
    <div
      class="flex items-center justify-between hover:text-white   rounded-lg p-2 text-[#898fa9] duration-500 cursor-pointer"
      :class="{ 'font-[500] text-[#FFF] hover:text-white/90': isActive }"
      @click="toggleOpen"
    >

      <span class="text-nowrap flex items-center gap-2">
        <EaIcons v-if="item.icon" :name="item.icon" class="w-6 h-6 "/>
        <span>{{ item.label }}</span>
      </span>
      <ChevronDownIcon v-if="item.children.length > 0" class="duration-500" :class="{ 'rotate-180': isOpen }" />
      </div>
    <div class="max-h-[0px] overflow-hidden duration-500" :class="{ 'max-h-[1550px]': isOpen }" >
      <NavLinkItem v-for="child in item.children" class="pl-7 text-nowrap" :key="child.label" :item="child" linkType="child"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import EaIcons from '@/components/ui/EaIcons.vue';
import ChevronDownIcon from '@/components/icons/chavron-down.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavLinkItem from './NavLinkItem.vue';

//initialize
const props = defineProps<{
  item: Record<string, any>
}>()

//hooks
const route = useRoute();

//vars
const isActive = ref(false);
const isOpen = ref(false);

//handlers
const toggleOpen = () => isOpen.value = !isOpen.value;

//lifecycles
watch(()=>route.path, (newPath) => {
  if(props.item.children){
    isActive.value = props.item.children.some((child: any) => {
      return child.path === newPath
    });
    isOpen.value = isActive.value;
  }else{
    isActive.value = newPath === props.item.path;
  }
}, { immediate: true });

</script>

<style scoped>

</style>
