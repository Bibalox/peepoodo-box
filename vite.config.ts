import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      includeAssets: [
        '/app-icons/favicon.png',
        '/app-icons/apple-touch-icon.png',
        '/app-icons/safari-pinned-tab.svg'
      ],
      manifest: {
        name: 'Peepoodo box',
        short_name: 'Peepoodo box',
        description: 'Mais docteur, vous avez un zizi ?',
        display: 'fullscreen',
        theme_color: '#ABDDFF',
        icons: [
          {
            src: '/app-icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/app-icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})

