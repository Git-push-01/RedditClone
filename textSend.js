const { accountSid, authToken } = require("./config");
const client = require("twilio")(accountSid, authToken);
const fetch = require("node-fetch");
const schedule = require("node-schedule");

 const schechJob = schedule.scheduleJob("* * * * *", function () {
  async function redditNews() {
    const response = await fetch("0.0.0.0");
    const data = await response.json();
    const postData = data.pop();

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

  redditNews();
 });
