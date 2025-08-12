import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  optimizeDeps: {
    include: ["gsap"],
  },
  build: {
    outDir: "docs",
  },
});
