// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://s-saanvi.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
