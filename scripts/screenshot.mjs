import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { resolve } from 'path';

const variant = process.argv[2] || 'baseline';
const url = 'http://localhost:5173/';
const outDir = resolve(`scripts/screenshots/${variant}`);
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

const sections = ['hero', 'about', 'services', 'gallery', 'testimonials', 'packages', 'contact'];

const browser = await chromium.launch();
try {
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, deviceScaleFactor: 1 });
    await ctx.route('**/*', (route) => {
      const headers = { ...route.request().headers(), 'cache-control': 'no-cache, no-store, must-revalidate', 'pragma': 'no-cache' };
      route.continue({ headers });
    });
    const page = await ctx.newPage();
    await page.goto(url + '?cb=' + Date.now(), { waitUntil: 'networkidle' });
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1500);
    await page.addStyleTag({ content: `*,*::before,*::after{animation:none!important;transition:none!important}` });
    await page.evaluate(() => {
      document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed'));
    });
    if (vp.name === 'desktop') {
      const debug = await page.evaluate(() => {
        const ids = ['about','services','gallery','testimonials','contact'];
        const out = {};
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) { out[id] = 'missing'; continue; }
          out[id] = getComputedStyle(el).backgroundColor;
        }
        out.body = getComputedStyle(document.body).backgroundColor;
        out.dustyVar = getComputedStyle(document.documentElement).getPropertyValue('--color-dusty-rose').trim();
        out.creamVar = getComputedStyle(document.documentElement).getPropertyValue('--color-cream').trim();
        out.warmTanVar = getComputedStyle(document.documentElement).getPropertyValue('--color-warm-tan').trim();
        out.offWhiteVar = getComputedStyle(document.documentElement).getPropertyValue('--color-off-white').trim();
        return out;
      });
      console.log('[' + variant + ' debug]', JSON.stringify(debug));
    }
    await page.waitForTimeout(300);

    await page.screenshot({ path: `${outDir}/${vp.name}-full.png`, fullPage: true });

    for (const id of sections) {
      const el = await page.$(`#${id}`);
      if (!el) continue;
      if (id === 'hero') {
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(150);
        await page.screenshot({ path: `${outDir}/${vp.name}-${id}.png` });
        continue;
      }
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(200);
      await el.screenshot({ path: `${outDir}/${vp.name}-${id}.png` });
    }

    await ctx.close();
  }
} finally {
  await browser.close();
}
console.log(`Saved screenshots to ${outDir}`);
