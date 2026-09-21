import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base must match the GitHub Pages sub-path in package.json "homepage"
export default defineConfig({
  plugins: [react()],
  base: "/React-Porfoltio/",
});
