import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  base: "/MPhys2/",
  server: {
    allowedHosts: [
      'knelt-reapply-capably.ngrok-free.dev', // ngrok url for mobile testing
    ],
  },

})
