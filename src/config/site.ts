// ЕДИНСТВЕННОЕ место, где хранятся контакты и ссылки ресторана.
// Остальные файлы берут данные отсюда. Ничего из этого не дублировать в других местах.
// Значения "[TODO: ...]" — данных пока нет. Пока значение начинается с "[TODO",
// сайт не показывает соответствующую кнопку/ссылку (см. isFilled ниже).

export const site = {
  name: 'DADIANI',

  // Адрес сайта. Пока бесплатный адрес Cloudflare Pages, позже — свой домен.
  url: 'https://dadiani.pages.dev',

  // ВНИМАНИЕ: тестовый номер разработчика. Перед передачей заменить на номер ресторана
  // из content/restaurant-info.md (см. HANDOFF.md). Формат: только цифры, с кодом страны, без "+".
  whatsapp: '79655898082',

  // --- Данные с kamiqr, не подтверждены рестораном (собраны 2026-10-19,
  // --- на kamiqr последнее изменение 2025-07-22; см. content/restaurant-info.md)
  phone: '+7 701 146 85 15',
  address: {
    ru: 'Шымкент, Уалиханова 225а',
    kk: 'Шымкент, Уалиханова 225а',
    en: 'Shymkent, Ualikhanov St. 225a', // транслитерация разработчика, на kamiqr адрес на русском
  },
  hours: {
    ru: 'Ежедневно с 11:00 до 01:00',
    kk: 'Күн сайын 11:00-ден 01:00-ге дейін',
    en: 'Daily from 11:00 to 01:00',
  },
  instagram: 'https://www.instagram.com/dadiani_shymkent/', // подтверждено владельцем проекта
  map2gis: 'https://2gis.kz/shymkent/firm/70000001065727880',
  // --- конец данных с kamiqr

  // Обслуживание, % (с обложки меню в Instagram, не подтверждено рестораном).
  // Показывается на странице меню и в подвале. 0 — строка не показывается.
  serviceFee: 15,

  delivery: {
    yandexEda: '[TODO: ссылка на Яндекс.Еду]',
    wolt: '[TODO: ссылка на Wolt]',
  },
} as const;

// true, если значение заполнено (не заглушка [TODO...])
export function isFilled(value: string): boolean {
  return value.trim() !== '' && !value.startsWith('[TODO');
}

// Номер для ссылки tel: — только цифры и "+"
export function phoneHref(phone: string): string {
  return 'tel:' + phone.replace(/[^\d+]/g, '');
}

// Ссылка на WhatsApp с готовым текстом сообщения
export function whatsappLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
