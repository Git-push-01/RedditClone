const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/r/politics/new/", {
    waitUntil: "networkidle2",
  });
  // await page.click('a')
  // await page.setViewport({width: 1000, height: 500})
  // await page.screenshot({ path: "example.png" });
  await page.waitForSelector("body");

  const tags = await page.evaluate(() =>
    Array.from(document.body.querySelectorAll('a')).map((post) => ({
      title: post.innerText,
      link: post.href,
    }))
  );

   console.log(tags[18].title);
   console.log(tags[19].link)
//   tags.forEach(function (value, i) {
//     console.log('%d: %s', i, value);
// });

  await browser.close();
})();
