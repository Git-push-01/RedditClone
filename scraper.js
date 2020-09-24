const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://www.reddit.com/r/politics/new/", {
    waitUntil: "networkidle2",
  });
  await page.screenshot({ path: "example.png" });
  await page.waitForSelector("body");
	const postItems = [];
  const rposts = await page.evaluate(() =>
    Array.from(document.querySelectorAll("h3")).map(
      (title) => title.textContent
    )
		
  );
  const links = await page.evaluate(() =>
	Array.from(document.querySelectorAll("a"))
.map(link => link.href)
  );

  console.log(rposts);
	console.log(links)
  await browser.close();
})();
