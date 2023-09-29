import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
// // vite.config.js
// export default {
//   build: {
//     outDir: 'dist', // Ensure this points to the correct output directory
//   },
// }
