const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/r/politics/new/", {
    waitUntil: "networkidle2",
  });
  const newsPost = [];
  await page.waitForSelector("body");

  const tags = await page.evaluate(() =>
    Array.from(document.body.querySelectorAll("a")).map((post) => ({
      title: post.innerText,
      link: post.href,
    }))
  );

  const newTitle = tags[18].title;
  const newLink = tags[19].link;
  module.exports = newTitle
  module.exports = newLink



  await browser.close();
})();
