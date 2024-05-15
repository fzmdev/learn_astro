import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://mikefeng.netlify.app",
  integrations: [preact(), vue()]
});