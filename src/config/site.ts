// ЕДИНСТВЕННОЕ место, где хранятся название, контакты и ссылки заведения.
// Остальные файлы берут данные отсюда. Ничего из этого не дублировать в других местах.
// Значения "[TODO: ...]" — данных пока нет. Пока значение начинается с "[TODO",
// сайт не показывает соответствующую кнопку/ссылку (см. isFilled ниже).
//
// Сейчас здесь данные ДЕМО-версии (пример заведения): телефон и WhatsApp — номер разработчика,
// адрес и часы — выдуманные, ссылки ведут на главные страницы сервисов. Для сайта клиента
// заменить всё на данные клиента (см. HANDOFF.md).

export const site = {
  // Название заведения на трёх языках (шапка, заголовок вкладки, первый экран, подвал)
  name: {
    ru: 'Ваш ресторан',
    kk: 'Сіздің мейрамханаңыз',
    en: 'Your Restaurant',
  },

  // Адрес сайта. Пока бесплатный адрес Cloudflare Pages, позже — свой домен.
  url: 'https://restoran-demo-1cw.pages.dev',

  // WhatsApp заведения: бронирование и вопросы. Формат: только цифры, с кодом страны, без "+".
  // В демо — номер разработчика (кто попробует форму брони, напишет вам).
  whatsapp: '77079284883',

  phone: '+7 707 928 48 83',
  address: {
    ru: 'Шымкент, ул. Примерная, 1',
    kk: 'Шымкент, Үлгі көшесі, 1',
    en: 'Shymkent, Example St. 1',
  },
  hours: {
    ru: 'Ежедневно с 10:00 до 23:00',
    kk: 'Күн сайын 10:00-ден 23:00-ге дейін',
    en: 'Daily from 10:00 to 23:00',
  },
  // Адрес по частям и часы в машинном формате — для разметки «Restaurant» (JSON-LD) для поисковиков
  addressParts: {
    street: { ru: 'ул. Примерная, 1', kk: 'Үлгі көшесі, 1', en: 'Example St. 1' },
    city: { ru: 'Шымкент', kk: 'Шымкент', en: 'Shymkent' },
    country: 'KZ',
  },
  openingHoursSchema: 'Mo-Su 10:00-23:00',
  // Кухня на английском — для поисковиков (например: Georgian, Kazakh, European)
  cuisine: 'European',

  // В демо ссылки ведут на главные страницы сервисов; для клиента — на его страницы
  instagram: 'https://www.instagram.com/',
  map2gis: 'https://2gis.kz/shymkent',

  // Обслуживание, %. Показывается на странице меню и в подвале. 0 — строка не показывается.
  serviceFee: 10,

  // Страницы заведения в приложениях доставки
  delivery: {
    yandexEda: 'https://eda.yandex.kz/',
    wolt: 'https://wolt.com/',
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

// Ссылка на WhatsApp с готовым текстом сообщения (по умолчанию — номер заведения)
export function whatsappLink(text: string, number: string = site.whatsapp): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

// Контакт разработчика сайта: кнопка «Хочу такой сайт» в демо-версии (DEMO в status.ts).
// Формат: только цифры, с кодом страны, без "+".
export const developer = {
  whatsapp: '77079284883',
};
