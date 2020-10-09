const module1 = require("./getPosts")
const schedule = require("node-schedule");
const module2 = require("./postResults")
const module3 = require("./textSend")
module1()
module2()
const schechJob = schedule.scheduleJob("* * * * *", function () {
module3()
});
