import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080 ,
    allowedHosts: ['81f530f4c8b44efca68987022419d0af.vfs.cloud9.ap-northeast-1.amazonaws.com']
  }
})
