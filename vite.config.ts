import { defineConfig } from "vite";

export default defineConfig({
  clearScreen: false,
  assetsInclude: ['**/*.svg'],
  optimizeDeps: {
    include: ['**/*.svg'],
  },
});
