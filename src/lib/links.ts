// Ссылки на доставку (Яндекс.Еда, Wolt) с подписями на нужном языке.
// Возвращает только заполненные ссылки из src/config/site.ts (не [TODO]).
import { isFilled, site } from '../config/site';
import { useTranslations, type Lang } from '../i18n/ui';

export function deliveryLinks(lang: Lang): { url: string; label: string }[] {
  const t = useTranslations(lang);
  return [
    { url: site.delivery.yandexEda, label: t('delivery.yandex') },
    { url: site.delivery.wolt, label: t('delivery.wolt') },
  ].filter((d) => isFilled(d.url));
}
