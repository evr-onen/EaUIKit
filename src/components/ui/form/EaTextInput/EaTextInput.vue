<template>
  <div class="ea-textinput" :class="{ 'ea-textinput--focus': isFocus, 'ea-textinput--invalid': isInvalid }">
    <small class="ea-textinput__label" :class="classLabel" >{{ label }}</small>
    <div class="ea-textinput__input-container flex items-center" :class="[classInputContainer, `size-${size}`]" >
      <Icon :name="prefixIcon" class="bg-white" :class="prefixIcon" size="20px" />
      <input
        class="ea-textinput__input"
        :class="classInput"
        type="text"
        :placeholder="placeholder"
        @focus="isFocus = true"
        @blur="isFocus = false"
      >
      <Icon :name="suffixIcon" class="bg-white" :class="suffixIcon" size="20px" />
    </div>
  </div>
</template>

<script setup lang="ts">
import './textinput.style.scss';
import { ref } from 'vue';
import type { ITextinputProps } from './textinput.types';
import Icon from '@/components/ui/EaIcons.vue';

withDefaults(defineProps<ITextinputProps>(), {
  placeholder: 'Placeholder',
  size: 'md',
  type: 'text',
  prefixIcon: '',
  suffixIcon: '',
  isInvalid: false,
})

const isFocus = ref(false);

</script>

<style scoped lang="scss">



</style>
