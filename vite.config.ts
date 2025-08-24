import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? "/portfolio/" : "/", // Only use /portfolio/ for production builds
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
}));
