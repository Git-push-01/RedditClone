const newPost = require("./scraper");
const schedule = require('node-schedule');

const { accountSid, authToken } = require("./config");
const client = require("twilio")(accountSid, authToken);
console.log(newPost);

const sendPost = async (newPost) => {

if(newPost){
 await schedule.scheduleJob('*/2 * * * *', function(){
  console.log('its working 2');
   client.messages
      .create({
        to: "+19083804770",
        from: "+12564195619",
        body: "***" + newPost + " ***" + "\n\n" + newPost,
      })
      .then((message) => console.log(message, message.sid));


  })

};
}
