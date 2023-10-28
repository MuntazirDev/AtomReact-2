import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/AtomReact-2/",
  plugins: [react()],
})
