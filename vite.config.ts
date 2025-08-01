import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ['src/index.ts', 'src/**/*'],
      exclude: ['src/**/__tests__/*', 'src/main.ts', 'src/App.vue', 'src/views/**/*'],
      tsconfigPath: './tsconfig.lib.json'
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'EaKit',
      fileName: (format) => `ea-kit.${format}.js`
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ['vue', 'vue-router', 'pinia'],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: 'Vue',
          'vue-router': 'VueRouter',
          pinia: 'Pinia'
        }
      }
    },
    cssCodeSplit: false,
    minify: false,
    sourcemap: true,
    target: 'esnext'
  }
})


