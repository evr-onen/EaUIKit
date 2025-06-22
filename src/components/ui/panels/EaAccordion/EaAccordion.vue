<template>
  <div :class="['ea-accordion', wrapperClass]">
    <div
      v-for="(item, index) in accordionItems"
      :key="index"
      :class="['ea-accordion-item', itemClass]"
    >
      <div
        :class="['ea-accordion-header', headerClass, { 'is-open': openItems.includes(index) }]"
        @click="togglePanelHandler(index)"
      >
        <slot
          :name="`header-${index+1}`"
          :item="item"
          :index="index"
          :isOpen="openItems.includes(index)"
          :toggle="() => togglePanelHandler(index)"
        >
          <h3 :class="titleClass">{{ (item as AccordionItem).title || `Item ${index + 1}` }}</h3>
          <span :class="['toggle-icon', toggleIconClass]">{{ openItems.includes(index) ? '−' : '+' }}</span>
        </slot>
      </div>

      <div
        :class="['ea-accordion-content', contentClass, { 'is-open': openItems.includes(index) }]"
      >
        <slot
          :name="`content-${index+1}`"
          :item="item"
          :index="index"
          :isOpen="openItems.includes(index)"
        >
          <p>{{ (item as AccordionItem).content || 'Content here!!!' }}</p>
        </slot>
      </div>
    </div>

    <!-- If no items provided, show default structure -->
    <div v-if="accordionItems.length === 0" :class="['ea-accordion-item', itemClass]">
      <div :class="['ea-accordion-header', headerClass]" @click="togglePanelHandler(0)">
        <slot name="header" :isOpen="openItems.includes(0)">
          <h3 :class="titleClass">{{ title || 'Accordion Item' }}</h3>
        </slot>
      </div>
      <div :class="['ea-accordion-content', contentClass, { 'is-open': openItems.includes(0) }]">
        <slot :isOpen="openItems.includes(0)"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, useSlots } from 'vue';

const props = defineProps({
  title: String,
  items: {
    type: Array,
    default: () => []
  },
  allowMultiple: {
    type: Boolean,
    default: false
  },
  // CSS Class Names
  wrapperClass: {
    type: String,
    default: ''
  },
  itemClass: {
    type: String,
    default: ''
  },
  headerClass: {
    type: String,
    default: ''
  },
  contentClass: {
    type: String,
    default: ''
  },
  titleClass: {
    type: String,
    default: ''
  },
  toggleIconClass: {
    type: String,
    default: ''
  }
});

type AccordionItem = {
  id: number;
  title: string;
  content: string;
}

const slots = useSlots();
const openItems = ref<number[]>([]);

const accordionItems = computed(() => {
  if (props.items && props.items.length > 0) {
    return props.items;
  }

  const slotNames = Object.keys(slots);
  const contentSlots = slotNames.filter(name => name.startsWith('content-'));
  const headerSlots = slotNames.filter(name => name.startsWith('header-'));

  const maxItems = Math.max(
    contentSlots.length,
    headerSlots.length,
    1
  );

  return Array.from({ length: maxItems }, (_, index) => ({
    id: index,
    title: `Item ${index + 1}`,
    content: ''
  }));
});

const togglePanelHandler = (index: number) => {
  if (props.allowMultiple) {
    if (openItems.value.includes(index)) {
      openItems.value = openItems.value.filter(i => i !== index);
    } else {
      openItems.value.push(index);
    }
  } else {
    openItems.value = openItems.value.includes(index) ? [] : [index];
  }
};
</script>

<style scoped>
.ea-accordion {
  width: 100%;
  /* border-radius: 10px; */
  overflow: hidden;
}

.ea-accordion-item {
  border: 1px solid #e0e0e0;
  margin-bottom: 2px;
}

.ea-accordion-item:last-child {
  margin-bottom: 0;
}

.ea-accordion-header {
  padding: 16px;
  background-color: #f8f9fa;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
}

.ea-accordion-header:hover {
  background-color: #e9ecef;
}

.ea-accordion-header.is-open {
  background-color: #e3f2fd;
}

.ea-accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease, opacity 0.2s ease, padding 0.1s ease 0.3s;
  background-color: white;
  opacity: 0;

}

.ea-accordion-content.is-open {
  max-height: 1000px;
  padding: 16px;
  opacity: 1;
  transition: max-height 0.3s ease, opacity 0.2s ease 0.1s, padding 0.1s ease ;
}

.toggle-icon {
  font-size: 18px;
  font-weight: bold;
  color: #666;

}

h3 {
  margin: 0;
  color: #333;
}
</style>