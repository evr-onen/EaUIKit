<template>
  <div class="tabs-demo">




    <div class="page-header">
      <h1>Tabs Component</h1>
      <p>Modern and flexible tabs component examples with interactive content</p>
    </div>

    <!-- Default Tabs -->
    <section class="demo-section">
      <h2>Default Tabs</h2>
      <Tabs
        :tabs="defaultTabs"
        @tab-change="onTabChange"
      >
        <template #dashboard>
          <div class="tab-content">
            <Card
              title="Dashboard Overview"
              content="Welcome to your dashboard! Here you can find quick access to all important information and recent activities."
            >
              <template #footer>
                <div class="card-actions">
                  <EaButton label="View Details" variant="primary" size="sm" />
                  <EaButton label="Refresh" variant="outline" size="sm" />
                </div>
              </template>
            </Card>

            <div class="cards-grid">
              <Card
                title="Recent Activity"
                content="5 new notifications today"
                size="small"
                elevation="small"
              />
              <Card
                title="Quick Stats"
                content="All systems operational"
                size="small"
                elevation="small"
              />
            </div>
          </div>
        </template>

        <template #profile>
          <div class="tab-content">
            <Card title="User Profile" elevation="medium">
              <div class="profile-info">
                <div class="profile-field">
                  <label>Full Name:</label>
                  <span>John Doe</span>
                </div>
                <div class="profile-field">
                  <label>Email:</label>
                  <span>john@example.com</span>
                </div>
                <div class="profile-field">
                  <label>Phone:</label>
                  <span>+1 555 123 4567</span>
                </div>
                <div class="profile-field">
                  <label>Role:</label>
                  <span>Administrator</span>
                </div>
              </div>

              <template #footer>
                <div class="card-actions">
                  <EaButton label="Edit Profile" variant="primary" size="sm" />
                  <EaButton label="Change Password" variant="secondary" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>

        <template #settings>
          <div class="tab-content">
            <Card title="Application Settings" elevation="medium">
              <div class="settings-group">
                <h4>Appearance</h4>
                <label class="setting-item">
                  <input type="checkbox" checked> Dark theme
                </label>
                <label class="setting-item">
                  <input type="checkbox"> Compact mode
                </label>
              </div>

              <div class="settings-group">
                <h4>Notifications</h4>
                <label class="setting-item">
                  <input type="checkbox" checked> Email notifications
                </label>
                <label class="setting-item">
                  <input type="checkbox"> Push notifications
                </label>
              </div>

              <template #footer>
                <div class="card-actions">
                  <EaButton label="Save Changes" variant="primary" size="sm" />
                  <EaButton label="Reset" variant="outline" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>

        <template #notifications>
          <div class="tab-content">
            <Card title="Notifications" elevation="medium">
              <div class="notification-list">
                <div class="notification-item">
                  <span class="notification-dot"></span>
                  <div>
                    <strong>New message received</strong>
                    <p>2 hours ago</p>
                  </div>
                </div>
                <div class="notification-item">
                  <span class="notification-dot"></span>
                  <div>
                    <strong>System update available</strong>
                    <p>1 day ago</p>
                  </div>
                </div>
                <div class="notification-item">
                  <span class="notification-dot"></span>
                  <div>
                    <strong>Weekly report ready</strong>
                    <p>3 days ago</p>
                  </div>
                </div>
              </div>

              <template #footer>
                <div class="card-actions">
                  <EaButton label="Mark All Read" variant="primary" size="sm" />
                  <EaButton label="Clear All" variant="outline" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- Pills Variant -->
    <section class="demo-section">
      <h2>Pills Style</h2>
      <Tabs
        :tabs="pillsTabs"
        variant="pills"
        @tab-change="onTabChange"
      >
        <template #overview>
          <div class="tab-content">
            <div class="stats-grid">
              <Card
                title="Total Users"
                size="small"
                elevation="medium"
                variant="filled"
              >
                <div class="stat-content">
                  <span class="stats-number">1,234</span>
                  <p class="stat-change">+12% from last month</p>
                </div>
              </Card>

              <Card
                title="Active Sessions"
                size="small"
                elevation="medium"
                variant="filled"
              >
                <div class="stat-content">
                  <span class="stats-number">89</span>
                  <p class="stat-change">+5% from yesterday</p>
                </div>
              </Card>

              <Card
                title="Today's Visits"
                size="small"
                elevation="medium"
                variant="filled"
              >
                <div class="stat-content">
                  <span class="stats-number">456</span>
                  <p class="stat-change">+23% from yesterday</p>
                </div>
              </Card>
            </div>
          </div>
        </template>

        <template #analytics>
          <div class="tab-content">
            <Card
              title="Analytics Dashboard"
              content="Detailed analytics data and insights are displayed here with comprehensive charts and metrics."
              elevation="medium"
            >
              <div class="chart-placeholder">
                📊 Chart Area
              </div>

              <template #footer>
                <div class="card-actions">
                  <EaButton label="Export Data" variant="primary" size="sm" />
                  <EaButton label="View Details" variant="outline" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>

        <template #reports>
          <div class="tab-content">
            <Card
              title="Reports"
              content="Access and manage your reports from this section."
              elevation="medium"
            >
              <div class="report-list">
                <div class="report-item">
                  <span>📄</span>
                  <div class="report-info">
                    <strong>Monthly Report</strong>
                    <p>Generated on March 2024</p>
                  </div>
                  <EaButton label="Download" variant="outline" size="sm" />
                </div>
                <div class="report-item">
                  <span>📄</span>
                  <div class="report-info">
                    <strong>Annual Report</strong>
                    <p>Generated on January 2024</p>
                  </div>
                  <EaButton label="Download" variant="outline" size="sm" />
                </div>
                <div class="report-item">
                  <span>📄</span>
                  <div class="report-info">
                    <strong>Custom Report</strong>
                    <p>Generated on February 2024</p>
                  </div>
                  <EaButton label="Download" variant="outline" size="sm" />
                </div>
              </div>

              <template #footer>
                <div class="card-actions">
                  <EaButton label="Generate New Report" variant="primary" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- Underline Variant -->
    <section class="demo-section">
      <h2>Underline Style</h2>
      <Tabs
        :tabs="underlineTabs"
        variant="underline"
        size="large"
        @tab-change="onTabChange"
      >
        <template #products>
          <div class="tab-content">
            <div class="product-grid">
              <Card
                title="Premium Laptop"
                size="medium"
                elevation="medium"
                :hoverable="true"
              >
                <div class="product-content">
                  <p class="product-description">High-performance laptop for professionals</p>
                  <p class="product-price">$1,299</p>
                </div>

                <template #footer>
                  <div class="card-actions">
                    <EaButton label="Add to Cart" variant="primary" size="sm" />
                    <EaButton label="View Details" variant="outline" size="sm" />
                  </div>
                </template>
              </Card>

              <Card
                title="Wireless Headphones"
                size="medium"
                elevation="medium"
                :hoverable="true"
              >
                <div class="product-content">
                  <p class="product-description">Premium noise-canceling headphones</p>
                  <p class="product-price">$299</p>
                </div>

                <template #footer>
                  <div class="card-actions">
                    <EaButton label="Add to Cart" variant="primary" size="sm" />
                    <EaButton label="View Details" variant="outline" size="sm" />
                  </div>
                </template>
              </Card>

              <Card
                title="Smart Watch"
                size="medium"
                elevation="medium"
                :hoverable="true"
              >
                <div class="product-content">
                  <p class="product-description">Advanced fitness and health tracking</p>
                  <p class="product-price">$399</p>
                </div>

                <template #footer>
                  <div class="card-actions">
                    <EaButton label="Add to Cart" variant="primary" size="sm" />
                    <EaButton label="View Details" variant="outline" size="sm" />
                  </div>
                </template>
              </Card>
            </div>
          </div>
        </template>

        <template #services>
          <div class="tab-content">
            <Card
              title="Our Services"
              content="We provide comprehensive services to ensure your complete satisfaction."
              elevation="medium"
            >
              <div class="service-list">
                <div class="service-item">
                  <span class="service-icon">🔧</span>
                  <div class="service-info">
                    <strong>Technical Support</strong>
                    <p>24/7 expert technical assistance</p>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon">🚚</span>
                  <div class="service-info">
                    <strong>Free Shipping</strong>
                    <p>Free delivery on orders over $100</p>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon">💳</span>
                  <div class="service-info">
                    <strong>Secure Payment</strong>
                    <p>SSL encrypted secure transactions</p>
                  </div>
                </div>
                <div class="service-item">
                  <span class="service-icon">🔄</span>
                  <div class="service-info">
                    <strong>Easy Returns</strong>
                    <p>30-day hassle-free return policy</p>
                  </div>
                </div>
              </div>

              <template #footer>
                <div class="card-actions">
                  <EaButton label="Learn More" variant="primary" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>

        <template #contact>
          <div class="tab-content">
            <Card
              title="Contact Information"
              content="Get in touch with us through any of the following channels."
              elevation="medium"
            >
              <div class="contact-info">
                <div class="contact-item">
                  <span class="contact-icon">📞</span>
                  <div class="contact-details">
                    <strong>Phone:</strong>
                    <span>+1 555 123 4567</span>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📧</span>
                  <div class="contact-details">
                    <strong>Email:</strong>
                    <span>info@example.com</span>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">📍</span>
                  <div class="contact-details">
                    <strong>Address:</strong>
                    <span>123 Business St, New York, NY 10001</span>
                  </div>
                </div>
                <div class="contact-item">
                  <span class="contact-icon">🕒</span>
                  <div class="contact-details">
                    <strong>Hours:</strong>
                    <span>Mon-Fri 9AM-6PM EST</span>
                  </div>
                </div>
              </div>

              <template #footer>
                <div class="card-actions">
                  <EaButton label="Send Message" variant="primary" size="sm" />
                  <EaButton label="Schedule Call" variant="outline" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>
      </Tabs>
    </section>

    <!-- Small Size Example -->
    <section class="demo-section">
      <h2>Small Size</h2>
      <Tabs
        :tabs="smallTabs"
        size="small"
        @tab-change="onTabChange"
      >
        <template #tab1>
          <div class="tab-content">
            <Card
              title="First Tab"
              content="This is the content of the first tab with small size styling."
              size="small"
              elevation="small"
            >
              <template #footer>
                <div class="card-actions">
                  <EaButton label="Action" variant="primary" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>

        <template #tab2>
          <div class="tab-content">
            <Card
              title="Second Tab"
              content="This is the content of the second tab demonstrating small size tabs."
              size="small"
              elevation="small"
            >
              <template #footer>
                <div class="card-actions">
                  <EaButton label="Action" variant="secondary" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </template>

        <template #tab3>
          <div class="tab-content">
            <Card
              title="Third Tab (Disabled)"
              content="This tab is disabled and cannot be accessed."
              size="small"
              elevation="small"
            />
          </div>
        </template>
      </Tabs>
    </section>

    <!-- Code Examples Section -->
    <section class="demo-section">
      <h2>Code Examples</h2>

      <!-- Basic Example -->
      <div class="example">
        <h3>Basic Usage</h3>
        <p>Simple tabs with icon, badge, and content slots.</p>

        <div class="code-example">
          <h4>Template</h4>
          <pre><code>&lt;template&gt;
  &lt;Tabs :tabs="defaultTabs" @tab-change="onTabChange"&gt;
    &lt;template #dashboard&gt;
      &lt;Card
        title="Dashboard Overview"
        content="Welcome to your dashboard!"
      &gt;
        &lt;template #footer&gt;
          &lt;div class="card-actions"&gt;
            &lt;EaButton label="View Details" variant="primary" size="sm" /&gt;
            &lt;EaButton label="Refresh" variant="outline" size="sm" /&gt;
          &lt;/div&gt;
        &lt;/template&gt;
      &lt;/Card&gt;
    &lt;/template&gt;

    &lt;template #profile&gt;
      &lt;Card title="User Profile"&gt;
        &lt;!-- Profile content --&gt;
      &lt;/Card&gt;
    &lt;/template&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;</code></pre>
        </div>

        <div class="code-example">
          <h4>Script</h4>
          <pre><code>&lt;script setup&gt;
import { ref } from 'vue';
import Tabs from '@/components/ui/panels/EaTabs/EaTabs.vue';
import Card from '@/components/ui/panels/EaCard/EaCard.vue';
import EaButton from '@/components/ui/form/EaButton/index.vue';

const defaultTabs = ref([
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: 'check'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'notification',
    badge: '3'
  }
]);

const onTabChange = (index, tab) =&gt; {
  console.log('Tab changed:', { index, tab });
};
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Pills Variant Example -->
      <div class="example">
        <h3>Pills Variant</h3>
        <p>Tabs with pill-style appearance.</p>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Tabs
    :tabs="pillsTabs"
    variant="pills"
    @tab-change="onTabChange"
  &gt;
    &lt;template #overview&gt;
      &lt;!-- Content --&gt;
    &lt;/template&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;

&lt;script setup&gt;
const pillsTabs = ref([
  {
    id: 'overview',
    label: 'Overview',
    icon: 'dashboard'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'sparkles'
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'inputs',
    badge: '12'
  }
]);
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Underline Variant Example -->
      <div class="example">
        <h3>Underline Variant</h3>
        <p>Tabs with underline style and large size.</p>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Tabs
    :tabs="underlineTabs"
    variant="underline"
    size="large"
    @tab-change="onTabChange"
  &gt;
    &lt;template #products&gt;
      &lt;!-- Products content --&gt;
    &lt;/template&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;

&lt;script setup&gt;
const underlineTabs = ref([
  {
    id: 'products',
    label: 'Products'
  },
  {
    id: 'services',
    label: 'Services'
  },
  {
    id: 'contact',
    label: 'Contact'
  }
]);
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Disabled Tab Example -->
      <div class="example">
        <h3>Disabled Tabs</h3>
        <p>Tabs with disabled state.</p>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Tabs :tabs="tabsWithDisabled" size="small"&gt;
    &lt;template #tab1&gt;
      &lt;Card title="First Tab" content="Active tab content" /&gt;
    &lt;/template&gt;

    &lt;template #tab2&gt;
      &lt;Card title="Second Tab" content="Another active tab" /&gt;
    &lt;/template&gt;

    &lt;template #tab3&gt;
      &lt;Card title="Disabled Tab" content="This tab is disabled" /&gt;
    &lt;/template&gt;
  &lt;/Tabs&gt;
&lt;/template&gt;

&lt;script setup&gt;
const tabsWithDisabled = ref([
  { id: 'tab1', label: 'Tab 1' },
  { id: 'tab2', label: 'Tab 2' },
  { id: 'tab3', label: 'Tab 3', disabled: true }
]);
&lt;/script&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- Props Documentation -->
    <section class="documentation-section">
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
              <td><code>tabs</code></td>
              <td>Array&lt;Tab&gt;</td>
              <td>[]</td>
              <td>Array of tab objects with id, label, content, icon, badge, disabled properties</td>
            </tr>
            <tr>
              <td><code>defaultTab</code></td>
              <td>Number</td>
              <td>0</td>
              <td>Index of the default active tab</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>'default' | 'pills' | 'underline'</td>
              <td>'default'</td>
              <td>Visual style variant of the tabs</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>'small' | 'medium' | 'large'</td>
              <td>'medium'</td>
              <td>Size of the tabs affecting padding and font size</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Tab Object Properties -->
    <section class="documentation-section">
      <h2>Tab Object Properties</h2>
      <div class="props-table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Type</th>
              <th>Required</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>id</code></td>
              <td>String</td>
              <td>Yes</td>
              <td>Unique identifier for the tab, used for slot names</td>
            </tr>
            <tr>
              <td><code>label</code></td>
              <td>String</td>
              <td>Yes</td>
              <td>Display text for the tab button</td>
            </tr>
            <tr>
              <td><code>content</code></td>
              <td>String</td>
              <td>No</td>
              <td>HTML content to display if no slot is provided</td>
            </tr>
            <tr>
              <td><code>icon</code></td>
              <td>String</td>
              <td>No</td>
              <td>Icon name from the EaIcons component</td>
            </tr>
            <tr>
              <td><code>badge</code></td>
              <td>String | Number</td>
              <td>No</td>
              <td>Badge content to display next to the label</td>
            </tr>
            <tr>
              <td><code>disabled</code></td>
              <td>Boolean</td>
              <td>No</td>
              <td>Whether the tab is disabled and cannot be selected</td>
            </tr>
            <tr>
              <td><code>iconClass</code></td>
              <td>String</td>
              <td>No</td>
              <td>Additional CSS class for the icon</td>
            </tr>
            <tr>
              <td><code>tabClass</code></td>
              <td>String</td>
              <td>No</td>
              <td>Additional CSS class for the tab button</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Events Documentation -->
    <section class="documentation-section">
      <h2>Events</h2>
      <div class="events-table">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Description</th>
              <th>Payload</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>tab-change</code></td>
              <td>Emitted when a tab is selected</td>
              <td>(index: number, tab: Tab)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Slots Documentation -->
    <section class="documentation-section">
      <h2>Slots</h2>
      <div class="slots-table">
        <table>
          <thead>
            <tr>
              <th>Slot Name</th>
              <th>Description</th>
              <th>Scope</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>[tab.id]</code></td>
              <td>Named slot for each tab content using the tab's id</td>
              <td>{ tab: Tab, index: number }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Tabs from '@/components/ui/panels/EaTabs/EaTabs.vue'
import Card from '@/components/ui/panels/EaCard/EaCard.vue'
import EaButton from '@/components/ui/form/EaButton/index.vue'

// Default tabs data
const defaultTabs = ref([
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: 'dashboard'
  },
  {
    id: 'profile',
    label: 'Profile',
    icon: 'check'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: 'notification',
    badge: '3'
  }
])

// Pills tabs data
const pillsTabs = ref([
  {
    id: 'overview',
    label: 'Overview',
    icon: 'dashboard'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'sparkles'
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: 'inputs',
    badge: '12'
  }
])

// Underline tabs data
const underlineTabs = ref([
  {
    id: 'products',
    label: 'Products'
  },
  {
    id: 'services',
    label: 'Services'
  },
  {
    id: 'contact',
    label: 'Contact'
  }
])
type SmallTabsType = {
  id: string
  label: string
  disabled?: boolean
}
// Small tabs data
const smallTabs = ref<SmallTabsType[]>([
  {
    id: 'tab1',
    label: 'Tab 1'
  },
  {
    id: 'tab2',
    label: 'Tab 2'
  },
  {
    id: 'tab3',
    label: 'Tab 3',
    disabled: true
  }
])

// Types
interface Tab {
  id: string
  label: string
  content?: string
  icon?: string
  badge?: string | number
  disabled?: boolean
}

// Event handler
const onTabChange = (index: number, tab: Tab) => {
  console.log('Tab changed:', { index, tab })
}
</script>

<style scoped lang="scss">
.tabs-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    color: #6b7280;
  }
}

.demo-section {
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }
}

.tab-content {
  padding: 1rem 0;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 0.5rem;
  }

  p {
    color: #6b7280;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 1.5rem;
    color: #6b7280;

    li {
      margin-bottom: 0.5rem;
    }
  }
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.profile-field {
  display: flex;
  gap: 1rem;

  label {
    font-weight: 600;
    color: #374151;
    min-width: 80px;
  }

  span {
    color: #6b7280;
  }
}

.settings-group {
  margin-bottom: 1.5rem;

  h4 {
    margin-bottom: 1rem;
  }
}

.setting-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  cursor: pointer;
  color: #6b7280;

  input[type="checkbox"] {
    margin: 0;
  }
}

.notification-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.notification-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
}

.notification-dot {
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border-radius: 50%;
  margin-top: 0.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-content {
  text-align: center;

  .stats-number {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    display: block;
    margin-bottom: 0.5rem;
  }

  .stat-change {
    font-size: 0.875rem;
    color: #059669;
    margin: 0;
  }
}

.chart-placeholder {
  height: 200px;
  background-color: #f1f5f9;
  border: 2px dashed #cbd5e1;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem;
  color: #64748b;
}

.report-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.report-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #fefefe;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;

  span {
    font-size: 1.5rem;
  }

  .report-info {
    flex: 1;

    strong {
      display: block;
      color: #374151;
      margin-bottom: 0.25rem;
    }

    p {
      margin: 0;
      font-size: 0.875rem;
      color: #6b7280;
    }
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.product-content {
  text-align: center;

  .product-description {
    color: #6b7280;
    margin-bottom: 1rem;
  }

  .product-price {
    font-size: 1.25rem;
    font-weight: 600;
    color: #059669;
    margin: 0;
  }
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.service-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: #f0f9ff;
  border-radius: 0.5rem;

  .service-icon {
    font-size: 1.5rem;
    margin-top: 0.25rem;
  }

  .service-info {
    flex: 1;

    strong {
      display: block;
      color: #374151;
      margin-bottom: 0.25rem;
    }

    p {
      margin: 0;
      color: #6b7280;
      font-size: 0.9rem;
    }
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;

  .contact-icon {
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }

  .contact-details {
    flex: 1;

    strong {
      display: block;
      color: #374151;
      margin-bottom: 0.25rem;
    }

    span {
      color: #6b7280;
    }
  }
}

// Card actions
.card-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

// Documentation sections
.documentation-section {
  margin-bottom: 3rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #374151;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
  }
}

// Code examples
.example {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);

  h3 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  p {
    color: #666;
    margin-bottom: 1.5rem;
  }
}

.code-example {
  background: #2d3748;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  h4 {
    background: #4a5568;
    color: white;
    margin: 0;
    padding: 1rem;
    font-size: 1rem;
  }

  pre {
    margin: 0;
    padding: 1.5rem;
    overflow-x: auto;
  }

  code {
    color: #e2e8f0;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

// Documentation tables
.props-table,
.events-table,
.slots-table {
  overflow-x: auto;
  margin-bottom: 2rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

th {
  background: #3b82f6;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
}

td code {
  background: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  color: #e74c3c;
}

// Responsive
@media (max-width: 768px) {
  .tabs-demo {
    padding: 1rem;
  }

  .page-header h1 {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-item {
    flex-direction: row;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }
  }

  .example {
    padding: 1.5rem;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.75rem;
  }
}

@media (max-width: 480px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .profile-field {
    flex-direction: column;
    gap: 0.25rem;

    label {
      min-width: auto;
    }
  }
}
</style>
