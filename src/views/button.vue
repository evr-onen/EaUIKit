<template>
  <div class="button-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaButton Component</h1>
        <p class="demo-description">
          A comprehensive and flexible button component with extensive customization options,
          multiple variants, states, and interactive features.
        </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different button variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Primary Button</h4>
            <p>Standard primary action button</p>
            <EaButton label="Primary" variant="primary" :on-click="handleClick" />
          </div>

          <div class="demo-card">
            <h4>Success Button</h4>
            <p>For positive actions and confirmations</p>
            <EaButton label="Success" variant="success" :on-click="handleClick" />
          </div>

          <div class="demo-card">
            <h4>With Icon</h4>
            <p>Button with left icon integration</p>
            <EaButton label="Add Item" variant="primary" left-icon="plus" :on-click="handleClick" />
          </div>

          <div class="demo-card">
            <h4>Loading State</h4>
            <p>Button showing loading spinner</p>
            <EaButton label="Loading" variant="primary" :loading="true" />
          </div>
        </div>

        <CodeBlock
          :code="quickDemoCode"
          title="Quick Demo Usage"
        />
      </section>

      <!-- Button Variants -->
      <section class="demo-section">
        <h2>Button Variants</h2>
        <p class="section-description">
          EaButton supports multiple visual variants for different use cases and design requirements.
        </p>

        <div class="demo-group">
          <EaButton label="Primary" variant="primary" :on-click="handleClick" />
          <EaButton label="Secondary" variant="secondary" :on-click="handleClick" />
          <EaButton label="Success" variant="success" :on-click="handleClick" />
          <EaButton label="Danger" variant="danger" :on-click="handleClick" />
          <EaButton label="Warning" variant="warning" :on-click="handleClick" />
          <EaButton label="Info" variant="info" :on-click="handleClick" />
          <EaButton label="Ghost" variant="ghost" :on-click="handleClick" />
          <EaButton label="Outline" variant="outline" :on-click="handleClick" />
          <EaButton label="Text" variant="text" :on-click="handleClick" />
        </div>

        <CodeBlock
          :code="variantsCode"
          title="Button Variants Example"
        />
      </section>

      <!-- Button Sizes -->
      <section class="demo-section">
        <h2>Button Sizes</h2>
        <p class="section-description">
          Five different size options to fit various UI contexts and hierarchies.
        </p>

        <div class="demo-group">
          <EaButton label="Extra Small" size="xs" variant="primary" :on-click="handleClick" />
          <EaButton label="Small" size="sm" variant="primary" :on-click="handleClick" />
          <EaButton label="Medium" size="md" variant="primary" :on-click="handleClick" />
          <EaButton label="Large" size="lg" variant="primary" :on-click="handleClick" />
          <EaButton label="Extra Large" size="xl" variant="primary" :on-click="handleClick" />
        </div>

        <CodeBlock
          :code="sizesCode"
          title="Button Sizes Example"
        />
      </section>

      <!-- Icon Integration -->
      <section class="demo-section">
        <h2>Icon Integration</h2>
        <p class="section-description">
          Seamless icon integration with left, right, and icon-only configurations using the EaIcons system.
        </p>

        <div class="demo-group">
          <EaButton label="Add Item" variant="primary" left-icon="plus" :on-click="handleClick" />
          <EaButton label="Next" variant="primary" right-icon="chavron-down" :on-click="handleClick" />
          <EaButton variant="primary" left-icon="settings" :icon-only="true" :on-click="handleClick" />
          <EaButton label="Process" variant="primary" left-icon="settings" right-icon="chavron-down" :on-click="handleClick" />
        </div>

        <CodeBlock
          :code="iconsCode"
          title="Icon Integration Example"
        />
      </section>

      <!-- Loading & Disabled States -->
      <section class="demo-section">
        <h2>Loading & Disabled States</h2>
        <p class="section-description">
          Interactive states for better user experience and feedback during operations.
        </p>

        <div class="demo-group">
          <EaButton label="Normal" variant="primary" :on-click="handleClick" />
          <EaButton label="Loading" variant="primary" :loading="true" />
          <EaButton label="Disabled" variant="primary" :disabled="true" />
          <EaButton label="Loading & Disabled" variant="secondary" :loading="true" :disabled="true" />
        </div>

        <div class="demo-group">
          <button @click="toggleDemoLoading" class="btn btn--secondary">
            {{ demoLoading ? 'Stop' : 'Start' }} Loading Demo
          </button>
          <EaButton
            label="Toggle Loading"
            variant="info"
            :loading="demoLoading"
            :on-click="toggleDemoLoading"
          />
        </div>

        <CodeBlock
          :code="statesCode"
          title="Loading & Disabled States Example"
        />
      </section>

      <!-- Gradient Buttons -->
      <section class="demo-section">
        <h2>Gradient Buttons</h2>
        <p class="section-description">
          Beautiful gradient effects with predefined options and custom gradient support.
        </p>

        <div class="demo-subsection">
          <h3>Basic Gradients</h3>
          <div class="demo-group">
            <EaButton label="Sunset" variant="gradient" gradient="sunset" :on-click="handleClick" />
            <EaButton label="Ocean" variant="gradient" gradient="ocean" :on-click="handleClick" />
            <EaButton label="Purple" variant="gradient" gradient="purple" :on-click="handleClick" />
            <EaButton label="Pink" variant="gradient" gradient="pink" :on-click="handleClick" />
            <EaButton label="Emerald" variant="gradient" gradient="emerald" :on-click="handleClick" />
          </div>
        </div>

        <div class="demo-subsection">
          <h3>Semantic Gradients</h3>
          <div class="demo-group">
            <EaButton label="Error" variant="gradient" gradient="error" :on-click="handleClick" />
            <EaButton label="Warning" variant="gradient" gradient="warning" :on-click="handleClick" />
            <EaButton label="Info" variant="gradient" gradient="info" :on-click="handleClick" />
            <EaButton label="Success" variant="gradient" gradient="success" :on-click="handleClick" />
          </div>
        </div>

        <div class="demo-subsection">
          <h3>Special Gradients</h3>
          <div class="demo-group">
            <EaButton label="Fire" variant="gradient" gradient="fire" :on-click="handleClick" />
            <EaButton label="Sky" variant="gradient" gradient="sky" :on-click="handleClick" />
            <EaButton label="Gold" variant="gradient" gradient="gold" :on-click="handleClick" />
            <EaButton label="Dark" variant="gradient" gradient="dark" :on-click="handleClick" />
          </div>
        </div>

        <div class="demo-subsection">
          <h3>Gradient Directions</h3>
          <div class="demo-group">
            <EaButton label="To Right" variant="gradient" gradient="success" gradient-direction="to-r" :on-click="handleClick" />
            <EaButton label="To Bottom" variant="gradient" gradient="info" gradient-direction="to-b" :on-click="handleClick" />
            <EaButton label="To Top Right" variant="gradient" gradient="warning" gradient-direction="to-tr" :on-click="handleClick" />
            <EaButton label="To Bottom Left" variant="gradient" gradient="error" gradient-direction="to-bl" :on-click="handleClick" />
          </div>
        </div>

        <div class="demo-subsection">
          <h3>Custom Gradient</h3>
          <div class="demo-group">
            <EaButton
              label="Custom"
              variant="gradient"
              custom-gradient="linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
              :on-click="handleClick"
            />
          </div>
        </div>

        <CodeBlock
          :code="gradientCode"
          title="Gradient Buttons Example"
        />
      </section>

      <!-- Ripple Effects -->
      <section class="demo-section">
        <h2>Ripple Effects</h2>
        <p class="section-description">
          Interactive ripple effects for enhanced user feedback on button interactions.
        </p>

        <div class="demo-group">
          <EaButton
            label="Default Ripple"
            variant="primary"
            :ripple="true"
            :on-click="handleClick"
          />
          <EaButton
            label="Custom Color"
            variant="success"
            :ripple="true"
            ripple-color="rgba(255, 255, 0, 0.7)"
            :on-click="handleClick"
          />
          <EaButton
            label="Large Ripple"
            variant="info"
            :ripple="true"
            ripple-size="lg"
            :on-click="handleClick"
          />
        </div>

        <CodeBlock
          :code="rippleCode"
          title="Ripple Effects Example"
        />
      </section>

      <!-- Interactive Demo -->
      <section class="demo-section">
        <h2>Interactive Demo</h2>
        <p class="section-description">
          Test button functionality with live interactions and state management.
        </p>

        <div class="demo-group">
          <p class="click-counter">Click Count: {{ clickCount }}</p>
          <EaButton
            label="Click Me!"
            variant="primary"
            :on-click="incrementCount"
          />
          <EaButton
            label="Reset Count"
            variant="danger"
            :on-click="resetCount"
          />
        </div>

        <CodeBlock
          :code="interactiveCode"
          title="Interactive Demo Example"
        />
      </section>

      <!-- Props Documentation -->
      <section class="demo-section">
        <h2>Props</h2>
        <div class="props-table">
          <table>
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
                <td><code>label</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Button text content</td>
              </tr>
              <tr>
                <td><code>variant</code></td>
                <td>'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'ghost' | 'outline' | 'text' | 'gradient'</td>
                <td><code>'primary'</code></td>
                <td>Button visual style variant</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td><code>'md'</code></td>
                <td>Button size</td>
              </tr>
              <tr>
                <td><code>loading</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Show loading spinner</td>
              </tr>
              <tr>
                <td><code>disabled</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Disable button interaction</td>
              </tr>
              <tr>
                <td><code>leftIcon</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>SVG filename from assets/svg folder</td>
              </tr>
              <tr>
                <td><code>rightIcon</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>SVG filename from assets/svg folder</td>
              </tr>
              <tr>
                <td><code>iconOnly</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Show only icon without text</td>
              </tr>
              <tr>
                <td><code>iconSize</code></td>
                <td>'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td><code>'md'</code></td>
                <td>Icon size</td>
              </tr>
              <tr>
                <td><code>fullWidth</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Make button full width of container</td>
              </tr>
              <tr>
                <td><code>rounded</code></td>
                <td>'none' | 'sm' | 'md' | 'lg' | 'full'</td>
                <td><code>'md'</code></td>
                <td>Border radius</td>
              </tr>
              <tr>
                <td><code>shadow</code></td>
                <td>'none' | 'sm' | 'md' | 'lg' | 'xl'</td>
                <td><code>'sm'</code></td>
                <td>Box shadow size</td>
              </tr>
              <tr>
                <td><code>gradient</code></td>
                <td>'sunset' | 'ocean' | 'purple' | 'pink' | 'emerald' | 'fire' | 'sky' | 'dark' | 'gold' | 'error' | 'warning' | 'info' | 'success'</td>
                <td><code>'sunset'</code></td>
                <td>Predefined gradient type (when variant='gradient')</td>
              </tr>
              <tr>
                <td><code>customGradient</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Custom CSS gradient</td>
              </tr>
              <tr>
                <td><code>ripple</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Enable ripple effect</td>
              </tr>
              <tr>
                <td><code>rippleColor</code></td>
                <td>String</td>
                <td><code>'rgba(255,255,255,0.8)'</code></td>
                <td>Ripple color</td>
              </tr>
              <tr>
                <td><code>rippleSize</code></td>
                <td>'sm' | 'md' | 'lg'</td>
                <td><code>'md'</code></td>
                <td>Ripple size</td>
              </tr>
              <tr>
                <td><code>onClick</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Click handler function</td>
              </tr>
              <tr>
                <td><code>type</code></td>
                <td>'button' | 'submit' | 'reset'</td>
                <td><code>'button'</code></td>
                <td>Button HTML type</td>
              </tr>
              <tr>
                <td><code>animate</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Enable hover animations</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Advanced Examples -->
      <section class="demo-section">
        <h2>Advanced Examples</h2>
        <p class="section-description">
          Complex button configurations and advanced use cases.
        </p>

        <div class="demo-group">
          <EaButton
            label="Full Width"
            variant="primary"
            :full-width="true"
            :on-click="handleClick"
          />
        </div>

        <div class="demo-group">
          <EaButton
            label="Custom Colors"
            variant="primary"
            bg-colour="#8B5CF6"
            text-colour="#FFF"
            :on-click="handleClick"
          />
          <EaButton
            label="Rounded Full"
            variant="primary"
            rounded="full"
            :on-click="handleClick"
          />
          <EaButton
            label="Large Shadow"
            variant="primary"
            shadow="lg"
            :on-click="handleClick"
          />
        </div>

        <CodeBlock
          :code="advancedCode"
          title="Advanced Examples"
        />
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'

// Reactive state
const clickCount = ref(0)
const demoLoading = ref(false)

// Methods
const handleClick = () => {
  console.log('Button clicked!')
}

const incrementCount = () => {
  clickCount.value++
}

const resetCount = () => {
  clickCount.value = 0
}

const toggleDemoLoading = () => {
  demoLoading.value = !demoLoading.value

  // Auto reset loading after 3 seconds
  if (demoLoading.value) {
    setTimeout(() => {
      demoLoading.value = false
    }, 3000)
  }
}

// Code examples
const quickDemoCode = `<template>
  <EaButton label="Primary" variant="primary" :on-click="handleClick" />
  <EaButton label="Success" variant="success" :on-click="handleClick" />
  <EaButton label="Add Item" variant="primary" left-icon="plus" :on-click="handleClick" />
  <EaButton label="Loading" variant="primary" :loading="true" />
</template>

<script setup>
import EaButton from '@/components/ui/form/EaButton/index.vue'

const handleClick = () => {
  console.log('Button clicked!')
}
<\/script>`

const variantsCode = `<template>
  <EaButton label="Primary" variant="primary" />
  <EaButton label="Secondary" variant="secondary" />
  <EaButton label="Success" variant="success" />
  <EaButton label="Danger" variant="danger" />
  <EaButton label="Warning" variant="warning" />
  <EaButton label="Info" variant="info" />
  <EaButton label="Ghost" variant="ghost" />
  <EaButton label="Outline" variant="outline" />
  <EaButton label="Text" variant="text" />
</template>`

const sizesCode = `<template>
  <EaButton label="Extra Small" size="xs" variant="primary" />
  <EaButton label="Small" size="sm" variant="primary" />
  <EaButton label="Medium" size="md" variant="primary" />
  <EaButton label="Large" size="lg" variant="primary" />
  <EaButton label="Extra Large" size="xl" variant="primary" />
</template>`

const iconsCode = `<template>
  <!-- Left Icon -->
  <EaButton label="Add Item" variant="primary" left-icon="plus" />

  <!-- Right Icon -->
  <EaButton label="Next" variant="primary" right-icon="chavron-down" />

  <!-- Icon Only -->
  <EaButton variant="primary" left-icon="settings" :icon-only="true" />

  <!-- Both Icons -->
  <EaButton
    label="Process"
    variant="primary"
    left-icon="settings"
    right-icon="chavron-down"
  />
</template>`

const statesCode = `<template>
  <EaButton label="Normal" variant="primary" />
  <EaButton label="Loading" variant="primary" :loading="true" />
  <EaButton label="Disabled" variant="primary" :disabled="true" />
  <EaButton label="Loading & Disabled" variant="secondary" :loading="true" :disabled="true" />
</template>`

const gradientCode = `<template>
  <!-- Basic Gradients -->
  <EaButton label="Sunset" variant="gradient" gradient="sunset" />
  <EaButton label="Ocean" variant="gradient" gradient="ocean" />
  <EaButton label="Purple" variant="gradient" gradient="purple" />
  <EaButton label="Pink" variant="gradient" gradient="pink" />
  <EaButton label="Emerald" variant="gradient" gradient="emerald" />

  <!-- Semantic Gradients -->
  <EaButton label="Error" variant="gradient" gradient="error" />
  <EaButton label="Warning" variant="gradient" gradient="warning" />
  <EaButton label="Info" variant="gradient" gradient="info" />
  <EaButton label="Success" variant="gradient" gradient="success" />

  <!-- Special Gradients -->
  <EaButton label="Fire" variant="gradient" gradient="fire" />
  <EaButton label="Sky" variant="gradient" gradient="sky" />
  <EaButton label="Gold" variant="gradient" gradient="gold" />
  <EaButton label="Dark" variant="gradient" gradient="dark" />

  <!-- Gradient Directions -->
  <EaButton label="To Right" variant="gradient" gradient="success" gradient-direction="to-r" />
  <EaButton label="To Bottom" variant="gradient" gradient="info" gradient-direction="to-b" />
  <EaButton label="To Top Right" variant="gradient" gradient="warning" gradient-direction="to-tr" />
  <EaButton label="To Bottom Left" variant="gradient" gradient="error" gradient-direction="to-bl" />

  <!-- Custom Gradient -->
  <EaButton
    label="Custom"
    variant="gradient"
    custom-gradient="linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
  />
</template>`

const rippleCode = `<template>
  <EaButton
    label="Default Ripple"
    variant="primary"
    :ripple="true"
  />

  <EaButton
    label="Custom Color"
    variant="success"
    :ripple="true"
    ripple-color="rgba(255, 255, 0, 0.7)"
  />

  <EaButton
    label="Large Ripple"
    variant="info"
    :ripple="true"
    ripple-size="lg"
  />
</template>`

const interactiveCode = `<template>
  <p>Click Count: {{ clickCount }}</p>
  <EaButton label="Click Me!" variant="primary" :on-click="incrementCount" />
  <EaButton label="Reset Count" variant="danger" :on-click="resetCount" />
</template>

<script setup>
import { ref } from 'vue'

const clickCount = ref(0)

const incrementCount = () => {
  clickCount.value++
}

const resetCount = () => {
  clickCount.value = 0
}
<\/script>`

const advancedCode = `<template>
  <!-- Full Width -->
  <EaButton
    label="Full Width"
    variant="primary"
    :full-width="true"
  />

  <!-- Custom Colors -->
  <EaButton
    label="Custom Colors"
    variant="primary"
    bg-colour="#8B5CF6"
    text-colour="#FFF"
  />

  <!-- Rounded Full -->
  <EaButton
    label="Rounded Full"
    variant="primary"
    rounded="full"
  />

  <!-- Large Shadow -->
  <EaButton
    label="Large Shadow"
    variant="primary"
    shadow="lg"
  />
</template>`
</script>

<style scoped lang="scss">
.button-demo {
  background: #f8fafc;
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 3rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .demo-description {
    font-size: 1.25rem;
    color: #64748b;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
}

.demo-section {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    &::before {
      content: '';
      width: 4px;
      height: 2rem;
      background: linear-gradient(135deg, #3b82f6, #8b5cf6);
      border-radius: 2px;
    }
  }

  .section-description {
    font-size: 1rem;
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.6;
  }
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.demo-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
}

.demo-subsection {
  margin-bottom: 2.5rem;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }
}

.demo-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

.click-counter {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1e293b;
  padding: 0.75rem 1.5rem;
  background: #f1f5f9;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;

  &--primary {
    background: linear-gradient(135deg, #3b82f6, #2563eb);
    color: white;
    box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(59, 130, 246, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
  }

  &--secondary {
    background: white;
    color: #374151;
    border-color: #d1d5db;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

    &:hover {
      background: #f9fafb;
      border-color: #9ca3af;
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
    }
  }
}

.props-table {
  overflow-x: auto;
  margin-top: 1.5rem;

  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    th, td {
      padding: 1rem 1.25rem;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }

    th {
      background: #f8fafc;
      font-weight: 600;
      color: #374151;
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    td {
      color: #6b7280;
      font-size: 0.875rem;
      line-height: 1.5;

      code {
        background: #f1f5f9;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        font-family: 'Monaco', 'Consolas', monospace;
        font-size: 0.8rem;
        color: #1e293b;
        font-weight: 500;
      }
    }

    tr:last-child {
      th, td {
        border-bottom: none;
      }
    }

    tr:hover {
      background: #f8fafc;
    }
  }
}

@media (max-width: 768px) {
  .button-demo {
    padding: 1rem 0.5rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .demo-section {
    padding: 1.5rem;
  }

  .demo-grid {
    grid-template-columns: 1fr;
  }

  .demo-group {
    flex-direction: column;
    align-items: stretch;
  }

  .props-table {
    font-size: 0.8rem;
  }
}
</style>
