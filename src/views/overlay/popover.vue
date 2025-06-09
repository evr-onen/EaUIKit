<template>
  <div class="popover-demo">
    <div class="demo-header">
      <h1>EaPopover Component Demo</h1>
      <p>Comprehensive examples showcasing the EaPopover component functionality</p>
    </div>

    <!-- Basic Examples -->
    <section class="demo-section">
      <h2>Basic Usage</h2>

      <div class="demo-grid">
        <!-- Click Trigger -->
        <div class="demo-item">
          <h3>Click Trigger (Default)</h3>
          <EaPopover>
            <template #trigger>
              <button class="demo-button">Click to open</button>
            </template>
            <template #content>
              <div class="popover-content">
                <h4>Popover Title</h4>
                <p>This is a basic popover content that appears when you click the trigger button.</p>
              </div>
            </template>
          </EaPopover>
        </div>

        <!-- Hover Trigger -->
        <div class="demo-item">
          <h3>Hover Trigger</h3>
          <EaPopover trigger="hover">
            <template #trigger>
              <button class="demo-button">Hover to open</button>
            </template>
            <template #content>
              <div class="popover-content">
                <h4>Hover Popover</h4>
                <p>This popover appears on hover and has a slight delay for better UX.</p>
              </div>
            </template>
          </EaPopover>
        </div>
      </div>
    </section>

    <!-- Placement Examples -->
    <section class="demo-section">
      <h2>Placement Options</h2>

      <div class="placement-demo">
        <div class="placement-grid">
          <!-- Top placements -->
          <div class="placement-row">
            <EaPopover placement="top-start">
              <template #trigger>
                <button class="demo-button">Top Start</button>
              </template>
              <template #content>
                <div class="popover-content">Top Start Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="top">
              <template #trigger>
                <button class="demo-button">Top Center</button>
              </template>
              <template #content>
                <div class="popover-content">Top Center Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="top-end">
              <template #trigger>
                <button class="demo-button">Top End</button>
              </template>
              <template #content>
                <div class="popover-content">Top End Placement</div>
              </template>
            </EaPopover>
          </div>

          <!-- Middle placements -->
          <div class="placement-row">
            <EaPopover placement="left">
              <template #trigger>
                <button class="demo-button">Left</button>
              </template>
              <template #content>
                <div class="popover-content">Left Placement</div>
              </template>
            </EaPopover>

            <div class="placeholder">Center</div>

            <EaPopover placement="right">
              <template #trigger>
                <button class="demo-button">Right</button>
              </template>
              <template #content>
                <div class="popover-content">Right Placement</div>
              </template>
            </EaPopover>
          </div>

          <!-- Bottom placements -->
          <div class="placement-row">
            <EaPopover placement="bottom-start">
              <template #trigger>
                <button class="demo-button">Bottom Start</button>
              </template>
              <template #content>
                <div class="popover-content">Bottom Start Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="bottom">
              <template #trigger>
                <button class="demo-button">Bottom Center</button>
              </template>
              <template #content>
                <div class="popover-content">Bottom Center Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="bottom-end">
              <template #trigger>
                <button class="demo-button">Bottom End</button>
              </template>
              <template #content>
                <div class="popover-content">Bottom End Placement</div>
              </template>
            </EaPopover>
          </div>
        </div>
      </div>
    </section>

    <!-- Advanced Examples -->
    <section class="demo-section">
      <h2>Advanced Examples</h2>

      <div class="demo-grid">
        <!-- Without Arrow -->
        <div class="demo-item">
          <h3>Without Arrow</h3>
          <EaPopover :arrow="false">
            <template #trigger>
              <button class="demo-button">No Arrow</button>
            </template>
            <template #content>
              <div class="popover-content">
                <p>This popover doesn't have an arrow pointer.</p>
              </div>
            </template>
          </EaPopover>
        </div>

        <!-- Custom Width -->
        <div class="demo-item">
          <h3>Custom Width</h3>
          <EaPopover width="400px">
            <template #trigger>
              <button class="demo-button">Wide Popover</button>
            </template>
            <template #content>
              <div class="popover-content">
                <h4>Wide Content</h4>
                <p>This popover has a custom width of 400px to accommodate more content. You can set width using pixels, percentages, or other CSS units.</p>
              </div>
            </template>
          </EaPopover>
        </div>

        <!-- With Delay -->
        <div class="demo-item">
          <h3>With Delays</h3>
          <EaPopover trigger="hover" :show-delay="500" :hide-delay="300">
            <template #trigger>
              <button class="demo-button">Delayed Hover</button>
            </template>
            <template #content>
              <div class="popover-content">
                <p>This popover has show delay (500ms) and hide delay (300ms).</p>
              </div>
            </template>
          </EaPopover>
        </div>

        <!-- Disabled -->
        <div class="demo-item">
          <h3>Disabled State</h3>
          <EaPopover :disabled="true">
            <template #trigger>
              <button class="demo-button demo-button--disabled">Disabled</button>
            </template>
            <template #content>
              <div class="popover-content">
                <p>This won't show because popover is disabled.</p>
              </div>
            </template>
          </EaPopover>
        </div>

        <!-- No Close on Scroll -->
        <div class="demo-item">
          <h3>No Close on Scroll</h3>
          <EaPopover :close-on-scroll="false">
            <template #trigger>
              <button class="demo-button">Stays on Scroll</button>
            </template>
            <template #content>
              <div class="popover-content">
                <p>This popover stays open when you scroll. Try scrolling the page!</p>
                <small>Note: Position updates automatically</small>
              </div>
            </template>
          </EaPopover>
        </div>
      </div>
    </section>

    <!-- Interactive Content -->
    <section class="demo-section">
      <h2>Interactive Content</h2>

      <div class="demo-grid">
        <!-- Form Content -->
        <div class="demo-item">
          <h3>Form Content</h3>
          <EaPopover width="300px" placement="bottom-start">
            <template #trigger>
              <button class="demo-button">User Settings</button>
            </template>
            <template #content="{ hide }">
              <div class="popover-content">
                <h4>Quick Settings</h4>
                <form @submit.prevent="handleFormSubmit(hide)" class="popover-form">
                  <div class="form-group">
                    <label>Username:</label>
                    <input v-model="formData.username" type="text" class="form-input" />
                  </div>
                  <div class="form-group">
                    <label>Email:</label>
                    <input v-model="formData.email" type="email" class="form-input" />
                  </div>
                  <div class="form-actions">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="button" @click="hide" class="btn btn-secondary">Cancel</button>
                  </div>
                </form>
              </div>
            </template>
          </EaPopover>
        </div>

        <!-- Menu Content -->
        <div class="demo-item">
          <h3>Menu Content</h3>
          <EaPopover placement="bottom-start" width="200px">
            <template #trigger>
              <button class="demo-button">Actions Menu</button>
            </template>
            <template #content="{ hide }">
              <div class="popover-menu">
                <div class="menu-item" @click="handleMenuAction('edit', hide)">
                  <span class="menu-icon">✏️</span>
                  Edit
                </div>
                <div class="menu-item" @click="handleMenuAction('copy', hide)">
                  <span class="menu-icon">📋</span>
                  Copy
                </div>
                <div class="menu-item" @click="handleMenuAction('delete', hide)">
                  <span class="menu-icon">🗑️</span>
                  Delete
                </div>
              </div>
            </template>
          </EaPopover>
        </div>
      </div>
    </section>

    <!-- Programmatic Control -->
    <section class="demo-section">
      <h2>Programmatic Control</h2>

      <div class="demo-item">
        <h3>External Controls</h3>
        <div class="control-demo">
          <EaPopover ref="controlledPopover">
            <template #trigger>
              <button class="demo-button">Controlled Popover</button>
            </template>
            <template #content>
              <div class="popover-content">
                <h4>Programmatically Controlled</h4>
                <p>This popover can be controlled via external buttons.</p>
                <p>Status: {{ controlledPopover?.isVisible ? 'Open' : 'Closed' }}</p>
              </div>
            </template>
          </EaPopover>

          <div class="control-buttons">
            <button @click="controlledPopover?.show()" class="btn btn-success">Show</button>
            <button @click="controlledPopover?.hide()" class="btn btn-danger">Hide</button>
            <button @click="controlledPopover?.toggle()" class="btn btn-info">Toggle</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Code Examples -->
    <section class="demo-section">
      <h2>Code Examples</h2>

      <div class="code-examples">
        <div class="code-example">
          <h3>Basic Usage</h3>
          <pre><code>&lt;EaPopover&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;Click me&lt;/button&gt;
  &lt;/template&gt;
  &lt;template #content&gt;
    &lt;div&gt;Popover content&lt;/div&gt;
  &lt;/template&gt;
&lt;/EaPopover&gt;</code></pre>
        </div>

        <div class="code-example">
          <h3>With Props</h3>
          <pre><code>&lt;EaPopover
  trigger="hover"
  placement="top"
  :show-delay="300"
  :arrow="false"
  :close-on-scroll="false"
  width="300px"
&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;Hover me&lt;/button&gt;
  &lt;/template&gt;
  &lt;template #content="{ hide }"&gt;
    &lt;div&gt;
      &lt;p&gt;Content with close action&lt;/p&gt;
      &lt;button @click="hide"&gt;Close&lt;/button&gt;
    &lt;/div&gt;
  &lt;/template&gt;
&lt;/EaPopover&gt;</code></pre>
        </div>

        <div class="code-example">
          <h3>Programmatic Control</h3>
          <pre><code>&lt;EaPopover ref="popoverRef"&gt;
  &lt;template #trigger&gt;
    &lt;button&gt;Controlled&lt;/button&gt;
  &lt;/template&gt;
  &lt;template #content&gt;
    &lt;div&gt;Controlled content&lt;/div&gt;
  &lt;/template&gt;
&lt;/EaPopover&gt;

&lt;button @click="popoverRef?.show()"&gt;Show&lt;/button&gt;
&lt;button @click="popoverRef?.hide()"&gt;Hide&lt;/button&gt;</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import EaPopover from '@/components/ui/overlay/EaPopover/EaPopover.vue'

// Refs
const controlledPopover = ref()

// Form data
const formData = reactive({
  username: 'john_doe',
  email: 'john@example.com'
})

// Methods
const handleFormSubmit = (hidePopover: () => void) => {
  console.log('Form submitted:', formData)
  alert('Settings saved successfully!')
  hidePopover()
}

const handleMenuAction = (action: string, hidePopover: () => void) => {
  console.log('Menu action:', action)
  alert(`${action.charAt(0).toUpperCase() + action.slice(1)} action triggered`)
  hidePopover()
}
</script>

<style lang="scss" scoped>
.popover-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  .demo-header {
    text-align: center;
    margin-bottom: 40px;

    h1 {
      color: #1f2937;
      margin-bottom: 8px;
    }

    p {
      color: #6b7280;
      font-size: 16px;
    }
  }

  .demo-section {
    margin-bottom: 60px;

    h2 {
      color: #1f2937;
      border-bottom: 2px solid #e5e7eb;
      padding-bottom: 8px;
      margin-bottom: 24px;
    }

    h3 {
      color: #374151;
      margin-bottom: 12px;
      font-size: 16px;
    }
  }

  .demo-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
  }

  .demo-item {
    padding: 16px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    background: #f9fafb;
  }

  .demo-button {
    background: #3b82f6;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;

    &:hover:not(.demo-button--disabled) {
      background: #2563eb;
    }

    &--disabled {
      background: #9ca3af;
      cursor: not-allowed;
    }
  }

  .placement-demo {
    display: flex;
    justify-content: center;

    .placement-grid {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
      gap: 16px;

      .placement-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        align-items: center;

        .placeholder {
          text-align: center;
          color: #9ca3af;
          font-style: italic;
        }
      }
    }
  }

  .control-demo {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;

    .control-buttons {
      display: flex;
      gap: 8px;
    }
  }

  .btn {
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 12px;

    &.btn-primary {
      background: #3b82f6;
      color: white;
    }

    &.btn-secondary {
      background: #6b7280;
      color: white;
    }

    &.btn-success {
      background: #10b981;
      color: white;
    }

    &.btn-danger {
      background: #ef4444;
      color: white;
    }

    &.btn-info {
      background: #06b6d4;
      color: white;
    }
  }

  .code-examples {
    display: grid;
    gap: 24px;

    .code-example {
      h3 {
        margin-bottom: 8px;
      }

      pre {
        background: #1f2937;
        color: #f3f4f6;
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;

        code {
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 13px;
          line-height: 1.5;
        }
      }
    }
  }
}

// Popover content styles
:deep(.popover-content) {
  h4 {
    margin: 0 0 8px 0;
    color: #1f2937;
    font-size: 16px;
  }

  p {
    margin: 0 0 8px 0;
    color: #4b5563;
    line-height: 1.5;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

:deep(.popover-form) {
  .form-group {
    margin-bottom: 12px;

    label {
      display: block;
      margin-bottom: 4px;
      font-size: 13px;
      font-weight: 500;
      color: #374151;
    }

    .form-input {
      width: 100%;
      padding: 6px 8px;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      font-size: 13px;
    }
  }

  .form-actions {
    display: flex;
    gap: 8px;
    margin-top: 16px;
  }
}

:deep(.popover-menu) {
  .menu-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.2s;

    &:hover {
      background: #f3f4f6;
    }

    .menu-icon {
      margin-right: 8px;
      font-size: 16px;
    }
  }
}
</style>
