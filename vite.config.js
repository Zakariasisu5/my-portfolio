import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use provided VITE_BASE_PATH when set. On Vercel, default to '/' so assets load correctly.
  base: process.env.VITE_BASE_PATH || (process.env.VERCEL ? '/' : '/my-portfolio')
})
