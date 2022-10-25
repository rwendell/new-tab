// https://vitejs.dev/config/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

/** @type {import('vite').UserConfig} */
export default defineConfig({
  // TODO remove if this isn't working for GH pages (UPDATE: it kind of works, js runs: gets 404)
  base: "/new-tab/",
  plugins: [react(), tsconfigPaths()]
})
