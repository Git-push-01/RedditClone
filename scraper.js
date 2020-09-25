const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/r/politics/new/", {
    waitUntil: "networkidle2",
  });
  await page.screenshot({ path: "example.png" });
  await page.waitForSelector("body");

  const tags = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a")).map((post) => ({
      title: post.innerText,
      link: post.href,
    }))
  );
  console.log(tags);

  await browser.close();
})();
