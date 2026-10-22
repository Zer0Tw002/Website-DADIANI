// Чтение меню из content/menu.json и помощники для страницы меню.
import type { ImageMetadata } from 'astro';
import menuData from '../../content/menu.json';
import { isFilled } from '../config/site';
import { DEMO } from '../config/status';
import type { Lang } from '../i18n/ui';

type Localized = { ru: string; kk: string; en: string };

export interface MenuItem {
  id: string;
  category: string;
  name: Localized;
  description: Localized;
  price: number;
  photo: string | null;
  available: boolean;
  status: string;
}

export interface MenuCategory {
  id: string;
  name: Localized;
  items: MenuItem[];
}

// Фото блюд из assets/photos/menu (Astro сам делает из них уменьшенные копии при сборке).
// Исключены: чужие/стоковые фото (Coca-Cola, «Натахтари», картофель фри) и напитки (бара пока
// нет в меню) — иначе их исходники попали бы в сборку сайта.
const photos = import.meta.glob<{ default: ImageMetadata }>(
  [
    '/assets/photos/menu/*.{png,jpg,jpeg,webp}',
    '!**/coca-cola--*',
    '!**/napitki--*',
    '!**/garniry--kartofel-fri.*',
  ],
  { eager: true },
);

export function photoFor(file: string | null): ImageMetadata | null {
  if (!file) return null;
  return photos[`/assets/photos/menu/${file}`]?.default ?? null;
}

// Текст на нужном языке. Если перевода нет (пусто или [TODO...]) — русский вариант.
// Возвращает и язык, на котором текст реально показан (для атрибута lang).
export function localized(value: Localized, lang: Lang): { text: string; lang: Lang } {
  if (lang !== 'ru' && isFilled(value[lang])) return { text: value[lang], lang };
  return { text: isFilled(value.ru) ? value.ru : '', lang: 'ru' };
}

// 2790 -> «2 790 ₸» (неразрывные пробелы, чтобы цена не переносилась)
export function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU').replace(/\s/g, ' ') + ' ₸';
}

// Популярные блюда для главной: список featured из menu.json. Берём только доступные блюда
// с фото не меньше 500 px (маленькие фото в крупной карточке выглядели бы мутно).
// В демо-версии (DEMO) блюда без фото тоже берём — вместо фото будет пунктирная рамка (photo: null).
export function featuredItems(): { item: MenuItem; photo: ImageMetadata | null }[] {
  const items = menuData.items as MenuItem[];
  return menuData.featured
    .map((id) => items.find((i) => i.id === id))
    .filter((i): i is MenuItem => !!i && i.available)
    .map((item) => {
      const photo = photoFor(item.photo);
      return { item, photo: photo && Math.min(photo.width, photo.height) >= 500 ? photo : null };
    })
    .filter((x) => x.photo || DEMO);
}

// Категории в порядке из menu.json, только доступные блюда, пустые категории пропускаются
export function menuCategories(): MenuCategory[] {
  return menuData.categories
    .map((c) => ({
      ...c,
      items: (menuData.items as MenuItem[]).filter((i) => i.category === c.id && i.available),
    }))
    .filter((c) => c.items.length > 0);
}
