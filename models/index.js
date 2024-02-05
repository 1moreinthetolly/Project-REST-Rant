require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
console.log('connect to mango:', process.env.MONGO_URI)

module.exports.Place = require ('./places')
module.exports.Comment = require('./comment')