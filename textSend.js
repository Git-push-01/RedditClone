const { accountSid, authToken } = require("./config");
const client = require("twilio")(accountSid, authToken);
const fetch = require("node-fetch");
const schedule = require("node-schedule");

const PORT = process.env.PORT || 5000


async function redditNews() {

  const response = await fetch("http://localhost:"+PORT+"/posts");
  const data = await response.json()
  const postData = await data.pop();


  if (postData) {
    await client.messages
      .create({
        to: "+19083804770",
        from: "+12564195619",
        body:
          "*** " +
          "Your 8:00AM Headline" +
          " ***" +
          "\n\n" +
          postData.title +
          "\n\n" +
          postData.link,
      })
      .then((message) => console.log(message, message.sid));
  }

}


module.exports = redditNews
console.log(module.exports, "fetch 1");
