const schedule = require("node-schedule");
const { accountSid, authToken } = require("./config");
const client = require("twilio")(accountSid, authToken);
const newPost = require('./scraper')



console.log(newPost,"1");


const redditNews = async (newPost) => {
    if (newPost) {
      // await schedule.scheduleJob("*/2 * * * *", function () {
      //   console.log("its working 2");
      await client.messages
          .create({
            to: "+19083804770",
            from: "+12564195619",
            body: "***" + newPost + " ***" ,
          })
          .then((message) => console.log(message, message.sid));
      // });
    }
  };
  // console.log(redditNews);
