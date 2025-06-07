<template>
  <div class="h-[2500px] w-full flex flex-col justify-between items-center p-4">
    <div class="flex gap-2">
      <div class="w-80 flex flex-col gap-2">
        <EACheckbox label="Label Example" v-model="check1" size="sm"/>
        <EACheckbox label="Label Example" v-model="check1" />
        <EACheckbox label="Label Example" v-model="check1" size="lg"/>
        <p>Value: {{ check1 }}</p>
      </div>
      <div class="w-80">
        <EACheckbox label="Label Example" v-model="check2" :disabled="true" />
        <p>Value: {{ check2 }}</p>
      </div>
      <div class="w-80">
        <EACheckbox label="Label Example" v-model="check3" :error="true" />
        <p>Value: {{ check3 }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EACheckbox from '@/components/ui/form/EaCheckbox/EaCheckbox.vue';
import { ref } from 'vue';

const check1 = ref(false);
const check2 = ref(false);
const check3 = ref(false);
</script>

<style scoped>

</style>
