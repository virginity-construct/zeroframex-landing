import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '', // Empty string for GitHub Pages with custom domain
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
    minify: true,
  },
});
