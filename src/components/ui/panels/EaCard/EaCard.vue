<template>
  <div
    :class="['ea-card', wrapperClass]"
    :data-elevation="elevation || 'small'"
    :data-variant="variant || 'default'"
    :data-size="size || 'medium'"
    :data-hoverable="hoverable"
    :data-clickable="clickable"
    @click="clickable ? $emit('click', $event) : undefined"
  >
    <div
      v-if="$slots.header || title"
      :class="['ea-card-header', headerClass]"
    >
      <slot name="header">
        <h3 v-if="title" :class="titleClass">{{ title }}</h3>
      </slot>
    </div>

    <div :class="['ea-card-content', contentClass]">
      <slot>
        <p v-if="content">{{ content }}</p>
      </slot>
    </div>

    <div
      v-if="$slots.footer || footerText"
      :class="['ea-card-footer', footerClass]"
    >
      <slot name="footer">
        <p v-if="footerText">{{ footerText }}</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  // Content props
  title?: string;
  content?: string;
  footerText?: string;

  // Style props
  wrapperClass?: string;
  headerClass?: string;
  contentClass?: string;
  footerClass?: string;
  titleClass?: string;

  // Layout props
  elevation?: 'none' | 'small' | 'medium' | 'large';
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';

  // Behavior props
  hoverable?: boolean;
  clickable?: boolean;
}>();

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<style scoped>
.ea-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
  overflow: hidden;
}

/* Elevation variants */
.ea-card[data-elevation="none"] {
  box-shadow: none;
}

.ea-card[data-elevation="small"] {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.ea-card[data-elevation="medium"] {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.ea-card[data-elevation="large"] {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Variant styles */
.ea-card[data-variant="outlined"] {
  background-color: transparent;
  border: 2px solid #e0e0e0;
  box-shadow: none;
}

.ea-card[data-variant="filled"] {
  background-color: #f8f9fa;
  border: none;
}

/* Size variants - removed padding from card wrapper */
.ea-card[data-size="small"] {
  /* padding removed - handled by individual sections */
}

.ea-card[data-size="medium"] {
  /* padding removed - handled by individual sections */
}

.ea-card[data-size="large"] {
  /* padding removed - handled by individual sections */
}

/* Hoverable - only when hoverable is true */
.ea-card[data-hoverable="true"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Clickable - cursor pointer but no hover effect unless hoverable is also true */
.ea-card[data-clickable="true"] {
  cursor: pointer;
}

/* Active state for clickable cards */
.ea-card[data-clickable="true"]:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.ea-card-header {
  padding: 16px 16px 0 16px;
}

.ea-card-header h3 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
}

.ea-card-content {
  padding: 16px;
  flex: 1;
}

.ea-card-footer {
  padding: 16px;
  border-top: 1px solid #e9ecef;
  margin-top: auto;
  background-color: #fafbfc;
}

.ea-card-footer p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

/* Size-specific adjustments */
.ea-card[data-size="small"] .ea-card-header {
  padding: 12px 12px 0 12px;
}

.ea-card[data-size="small"] .ea-card-content {
  padding: 12px;
}

.ea-card[data-size="small"] .ea-card-footer {
  padding: 12px;
}

.ea-card[data-size="large"] .ea-card-header {
  padding: 24px 24px 0 24px;
}

.ea-card[data-size="large"] .ea-card-content {
  padding: 24px;
}

.ea-card[data-size="large"] .ea-card-footer {
  padding: 24px;
}
</style>