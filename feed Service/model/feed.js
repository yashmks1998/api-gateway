var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    name: String
})

mongoose.model('feed', UserSchema)

module.exports = mongoose.model('feed')