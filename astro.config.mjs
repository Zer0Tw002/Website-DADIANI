// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import { site } from './src/config/site.ts';

// Cloudflare Pages ищет ближайший 404.html. Astro кладёт /kk/404 и /en/404 в папки
// (kk/404/index.html) — после сборки переносим их в kk/404.html и en/404.html.
const move404 = {
  name: 'move-localized-404',
  hooks: {
    'astro:build:done': ({ dir }) => {
      for (const lang of ['kk', 'en']) {
        const from = new URL(`${lang}/404/index.html`, dir);
        if (!fs.existsSync(from)) continue;
        fs.renameSync(from, new URL(`${lang}/404.html`, dir));
        fs.rmSync(new URL(`${lang}/404/`, dir), { recursive: true, force: true });
      }
    },
  },
};

export default defineConfig({
  site: site.url,
  integrations: [move404],
  trailingSlash: 'always',
  // Русский — в корне (/), казахский — /kk/, английский — /en/
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'kk', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
