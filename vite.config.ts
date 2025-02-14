import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [TanStackRouterVite(), react()],
})
