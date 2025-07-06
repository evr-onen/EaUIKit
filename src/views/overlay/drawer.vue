<template>
  <div class="drawer-demo">
    <div class="container">
      <!-- Header -->
      <header class="demo-header">
        <h1>EaDrawer Component</h1>
        <p class="description">
          A customizable drawer component that can be opened from different positions.
        </p>
      </header>

      <!-- Quick Demo -->
      <section class="demo-section">
        <h2>Quick Demo</h2>
        <div class="quick-demo-grid">
          <button class="demo-btn demo-btn--primary" @click="rightDrawer.open()">
            <EaIcons name="menu" size="20" />
            Open Right
          </button>
          <button class="demo-btn demo-btn--secondary" @click="leftDrawer.open()">
            <EaIcons name="tasks" size="20" />
            Open Left
          </button>
          <button class="demo-btn demo-btn--success" @click="topDrawer.open()">
            <EaIcons name="notification" size="20" />
            Open Top
          </button>
          <button class="demo-btn demo-btn--warning" @click="bottomDrawer.open()">
            <EaIcons name="settings" size="20" />
            Open Bottom
          </button>
        </div>
      </section>

      <!-- Examples with Code -->
      <section class="demo-section">
        <h2>Code Examples</h2>

                <!-- Basic Example -->
        <div class="example-card">
          <div class="example-header">
            <h3>Basic Usage</h3>
            <button class="demo-btn demo-btn--primary" @click="basicExampleDrawer.open()">
              Open Example
            </button>
          </div>
          <CodeBlock
            title="Basic Drawer Example"
            :code="`<template>
  <EaDrawer
    id=&quot;basic-drawer&quot;
    title=&quot;Basic Drawer&quot;
    position=&quot;right&quot;
    :width=&quot;'300px'&quot;
  >
    <p>Drawer content</p>
  </EaDrawer>
</template>

<script setup>
import { useDrawer } from '@/composables/useDrawer'
const drawer = useDrawer('basic-drawer')
</script>`"
          />
        </div>

        <!-- No Overlay Example -->
        <div class="example-card">
          <div class="example-header">
            <h3>Without Overlay</h3>
            <button class="demo-btn demo-btn--info" @click="noOverlayExampleDrawer.open()">
              Open Example
            </button>
          </div>
          <CodeBlock
            title="No Overlay Example"
            :code="`<EaDrawer
  id=&quot;no-overlay-drawer&quot;
  title=&quot;No Overlay&quot;
  position=&quot;right&quot;
  :width=&quot;'350px'&quot;
  :overlay=&quot;false&quot;
>
  <p>Background is not darkened</p>
</EaDrawer>`"
          />
        </div>

        <!-- Dark Mode Example -->
        <div class="example-card">
          <div class="example-header">
            <h3>Dark Theme</h3>
            <button class="demo-btn demo-btn--dark" @click="darkExampleDrawer.open()">
              Open Example
            </button>
          </div>
          <CodeBlock
            title="Dark Theme Example"
            :code="`<EaDrawer
  id=&quot;dark-drawer&quot;
  title=&quot;Dark Theme&quot;
  position=&quot;right&quot;
  :width=&quot;'300px'&quot;
  :dark=&quot;true&quot;
>
  <p>Uses dark theme styling</p>
</EaDrawer>`"
          />
        </div>

        <!-- Footer Example -->
        <div class="example-card">
          <div class="example-header">
            <h3>With Footer</h3>
            <button class="demo-btn demo-btn--success" @click="footerExampleDrawer.open()">
              Open Example
            </button>
          </div>
          <CodeBlock
            title="Footer Example"
            :code="`<EaDrawer
  id=&quot;footer-drawer&quot;
  title=&quot;Footer Example&quot;
  position=&quot;right&quot;
  :width=&quot;'400px'&quot;
>
  <p>Main content</p>

  <template #footer>
    <button @click=&quot;drawer.close()&quot;>Cancel</button>
    <button class=&quot;primary&quot;>Save</button>
  </template>
</EaDrawer>`"
          />
        </div>
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
                <td><code>id</code></td>
                <td>string</td>
                <td>'default'</td>
                <td>Unique identifier for the drawer instance</td>
              </tr>
              <tr>
                <td><code>position</code></td>
                <td>'left' | 'right' | 'top' | 'bottom'</td>
                <td>'right'</td>
                <td>Position where the drawer slides from</td>
              </tr>
              <tr>
                <td><code>width</code></td>
                <td>string</td>
                <td>'300px'</td>
                <td>Width of the drawer (for left/right positions)</td>
              </tr>
              <tr>
                <td><code>height</code></td>
                <td>string</td>
                <td>'100%'</td>
                <td>Height of the drawer (for top/bottom positions)</td>
              </tr>
              <tr>
                <td><code>title</code></td>
                <td>string</td>
                <td>undefined</td>
                <td>Title displayed in the drawer header</td>
              </tr>
              <tr>
                <td><code>overlay</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether to show overlay background</td>
              </tr>
              <tr>
                <td><code>closable</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether to show close button in header</td>
              </tr>
              <tr>
                <td><code>closeOnOverlay</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether clicking overlay closes the drawer</td>
              </tr>
              <tr>
                <td><code>closeOnEscape</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether pressing escape key closes the drawer</td>
              </tr>
              <tr>
                <td><code>dark</code></td>
                <td>boolean</td>
                <td>false</td>
                <td>Whether to use dark theme</td>
              </tr>
              <tr>
                <td><code>animated</code></td>
                <td>boolean</td>
                <td>true</td>
                <td>Whether to animate drawer transitions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Events -->
      <section class="demo-section">
        <h2>Events</h2>
        <div class="table-container">
          <table class="events-table">
            <thead>
              <tr>
                <th>Event</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>@open</code></td>
                <td>Emitted when drawer is opened</td>
              </tr>
              <tr>
                <td><code>@close</code></td>
                <td>Emitted when drawer is closed</td>
              </tr>
              <tr>
                <td><code>@overlayClick</code></td>
                <td>Emitted when overlay is clicked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Slots -->
      <section class="demo-section">
        <h2>Slots</h2>
        <div class="table-container">
          <table class="slots-table">
            <thead>
              <tr>
                <th>Slot</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>default</code></td>
                <td>Main content area</td>
              </tr>
              <tr>
                <td><code>header</code></td>
                <td>Custom header content (replaces title)</td>
              </tr>
              <tr>
                <td><code>footer</code></td>
                <td>Footer area for action buttons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Composable Usage -->
      <section class="demo-section">
        <h2>Composable Usage</h2>
                <CodeBlock
          title="useDrawer Hook Usage"
          :code="`import { useDrawer } from '@/composables/useDrawer'

// Create drawer instance
const drawer = useDrawer('drawer-id')

// Available methods
drawer.open()      // Open the drawer
drawer.close()     // Close the drawer
drawer.toggle()    // Toggle drawer state

// Available properties
drawer.isOpen.value    // Check if drawer is open`"
        />
      </section>
    </div>

    <!-- Drawer Components -->

    <!-- Right Drawer -->
    <EaDrawer id="right-drawer" title="Right Drawer" position="right" :width="'350px'">
      <div class="drawer-content">
        <h3><EaIcons name="menu" size="18" /> Navigation Menu</h3>
        <nav class="nav-menu">
          <a href="#" class="nav-item">Home</a>
          <a href="#" class="nav-item">Products</a>
          <a href="#" class="nav-item">About</a>
          <a href="#" class="nav-item">Contact</a>
        </nav>
      </div>
      <template #footer>
        <button @click="rightDrawer.close()" class="btn btn--secondary">Close</button>
      </template>
    </EaDrawer>

    <!-- Left Drawer -->
    <EaDrawer id="left-drawer" title="Left Drawer" position="left" :width="'300px'">
      <div class="drawer-content">
        <h3><EaIcons name="tasks" size="18" /> Task List</h3>
        <div class="task-list">
          <div class="task-item">
            <input type="checkbox" id="task1">
            <label for="task1">Complete project</label>
          </div>
          <div class="task-item">
            <input type="checkbox" id="task2">
            <label for="task2">Check emails</label>
          </div>
          <div class="task-item">
            <input type="checkbox" id="task3">
            <label for="task3">Attend meeting</label>
          </div>
        </div>
      </div>
    </EaDrawer>

    <!-- Top Drawer -->
    <EaDrawer id="top-drawer" title="Top Drawer" position="top" :height="'250px'">
      <div class="drawer-content">
        <h3><EaIcons name="notification" size="18" /> Notifications</h3>
        <div class="notifications">
          <div class="notification-item">
            <span class="notification-dot"></span>
            <div>
              <strong>New message</strong>
              <p>John sent you a message</p>
            </div>
          </div>
          <div class="notification-item">
            <span class="notification-dot"></span>
            <div>
              <strong>Task completed</strong>
              <p>Project development completed</p>
            </div>
          </div>
        </div>
      </div>
    </EaDrawer>

    <!-- Bottom Drawer -->
    <EaDrawer id="bottom-drawer" title="Bottom Drawer" position="bottom" :height="'300px'">
      <div class="drawer-content">
        <h3><EaIcons name="settings" size="18" /> Settings</h3>
        <div class="settings">
          <div class="setting-item">
            <label>Theme:</label>
            <select>
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div class="setting-item">
            <label>Language:</label>
            <select>
              <option>English</option>
              <option>Turkish</option>
            </select>
          </div>
          <div class="setting-item">
            <label>
              <input type="checkbox"> Enable notifications
            </label>
          </div>
        </div>
      </div>
    </EaDrawer>

    <!-- Example Drawers -->
    <EaDrawer id="basic-example-drawer" title="Basic Drawer" position="right" :width="'300px'">
      <div class="drawer-content">
        <p>This is a basic drawer example.</p>
        <p>It demonstrates the default behavior with minimal configuration.</p>
      </div>
    </EaDrawer>

    <EaDrawer id="no-overlay-example-drawer" title="No Overlay" position="right" :width="'350px'" :overlay="false">
      <div class="drawer-content">
        <p>This drawer has no overlay background.</p>
        <p>You can still interact with the page content behind it.</p>
      </div>
    </EaDrawer>

    <EaDrawer id="dark-example-drawer" title="Dark Theme" position="right" :width="'300px'" :dark="true">
      <div class="drawer-content">
        <p>This drawer uses dark theme styling.</p>
        <p>Perfect for dark mode applications.</p>
      </div>
    </EaDrawer>

    <EaDrawer id="footer-example-drawer" title="Footer Example" position="right" :width="'400px'">
      <div class="drawer-content">
        <p>This drawer has a footer with action buttons.</p>
        <p>Use the footer slot for actions like save, cancel, etc.</p>
      </div>
      <template #footer>
        <button @click="footerExampleDrawer.close()" class="btn btn--secondary">Cancel</button>
        <button class="btn btn--primary">Save</button>
      </template>
    </EaDrawer>
  </div>
</template>

<script setup lang="ts">
import EaDrawer from '@/components/ui/overlay/EaDrawer/index.vue'
import EaIcons from '@/components/ui/EaIcon.vue'
import CodeBlock from '@/components/general/CodeBlock.vue'
import { useDrawer } from '@/composables/useDrawer'

// Drawer instances
const rightDrawer = useDrawer('right-drawer')
const leftDrawer = useDrawer('left-drawer')
const topDrawer = useDrawer('top-drawer')
const bottomDrawer = useDrawer('bottom-drawer')

// Example drawer instances
const basicExampleDrawer = useDrawer('basic-example-drawer')
const noOverlayExampleDrawer = useDrawer('no-overlay-example-drawer')
const darkExampleDrawer = useDrawer('dark-example-drawer')
const footerExampleDrawer = useDrawer('footer-example-drawer')
</script>

<style scoped lang="scss">
.drawer-demo {
  min-height: 100vh;
  background: #f8fafc;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.demo-header {
  text-align: center;
  margin-bottom: 4rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
  }

  .description {
    font-size: 1.125rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
  }
}

.demo-section {
  margin-bottom: 4rem;

  h2 {
    font-size: 1.875rem;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 2rem;
    text-align: center;
  }
}

.quick-demo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.demo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
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

  &--dark {
    background: #1f2937;
    color: white;
    &:hover { background: #111827; }
  }
}

.example-card {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
  overflow: hidden;

  .example-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    background: #f8fafc;

    h3 {
      margin: 0;
      font-size: 1.125rem;
      font-weight: 600;
      color: #1e293b;
    }
  }
}



.table-container {
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.props-table, .events-table, .slots-table {
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

// Drawer Content Styles
.drawer-content {
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #111827;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
}

.nav-menu {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .nav-item {
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #374151;
    border-radius: 6px;
    transition: background 0.2s;

    &:hover {
      background: #f3f4f6;
    }
  }
}

.task-list {
  .task-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;

    input[type="checkbox"] {
      margin: 0;
    }

    label {
      margin: 0;
      cursor: pointer;
    }
  }
}

.notifications {
  .notification-item {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #e5e7eb;

    &:last-child {
      border-bottom: none;
    }

    .notification-dot {
      width: 8px;
      height: 8px;
      background: #3b82f6;
      border-radius: 50%;
      margin-top: 0.5rem;
      flex-shrink: 0;
    }

    strong {
      display: block;
      margin-bottom: 0.25rem;
    }

    p {
      margin: 0;
      color: #6b7280;
      font-size: 0.875rem;
    }
  }
}

.settings {
  .setting-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;

    label {
      font-weight: 500;
    }

    select, input {
      padding: 0.25rem 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 4px;
    }
  }
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

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

  .example-card .example-header {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
}
</style>
