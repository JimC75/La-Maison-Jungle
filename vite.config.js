import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/La-Maison-Jungle/', // Replace with your GitHub repository name
  plugins: [react()],
  build: {
    outDir: 'docs', // GitHub Pages requirement: output directory should be 'docs'
  },
})
