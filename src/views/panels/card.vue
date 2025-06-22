<template>
  <div class="card-demo-page">
    <div class="demo-header">
      <h1>Card Component</h1>
      <p class="description">
        A flexible card component that can display content in an organized, visually appealing container with customizable header, content, and footer sections.
      </p>
    </div>

    <!-- Examples -->
    <div class="examples-section">
      <h2>Examples</h2>

      <!-- Example 1: Basic Usage -->
      <div class="example">
        <h3>Basic Usage</h3>
        <p>Simple card with title and content using props.</p>

        <div class="example-demo">
          <div class="cards-grid">
            <Card
              title="Basic Card"
              content="This is a simple card with title and content using props."
            />

            <Card
              title="Card with Footer"
              content="This card includes a footer section."
              footerText="Card Footer"
            />
          </div>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Card
    title="Basic Card"
    content="This is a simple card with title and content using props."
  /&gt;

  &lt;Card
    title="Card with Footer"
    content="This card includes a footer section."
    footerText="Card Footer"
  /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <!-- Example 2: Size Variants -->
      <div class="example">
        <h3>Size Variants</h3>
        <p>Cards come in three different sizes: small, medium, and large.</p>

        <div class="example-demo">
          <div class="cards-grid">
            <Card
              title="Small Card"
              content="This is a small sized card."
              size="small"
            />

            <Card
              title="Medium Card"
              content="This is a medium sized card (default)."
              size="medium"
            />

            <Card
              title="Large Card"
              content="This is a large sized card with more padding."
              size="large"
            />
          </div>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Card title="Small Card" content="Small sized card." size="small" /&gt;
  &lt;Card title="Medium Card" content="Medium sized card." size="medium" /&gt;
  &lt;Card title="Large Card" content="Large sized card." size="large" /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <!-- Example 3: Elevation Variants -->
      <div class="example">
        <h3>Elevation Variants</h3>
        <p>Control the shadow depth with different elevation levels.</p>

        <div class="example-demo">
          <div class="cards-grid">
            <Card
              title="No Shadow"
              content="Card with no shadow."
              elevation="none"
            />

            <Card
              title="Small Shadow"
              content="Card with small shadow."
              elevation="small"
            />

            <Card
              title="Medium Shadow"
              content="Card with medium shadow."
              elevation="medium"
            />

            <Card
              title="Large Shadow"
              content="Card with large shadow."
              elevation="large"
            />
          </div>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Card title="No Shadow" elevation="none" /&gt;
  &lt;Card title="Small Shadow" elevation="small" /&gt;
  &lt;Card title="Medium Shadow" elevation="medium" /&gt;
  &lt;Card title="Large Shadow" elevation="large" /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <!-- Example 4: Style Variants -->
      <div class="example">
        <h3>Style Variants</h3>
        <p>Different visual styles for various design needs.</p>

        <div class="example-demo">
          <div class="cards-grid">
            <Card
              title="Default Card"
              content="Standard card with background and shadow."
              variant="default"
            />

            <Card
              title="Outlined Card"
              content="Card with border and no background."
              variant="outlined"
            />

            <Card
              title="Filled Card"
              content="Card with subtle background fill."
              variant="filled"
            />
          </div>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Card title="Default Card" variant="default" /&gt;
  &lt;Card title="Outlined Card" variant="outlined" /&gt;
  &lt;Card title="Filled Card" variant="filled" /&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <!-- Example 5: Interactive Cards -->
      <div class="example">
        <h3>Interactive Cards</h3>
        <p>Cards with hover effects and click interactions.</p>

        <div class="example-demo">
          <div class="cards-grid">
            <Card
              title="Hoverable Card"
              content="This card has hover effects."
              :hoverable="true"
            />

            <Card
              title="Clickable Card"
              content="Click me! Check the console for events."
              :clickable="true"
              @click="handleCardClick('Clickable Card')"
            />

            <Card
              title="Interactive Card"
              content="Both hoverable and clickable."
              :hoverable="true"
              :clickable="true"
              @click="handleCardClick('Interactive Card')"
            />
          </div>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Card title="Hoverable Card" :hoverable="true" /&gt;

  &lt;Card
    title="Clickable Card"
    :clickable="true"
    @click="handleCardClick"
  /&gt;

  &lt;Card
    title="Interactive Card"
    :hoverable="true"
    :clickable="true"
    @click="handleCardClick"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleCardClick = (cardName) =&gt; {
  console.log(`${cardName} clicked!`);
};
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Example 6: Custom Slots -->
      <div class="example">
        <h3>Custom Slots</h3>
        <p>Use slots for complete control over card content.</p>

        <div class="example-demo">
          <div class="cards-grid">
            <Card>
              <template #header>
                <div class="custom-header">
                  <span class="icon">🎨</span>
                  <h3>Custom Header</h3>
                  <span class="badge">New</span>
                </div>
              </template>

              <div class="custom-content">
                <p>This card uses custom slots for complete control over the content.</p>
                <ul>
                  <li>Custom header with icon and badge</li>
                  <li>Rich content with lists</li>
                  <li>Custom footer with actions</li>
                </ul>
              </div>

              <template #footer>
                <div class="custom-footer">
                  <EaButton label="Primary" variant="primary" size="sm" />
                  <EaButton label="Secondary" variant="secondary" size="sm" />
                </div>
              </template>
            </Card>

            <Card>
              <template #header>
                <div class="profile-header">
                  <img src="https://via.placeholder.com/40" alt="Avatar" class="avatar">
                  <div class="profile-info">
                    <h4>John Doe</h4>
                    <p>Frontend Developer</p>
                  </div>
                </div>
              </template>

              <div class="profile-content">
                <p>Experienced Vue.js developer with a passion for creating beautiful user interfaces.</p>
                <div class="stats">
                  <div class="stat">
                    <span class="stat-number">150+</span>
                    <span class="stat-label">Projects</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">5 years</span>
                    <span class="stat-label">Experience</span>
                  </div>
                </div>
              </div>

              <template #footer>
                <div class="profile-footer">
                  <EaButton label="View Profile" variant="outline" size="sm" />
                  <EaButton label="Contact" variant="primary" size="sm" />
                </div>
              </template>
            </Card>
          </div>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Card&gt;
    &lt;template #header&gt;
      &lt;div class="custom-header"&gt;
        &lt;span class="icon"&gt;🎨&lt;/span&gt;
        &lt;h3&gt;Custom Header&lt;/h3&gt;
        &lt;span class="badge"&gt;New&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;div class="custom-content"&gt;
      &lt;p&gt;Custom content with slots...&lt;/p&gt;
    &lt;/div&gt;

    &lt;template #footer&gt;
      &lt;div class="custom-footer"&gt;
        &lt;EaButton label="Primary" variant="primary" size="sm" /&gt;
        &lt;EaButton label="Secondary" variant="secondary" size="sm" /&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/Card&gt;
&lt;/template&gt;

&lt;script setup&gt;
import EaButton from '@/components/ui/form/EaButton/index.vue';
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Example 7: Custom CSS Classes -->
      <div class="example">
        <h3>Custom CSS Classes</h3>
        <p>Apply custom styling using CSS class props.</p>

        <div class="example-demo">
          <div class="cards-grid">
            <Card
              title="Gradient Card"
              content="This card uses custom CSS classes for styling."
              wrapperClass="gradient-card"
              headerClass="gradient-header"
              contentClass="gradient-content"
              titleClass="gradient-title"
            />

            <Card
              title="Dark Theme Card"
              content="Custom dark theme styling."
              wrapperClass="dark-card"
              headerClass="dark-header"
              contentClass="dark-content"
              titleClass="dark-title"
            />
          </div>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Card
    title="Gradient Card"
    content="Custom styled card."
    wrapperClass="gradient-card"
    headerClass="gradient-header"
    contentClass="gradient-content"
    titleClass="gradient-title"
  /&gt;
&lt;/template&gt;

&lt;style&gt;
.gradient-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.gradient-header {
  background: rgba(255,255,255,0.1);
}

.gradient-title {
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
&lt;/style&gt;</code></pre>
        </div>
      </div>
    </div>

    <!-- Props Documentation -->
    <div class="props-section">
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
              <td><code>title</code></td>
              <td>String</td>
              <td>undefined</td>
              <td>Title text for the card header</td>
            </tr>
            <tr>
              <td><code>content</code></td>
              <td>String</td>
              <td>undefined</td>
              <td>Content text for the card body</td>
            </tr>
            <tr>
              <td><code>footerText</code></td>
              <td>String</td>
              <td>undefined</td>
              <td>Footer text for the card footer</td>
            </tr>
            <tr>
              <td><code>size</code></td>
              <td>'small' | 'medium' | 'large'</td>
              <td>'medium'</td>
              <td>Size of the card affecting padding</td>
            </tr>
            <tr>
              <td><code>elevation</code></td>
              <td>'none' | 'small' | 'medium' | 'large'</td>
              <td>'small'</td>
              <td>Shadow depth level</td>
            </tr>
            <tr>
              <td><code>variant</code></td>
              <td>'default' | 'outlined' | 'filled'</td>
              <td>'default'</td>
              <td>Visual style variant</td>
            </tr>
            <tr>
              <td><code>hoverable</code></td>
              <td>Boolean</td>
              <td>false</td>
              <td>Enable hover effects</td>
            </tr>
            <tr>
              <td><code>clickable</code></td>
              <td>Boolean</td>
              <td>false</td>
              <td>Enable click interactions</td>
            </tr>
            <tr>
              <td><code>wrapperClass</code></td>
              <td>String</td>
              <td>''</td>
              <td>Additional CSS class for the card wrapper</td>
            </tr>
            <tr>
              <td><code>headerClass</code></td>
              <td>String</td>
              <td>''</td>
              <td>Additional CSS class for the header</td>
            </tr>
            <tr>
              <td><code>contentClass</code></td>
              <td>String</td>
              <td>''</td>
              <td>Additional CSS class for the content area</td>
            </tr>
            <tr>
              <td><code>footerClass</code></td>
              <td>String</td>
              <td>''</td>
              <td>Additional CSS class for the footer</td>
            </tr>
            <tr>
              <td><code>titleClass</code></td>
              <td>String</td>
              <td>''</td>
              <td>Additional CSS class for the title</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Slots Documentation -->
    <div class="slots-section">
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
              <td><code>header</code></td>
              <td>Custom header content</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>default</code></td>
              <td>Main content area</td>
              <td>-</td>
            </tr>
            <tr>
              <td><code>footer</code></td>
              <td>Custom footer content</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Events Documentation -->
    <div class="events-section">
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
              <td><code>click</code></td>
              <td>Emitted when card is clicked (only when clickable=true)</td>
              <td>MouseEvent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from '@/components/ui/panels/EaCard/EaCard.vue';
import EaButton from '@/components/ui/form/EaButton/index.vue';

const handleCardClick = (cardName: string) => {
  console.log(`${cardName} clicked!`);
  alert(`${cardName} was clicked!`);
};
</script>

<style scoped>
.card-demo-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
}

.demo-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.examples-section,
.props-section,
.slots-section,
.events-section {
  margin-bottom: 3rem;
}

.examples-section h2,
.props-section h2,
.slots-section h2,
.events-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.example {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.example h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.example p {
  color: #666;
  margin-bottom: 1.5rem;
}

.example-demo {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.code-example {
  background: #2d3748;
  border-radius: 8px;
  overflow: hidden;
}

.code-example h4 {
  background: #4a5568;
  color: white;
  margin: 0;
  padding: 1rem;
  font-size: 1rem;
}

.code-example pre {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
}

.code-example code {
  color: #e2e8f0;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

/* Custom slot styling */
.custom-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0;
}

.custom-header .icon {
  font-size: 1.5rem;
}

.custom-header h3 {
  margin: 0;
  flex: 1;
  color: #2c3e50;
}

.badge {
  background: #e74c3c;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.custom-footer {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

/* Profile card styling */
.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info h4 {
  margin: 0;
  color: #2c3e50;
  font-size: 1.1rem;
}

.profile-info p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}

.stats {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.25rem;
  font-weight: bold;
  color: #3498db;
}

.stat-label {
  display: block;
  font-size: 0.8rem;
  color: #666;
  margin-top: 0.25rem;
}

.profile-footer {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

/* Documentation tables */
.props-table,
.slots-table,
.events-table {
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
  background: #3498db;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

td code {
  background: #f8f9fa;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  color: #e74c3c;
}

/* Responsive */
@media (max-width: 768px) {
  .card-demo-page {
    padding: 1rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .example {
    padding: 1.5rem;
  }

  .cards-grid {
    grid-template-columns: 1fr;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.75rem;
  }
}
</style>

<!-- Custom card styles for examples -->
<style>
:deep(.gradient-card) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

:deep(.gradient-header) {
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}

:deep(.gradient-title) {
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

:deep(.gradient-content) {
  color: rgba(255,255,255,0.9);
}

:deep(.dark-card) {
  background: #2c3e50;
  color: white;
  border: 1px solid #34495e;
}

:deep(.dark-header) {
  background: #34495e;
  border-bottom: 1px solid #4a5f7a;
}

:deep(.dark-title) {
  color: #ecf0f1;
}

:deep(.dark-content) {
  color: #bdc3c7;
}
</style>
