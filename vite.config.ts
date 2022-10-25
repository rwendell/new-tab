import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  // TODO remove if this isn't working for GH pages (UPDATE: it kind of works, js runs: gets 404)
  base: "",
  plugins: [react(), tsconfigPaths()]
})
