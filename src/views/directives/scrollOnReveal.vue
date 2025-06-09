<template>
  <div class="scroll-reveal-demo">
    <div class="container">
      <h1 class="title">Scroll On Reveal Directive Examples</h1>
      <p class="subtitle">Super easy scroll animations with just one line!</p>

      <!-- Test box -->
      <div class="demo-box" style="background: red; opacity: 1;">
        Test Box - Should be visible immediately
      </div>

      <!-- Super Easy Examples -->
      <section class="demo-section">
        <h2>🚀 Super Easy Usage</h2>
        <p class="description">Just specify the animation name as a string!</p>

        <div class="examples-grid">
          <!-- Fade In -->
          <div v-scroll-on-reveal="'fade-in'" class="demo-card">
            <h3>Fade In</h3>
            <code>v-scroll-on-reveal="'fade-in'"</code>
          </div>

          <!-- Slide Up -->
          <div v-scroll-on-reveal="'slide-up'" class="demo-card">
            <h3>Slide Up</h3>
            <code>v-scroll-on-reveal="'slide-up'"</code>
          </div>

          <!-- Scale -->
          <div v-scroll-on-reveal="'scale'" class="demo-card">
            <h3>Scale</h3>
            <code>v-scroll-on-reveal="'scale'"</code>
          </div>

          <!-- Bounce -->
          <div v-scroll-on-reveal="'bounce'" class="demo-card">
            <h3>Bounce</h3>
            <code>v-scroll-on-reveal="'bounce'"</code>
          </div>

          <!-- Rotate -->
          <div v-scroll-on-reveal="'rotate'" class="demo-card">
            <h3>Rotate</h3>
            <code>v-scroll-on-reveal="'rotate'"</code>
          </div>

          <!-- Zoom -->
          <div v-scroll-on-reveal="'zoom'" class="demo-card">
            <h3>Zoom</h3>
            <code>v-scroll-on-reveal="'zoom'"</code>
          </div>
        </div>
      </section>

      <!-- Direction Examples -->
      <section class="demo-section">
        <h2>📍 Direction Animations</h2>
        <div class="direction-grid">
          <div v-scroll-on-reveal="'slide-left'" class="direction-box">
            <span>Slide Left</span>
            <code>v-scroll-on-reveal="'slide-left'"</code>
          </div>

          <div v-scroll-on-reveal="'slide-right'" class="direction-box">
            <span>Slide Right</span>
            <code>v-scroll-on-reveal="'slide-right'"</code>
          </div>

          <div v-scroll-on-reveal="'slide-up'" class="direction-box">
            <span>Slide Up</span>
            <code>v-scroll-on-reveal="'slide-up'"</code>
          </div>

          <div v-scroll-on-reveal="'slide-down'" class="direction-box">
            <span>Slide Down</span>
            <code>v-scroll-on-reveal="'slide-down'"</code>
          </div>
        </div>
      </section>

      <!-- Advanced Options -->
      <section class="demo-section">
        <h2>⚙️ Advanced Options</h2>
        <p class="description">You can also pass an object for more control</p>

        <div class="advanced-examples">
          <!-- Slow duration -->
          <div v-scroll-on-reveal="{ animation: 'fade-in', duration: 'slow' }" class="demo-card">
            <h3>Slow Duration</h3>
            <code>v-scroll-on-reveal="{ animation: 'fade-in', duration: 'slow' }"</code>
          </div>

          <!-- Fast duration -->
          <div v-scroll-on-reveal="{ animation: 'scale', duration: 'fast' }" class="demo-card">
            <h3>Fast Duration</h3>
            <code>v-scroll-on-reveal="{ animation: 'scale', duration: 'fast' }"</code>
          </div>

          <!-- With delay -->
          <div v-scroll-on-reveal="{ animation: 'bounce', delay: 3 }" class="demo-card">
            <h3>With Delay (0.3s)</h3>
            <code>v-scroll-on-reveal="{ animation: 'bounce', delay: 3 }"</code>
          </div>

          <!-- Repeating -->
          <div v-scroll-on-reveal="{ animation: 'rotate', once: false }" class="demo-card">
            <h3>Repeating</h3>
            <code>v-scroll-on-reveal="{ animation: 'rotate', once: false }"</code>
          </div>
        </div>
      </section>

      <!-- Composable Examples -->
      <section class="demo-section">
        <h2>🎯 Using Composable (Even Easier!)</h2>
        <p class="description">Use the composable for cleaner code and better TypeScript support</p>

        <div class="composable-examples">
          <!-- Simple composable usage -->
          <div v-scroll-on-reveal="reveal.fadeIn()" class="demo-card">
            <h3>Composable Fade In</h3>
            <code>v-scroll-on-reveal="reveal.fadeIn()"</code>
          </div>

          <!-- Composable with options -->
          <div v-scroll-on-reveal="reveal.slideUp({ duration: 'slow' })" class="demo-card">
            <h3>Composable + Options</h3>
            <code>reveal.slideUp({ duration: 'slow' })</code>
          </div>

          <!-- Sequential cards -->
          <div class="card-sequence">
            <h4>Sequential Animation (Cards appear one by one)</h4>
            <div class="sequence-grid">
              <div
                v-for="(card, index) in cards"
                :key="index"
                v-scroll-on-reveal="reveal.stagger('scale')(index)"
                class="sequence-card"
              >
                Card {{ index + 1 }}
              </div>
            </div>
            <code>v-scroll-on-reveal="reveal.stagger('scale')(index)"</code>
          </div>
        </div>
      </section>

      <!-- All Available Animations -->
      <section class="demo-section">
        <h2>🎨 All Available Animations</h2>
        <div class="all-animations-grid">
          <div v-scroll-on-reveal="'fade-in'" class="animation-demo">fade-in</div>
          <div v-scroll-on-reveal="'slide-up'" class="animation-demo">slide-up</div>
          <div v-scroll-on-reveal="'slide-down'" class="animation-demo">slide-down</div>
          <div v-scroll-on-reveal="'slide-left'" class="animation-demo">slide-left</div>
          <div v-scroll-on-reveal="'slide-right'" class="animation-demo">slide-right</div>
          <div v-scroll-on-reveal="'scale'" class="animation-demo">scale</div>
          <div v-scroll-on-reveal="'bounce'" class="animation-demo">bounce</div>
          <div v-scroll-on-reveal="'rotate'" class="animation-demo">rotate</div>
          <div v-scroll-on-reveal="'flip'" class="animation-demo">flip</div>
          <div v-scroll-on-reveal="'zoom'" class="animation-demo">zoom</div>
        </div>
      </section>

      <!-- Quick Reference -->
      <section class="demo-section">
        <h2>📚 Quick Reference</h2>
        <div class="reference-grid">
          <div class="reference-card">
            <h4>Simple Usage</h4>
            <pre><code>v-scroll-on-reveal="'fade-in'"
v-scroll-on-reveal="'slide-up'"
v-scroll-on-reveal="'bounce'"</code></pre>
          </div>

          <div class="reference-card">
            <h4>With Options</h4>
            <pre><code>v-scroll-on-reveal="{
  animation: 'scale',
  duration: 'slow',
  delay: 2,
  once: false
}"</code></pre>
          </div>

          <div class="reference-card">
            <h4>Using Composable</h4>
            <pre><code>// In script:
const reveal = useScrollReveal()

// In template:
v-scroll-on-reveal="reveal.fadeIn()"
v-scroll-on-reveal="reveal.bounce({ duration: 'fast' })"</code></pre>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import vScrollOnReveal from '@/directives/scrollOnReveal'
import { useScrollReveal } from '@/composables/useScrollReveal'

// Use the composable
const reveal = useScrollReveal()

// Sample cards for sequential animation
const cards = ref(Array.from({ length: 6 }, (_, i) => ({ id: i + 1 })))
</script>

<style scoped>
.scroll-reveal-demo {
  min-height: 100vh;
  padding: 2rem 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: 700;
}

.subtitle {
  text-align: center;
  font-size: 1.3rem;
  color: #7f8c8d;
  margin-bottom: 4rem;
  font-weight: 500;
}

.demo-section {
  margin-bottom: 6rem;
  padding: 3rem 0;
}

.demo-section h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  color: #34495e;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.5rem;
  display: inline-block;
}

.description {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 3rem;
  line-height: 1.6;
}

/* Demo Cards */
.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.demo-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 2px solid #f8f9fa;
  transition: transform 0.3s ease;
}

.demo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.demo-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.demo-card code {
  background: #f8f9fa;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #e91e63;
  display: block;
  margin-top: 1rem;
}

/* Direction Grid */
.direction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.direction-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.direction-box span {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.direction-box code {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
}

/* Advanced Examples */
.advanced-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.composable-examples {
  margin: 3rem 0;
}

.card-sequence {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.card-sequence h4 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.sequence-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.sequence-card {
  background: linear-gradient(135deg, #ff7675 0%, #fd79a8 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
}

/* All Animations Grid */
.all-animations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.animation-demo {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  padding: 2rem 1rem;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Reference Grid */
.reference-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.reference-card {
  background: #2d3748;
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #3498db;
}

.reference-card h4 {
  color: #e2e8f0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.reference-card pre {
  background: #1a202c;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
}

.reference-card code {
  color: #a0aec0;
  font-family: 'Fira Code', 'Monaco', 'Menlo', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

/* Demo Box */
.demo-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  font-size: 1.2rem;
  text-align: center;
  margin: 2rem 0;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .examples-grid,
  .direction-grid,
  .advanced-examples {
    grid-template-columns: 1fr;
  }

  .sequence-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  .title {
    font-size: 2.5rem;
  }

  .demo-section h2 {
    font-size: 1.8rem;
  }
}
</style>
