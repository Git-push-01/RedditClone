const puppeteer = require("puppeteer");
const schedule = require("node-schedule");

async function webscraping() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let dataObj = {};

  await page.goto("https://www.reddit.com/r/politics/new/", {
    waitUntil: "networkidle2",
  });

  await page.waitForSelector("body");

  const tags = await page.evaluate(() =>
    Array.from(document.body.querySelectorAll("a")).map((post) => ({
      title: post.innerText,
      link: post.href,
    }))
  );
  dataObj = {
    title: await tags[18].title,
    link: await tags[19].link,
  };

  return dataObj;

  await browser.close();
}

module.exports = webscraping();
console.log(module.exports, " scraper 1");
