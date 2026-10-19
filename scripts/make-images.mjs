// Создаёт статичные картинки сайта из логотипа (assets/logo/logo.svg) с помощью sharp
// (он уже стоит вместе с Astro, новых библиотек не нужно):
//   public/og-image.png        — превью ссылки 1200×630 (логотип на винном фоне, без фото блюд)
//   public/favicon.svg         — значок сайта (эмблема на винном фоне)
//   public/favicon-32.png      — значок 32×32
//   public/apple-touch-icon.png — значок 180×180 для iPhone
// Запуск: node scripts/make-images.mjs  (после замены логотипа — запустить снова и закоммитить)
import fs from 'node:fs';
import sharp from 'sharp';

const WINE = '#2A0508';
const logo = fs.readFileSync(new URL('../assets/logo/logo.svg', import.meta.url), 'utf8');

// Эмблема логотипа (ромб с розеткой) — первая группа <g transform="translate(300 206)">…</g>
const emblem = logo.slice(logo.indexOf('<g transform="translate(300 206)">'), logo.indexOf('<path d="M142.9'));
// Логотип целиком без внешнего <svg>: эмблема + надписи
const logoInner = logo.slice(logo.indexOf('<g transform="translate(300 206)">'), logo.lastIndexOf('</svg>'));

// Тонкий контур эмблемы для фона превью (как орнамент на первом экране сайта)
const outline = `
  <g fill="none" stroke="#E6B5A9" stroke-width="1.4" stroke-linejoin="round">
    <circle r="67"/><path d="M0,-56 L56,0 L0,56 L-56,0 Z"/><path d="M0,-38 L38,0 L0,38 L-38,0 Z"/>
    <rect x="-21" y="-21" width="42" height="42" rx="8"/><circle r="12.5"/>
    <circle cy="-56" r="11.5"/><circle cy="56" r="11.5"/><circle cx="-56" r="11.5"/><circle cx="56" r="11.5"/>
  </g>`;

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="0.5" cy="0.45" r="0.6">
      <stop offset="0" stop-color="#E0817B" stop-opacity="0.16"/>
      <stop offset="1" stop-color="#E0817B" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${WINE}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g opacity="0.08" transform="translate(130 315) scale(3.1)">${outline}</g>
  <g opacity="0.08" transform="translate(1070 315) scale(3.1)">${outline}</g>
  <!-- логотип: в исходнике содержимое занимает примерно x 105–495, y 128–414 -->
  <g transform="translate(600 315) scale(1.55) translate(-300 -271)">${logoInner}</g>
</svg>`;

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="-80 -80 160 160">
  <rect x="-80" y="-80" width="160" height="160" rx="32" fill="${WINE}"/>
  <g transform="scale(1.02) translate(-300 -206)">${emblem}</g>
</svg>`;

fs.mkdirSync(new URL('../public/', import.meta.url), { recursive: true });
const out = (f) => new URL(`../public/${f}`, import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1');

await sharp(Buffer.from(og)).png({ compressionLevel: 9, palette: false }).toFile(out('og-image.png'));
fs.writeFileSync(out('favicon.svg'), icon(64).replace(/\n\s*/g, ''));
await sharp(Buffer.from(icon(256))).resize(32, 32).png().toFile(out('favicon-32.png'));
// apple-touch-icon: без прозрачности и без скругления (iOS скругляет сам)
const apple = icon(180).replace('rx="32"', 'rx="0"');
await sharp(Buffer.from(apple)).resize(180, 180).flatten({ background: WINE }).png().toFile(out('apple-touch-icon.png'));

for (const f of ['og-image.png', 'favicon.svg', 'favicon-32.png', 'apple-touch-icon.png']) {
  const meta = f.endsWith('.svg') ? {} : await sharp(out(f)).metadata();
  console.log(f, fs.statSync(out(f)).size, 'bytes', meta.width ? `${meta.width}×${meta.height}` : '');
}
