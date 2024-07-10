import { defineConfig } from "vite";
import dotenv from "dotenv";
dotenv.config();
import react from "@vitejs/plugin-react";

// Load .env file from root directory
dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  plugins: [react()],
  define: {
    "process.env.VITE_API_BASE_URL": JSON.stringify(
      process.env.VITE_API_BASE_URL
    ),
  },
});
