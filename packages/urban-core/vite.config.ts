import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import babel from 'vite-plugin-babel';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), babel({
    babelConfig: {
      plugins: [["module:@preact/signals-react-transform"]]
    }
  })],
})
