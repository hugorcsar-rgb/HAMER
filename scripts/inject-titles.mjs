// scripts/inject-titles.mjs
// Runs automatically after `npm run build` (as the "postbuild" script).
// It bakes a distinct <title> and og:title into each prerendered HTML page,
// so Google sees a unique title per URL. Edit the TITLES map to taste.
import { readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';

const TITLES = {
  'index.html':         'HAMER — Golf Consulting · NCAA Recruiting, Development & Camps',
  'founders.html':      'The Founders — HAMER Golf Consulting',
  'recruit.html':       'Recruit — NCAA Collegiate Golf Placement · HAMER',
  'consult.html':       'Consult — Year-Round Junior Golf Development · HAMER',
  'camps.html':         'Camps — Junior Golf Program Architecture · HAMER',
  'partners.html':      'Partners — HAMER Golf Consulting',
  'inquire.html':       'Inquire — HAMER Golf Consulting',
  'join-now.html':      'Join Now — HAMER Golf Consulting',
  'terms/recruit.html': 'Recruit Terms — HAMER Golf Consulting',
  'terms/consult.html': 'Consult Terms — HAMER Golf Consulting',
  'terms/camps.html':   'Camps Terms — HAMER Golf Consulting',
  'privacy.html':       'Privacy Notice — HAMER Golf Consulting',
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let count = 0;
for (const [rel, title] of Object.entries(TITLES)) {
  const path = join(DIST, rel);
  if (!existsSync(path)) {
    console.warn(`[inject-titles] aviso: no existe ${path}, lo salto`);
    continue;
  }
  let html = await readFile(path, 'utf8');
  const safe = esc(title);
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safe}</title>`);
  html = html.replace(
    /(<meta\s+property="og:title"\s+content=")[\s\S]*?("\s*\/?>)/i,
    `$1${safe}$2`
  );
  await writeFile(path, html);
  count++;
}
console.log(`[inject-titles] títulos inyectados en ${count} páginas`);
