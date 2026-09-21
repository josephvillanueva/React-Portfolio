import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the same build works both at a root domain (Vercel) and
// under the repository sub-path on GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
