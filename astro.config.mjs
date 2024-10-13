import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';
export default defineConfig({
  integrations: [tailwind(), robotsTxt(),
     react({
    include: ['**/react/*'],
    experimentalReactChildren: true,
  })],
  site: 'https://porfolio.dev/',
  output: 'server',
  adapter: vercel(),
});