let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({ title: String, link: String });
module.exports =  mongoose.model("post", postSchema);  
