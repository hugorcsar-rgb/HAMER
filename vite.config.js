import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    // Solo prerenderamos páginas reales con SEO. Las rutas con :parámetros
    // (checkout, paquetes) son transaccionales y se sirven en cliente.
    includedRoutes(paths) {
      return paths.filter((p) => !p.includes(':'))
    },
  },
})
