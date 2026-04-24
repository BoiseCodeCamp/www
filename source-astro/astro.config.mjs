// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Bootstrap 5 still uses the legacy Sass API (@import, red/green/blue
          // color functions, global built-ins). Silence those until Bootstrap 6.
          silenceDeprecations: ['import', 'color-functions', 'global-builtin', 'if-function'],
        },
      },
    },
  },
});