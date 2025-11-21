import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 600,
    minify: 'esbuild',
    target: 'es2015',
    cssCodeSplit: true,
    sourcemap: false
  },
  server: {
    port: 5173,
    open: false
  }
})
