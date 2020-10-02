const { mongoURI } = require("./config");
const mongoose = require("mongoose");

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log("mongodbConnected"))
  .catch((err) => console.log(err));

const postSchema = new mongoose.Schema({ title: String, link: String });
const Post = mongoose.model("post", postSchema);
const dataObj = require("./scraper")
const newNews = dataObj.then(function(postResult) {
   console.log(postResult, "2")
   })
async function createNewPost(newNews) {
  const post = new Post({title:newNews.title, link:newNews.link});
  const result = await post.save();
  console.log(result);
}
createNewPost();
//
