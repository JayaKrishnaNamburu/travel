import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "url";
import mdx from "@mdx-js/rollup";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: process.cwd(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".mdx"],
  },
  plugins: [
    react(),
    mdx({
      remarkPlugins: [],
      rehypePlugins: [],
      providerImportSource: "@mdx-js/react",
    }),
    svgr(),
  ],
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/styles/variables.scss";`, // optional
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: "es2019",
    outDir: "build",
    manifest: "manifest.json",
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"),
    },
  },
});
