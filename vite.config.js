import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        showroom: resolve(__dirname, 'showroom.html'),
        order: resolve(__dirname, 'order.html'),
        confirmation: resolve(__dirname, 'confirmation.html'),
      },
    },
    outDir: 'dist',
  },
});
