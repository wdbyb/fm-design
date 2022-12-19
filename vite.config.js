import { resolve } from 'path';
import { defineConfig } from 'vite';

const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  build: {
    outDir,
    emptyOutDir: true,
    // rollupOptions: {
    //   input: {
    //     main: resolve(__dirname, 'index.html'),
    //   'web-design': resolve(__dirname, 'web-design.html'),
    //   'app-design': resolve(__dirname, 'app-design.html'),
    //   'graphic-design': resolve(__dirname, 'graphic-design.html'),
    //   },
    // },
  },
});
