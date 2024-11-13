import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy: {
      // Proxy requests starting with /api to the backend server
      '/api': {
        target: 'http://localhost:5000', // Replace with your backend server's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Removes '/api' prefix when forwarding
      },
    },
  }
})
