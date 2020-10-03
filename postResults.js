const { mongoURI } = require("./config");
const mongoose = require("mongoose");
// const schedule = require("node-schedule");

// const schechJob = schedule.scheduleJob("* * * * *", function () {
//   console.log("its working 1");
  async function newNews() {
    mongoose
      .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log("mongodbConnected", "2"))
      .catch((err) => console.log(err));
    const dataObj = require("./scraper");
    dataObj.then(async function (postResult) {
      console.log(postResult, "1");
      const postSchema = new mongoose.Schema({ title: String, link: String });
      const post = mongoose.model("post", postSchema);
      const p =  new post({
        title: postResult.title,
        link: postResult.link,
      })
      await p.save()
      console.log(p, "got him");

    });
  }
  newNews();

// });
