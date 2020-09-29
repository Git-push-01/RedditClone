const newTitle = require("./scraper");

const newLink = require("./scraper");

const { accountSid, authToken } = require("./config");
const client = require("twilio")(accountSid, authToken);


const topRedditNews = async(newTitle, newLink) => {
  if(newTitle) {
    await client.messages
      .create({
        to: "+19083804770",
        from: "+12564195619",
        body: "*** " + newTitle + " ***" + newLink,
      })
      .then((message) => console.log(message.sid));
  }
};
