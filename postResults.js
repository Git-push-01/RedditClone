const { mongoURI }= require("./config");
const mongoose = require("mongoose")
const dataObj = require('./scraper')


mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true })

.then(()=> console.log("mongodbConnected"))
.catch(err => console.log(err))

const newRedditPolitics = dataObj => {
  try{
    const newPost = require('./models/dbSchema')
    const topNewPost = new newPost(dataObj)
    return topNewPost.save().catch(err => console.log(err))

  }catch(err){
    console.error(err);;
  }

}
