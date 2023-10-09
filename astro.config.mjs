import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import path from 'path';
import { fileURLToPath } from 'url';
import { ANALYTICS, SITE } from './src/utils/config';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import tasks from './src/utils/tasks.mjs';
import storyblok from '@storyblok/astro';
import solidJs from "@astrojs/solid-js";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const whenExternalScripts = (items = []) => ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown ? Array.isArray(items) ? items.map(item => item()) : [items()] : [];

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [tailwind({
    applyBaseStyles: false
  }), storyblok({
    accessToken: process.env.STORYBLOK_TOKEN,
    bridge: process.env.SITE_NAME === 'manuelschroeder' ? false : true,
    components: {
      page: 'storyblok/Page',
      hero: 'components/Hero',
      header: 'components/Header',
    }
  }), sitemap(), ...whenExternalScripts(() => partytown({
    config: {
      forward: ['dataLayer.push']
    }
  })), tasks(), compress({
    CSS: true,
    HTML: {
      removeAttributeQuotes: false
    },
    Image: false,
    JavaScript: true,
    SVG: true,
    Logger: 1
  }), solidJs()],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin]
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src')
      }
    }
  }
});
