const { mongoURI } = require("./config");
const Post = require("./postSchema");

const express = require("express");
const schedule = require("node-schedule");

// const schechJob = schedule.scheduleJob("* * * * *", function () {
// Initialize app
const app = express();

// Mongoose connection
const mongoose = require("mongoose");
mongoose.connect(mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const allPosts = app.get("/posts", function (req, res) {
  let getPosts = Post.find({}, function (err, getPosts) {
    if (err) {
      console.log(err);
    } else {
      res.json(getPosts);
      return;
    }
  });
});

// Start server with port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("Server started on localhost:3000");
});

module.exports = allPosts;
