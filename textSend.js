
const newTitle =  require("./scraper")
const newLink = require('./scraper')
const { accountSid, authToken } = require("./config");
const client = require("twilio")(accountSid, authToken);


(async(newTitle, newLink) => {
  if(newLink) {
    await client.messages
      .create({
        to: "+19083804770",
        from: "+12564195619",
        body: "***" + newTitle + " ***" + "\n\n" + newLink
      })
      .then((message) => console.log(message.sid));

  }
})();
