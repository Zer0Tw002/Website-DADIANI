// Языки сайта и переводы интерфейса (кнопки, меню, подписи).
// Названия блюд и тексты о ресторане здесь НЕ хранятся.
// Казахский и английский тексты нужно проверить носителям языка.

export const languages = {
  ru: { label: 'РУ', name: 'Русский' },
  kk: { label: 'ҚАЗ', name: 'Қазақша' },
  en: { label: 'EN', name: 'English' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'ru';

// Страницы сайта и их адреса (одинаковые для всех языков, плюс префикс /kk/ или /en/)
export const routes = {
  home: '',
  menu: 'menu/',
  about: 'about/',
} as const;
export type RouteKey = keyof typeof routes;

export function pathFor(lang: Lang, route: RouteKey): string {
  const prefix = lang === defaultLang ? '/' : `/${lang}/`;
  return prefix + routes[route];
}

const ru = {
  'meta.description': 'DADIANI — ресторан грузинской кухни в Шымкенте.',
  'skip': 'Перейти к содержимому',
  'tagline': 'Ресторан грузинской кухни',
  'nav.label': 'Разделы сайта',
  'nav.home': 'Главная',
  'nav.menu': 'Меню',
  'nav.about': 'О нас',
  'lang.label': 'Язык сайта',
  'footer.address': 'Адрес',
  'footer.hours': 'Режим работы',
  'footer.contacts': 'Контакты',
  'footer.whatsapp': 'Написать в WhatsApp',
  'whatsapp.message': 'Здравствуйте! У меня вопрос.',
  'todo.translation': '[TODO: перевод]',
};

type Dict = Record<keyof typeof ru, string>;

const kk: Dict = {
  'meta.description': 'DADIANI — Шымкенттегі грузин асханасының мейрамханасы.',
  'skip': 'Негізгі мазмұнға өту',
  'tagline': 'Грузин асханасының мейрамханасы',
  'nav.label': 'Сайт бөлімдері',
  'nav.home': 'Басты бет',
  'nav.menu': 'Мәзір',
  'nav.about': 'Біз туралы',
  'lang.label': 'Сайт тілі',
  'footer.address': 'Мекенжай',
  'footer.hours': 'Жұмыс уақыты',
  'footer.contacts': 'Байланыс',
  'footer.whatsapp': 'WhatsApp-қа жазу',
  'whatsapp.message': 'Сәлеметсіз бе! Менің сұрағым бар.',
  'todo.translation': '[TODO: аударма]',
};

const en: Dict = {
  'meta.description': 'DADIANI — Georgian restaurant in Shymkent.',
  'skip': 'Skip to content',
  'tagline': 'Georgian restaurant',
  'nav.label': 'Site sections',
  'nav.home': 'Home',
  'nav.menu': 'Menu',
  'nav.about': 'About us',
  'lang.label': 'Site language',
  'footer.address': 'Address',
  'footer.hours': 'Opening hours',
  'footer.contacts': 'Contacts',
  'footer.whatsapp': 'Message us on WhatsApp',
  'whatsapp.message': 'Hello! I have a question.',
  'todo.translation': '[TODO: translation]',
};

export const ui: Record<Lang, Dict> = { ru, kk, en };

export function useTranslations(lang: Lang) {
  return (key: keyof Dict) => ui[lang][key];
}
