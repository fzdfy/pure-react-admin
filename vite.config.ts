import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    proxy: {
      '/_/': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/_/, ''),
      },
    },
    cors: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 配置@别名
    },
  },
})
