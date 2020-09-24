const puppeteer = require("puppeteer");
puppeteer
  .launch({
    headless: true,
    args: [
      '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
    ],
  })
  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto("https://www.reddit.com/new/");
    // await page.screenshot({ path: "example.png" });
    // await page.waitForSelector("body");
    var rposts = await page.evaluate(() => Array.from(document.querySelectorAll(".Post"))


			// let posts = document.body.querySelectorAll('.Post');
			// postItems = [];
			// posts.forEach((item) => {
			// 		let title = item.querySelector('h3').innerText;
			// 		let votes = item.querySelector('[id*=upvote-button]   div').innerText;
			// 		let comments = item.querySelector('.icon-comment   span').innerText;
			// 		let link = item.querySelector('a').href;
			// 		let description = ''
			// 		try{
			// 		description = item.querySelector('p').innerText;
			// 		}catch(e){
			// 		}
			// 		postItems.push({title: title, votes: votes, comments: comments, link: link, description: description});
			// });
			//
			// var items = {
			// 		"posts": postItems
			// };
			// return items;


		);

    console.log(rposts);
    await browser.close();
  })
  .catch(function (error) {
    console.error(error);
  });
