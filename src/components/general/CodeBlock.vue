<template>
  <div class="code-block-wrapper">
                <div class="code-block-header">
      <span class="code-block-title">{{ title || 'Code Example' }}</span>
      <div class="code-block-actions">
        <button
          class="code-action-btn"
          @click="toggleCode"
          :title="isVisible ? 'Hide Code' : 'Show Code'"
        >
        <ChavronDown :class="{ 'rotate-180': isVisible }" class="size-4"/>
          {{ isVisible ? 'Hide' : 'Show' }}
        </button>
        <button
          class="code-action-btn copy-btn"
          @click="copyCode"
          :title="copyText"
        >
          <Copy v-if="copied" class="size-4"/>
          <Check v-else class="size-4"/>
          {{ copied ? 'Copied' : 'Copy' }}
        </button>
      </div>
    </div>

    <div v-show="isVisible" class="code-block-content">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ChavronDown from '@/assets/icons/chavron-down.vue'
import Copy from '@/assets/icons/copy.vue'
import Check from '@/assets/icons/check.vue'

interface Props {
  code: string
  title?: string
  language?: string
  defaultVisible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  language: 'vue',
  defaultVisible: true
})

const isVisible = ref(props.defaultVisible)
const copied = ref(false)

const copyText = computed(() => copied.value ? 'Copied!' : 'Copy')

const toggleCode = () => {
  isVisible.value = !isVisible.value
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}
</script>

<style scoped lang="scss">
.code-block-wrapper {
  background: #475569;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.code-block-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1.25rem;
  background: #475569;
  border-bottom: 1px solid #64748b;
}

.code-block-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #f1f5f9;
}

.code-block-actions {
  display: flex;
  gap: 0.75rem;
}

.code-action-btn {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.875rem;
  background: #64748b;
  border: none;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #f1f5f9;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #7c8da1;
    transform: translateY(-1px);
  }

  &.copy-btn {
    &:hover {
      background: #3b82f6;
    }

    &:active {
      background: #2563eb;
      transform: translateY(0);
    }
  }

  .svg-wrapper {
    display: flex;
    align-items: center;
    opacity: 0.9;
    transition: transform 0.2s ease;

    &.rotate-180 {
      transform: rotate(180deg);
    }
  }
}

.code-block-content {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1.25rem;
  overflow-x: auto;

  pre {
    margin: 0;
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    font-size: 0.875rem;
    line-height: 1.7;

    code {
      color: inherit;
      background: none;
      padding: 0;
      border-radius: 0;
    }
  }
}

@media (max-width: 768px) {
  .code-block-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .code-block-actions {
    width: 100%;
    justify-content: flex-end;
  }

  .code-action-btn {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
  }
}
</style>
