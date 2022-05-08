import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
process.env = { ...process.env, ...loadEnv('dev', process.cwd()) }


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    open: false,
    proxy: {
      '^/api/.*': {
        target: process.env.VITE_BACKEND_SERVICE,
        changeOrigin: true,
        secure: false
      }
    }
  }
})
