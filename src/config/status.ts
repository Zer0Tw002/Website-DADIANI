// Статус сайта. Перед официальным запуском IS_CONCEPT и NOINDEX переключить в false (см. HANDOFF.md).

// Пометка «Концепт-версия. Не официальный сайт ресторана» — полоса вверху и блок в подвале
export const IS_CONCEPT = true;

// Запрет индексации поисковиками (<meta name="robots" content="noindex">)
export const NOINDEX = true;

// Круглая кнопка прокрутки «вниз к контактам / наверх» (только на экранах от 1024 px)
export const SCROLL_BUTTON = true;

// Закреплённая нижняя панель на телефоне (до 640 px): «Позвонить», «Забронировать», «Доставка»
export const MOBILE_BAR = true;
