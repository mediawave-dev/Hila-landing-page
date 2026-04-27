import { chromium } from 'playwright';
import { mkdirSync } from 'fs';

const out = 'scripts/screenshots/hero-quotes-fixed';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
await ctx.route('**/*', (route) => {
  const headers = { ...route.request().headers(), 'cache-control': 'no-cache' };
  route.continue({ headers });
});
const page = await ctx.newPage();
await page.goto('http://localhost:5173/?cb=' + Date.now(), { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);
await page.evaluate(() => document.querySelectorAll('.scroll-reveal').forEach(el => el.classList.add('revealed')));

// Scroll to first parallax break (between About and Services)
await page.evaluate(() => {
  const services = document.getElementById('services');
  if (services) {
    const top = services.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, top - 700);
  }
});
await page.waitForTimeout(600);
await page.screenshot({ path: `${out}/desktop-parallax-1.png` });

// Scroll to second parallax break (between Gallery and Testimonials)
await page.evaluate(() => {
  const t = document.getElementById('testimonials');
  if (t) {
    const top = t.getBoundingClientRect().top + window.scrollY;
    window.scrollTo(0, top - 700);
  }
});
await page.waitForTimeout(600);
await page.screenshot({ path: `${out}/desktop-parallax-2.png` });

await browser.close();
console.log('done');
