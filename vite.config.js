import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so one build works both at a root domain (Vercel, Netlify) and
// under the repository sub-path on GitHub Pages.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
});
