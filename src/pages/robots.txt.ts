// robots.txt. Ничего не запрещаем: пока сайт — концепт, страницы скрыты от поиска через
// <meta name="robots" content="noindex"> — а чтобы поисковик эту метку увидел, страницы
// должны быть доступны для обхода. Ссылка на sitemap — только когда SEO_ENABLED.
import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { SEO_ENABLED } from '../config/status';

export const GET: APIRoute = () => {
  const lines = ['User-agent: *', 'Allow: /'];
  if (SEO_ENABLED) lines.push('', `Sitemap: ${new URL('/sitemap.xml', site.url).href}`);
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
