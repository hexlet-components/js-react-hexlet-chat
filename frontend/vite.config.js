import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Проксируем все запросы
      '/': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
    },
  },
});
