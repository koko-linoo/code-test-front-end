import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve('./src/components'),
      '@layouts': path.resolve('./src/layouts'),
      '@hooks': path.resolve('./src/hooks'),
      '@pages': path.resolve('./src/pages'),
      '@services': path.resolve('./src/services'),
      '@api': path.resolve('./src/api'),
    }
  }
})
