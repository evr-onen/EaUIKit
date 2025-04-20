import { ref } from "vue";
import { computed } from "vue";
import { onMounted, onUnmounted } from "vue";

export const useBreakpoint = () => {
  const windowWidth = ref(window.innerWidth);
  const breakpoint = computed(() => {
    if (windowWidth.value < 640) return 'sm';
    if (windowWidth.value < 768) return 'md';
    if (windowWidth.value < 1024) return 'lg';
    if (windowWidth.value < 1280) return 'xl';
    return '2xl';
  });

  const updateWidth = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => window.addEventListener('resize', updateWidth));
  onUnmounted(() => window.removeEventListener('resize', updateWidth));

  return {
    windowWidth,
    breakpoint
  };
};