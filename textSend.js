
const { accountSid, authToken} = require('./config');
const client = require("twilio")(accountSid, authToken);

client.messages.create({
    to: '+19083800126',
    from: '+12564195619',
    body: 'love you boo'

  }).then((message) => console.log(message.sid));
