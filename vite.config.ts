import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import version from "vite-plugin-package-version";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/minhanh.github.io/',
  plugins: [react(), version()],
  build: {terserOptions: {
    compress: {
      drop_console: true, // Bỏ các console.log
    },
    output: {
      comments: false, // Bỏ các comment trong mã nguồn
    },
  },
    rollupOptions: {
      output: {
        // manualChunks(id) {
        //   if (id.includes("node_modules")) {
        //     return id
        //       .toString()
        //       .split("node_modules/")[1]
        //       .split("/")[0]
        //       .toString();
        //   }
        // },
        manualChunks: {
          // Specify manual chunk names and modules
          react: ["react", "react-dom"],
          lottie: ["react-lottie"],
        },
      },
    },
  },
});
