<template>
  <div class="svg-wrapper" ref="svgContainer">
      <i v-html="svgContent" ></i>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, watch } from "vue";

// Sabit SVG path - tüm projeler için /assets/svg
const svgs = (import.meta as unknown as { glob: (pattern: string, options: { query: string; import: string }) => Record<string, () => Promise<string>> }).glob('/assets/svg/*.svg', {
  query: "?raw",
  import: "default"
});

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

watch(() => props, async () => {
  svgContent.value = null;

  if (props.name) {
    const svgKey = `/assets/svg/${props.name}.svg`;

    try {
      if (svgs[svgKey]) {
        svgContent.value = await svgs[svgKey]();
        await nextTick();
        updateSvgAttributes();
      } else {
        console.warn(`SVG not found: ${svgKey}`);
      }
    } catch {
      console.warn(`Failed to load SVG: ${svgKey}`);
    }
  }
}, { deep: true, immediate: true });
</script>

<style scoped lang="scss">
svg path {
  @apply w-full;
}
</style>
