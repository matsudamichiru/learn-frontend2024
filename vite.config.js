import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
  base: '/learn-frontend2024/',
  root,
  build: {
    outDir,
    rollupOptions: {
      input: {
        sample1: resolve(root, 'sample1', 'index.html'),
        sample2: resolve(root, 'sample2', 'index.html'),
        sample3: resolve(root, 'sample3', 'index.html'),
        sample4: resolve(root, 'sample4', 'index.html'),
        sample5: resolve(root, 'sample5', 'index.html')
      },
    },
  },
});
