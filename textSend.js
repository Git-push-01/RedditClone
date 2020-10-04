const schedule = require("node-schedule");
const { accountSid, authToken } = require("./config");
const client = require("twilio")(accountSid, authToken);
const fetch = require('node-fetch');


 const schechJob = schedule.scheduleJob("*/5 * * * *", function () {
 async function redditNews ()  {
  const response = await fetch('http://localhost:3000/posts');
    const data = await response.json()
    const postTitle = data.map(post => post.title)
    const postLink = data.map(link => link.link)
    console.log(postTitle);
  if (data) {

    await client.messages
      .create({
        to: "+19083804770",
        from: "+12564195619",
        body: "***" + postTitle + "***" + postLink ,
      })
      .then((message) => console.log(message, message.sid));

  }
}

redditNews()
})
