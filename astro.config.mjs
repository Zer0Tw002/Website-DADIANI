// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/site.ts';

export default defineConfig({
  site: site.url,
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
