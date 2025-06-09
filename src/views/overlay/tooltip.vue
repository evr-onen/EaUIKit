<template>
  <div class="tooltip-demo p-6 space-y-8">
    <div class="flex items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-900">Tooltip</h1>
    </div>

    <p class="text-gray-600 mb-8">
      Tooltip component provides advisory information for elements.
    </p>

    <!-- Position Examples -->
    <div class="demo-section">
      <h2 class="text-xl font-semibold mb-4">Position</h2>
      <p class="text-gray-600 mb-4">
        There are four choices to position the tooltip, default value is <code>right</code> and alternatives are <code>top</code>, <code>bottom</code>, <code>left</code>.
      </p>

      <div class="flex flex-wrap gap-4">
        <EaTooltip value="Enter your username" position="right">
          <input
            type="text"
            placeholder="Right"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </EaTooltip>

        <EaTooltip value="Enter your username" position="top">
          <input
            type="text"
            placeholder="Top"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </EaTooltip>

        <EaTooltip value="Enter your username" position="bottom">
          <input
            type="text"
            placeholder="Bottom"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </EaTooltip>

        <EaTooltip value="Enter your username" position="left">
          <input
            type="text"
            placeholder="Left"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </EaTooltip>
      </div>
    </div>

    <!-- Event Examples -->
    <div class="demo-section">
      <h2 class="text-xl font-semibold mb-4">Event</h2>
      <p class="text-gray-600 mb-4">
        Event to display the tooltip is defined with event prop, default event is <code>hover</code>.
      </p>

      <div class="flex flex-wrap gap-4">
        <EaTooltip value="Enter your username" event="focus" position="top">
          <input
            type="text"
            placeholder="Focus"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </EaTooltip>

        <EaTooltip value="Enter your username" event="hover" position="top">
          <input
            type="text"
            placeholder="Hover"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </EaTooltip>
      </div>
    </div>

        <!-- Mouse Interaction -->
    <div class="demo-section">
      <h2 class="text-xl font-semibold mb-4">Mouse Interaction</h2>
      <p class="text-gray-600 mb-4">
        Tooltips automatically hide when mouse leaves the target element or when scrolling occurs.
      </p>

      <div class="flex flex-wrap gap-4">
        <EaTooltip value="Hover over me!" position="bottom">
          <input
            type="text"
            placeholder="Hover to see tooltip"
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
        </EaTooltip>

        <EaTooltip value="Tooltip stays visible while hovering over it" position="bottom">
          <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Hover Me
          </button>
        </EaTooltip>
      </div>
    </div>



    <!-- Custom Examples -->
    <div class="demo-section">
      <h2 class="text-xl font-semibold mb-4">Custom</h2>
      <p class="text-gray-600 mb-4">
        A tooltip sample with a custom style and content.
      </p>

      <div class="flex flex-wrap gap-4">
        <EaTooltip
          :value="{
            value: 'PrimeVue Rocks',
            position: 'bottom',
            pt: {
              arrow: {
                style: {
                  borderBottomColor: '#3b82f6'
                }
              },
              text: 'bg-blue-600 text-white font-medium'
            }
          }"
        >
          <button class="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
            Button
          </button>
        </EaTooltip>
      </div>
    </div>

    <!-- Interactive Examples -->
    <div class="demo-section">
      <h2 class="text-xl font-semibold mb-4">Programmatic Control</h2>
      <p class="text-gray-600 mb-4">
        Tooltip can be controlled programmatically using exposed methods.
      </p>

      <div class="flex flex-wrap gap-4">
        <EaTooltip ref="programmaticTooltip" value="Programmatically controlled tooltip">
          <button
            class="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            @click="handleProgrammaticShow"
          >
            Show Tooltip
          </button>
        </EaTooltip>

        <button
          class="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          @click="handleProgrammaticHide"
        >
          Hide Tooltip
        </button>
      </div>
    </div>

    <!-- Accessibility -->
    <div class="demo-section">
      <h2 class="text-xl font-semibold mb-4">Accessibility</h2>
      <div class="bg-gray-50 rounded-lg p-4">
        <h3 class="font-semibold mb-2">Screen Reader</h3>
        <p class="text-sm text-gray-600 mb-4">
          Tooltip component uses <code>tooltip</code> role and when it becomes visible the generated id of the tooltip is defined as the <code>aria-describedby</code> of the target.
        </p>

        <h3 class="font-semibold mb-2">Keyboard Support</h3>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2">Key</th>
                <th class="text-left py-2">Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2"><code>escape</code></td>
                <td class="py-2">Closes the tooltip when focus is on the target.</td>
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
import EaTooltip from '@/components/ui/overlay/EaTooltip/EaTooltip.vue'

const programmaticTooltip = ref<InstanceType<typeof EaTooltip>>()

const handleProgrammaticShow = () => {
  programmaticTooltip.value?.showTooltip()
}

const handleProgrammaticHide = () => {
  programmaticTooltip.value?.hideTooltip()
}
</script>

<style scoped lang="scss">
.tooltip-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.demo-section {
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
}

code {
  background: #f3f4f6;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Menlo', monospace;
  font-size: 0.875rem;
}

table {
  border-collapse: collapse;
}

th, td {
  border-bottom: 1px solid #e5e7eb;
}
</style>
