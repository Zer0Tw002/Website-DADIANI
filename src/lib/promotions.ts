// Акции для главной страницы из content/promotions.json.
import data from '../../content/promotions.json';
import { isFilled } from '../config/site';
import type { Lang } from '../i18n/ui';
import { localized } from './menu';

type Localized = { ru: string; kk: string; en: string };

interface Promotion {
  id: string;
  available: boolean;
  title: Localized;
  description: Localized;
  price: number | null;
  priceFrom: boolean;
  schedule: Localized;
}

export interface PromotionView {
  id: string;
  title: { text: string; lang: Lang };
  description: { text: string; lang: Lang };
  schedule: { text: string; lang: Lang } | null; // null — строку не показываем
  price: number | null;
  priceFrom: boolean;
}

// Только включённые акции (available: true). Пустые поля на сайт не выводятся.
export function promotions(lang: Lang): PromotionView[] {
  return (data.promotions as Promotion[])
    .filter((p) => p.available)
    .map((p) => {
      const schedule = localized(p.schedule, lang);
      return {
        id: p.id,
        title: localized(p.title, lang),
        description: localized(p.description, lang),
        schedule: isFilled(schedule.text) ? schedule : null,
        price: typeof p.price === 'number' && p.price > 0 ? p.price : null,
        priceFrom: p.priceFrom === true,
      };
    });
}
