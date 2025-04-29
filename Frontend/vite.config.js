import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your Express backend
        changeOrigin: true,
        secure: false,
        rewrite: (path) => {
          console.log('Path before rewrite:', path);
          const rewrittenPath = path.replace(/^\/api/, ''); // Remove '/api' prefix
          console.log('Path after rewrite:', rewrittenPath);
          return rewrittenPath;
        },
      },
      // If you need to proxy WebSocket connections as well, you can add:
      // '/socket': {
      //   target: 'http://localhost:5000',
      //   ws: true, // Enable WebSocket support
      // },
    },
  },
});
