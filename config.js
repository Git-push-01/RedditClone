const dotenv = require('dotenv');
dotenv.config();
module.exports = {
accountSid: process.env.TWILIO_ACCOUNT_SID,
authToken: process.env.TWILIO_AUTH_TOKEN,
mongoURI: process.env.MONGOURI

};
