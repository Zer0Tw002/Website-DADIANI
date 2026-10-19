// Данные для поисковиков. Используются только когда SEO_ENABLED (см. src/config/status.ts).
import { isFilled, site } from '../config/site';
import { langs, pathFor, routes, useTranslations, type Lang, type RouteKey } from '../i18n/ui';

const abs = (path: string) => new URL(path, site.url).href;

// Разметка schema.org «Restaurant» на языке страницы
export function restaurantJsonLd(lang: Lang) {
  const t = useTranslations(lang);
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: site.name,
    description: t('meta.description'),
    url: abs(pathFor(lang, 'home')),
    image: abs('/og-image.png'),
    ...(isFilled(site.phone) ? { telephone: site.phone.replace(/[^\d+]/g, '') } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.addressParts.street[lang],
      addressLocality: site.addressParts.city[lang],
      addressCountry: site.addressParts.country,
    },
    openingHours: site.openingHoursSchema,
    servesCuisine: 'Georgian',
    menu: abs(pathFor(lang, 'menu')),
    acceptsReservations: true,
    ...(isFilled(site.map2gis) ? { hasMap: site.map2gis } : {}),
    ...(isFilled(site.instagram) ? { sameAs: [site.instagram] } : {}),
  };
}

// Все страницы сайта: адрес на каждом языке (для sitemap.xml с hreflang)
export function allPages(): { route: RouteKey; urls: Record<Lang, string> }[] {
  return (Object.keys(routes) as RouteKey[]).map((route) => ({
    route,
    urls: Object.fromEntries(langs.map((l) => [l, abs(pathFor(l, route))])) as Record<Lang, string>,
  }));
}
