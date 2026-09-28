// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Production address, used for canonical links, the sitemap and social previews.
  // Update when a custom domain is connected in Vercel.
  site: 'https://blank-app-eta-mauve.vercel.app',
  integrations: [sitemap()],
});
