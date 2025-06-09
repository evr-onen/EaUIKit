<template>
  <div class="min-h-screen w-full bg-gray-50 p-8">
    <div class="max-w-7xl mx-auto space-y-12">

      <!-- Header -->
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">EaButton Component Demo</h1>
        <p class="text-xl text-gray-600">Complete showcase of the button component features</p>
      </div>

      <!-- Button Variants -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Button Variants</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EaButton label="Primary" variant="primary" />
          <EaButton label="Secondary" variant="secondary" />
          <EaButton label="Success" variant="success" />
          <EaButton label="Danger" variant="danger" />
          <EaButton label="Warning" variant="warning" />
          <EaButton label="Info" variant="info" />
          <EaButton label="Ghost" variant="ghost" />
          <EaButton label="Outline" variant="outline" />
          <EaButton label="Text" variant="text" />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="Primary" variant="primary" /&gt;
&lt;EaButton label="Success" variant="success" /&gt;
&lt;EaButton label="Danger" variant="danger" /&gt;
&lt;EaButton label="Ghost" variant="ghost" /&gt;
&lt;EaButton label="Outline" variant="outline" /&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Button Sizes -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Button Sizes</h2>
        <div class="flex flex-wrap items-center gap-4">
          <EaButton label="Extra Small" size="xs" variant="primary" />
          <EaButton label="Small" size="sm" variant="primary" />
          <EaButton label="Medium" size="md" variant="primary" />
          <EaButton label="Large" size="lg" variant="primary" />
          <EaButton label="Extra Large" size="xl" variant="primary" />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="Extra Small" size="xs" variant="primary" /&gt;
&lt;EaButton label="Small" size="sm" variant="primary" /&gt;
&lt;EaButton label="Medium" size="md" variant="primary" /&gt;
&lt;EaButton label="Large" size="lg" variant="primary" /&gt;
&lt;EaButton label="Extra Large" size="xl" variant="primary" /&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Loading & Disabled States -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Loading & Disabled States</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <EaButton label="Normal" variant="primary" />
          <EaButton label="Loading" variant="primary" :loading="true" />
          <EaButton label="Disabled" variant="primary" :disabled="true" />
          <EaButton label="Loading & Disabled" variant="secondary" :loading="true" :disabled="true" />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="Normal" variant="primary" /&gt;
&lt;EaButton label="Loading" variant="primary" :loading="true" /&gt;
&lt;EaButton label="Disabled" variant="primary" :disabled="true" /&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Props Documentation -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">📋 Props Documentation</h2>

        <div class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Prop</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Type</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Default</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold">Description</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <!-- Basic Props -->
              <tr><td colspan="4" class="bg-blue-50 font-semibold px-4 py-2 border border-gray-300">Basic Props</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">label</td><td class="border border-gray-300 px-4 py-2">string</td><td class="border border-gray-300 px-4 py-2">-</td><td class="border border-gray-300 px-4 py-2">Button text content</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">variant</td><td class="border border-gray-300 px-4 py-2">ButtonVariant</td><td class="border border-gray-300 px-4 py-2">'primary'</td><td class="border border-gray-300 px-4 py-2">Button style variant</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">size</td><td class="border border-gray-300 px-4 py-2">SizeTypes</td><td class="border border-gray-300 px-4 py-2">'md'</td><td class="border border-gray-300 px-4 py-2">Button size</td></tr>

              <!-- Styling Props -->
              <tr><td colspan="4" class="bg-green-50 font-semibold px-4 py-2 border border-gray-300">Styling Props</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">bgColour</td><td class="border border-gray-300 px-4 py-2">string</td><td class="border border-gray-300 px-4 py-2">-</td><td class="border border-gray-300 px-4 py-2">Custom background color</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">textColour</td><td class="border border-gray-300 px-4 py-2">string</td><td class="border border-gray-300 px-4 py-2">-</td><td class="border border-gray-300 px-4 py-2">Custom text color</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">fullWidth</td><td class="border border-gray-300 px-4 py-2">boolean</td><td class="border border-gray-300 px-4 py-2">false</td><td class="border border-gray-300 px-4 py-2">Full width button</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">rounded</td><td class="border border-gray-300 px-4 py-2">RoundedType</td><td class="border border-gray-300 px-4 py-2">'md'</td><td class="border border-gray-300 px-4 py-2">Border radius</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">shadow</td><td class="border border-gray-300 px-4 py-2">ShadowType</td><td class="border border-gray-300 px-4 py-2">'sm'</td><td class="border border-gray-300 px-4 py-2">Shadow size</td></tr>

              <!-- Gradient Props -->
              <tr><td colspan="4" class="bg-purple-50 font-semibold px-4 py-2 border border-gray-300">Gradient Props</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">gradient</td><td class="border border-gray-300 px-4 py-2">GradientType</td><td class="border border-gray-300 px-4 py-2">'sunset'</td><td class="border border-gray-300 px-4 py-2">Gradient type (when variant='gradient')</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">gradientDirection</td><td class="border border-gray-300 px-4 py-2">GradientDirection</td><td class="border border-gray-300 px-4 py-2">'to-r'</td><td class="border border-gray-300 px-4 py-2">Gradient direction</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">customGradient</td><td class="border border-gray-300 px-4 py-2">string</td><td class="border border-gray-300 px-4 py-2">-</td><td class="border border-gray-300 px-4 py-2">Custom CSS gradient</td></tr>

              <!-- State Props -->
              <tr><td colspan="4" class="bg-yellow-50 font-semibold px-4 py-2 border border-gray-300">State Props</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">loading</td><td class="border border-gray-300 px-4 py-2">boolean</td><td class="border border-gray-300 px-4 py-2">false</td><td class="border border-gray-300 px-4 py-2">Show loading spinner</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">disabled</td><td class="border border-gray-300 px-4 py-2">boolean</td><td class="border border-gray-300 px-4 py-2">false</td><td class="border border-gray-300 px-4 py-2">Disable button</td></tr>

              <!-- Icon Props -->
              <tr><td colspan="4" class="bg-red-50 font-semibold px-4 py-2 border border-gray-300">Icon Props</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">leftIcon</td><td class="border border-gray-300 px-4 py-2">string</td><td class="border border-gray-300 px-4 py-2">-</td><td class="border border-gray-300 px-4 py-2">Left icon class</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">rightIcon</td><td class="border border-gray-300 px-4 py-2">string</td><td class="border border-gray-300 px-4 py-2">-</td><td class="border border-gray-300 px-4 py-2">Right icon class</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">iconOnly</td><td class="border border-gray-300 px-4 py-2">boolean</td><td class="border border-gray-300 px-4 py-2">false</td><td class="border border-gray-300 px-4 py-2">Icon only button</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">iconSize</td><td class="border border-gray-300 px-4 py-2">IconSize</td><td class="border border-gray-300 px-4 py-2">'md'</td><td class="border border-gray-300 px-4 py-2">Icon size</td></tr>

              <!-- Ripple Props -->
              <tr><td colspan="4" class="bg-cyan-50 font-semibold px-4 py-2 border border-gray-300">Ripple Props</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">ripple</td><td class="border border-gray-300 px-4 py-2">boolean</td><td class="border border-gray-300 px-4 py-2">false</td><td class="border border-gray-300 px-4 py-2">Enable ripple effect</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">rippleColor</td><td class="border border-gray-300 px-4 py-2">string</td><td class="border border-gray-300 px-4 py-2">'rgba(255,255,255,0.8)'</td><td class="border border-gray-300 px-4 py-2">Ripple color</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">rippleSize</td><td class="border border-gray-300 px-4 py-2">RippleSize</td><td class="border border-gray-300 px-4 py-2">'md'</td><td class="border border-gray-300 px-4 py-2">Ripple size</td></tr>

              <!-- Interaction Props -->
              <tr><td colspan="4" class="bg-orange-50 font-semibold px-4 py-2 border border-gray-300">Interaction Props</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">onClick</td><td class="border border-gray-300 px-4 py-2">() => void</td><td class="border border-gray-300 px-4 py-2">-</td><td class="border border-gray-300 px-4 py-2">Click handler function</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">type</td><td class="border border-gray-300 px-4 py-2">ButtonType</td><td class="border border-gray-300 px-4 py-2">'button'</td><td class="border border-gray-300 px-4 py-2">Button HTML type</td></tr>
              <tr><td class="border border-gray-300 px-4 py-2 font-mono">animate</td><td class="border border-gray-300 px-4 py-2">boolean</td><td class="border border-gray-300 px-4 py-2">true</td><td class="border border-gray-300 px-4 py-2">Enable hover animations</td></tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div class="bg-gray-50 p-3 rounded">
            <h4 class="font-semibold mb-2">ButtonVariant Options:</h4>
            <p class="font-mono text-xs">primary | secondary | success | danger | warning | info | ghost | outline | text | gradient</p>
          </div>
          <div class="bg-gray-50 p-3 rounded">
            <h4 class="font-semibold mb-2">Size Options:</h4>
            <p class="font-mono text-xs">xs | sm | md | lg | xl</p>
          </div>
          <div class="bg-gray-50 p-3 rounded">
            <h4 class="font-semibold mb-2">Gradient Types:</h4>
            <p class="font-mono text-xs">sunset | ocean | purple | pink | emerald | fire | sky | rainbow | dark | gold</p>
          </div>
        </div>
      </div>

      <!-- Code Examples -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">💻 Code Examples</h2>

        <div class="space-y-6">
          <!-- Basic Usage -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">Basic Usage</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton label="Click Me" /&gt;

&lt;EaButton
  label="Primary Button"
  variant="primary"
  size="md"
/&gt;</code></pre>
            </div>
          </div>

          <!-- Variants -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">Different Variants</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton label="Primary" variant="primary" /&gt;
&lt;EaButton label="Success" variant="success" /&gt;
&lt;EaButton label="Danger" variant="danger" /&gt;
&lt;EaButton label="Ghost" variant="ghost" /&gt;
&lt;EaButton label="Outline" variant="outline" /&gt;</code></pre>
            </div>
          </div>

          <!-- Gradient Usage -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">Gradient Buttons</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton
  label="Sunset Gradient"
  variant="gradient"
  gradient="sunset"
/&gt;

&lt;EaButton
  label="Custom Gradient"
  variant="gradient"
  custom-gradient="linear-gradient(45deg, #ff6b6b, #4ecdc4)"
/&gt;</code></pre>
            </div>
          </div>

          <!-- Icons -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">With Icons</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton label="Left Icon" variant="primary"&gt;
  &lt;template #prefixIcon&gt;
    &lt;IconCross class="w-4 h-4" /&gt;
  &lt;/template&gt;
&lt;/EaButton&gt;

&lt;EaButton variant="danger" :icon-only="true"&gt;
  &lt;template #prefixIcon&gt;
    &lt;IconCross class="w-5 h-5" /&gt;
  &lt;/template&gt;
&lt;/EaButton&gt;</code></pre>
            </div>
          </div>

          <!-- Ripple Effect -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">Ripple Effect</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton
  label="With Ripple"
  variant="primary"
  :ripple="true"
/&gt;

&lt;EaButton
  label="Custom Ripple"
  variant="success"
  :ripple="true"
  ripple-color="rgba(255, 255, 0, 0.6)"
  ripple-size="lg"
/&gt;</code></pre>
            </div>
          </div>

          <!-- States -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">Button States</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton label="Loading" :loading="true" /&gt;

&lt;EaButton label="Disabled" :disabled="true" /&gt;

&lt;EaButton
  label="Full Width"
  :full-width="true"
  variant="primary"
/&gt;</code></pre>
            </div>
          </div>

          <!-- Event Handling -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">Event Handling</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton
  label="Click Handler"
  variant="primary"
  :on-click="handleButtonClick"
/&gt;

&lt;script setup&gt;
const handleButtonClick = () => {
  console.log('Button clicked!')
  // Your logic here
}
&lt;/script&gt;</code></pre>
            </div>
          </div>

          <!-- Advanced Usage -->
          <div>
            <h3 class="text-lg font-medium mb-3 text-gray-700">Advanced Usage</h3>
            <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
              <pre><code>&lt;EaButton
  label="Advanced Button"
  variant="gradient"
  gradient="rainbow"
  size="lg"
  rounded="full"
  shadow="lg"
  :ripple="true"
  ripple-size="lg"
  :animate="true"
  :on-click="advancedHandler"
&gt;
  &lt;template #prefixIcon&gt;
    &lt;IconStar class="w-5 h-5" /&gt;
  &lt;/template&gt;
  &lt;template #suffixIcon&gt;
    &lt;IconArrow class="w-5 h-5" /&gt;
  &lt;/template&gt;
&lt;/EaButton&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Icons -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">With Icons</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EaButton label="Left Icon" variant="primary">
            <template #prefixIcon>
              <IconCross class="w-4 h-4" />
            </template>
          </EaButton>

          <EaButton label="Right Icon" variant="success">
            <template #suffixIcon>
              <IconCross class="w-4 h-4" />
            </template>
          </EaButton>

          <EaButton label="Both Icons" variant="info">
            <template #prefixIcon>
              <IconCross class="w-4 h-4" />
            </template>
            <template #suffixIcon>
              <IconCross class="w-4 h-4" />
            </template>
          </EaButton>

          <EaButton variant="danger" :icon-only="true">
            <template #prefixIcon>
              <IconCross class="w-5 h-5" />
            </template>
          </EaButton>

          <EaButton label="Loading with Icon" variant="primary" :loading="true">
            <template #prefixIcon>
              <IconCross class="w-4 h-4" />
            </template>
          </EaButton>
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="Left Icon" variant="primary"&gt;
  &lt;template #prefixIcon&gt;
    &lt;IconCross class="w-4 h-4" /&gt;
  &lt;/template&gt;
&lt;/EaButton&gt;

&lt;EaButton variant="danger" :icon-only="true"&gt;
  &lt;template #prefixIcon&gt;
    &lt;IconCross class="w-5 h-5" /&gt;
  &lt;/template&gt;
&lt;/EaButton&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Rounded Variants -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Rounded Variants</h2>
        <div class="flex flex-wrap items-center gap-4">
          <EaButton label="None" rounded="none" variant="primary" />
          <EaButton label="Small" rounded="sm" variant="primary" />
          <EaButton label="Medium" rounded="md" variant="primary" />
          <EaButton label="Large" rounded="lg" variant="primary" />
          <EaButton label="Full" rounded="full" variant="primary" />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="None" rounded="none" variant="primary" /&gt;
&lt;EaButton label="Small" rounded="sm" variant="primary" /&gt;
&lt;EaButton label="Full" rounded="full" variant="primary" /&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Shadow Variants -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Shadow Variants</h2>
        <div class="flex flex-wrap items-center gap-4">
          <EaButton label="No Shadow" shadow="none" variant="primary" />
          <EaButton label="Small" shadow="sm" variant="primary" />
          <EaButton label="Medium" shadow="md" variant="primary" />
          <EaButton label="Large" shadow="lg" variant="primary" />
          <EaButton label="Extra Large" shadow="xl" variant="primary" />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="No Shadow" shadow="none" variant="primary" /&gt;
&lt;EaButton label="Small" shadow="sm" variant="primary" /&gt;
&lt;EaButton label="Extra Large" shadow="xl" variant="primary" /&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Full Width & Interactive -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Full Width & Interactive</h2>
        <div class="space-y-4">
          <EaButton
            label="Full Width Button"
            variant="primary"
            :full-width="true"
            :on-click="handleClick"
          />

          <EaButton
            label="Animated Button (Hover to see effect)"
            variant="success"
            :animate="true"
            :on-click="handleClick"
          />

          <EaButton
            label="Non-Animated Button"
            variant="secondary"
            :animate="false"
            :on-click="handleClick"
          />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton
  label="Full Width Button"
  variant="primary"
  :full-width="true"
  :on-click="handleClick"
/&gt;

&lt;EaButton
  label="Animated Button"
  variant="success"
  :animate="true"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Custom Colors -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Custom Colors</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EaButton
            label="Custom Purple"
            variant="primary"
            bg-colour="#8B5CF6"
          />

          <EaButton
            label="Custom Orange"
            variant="primary"
            bg-colour="#F97316"
          />

          <EaButton
            label="Custom Pink"
            variant="primary"
            bg-colour="#EC4899"
            text-colour="#FFF"
          />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton
  label="Custom Purple"
  variant="primary"
  bg-colour="#8B5CF6"
/&gt;

&lt;EaButton
  label="Custom Colors"
  variant="primary"
  bg-colour="#EC4899"
  text-colour="#FFF"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Gradient Buttons -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">🌈 Gradient Buttons</h2>
        <div class="space-y-6">

          <!-- Predefined Gradients -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700">Predefined Gradients</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <EaButton label="Sunset" variant="gradient" gradient="sunset" />
              <EaButton label="Ocean" variant="gradient" gradient="ocean" />
              <EaButton label="Purple" variant="gradient" gradient="purple" />
              <EaButton label="Pink" variant="gradient" gradient="pink" />
              <EaButton label="Emerald" variant="gradient" gradient="emerald" />
              <EaButton label="Fire" variant="gradient" gradient="fire" />
              <EaButton label="Sky" variant="gradient" gradient="sky" />
              <EaButton label="Rainbow" variant="gradient" gradient="rainbow" />
              <EaButton label="Dark" variant="gradient" gradient="dark" />
              <EaButton label="Gold" variant="gradient" gradient="gold" />
            </div>
          </div>

          <!-- Gradient Directions -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700">Gradient Directions (with Sunset)</h3>
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              <EaButton label="→" variant="gradient" gradient="sunset" gradient-direction="to-r" size="sm" />
              <EaButton label="←" variant="gradient" gradient="sunset" gradient-direction="to-l" size="sm" />
              <EaButton label="↑" variant="gradient" gradient="sunset" gradient-direction="to-t" size="sm" />
              <EaButton label="↓" variant="gradient" gradient="sunset" gradient-direction="to-b" size="sm" />
              <EaButton label="↗" variant="gradient" gradient="sunset" gradient-direction="to-tr" size="sm" />
              <EaButton label="↖" variant="gradient" gradient="sunset" gradient-direction="to-tl" size="sm" />
              <EaButton label="↘" variant="gradient" gradient="sunset" gradient-direction="to-br" size="sm" />
              <EaButton label="↙" variant="gradient" gradient="sunset" gradient-direction="to-bl" size="sm" />
            </div>
          </div>

          <!-- Custom Gradients -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700">Custom Gradients</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <EaButton
                label="Custom Gradient 1"
                variant="gradient"
                custom-gradient="linear-gradient(45deg, #667eea 0%, #764ba2 100%)"
              />

              <EaButton
                label="Custom Gradient 2"
                variant="gradient"
                custom-gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
              />

              <EaButton
                label="Radial Gradient"
                variant="gradient"
                custom-gradient="radial-gradient(circle, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)"
              />

              <EaButton
                label="Complex Gradient"
                variant="gradient"
                custom-gradient="linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4, #FFEAA7)"
              />
            </div>
          </div>

        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="Sunset" variant="gradient" gradient="sunset" /&gt;

&lt;EaButton
  label="Custom Gradient"
  variant="gradient"
  custom-gradient="linear-gradient(45deg, #ff6b6b, #4ecdc4)"
/&gt;

&lt;EaButton
  label="Direction"
  variant="gradient"
  gradient="ocean"
  gradient-direction="to-r"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Full Width & Interactive -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Full Width & Interactive</h2>
        <div class="space-y-4">
          <EaButton
            label="Full Width Button"
            variant="primary"
            :full-width="true"
            :on-click="handleClick"
          />

          <EaButton
            label="Animated Button (Hover to see effect)"
            variant="success"
            :animate="true"
            :on-click="handleClick"
          />

          <EaButton
            label="Non-Animated Button"
            variant="secondary"
            :animate="false"
            :on-click="handleClick"
          />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton
  label="Full Width Button"
  variant="primary"
  :full-width="true"
  :on-click="handleClick"
/&gt;

&lt;EaButton
  label="Animated Button"
  variant="success"
  :animate="true"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Custom Colors -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Custom Colors</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <EaButton
            label="Custom Purple"
            variant="primary"
            bg-colour="#8B5CF6"
          />

          <EaButton
            label="Custom Orange"
            variant="primary"
            bg-colour="#F97316"
          />

          <EaButton
            label="Custom Pink"
            variant="primary"
            bg-colour="#EC4899"
            text-colour="#FFF"
          />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton
  label="Custom Purple"
  variant="primary"
  bg-colour="#8B5CF6"
/&gt;

&lt;EaButton
  label="Custom Colors"
  variant="primary"
  bg-colour="#EC4899"
  text-colour="#FFF"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Button Types -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Button Types</h2>
        <div class="flex flex-wrap gap-4">
          <EaButton label="Button Type" type="button" variant="primary" />
          <EaButton label="Submit Type" type="submit" variant="success" />
          <EaButton label="Reset Type" type="reset" variant="danger" />
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton label="Button Type" type="button" variant="primary" /&gt;
&lt;EaButton label="Submit Type" type="submit" variant="success" /&gt;
&lt;EaButton label="Reset Type" type="reset" variant="danger" /&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Interactive Demo -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">Interactive Demo</h2>
        <div class="space-y-4">
          <p class="text-gray-600">Click Count: {{ clickCount }}</p>
          <div class="flex flex-wrap gap-4">
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

            <EaButton
              label="Toggle Loading"
              variant="info"
              :loading="isLoading"
              :on-click="toggleLoading"
            />
          </div>
        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton
  label="Click Me!"
  variant="primary"
  :on-click="incrementCount"
/&gt;

&lt;EaButton
  label="Toggle Loading"
  variant="info"
  :loading="isLoading"
  :on-click="toggleLoading"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Ripple Effects -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">💧 Ripple Effects</h2>
        <div class="space-y-6">

          <!-- Basic Ripples -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700">Basic Ripple Effects</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <EaButton
                label="No Ripple"
                variant="primary"
                :ripple="false"
                :on-click="handleClick"
              />

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
                label="Dark Ripple"
                variant="warning"
                :ripple="true"
                ripple-color="rgba(0, 0, 0, 0.3)"
                :on-click="handleClick"
              />
            </div>
          </div>

          <!-- Ripple Sizes -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700">Ripple Sizes</h3>
            <div class="flex flex-wrap gap-4">
              <EaButton
                label="Small Ripple"
                variant="info"
                :ripple="true"
                ripple-size="sm"
                :on-click="handleClick"
              />

              <EaButton
                label="Medium Ripple"
                variant="info"
                :ripple="true"
                ripple-size="md"
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
          </div>

          <!-- Different Variants + Ripple -->
          <div>
            <h3 class="text-lg font-medium mb-4 text-gray-700">Different Variants + Ripple</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <EaButton
                label="Ghost + Ripple"
                variant="ghost"
                :ripple="true"
                ripple-color="rgba(0, 0, 0, 0.1)"
                :on-click="handleClick"
              />

              <EaButton
                label="Outline + Ripple"
                variant="outline"
                :ripple="true"
                ripple-color="rgba(0, 0, 0, 0.1)"
                :on-click="handleClick"
              />

              <EaButton
                label="Text + Ripple"
                variant="text"
                :ripple="true"
                ripple-color="rgba(59, 130, 246, 0.2)"
                :on-click="handleClick"
              />
            </div>
          </div>

        </div>

        <!-- Code Example -->
        <div class="mt-6">
          <h3 class="text-lg font-medium mb-3 text-gray-700">💻 Code Example</h3>
          <div class="bg-gray-900 rounded-lg p-4 text-green-400 font-mono text-sm overflow-x-auto">
            <pre><code>&lt;EaButton
  label="Default Ripple"
  variant="primary"
  :ripple="true"
  :on-click="handleClick"
/&gt;

&lt;EaButton
  label="Custom Color"
  variant="success"
  :ripple="true"
  ripple-color="rgba(255, 255, 0, 0.7)"
  :on-click="handleClick"
/&gt;

&lt;EaButton
  label="Large Ripple"
  variant="info"
  :ripple="true"
  ripple-size="lg"
  :on-click="handleClick"
/&gt;</code></pre>
          </div>
        </div>
      </div>

      <!-- Props Documentation -->
      <div class="bg-white rounded-lg p-6 shadow-sm">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">📋 Props Documentation</h2>

        <div class="overflow-x-auto">
          <table class="w-full border-collapse border border-gray-300">
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Prop</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Type</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Default</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Description</th>
                <th class="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-700">Category</th>
              </tr>
            </thead>
            <tbody>
              <!-- Basic Props -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">label</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">Button text content</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Basic</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">variant</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'primary'</td>
                <td class="border border-gray-300 px-4 py-2">Button visual style variant</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Basic</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">size</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'md'</td>
                <td class="border border-gray-300 px-4 py-2">Button size (xs, sm, md, lg, xl)</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Basic</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">type</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'button'</td>
                <td class="border border-gray-300 px-4 py-2">HTML button type</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Basic</td>
              </tr>

              <!-- Styling Props -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">bgColour</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">Custom background color</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Styling</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">textColour</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">Custom text color</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Styling</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">rounded</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'md'</td>
                <td class="border border-gray-300 px-4 py-2">Border radius (none, sm, md, lg, full)</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Styling</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">shadow</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'sm'</td>
                <td class="border border-gray-300 px-4 py-2">Box shadow size (none, sm, md, lg, xl)</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Styling</td>
              </tr>

              <!-- Gradient Props -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">gradient</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'sunset'</td>
                <td class="border border-gray-300 px-4 py-2">Predefined gradient type</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Gradient</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">gradientDirection</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'to-r'</td>
                <td class="border border-gray-300 px-4 py-2">Gradient direction</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Gradient</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">customGradient</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">Custom CSS gradient definition</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Gradient</td>
              </tr>

              <!-- State Props -->
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">loading</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">boolean</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">false</td>
                <td class="border border-gray-300 px-4 py-2">Show loading spinner</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">State</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">disabled</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">boolean</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">false</td>
                <td class="border border-gray-300 px-4 py-2">Disable button interaction</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">State</td>
              </tr>

              <!-- Icon Props -->
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">leftIcon</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">CSS class for left icon</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Icon</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">rightIcon</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">CSS class for right icon</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Icon</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">iconSize</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'md'</td>
                <td class="border border-gray-300 px-4 py-2">Icon size (xs, sm, md, lg, xl)</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Icon</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">iconOnly</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">boolean</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">false</td>
                <td class="border border-gray-300 px-4 py-2">Show only icon without text</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Icon</td>
              </tr>

              <!-- Interaction Props -->
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">onClick</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">function</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">Click event handler</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Interaction</td>
              </tr>

              <!-- Advanced Props -->
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">animate</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">boolean</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">true</td>
                <td class="border border-gray-300 px-4 py-2">Enable hover animations</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Advanced</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">fullWidth</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">boolean</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">false</td>
                <td class="border border-gray-300 px-4 py-2">Make button full width of container</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Advanced</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">buttonClass</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">-</td>
                <td class="border border-gray-300 px-4 py-2">Additional CSS classes</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Advanced</td>
              </tr>

              <!-- Ripple Props -->
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">ripple</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">boolean</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">false</td>
                <td class="border border-gray-300 px-4 py-2">Enable ripple effect on click</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Ripple</td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">rippleColor</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'rgba(255, 255, 255, 0.8)'</td>
                <td class="border border-gray-300 px-4 py-2">Ripple effect color</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Ripple</td>
              </tr>
              <tr class="bg-gray-25">
                <td class="border border-gray-300 px-4 py-2 text-blue-600 font-mono">rippleSize</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-600 font-mono">string</td>
                <td class="border border-gray-300 px-4 py-2 text-gray-500">'md'</td>
                <td class="border border-gray-300 px-4 py-2">Ripple effect size (sm, md, lg)</td>
                <td class="border border-gray-300 px-4 py-2 text-sm text-gray-500">Ripple</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconCross from '@/components/icons/icon-cross.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'

// Reactive state
const clickCount = ref(0)
const isLoading = ref(false)

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

const toggleLoading = () => {
  isLoading.value = !isLoading.value

  // Auto reset loading after 3 seconds
  if (isLoading.value) {
    setTimeout(() => {
      isLoading.value = false
    }, 3000)
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
