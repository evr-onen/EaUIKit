<template>
  <div class="svg-wrapper" ref="svgContainer">
      <i v-html="svgContent" ></i>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, watch } from "vue";

interface IIconPropsType {
  name: string;
  size?: string;
  color?: string;
}

const props = defineProps<IIconPropsType>();

const svgContent = ref<string | null>(null);
const svgContainer = ref<HTMLElement | null>(null);
const size = computed<string | null>(() => props.size || null);

const updateSvgAttributes = () => {
  const svgElement = svgContainer.value?.querySelector("svg");
  if (svgElement) {
    if (props.size) {
      svgElement.setAttribute("width", size.value!);
      svgElement.setAttribute("height", size.value!);
    }
    if (props.color) {
      svgElement.setAttribute("fill", props.color);
    }
  }
};

const loadSvg = async () => {
  svgContent.value = null;

  if (props.name) {
    try {
      // Dynamic import using fetch API
      const response = await fetch(`/src/assets/svg/${props.name}.svg`);
      if (response.ok) {
        svgContent.value = await response.text();
        await nextTick();
        updateSvgAttributes();
      } else {
        // Fallback path
        const fallbackResponse = await fetch(`/assets/svg/${props.name}.svg`);
        if (fallbackResponse.ok) {
          svgContent.value = await fallbackResponse.text();
          await nextTick();
          updateSvgAttributes();
        } else {
          console.warn(`SVG not found: ${props.name}.svg`);
        }
      }
    } catch (error) {
      console.error(`Failed to load SVG: ${props.name}.svg`, error);
    }
  }
};

watch(() => props, loadSvg, { deep: true, immediate: true });
</script>

<style scoped lang="scss">
.svg-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;

    path {
      width: 100%;
    }
  }
}
</style>
