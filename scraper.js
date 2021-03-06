const puppeteer = require("puppeteer");

async function webscraping() {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();
  let dataObj = {};

  await page.goto("https://www.reddit.com/r/politics/new/", {
    waitUntil: "networkidle2",
  });

  const tags = await page.evaluate(() =>
    Array.from(document.querySelectorAll("a")).map((post) => ({
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
