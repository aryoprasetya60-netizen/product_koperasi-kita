import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api/v1": {
        target: "https://leptosomic-unransomed-anisha.ngrok-free.dev/",
        changeOrigin: true,
        secure: false,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
    },
  },
});
