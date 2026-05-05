import puppeteer from "puppeteer";

const URL = process.env.SHOOT_URL || "http://localhost:3000";

const profiles = [
  { name: "iphone-se", width: 375, height: 667, dpr: 2 },
  { name: "iphone-14", width: 390, height: 844, dpr: 3 },
  { name: "desktop", width: 1280, height: 800, dpr: 2 },
];

const browser = await puppeteer.launch({ headless: "new" });

for (const p of profiles) {
  const page = await browser.newPage();
  await page.setViewport({
    width: p.width,
    height: p.height,
    deviceScaleFactor: p.dpr,
    isMobile: p.name !== "desktop",
    hasTouch: p.name !== "desktop",
  });
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  // small settle
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({
    path: `/tmp/synced-${p.name}-top.png`,
    fullPage: false,
  });
  await page.screenshot({
    path: `/tmp/synced-${p.name}-full.png`,
    fullPage: true,
  });
  // also dump scroll metrics
  const metrics = await page.evaluate(() => ({
    docW: document.documentElement.scrollWidth,
    docH: document.documentElement.scrollHeight,
    viewW: window.innerWidth,
    viewH: window.innerHeight,
    horizontalOverflow:
      document.documentElement.scrollWidth - window.innerWidth,
  }));
  console.log(p.name, JSON.stringify(metrics));
  await page.close();
}
await browser.close();
