const mongoose = require("mongoose")
const Schema = mongoose.Schema
const postSchema = new Schema({
title: String,
link: String
})
 
module.exports = mongoose.model('post', postSchema)
