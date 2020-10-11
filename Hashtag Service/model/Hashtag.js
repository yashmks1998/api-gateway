var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: String
})

mongoose.model('Hashtag', UserSchema)

module.exports = mongoose.model('Hashtag')