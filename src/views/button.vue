<template>
  <div class="h-[2500px] w-full flex flex-col justify-between items-center pt-4">
    <div class="flex gap-2 border" >
      <div class="w-80 ">
        <EaButton  label="Large Button" bg-colour="#ccc" text-colour="#fff" size="large" >
          <template #prefixIcon>
            <IconCross class="size-[1rem]"/>
          </template>
          <template #suffixIcon>
            <IconCross class="size-[1rem]"/>
          </template>
        </EaButton>
      </div>
      <div class="w-80">
        <EaButton  label="Normal Button" >
          <template #prefixIcon>
            <IconCross class="size-[1rem]"/>
          </template>
          <template #suffixIcon>
            <IconCross class="size-[1rem]"/>
          </template>
        </EaButton>
      </div>
      <div class="w-80">
        <EaButton  label="Small Button" size="small" >
          <template #prefixIcon>
            <IconCross class="size-[1rem]"/>
          </template>
          <template #suffixIcon>
            <IconCross class="size-[1rem]"/>
          </template>
        </EaButton>
      </div>
    </div>



  </div>
</template>

<script setup lang="ts">
import IconCross from '@/components/icons/icon-cross.vue';
import EaButton from '@/components/ui/form/EaButton/EaButton.vue';
</script>

<style scoped></style>
