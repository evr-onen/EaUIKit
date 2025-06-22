<template>
  <div class="popover-demo">
    <div class="container">
      <!-- Header Section -->
    <div class="demo-header">
        <h1 class="demo-title">EaPopover Component</h1>
        <p class="demo-subtitle">
          A flexible and customizable popover component for Vue 3 applications.
          Supports multiple triggers, placements, and interactive content.
        </p>
    </div>

      <!-- Quick Demo Section -->
      <div class="demo-section">
        <div class="section-header">
          <h2 class="section-title">Quick Demo</h2>
          <p class="section-description">
            Try different popover configurations with these interactive examples.
          </p>
        </div>

        <div class="quick-demo-grid">
        <!-- Click Trigger -->
          <div class="demo-card">
            <div class="demo-header-card">
              <h3 class="demo-card-title">Click Trigger</h3>
              <p class="demo-card-description">Default click-to-open behavior</p>
            </div>
            <div class="demo-content">
          <EaPopover>
            <template #trigger>
                  <button class="demo-btn demo-btn--primary">Click to open</button>
            </template>
            <template #content>
              <div class="popover-content">
                    <h4>Click Popover</h4>
                    <p>This popover opens when you click the trigger button.</p>
              </div>
            </template>
          </EaPopover>
            </div>
        </div>

        <!-- Hover Trigger -->
          <div class="demo-card">
            <div class="demo-header-card">
              <h3 class="demo-card-title">Hover Trigger</h3>
              <p class="demo-card-description">Opens on mouse hover</p>
            </div>
            <div class="demo-content">
          <EaPopover trigger="hover">
            <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Hover to open</button>
            </template>
            <template #content>
              <div class="popover-content">
                <h4>Hover Popover</h4>
                    <p>This popover appears on hover with smooth transitions.</p>
              </div>
            </template>
          </EaPopover>
        </div>
      </div>

          <!-- Different Placements -->
          <div class="demo-card">
            <div class="demo-header-card">
              <h3 class="demo-card-title">Top Placement</h3>
              <p class="demo-card-description">Popover appears above trigger</p>
            </div>
            <div class="demo-content">
              <EaPopover placement="top">
                <template #trigger>
                  <button class="demo-btn demo-btn--success">Top Popover</button>
                </template>
                <template #content>
                  <div class="popover-content">
                    <h4>Top Positioned</h4>
                    <p>This popover appears above the trigger element.</p>
                  </div>
                </template>
              </EaPopover>
            </div>
          </div>

          <!-- Interactive Content -->
          <div class="demo-card">
            <div class="demo-header-card">
              <h3 class="demo-card-title">Interactive Content</h3>
              <p class="demo-card-description">Popover with interactive elements</p>
            </div>
            <div class="demo-content">
              <EaPopover width="250px" placement="bottom-start">
                <template #trigger>
                  <button class="demo-btn demo-btn--info">User Menu</button>
                </template>
                <template #content="{ hide }">
                  <div class="popover-menu">
                    <div class="menu-item" @click="handleMenuAction('profile', hide)">
                      <span class="menu-icon">👤</span>
                      View Profile
                    </div>
                    <div class="menu-item" @click="handleMenuAction('settings', hide)">
                      <span class="menu-icon">⚙️</span>
                      Settings
                    </div>
                    <div class="menu-item" @click="handleMenuAction('logout', hide)">
                      <span class="menu-icon">🚪</span>
                      Logout
                    </div>
                  </div>
                </template>
              </EaPopover>
            </div>
          </div>
        </div>

        <!-- Quick Demo Code Examples -->
        <div class="section-code-examples">
          <CodeBlock :code="quickDemoCode" title="Quick Demo Examples" language="html" />
        </div>
      </div>

    <!-- Placement Examples -->
      <div class="demo-section">
        <div class="section-header">
          <h2 class="section-title">Placement Options</h2>
          <p class="section-description">
            EaPopover supports 8 different placement positions around the trigger element.
          </p>
        </div>

      <div class="placement-demo">
        <div class="placement-grid">
          <!-- Top placements -->
          <div class="placement-row">
            <EaPopover placement="top-start">
              <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Top Start</button>
              </template>
              <template #content>
                <div class="popover-content">Top Start Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="top">
              <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Top Center</button>
              </template>
              <template #content>
                <div class="popover-content">Top Center Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="top-end">
              <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Top End</button>
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
                  <button class="demo-btn demo-btn--secondary">Left</button>
              </template>
              <template #content>
                <div class="popover-content">Left Placement</div>
              </template>
            </EaPopover>

              <div class="placement-center">
                <span>All Placements</span>
              </div>

            <EaPopover placement="right">
              <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Right</button>
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
                  <button class="demo-btn demo-btn--secondary">Bottom Start</button>
              </template>
              <template #content>
                <div class="popover-content">Bottom Start Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="bottom">
              <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Bottom Center</button>
              </template>
              <template #content>
                <div class="popover-content">Bottom Center Placement</div>
              </template>
            </EaPopover>

            <EaPopover placement="bottom-end">
              <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Bottom End</button>
              </template>
              <template #content>
                <div class="popover-content">Bottom End Placement</div>
              </template>
            </EaPopover>
          </div>
        </div>
      </div>

        <!-- Placement Code Examples -->
        <div class="section-code-examples">
          <CodeBlock :code="placementCode" title="Placement Examples" language="html" />
              </div>
        </div>

      <!-- Code Examples -->
      <div class="demo-section">
        <div class="section-header">
          <h2 class="section-title">Code Examples</h2>
          <p class="section-description">
            Learn how to implement EaPopover in your applications with these practical examples.
          </p>
        </div>

        <div class="examples-grid">
          <!-- Basic Example -->
          <div class="example-card">
            <div class="example-header">
              <h3 class="example-title">Basic Usage</h3>
              <p class="example-description">Simple click-triggered popover</p>
              </div>
            <div class="example-demo">
              <EaPopover>
            <template #trigger>
                  <button class="demo-btn demo-btn--primary">Basic Example</button>
            </template>
            <template #content>
              <div class="popover-content">
                    <h4>Basic Popover</h4>
                    <p>This is a simple popover with default settings.</p>
              </div>
            </template>
          </EaPopover>
            </div>
        </div>

          <!-- Advanced Example -->
          <div class="example-card">
            <div class="example-header">
              <h3 class="example-title">Advanced Configuration</h3>
              <p class="example-description">Hover trigger with custom placement and delays</p>
            </div>
            <div class="example-demo">
              <EaPopover trigger="hover" placement="top" :show-delay="300" :hide-delay="200" width="300px">
            <template #trigger>
                  <button class="demo-btn demo-btn--secondary">Advanced Example</button>
            </template>
            <template #content>
              <div class="popover-content">
                    <h4>Advanced Popover</h4>
                    <p>This popover has custom trigger, placement, delays, and width.</p>
              </div>
            </template>
          </EaPopover>
        </div>
      </div>

          <!-- Interactive Example -->
          <div class="example-card">
            <div class="example-header">
              <h3 class="example-title">Interactive Content</h3>
              <p class="example-description">Popover with form and close functionality</p>
            </div>
            <div class="example-demo">
              <EaPopover width="280px" placement="bottom-start">
            <template #trigger>
                  <button class="demo-btn demo-btn--info">Interactive Example</button>
            </template>
            <template #content="{ hide }">
              <div class="popover-content">
                    <h4>User Form</h4>
                <form @submit.prevent="handleFormSubmit(hide)" class="popover-form">
                  <div class="form-group">
                        <label>Name:</label>
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
                </div>

    <!-- Programmatic Control -->
          <div class="example-card">
            <div class="example-header">
              <h3 class="example-title">Programmatic Control</h3>
              <p class="example-description">Control popover visibility programmatically</p>
            </div>
            <div class="example-demo">
        <div class="control-demo">
          <EaPopover ref="controlledPopover">
            <template #trigger>
                    <button class="demo-btn demo-btn--warning">Controlled Popover</button>
            </template>
            <template #content>
              <div class="popover-content">
                      <h4>Programmatic Control</h4>
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
          </div>
        </div>

        <!-- Combined Code Examples -->
        <div class="combined-examples">
          <CodeBlock :code="allExamplesCode" title="All Examples Code" language="html" />
        </div>
      </div>

      <!-- API Documentation -->
      <div class="demo-section">
        <div class="section-header">
          <h2 class="section-title">API Documentation</h2>
        </div>

        <div class="api-grid">
          <div class="api-card">
            <h3 class="api-title">Props</h3>
            <div class="api-table">
              <div class="api-row api-header-row">
                <div class="api-cell">Prop</div>
                <div class="api-cell">Type</div>
                <div class="api-cell">Default</div>
                <div class="api-cell">Description</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>trigger</code></div>
                <div class="api-cell">string</div>
                <div class="api-cell">'click'</div>
                <div class="api-cell">Trigger type: 'click' or 'hover'</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>placement</code></div>
                <div class="api-cell">string</div>
                <div class="api-cell">'bottom'</div>
                <div class="api-cell">Popover placement position</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>width</code></div>
                <div class="api-cell">string</div>
                <div class="api-cell">-</div>
                <div class="api-cell">Custom width (e.g., '300px', '50%')</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>offset</code></div>
                <div class="api-cell">number</div>
                <div class="api-cell">8</div>
                <div class="api-cell">Distance from trigger element</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>arrow</code></div>
                <div class="api-cell">boolean</div>
                <div class="api-cell">true</div>
                <div class="api-cell">Show/hide arrow pointer</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>disabled</code></div>
                <div class="api-cell">boolean</div>
                <div class="api-cell">false</div>
                <div class="api-cell">Disable popover functionality</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>showDelay</code></div>
                <div class="api-cell">number</div>
                <div class="api-cell">0</div>
                <div class="api-cell">Delay before showing (ms)</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>hideDelay</code></div>
                <div class="api-cell">number</div>
                <div class="api-cell">0</div>
                <div class="api-cell">Delay before hiding (ms)</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>closeOnClickOutside</code></div>
                <div class="api-cell">boolean</div>
                <div class="api-cell">true</div>
                <div class="api-cell">Close when clicking outside</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>closeOnEscape</code></div>
                <div class="api-cell">boolean</div>
                <div class="api-cell">true</div>
                <div class="api-cell">Close when pressing Escape key</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>closeOnScroll</code></div>
                <div class="api-cell">boolean</div>
                <div class="api-cell">true</div>
                <div class="api-cell">Close when scrolling page</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>zIndex</code></div>
                <div class="api-cell">number</div>
                <div class="api-cell">1000</div>
                <div class="api-cell">CSS z-index value</div>
              </div>
            </div>
        </div>

          <div class="api-card">
            <h3 class="api-title">Slots</h3>
            <div class="api-table">
              <div class="api-row api-header-row">
                <div class="api-cell">Slot</div>
                <div class="api-cell">Props</div>
                <div class="api-cell">Description</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>trigger</code></div>
                <div class="api-cell">{ isVisible, toggle }</div>
                <div class="api-cell">Trigger element content</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>content</code></div>
                <div class="api-cell">{ hide, isVisible }</div>
                <div class="api-cell">Popover content</div>
              </div>
            </div>
          </div>

          <div class="api-card">
            <h3 class="api-title">Methods</h3>
            <div class="api-table">
              <div class="api-row api-header-row">
                <div class="api-cell">Method</div>
                <div class="api-cell">Description</div>
        </div>
              <div class="api-row">
                <div class="api-cell"><code>show()</code></div>
                <div class="api-cell">Show the popover</div>
      </div>
              <div class="api-row">
                <div class="api-cell"><code>hide()</code></div>
                <div class="api-cell">Hide the popover</div>
              </div>
              <div class="api-row">
                <div class="api-cell"><code>toggle()</code></div>
                <div class="api-cell">Toggle popover visibility</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import EaPopover from '@/components/ui/overlay/EaPopover/EaPopover.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Refs
const controlledPopover = ref()

// Form data
const formData = reactive({
  username: 'john_doe',
  email: 'john@example.com'
})

// Quick Demo code examples
const quickDemoCode = `<!-- Click Trigger -->
<EaPopover>
  <template #trigger>
    <button class="demo-btn demo-btn--primary">Click to open</button>
  </template>
  <template #content>
    <div class="popover-content">
      <h4>Click Popover</h4>
      <p>This popover opens when you click the trigger button.</p>
    </div>
  </template>
</EaPopover>

<!-- Hover Trigger -->
<EaPopover trigger="hover">
  <template #trigger>
    <button class="demo-btn demo-btn--secondary">Hover to open</button>
  </template>
  <template #content>
    <div class="popover-content">
      <h4>Hover Popover</h4>
      <p>This popover appears on hover with smooth transitions.</p>
    </div>
  </template>
</EaPopover>

<!-- Top Placement -->
<EaPopover placement="top">
  <template #trigger>
    <button class="demo-btn demo-btn--success">Top Popover</button>
  </template>
  <template #content>
    <div class="popover-content">
      <h4>Top Positioned</h4>
      <p>This popover appears above the trigger element.</p>
    </div>
  </template>
</EaPopover>

<!-- Interactive Content -->
<EaPopover width="250px" placement="bottom-start">
  <template #trigger>
    <button class="demo-btn demo-btn--info">User Menu</button>
  </template>
  <template #content="{ hide }">
    <div class="popover-menu">
      <div class="menu-item" @click="handleMenuAction('profile', hide)">
        <span class="menu-icon">👤</span>
        View Profile
      </div>
      <div class="menu-item" @click="handleMenuAction('settings', hide)">
        <span class="menu-icon">⚙️</span>
        Settings
      </div>
      <div class="menu-item" @click="handleMenuAction('logout', hide)">
        <span class="menu-icon">🚪</span>
        Logout
      </div>
    </div>
  </template>
</EaPopover>`

// Placement code examples
const placementCode = `<!-- Top Placements -->
<EaPopover placement="top-start">
  <template #trigger>
    <button>Top Start</button>
  </template>
  <template #content>
    <div class="popover-content">Top Start Placement</div>
  </template>
</EaPopover>

<EaPopover placement="top">
  <template #trigger>
    <button>Top Center</button>
  </template>
  <template #content>
    <div class="popover-content">Top Center Placement</div>
  </template>
</EaPopover>

<EaPopover placement="top-end">
  <template #trigger>
    <button>Top End</button>
  </template>
  <template #content>
    <div class="popover-content">Top End Placement</div>
  </template>
</EaPopover>

<!-- Side Placements -->
<EaPopover placement="left">
  <template #trigger>
    <button>Left</button>
  </template>
  <template #content>
    <div class="popover-content">Left Placement</div>
  </template>
</EaPopover>

<EaPopover placement="right">
  <template #trigger>
    <button>Right</button>
  </template>
  <template #content>
    <div class="popover-content">Right Placement</div>
  </template>
</EaPopover>

<!-- Bottom Placements -->
<EaPopover placement="bottom-start">
  <template #trigger>
    <button>Bottom Start</button>
  </template>
  <template #content>
    <div class="popover-content">Bottom Start Placement</div>
  </template>
</EaPopover>

<EaPopover placement="bottom">
  <template #trigger>
    <button>Bottom Center</button>
  </template>
  <template #content>
    <div class="popover-content">Bottom Center Placement</div>
  </template>
</EaPopover>

<EaPopover placement="bottom-end">
  <template #trigger>
    <button>Bottom End</button>
  </template>
  <template #content>
    <div class="popover-content">Bottom End Placement</div>
  </template>
</EaPopover>`

// Combined code examples
const allExamplesCode = `<!-- Basic Usage -->
<EaPopover>
  <template #trigger>
    <button>Click me</button>
  </template>
  <template #content>
    <div class="popover-content">
      <h4>Basic Popover</h4>
      <p>This is a simple popover with default settings.</p>
    </div>
  </template>
</EaPopover>

<!-- Advanced Configuration -->
<EaPopover
  trigger="hover"
  placement="top"
  :show-delay="300"
  :hide-delay="200"
  width="300px"
>
  <template #trigger>
    <button>Advanced Example</button>
  </template>
  <template #content>
    <div class="popover-content">
      <h4>Advanced Popover</h4>
      <p>Custom trigger, placement, delays, and width.</p>
    </div>
  </template>
</EaPopover>

<!-- Interactive Content -->
<EaPopover width="280px" placement="bottom-start">
  <template #trigger>
    <button>Interactive Example</button>
  </template>
  <template #content="{ hide }">
    <div class="popover-content">
      <h4>User Form</h4>
      <form @submit.prevent="handleSubmit(hide)">
        <div class="form-group">
          <label>Name:</label>
          <input v-model="username" type="text" />
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input v-model="email" type="email" />
        </div>
        <div class="form-actions">
          <button type="submit">Save</button>
          <button type="button" @click="hide">Cancel</button>
        </div>
      </form>
    </div>
  </template>
</EaPopover>

<!-- Programmatic Control -->
<EaPopover ref="popoverRef">
  <template #trigger>
    <button>Controlled Popover</button>
  </template>
  <template #content>
    <div class="popover-content">
      <h4>Programmatic Control</h4>
      <p>Control via external buttons.</p>
    </div>
  </template>
</EaPopover>

<!-- External Control Buttons -->
<button @click="popoverRef?.show()">Show</button>
<button @click="popoverRef?.hide()">Hide</button>
<button @click="popoverRef?.toggle()">Toggle</button>`

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
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
  .demo-header {
    text-align: center;
  margin-bottom: 4rem;

  .demo-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    letter-spacing: -0.025em;
  }

  .demo-subtitle {
    font-size: 1.25rem;
      color: #6b7280;
    max-width: 600px;
    margin: 0 auto;
    }
  }

/* Sections */
  .demo-section {
  margin-bottom: 4rem;

  .section-header {
    margin-bottom: 2rem;

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }

    .section-description {
      font-size: 1.125rem;
      color: #6b7280;
    }
  }
}

/* Quick Demo Grid */
.quick-demo-grid {
    display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.demo-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;

  .demo-header-card {
    padding: 1.25rem;
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;

    .demo-card-title {
      margin: 0 0 0.5rem 0;
      font-size: 1.125rem;
      font-weight: 600;
      color: #1e293b;
    }

    .demo-card-description {
      margin: 0;
      font-size: 0.875rem;
      color: #64748b;
    }
  }

  .demo-content {
    padding: 1.25rem;
  }
}

/* Buttons */
.demo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
    border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  &--primary {
    background: #3b82f6;
    color: white;
    &:hover { background: #2563eb; }
  }

  &--secondary {
    background: #6b7280;
    color: white;
    &:hover { background: #4b5563; }
  }

  &--success {
    background: #10b981;
    color: white;
    &:hover { background: #059669; }
  }

  &--warning {
    background: #f59e0b;
    color: white;
    &:hover { background: #d97706; }
  }

  &--info {
    background: #06b6d4;
    color: white;
    &:hover { background: #0891b2; }
  }
}

/* Placement Demo */
  .placement-demo {
    display: flex;
    justify-content: center;
  margin: 2rem 0;

    .placement-grid {
      display: grid;
      grid-template-rows: repeat(3, 1fr);
    gap: 1rem;

      .placement-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
        align-items: center;

      .placement-center {
          text-align: center;
        color: #64748b;
          font-style: italic;
        font-weight: 500;
      }
    }
  }
}

/* Examples Grid */
.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.example-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  .example-header {
    margin-bottom: 1.5rem;

    .example-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 0.5rem;
    }

    .example-description {
      color: #6b7280;
      font-size: 0.875rem;
    }
  }

  .example-demo {
    margin-bottom: 1.5rem;
  }
}

.combined-examples {
  margin-top: 2rem;
}

.section-code-examples {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e7eb;
}

/* Control Demo */
  .control-demo {
    display: flex;
    flex-direction: column;
  gap: 1rem;
    align-items: flex-start;

    .control-buttons {
      display: flex;
    gap: 0.5rem;
    }
  }

  .btn {
  padding: 0.375rem 0.75rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

    &.btn-primary {
      background: #3b82f6;
      color: white;
    &:hover { background: #2563eb; }
    }

    &.btn-secondary {
      background: #6b7280;
      color: white;
    &:hover { background: #4b5563; }
    }

    &.btn-success {
      background: #10b981;
      color: white;
    &:hover { background: #059669; }
    }

    &.btn-danger {
      background: #ef4444;
      color: white;
    &:hover { background: #dc2626; }
    }

    &.btn-info {
      background: #06b6d4;
      color: white;
    &:hover { background: #0891b2; }
    }
  }

/* API Documentation */
.api-grid {
    display: grid;
  gap: 2rem;
}

.api-card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  .api-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }
}

.api-table {
  display: grid;
  gap: 0.5rem;

  .api-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    gap: 1rem;
    padding: 0.75rem;
    border-radius: 0.5rem;

    &.api-header-row {
      background: #f9fafb;
      font-weight: 600;
      color: #374151;
    }

    &:not(.api-header-row) {
      border: 1px solid #f3f4f6;
    }

    .api-cell {
      font-size: 0.875rem;

        code {
        background: #f3f4f6;
        padding: 0.125rem 0.375rem;
        border-radius: 0.25rem;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.75rem;
        color: #1f2937;
      }
    }
  }
}

/* Responsive */
@media (max-width: 768px) {
  .popover-demo {
    padding: 1rem 0;
  }

  .demo-title {
    font-size: 2rem !important;
  }

  .quick-demo-grid,
  .examples-grid {
    grid-template-columns: 1fr;
  }

  .placement-grid .placement-row {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .api-row {
    grid-template-columns: 1fr !important;
    gap: 0.5rem;

    .api-cell {
      padding: 0.25rem 0;
    }
  }
}

/* Popover content styles */
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
