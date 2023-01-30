import react from "@vitejs/plugin-react"
import * as path from "path"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@features": path.resolve(__dirname, "src/features"),
      "@root": path.resolve(__dirname, "src"),
    },
  },
})
