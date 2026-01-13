// @ts-check
import { defineConfig } from 'astro/config';
import mkcert from 'vite-plugin-mkcert'
import react from "@astrojs/react";

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

  integrations: [react()],
});