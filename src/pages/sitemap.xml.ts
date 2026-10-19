// sitemap.xml — список страниц для поисковиков (собственный маршрут, без библиотек).
// Пока сайт — концепт (SEO_ENABLED = false), список пустой.
import type { APIRoute } from 'astro';
import { SEO_ENABLED } from '../config/status';
import { langs } from '../i18n/ui';
import { allPages } from '../lib/seo';

export const GET: APIRoute = () => {
  const urls = SEO_ENABLED
    ? allPages().flatMap(({ urls }) =>
        langs.map(
          (l) => `  <url>
    <loc>${urls[l]}</loc>
${langs.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt}" href="${urls[alt]}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${urls.ru}"/>
  </url>`,
        ),
      )
    : [];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
