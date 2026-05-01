import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://s-saanvi.github.io',
  base: '/CCLABS/',
  //output: 'static',
  integrations: [mdx(), sitemap()],
});
