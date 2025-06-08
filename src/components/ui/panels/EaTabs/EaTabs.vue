<template>
  <div class="ea-tabs">
    <!-- Tab Headers -->
    <div class="ea-tabs__header">
      <div class="ea-tabs__nav">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.id"
          class="ea-tabs__tab"
          :class="[{ 'ea-tabs__tab--active': activeTab === index }, tab.tabClass]"
          @click="setActiveTab(index)"
          :disabled="tab.disabled"
        >
          <EaIcons v-if="tab.icon" :name="tab.icon" class="ea-tabs__icon h-full " :class="tab.iconClass" />
          <span class="ea-tabs__label">{{ tab.label }}</span>
          <span v-if="tab.badge" class="ea-tabs__badge">{{ tab.badge }}</span>
        </button>
      </div>
      <!-- Active tab indicator -->
      <div class="ea-tabs__indicator" :style="indicatorStyle"></div>
    </div>

    <!-- Tab Content -->
    <div class="ea-tabs__content">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.id"
        class="ea-tabs__panel"
        :class="{ 'ea-tabs__panel--active': activeTab === index }"
        v-show="activeTab === index"
      >
        <slot :name="tab.id" :tab="tab" :index="index">
          <div v-html="tab.content"></div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue'
import EaIcons from '@/components/ui/EaIcons.vue'

// Types
interface Tab {
  id: string
  label: string
  content?: string
  icon?: string
  badge?: string | number
  disabled?: boolean
  iconClass?: string
  tabClass?: string
}

interface Props {
  tabs: Tab[]
  defaultTab?: number
  variant?: 'default' | 'pills' | 'underline'
  size?: 'small' | 'medium' | 'large'
}

// Props
const props = withDefaults(defineProps<Props>(), {
  defaultTab: 0,
  variant: 'default',
  size: 'medium'
})

// Emits
const emit = defineEmits<{
  'tab-change': [index: number, tab: Tab]
}>()

// Reactive state
const activeTab = ref(props.defaultTab)
const tabRefs = ref<HTMLElement[]>([])

// Computed
const indicatorStyle = computed(() => {
  if (!tabRefs.value[activeTab.value]) return {}

  const activeTabEl = tabRefs.value[activeTab.value]
  const tabsNav = activeTabEl.parentElement

  if (!tabsNav) return {}

  const tabsNavRect = tabsNav.getBoundingClientRect()
  const activeTabRect = activeTabEl.getBoundingClientRect()

  return {
    left: `${activeTabRect.left - tabsNavRect.left}px`,
    width: `${activeTabRect.width}px`
  }
})

// Methods
const setActiveTab = (index: number) => {
  if (props.tabs[index]?.disabled) return

  activeTab.value = index
  emit('tab-change', index, props.tabs[index])

  // Update indicator position
  nextTick(() => {
    updateIndicator()
  })
}

const updateIndicator = () => {
  // Force reactivity update for indicator
  activeTab.value = activeTab.value
}

// Lifecycle
onMounted(() => {
  updateIndicator()
})
</script>

<style scoped lang="scss">
.ea-tabs {
  width: 100%;

  &__header {
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 1rem;
  }

  &__nav {
    display: flex;
    gap: 0.5rem;
    position: relative;
  }

  &__tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 500;
    color: #6b7280;
    transition: all 0.2s ease;
    border-radius: 0.375rem 0.375rem 0 0;
    white-space: nowrap;

    &:hover:not(:disabled) {
      color: #374151;
      background-color: #f9fafb;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &--active {
      color: #3b82f6;
      font-weight: 600;
    }
  }

  &__icon {
    flex-shrink: 0;
  }

  &__label {
    flex: 1;
  }

  &__badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.25rem;
    height: 1.25rem;
    padding: 0 0.375rem;
    font-size: 0.75rem;
    font-weight: 600;
    background-color: #ef4444;
    color: white;
    border-radius: 0.625rem;
  }

  &__indicator {
    position: absolute;
    bottom: -1px;
    height: 2px;
    background-color: #3b82f6;
    transition: all 0.3s ease;
    border-radius: 1px;
  }

  &__content {
    min-height: 200px;
  }

  &__panel {
    animation: fadeIn 0.3s ease;

    &--active {
      display: block;
    }
  }
}

// Variants
.ea-tabs--pills {
  .ea-tabs__header {
    border-bottom: none;
    margin-bottom: 1rem;
  }

  .ea-tabs__tab {
    border-radius: 0.5rem;

    &--active {
      background-color: #3b82f6;
      color: white;

      &:hover {
        background-color: #3b82f6;
        color: white;
      }
    }
  }

  .ea-tabs__indicator {
    display: none;
  }
}

.ea-tabs--underline {
  .ea-tabs__header {
    border-bottom: 1px solid #e5e5e5;
  }

  .ea-tabs__tab {
    border-radius: 0;
    padding-bottom: 0.75rem;

    &:hover:not(:disabled) {
      background-color: transparent;
    }

    &--active {
      border-bottom: 2px solid #3b82f6;
    }
  }

  .ea-tabs__indicator {
    display: none;
  }
}

// Sizes
.ea-tabs--small {
  .ea-tabs__tab {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
}

.ea-tabs--large {
  .ea-tabs__tab {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
}

// Animations
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Responsive
@media (max-width: 768px) {
  .ea-tabs {
    &__nav {
      flex-wrap: wrap;
      gap: 0.25rem;
    }

    &__tab {
      flex: 1;
      min-width: 0;
      justify-content: center;
      padding: 0.5rem 0.75rem;

      .ea-tabs__label {
        text-align: center;
      }
    }
  }
}

@media (max-width: 480px) {
  .ea-tabs {
    &__nav {
      display: block;
    }

    &__tab {
      width: 100%;
      text-align: left;
      border-radius: 0;
      border-bottom: 1px solid #e5e5e5;

      &:last-child {
        border-bottom: none;
      }
    }

    &__indicator {
      display: none;
    }
  }
}
</style>
