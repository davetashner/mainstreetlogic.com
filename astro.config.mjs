// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  // Astro 7 defaults to 'jsx', which strips whitespace between inline
  // elements and can glue words together. Keep the Astro 5 behavior.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
