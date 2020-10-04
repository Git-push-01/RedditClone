const { mongoURI } = require("./config");
const mongoose = require("mongoose");
const Post  = require("./postSchema")
 const schedule = require("node-schedule");

  const schechJob = schedule.scheduleJob("*/2 * * * *", function () {

  async function newNews() {
    mongoose
      .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("mongodbConnected", "2"))
      .catch((err) => console.log(err));
    const dataObj = require("./scraper");
    dataObj.then(async function (postResult) {
      console.log(postResult, "1");
      const p =  new Post({
        title: postResult.title,
        link: postResult.link,
      })
      await p.save()
      console.log(p, "got him");

    });
  }
  newNews();

  });
