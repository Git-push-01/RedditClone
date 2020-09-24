const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/new/", {waitUntil: 'networkidle2'});
  await page.screenshot({ path: "example.png" });
  await page.waitForSelector("body");
  const rposts = await page.evaluate(() =>
    Array.from(document.querySelectorAll("h3")).map(
      (title) => title.textContent
    )
  );

  console.log(rposts);
  await browser.close();
})();
