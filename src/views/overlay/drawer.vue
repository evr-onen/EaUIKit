<template>
  <div class="drawer-demo">
    <div class="container">
      <h1>EaDrawer Component Demo</h1>
      <p class="description">
        EaDrawer is a customizable drawer component that can be opened from different positions.
      </p>

      <!-- Position Examples -->
      <section class="demo-section">
        <h2>Position Examples</h2>
        <div class="button-grid">
          <button
            class="demo-btn demo-btn--primary"
            @click="rightDrawer.open()"
          >
            <EaIcons name="menu" size="20" />
            Right Drawer
          </button>

          <button
            class="demo-btn demo-btn--secondary"
            @click="leftDrawer.open()"
          >
            <EaIcons name="tasks" size="20" />
            Left Drawer
          </button>

          <button
            class="demo-btn demo-btn--success"
            @click="topDrawer.open()"
          >
            <EaIcons name="notification" size="20" />
            Top Drawer
          </button>

          <button
            class="demo-btn demo-btn--warning"
            @click="bottomDrawer.open()"
          >
            <EaIcons name="settings" size="20" />
            Bottom Drawer
          </button>
        </div>
      </section>

      <!-- Feature Examples -->
      <section class="demo-section">
        <h2>Feature Examples</h2>
        <div class="button-grid">
          <button
            class="demo-btn demo-btn--info"
            @click="noOverlayDrawer.open()"
          >
            <EaIcons name="palette" size="20" />
            No Overlay
          </button>

          <button
            class="demo-btn demo-btn--dark"
            @click="darkDrawer.open()"
          >
            <EaIcons name="moon" size="20" />
            Dark Mode
          </button>

          <button
            class="demo-btn demo-btn--large"
            @click="largeDrawer.open()"
          >
            <EaIcons name="dashboard" size="20" />
            Large Drawer
          </button>

          <button
            class="demo-btn demo-btn--custom"
            @click="customDrawer.open()"
          >
            <EaIcons name="sparkles" size="20" />
            Custom Content
          </button>
        </div>
      </section>

      <!-- Code Example -->
      <section class="demo-section">
        <h2>Usage Example</h2>
        <div class="code-example">
          <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="drawer.open()"&gt;Open Drawer&lt;/button&gt;

    &lt;EaDrawer
      id="my-drawer"
      title="Title"
      position="right"
      :width="'400px'"
    &gt;
      &lt;p&gt;Drawer content&lt;/p&gt;

      &lt;template #footer&gt;
        &lt;button @click="drawer.close()"&gt;Close&lt;/button&gt;
      &lt;/template&gt;
    &lt;/EaDrawer&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
import EaDrawer from '@/components/ui/overlay/EaDrawer'
import { useDrawer } from '@/composables/useDrawer'

const drawer = useDrawer('my-drawer')
&lt;/script&gt;</code></pre>
        </div>
      </section>
    </div>

    <!-- Drawer Components -->

    <!-- Right Drawer -->
    <EaDrawer
      id="right-drawer"
      title="Right Drawer"
      position="right"
      :width="'350px'"
    >
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
        <button @click="rightDrawer.close()" class="btn btn--secondary">
          Close
        </button>
      </template>
    </EaDrawer>

    <!-- Left Drawer -->
    <EaDrawer
      id="left-drawer"
      title="Left Drawer"
      position="left"
      :width="'300px'"
    >
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
    <EaDrawer
      id="top-drawer"
      title="Top Drawer"
      position="top"
      :height="'250px'"
    >
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
    <EaDrawer
      id="bottom-drawer"
      title="Bottom Drawer"
      position="bottom"
      :height="'300px'"
    >
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

    <!-- No Overlay Drawer -->
    <EaDrawer
      id="no-overlay-drawer"
      title="No Overlay Drawer"
      position="right"
      :width="'320px'"
      :overlay="false"
    >
      <div class="drawer-content">
        <h3><EaIcons name="palette" size="18" /> Color Palette</h3>
        <div class="color-palette">
          <div class="color-item" style="background: #ef4444;"></div>
          <div class="color-item" style="background: #f97316;"></div>
          <div class="color-item" style="background: #eab308;"></div>
          <div class="color-item" style="background: #22c55e;"></div>
          <div class="color-item" style="background: #3b82f6;"></div>
          <div class="color-item" style="background: #8b5cf6;"></div>
        </div>
      </div>
    </EaDrawer>

    <!-- Dark Drawer -->
    <EaDrawer
      id="dark-drawer"
      title="Dark Mode Drawer"
      position="right"
      :width="'380px'"
      :dark="true"
    >
      <div class="drawer-content">
        <h3><EaIcons name="moon" size="18" /> Dark Mode Content</h3>
        <p>This drawer works with dark theme.</p>
        <div class="dark-stats">
          <div class="stat-card">
            <h4>Users</h4>
            <p class="stat-number">1,234</p>
          </div>
          <div class="stat-card">
            <h4>Sales</h4>
            <p class="stat-number">5,678</p>
          </div>
        </div>
      </div>
    </EaDrawer>

    <!-- Large Drawer -->
    <EaDrawer
      id="large-drawer"
      title="Large Drawer"
      position="right"
      :width="'500px'"
    >
      <div class="drawer-content">
        <h3><EaIcons name="dashboard" size="18" /> Dashboard</h3>
        <div class="dashboard">
          <div class="chart-placeholder">
            <p>Chart Area</p>
            <div class="mock-chart">
              <div class="bar" style="height: 60%;"></div>
              <div class="bar" style="height: 80%;"></div>
              <div class="bar" style="height: 40%;"></div>
              <div class="bar" style="height: 90%;"></div>
              <div class="bar" style="height: 70%;"></div>
            </div>
          </div>
        </div>
      </div>

      <template #footer>
        <button @click="largeDrawer.close()" class="btn btn--secondary">
          Cancel
        </button>
        <button class="btn btn--success">
          Download Report
        </button>
      </template>
    </EaDrawer>

    <!-- Custom Drawer -->
    <EaDrawer
      id="custom-drawer"
      position="right"
      :width="'400px'"
      :closable="false"
    >
      <template #header>
        <div class="custom-header">
          <div class="profile-info">
            <div class="avatar">JD</div>
            <div>
              <h3>John Doe</h3>
              <p>john@example.com</p>
            </div>
          </div>
          <button @click="customDrawer.close()" class="close-btn">×</button>
        </div>
      </template>

      <div class="drawer-content">
        <h3><EaIcons name="sparkles" size="18" /> Profile Information</h3>
        <form class="profile-form">
          <div class="form-group">
            <label>Full Name:</label>
            <input type="text" value="John Doe">
          </div>
          <div class="form-group">
            <label>Email:</label>
            <input type="email" value="john@example.com">
          </div>
          <div class="form-group">
            <label>Phone:</label>
            <input type="tel" value="+1 555 123 4567">
          </div>
        </form>
      </div>

      <template #footer>
        <button @click="customDrawer.close()" class="btn btn--secondary">
          Cancel
        </button>
        <button class="btn btn--primary">
          Save
        </button>
      </template>
    </EaDrawer>
  </div>
</template>

<script setup lang="ts">
import EaDrawer from '@/components/ui/overlay/EaDrawer/index.vue'
import EaIcons from '@/components/ui/EaIcons.vue'
import { useDrawer } from '@/composables/useDrawer'

// Drawer instances
const rightDrawer = useDrawer('right-drawer')
const leftDrawer = useDrawer('left-drawer')
const topDrawer = useDrawer('top-drawer')
const bottomDrawer = useDrawer('bottom-drawer')
const noOverlayDrawer = useDrawer('no-overlay-drawer')
const darkDrawer = useDrawer('dark-drawer')
const largeDrawer = useDrawer('large-drawer')
const customDrawer = useDrawer('custom-drawer')
</script>

<style scoped lang="scss">
.drawer-demo {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

h1 {
  text-align: center;
  color: white;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.description {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.demo-section {
  margin-bottom: 4rem;

  h2 {
    color: white;
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }
}

.button-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.demo-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;
    transition: opacity 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

    .svg-wrapper {
      opacity: 1;
    }
  }

  &--primary {
    background: #3b82f6;
    color: white;

    &:hover {
      background: #2563eb;
    }
  }

  &--secondary {
    background: #6b7280;
    color: white;

    &:hover {
      background: #4b5563;
    }
  }

  &--success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }

  &--warning {
    background: #f59e0b;
    color: white;

    &:hover {
      background: #d97706;
    }
  }

  &--info {
    background: #06b6d4;
    color: white;

    &:hover {
      background: #0891b2;
    }
  }

  &--dark {
    background: #1f2937;
    color: white;

    &:hover {
      background: #111827;
    }
  }

  &--large {
    background: #8b5cf6;
    color: white;

    &:hover {
      background: #7c3aed;
    }
  }

  &--custom {
    background: #ec4899;
    color: white;

    &:hover {
      background: #db2777;
    }
  }
}

.code-example {
  background: #1f2937;
  border-radius: 12px;
  padding: 1.5rem;
  overflow-x: auto;

  pre {
    margin: 0;

    code {
      color: #e5e7eb;
      font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
      font-size: 0.875rem;
      line-height: 1.6;
    }
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

    .svg-wrapper {
      display: flex;
      align-items: center;
      opacity: 0.8;
    }
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
    border-radius: 8px;
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

.color-palette {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;

  .color-item {
    aspect-ratio: 1;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
}

.dark-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;

  .stat-card {
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    text-align: center;

    h4 {
      margin: 0 0 0.5rem 0;
      color: #d1d5db;
      font-size: 0.875rem;
    }

    .stat-number {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
    }
  }
}

.dashboard {
  .chart-placeholder {
    padding: 1rem;
    background: #f9fafb;
    border-radius: 8px;
    text-align: center;

    p {
      margin-bottom: 1rem;
      color: #6b7280;
    }

    .mock-chart {
      display: flex;
      align-items: end;
      justify-content: center;
      gap: 0.5rem;
      height: 100px;

      .bar {
        width: 20px;
        background: #3b82f6;
        border-radius: 2px 2px 0 0;
      }
    }
  }
}

.custom-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .profile-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .avatar {
      width: 40px;
      height: 40px;
      background: #3b82f6;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
    }

    h3 {
      margin: 0;
      font-size: 1rem;
    }

    p {
      margin: 0;
      color: #6b7280;
      font-size: 0.875rem;
    }
  }

  .close-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background: #f3f4f6;
    }
  }
}

.profile-form {
  .form-group {
    margin-bottom: 1rem;

    label {
      display: block;
      margin-bottom: 0.25rem;
      font-weight: 500;
      color: #374151;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      font-size: 0.875rem;

      &:focus {
        outline: none;
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      }
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

    &:hover {
      background: #2563eb;
    }
  }

  &--secondary {
    background: #6b7280;
    color: white;

    &:hover {
      background: #4b5563;
    }
  }

  &--success {
    background: #10b981;
    color: white;

    &:hover {
      background: #059669;
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 0.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  .button-grid {
    grid-template-columns: 1fr;
  }
}
</style>
