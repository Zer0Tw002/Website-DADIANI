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
  'concept.notice': 'Концепт-версия. Не официальный сайт ресторана',
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
  'footer.route': 'Как добраться (2ГИС)',
  'footer.contacts': 'Контакты',
  'footer.whatsapp': 'Написать в WhatsApp',
  'whatsapp.message': 'Здравствуйте! У меня вопрос.',
  'actions.question': 'Задать вопрос в WhatsApp',
  'delivery.title': 'Доставка',
  'delivery.text': 'Закажите доставку через приложение:',
  'delivery.yandex': 'Яндекс Еда',
  'delivery.wolt': 'Wolt',
  'booking.title': 'Забронировать столик',
  'booking.intro': 'Заполните форму — откроется WhatsApp с готовым сообщением. Останется нажать «Отправить».',
  'booking.name': 'Имя',
  'booking.date': 'Дата',
  'booking.time': 'Время',
  'booking.guests': 'Количество гостей',
  'booking.submit': 'Отправить в WhatsApp',
  'booking.greeting': 'Здравствуйте! Хочу забронировать столик в DADIANI.',
  'service.fee': 'Обслуживание {n}%',
  'menu.categories': 'Категории меню',
  'common.soon': 'Раздел скоро появится.',
  'scroll.down': 'Вниз, к адресу и контактам',
  'scroll.up': 'Наверх, к началу страницы',
  'hero.eyebrow': 'Гамарджоба, Шымкент!',
  'hero.slogan': 'Грузинская кухня с душой и гостеприимством — ждём вас!',
  'hero.book': 'Забронировать столик',
  'home.popular': 'Популярные блюда',
  'home.allMenu': 'Всё меню',
  'home.promos': 'Акции и бизнес-ланч',
  'price.from': 'от {price}',
  'home.visit': 'Адрес и часы работы',
  'todo.translation': '[TODO: перевод]',
};

type Dict = Record<keyof typeof ru, string>;

const kk: Dict = {
  'concept.notice': 'Концепт-нұсқа. Мейрамхананың ресми сайты емес',
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
  'footer.route': 'Қалай жетуге болады (2ГИС)',
  'footer.contacts': 'Байланыс',
  'footer.whatsapp': 'WhatsApp-қа жазу',
  'whatsapp.message': 'Сәлеметсіз бе! Менің сұрағым бар.',
  'actions.question': 'WhatsApp-та сұрақ қою',
  'delivery.title': 'Жеткізу',
  'delivery.text': 'Жеткізуге қосымша арқылы тапсырыс беріңіз:',
  'delivery.yandex': 'Яндекс Еда',
  'delivery.wolt': 'Wolt',
  'booking.title': 'Үстел брондау',
  'booking.intro': 'Форманы толтырыңыз — дайын хабарламасы бар WhatsApp ашылады. Тек «Жіберу» түймесін басыңыз.',
  'booking.name': 'Атыңыз',
  'booking.date': 'Күні',
  'booking.time': 'Уақыты',
  'booking.guests': 'Қонақтар саны',
  'booking.submit': 'WhatsApp арқылы жіберу',
  'booking.greeting': 'Сәлеметсіз бе! DADIANI мейрамханасында үстел брондағым келеді.',
  'service.fee': 'Қызмет көрсету ақысы {n}%',
  'menu.categories': 'Мәзір санаттары',
  'common.soon': 'Бөлім жақында пайда болады.',
  'scroll.down': 'Төмен, мекенжай мен байланысқа',
  'scroll.up': 'Жоғары, бет басына',
  'hero.eyebrow': 'Гамарджоба, Шымкент!',
  'hero.slogan': 'Грузин тағамдары және қонақжайлылық — біз сіздерді күтеміз!',
  'hero.book': 'Үстел брондау',
  'home.popular': 'Танымал тағамдар',
  'home.allMenu': 'Толық мәзір',
  'home.promos': 'Акциялар мен бизнес-ланч',
  'price.from': '{price}-ден бастап',
  'home.visit': 'Мекенжай және жұмыс уақыты',
  'todo.translation': '[TODO: аударма]',
};

const en: Dict = {
  'concept.notice': "Concept version. Not the restaurant's official website",
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
  'footer.route': 'Directions (2GIS)',
  'footer.contacts': 'Contacts',
  'footer.whatsapp': 'Message us on WhatsApp',
  'whatsapp.message': 'Hello! I have a question.',
  'actions.question': 'Ask a question on WhatsApp',
  'delivery.title': 'Delivery',
  'delivery.text': 'Order delivery through the app:',
  'delivery.yandex': 'Yandex Eats',
  'delivery.wolt': 'Wolt',
  'booking.title': 'Book a table',
  'booking.intro': 'Fill in the form and WhatsApp will open with a ready-made message. Then just tap "Send".',
  'booking.name': 'Name',
  'booking.date': 'Date',
  'booking.time': 'Time',
  'booking.guests': 'Number of guests',
  'booking.submit': 'Send via WhatsApp',
  'booking.greeting': "Hello! I'd like to book a table at DADIANI.",
  'service.fee': 'Service charge {n}%',
  'menu.categories': 'Menu categories',
  'common.soon': 'This section is coming soon.',
  'scroll.down': 'Down to address and contacts',
  'scroll.up': 'Back to top',
  'hero.eyebrow': 'Gamarjoba, Shymkent!',
  'hero.slogan': 'Georgian cuisine with soul and hospitality — we look forward to seeing you!',
  'hero.book': 'Book a table',
  'home.popular': 'Popular dishes',
  'home.allMenu': 'Full menu',
  'home.promos': 'Offers and business lunch',
  'price.from': 'from {price}',
  'home.visit': 'Address and opening hours',
  'todo.translation': '[TODO: translation]',
};

export const ui: Record<Lang, Dict> = { ru, kk, en };

export function useTranslations(lang: Lang) {
  return (key: keyof Dict) => ui[lang][key];
}
