<template>
  <div class="accordion-demo-page">
    <div class="demo-header">
      <h1>Accordion Component</h1>
      <p class="description">
        A flexible accordion component that supports multiple panels, custom content, and various configuration options.
      </p>
    </div>

    <!-- Examples -->
    <div class="examples-section">
      <h2>Examples</h2>

      <!-- Example 1: Basic Usage with Props -->
      <div class="example">
        <h3>Basic Usage with Props</h3>
        <p>Simple accordion using the items prop with data array.</p>

        <div class="example-demo">
          <Accordion :items="basicItems" :allowMultiple="false" />
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Accordion :items="basicItems" :allowMultiple="false" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
import Accordion from '@/components/ui/panels/EaAccordion/EaAccordion.vue';

const basicItems = ref([
  {
    title: 'What is Vue.js?',
    content: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and focuses on the view layer only.'
  },
  {
    title: 'How to install Vue?',
    content: 'You can install Vue using npm with the command: npm install vue@next. You can also use CDN links or download the files directly.'
  },
  {
    title: 'What are components?',
    content: 'Components are reusable Vue instances with a name and template. They help you build large-scale applications by breaking the UI into smaller, manageable pieces.'
  }
]);
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Example 2: Multiple Open Panels -->
      <div class="example">
        <h3>Multiple Open Panels</h3>
        <p>Allow multiple accordion panels to be open simultaneously.</p>

        <div class="example-demo">
          <Accordion :items="featureItems" :allowMultiple="true" />
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Accordion :items="featureItems" :allowMultiple="true" /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const featureItems = ref([
  {
    title: '🚀 Performance',
    content: 'Vue 3 features an optimized virtual DOM implementation and efficient reactivity system that provides excellent performance for modern web applications.'
  },
  {
    title: '🔧 Developer Experience',
    content: 'Excellent developer tooling including Vue DevTools, hot module replacement, comprehensive documentation, and TypeScript support out of the box.'
  },
  {
    title: '📦 Ecosystem',
    content: 'Rich ecosystem with official libraries like Vue Router for routing, Pinia for state management, and thousands of community-created plugins and components.'
  }
]);
&lt;/script&gt;</code></pre>
        </div>
      </div>

      <!-- Example 3: Custom Slots -->
      <div class="example">
        <h3>Custom Slots</h3>
        <p>Use custom slots for complete control over header and content rendering.</p>

        <div class="example-demo">
          <Accordion :allowMultiple="true">
            <template #header-1>
              <div class="custom-header">
                <span class="icon">📋</span>
                <h4>Project Details</h4>
                <span class="badge">New</span>
              </div>
            </template>
            <template #content-1>
              <div class="custom-content">
                <p><strong>Project Name:</strong> Vue Component Library</p>
                <p><strong>Status:</strong> In Development</p>
                <p><strong>Team Size:</strong> 5 developers</p>
                <div class="progress-bar">
                  <div class="progress" style="width: 75%"></div>
                </div>
                <small>75% Complete</small>
              </div>
            </template>

            <template #header-2>
              <div class="custom-header">
                <span class="icon">📊</span>
                <h4>Analytics</h4>
              </div>
            </template>
            <template #content-2>
              <div class="custom-content">
                <div class="stats-grid">
                  <div class="stat">
                    <span class="stat-number">1,234</span>
                    <span class="stat-label">Users</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">89%</span>
                    <span class="stat-label">Satisfaction</span>
                  </div>
                  <div class="stat">
                    <span class="stat-number">456</span>
                    <span class="stat-label">Downloads</span>
                  </div>
                </div>
              </div>
            </template>
          </Accordion>
        </div>

        <div class="code-example">
          <h4>Code</h4>
          <pre><code>&lt;template&gt;
  &lt;Accordion :allowMultiple="true"&gt;
    &lt;template #header-1&gt;
      &lt;div class="custom-header"&gt;
        &lt;span class="icon"&gt;📋&lt;/span&gt;
        &lt;h4&gt;Project Details&lt;/h4&gt;
        &lt;span class="badge"&gt;New&lt;/span&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #content-1&gt;
      &lt;div class="custom-content"&gt;
        &lt;p&gt;&lt;strong&gt;Project Name:&lt;/strong&gt; Vue Component Library&lt;/p&gt;
        &lt;p&gt;&lt;strong&gt;Status:&lt;/strong&gt; In Development&lt;/p&gt;
        &lt;!-- More content --&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;template #header-2&gt;
      &lt;div class="custom-header"&gt;
        &lt;span class="icon"&gt;📊&lt;/span&gt;
        &lt;h4&gt;Analytics&lt;/h4&gt;
      &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #content-2&gt;
      &lt;!-- Custom analytics content --&gt;
    &lt;/template&gt;
  &lt;/Accordion&gt;
&lt;/template&gt;</code></pre>
        </div>
      </div>

      <!-- Example 4: Dynamic Content -->
      <div class="example">
        <h3>Dynamic Content</h3>
        <p>Generate accordion items dynamically from data.</p>

        <div class="example-demo">
          <div class="controls">
            <button @click="addFAQ" class="add-button">Add FAQ</button>
            <button @click="removeFAQ" class="remove-button" :disabled="dynamicFAQs.length <= 1">Remove FAQ</button>
          </div>

          <Accordion :items="dynamicFAQsFormatted" :allowMultiple="true">
            <template
              v-for="(faqItem, faqIndex) in dynamicFAQs"
              :key="faqItem.id"
              #[`header-${faqIndex+1}`]
            >
              <div class="faq-header">
                <span class="faq-number">Q{{ faqIndex + 1 }}</span>
                <h4>{{ faqItem.question }}</h4>
              </div>
            </template>

            <template
              v-for="(faqItem, faqIndex) in dynamicFAQs"
              :key="faqItem.id"
              #[`content-${faqIndex+1}`]
            >
              <div class="faq-content">
                <p>{{ faqItem.answer }}</p>
                <small class="faq-category">Category: {{ faqItem.category }}</small>
              </div>
            </template>
          </Accordion>
        </div>

                 <div class="code-example">
           <h4>Code</h4>
                                 <pre><code>&lt;template&gt;
   &lt;div class="controls"&gt;
     &lt;button @click="addFAQ"&gt;Add FAQ&lt;/button&gt;
     &lt;button @click="removeFAQ"&gt;Remove FAQ&lt;/button&gt;
   &lt;/div&gt;

   &lt;Accordion :allowMultiple="true"&gt;
     &lt;template
         v-for="(item, index) in dynamicFAQs"
         :key="item.id"
         #[`header-&#36;{index+1}`]
       &gt;
         &lt;div class="faq-header"&gt;
           &lt;span class="faq-number"&gt;Q&#123;&#123; index + 1 &#125;&#125;&lt;/span&gt;
           &lt;h4&gt;&#123;&#123; item.question &#125;&#125;&lt;/h4&gt;
         &lt;/div&gt;
       &lt;/template&gt;

       &lt;template
         v-for="(item, index) in dynamicFAQs"
         :key="item.id"
         #[`content-&#36;{index+1}`]
       &gt;
         &lt;div class="faq-content"&gt;
           &lt;p&gt;&#123;&#123; item.answer &#125;&#125;&lt;/p&gt;
           &lt;small&gt;Category: &#123;&#123; item.category &#125;&#125;&lt;/small&gt;
         &lt;/div&gt;
       &lt;/template&gt;
   &lt;/Accordion&gt;
 &lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const dynamicFAQs = ref([
  {
    id: 1,
    question: 'How do I get started with this component?',
    answer: 'Begin by importing the Accordion component and passing your data through the items prop or using custom slots for more control.',
    category: 'Getting Started'
  },
  {
    id: 2,
    question: 'Can I customize the appearance?',
    answer: 'Yes, you can customize the accordion using CSS classes or by providing your own content through slots.',
    category: 'Customization'
  }
]);

const addFAQ = () => {
  const newId = Math.max(...dynamicFAQs.value.map(f => f.id)) + 1;
  const questions = [
    'How do I handle events?',
    'What about accessibility?',
    'Can I nest accordions?',
    'How to add animations?',
    'Is it mobile responsive?'
  ];
  const answers = [
    'The component emits events that you can listen to for custom functionality.',
    'The component follows accessibility best practices with proper ARIA attributes.',
    'Yes, you can nest accordions by placing one inside another\'s content slot.',
    'Animations are built-in, but you can customize them with CSS transitions.',
    'Yes, the component is fully responsive and works great on mobile devices.'
  ];
  const categories = ['Events', 'Accessibility', 'Advanced', 'Styling', 'Mobile'];

  const randomIndex = Math.floor(Math.random() * questions.length);

  dynamicFAQs.value.push({
    id: newId,
    question: questions[randomIndex],
    answer: answers[randomIndex],
    category: categories[randomIndex]
  });
};

const removeFAQ = () => {
  if (dynamicFAQs.value.length > 1) {
    dynamicFAQs.value.pop();
  }
};
&lt;/script&gt;</code></pre>
                 </div>
                </div>
       </div>

       <!-- Example 5: Custom CSS Classes -->
       <div class="example">
         <h3>Custom CSS Classes</h3>
         <p>Use custom CSS classes to style different parts of the accordion.</p>

         <div class="example-demo">
           <Accordion
             :items="styledItems"
             :allowMultiple="false"
             wrapperClass="custom-accordion-wrapper"
             itemClass="custom-accordion-item"
             headerClass="custom-accordion-header"
             contentClass="custom-accordion-content"
             titleClass="custom-accordion-title"
             toggleIconClass="custom-toggle-icon"
           />
         </div>

         <div class="code-example">
           <h4>Code</h4>
           <pre><code>&lt;template&gt;
   &lt;Accordion
     :items="styledItems"
     :allowMultiple="false"
     wrapperClass="custom-accordion-wrapper"
     itemClass="custom-accordion-item"
     headerClass="custom-accordion-header"
     contentClass="custom-accordion-content"
     titleClass="custom-accordion-title"
     toggleIconClass="custom-toggle-icon"
   /&gt;
 &lt;/template&gt;

 &lt;script setup&gt;
 const styledItems = ref([
   {
     title: 'Custom Styled Header',
     content: 'This accordion uses custom CSS classes for styling.'
   },
   {
     title: 'Another Custom Item',
     content: 'Each part of the accordion can be styled independently.'
   }
 ]);
 &lt;/script&gt;

 &lt;style&gt;
 .custom-accordion-wrapper {
   border-radius: 12px;
   box-shadow: 0 4px 12px rgba(0,0,0,0.15);
 }

 .custom-accordion-item {
   border: none;
   margin-bottom: 8px;
 }

 .custom-accordion-header {
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   color: white;
   border-radius: 8px;
 }

 .custom-accordion-title {
   font-weight: 600;
   font-size: 1.1rem;
 }

 .custom-toggle-icon {
   background: rgba(255,255,255,0.2);
   border-radius: 50%;
   width: 24px;
   height: 24px;
   display: flex;
   align-items: center;
   justify-content: center;
 }
 &lt;/style&gt;</code></pre>
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
               <td>Title for single accordion item when no items array is provided</td>
             </tr>
             <tr>
               <td><code>items</code></td>
               <td>Array</td>
               <td>[]</td>
               <td>Array of accordion items with title and content properties</td>
             </tr>
             <tr>
               <td><code>allowMultiple</code></td>
               <td>Boolean</td>
               <td>false</td>
               <td>Whether multiple panels can be open simultaneously</td>
             </tr>
             <tr>
               <td><code>wrapperClass</code></td>
               <td>String</td>
               <td>''</td>
               <td>Additional CSS class for the main accordion wrapper</td>
             </tr>
             <tr>
               <td><code>itemClass</code></td>
               <td>String</td>
               <td>''</td>
               <td>Additional CSS class for each accordion item</td>
             </tr>
             <tr>
               <td><code>headerClass</code></td>
               <td>String</td>
               <td>''</td>
               <td>Additional CSS class for accordion headers</td>
             </tr>
             <tr>
               <td><code>contentClass</code></td>
               <td>String</td>
               <td>''</td>
               <td>Additional CSS class for accordion content areas</td>
             </tr>
             <tr>
               <td><code>titleClass</code></td>
               <td>String</td>
               <td>''</td>
               <td>Additional CSS class for accordion titles</td>
             </tr>
             <tr>
               <td><code>toggleIconClass</code></td>
               <td>String</td>
               <td>''</td>
               <td>Additional CSS class for toggle icons</td>
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
               <td><code>header-{index}</code></td>
               <td>Custom header content for specific accordion item</td>
               <td>item, index, isOpen, toggle</td>
             </tr>
             <tr>
               <td><code>content-{index}</code></td>
               <td>Custom content for specific accordion item</td>
               <td>item, index, isOpen</td>
             </tr>
             <tr>
               <td><code>header</code></td>
               <td>Default header slot (when no items provided)</td>
               <td>isOpen</td>
             </tr>
             <tr>
               <td><code>default</code></td>
               <td>Default content slot (when no items provided)</td>
               <td>isOpen</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   </div>
 </template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import Accordion from '@/components/ui/panels/EaAccordion/EaAccordion.vue';

// Basic example data
const basicItems = ref([
  {
    title: 'What is Vue.js?',
    content: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and focuses on the view layer only.'
  },
  {
    title: 'How to install Vue?',
    content: 'You can install Vue using npm with the command: npm install vue@next. You can also use CDN links or download the files directly.'
  },
  {
    title: 'What are components?',
    content: 'Components are reusable Vue instances with a name and template. They help you build large-scale applications by breaking the UI into smaller, manageable pieces.'
  }
]);

// Feature items for multiple open example
const featureItems = ref([
  {
    title: '🚀 Performance',
    content: 'Vue 3 features an optimized virtual DOM implementation and efficient reactivity system that provides excellent performance for modern web applications.'
  },
  {
    title: '🔧 Developer Experience',
    content: 'Excellent developer tooling including Vue DevTools, hot module replacement, comprehensive documentation, and TypeScript support out of the box.'
  },
  {
    title: '📦 Ecosystem',
    content: 'Rich ecosystem with official libraries like Vue Router for routing, Pinia for state management, and thousands of community-created plugins and components.'
  }
]);

// Dynamic FAQ data
const dynamicFAQs = ref([
  {
    id: 1,
    question: 'How do I get started with this component?',
    answer: 'Begin by importing the Accordion component and passing your data through the items prop or using custom slots for more control.',
    category: 'Getting Started'
  },
  {
    id: 2,
    question: 'Can I customize the appearance?',
    answer: 'Yes, you can customize the accordion using CSS classes or by providing your own content through slots.',
    category: 'Customization'
  }
]);

const addFAQ = () => {
  const newId = Math.max(...dynamicFAQs.value.map(f => f.id)) + 1;
  const questions = [
    'How do I handle events?',
    'What about accessibility?',
    'Can I nest accordions?',
    'How to add animations?',
    'Is it mobile responsive?'
  ];
  const answers = [
    'The component emits events that you can listen to for custom functionality.',
    'The component follows accessibility best practices with proper ARIA attributes.',
    'Yes, you can nest accordions by placing one inside another\'s content slot.',
    'Animations are built-in, but you can customize them with CSS transitions.',
    'Yes, the component is fully responsive and works great on mobile devices.'
  ];
  const categories = ['Events', 'Accessibility', 'Advanced', 'Styling', 'Mobile'];

  const randomIndex = Math.floor(Math.random() * questions.length);

  dynamicFAQs.value.push({
    id: newId,
    question: questions[randomIndex],
    answer: answers[randomIndex],
    category: categories[randomIndex]
  });
};

const removeFAQ = () => {
  if (dynamicFAQs.value.length > 1) {
    dynamicFAQs.value.pop();
  }
};

// Styled items for custom CSS example
const styledItems = ref([
  {
    title: 'Custom Styled Header',
    content: 'This accordion uses custom CSS classes for styling. You can customize every part of the accordion appearance.'
  },
  {
    title: 'Another Custom Item',
    content: 'Each part of the accordion can be styled independently using the provided class props.'
  },
  {
    title: 'Gradient Design',
    content: 'This example shows how to create beautiful gradient backgrounds and custom styling for a modern look.'
  }
]);

// Formatted dynamic FAQs for accordion items prop
const dynamicFAQsFormatted = computed(() => {
  return dynamicFAQs.value.map((faq, index) => ({
    id: faq.id,
    title: `Q${index + 1}: ${faq.question}`,
    content: `${faq.answer}\n\nCategory: ${faq.category}`
  }));
});
</script>

<style scoped>
.accordion-demo-page {
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

.props-section,
.slots-section,
.examples-section {
  margin-bottom: 3rem;
}

.props-section h2,
.slots-section h2,
.examples-section h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
}

.props-table,
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

/* Custom header styles */
.custom-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.custom-header .icon {
  font-size: 1.5rem;
}

.custom-header h4 {
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

/* Custom content styles */
.custom-content {
  line-height: 1.6;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  margin: 1rem 0 0.5rem 0;
}

.progress {
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  transition: width 0.3s ease;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stat {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.stat-number {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #3498db;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-top: 0.25rem;
}

/* FAQ styles */
.faq-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
}

.faq-number {
  background: #3498db;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  min-width: 2rem;
  text-align: center;
}

.faq-header h4 {
  margin: 0;
  flex: 1;
  color: #2c3e50;
}

.faq-content {
  line-height: 1.6;
}

.faq-category {
  color: #666;
  font-style: italic;
  display: block;
  margin-top: 0.5rem;
}

/* Controls */
.controls {
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
}

.add-button,
.remove-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-button {
  background: #2ecc71;
  color: white;
}

.add-button:hover {
  background: #27ae60;
}

.remove-button {
  background: #e74c3c;
  color: white;
}

.remove-button:hover:not(:disabled) {
  background: #c0392b;
}

.remove-button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

/* Responsive */
@media (max-width: 768px) {
  .accordion-demo-page {
    padding: 1rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .example {
    padding: 1.5rem;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .controls {
    flex-direction: column;
  }

  table {
    font-size: 0.9rem;
  }

  th, td {
    padding: 0.75rem;
  }
}

/* Custom CSS classes for styling example */
:deep(.custom-accordion-wrapper) {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  overflow: hidden;
}

:deep(.custom-accordion-item) {
  border: none;
  margin-bottom: 8px;
}

:deep(.custom-accordion-header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 2px;
}

:deep(.custom-accordion-header:hover) {
  background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
}

:deep(.custom-accordion-title) {
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
}

:deep(.custom-toggle-icon) {
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
}

:deep(.custom-accordion-content) {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 0 0 8px 8px;
  margin-top: -2px;
}
</style>
