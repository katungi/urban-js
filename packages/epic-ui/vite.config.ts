import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/main.tsx', 
      formats: ['cjs', 'es'], 
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    }
  }
})
