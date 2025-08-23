import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // GitHub repository name
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    sourcemap: false,
  },
  preview: {
    port: 4173,
    host: true,
  },
});
