<template>
  <div class="modal-demo">
    <div class="demo-container">
      <!-- Header Section -->
      <div class="demo-header">
        <h1>EaModal Component</h1>
      <p class="demo-description">
          A flexible and accessible modal component with various configuration options,
          lifecycle events, and programmatic control.
      </p>
      </div>

      <!-- Quick Demo Section -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <p class="section-description">
          Try out different modal variations with these interactive examples.
        </p>

        <div class="demo-grid">
          <div class="demo-card">
            <h4>Basic Modal</h4>
            <p>Simple modal with title and content</p>
          <button @click="openBasicModal" class="btn btn--primary">
              Open Basic
          </button>
          </div>

          <div class="demo-card">
            <h4>Large Modal</h4>
            <p>Modal with larger size variant</p>
            <button @click="openLargeModal" class="btn btn--primary">
              Open Large
            </button>
          </div>

          <div class="demo-card">
            <h4>No Close Button</h4>
            <p>Modal without close button</p>
            <button @click="openNoCloseModal" class="btn btn--primary">
              Open No Close
            </button>
        </div>

          <div class="demo-card">
            <h4>Custom Footer</h4>
            <p>Modal with custom footer buttons</p>
            <button @click="openCustomFooterModal" class="btn btn--primary">
              Open Custom
            </button>
        </div>
        </div>

        <CodeBlock
          :code="quickDemoCode"
          title="Quick Demo Usage"
        />
      </section>

      <!-- Size Variants -->
      <section class="demo-section">
        <h2>Size Variants</h2>
        <p class="section-description">
          EaModal supports six different size options: auto (default), sm, md, lg, xl, and full. Each size is optimized for different use cases.
        </p>

        <div class="demo-group">
          <button @click="openSizeModal('auto')" class="btn btn--secondary">Auto (auto)</button>
          <button @click="openSizeModal('sm')" class="btn btn--secondary">Small (sm)</button>
          <button @click="openSizeModal('md')" class="btn btn--secondary">Medium (md)</button>
          <button @click="openSizeModal('lg')" class="btn btn--secondary">Large (lg)</button>
          <button @click="openSizeModal('xl')" class="btn btn--secondary">Extra Large (xl)</button>
          <button @click="openSizeModal('full')" class="btn btn--secondary">Full Screen (full)</button>
        </div>

        <CodeBlock
          :code="sizeVariantsCode"
          title="Size Variants Example"
        />
      </section>

      <!-- Behavior Options -->
      <section class="demo-section">
        <h2>Behavior Options</h2>
        <p class="section-description">
          Control modal behavior with closable and maskClosable properties.
        </p>

        <div class="demo-group">
          <button @click="openBehaviorModal('closable')" class="btn btn--secondary">
            Non-Closable Modal
          </button>
          <button @click="openBehaviorModal('maskClosable')" class="btn btn--secondary">
            No Mask Close
          </button>
          <button @click="openBehaviorModal('both')" class="btn btn--secondary">
            Both Disabled
          </button>
        </div>

        <CodeBlock
          :code="behaviorOptionsCode"
          title="Behavior Options Example"
        />
      </section>

      <!-- Lifecycle Events -->
      <section class="demo-section">
        <h2>Lifecycle Events</h2>
        <p class="section-description">
          Monitor modal lifecycle with various event callbacks and listeners.
        </p>

        <div class="demo-group">
          <button @click="openLifecycleModal" class="btn btn--primary">
            Open Lifecycle Modal
          </button>
          <button @click="clearLogs" class="btn btn--secondary">
            Clear Logs
          </button>
        </div>

        <div class="logs-container">
          <h4>Event Logs:</h4>
          <div class="logs">
            <div v-for="(log, index) in eventLogs" :key="index" class="log-item">
              <span class="log-time">{{ log.time }}</span>
              <span class="log-message">{{ log.message }}</span>
            </div>
            <div v-if="eventLogs.length === 0" class="log-empty">
              No events logged yet. Open the lifecycle modal to see events.
            </div>
          </div>
        </div>

        <CodeBlock
          :code="lifecycleEventsCode"
          title="Lifecycle Events Example"
        />
      </section>

      <!-- Programmatic Control -->
      <section class="demo-section">
        <h2>Programmatic Control</h2>
        <p class="section-description">
          Use the useModal composable for programmatic modal control without v-model.
        </p>

        <div class="demo-group">
          <button @click="openProgrammaticModal" class="btn btn--primary">
            Open via useModal
          </button>
          <button @click="openConfirmModal" class="btn btn--secondary">
            Confirm Dialog
          </button>
          <button @click="openAlertModal" class="btn btn--secondary">
            Alert Dialog
          </button>
        </div>

        <CodeBlock
          :code="programmaticControlCode"
          title="Programmatic Control Example"
        />
      </section>

      <!-- Slot Usage -->
      <section class="demo-section">
        <h2>Custom Slots</h2>
        <p class="section-description">
          Customize modal content using header, default, and footer slots.
        </p>

        <div class="demo-group">
          <button @click="openSlotModal" class="btn btn--primary">
            Open Custom Slots Modal
          </button>
        </div>

        <CodeBlock
          :code="slotUsageCode"
          title="Custom Slots Example"
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
                <td><code>modelValue</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Controls the visibility of the modal</td>
              </tr>
              <tr>
                <td><code>title</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Modal title text displayed in header</td>
              </tr>
              <tr>
                <td><code>content</code></td>
                <td>String</td>
                <td><code>undefined</code></td>
                <td>Modal content text displayed in body</td>
              </tr>
              <tr>
                <td><code>size</code></td>
                <td>'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full'</td>
                <td><code>'auto'</code></td>
                <td>Size variant of the modal</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Whether to show the close button in header</td>
              </tr>
              <tr>
                <td><code>maskClosable</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Whether clicking the overlay closes the modal</td>
              </tr>
              <tr>
                <td><code>showHeader</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Whether to display the header section</td>
              </tr>
              <tr>
                <td><code>showFooter</code></td>
                <td>Boolean</td>
                <td><code>false</code></td>
                <td>Whether to display the footer section</td>
              </tr>
              <tr>
                <td><code>showDefaultButtons</code></td>
                <td>Boolean</td>
                <td><code>true</code></td>
                <td>Whether to show default Cancel/Confirm buttons in footer</td>
              </tr>
              <tr>
                <td><code>onOpen</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called when modal opens</td>
              </tr>
              <tr>
                <td><code>onClose</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called when modal closes</td>
              </tr>
              <tr>
                <td><code>onBeforeOpen</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called before modal opens</td>
              </tr>
              <tr>
                <td><code>onBeforeClose</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called before modal closes</td>
              </tr>
              <tr>
                <td><code>onAfterOpen</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called after modal opens</td>
              </tr>
              <tr>
                <td><code>onAfterClose</code></td>
                <td>Function</td>
                <td><code>undefined</code></td>
                <td>Callback function called after modal closes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Events Documentation -->
      <section class="demo-section">
        <h2>Events</h2>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Payload</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>update:modelValue</code></td>
                <td>Boolean</td>
                <td>Emitted when modal visibility changes</td>
              </tr>
              <tr>
                <td><code>open</code></td>
                <td>-</td>
                <td>Emitted when modal opens</td>
              </tr>
              <tr>
                <td><code>close</code></td>
                <td>-</td>
                <td>Emitted when modal closes</td>
              </tr>
              <tr>
                <td><code>confirm</code></td>
                <td>-</td>
                <td>Emitted when confirm button is clicked</td>
              </tr>
              <tr>
                <td><code>before-open</code></td>
                <td>-</td>
                <td>Emitted before modal opens</td>
              </tr>
              <tr>
                <td><code>before-close</code></td>
                <td>-</td>
                <td>Emitted before modal closes</td>
              </tr>
              <tr>
                <td><code>after-open</code></td>
                <td>-</td>
                <td>Emitted after modal opens</td>
              </tr>
              <tr>
                <td><code>after-close</code></td>
                <td>-</td>
                <td>Emitted after modal closes</td>
              </tr>
            </tbody>
          </table>
    </div>
      </section>

      <!-- Slots Documentation -->
      <section class="demo-section">
        <h2>Slots</h2>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Slot</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>header</code></td>
                <td>Custom header content (replaces title)</td>
              </tr>
              <tr>
                <td><code>default</code></td>
                <td>Main modal content (replaces content prop)</td>
              </tr>
              <tr>
                <td><code>footer</code></td>
                <td>Custom footer content (replaces default buttons)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- useModal Methods -->
      <section class="demo-section">
        <h2>useModal Methods</h2>
        <div class="props-table">
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Parameters</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>openModal</code></td>
                <td>options: Partial&lt;ModalState&gt;</td>
                <td>Opens modal with specified options</td>
              </tr>
              <tr>
                <td><code>closeModal</code></td>
                <td>-</td>
                <td>Closes the currently open modal</td>
              </tr>
              <tr>
                <td><code>toggleModal</code></td>
                <td>-</td>
                <td>Toggles modal visibility</td>
              </tr>
              <tr>
                <td><code>showConfirmModal</code></td>
                <td>title, content, onConfirm?, onCancel?</td>
                <td>Shows a confirmation dialog</td>
              </tr>
              <tr>
                <td><code>showAlertModal</code></td>
                <td>title, content, onOk?</td>
                <td>Shows an alert dialog</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>

    <!-- Global Modal for useModal -->
    <EaModal />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import EaModal from '@/components/ui/overlay/EaModal/index.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'
import { useModal } from '@/components/ui/overlay/EaModal/useModal'

// useModal composable
const { openModal, showConfirmModal, showAlertModal } = useModal()

// Event logging
interface LogEntry {
  time: string
  message: string
}

const eventLogs = ref<LogEntry[]>([])

// Methods
const openBasicModal = () => {
  openModal({
    title: 'Basic Modal',
    content: `Welcome to EaModal!

This is a basic modal demonstration with default settings. It includes:

✅ Responsive design that adapts to different screen sizes
✅ Accessible keyboard navigation (try pressing Escape)
✅ Click outside to close functionality
✅ Smooth animations and transitions
✅ Clean, modern styling

The modal is built with Vue 3 and TypeScript, providing excellent developer experience and type safety.

You can customize every aspect of this modal using props, slots, and event handlers.`,
    size: 'auto',
    showFooter: true
  })
}

const openLargeModal = () => {
  openModal({
    title: 'Large Modal',
    content: `Large Modal Demonstration

This modal uses the 'lg' size variant, providing more space for content. Perfect for:

📋 Detailed forms and data entry
📊 Charts and data visualization
📝 Rich text content and documentation
🖼️ Image galleries and media content
⚙️ Complex configuration panels

Key Features:
• Maintains responsive behavior on mobile devices
• Optimized spacing and typography
• Smooth scaling animations
• Consistent with design system

The large size is ideal when you need to display substantial content while maintaining good user experience and readability.`,
    size: 'lg',
    showFooter: true
  })
}

const openNoCloseModal = () => {
  openModal({
    title: 'No Close Button',
    content: `Modal Without Close Button

This modal demonstrates the 'closable: false' configuration. Notice that:

🚫 No X button is displayed in the header
✅ You can still close by clicking outside the modal
✅ Escape key still works for accessibility
✅ Programmatic closing is still available

Use Cases:
• Guided workflows where users shouldn't skip steps
• Important notifications that require acknowledgment
• Forms where accidental closing could lose data
• Loading states or progress indicators

This configuration helps prevent accidental modal dismissal while maintaining accessibility standards.`,
    closable: false,
    maskClosable: true,
    showFooter: true
  })
}

const openCustomFooterModal = () => {
  openModal({
    title: 'Custom Footer',
    content: `Custom Footer Modal

This modal demonstrates footer functionality with default Cancel and Confirm buttons:

🎨 Default styled buttons with consistent design
📝 Cancel and Confirm action buttons
💾 Built-in button functionality
🔄 Consistent user experience
📊 Standard modal interactions

Default Footer Features:
• Cancel button - closes the modal
• Confirm button - triggers confirm event
• Consistent styling and spacing
• Keyboard navigation support
• Accessibility compliant

For custom footers, you can use the component directly:
<EaModal v-model="showModal" :showFooter="true">
  <template #footer>
    <button class="btn btn--primary">Save Changes</button>
    <button class="btn btn--secondary">Cancel</button>
  </template>
</EaModal>

Benefits:
• Complete control over footer layout
• Custom styling and branding
• Complex button interactions
• Conditional rendering based on state
• Integration with form validation`,
    size: 'auto',
    showFooter: true
  })
}

const openSizeModal = (size: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full') => {
  const modalConfigs = {
    auto: {
      title: 'AUTO Size Modal',
      content: `Automatic Content-Based Sizing

This modal automatically sizes itself based on the content length.

📐 Size Properties:
• Width: Automatic based on content
• Minimum width: 320px
• Maximum width: 90vw
• Height: Automatic based on content

🎯 Use Cases:
• Dynamic content
• Variable text lengths
• Responsive layouts
• Content-driven sizing

✨ Features:
• Smart sizing algorithm
• Responsive design
• Content adaptation
• Minimum and maximum constraints`
    },
    sm: {
      title: 'SMALL Size Modal',
      content: `Small Size Modal

This modal is optimized for simple confirmations and quick actions.

📐 Size: 400px width

🎯 Ideal Usage:
• Confirmation dialogs
• Simple alerts
• Quick settings
• Delete confirmations

✅ Features:
• Compact design
• Fast interaction
• Minimal space usage

This is a small modal with limited content to demonstrate the 400px width constraint.`
    },
    md: {
      title: 'MEDIUM Size Modal',
      content: `Medium Size Modal

Provides balanced space for most common use cases.

📐 Size: 600px width

🎯 Ideal Usage:
• Contact forms
• Login/signup forms
• Basic settings
• Content preview
• User profile editing

✅ Features:
• Balanced space distribution
• Common usage scenarios
• Optimal user experience
• Suitable for forms and content

This medium modal provides more space than the small modal, allowing for more detailed content and better user interaction. The 600px width gives enough room for forms, detailed text, and multiple UI elements while maintaining good readability and user experience.`
    },
    lg: {
      title: 'LARGE Size Modal',
      content: `Large Size Modal

Offers extensive space for complex content and forms.

📐 Size: 800px width

🎯 Ideal Usage:
• Detailed forms
• Data tables
• Rich content
• Multi-step wizards
• Advanced settings panels
• Report viewing

✅ Features:
• Wide content area
• Suitable for complex structures
• Multi-component support
• Detailed information presentation
• Professional appearance

This large modal is designed for comprehensive content that requires significant horizontal space. With 800px width, it can accommodate complex layouts, detailed forms with multiple columns, data tables, rich text content, and advanced user interfaces. The increased width allows for better organization of information and improved user workflow in professional applications.

Perfect for enterprise applications, detailed reporting interfaces, and complex data entry forms where screen real estate is crucial for productivity and user experience.`
    },
    xl: {
      title: 'EXTRA LARGE Size Modal',
      content: `Extra Large Size Modal

Provides maximum space for comprehensive interfaces.

📐 Size: 1000px width

🎯 Ideal Usage:
• Complex control panels
• Full-featured editors
• Detailed reports
• Media galleries
• Dashboard views
• Advanced data analysis
• Multi-tab structures

✅ Features:
• Maximum content area
• Professional applications
• Complex data structures
• Multi-panel support
• Advanced user interface
• Enterprise-level features

This extra large modal represents the pinnacle of modal sizing for standard desktop applications. With a generous 1000px width, it provides ample space for the most demanding user interfaces and complex workflows.

The XL modal is ideal for:
• Comprehensive dashboard interfaces with multiple data panels
• Advanced text editors with toolbars and side panels
• Complex form builders with drag-and-drop functionality
• Detailed reporting interfaces with charts and tables
• Media management systems with preview capabilities
• Multi-step configuration wizards with extensive options
• Enterprise-level control panels with numerous settings

This size ensures that even the most complex applications can provide an optimal user experience without feeling cramped or requiring excessive scrolling. It's perfect for power users and professional applications where productivity and comprehensive feature access are paramount.`
    },
    full: {
      title: 'FULL SCREEN Modal',
      content: `Full Screen Modal

Utilizes the entire viewport to provide maximum experience.

📐 Size: Full screen (100vw - 32px)

🎯 Ideal Usage:
• Complex applications
• Full-screen editors
• Immersive experiences
• Mobile-first designs
• Game interfaces
• Media players
• Comprehensive dashboards

✅ Features:
• Full screen experience
• Maximum space utilization
• Immersive design
• Mobile compatible
• Focused workspace
• Professional application feel
• Advanced user interaction

🚀 Advantages:
• Eliminates distracting elements
• Provides maximum productivity
• Modern application experience
• Complete control and focus`
    }
  }

  const config = modalConfigs[size]

  openModal({
    title: config.title,
    content: config.content,
    size: size,
    showFooter: true
  })
}

const openBehaviorModal = (type: 'closable' | 'maskClosable' | 'both') => {
  const configs = {
    closable: {
      title: 'Non-Closable Modal',
      content: `Non-Closable Modal Configuration

This modal demonstrates 'closable: false' behavior:

🚫 Close button (X) is hidden from header
✅ Click outside the modal to close (maskClosable: true)
✅ Press Escape key to close (accessibility)
✅ Programmatic closing still available

Use Cases:
• Guided workflows and tutorials
• Critical notifications requiring attention
• Multi-step processes where users shouldn't skip
• Loading states and progress indicators

This configuration prevents accidental closure while maintaining accessibility and user control through alternative methods.`,
      size: 'auto' as const,
      closable: false,
      maskClosable: true
    },
    maskClosable: {
      title: 'No Mask Close',
      content: `No Mask Close Configuration

This modal demonstrates 'maskClosable: false' behavior:

✅ Close button (X) available in header
🚫 Clicking outside the modal won't close it
✅ Press Escape key to close (accessibility)
✅ Use the X button or programmatic methods

Use Cases:
• Important forms with unsaved data
• Payment and checkout processes
• Critical confirmations and agreements
• Complex data entry that shouldn't be lost

This prevents accidental closure from background clicks while keeping the close button available.`,
      size: 'auto' as const,
      closable: true,
      maskClosable: false
    },
    both: {
      title: 'Locked Modal',
      content: `Fully Locked Modal Configuration

This modal demonstrates both 'closable: false' and 'maskClosable: false':

🚫 No close button (X) in header
🚫 Clicking outside won't close the modal
✅ Press Escape key to close (accessibility requirement)
✅ Only programmatic closing available

Use Cases:
• Critical system messages and errors
• Mandatory acknowledgments and agreements
• Loading states that must complete
• Security confirmations and warnings

This provides maximum control over modal dismissal while maintaining keyboard accessibility for screen readers and assistive technologies.`,
      size: 'auto' as const,
      closable: false,
      maskClosable: false
    }
  }

  openModal(configs[type])
}

const openLifecycleModal = () => {
  openModal({
    title: 'Lifecycle Events Modal',
    content: `Modal Lifecycle Events Demonstration

This modal demonstrates all available lifecycle events and callbacks:

🔄 Event Flow:
1. onBeforeOpen - Called before modal starts opening
2. onOpen - Called when modal is fully opened
3. onAfterOpen - Called after opening animation completes
4. onBeforeClose - Called before modal starts closing
5. onClose - Called when modal is fully closed
6. onAfterClose - Called after closing animation completes

📊 Check the Event Logs section below to see these events in real-time!

Use Cases for Lifecycle Events:
• Loading data when modal opens
• Saving form data before closing
• Analytics and user behavior tracking
• Cleaning up resources and subscriptions
• Triggering animations and side effects
• Validation before allowing close

Each event provides the perfect hook for your custom logic and integrations.`,
    size: 'auto',
    showFooter: true,
    onBeforeOpen: () => logEvent('onBeforeOpen callback'),
    onOpen: () => logEvent('onOpen callback'),
    onBeforeClose: () => logEvent('onBeforeClose callback'),
    onClose: () => logEvent('onClose callback'),
    onAfterOpen: () => logEvent('onAfterOpen callback'),
    onAfterClose: () => logEvent('onAfterClose callback')
  })
}

const openProgrammaticModal = () => {
  openModal({
    title: 'Programmatic Control',
    content: `Programmatic Modal Control

This modal was opened using the useModal composable, demonstrating programmatic control:

🎛️ useModal Composable Features:
• openModal() - Open modals with configuration
• closeModal() - Close the current modal
• toggleModal() - Toggle modal visibility
• showConfirmModal() - Quick confirmation dialogs
• showAlertModal() - Simple alert messages

💡 Benefits of Programmatic Control:
• No need for v-model reactive variables
• Centralized modal state management
• Easy integration with business logic
• Dynamic modal configuration
• Simplified component architecture

🔧 Advanced Usage:
• Conditional modal opening based on user state
• Chain multiple modals in sequence
• Dynamic content based on API responses
• Integration with routing and navigation
• Custom modal types and templates

Check the browser console to see the lifecycle events being logged!`,
    size: 'auto',
    showFooter: true,
    onOpen: () => console.log('Modal opened!'),
    onClose: () => console.log('Modal closed!')
  })
}

const openConfirmModal = () => {
  showConfirmModal(
    'Confirm Action',
    `Confirmation Dialog Example

This is a specialized confirmation modal created using showConfirmModal().

⚠️ Key Features:
• Pre-configured with confirm/cancel buttons
• Automatic handling of user responses
• Customizable title and message content
• Built-in callback system for actions
• Consistent styling and behavior

🎯 Perfect for:
• Delete confirmations
• Form submission warnings
• Navigation confirmations
• Destructive action warnings
• User consent requests

The result of your choice will be logged to the browser console. Check the developer tools to see the callback execution!`,
    () => console.log('User confirmed!'),
    () => console.log('User cancelled!')
  )
}

const openAlertModal = () => {
  showAlertModal(
    'Information Alert',
    `Alert Dialog Example

This is a specialized alert modal created using showAlertModal().

ℹ️ Key Features:
• Single OK button for acknowledgment
• Simplified interface for information display
• Automatic callback handling
• Consistent styling and behavior
• Optimized for quick user acknowledgment

📢 Perfect for:
• System notifications and updates
• Success messages and confirmations
• Information and help messages
• Error notifications and warnings
• Feature announcements

Click OK to acknowledge this alert. The action will be logged to the browser console for demonstration purposes.`,
    () => console.log('Alert acknowledged!')
  )
}

const openSlotModal = () => {
  openModal({
    title: 'Custom Slots Demonstration',
    content: `Advanced Slot Customization

This modal showcases the powerful slot system for complete customization:

🎨 Available Slots:

1. Header Slot (#header)
   • Replace default title with custom content
   • Add custom icons, badges, or actions
   • Implement complex header layouts
   • Include search bars or navigation

2. Default Slot (main content area)
   • Rich HTML content and components
   • Forms with validation and interactions
   • Data tables and charts
   • Image galleries and media players
   • Any Vue component or custom layout

3. Footer Slot (#footer)
   • Custom button combinations and layouts
   • Progress indicators and status bars
   • Action panels with multiple options
   • Form submission and validation controls

💡 Advanced Techniques:
• Conditional slot rendering based on props
• Dynamic slot content based on user state
• Integration with external component libraries
• Custom styling and theme integration
• Responsive slot layouts for mobile devices

📋 Code Examples:
Check the "Custom Slots Example" section below to see implementation details and best practices for each slot type.`,
    size: 'lg'
  })
}

// Event logging
const logEvent = (message: string) => {
  const now = new Date()
  const time = now.toLocaleTimeString()
  eventLogs.value.push({ time, message })
}

const clearLogs = () => {
  eventLogs.value = []
}

// Code examples
const quickDemoCode = `<template>
  <button @click="openBasicModal">Open Basic Modal</button>
  <button @click="openLargeModal">Open Large Modal</button>

  <EaModal />
</template>


import { useModal } from '@/components/ui/overlay/EaModal/useModal'
import EaModal from '@/components/ui/overlay/EaModal/index.vue'

const { openModal } = useModal()

const openBasicModal = () => {
  openModal({
    title: 'Basic Modal',
    content: 'This is a basic modal with default settings.',
    size: 'md'
  })
}

const openLargeModal = () => {
  openModal({
    title: 'Large Modal',
    content: 'This is a large modal.',
    size: 'lg'
  })
}
`

const sizeVariantsCode = `<template>
  <button @click="openModal('auto')">Auto</button>
  <button @click="openModal('sm')">Small</button>
  <button @click="openModal('md')">Medium</button>
  <button @click="openModal('lg')">Large</button>
  <button @click="openModal('xl')">Extra Large</button>
  <button @click="openModal('full')">Full Screen</button>

  <EaModal />
</template>

// JavaScript kodu için useModal composable kullanın
import { useModal } from '@/components/ui/overlay/EaModal/useModal'

const { openModal } = useModal()

const openSizeModal = (size) => {
  openModal({
    title: \`\${size.toUpperCase()} Modal\`,
    content: \`This is a \${size} sized modal.\`,
    size: size
  })
}
`

const behaviorOptionsCode = `<template>
  <button @click="openNonClosableModal">Non-Closable</button>
  <button @click="openNoMaskCloseModal">No Mask Close</button>

  <EaModal />
</template>

<script setup>
import { useModal } from '@/components/ui/overlay/EaModal/useModal'

const { openModal } = useModal()

const openNonClosableModal = () => {
  openModal({
    title: 'Non-Closable Modal',
    content: 'Cannot be closed with X button.',
    closable: false,
    maskClosable: true
  })
}

const openNoMaskCloseModal = () => {
  openModal({
    title: 'No Mask Close',
    content: 'Cannot be closed by clicking outside.',
    closable: true,
    maskClosable: false
  })
}
`

const lifecycleEventsCode = `<template>
  <button @click="openLifecycleModal">Open Modal</button>

  <EaModal />
</template>

<script setup>
import { useModal } from '@/components/ui/overlay/EaModal/useModal'

const { openModal } = useModal()

const openLifecycleModal = () => {
  openModal({
    title: 'Lifecycle Modal',
    content: 'Modal with lifecycle events',
    onBeforeOpen: () => console.log('Before open'),
    onOpen: () => console.log('Opened'),
    onBeforeClose: () => console.log('Before close'),
    onClose: () => console.log('Closed'),
    onAfterOpen: () => console.log('After open'),
    onAfterClose: () => console.log('After close')
  })
}
`

const programmaticControlCode = `<template>
  <button @click="openProgrammaticModal">Open Modal</button>
  <button @click="openConfirmModal">Confirm Dialog</button>
  <button @click="openAlertModal">Alert Dialog</button>

  <EaModal />
</template>

<script setup>
import { useModal } from '@/components/ui/overlay/EaModal/useModal'

const { openModal, showConfirmModal, showAlertModal } = useModal()

const openProgrammaticModal = () => {
  openModal({
    title: 'Programmatic Modal',
    content: 'Opened via useModal composable',
    size: 'md'
  })
}

const openConfirmModal = () => {
  showConfirmModal(
    'Confirm Action',
    'Are you sure?',
    () => console.log('Confirmed'),
    () => console.log('Cancelled')
  )
}

const openAlertModal = () => {
  showAlertModal(
    'Alert',
    'This is an alert!',
    () => console.log('OK clicked')
  )
}
`

const slotUsageCode = `<template>
  <button @click="modalVisible = true">Open Custom Modal</button>

  <EaModal v-model="modalVisible" size="lg">
    <template #header>
      <div class="custom-header">
        <h3>🎉 Custom Header</h3>
        <span class="badge">New</span>
      </div>
    </template>

    <div class="custom-content">
      <h4>Custom Content</h4>
      <p>You can use any Vue components here.</p>
      <input v-model="userInput" placeholder="Enter something..." />
    </div>

    <template #footer>
      <button @click="handleSave" class="btn btn--primary">
        Save Changes
      </button>
      <button @click="modalVisible = false" class="btn btn--secondary">
        Cancel
      </button>
    </template>
  </EaModal>
</template>

<script setup>
import { ref } from 'vue'
import EaModal from '@/components/ui/overlay/EaModal/index.vue'

const modalVisible = ref(false)
const userInput = ref('')

const handleSave = () => {
  console.log('Saving:', userInput.value)
  modalVisible.value = false
}
`
</script>

<style scoped lang="scss">
.modal-demo {
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

.demo-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
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

.logs-container {
  margin-top: 2rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 1rem;
  }
}

.logs {
  background: #1e293b;
  border-radius: 8px;
  padding: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.875rem;
}

.log-item {
  display: flex;
  gap: 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #334155;

  &:last-child {
    border-bottom: none;
  }
}

.log-time {
  color: #94a3b8;
  font-weight: 500;
  min-width: 100px;
}

.log-message {
  color: #e2e8f0;
  flex: 1;
}

.log-empty {
  color: #94a3b8;
  font-style: italic;
  text-align: center;
  padding: 2rem;
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
  .modal-demo {
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
  }

  .btn {
    width: 100%;
  }

  .props-table {
    font-size: 0.8rem;
  }
}
</style>

