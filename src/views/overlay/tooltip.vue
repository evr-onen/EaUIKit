<template>
  <div class="tooltip-demo">
    <div class="container">
      <!-- Header -->
      <header class="demo-header">
        <h1>EaTooltip Component</h1>
        <p class="description">
          A lightweight and accessible tooltip component for Vue 3 applications.
        </p>
      </header>

      <!-- Quick Demo -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <div class="quick-demo-grid">
          <div class="demo-card">
            <h3>Basic Tooltip</h3>
            <EaTooltip value="This is a basic tooltip">
              <button class="demo-btn demo-btn--primary">Hover me</button>
            </EaTooltip>
          </div>
          <div class="demo-card">
            <h3>Top Position</h3>
            <EaTooltip value="Top positioned tooltip" position="top">
              <button class="demo-btn demo-btn--secondary">Top Tooltip</button>
            </EaTooltip>
          </div>
          <div class="demo-card">
            <h3>Focus Event</h3>
            <EaTooltip value="Enter your username" event="focus" position="top">
              <input type="text" placeholder="Focus to see tooltip" class="demo-input">
            </EaTooltip>
          </div>
          <div class="demo-card">
            <h3>Custom Style</h3>
            <EaTooltip value="Custom styled tooltip" position="bottom">
              <button class="demo-btn demo-btn--success">Custom Style</button>
            </EaTooltip>
          </div>
        </div>
        <CodeBlock
          title="Quick Demo Examples"
          :code="quickDemoCode"
        />
      </section>

      <!-- Position Examples -->
      <section class="demo-section">
        <h2>Position Options</h2>
        <div class="position-demo">
          <div class="position-grid">
            <div class="position-item">
              <EaTooltip value="Top positioned tooltip" position="top">
                <button class="demo-btn demo-btn--secondary">Top</button>
              </EaTooltip>
            </div>
            <div class="position-row">
              <EaTooltip value="Left positioned tooltip" position="left">
                <button class="demo-btn demo-btn--secondary">Left</button>
              </EaTooltip>
              <div class="position-center">All Positions</div>
              <EaTooltip value="Right positioned tooltip" position="right">
                <button class="demo-btn demo-btn--secondary">Right</button>
              </EaTooltip>
            </div>
            <div class="position-item">
              <EaTooltip value="Bottom positioned tooltip" position="bottom">
                <button class="demo-btn demo-btn--secondary">Bottom</button>
              </EaTooltip>
            </div>
          </div>
        </div>
        <CodeBlock
          title="Position Examples"
          :code="positionCode"
        />
      </section>

      <!-- Event Examples -->
      <section class="demo-section">
        <h2>Event Types</h2>
        <div class="examples-grid">
          <div class="example-card">
            <div class="example-header">
              <h3>Focus Event</h3>
            </div>
            <div class="example-demo">
              <EaTooltip value="Enter your username" event="focus" position="top">
                <input type="text" placeholder="Focus to see tooltip" class="demo-input">
              </EaTooltip>
            </div>
          </div>
          <div class="example-card">
            <div class="example-header">
              <h3>Hover Event</h3>
            </div>
            <div class="example-demo">
              <EaTooltip value="Hover tooltip message" event="hover" position="top">
                <input type="text" placeholder="Hover to see tooltip" class="demo-input">
              </EaTooltip>
            </div>
          </div>
        </div>
        <CodeBlock
          title="Event Examples"
          :code="eventCode"
        />
      </section>

      <!-- Code Examples -->
      <section class="demo-section">
        <h2>Code Examples</h2>
        <div class="examples-grid">
          <div class="example-card">
            <div class="example-header">
              <h3>Basic Usage</h3>
            </div>
            <div class="example-demo">
              <EaTooltip value="Basic tooltip">
                <button class="demo-btn demo-btn--primary">Basic Example</button>
              </EaTooltip>
            </div>
          </div>
          <div class="example-card">
            <div class="example-header">
              <h3>Advanced Configuration</h3>
            </div>
            <div class="example-demo">
              <EaTooltip value="Advanced tooltip with custom settings" position="bottom" event="focus">
                <input type="text" placeholder="Advanced example" class="demo-input">
              </EaTooltip>
            </div>
          </div>
          <div class="example-card">
            <div class="example-header">
              <h3>Programmatic Control</h3>
            </div>
            <div class="example-demo">
              <div class="control-demo">
                <EaTooltip ref="programmaticTooltip" value="Programmatically controlled tooltip">
                  <button class="demo-btn demo-btn--info">Controlled Tooltip</button>
                </EaTooltip>
                <div class="control-buttons">
                  <button @click="handleProgrammaticShow" class="btn btn--primary">Show</button>
                  <button @click="handleProgrammaticHide" class="btn btn--secondary">Hide</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CodeBlock
          title="All Examples Code"
          :code="allExamplesCode"
        />
      </section>

      <!-- Props Documentation -->
      <section class="demo-section">
        <h2>Props</h2>
        <div class="table-container">
          <table class="props-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>value</code></td>
                <td>string</td>
                <td>-</td>
                <td>Text content of the tooltip</td>
              </tr>
              <tr>
                <td><code>position</code></td>
                <td>'top' | 'right' | 'bottom' | 'left'</td>
                <td>'right'</td>
                <td>Position of tooltip relative to target</td>
              </tr>
              <tr>
                <td><code>event</code></td>
                <td>'hover' | 'focus'</td>
                <td>'hover'</td>
                <td>Event that triggers tooltip</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether tooltip is disabled</td>
              </tr>
              <tr>
                <td><code>showDelay</code></td>
                <td>number</td>
                <td>0</td>
                <td>Delay before showing tooltip (ms)</td>
              </tr>
              <tr>
                <td><code>hideDelay</code></td>
                <td>number</td>
                <td>0</td>
                <td>Delay before hiding tooltip (ms)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Methods Documentation -->
      <section class="demo-section">
        <h2>Methods</h2>
        <div class="table-container">
          <table class="props-table">
            <thead>
              <tr>
                <th>Method</th>
                <th>Parameters</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>showTooltip()</code></td>
                <td>options?: string | TooltipOptions</td>
                <td>Show the tooltip programmatically</td>
              </tr>
              <tr>
                <td><code>hideTooltip()</code></td>
                <td>-</td>
                <td>Hide the tooltip programmatically</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Accessibility -->
      <section class="demo-section">
        <h2>Accessibility</h2>
        <div class="accessibility-info">
          <h3>Screen Reader Support</h3>
          <p>Tooltip component uses <code>tooltip</code> role and when it becomes visible, the generated id of the tooltip is defined as the <code>aria-describedby</code> of the target.</p>

          <h3>Keyboard Support</h3>
          <div class="table-container">
            <table class="props-table">
              <thead>
                <tr>
                  <th>Key</th>
                  <th>Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>Escape</code></td>
                  <td>Closes the tooltip when focus is on the target</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EaTooltip from '@/components/ui/overlay/EaTooltip/EaTooltip.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

const programmaticTooltip = ref<InstanceType<typeof EaTooltip>>()

const handleProgrammaticShow = () => {
  programmaticTooltip.value?.showTooltip()
}

const handleProgrammaticHide = () => {
  programmaticTooltip.value?.hideTooltip()
}

const quickDemoCode = `<!-- Basic Tooltip -->
<EaTooltip value="This is a basic tooltip">
  <button class="demo-btn demo-btn--primary">Hover me</button>
</EaTooltip>

<!-- Position Example -->
<EaTooltip value="Top positioned tooltip" position="top">
  <button class="demo-btn demo-btn--secondary">Top Tooltip</button>
</EaTooltip>

<!-- Focus Event -->
<EaTooltip value="Enter your username" event="focus" position="top">
  <input type="text" placeholder="Focus to see tooltip" class="demo-input">
</EaTooltip>`

const positionCode = `<!-- Top Position -->
<EaTooltip value="Top positioned tooltip" position="top">
  <button class="demo-btn">Top</button>
</EaTooltip>

<!-- Right Position (Default) -->
<EaTooltip value="Right positioned tooltip" position="right">
  <button class="demo-btn">Right</button>
</EaTooltip>

<!-- Bottom Position -->
<EaTooltip value="Bottom positioned tooltip" position="bottom">
  <button class="demo-btn">Bottom</button>
</EaTooltip>

<!-- Left Position -->
<EaTooltip value="Left positioned tooltip" position="left">
  <button class="demo-btn">Left</button>
</EaTooltip>`

const eventCode = `<!-- Focus Event -->
<EaTooltip value="Enter your username" event="focus" position="top">
  <input type="text" placeholder="Focus to see tooltip" class="demo-input">
</EaTooltip>

<!-- Hover Event (Default) -->
<EaTooltip value="Hover tooltip message" event="hover" position="top">
  <input type="text" placeholder="Hover to see tooltip" class="demo-input">
</EaTooltip>`

const allExamplesCode = `<template>
  <div>
    <!-- Basic Usage -->
    <EaTooltip value="Basic tooltip">
      <button class="demo-btn demo-btn--primary">Basic Example</button>
    </EaTooltip>

    <!-- Advanced Configuration -->
    <EaTooltip value="Advanced tooltip with custom settings" position="bottom" event="focus">
      <input type="text" placeholder="Advanced example" class="demo-input">
    </EaTooltip>

    <!-- Programmatic Control -->
    <EaTooltip ref="programmaticTooltip" value="Programmatically controlled tooltip">
      <button class="demo-btn demo-btn--info">Controlled Tooltip</button>
    </EaTooltip>

    <div class="control-buttons">
      <button @click="handleProgrammaticShow" class="btn btn--primary">Show</button>
      <button @click="handleProgrammaticHide" class="btn btn--secondary">Hide</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import EaTooltip from '@/components/ui/overlay/EaTooltip/EaTooltip.vue'

const programmaticTooltip = ref()

const handleProgrammaticShow = () => {
  programmaticTooltip.value?.showTooltip()
}

const handleProgrammaticHide = () => {
  programmaticTooltip.value?.hideTooltip()
}
`
</script>

<style scoped lang="scss">
.tooltip-demo {
  background-color: #f8fafc;
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.demo-header {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.125rem;
    color: #64748b;
    line-height: 1.6;
    max-width: 800px;
    margin: 0;
  }
}

.demo-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;

  h2 {
    font-size: 1.875rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }
}

.quick-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.demo-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 1rem;
  }
}

.position-demo {
  margin-bottom: 2rem;
}

.position-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.position-item {
  display: flex;
  justify-content: center;
}

.position-row {
  display: flex;
  align-items: center;
  gap: 4rem;
  width: 100%;
  justify-content: center;
}

.position-center {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 80px;
  background: #e2e8f0;
  border-radius: 8px;
  font-weight: 500;
  color: #64748b;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.example-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  transition: all 0.2s ease;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
}

.example-header {
  margin-bottom: 1rem;
}

.example-demo {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
}

.control-demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.control-buttons {
  display: flex;
  gap: 0.5rem;
}

.demo-btn {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;

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

  &--info {
    background: #06b6d4;
    color: white;
    &:hover { background: #0891b2; }
  }
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.75rem;

  &--primary {
    background: #10b981;
    color: white;
    &:hover { background: #059669; }
  }

  &--secondary {
    background: #ef4444;
    color: white;
    &:hover { background: #dc2626; }
  }
}

.demo-input {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
  transition: all 0.2s ease;
  width: 200px;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
}

.table-container {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.props-table {
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
  }

  th {
    background: #f8fafc;
    font-weight: 600;
    color: #374151;
    font-size: 0.875rem;
  }

  td {
    color: #4b5563;
    vertical-align: top;

    code {
      background: #f1f5f9;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-family: 'Fira Code', monospace;
      font-size: 0.875rem;
      color: #1e293b;
    }
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background: #f8fafc;
  }
}

.accessibility-info {
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .quick-demo-grid {
    grid-template-columns: 1fr;
  }

  .position-row {
    flex-direction: column;
    gap: 1rem;
  }

  .examples-grid {
    grid-template-columns: 1fr;
  }
}
</style>
