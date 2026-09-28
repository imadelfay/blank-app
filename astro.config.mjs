// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Set to the production domain once it's known (used for the sitemap and social previews).
  site: 'https://example.com',
  integrations: [sitemap()],
});
