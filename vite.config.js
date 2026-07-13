import { defineConfig } from "vite";

export default defineConfig({
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        entryFileNames: "assets/bundle.js",
        chunkFileNames: "assets/bundle.js",
        assetFileNames: (info) => {
          if (info.name.endsWith(".css")) return "assets/style.css";
          return "assets/[name].[ext]";
        },
        manualChunks: () => "bundle.js",
      },
    },
  },
  base: "/playbox/",
});
