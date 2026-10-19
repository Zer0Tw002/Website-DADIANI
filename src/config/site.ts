// ЕДИНСТВЕННОЕ место, где хранятся контакты и ссылки ресторана.
// Остальные файлы берут данные отсюда. Ничего из этого не дублировать в других местах.
// Значения "[TODO: ...]" — данных пока нет или они ещё не подтверждены рестораном.
// Данные, собранные с kamiqr, лежат в content/restaurant-info.md (сюда пока не перенесены).

export const site = {
  name: 'DADIANI',

  // Адрес сайта. Пока бесплатный адрес Cloudflare Pages, позже — свой домен.
  url: 'https://dadiani.pages.dev',

  // ВНИМАНИЕ: тестовый номер разработчика. Перед передачей заменить на номер ресторана
  // (см. HANDOFF.md). Формат: только цифры, с кодом страны, без "+".
  whatsapp: '79655898082',

  phone: '[TODO: телефон ресторана]',
  address: {
    ru: '[TODO: адрес]',
    kk: '[TODO: мекенжай]',
    en: '[TODO: address]',
  },
  hours: {
    ru: '[TODO: режим работы]',
    kk: '[TODO: жұмыс уақыты]',
    en: '[TODO: opening hours]',
  },
  mapUrl: '[TODO: ссылка на 2ГИС / Яндекс.Карты]',
  instagram: '[TODO: ссылка на Instagram]',
  delivery: {
    yandexEda: '[TODO: ссылка на Яндекс.Еду]',
    wolt: '[TODO: ссылка на Wolt]',
  },
} as const;

// Ссылка на WhatsApp с готовым текстом сообщения
export function whatsappLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
