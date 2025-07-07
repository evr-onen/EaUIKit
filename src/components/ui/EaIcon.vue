<template>
  <div class="svg-wrapper" ref="svgContainer">
      <i v-html="svgContent" ></i>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, watch } from "vue";

// İki farklı path'den SVG dosyalarını import etmek için
const svgsSrc = import.meta.glob('/src/assets/svg/*.svg', {
  query: '?raw',
  import: 'default'
});

const svgsAssets = import.meta.glob('/assets/svg/*.svg', {
  query: '?raw',
  import: 'default'
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

const loadSvg = async () => {
  svgContent.value = null;

  if (props.name) {
    // Önce /src/assets/svg/ path'ini dene
    const srcPath = `/src/assets/svg/${props.name}.svg`;
    // Sonra /assets/svg/ path'ini dene
    const assetsPath = `/assets/svg/${props.name}.svg`;

    try {
      let svgModule: string | null = null;

      // İlk önce src path'ini kontrol et
      if (svgsSrc[srcPath]) {
        svgModule = await svgsSrc[srcPath]() as string;
      }
      // Eğer src path'de bulamazsa assets path'ini dene
      else if (svgsAssets[assetsPath]) {
        svgModule = await svgsAssets[assetsPath]() as string;
      }

      if (svgModule) {
        svgContent.value = svgModule;
        await nextTick();
        updateSvgAttributes();
      } else {
        console.warn(`SVG not found: ${props.name}.svg`);
        console.warn('Available SVGs in /src/assets/svg/:', Object.keys(svgsSrc));
        console.warn('Available SVGs in /assets/svg/:', Object.keys(svgsAssets));
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
