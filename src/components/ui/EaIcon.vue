<template>
  <div class="svg-wrapper" ref="svgContainer">
      <i v-html="svgContent" ></i>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, watch } from "vue";

// Environment variable'dan SVG path'ini al, yoksa default kullan
const svgBasePath = import.meta.env.VITE_SVG_PATH || '/src/assets/svg';

// Dynamic import için glob pattern oluştur
const svgs = (import.meta as unknown as { glob: (pattern: string, options: { query: string; import: string }) => Record<string, () => Promise<string>> }).glob(`${svgBasePath}/*.svg`, { 
  query: "?raw", 
  import: "default" 
});

interface IIconPropsType {
  name: string;
  size?: string;
  color?: string;
  // Opsiyonel olarak component seviyesinde de path belirtilebilir
  svgPath?: string;
}

const props = defineProps<IIconPropsType>();

const svgContent = ref<string | null>(null);
const svgContainer = ref<HTMLElement | null>(null);
const size = computed<string | null>(() => props.size || null);

// SVG path'ini belirle (prop > env > default)
const getSvgPath = () => {
  return props.svgPath || svgBasePath;
};

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
    const currentSvgPath = getSvgPath();
    const svgKey = `${currentSvgPath}/${props.name}.svg`;

    try {
      // Eğer custom path varsa, yeni glob pattern oluştur
      if (props.svgPath && props.svgPath !== svgBasePath) {
        const customSvgs = (import.meta as any).glob(`${props.svgPath}/*.svg`, {
          query: "?raw",
          import: "default"
        }) as Record<string, () => Promise<string>>;

        if (customSvgs[svgKey]) {
          svgContent.value = await customSvgs[svgKey]();
        }
      } else {
        // Default glob pattern kullan
        if (svgs[svgKey]) {
          svgContent.value = await svgs[svgKey]();
        }
      }

      await nextTick();
      updateSvgAttributes();
    } catch (error) {
      console.warn(`SVG not found: ${svgKey}`);
    }
  }
}, { deep: true, immediate: true });
</script>

<style scoped lang="scss">
svg path {
  @apply w-full;
}
</style>
