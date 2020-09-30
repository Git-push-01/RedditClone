const puppeteer = require("puppeteer");
const schedule = require("node-schedule");

const schechJob = schedule.scheduleJob("*/2 * * * *", function () {
  console.log("its working 1");
  (async () => {
    const newPost = [];
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

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

    const newPostTitle = tags[18].title;
    const newPostlink = tags[19].link;
    newPost.push(newPostTitle);
    newPost.push(newPostlink);
    module.exports = newPost.toString();

    console.log(newPost.toString());

    await browser.close();
  })();
});
