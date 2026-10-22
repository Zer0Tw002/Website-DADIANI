// Статус сайта. Перед запуском сайта клиента DEMO, IS_CONCEPT и NOINDEX переключить в false
// (см. HANDOFF.md).

// Демо-версия шаблона: полоса «Это пример сайта» с кнопкой «Хочу такой сайт», пометки
// «Здесь будет ваш…» и рамки вместо фото. Кнопка ведёт в WhatsApp разработчика (site.developer).
export const DEMO = true;

// Пометка «Концепт-версия. Не официальный сайт ресторана» — полоса вверху и блок в подвале.
// Для черновика сайта конкретного заведения, пока оно не согласилось (показать владельцу).
export const IS_CONCEPT = false;

// Запрет индексации поисковиками (<meta name="robots" content="noindex">)
export const NOINDEX = true;

// Круглая кнопка прокрутки «вниз к контактам / наверх» (только на экранах от 1024 px)
export const SCROLL_BUTTON = true;

// Закреплённая нижняя панель на телефоне (до 640 px): «Позвонить», «Забронировать», «Доставка»
export const MOBILE_BAR = true;

// Всё, что нужно только поисковикам (JSON-LD «Restaurant», sitemap.xml со страницами, ссылка
// на sitemap в robots.txt), включается само, когда сайт перестаёт быть демо и концептом:
// DEMO = false, IS_CONCEPT = false и NOINDEX = false. Отдельно менять не нужно.
export const SEO_ENABLED = !NOINDEX && !IS_CONCEPT && !DEMO;
