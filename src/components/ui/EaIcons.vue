<template>
  <div class="svg-wrapper" ref="svgContainer">
      <i v-html="svgContent" ></i>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, watch } from "vue";

const svgs = import.meta.glob("/src/assets/svg/*.svg", { as: "raw" });

interface IIconPropsType {
  name: string;
  size?: string;
  color?: string;
}
const props = defineProps<IIconPropsType>();

const svgContent = ref<string | null>(null);
const svgContainer = ref<HTMLElement | null>(null);
const size = computed<string | null>(() => props.size || null )

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

watch(()=>props, async() => {
  svgContent.value = null;
  if (props.name && svgs[`/src/assets/svg/${props.name}.svg`]) {
    svgContent.value = await svgs[`/src/assets/svg/${props.name}.svg`]();
    await nextTick();
    updateSvgAttributes();
  }

}, { deep: true, immediate: true });

</script>

<style scoped lang="scss">
svg path{
  @apply w-full;
}
</style>
