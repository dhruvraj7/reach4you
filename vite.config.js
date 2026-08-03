import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { generateSitemap } from './scripts/generate-sitemap.js'

function sitemapPlugin() {
  return {
    name: 'generate-sitemap-plugin',
    buildStart() {
      generateSitemap()
    },
    closeBundle() {
      generateSitemap()
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    sitemapPlugin(),
  ],
  build: {
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react']
        }
      }
    }
  }
})
