import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://theideaobservatory.com",
  trailingSlash: "always",
  build: {
    format: "directory"
  }
});