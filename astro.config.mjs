import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://gean-dev.github.io/TOI19-scoreboard",
  base: "/TOI19-scoreboard/",
  integrations: [tailwind(), svelte()]
});