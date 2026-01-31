// @ts-check
import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert'
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://picyoh.github.io',
  base:'/quaeres',
  vite: {
      ssr: {
          noExternal: ["react-icons"],
      },
      plugins: [ mkcert() ]
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en"
  },
  integrations: [react(), mdx()],
});