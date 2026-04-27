import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { resolve } from 'path';

const variant = process.argv[2] || 'baseline';
const url = 'http://localhost:5173/';
const outDir = resolve(`scripts/screenshots/${variant}`);
mkdirSync(outDir, { recursive: true });

const viewports = process.env.MOBILE_AUDIT
  ? [
      { name: 'mobile-320', width: 320, height: 568 },
      { name: 'mobile-375', width: 375, height: 812 },
      { name: 'mobile-390', width: 390, height: 844 },
      { name: 'mobile-412', width: 412, height: 915 },
      { name: 'landscape-812', width: 812, height: 375 },
    ]
  : [
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
    if (process.env.MOBILE_AUDIT) {
      const overflow = await page.evaluate(() => {
        const docW = document.documentElement.clientWidth;
        const offenders = [];
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > docW + 1 || r.left < -1) {
            offenders.push({
              tag: el.tagName,
              cls: (typeof el.className === 'string' ? el.className : '').slice(0, 80),
              right: Math.round(r.right),
              left: Math.round(r.left),
            });
          }
        });
        const bodyScrollW = document.body.scrollWidth;
        return { docW, bodyScrollW, hasHorizontalScroll: bodyScrollW > docW, count: offenders.length, sample: offenders.slice(0, 8) };
      });
      console.log(`[${vp.name}] hScroll=${overflow.hasHorizontalScroll} bodyW=${overflow.bodyScrollW} docW=${overflow.docW} offenders=${overflow.count}`);
      if (overflow.count > 0) console.log(`    sample:`, JSON.stringify(overflow.sample));
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
