import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
  preview: {
    host: "0.0.0.0", // Слушать все интерфейсы (не только localhost)
    port: 3000, // Порт (можно изменить)
    strictPort: false, // Если порт занят, использовать следующий
  },
  server: {
    host: "0.0.0.0", // Также для dev сервера
    port: 5173,
  },
});
