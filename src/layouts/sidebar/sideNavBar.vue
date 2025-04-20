<template>
  <div class="w-full h-screen flex  bg-cyan-50">

    <div class="sidenav lg:w-[250px] w-0 overflow-hidden lg:overflow-auto bg-[#1c2742] text-white/80 duration-500" :class="{ '!w-[250px] overflow-auto': isOpenMenu, '!w-0 overflow-hidden': !isOpenMenu }">
      <div class="sidenav-header p-4 flex items-center justify-center">
        <EaIcon class="size-24 min-w-24 min-h-24 duration-200" :class="{ 'opacity-0': !isOpenMenu }"/>
      </div>
      <div
        v-for="(item, index) in ApplicationContentMenu()"
        :key="index"
        class="flex flex-col gap-1 p-1 px-4"
      >
        <NavItem :item="item" />
      </div>
    </div>
    <div class="content w-full flex flex-col items-center justify-center gap-2">
      <div class="flex items-center justify-start w-full h-[56px] p-2 bg-white shadow-md">
        <div class="menu-icon " @click="toggleMenu"><BarsIcon /></div>
      </div>
      <div class="bg-[#FFF] rounded-lg shadow-md h-[calc(100vh-2rem)] w-[calc(100vw-270px)] overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { useBreakpoint } from '@/composables/useBreakpoint';
import { ApplicationContentMenu } from './ApplicationMenu';
import NavItem from './NavItem.vue';
import EaIcon from  '@/components/icons/Logo-icon.vue'
import BarsIcon from '@/components/icons/BarsIcon.vue';

const { breakpoint } = useBreakpoint();

const isOpenMenu = ref();

onBeforeMount(()=>{
  if(breakpoint.value === 'lg' || breakpoint.value === 'xl' || breakpoint.value === '2xl'){
    isOpenMenu.value = true;
  }else{
    isOpenMenu.value = false;
  }
})

const toggleMenu = () => {
  isOpenMenu.value = !isOpenMenu.value;
}


</script>


<style lang="scss" scoped>
.menu-icon {
  @apply  text-2xl cursor-pointer size-10 flex items-center justify-center hover:bg-black/10 rounded-full;
}

</style>
