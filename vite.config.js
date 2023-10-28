// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgLoader()],
  resolve: {
    alias: {
      // Defina alias para importar ícones ou imagens
      '@icons': 'src/pages/Home/assets',
      '@images': 'src/pages/Home/assets',
    },
  },
})
