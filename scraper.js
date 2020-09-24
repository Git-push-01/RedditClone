const puppeteer = require("puppeteer");

async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/new/", { waitUntil: "networkidle0" });
  await page.screenshot({ path: "example.png" });
  await page.waitForSelector("body");
  const rposts = await page.evaluate(() => Array.from(document.body.querySelectorAll(".Post")));

  console.log(rposts);
  await browser.close();
};
